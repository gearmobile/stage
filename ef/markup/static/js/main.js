'use strict';

var Chart = require('chart.js');
var GoogleMapsLoader = require('google-maps');
var Isotope = require('isotope-layout');
var imagesload = require('imagesloaded');
var swiper = require('swiper');
var smoothScroll = require('smooth-scroll');


window.addEventListener( 'DOMContentLoaded', function () {

    // TO TOP BUTTON
    // ------------------------------------

    var topButton = document.querySelector('.module-button');

    function scrollToTopLinear( scrollDuration ) {
        var scrollStep = -window.scrollY / ( scrollDuration / 15 );
        var scrollInterval = setInterval( function () {
            if ( window.scrollY !== 0 ) {
                window.scrollBy( 0, scrollStep );
            } else {
                clearInterval( scrollInterval );
            }
        }, 15 );
    }

    function scrollToTopEaseInOut( scrollDuration ) {
        var scrollHeight = window.scrollY;
        var scrollStep = Math.PI / ( scrollDuration / 15 );
        var cosParameter = scrollHeight / 2;
        var scrollCount = 0;
        var scrollMargin;
        function step() {
            setTimeout( function () {
                if ( window.scrollY !== 0 ) {
                    requestAnimationFrame( step );
                    scrollCount = scrollCount + 1;
                    scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep );
                    window.scrollTo( 0, ( scrollHeight - scrollMargin ) );
                }
            }, 15 );
        }
        requestAnimationFrame( step );
    }

    topButton.addEventListener( 'click', function () {
        scrollToTopEaseInOut(1000);
    }, false );


    // SMOOTH SCROLL
    // ------------------------------------

    smoothScroll.init({
        selector: '.topheader__link',
        easing: 'easeInOutQuart',
        speed: 2000
    });


    // WINDOW SCROLL && TO TOP BUTTON
    // ------------------------------------

    var topHeader = document.querySelector( '.topheader' );
    var topOffset = 110;

    window.addEventListener( 'scroll', function () {
        var scrollOffset = window.pageYOffset || document.documentElement.scrollTop;
        if ( scrollOffset > topOffset ) {
            topHeader.classList.add('is-hidden');
            topButton.classList.add('is-visible');
        } else {
            topHeader.classList.remove('is-hidden');
            topButton.classList.remove('is-visible');
        }
    }, false );


    // CHART.JS DIAGRAMMS
    // ------------------------------------

    var color1 = '#0cf';
    var color2 = '#eaeaea';
    var colorStroke = '#f00';

    var wpValue = 58;
    var htmlValue = 75;
    var cssValue = 80;
    var ptValue = 90;

    var cutoutValue = 82;

    var wpElement = document.querySelector('#wordpress');
    var htmlElement = document.querySelector('#html');
    var cssElement = document.querySelector('#css');
    var ptElement = document.querySelector('#photoshop');

    var wpContext = wpElement.getContext('2d');
    var htmlContext = htmlElement.getContext('2d');
    var cssContext = cssElement.getContext('2d');
    var ptContext = ptElement.getContext('2d');

    // CHARTS GLOBAL CONFIG  ------------------------------------------

    Chart.defaults.global.showTooltips = false;
    Chart.defaults.global.legend.display = false;
    Chart.defaults.global.title.display = false;
    Chart.defaults.global.animation.duration = 1000;
    Chart.defaults.global.animation.easing = 'easeOutQuart';

    // CHARTS DATA  ------------------------------------------

    var wpData = {
        labels: [
            'Blue',
            'White'
        ],
        datasets: [
            {
                data: [ wpValue, 100 - wpValue ],
                backgroundColor: [
                    color1,
                    color2
                ],
                hoverBackgroundColor: [
                    color1,
                    color2
                ]
            }]
    };

    var htmlData = {
        labels: [
            'Blue',
            'White'
        ],
        datasets: [
            {
                data: [ htmlValue, 100 - htmlValue ],
                backgroundColor: [
                    color1,
                    color2
                ],
                hoverBackgroundColor: [
                    color1,
                    color2
                ]
            }]
    };

    var cssData = {
        labels: [
            'Blue',
            'White'
        ],
        datasets: [
            {
                data: [ cssValue, 100 - cssValue ],
                backgroundColor: [
                    color1,
                    color2
                ],
                hoverBackgroundColor: [
                    color1,
                    color2
                ]
            }]
    };

    var ptData = {
        labels: [
            'Blue',
            'White'
        ],
        datasets: [
            {
                data: [ ptValue, 100 - ptValue ],
                backgroundColor: [
                    color1,
                    color2
                ],
                hoverBackgroundColor: [
                    color1,
                    color2
                ]
            }]
    };

    // CHARTS OPTIONS  ------------------------------------------

    var wpOptions = {
        cutoutPercentage: cutoutValue,
        borderWidth: 1,
        borderColor: colorStroke,
        responsive: true,
        animation: {
            animateScale: true,
            animateRotate: true,
            onComplete: function () {
                wpContext.fillStyle = '#333';
                wpContext.font = '3rem Lato, sans-serif';
                wpContext.textAlign = 'center';
                wpContext.textBaseline = 'middle';
                wpContext.fillText( wpData.datasets[0].data[0] + '%', wpElement.width / 2, wpElement.height / 2 );
            }
        }
    };

    var htmlOptions = {
        cutoutPercentage: cutoutValue,
        borderWidth: 3,
        borderColor: colorStroke,
        animation: {
            animateScale: true,
            animateRotate: true,
            onComplete: function () {
                htmlContext.fillStyle = '#333';
                htmlContext.font = '3rem Lato, sans-serif';
                htmlContext.textAlign = 'center';
                htmlContext.textBaseline = 'middle';
                htmlContext.fillText( htmlData.datasets[0].data[0] + '%', htmlElement.width / 2, htmlElement.height / 2 );
            }
        }
    };

    var cssOptions = {
        cutoutPercentage: cutoutValue,
        borderWidth: 3,
        borderColor: colorStroke,
        animation: {
            animateScale: true,
            animateRotate: true,
            onComplete: function () {
                cssContext.fillStyle = '#333';
                cssContext.font = '3rem Lato, sans-serif';
                cssContext.textAlign = 'center';
                cssContext.textBaseline = 'middle';
                cssContext.fillText( cssData.datasets[0].data[0] + '%', cssElement.width / 2, cssElement.height / 2 );
            }
        }
    };

    var ptOptions = {
        cutoutPercentage: cutoutValue,
        borderWidth: 3,
        borderColor: colorStroke,
        animation: {
            animateScale: true,
            animateRotate: true,
            onComplete: function () {
                ptContext.fillStyle = '#333';
                ptContext.font = '3rem Lato, sans-serif';
                ptContext.textAlign = 'center';
                ptContext.textBaseline = 'middle';
                ptContext.fillText( ptData.datasets[0].data[0] + '%', ptElement.width / 2, ptElement.height / 2 );
            }
        }
    };

    // CHARTS  ------------------------------------------

    var wpChart = new Chart( wpContext, {
        type: 'doughnut',
        data: wpData,
        options: wpOptions
    });

    var htmlChart = new Chart( htmlContext, {
        type: 'doughnut',
        data: htmlData,
        options: htmlOptions
    });

    var cssChart = new Chart( cssContext, {
        type: 'doughnut',
        data: cssData,
        options: cssOptions
    });

    var ptChart = new Chart( ptContext, {
        type: 'doughnut',
        data: ptData,
        options: ptOptions
    });


    // GOOGLE MAPS
    // ------------------------------------

    GoogleMapsLoader.load( function ( google ) {

        GoogleMapsLoader.LANGUAGE = 'en';
        GoogleMapsLoader.KEY = 'AIzaSyAjunIsdBzwn5n0IhHJctIg4PPCMlH7u24';

        var brampton = document.querySelector( '#brampton' );
        var bramptonCoords = new google.maps.LatLng( 51.5220535, 0.041928900000016256 );
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

        bramptonMarker.addListener('click', function () {
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

    // ISOTOPE
    // --------------------------------------------------
    var grid = document.querySelector('.recent-grid__main');
    var gridItem = '.recent-grid__item';
    var gridSizer = '.recent-grid__sizer';
    var gridControl = document.querySelector('.recent-grid__control');
    var iso;

    imagesload( grid, function () {
        iso = new Isotope( grid, {
            itemSelector: gridItem,
            percentPosition: true,
            masonry: {
                columnWidth: gridSizer
            }
        });
    });

    // BIND FILTER BUTTON CLICK ----------------------------------
    gridControl.addEventListener( 'click', function ( event ) {
        iso.arrange({ filter: event.target.getAttribute('data-filter') });
    });


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


    // SWIPER SLIDER FOLLOW
    // ------------------------------------
    swiper( '.follow .swiper-container', {
        pagination: '.follow .swiper-pagination',
        paginationClickable: true,
        loop: true,
        breakpoints: {
            500: {
                autoplay: 2000
            }
        }
    });


    // SWIPER SLIDER CITATION
    // ------------------------------------
    swiper( '.citation .swiper-container', {
        pagination: '.citation .swiper-pagination',
        paginationClickable: true,
        loop: true,
        500: {
            autoplay: 2000
        }
    });



    // SWIPER SLIDER TESTIMONIALS
    // ------------------------------------
    swiper( '.testimonials .swiper-container', {
        pagination: '.testimonials .swiper-pagination',
        paginationClickable: true,
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        breakpoints: {
            980: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 1
            },
            500: {
                slidesPerView: 1,
                autoplay: 2000
            }
        }
    });



}, false );


// TRIANGLES
// -------------------------------------------------------

var primaryColor = '#fff';
var secondaryColor = '#0cf';
var tertiaryColor = '#f7f7f7';

var delta = 0.12;
var delta1 = 0.08;
var delta2 = 0.041;
var delta3 = 0.66;

var width, height, width1, height1, height2;

// SECTION HERO ------------------------------------------
var hero = document.querySelector( '.hero' );

var heroBottom = document.querySelector( '.hero__bottom' );
var heroBottomCanvas = document.querySelector( '#heroBottomCanvas' );
var heroBottomCanvasContext = heroBottomCanvas.getContext( '2d' );
var heroBottomImage = document.querySelector( '.hero-bottom-image' );


// SECTION FOLLOW -----------------------------------------
var follow = document.querySelector( '.follow' );

var followTop = document.querySelector( '.follow__top' );
var followTopCanvas = document.querySelector( '#followTopCanvas' );
var followTopCanvasContext = followTopCanvas.getContext( '2d' );
var followTopImage = document.querySelector( '.follow-top-image' );

var followBottom = document.querySelector( '.follow__bottom' );
var followBottomCanvas = document.querySelector( '#followBottomCanvas' );
var followBottomCanvasContext = followBottomCanvas.getContext( '2d' );
var followBottomImage = document.querySelector( '.follow-bottom-image' );

// SECTION CITATION -----------------------------------------
var citation = document.querySelector( '.citation' );

var citationTop = document.querySelector( '.citation__top' );
var citationTopCanvas = document.querySelector( '#citationTopCanvas' );
var citationTopCanvasContext = citationTopCanvas.getContext( '2d' );
var citationTopImage = document.querySelector( '.citation-top-image' );

var citationBottom = document.querySelector( '.citation__bottom' );
var citationBottomCanvas = document.querySelector( '#citationBottomCanvas' );
var citationBottomCanvasContext = citationBottomCanvas.getContext( '2d' );
var citationBottomImage = document.querySelector( '.citation-bottom-image' );

// SECTION TEAM -----------------------------------------
var team = document.querySelector( '.team' );

var teamTop = document.querySelector( '.team__top' );
var teamTopCanvas = document.querySelector( '#teamTopCanvas' );
var teamTopCanvasContext = teamTopCanvas.getContext( '2d' );
var teamTopImage = document.querySelector( '.team-top-image' );

var teamBottom = document.querySelector( '.team__bottom' );
var teamBottomCanvas = document.querySelector( '#teamBottomCanvas' );
var teamBottomCanvasContext = teamBottomCanvas.getContext( '2d' );
var teamBottomImage = document.querySelector( '.team-bottom-image' );

// DRAW TRIANGLE TOP
// -------------------------------------------------
function drawTriangleTop( topCanvasContext, color ) {
    topCanvasContext.lineWidth = 1;
    topCanvasContext.strokeStyle = color;
    topCanvasContext.fillStyle = color;
    topCanvasContext.beginPath();
    topCanvasContext.moveTo( 0, 0 );
    topCanvasContext.lineTo( width, 0 );
    topCanvasContext.lineTo( 0, height );
    topCanvasContext.stroke();
    topCanvasContext.fill();
    topCanvasContext.closePath();
}


// DRAW TRIANGLE BOTTOM
// -------------------------------------------------
function drawTriangleBottom( bottomCanvasContext, color1, color2 ) {
    bottomCanvasContext.lineWidth = 1;

    // draw large triangle
    bottomCanvasContext.strokeStyle = color1;
    bottomCanvasContext.fillStyle = color1;
    bottomCanvasContext.beginPath();
    bottomCanvasContext.moveTo( width, 0 );
    bottomCanvasContext.lineTo( width, height );
    bottomCanvasContext.lineTo( 0, height );
    bottomCanvasContext.stroke();
    bottomCanvasContext.fill();
    bottomCanvasContext.closePath();

    // draw small triangle
    bottomCanvasContext.beginPath();
    bottomCanvasContext.strokeStyle = color2;
    bottomCanvasContext.fillStyle = color2;
    bottomCanvasContext.moveTo( width, 0 );
    bottomCanvasContext.lineTo( width, height1 );
    bottomCanvasContext.lineTo( width1, height2 );
    bottomCanvasContext.stroke();
    bottomCanvasContext.fill();
    bottomCanvasContext.closePath();
}

function canvasToImage( blockImage, blockCanvasContext, blockCanvas ) {
    blockImage.src = blockCanvasContext.canvas.toDataURL();
    blockImage.alt = '';
    blockCanvas.style.display = 'none';
}

function variablesValues() {
    width = Math.floor( window.innerWidth );
    height = Math.floor( width * delta );
    width1 = Math.floor( width * delta3 );
    height1 = Math.floor( width * delta1 );
    height2 = Math.floor( width * delta2 );
}

function stylingTop( block, blockTop, blockTopCanvas ) {
    block.style.paddingTop = height + 'px';
    blockTop.style.height = height + 'px';
    blockTop.style.width = width;
    blockTop.style.position = 'absolute';
    blockTop.style.left = 0;
    blockTop.style.top = 0;
    blockTopCanvas.width = width;
    blockTopCanvas.height = height;
}

function stylingBottom( block, blockBottom, blockBottomCanvas ) {
    block.style.paddingBottom = height + 'px';
    blockBottom.style.height = height + 'px';
    blockBottom.style.width = width;
    blockBottom.style.position = 'absolute';
    blockBottom.style.left = 0;
    blockBottom.style.bottom = 0;
    blockBottomCanvas.width = width;
    blockBottomCanvas.height = height;
}


window.addEventListener( 'DOMContentLoaded', function () {
    variablesValues();

    // SECTION HERO -----------------------------------------
    stylingBottom( hero, heroBottom, heroBottomCanvas );
    drawTriangleBottom( heroBottomCanvasContext, primaryColor, secondaryColor );
    canvasToImage( heroBottomImage, heroBottomCanvasContext, heroBottomCanvas );

    // SECTION TEAM -----------------------------------------
    stylingTop( team, teamTop, teamTopCanvas );
    stylingBottom( team, teamBottom, teamBottomCanvas );
    drawTriangleTop( teamTopCanvasContext, tertiaryColor );
    drawTriangleBottom( teamBottomCanvasContext, primaryColor, secondaryColor );
    canvasToImage( teamTopImage, teamTopCanvasContext, teamTopCanvas );
    canvasToImage( teamBottomImage, teamBottomCanvasContext, teamBottomCanvas );

    // SECTION FOLLOW -----------------------------------------
    stylingTop( follow, followTop, followTopCanvas );
    stylingBottom( follow, followBottom, followBottomCanvas );
    drawTriangleTop( followTopCanvasContext, tertiaryColor );
    drawTriangleBottom( followBottomCanvasContext, primaryColor, secondaryColor );
    canvasToImage( followTopImage, followTopCanvasContext, followTopCanvas );
    canvasToImage( followBottomImage, followBottomCanvasContext, followBottomCanvas );

    // SECTION CITATION -----------------------------------------
    stylingTop( citation, citationTop, citationTopCanvas );
    stylingBottom( citation, citationBottom, citationBottomCanvas );
    drawTriangleTop( citationTopCanvasContext, tertiaryColor );
    drawTriangleBottom( citationBottomCanvasContext, primaryColor, secondaryColor );
    canvasToImage( citationTopImage, citationTopCanvasContext, citationTopCanvas );
    canvasToImage( citationBottomImage, citationBottomCanvasContext, citationBottomCanvas );


}, false );

window.addEventListener( 'resize', function () {
    variablesValues();

    // SECTION BLOCK HERO -----------------------------------------
    stylingBottom( hero, heroBottom, heroBottomCanvas );
    drawTriangleBottom( heroBottomCanvasContext, primaryColor, secondaryColor );
    canvasToImage( heroBottomImage, heroBottomCanvasContext, heroBottomCanvas );

    // SECTION TEAM -----------------------------------------
    stylingTop( team, teamTop, teamTopCanvas );
    stylingBottom( team, teamBottom, teamBottomCanvas );
    drawTriangleTop( teamTopCanvasContext, tertiaryColor );
    drawTriangleBottom( teamBottomCanvasContext, primaryColor, secondaryColor );
    canvasToImage( teamTopImage, teamTopCanvasContext, teamTopCanvas );
    canvasToImage( teamBottomImage, teamBottomCanvasContext, teamBottomCanvas );

    // SECTION FOLLOW -----------------------------------------
    stylingTop( follow, followTop, followTopCanvas );
    stylingBottom( follow, followBottom, followBottomCanvas );
    drawTriangleTop( followTopCanvasContext, tertiaryColor );
    drawTriangleBottom( followBottomCanvasContext, primaryColor, secondaryColor );
    canvasToImage( followTopImage, followTopCanvasContext, followTopCanvas );
    canvasToImage( followBottomImage, followBottomCanvasContext, followBottomCanvas );

    // SECTION CITATION -----------------------------------------
    stylingTop( citation, citationTop, citationTopCanvas );
    stylingBottom( citation, citationBottom, citationBottomCanvas );
    drawTriangleTop( citationTopCanvasContext, tertiaryColor );
    drawTriangleBottom( citationBottomCanvasContext, primaryColor, secondaryColor );
    canvasToImage( citationTopImage, citationTopCanvasContext, citationTopCanvas );
    canvasToImage( citationBottomImage, citationBottomCanvasContext, citationBottomCanvas );


}, false );

