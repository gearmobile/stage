var Isotope = require('isotope-layout');
var imagesload = require('imagesloaded');
// --------------------------------------------------
window.addEventListener( 'load', function () {
    // --------------------------------------------------
    // ISOTOPE LAYOUT
    // --------------------------------------------------
    var grid = document.querySelector( '.recent-grid__main' );
    var gridItem = '.recent-grid__item';
    var gridSizer = '.recent-grid__sizer';
    var gridControl = document.querySelector( '.recent-grid__control' );
    var iso;
    // ------------------------------------------------------
    imagesload( grid, function () {
        iso = new Isotope( grid, {
            itemSelector: gridItem,
            percentPosition: true,
            masonry: {
                columnWidth: gridSizer
            }
        });
    });
    // ------------------------------------------------------
    // BIND FILTER BUTTON CLICK
    // ------------------------------------------------------
    gridControl.addEventListener( 'click', function ( event ) {
        iso.arrange({ filter: event.target.getAttribute( 'data-filter' ) });
    });
    // ------------------------------------------------------
    // GALLERY SHOW MORE BUTTON
    // ------------------------------------------------------
    var gridBtn = document.querySelector( '.recent-grid__button' );
    var numberRows = 0;
    var item;
    var numberRowsCounter = 4;
    var gridItems = document.querySelectorAll( '.recent-grid__item' );
    gridBtn.addEventListener( 'click', function () {
        var elems = [];
        if ( window.innerWidth >= 980 ) {
            for ( var i = 0; i < 3; i++ ) {
                item = gridItems[ Math.floor( Math.random() * gridItems.length ) ].cloneNode( true );
                elems.push( item );
            }
        } else if ( window.innerWidth < 980 ) {
            for ( var j = 0; j < 2; j++ ) {
                item = gridItems[ Math.floor( Math.random() * gridItems.length ) ].cloneNode( true );
                elems.push( item );
            }
        }
        iso.insert( elems );
        ++numberRows;
        if ( numberRows >= numberRowsCounter ) {
            document.querySelector( '.recent-grid__main' ).style.marginBottom = 0;
            gridBtn.onclick = null;
            gridBtn.style.display = 'none';
        }
    }, false );
}, false );
