const imagesLoaded = require( 'imagesloaded' );
const Isotope = require( 'isotope-layout' );

window.addEventListener( 'load', function () {
    let grid = document.querySelector('#gallery');
    imagesLoaded( grid, function () {
        let iso = new Isotope( grid, {
            itemSelector: '.gallery__item',
            percentPosition: true,
            masonry: {
                columnWidth: '.gallery__sizer'
            }
        });
    });
}, false );
