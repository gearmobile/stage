
// INIT MASONRY
var gridBlog = $('.blog-content__grid').masonry({
    itemSelector: '.blog-content__item',
    percentPosition: true,
    columnWidth: '.blog-content__sizer'
});

// LAYOUT ISOTOPE AFTER EACH IMAGE LOADS
gridBlog.imagesLoaded().progress( function () {
    gridBlog.masonry();
});



