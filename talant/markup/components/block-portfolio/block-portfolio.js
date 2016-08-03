// PORTFOLIO
// ------------------------------------

var imagesload = require( 'imagesloaded' );
var Isotope = require( 'isotope-layout' );

window.addEventListener( 'load', function () {

    // PORTFOLIO VARIABLES
    // ------------------------------------
    var portfolio = document.querySelector( '.portfolio__grid' );
    var portfolioItem = '.portfolio__item';
    var portfolioSizer = '.portfolio__sizer';
    var portfolioControl = document.querySelector( '.portfolio__controls' );
    var iso;

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

    // PORTFOLIO FILTERING
    // ------------------------------------

    portfolioControl.addEventListener( 'click', function ( event ) {
        iso.arrange({ filter: event.target.getAttribute( 'data-filter' ) });
    });
}, false );
