
// PAGE BLOG GRID
// -----------------------------------------------------------

var imagesload = require( 'imagesloaded' );
var Isotope = require( 'isotope-layout' );

var pageBlogGrid = document.querySelector( '.page-blog .grid' );
var pageBlogSizer = '.page-blog .grid__sizer';
var pageBlogItem = '.page-blog .grid__item';
var blogGrid;

imagesload( pageBlogGrid, function () {
    blogGrid = new Isotope( pageBlogGrid, {
        itemSelector: pageBlogItem,
        percentPosition: true,
        masonry: {
            columnWidth: pageBlogSizer
        }
    });
});

module.exports = {};
