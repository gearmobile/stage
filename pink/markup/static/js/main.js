'use strict';

const FontFaceObserver = require( 'fontfaceobserver' );


// LOAD FONTS
// ------------------------------------------
const openSansLight = new FontFaceObserver('open_sanslight');
const openSansRegular = new FontFaceObserver('open_sansregular');
const openSansSemiBold = new FontFaceObserver('open_sanssemibold');
const openSansBold = new FontFaceObserver('open_sansbold');

// PAGE INDEX
// ----------------------------------------------------------
require( '../../components/block-topheader/block-topheader' );

window.addEventListener( 'load', function () {
    console.log( window.devicePixelRatio );
}, false );
