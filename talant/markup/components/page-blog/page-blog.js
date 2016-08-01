
// PAGE BLOG GRID
// -----------------------------------------------------------

var imagesLoaded = require( 'imagesloaded' );
var IsotopeBlog = require( 'isotope-layout' );

window.addEventListener( 'load', function () {
    var blogGrid = document.querySelector( '.page-blog__main .blog-grid' );
    var blogGridSizer = '.blog-grid__sizer';
    var blogGridItem = '.blog-grid__item';
    var blogLayout;

    imagesLoaded( blogGrid, function () {
        blogLayout = new IsotopeBlog( blogGrid, {
            itemSelector: blogGridItem,
            percentPosition: true,
            masonry: {
                columnWidth: blogGridSizer
            }
        });
    });
});
