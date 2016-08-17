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
require( '../../components/block-reviews/block-reviews' );
// require( '../../components/block-contacts/block-contacts' );

console.log( 'Pixel Ratio is ' + window.devicePixelRatio );
