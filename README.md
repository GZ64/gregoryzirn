# My personnal website
It is a website that presents my background, my skills and my perspectives.

## Table of Contents

* [Website](#Website)
* [Gulp](#Gulp)
* [Hooks](#Hooks)
* [Api](#Api)
* [Use-case](#Use-case)
* [Available Scripts](#Available-Scripts)
* [Folder Structure](#Folder-Structure)

### Website

It's a website made in HTML (twig), javascript (ES6) and css (SASS). 
The project is managed by a task runner who allows the compilation of files, 
the creation of builds and the putting into production of the website.

The website uses among others the following libraries:
- [Materialize css v1.0.0](https://materializecss.com/) for the style of front based on material guidelines.
- [Gulp v5.0.0](https://gulpjs.com/) for the tasks runner.
- [@glidejs/glide v3.6.2](https://www.npmjs.com/package/@glidejs/glide) for the carousel at Portfolio section.

### Gulp


For the website build, I use version 5 of Gulp. It allows me to compile twig, 
sass and ES6 files. It allows you to do other tasks but this is explained later in 
this documentation

The task runner uses among others the following libraries:
- [webpack-stream v7.0.0](https://www.npmjs.com/package/webpack-stream)
- [gulp-sass v5.1.0](https://www.npmjs.com/package/gulp-sass)
- [sass v1.79.4](https://www.npmjs.com/package/sass)
- [gulp-twig v1.2.0](https://www.npmjs.com/package/gulp-twig)
- [delete v1.1.0](https://www.npmjs.com/package/delete)
- [gulp-cache v1.1.3](https://www.npmjs.com/package/gulp-cache)
- [gulp-imagemin v7.1.0](https://www.npmjs.com/package/gulp-imagemin)
- [gulp-robots v2.0.4](https://www.npmjs.com/package/gulp-robots)
- [favicons v5.3.0](https://www.npmjs.com/package/favicons)
- [fancy-log v2.0.0](https://www.npmjs.com/package/fancy-log)
- [gulp-file v0.4.0](https://www.npmjs.com/package/gulp-file)
- [gulp-inject v5.0.5](https://www.npmjs.com/package/gulp-inject)
- [gulp-useref v5.0.0](https://www.npmjs.com/package/gulp-useref)
- [gulp-if v3.0.0](https://www.npmjs.com/package/gulp-if)
- [gulp-terser v2.1.0](https://www.npmjs.com/package/gulp-terser)
- [gulp-clean-css v4.3.0](https://www.npmjs.com/package/gulp-clean-css)
- [gulp-livereload v4.0.2](https://www.npmjs.com/package/gulp-livereload)
- [gulp-zip v5.1.0](https://www.npmjs.com/package/gulp-zip)
- [gulp-git v2.11.0](https://www.npmjs.com/package/gulp-git)
- [vinyl-ftp v0.6.1](https://www.npmjs.com/package/vinyl-ftp)

The application is managed thanks to Redux to decentralize the
logical development and to centralize the states.


The action files are :
- `/src/actions/BasketAction.js`
- `/src/actions/RequestAPIAction.js`
- `/src/actions/RequestOffersAction.js`

Reducers files are :
- `/src/reducers/api.js`
- `/src/reducers/basket.js`
- `/src/reducers/index.js`
- `/src/reducers/offersApi.js`

The container files or are connected the components are:
- `/src/containers/ShowBasket.js`
- `/src/containers/ShowBooks.js`
- `/src/containers/ShowDetailsBook.js`<br />
The containers are responsible for updating the UI

### Hooks
For pure functional components the application uses hooks
to manage the local state (useState ()).

`const [basketChecked, setBasketChecked] = React.useState(basketList.indexOf(isbn) !== -1);`

To simulate life cycles the application uses useEffect ()

`//effect hook equivalent to componentDidUpdate
     useEffect(() => {
         toggleDrawer('left', open, true)({type: '', key: ''});
     }, [open]);`

- [React Hooks](https://fr.reactjs.org/docs/hooks-intro.html)

### Api

The application uses the axios library. Promise based HTTP client for the browser and node.js
the application use a thunk to manage the asynchronous call.

The entry point are in get method:
- `http://henri-potier.xebia.fr/books`
- `http://henri-potier.xebia.fr/books/c8fabf68-8374-48fe-a7ea-a00ccd07afff,a460afed-e5e7-4e39-a39d-c885
   c05db861/commercialOffers`

The application uses a proxy to perform the queries and thus avoid cross domain errors.

- [Proxy](https://cors-anywhere.herokuapp.com/)

### Use case

The user arrives on the home page and can navigate through the menu.

Livres: The user can view all books and put them in his basket by clicking on the icon caddy.
He can visualize part of the synopsis by clicking on the arrow on the map. He can also access
the sheet of the book with the detail of the film.

Panier: On this view, the user can view his cart and choose the quantities he wants.

Throughout the navigation the user can perform a quick search with the field located in the
upper and fixed part of the application. He lands on the detail page of the book.

The basket is stored in real time in a cookie to provide a user experience and more.

## Available Scripts

Launches the dependencies install.<br>

### `npm install`

In the project directory, you can run (line command):

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run test:unit`

Launches the test runner.<br>

### `npm run build`


## Folder Structure

The skeleton of the application is built around the
Rails-style design pattern.
After clone, your project should look like this:

```
public/
  favicon.ico
  index.html
src/
  actions/
  components/
  constants/
  containers/
  reducers/
  App.js
  index.js
tests/
  Action.spec.js
  Api.spec.js
  ApiOffers.spec.js
  Basket.spec.js
  Components.spec.js
  dom.js
  helpers.js
  Reducer.spec.js
  SpanningTable.spec
.babelrc
.env
muiTheme.js
package.json
package-lock.json
README.md
webpack.config.js
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.
