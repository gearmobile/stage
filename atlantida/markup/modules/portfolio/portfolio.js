var grid = $('.gallery');
var buttons = $('.filtering');
var galleryItem = $('.gallery__item');

grid.isotope({
    itemSelector: '.gallery__item',
    percentPosition: true,
    masonry: {
        columnWidth: '.gallery__sizer'
    }
});

buttons.on('click', 'a', function () {
    var filterValue = $( this ).attr('data-filter');
    grid.isotope({ filter: filterValue });
});

galleryItem.magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom',
    image: {
        verticalFit: true
    },
    zoom: {
        enabled: true,
        duration: 300 // don't foget to change the duration also in CSS
    }
});
