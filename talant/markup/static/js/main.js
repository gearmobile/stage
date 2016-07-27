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


    // HEADER SLIDER
    // ------------------------------------
    swiper( '.header .swiper-container', {
        nextButton: '.header .swiper-button-next',
        prevButton: '.header .swiper-button-prev',
        loop: true,
        breakpoints: {
            768: {
                autoplay: 2000,
                speed: 800,
                grabCursor: true
            },
            500: {
                effect: 'fade',
                grabCursor: false
            }
        }
    });

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


    // GOOGLE MAPS
    // ------------------------------------

    GoogleMapsLoader.load( function ( google ) {

        GoogleMapsLoader.LANGUAGE = 'en';
        GoogleMapsLoader.KEY = 'AIzaSyAjunIsdBzwn5n0IhHJctIg4PPCMlH7u24';
        var brampton = document.querySelector( '#map' );
        var bramptonCoords = new google.maps.LatLng( 51.5220535, 0.0419289 );
        var zoomValue = 15;
        var markerPath = 'static/img/assets/block-map/location-icon.png';

        var bramptonMapStyles = [
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#e9e9e9'}, {lightness: 17}]
            },
            {
                featureType: 'landscape',
                elementType: 'geometry',
                stylers: [{color: '#f5f5f5'}, {lightness: 20}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.fill',
                stylers: [{color: '#ffffff'}, {lightness: 17}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#ffffff'}, {lightness: 29}, {weight: 0.2}]
            },
            {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [{color: '#ffffff'}, {lightness: 18}]
            },
            {
                featureType: 'road.local',
                elementType: 'geometry',
                stylers: [{color: '#ffffff'}, {lightness: 16}]
            },
            {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{color: '#f5f5f5'}, {lightness: 21}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#dedede'}, {lightness: 21}]
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [{visibility: 'on'}, {color: '#ffffff'}, {lightness: 16}]
            },
            {
                elementType: 'labels.text.fill',
                stylers: [{saturation: 36}, {color: '#333333'}, {lightness: 40}]
            },
            {
                elementType: 'labels.icon',
                stylers: [{visibility: 'off'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{ color: '#f2f2f2' }, { lightness: 19 }]
            },
            {
                featureType: 'administrative',
                elementType: 'geometry.fill',
                stylers: [{ color: '#fefefe' }, { lightness: 20 }]
            },
            {
                featureType: 'administrative',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#fefefe' }, { lightness: 17 }, { weight: 1.2 }]
            }
        ];

        var bramptonProperties = {
            center: bramptonCoords,
            zoom: zoomValue,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            panControl: false,
            zoomControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            scrollwheel: false,
            disableDoubleClickZoom: true,
            draggable: true,
            verviewMapControl: true,
            overviewMapControlOptions: {
                opened: false
            },
            styles: bramptonMapStyles
        };

        var bramptonMap = new google.maps.Map( brampton, bramptonProperties );

        var bramptonMarker = new google.maps.Marker({
            position: bramptonCoords,
            map: bramptonMap,
            icon: markerPath,
            visible: true,
            animation: google.maps.Animation.DROP
        });

        var bramptonInfo = new google.maps.InfoWindow({
            content: 'Brampton Manor Academy'
        });

        bramptonMarker.addListener( 'click', function () {
            bramptonInfo.open( bramptonMap, bramptonMarker );
        });

        // MAKE GOOGLE MAP RESPONSIVE
        // --------------------------------------------------------------------

        var bramptonMapCenter = bramptonMap.getCenter(); // returns the position displayed at the center of the map

        // CENTER GOOGLE MAPS ON BROWSER RESIZE (RESPONSIVE)
        google.maps.event.addDomListener( window, 'resize', function () {
            bramptonMap.setCenter( bramptonMapCenter );
        });

        // RETURN CENTER OF MAP TO THE CENTER OF WINDOW IF MAP WAS MOVED BY USER
        google.maps.event.addListener( bramptonMap, 'center_changed', function () {
            window.setTimeout( function () {
                bramptonMap.setCenter( bramptonMapCenter );
            }, 3000 );
        });

    });

    // BLOG GRID
    // ------------------------------------
    equalHeight( '.blog__item' );


}, false );


// BLOG GRID
// ------------------------------------

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
