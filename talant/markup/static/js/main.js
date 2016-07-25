'use strict';

var swiper = require( 'swiper' );
var GoogleMapsLoader = require( 'google-maps' );
var imagesload = require( 'imagesloaded' );
var Isotope = require( 'isotope-layout' );


function equalHeight( items ) {

    // MAX HEIGHT VALUE
    var maxHeight = 0;

    // GET ALL LIST ITEMS
    var listItems = document.querySelectorAll( items );

    // GET TALLEST LIST ITEM VALUE
    for ( var i = 0; i < listItems.length; i++ ) {
        listItems[i].style.height = 'auto';
        var listItemHeight = listItems[i].offsetHeight;
        maxHeight = maxHeight < listItemHeight ? listItemHeight : maxHeight;
    }

    // SET HEIGHT FOR ALL LIST ITEMS
    for ( var j = 0; j < listItems.length; j++ ) {
        listItems[j].style.height = maxHeight + 'px';
    }

}

window.addEventListener( 'load', function () {

    // TESTIMONIALS SLIDER
    // ------------------------------------

    swiper( '.testimonials .swiper-container', {
        pagination: '.testimonials .swiper-pagination',
        paginationClickable: true
    });

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

}, false );


// BLOG GRID
// ------------------------------------

window.addEventListener( 'load', function () {
    equalHeight( '.blog__item' );
}, false );

window.addEventListener( 'resize', function () {
    equalHeight( '.blog__item' );
}, false );








// TOPHEADER HIDE AND SHOW
// ------------------------------------

//var topHeader = document.querySelector( '.topheader' );
//var topOffset = 110;
//
//window.addEventListener( 'scroll', function () {
//    var scrollOffset = window.pageYOffset || document.documentElement.scrollTop;
//    if ( scrollOffset > topOffset ) {
//        topHeader.classList.add( 'is-hidden' );
//    } else {
//        topHeader.classList.remove( 'is-hidden' );
//    }
//}, false );














