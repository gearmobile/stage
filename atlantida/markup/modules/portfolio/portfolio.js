// VARIABLES
// -------------------------------------------------------------
var grid = $('.gallery');
var buttons = $('.filtering');
var galleryItem = $('.gallery__item');


// MASONRY LAYOUT
// -------------------------------------------------------------
grid.isotope({
    itemSelector: '.gallery__item',
    percentPosition: true,
    masonry: {
        columnWidth: '.gallery__sizer'
    }
});


// LAYOUT ISOTOPE AFTER EACH IMAGE LOADS
// -------------------------------------------------------------
grid.imagesLoaded().progress( function () {
    grid.isotope('layout');
});


// ISOTOPE FILTERING
// -------------------------------------------------------------
buttons.on('click', 'a', function () {
    var filterValue = $( this ).attr('data-filter');
    grid.isotope({ filter: filterValue });
});


// MAGNIFIC POPUP
// -------------------------------------------------------------
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
        duration: 300
    }
});
