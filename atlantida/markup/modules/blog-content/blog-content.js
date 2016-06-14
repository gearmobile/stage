

// VARIABLES
// -------------------------------------------------------------
var gridBlog = $('.blog-content__grid');

// MASONRY LAYOUT
// -------------------------------------------------------------
gridBlog.isotope({
    itemSelector: '.blog-content__item',
    percentPosition: true,
    masonry: {
        columnWidth: '.blog-content__sizer'
    }
});

// LAYOUT ISOTOPE AFTER EACH IMAGE LOADS
// -------------------------------------------------------------
gridBlog.imagesLoaded().progress( function () {
    gridBlog.isotope('layout');
});

