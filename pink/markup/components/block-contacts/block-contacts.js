// GOOGLE MAPS
// ------------------------------------

const GoogleMapsLoader = require( 'google-maps' );
GoogleMapsLoader.LANGUAGE = 'ru';
GoogleMapsLoader.KEY = 'AIzaSyAQTQ3gx58ulhmp6zKOzTwAlzv2zhbari8';

GoogleMapsLoader.load( function ( google ) {

    const brampton = document.querySelector( '.contacts__main' );
    const bramptonCoords = new google.maps.LatLng( 59.938942, 30.3149874 );
    const zoomValue = 14;
    const markerPath = 'static/img/assets/block-contacts/map-marker.png';

    const mapStyles = [
        {
            'featureType': 'all',
            'elementType': 'labels',
            'stylers': [
                {
                    'lightness': 63
                },
                {
                    'hue': '#ff0000'
                }
            ]
        },
        {
            'featureType': 'administrative',
            'elementType': 'all',
            'stylers': [
                {
                    'hue': '#000bff'
                },
                {
                    'visibility': 'on'
                }
            ]
        },
        {
            'featureType': 'administrative',
            'elementType': 'geometry',
            'stylers': [
                {
                    'visibility': 'on'
                }
            ]
        },
        {
            'featureType': 'administrative',
            'elementType': 'labels',
            'stylers': [
                {
                    'color': '#4a4a4a'
                },
                {
                    'visibility': 'on'
                }
            ]
        },
        {
            'featureType': 'administrative',
            'elementType': 'labels.text',
            'stylers': [
                {
                    'weight': '0.01'
                },
                {
                    'color': '#727272'
                },
                {
                    'visibility': 'on'
                }
            ]
        },
        {
            'featureType': 'administrative.country',
            'elementType': 'labels',
            'stylers': [
                {
                    'color': '#ff0000'
                }
            ]
        },
        {
            'featureType': 'administrative.country',
            'elementType': 'labels.text',
            'stylers': [
                {
                    'color': '#ff0000'
                }
            ]
        },
        {
            'featureType': 'administrative.province',
            'elementType': 'geometry.fill',
            'stylers': [
                {
                    'visibility': 'on'
                }
            ]
        },
        {
            'featureType': 'administrative.province',
            'elementType': 'labels.text',
            'stylers': [
                {
                    'color': '#545454'
                }
            ]
        },
        {
            'featureType': 'administrative.locality',
            'elementType': 'labels.text',
            'stylers': [
                {
                    'visibility': 'on'
                },
                {
                    'color': '#737373'
                }
            ]
        },
        {
            'featureType': 'administrative.neighborhood',
            'elementType': 'labels.text',
            'stylers': [
                {
                    'color': '#7c7c7c'
                },
                {
                    'weight': '0.01'
                }
            ]
        },
        {
            'featureType': 'administrative.land_parcel',
            'elementType': 'labels.text',
            'stylers': [
                {
                    'color': '#404040'
                }
            ]
        },
        {
            'featureType': 'landscape',
            'elementType': 'all',
            'stylers': [
                {
                    'lightness': 16
                },
                {
                    'hue': '#ff001a'
                },
                {
                    'saturation': -61
                }
            ]
        },
        {
            'featureType': 'poi',
            'elementType': 'labels.text',
            'stylers': [
                {
                    'color': '#828282'
                },
                {
                    'weight': '0.01'
                }
            ]
        },
        {
            'featureType': 'poi.government',
            'elementType': 'labels.text',
            'stylers': [
                {
                    'color': '#4c4c4c'
                }
            ]
        },
        {
            'featureType': 'poi.park',
            'elementType': 'all',
            'stylers': [
                {
                    'hue': '#00ff91'
                }
            ]
        },
        {
            'featureType': 'poi.park',
            'elementType': 'labels.text',
            'stylers': [
                {
                    'color': '#7b7b7b'
                }
            ]
        },
        {
            'featureType': 'road',
            'elementType': 'all',
            'stylers': [
                {
                    'visibility': 'on'
                }
            ]
        },
        {
            'featureType': 'road',
            'elementType': 'labels',
            'stylers': [
                {
                    'visibility': 'off'
                }
            ]
        },
        {
            'featureType': 'road',
            'elementType': 'labels.text',
            'stylers': [
                {
                    'color': '#999999'
                },
                {
                    'visibility': 'on'
                },
                {
                    'weight': '0.01'
                }
            ]
        },
        {
            'featureType': 'road.highway',
            'elementType': 'all',
            'stylers': [
                {
                    'hue': '#ff0011'
                },
                {
                    'lightness': 53
                }
            ]
        },
        {
            'featureType': 'road.highway',
            'elementType': 'labels.text',
            'stylers': [
                {
                    'color': '#626262'
                }
            ]
        },
        {
            'featureType': 'transit',
            'elementType': 'labels.text',
            'stylers': [
                {
                    'color': '#676767'
                },
                {
                    'weight': '0.01'
                }
            ]
        },
        {
            'featureType': 'water',
            'elementType': 'all',
            'stylers': [
                {
                    'hue': '#0055ff'
                }
            ]
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
        styles: mapStyles
    };

    const bramptonMap = new google.maps.Map( brampton, bramptonProperties );

    const bramptonMarker = new google.maps.Marker({
        position: bramptonCoords,
        map: bramptonMap,
        icon: markerPath,
        visible: true,
        animation: google.maps.Animation.DROP
    });

    const bramptonInfo = new google.maps.InfoWindow({
        content: 'Дворцовая площадь'
    });

    bramptonMarker.addListener( 'click', function () {
        bramptonInfo.open( bramptonMap, bramptonMarker );
    });

    // MAKE GOOGLE MAP RESPONSIVE
    // --------------------------------------------------------------------

    let bramptonMapCenter = bramptonMap.getCenter(); // returns the position displayed at the center of the map

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
