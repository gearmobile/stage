'use strict';

var swiper = require('swiper');
var GoogleMapsLoader = require('google-maps');
var imagesload = require('imagesloaded');
var Isotope = require('isotope-layout');


// TOPHEADER HIDE AND SHOW
// ------------------------------------

var topHeader = document.querySelector( '.topheader' );
//var topHeaderMenuPrimary = document.querySelector( '.topheader__menu--primary' );
var topOffset = 110;

window.addEventListener( 'scroll', function () {
    var scrollOffset = window.pageYOffset || document.documentElement.scrollTop;
    if ( scrollOffset > topOffset ) {
        topHeader.classList.add('is-hidden');
    } else {
        topHeader.classList.remove('is-hidden');
    }
}, false );






























