'use strict';

var Chart = require('chart.js');
var GoogleMapsLoader = require('google-maps');

window.addEventListener('DOMContentLoaded', function () {

    // CHART.JS
    // ------------------------------------

    const color1 = '#0cf';
    const color2 = '#eaeaea';

    const wp = document.querySelector('#wordpress');
    const html = document.querySelector('#html');
    const css = document.querySelector('#css');
    const pt = document.querySelector('#photoshop');

    const wpContext = wp.getContext('2d');
    const htmlContext = html.getContext('2d');
    const cssContext = css.getContext('2d');
    const ptContext = pt.getContext('2d');

    const wpData = [
        {
            value: 58,
            color: color1
        },
        {
            value: 100 - 58,
            color: color2
        }
    ];

    const htmlData = [
        {
            value: 75,
            color: color1
        },
        {
            value: 100 - 75,
            color: color2
        }
    ];

    const cssData = [
        {
            value: 80,
            color: color1
        },
        {
            value: 100 - 80,
            color: color2
        }
    ];

    const ptData = [
        {
            value: 95,
            color: color1
        },
        {
            value: 100 - 95,
            color: color2
        }
    ];

    Chart.defaults.global.showTooltips = false;

    Chart( wpContext ).Doughnut( wpData, {
        percentageInnerCutout: 82,
        segmentStrokeWidth: 3,
        segmentStrokeColor: '#f7f7f7',
        onAnimationComplete: function () {
            wpContext.fillStyle = '#333';
            //wpContext.font = '3rem Lato, sans-serif';
            wpContext.textAlign = 'center';
            wpContext.textBaseline = 'middle';
            wpContext.fillText( wpData[0].value + '%', wp.width / 2, wp.height / 2 );
        }
    });

    Chart( htmlContext ).Doughnut( htmlData, {
        percentageInnerCutout: 82,
        segmentStrokeWidth: 3,
        segmentStrokeColor: '#f7f7f7',
        onAnimationComplete: function () {
            htmlContext.fillStyle = '#333';
            //htmlContext.font = '3rem Lato, sans-serif';
            htmlContext.textAlign = 'center';
            htmlContext.textBaseline = 'middle';
            htmlContext.fillText( htmlData[0].value + '%', html.width / 2, html.height / 2 );
        }
    });

    Chart( cssContext ).Doughnut( cssData, {
        percentageInnerCutout: 82,
        segmentStrokeWidth: 3,
        segmentStrokeColor: '#f7f7f7',
        onAnimationComplete: function () {
            cssContext.fillStyle = '#333';
            //cssContext.font = '3rem Lato, sans-serif';
            cssContext.textAlign = 'center';
            cssContext.textBaseline = 'middle';
            cssContext.fillText( cssData[0].value + '%', css.width / 2, css.height / 2 );
        }
    });

    Chart( ptContext ).Doughnut( ptData, {
        percentageInnerCutout: 82,
        segmentStrokeWidth: 3,
        segmentStrokeColor: '#f7f7f7',
        onAnimationComplete: function () {
            ptContext.fillStyle = '#333';
            //ptContext.font = '3rem Lato, sans-serif';
            ptContext.textAlign = 'center';
            ptContext.textBaseline = 'middle';
            ptContext.fillText( ptData[0].value + '%', pt.width / 2, pt.height / 2 );
        }
    });


    // GOOGLE MAPS
    // ------------------------------------

    GoogleMapsLoader.load( function (google) {

        GoogleMapsLoader.LANGUAGE = 'en';
        GoogleMapsLoader.KEY = 'AIzaSyB8K34DDu7gT9BqenQE8vJDxx7FQZt4Khg';

        const brampton = document.getElementById('brampton');
        const bramptonCoords = new google.maps.LatLng(51.5220535, 0.041928900000016256);
        const zoomValue = 15;

        const isIE11 = navigator.userAgent.toLowerCase().indexOf('trident') > -1;
        const markerPath = ( isIE11 ) ? 'assets/images/icon-location.png' : 'assets/images/icon-location.svg';

        const bramptonMapStyles = [
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
                stylers: [{color: '#f2f2f2'}, {lightness: 19}]
            },
            {
                featureType: 'administrative',
                elementType: 'geometry.fill',
                stylers: [{color: '#fefefe'}, {lightness: 20}]
            },
            {
                featureType: 'administrative',
                elementType: 'geometry.stroke',
                stylers: [{color: '#fefefe'}, {lightness: 17}, {weight: 1.2}]
            }
        ];

        const bramptonProperties = {
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

        const bramptonMap = new google.maps.Map(brampton, bramptonProperties);

        const bramptonMarker = new google.maps.Marker({
            position: bramptonCoords,
            map: bramptonMap,
            icon: markerPath,
            visible: true,
            animation: google.maps.Animation.DROP
        });

        const bramptonInfo = new google.maps.InfoWindow({
            content: 'Brampton Manor Academy'
        });

        bramptonMarker.addListener('click', function () {
            bramptonInfo.open(bramptonMap, bramptonMarker);
        });

        // MAKE GOOGLE MAP RESPONSIVE
        // --------------------------------------------------------------------

        const bramptonMapCenter = bramptonMap.getCenter(); // returns the position displayed at the center of the map

        // CENTER GOOGLE MAPS ON BROWSER RESIZE (RESPONSIVE)
        google.maps.event.addDomListener(window, 'resize', function () {
            bramptonMap.setCenter(bramptonMapCenter);
        });

        // RETURN CENTER OF MAP TO THE CENTER OF WINDOW IF MAP WAS MOVED BY USER
        google.maps.event.addListener(bramptonMap, 'center_changed', function () {
            window.setTimeout(function () {
                bramptonMap.setCenter(bramptonMapCenter);
            }, 3000);
        });

    });

}, false );






