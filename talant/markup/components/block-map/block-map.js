
// GOOGLE MAPS
// ------------------------------------

var GoogleMapsLoader = require( 'google-maps' );

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

module.exports = {};
