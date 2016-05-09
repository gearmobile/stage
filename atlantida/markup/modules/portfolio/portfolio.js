
var $portfolioGrid = $('.portfolio-gallery');

$portfolioGrid.masonry({
    itemSelector: '.portfolio-gallery__item',
    percentPosition: true,
    columnWidth: '.portfolio-gallery__sizer',
    layoutMode: 'fitRows'
});

$portfolioGrid.imagesLoaded().progress( function () {
    $portfolioGrid.masonry();
});

$('.portfolio-filtering').on( 'click', 'a', function () {
    var filterValue = $( this ).attr('data-filter');
    // filterValue = filterFns[ filterValue ] || filterValue;
    $portfolioGrid.isotope({ filter: filterValue });
});
