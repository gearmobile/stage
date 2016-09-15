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
// require( '../../components/block-information/block-information' );
// require( '../../components/block-price/block-price' );
require( '../../components/block-overlay/block-overlay' );
require( '../../components/block-header/block-header' );
require( '../../components/block-reviews/block-reviews' );
require( '../../components/block-photo/block-photo' );
require( '../../components/block-contacts/block-contacts' );
