'use strict';

const {src, dest, series, watch, lastRun, parallel} = require('gulp');
const webpackStream = require('webpack-stream');
const gulpSass = require('gulp-sass')(require('sass'));
const gulpTwig = require('gulp-twig');
const content = require('./content/content');
const del = require('delete');
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const gulpRobots = require('gulp-robots');
const favicons = require('favicons');
const log = require('fancy-log');
const path = require('path');
const fs = require('fs');
const file = require('gulp-file');
const inject = require('gulp-inject');
const useref = require('gulp-useref');
const gulpif = require('gulp-if');
const terser = require('gulp-terser');
const minifyCss = require('gulp-clean-css');
const livereload = require('gulp-livereload');
const zip = require('gulp-zip');
const git = require('gulp-git');
const cnx = require('./content/cnx');
const ftp = require( 'vinyl-ftp' );

function getSrc(globPattern, options = {}) {
    return src(globPattern, { sourcemaps: true,  ...options });
}

function webpack() {
    return getSrc('js/*.js', { since: lastRun(webpack)})
        .pipe(webpackStream({
            mode: "development",
            output: {
                filename: 'main.js',
            },
        }))
        .pipe(dest('output/'));
}

function sass() {
    return getSrc('./sass/materialize.scss', { since: lastRun(sass) })
        .pipe(gulpSass())
        .pipe(dest('./css', { sourcemaps: true }));
}

function twig() {
    return getSrc('./templates/index.twig', { since: lastRun(twig) })
        .pipe(gulpTwig({
            data: content
        }))
        .pipe(dest('./'));
}

function clean() {
    return del(['css', 'output', 'index.html']);
}

async function img() {
    try {
        return getSrc('img/**/*', { since: lastRun(img) })
            .pipe(cache(imagemin()))
            .pipe(dest('dist/img'));
    } catch (error) {
        console.error('Error in img task:', error);
    }
}

function fonts() {
    return getSrc("fonts/**/*.*", { since: lastRun(fonts) })
        .pipe(dest('dist/fonts'));
}

function files() {
    return getSrc("files/**/*.*", { since: lastRun(files) })
        .pipe(dest('dist/files'));
}

function robots() {
    return getSrc('index.html', { since: lastRun(robots) })
        .pipe(gulpRobots({
            useragent: '*',
            allow: [],
            disallow: ['/libs/', '/certifications/']
        }))
        .pipe(dest('dist/'));
}



// Générer les favicons
function generateFavicons(done) {
    const config = {
        appName: "App Name",
        appShortName: "Short Name",
        appDescription: "App description",
        developerName: "Your Name",
        developerURL: "https://yourwebsite.com",
        path: "/",
        dir: "auto",
        lang: "en-US",
        icons: {
            android: true,              // Create Android homescreen icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }` or an array of sources
            appleIcon: true,            // Create Apple touch icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }` or an array of sources
            appleStartup: true,         // Create Apple startup images. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }` or an array of sources
            coast: true,                // Create Opera Coast icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }` or an array of sources
            favicons: true,             // Create regular favicons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }` or an array of sources
            firefox: true,              // Create Firefox OS icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }` or an array of sources
            windows: true,              // Create Windows 8 tile icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }` or an array of sources
            yandex: true                // Create Yandex browser icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }` or an array of sources
        }
    };

    favicons('./img/logo_greg.svg', config, (err, response) => {
        if (err) {
            log(err.message);
            done(err);
        } else {
            // Sauvegarder les images générées
            response.images.forEach(image => {
                const imagePath = path.join('./dist', image.name); // Créer le chemin de destination
                fs.writeFileSync(imagePath, image.contents); // Sauvegarder l'image
            });

            // Sauvegarder les fichiers manifestes JSON
            response.files.forEach(file => {
                const filePath = path.join('./dist', file.name); // Chemin pour les fichiers JSON
                fs.writeFileSync(filePath, file.contents);
            });

            // Sauvegarder les balises HTML dans un fichier temporaire
            const htmlPath = './dist/favicon.html';
            fs.writeFileSync(htmlPath, response.html.join('\n'));
            console.log('Fichier favicon.html généré avec succès:', htmlPath);

            done();
        }
    });
}

// Injecter les favicons dans index.html
function injectFavicons() {
    const faviconHtmlPath = './dist/favicon.html';

    // Vérifier que le fichier favicon.html existe bien
    if (!fs.existsSync(faviconHtmlPath)) {
        console.error(`Erreur: Le fichier ${faviconHtmlPath} n'existe pas.`);
        return;
    }

    // Créer un flux à partir du contenu de favicon.html avec gulp-file
    const faviconFile = file('./dist/favicon.html', fs.readFileSync(faviconHtmlPath), { src: true });

    // Cible : index.html où nous allons injecter les favicons
    return getSrc('./index.html', {since: lastRun(injectFavicons), read: true})
        .pipe(inject(faviconFile, {
            starttag: '<!-- inject:head:html -->',
            transform: function (filePath, file) {
                return file.contents.toString(); // Injecter le contenu des favicons
            }
        }))
        .pipe(dest('./')); // Sauvegarder dans le dossier dist
}

function dist() {
    getSrc(['.htaccess', 'sitemap.xml'], { since: lastRun(dist) }).pipe(dest('dist'));
    return getSrc('index.html', { since: lastRun(dist) })
        .pipe(useref())
        .pipe(gulpif('*.js', terser()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(dest('./dist'));
}

function watcher() {
    livereload.listen();
    watch(['js/*.js', 'sass/*scss', 'templates/*.twig'],{ ignoreInitial:false }, series(webpack, sass, twig)).on('change', function (e) {
        livereload.changed(e.path);
    });
}

function prod() {
    return getSrc('dist/**/*', { since: lastRun(prod) })
    .pipe(zip('dist.zip'))
    .pipe(dest('.'));
}

async function push() {
    try {
        await git.push('origin', 'master');
        console.log('Pushed successfully');
    } catch (err) {
        console.error('Error during git push:', err);
    }
}

async function deploy() {
    let globs = [
        'dist/**',
    ];

    cnx.log = log;
    try {
        var conn = await ftp.create( cnx );
        console.log('connected to ftp');
    } catch (err) {
        console.error('Error during connecting to ftp:', err);
    }

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance

    try {
        return getSrc( globs, { since: lastRun(deploy), base: 'dist/', buffer: false, matchBase: true } )
            .pipe( conn.newer( '/public_html' ) ) // only upload newer files
            .pipe( conn.dest( '/public_html' ) );
    } catch (error) {
        console.error('Error in deploy task:', error);
    }

}

function clearCache(done) {
    return cache.clearAll(done);
}

const build = parallel(sass, twig, webpack);

module.exports = {
    build,
    dist: series(build, img, fonts, files, generateFavicons, injectFavicons, robots, dist),
    watch: series(clean, watcher),
    prod,
    deploy,
    push,
    clean,
    img,
    clearCache
}