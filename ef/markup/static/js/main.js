'use strict';

var Chart = require('chart.js');
var GoogleMapsLoader = require('google-maps');
var Isotope = require('isotope-layout');
var imagesload = require('imagesloaded');

window.addEventListener( 'DOMContentLoaded', function () {

    // CHART.JS
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
    Chart.defaults.global.defaultFontColor = '#333';
    Chart.defaults.global.defaultFontSize = 30;
    Chart.defaults.global.defaultFontSize = 'normal';
    //Chart.defaults.global.defaultFontFamily = 'Lato, sans-serif';
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
        //borderWidth: 1,
        //borderColor: colorStroke,
        responsive: true,
        animation: {
            animateScale: true,
            animateRotate: true,
            onAnimationComplete: function () {
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
            onAnimationComplete: function () {
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
            onAnimationComplete: function () {
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
            onAnimationComplete: function () {
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
            }, 3000);
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




}, false );






