'use strict';

const {src, dest, series, watch, lastRunn} = require('gulp');
let webpackStream = require('webpack-stream');
const gulpSass = require('gulp-sass')(require('sass'));
let gulpTwig = require('gulp-twig');
let content = require('./content/content');
let imagemin = require('gulp-imagemin');
let gulpClean = require('gulp-clean');
const del = require('delete');
let gulpRobots = require('gulp-robots');
let gulpFavicons = require("favicons").stream;
let log = require('fancy-log');
const inject = require('gulp-inject');
const file = require('gulp-file');
const path = require('path');
const fs = require('fs');
const favicons = require('favicons');
let useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify-es').default,
    minifyCss = require('gulp-clean-css');
let livereload = require('gulp-livereload');
let zip = require('gulp-zip');
let git = require('gulp-git');
let cnx = require('./content/cnx');
let ftp = require( 'vinyl-ftp' );

function webpack() {
    return src('js/*.js')
        .pipe(webpackStream({
            mode: "development",
            output: {
                filename: 'main.js',
            },
        }))
        .pipe(dest('output/'));
}

function sass() {
    return src('./sass/materialize.scss')
        .pipe(gulpSass())
        .pipe(dest('./css'));
}

function twig() {
    return src('./templates/index.twig')
        .pipe(gulpTwig({
            data: content
        }))
        .pipe(dest('./'));
}

function clean() {
    return del(['css', 'output', 'index.html']);
}

function img() {
    return src('img/**/*', {since: lastRunn})
        .pipe(imagemin())
        .pipe(dest('dist/img'));
}

function fonts() {
    return src("fonts/**/*.*")
        .pipe(dest('dist/fonts'));
}

function files() {
    return src("files/**/*.*")
        .pipe(dest('dist/files'));
}

function robots() {
    return src('index.html')
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

    favicons('./img/logo_gregory.png', config, (err, response) => {
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
    return src('./index.html', {read: true})
        .pipe(inject(faviconFile, {
            starttag: '<!-- inject:head:html -->',
            transform: function (filePath, file) {
                return file.contents.toString(); // Injecter le contenu des favicons
            }
        }))
        .pipe(dest('./')); // Sauvegarder dans le dossier dist
}

function dist() {
    src(['.htaccess', 'sitemap.xml']).pipe(dest('dist'));
    return src('index.html')
        .pipe(useref())
        // .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(dest('./dist'));
}

function watcher() {
    livereload.listen();
    watch(['js/*.js', 'sass/*scss', 'templates/*.twig'],{ ignoreInitial:false }, webpack, sass, twig).on('change', function (e) {
        livereload.changed(e.path);
    });
}

function prod() {
    return src('dist/*')
    .pipe(zip('dist.zip'))
    .pipe(dest('.'));
}

function push() {
    return git.push('origin', 'master', function (err) {
        if (err) throw err;
    });
}

function deploy() {
    let globs = [
        'dist/**',
    ];

    cnx.log = log;
    let conn = ftp.create( cnx );

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance

    return src( globs, { base: 'dist/', buffer: false, matchBase: true } )
        .pipe( conn.newer( '/public_html' ) ) // only upload newer files
        .pipe( conn.dest( '/public_html' ) );

}

module.exports = {
    webpack,
    sass,
    twig,
    clean,
    img,
    fonts,
    files,
    robots,
    favicons: series(generateFavicons, injectFavicons),
    dist: series(webpack, sass, twig, img, fonts, files, generateFavicons, injectFavicons, robots, dist, clean),
    watch: series(clean, watcher),
    prod
}