'use strict';

var swiper = require('swiper');
var GoogleMapsLoader = require('google-maps');
var imagesload = require('imagesloaded');
var Isotope = require('isotope-layout');


// TOPHEADER HIDE AND SHOW
// ------------------------------------

var topHeader = document.querySelector( '.topheader' );
var topOffset = 110;

window.addEventListener( 'scroll', function () {
    var scrollOffset = window.pageYOffset || document.documentElement.scrollTop;
    if ( scrollOffset > topOffset ) {
        topHeader.classList.add( 'is-hidden' );
    } else {
        topHeader.classList.remove( 'is-hidden' );
    }
}, false );


// PORTFOLIO
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
    event.preventDefault();
    iso.arrange({ filter: event.target.getAttribute( 'data-filter' ) });
});






















