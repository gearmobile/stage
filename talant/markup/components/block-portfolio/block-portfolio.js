// ------------------------------------
// PORTFOLIO
// ------------------------------------
const imagesload = require( 'imagesloaded' );
const Isotope = require( 'isotope-layout' );
// ------------------------------------
window.addEventListener( 'load', function () {
    // ------------------------------------
    // PORTFOLIO VARIABLES
    // ------------------------------------
    const portfolio = document.querySelector( '.portfolio__grid' );
    const portfolioItem = '.portfolio__item';
    const portfolioSizer = '.portfolio__sizer';
    const portfolioControl = document.querySelector( '.portfolio__controls' );
    let iso;
    // ------------------------------------
    // PORTFOLIO LAYOUT
    // ------------------------------------
    imagesload( portfolio, function () {
        iso = new Isotope( portfolio, {
            itemSelector: portfolioItem,
            percentPosition: true,
            masonry: {
                columnWidth: portfolioSizer
            }
        });
    });
    // ------------------------------------
    // PORTFOLIO FILTERING
    // ------------------------------------
    portfolioControl.addEventListener( 'click', function ( event ) {
        iso.arrange({ filter: event.target.getAttribute( 'data-filter' ) });
    });
    // ------------------------------------
}, false );
