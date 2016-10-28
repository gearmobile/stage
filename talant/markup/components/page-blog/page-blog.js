// -----------------------------------------------------------
// PAGE BLOG GRID
// -----------------------------------------------------------
const imagesLoaded = require( 'imagesloaded' );
const IsotopeBlog = require( 'isotope-layout' );
// -----------------------------------------------------------
window.addEventListener( 'load', function () {
    const blogGrid = document.querySelector( '.page-blog__main .blog-grid' );
    const blogGridSizer = '.blog-grid__sizer';
    const blogGridItem = '.blog-grid__item';
    let blogLayout;
    // -------------------------------------------------------
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
// ----------------------------------------------------------
