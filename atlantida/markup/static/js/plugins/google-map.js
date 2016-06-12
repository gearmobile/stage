function initMap () {

    // MAP STYLES
    var greyScaleStyles = [
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e9e9e9"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dedede"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "saturation": 36
                },
                {
                    "color": "#333333"
                },
                {
                    "lightness": 40
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f2f2f2"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        }
    ];

    // MAP COORDINATES
    var mapCenterCoords = { lat: -27.471011, lng: 153.023449 }; // Brisbane, Australia
    var mapMarkerCoords = { lat: -27.471498, lng: 153.01701 }; // Brisbane, Australia, Gomo

    // MAP OPTIONS
    var mapOptions = {
        zoom: 14,
        center: mapCenterCoords,
        disableDefaultUI: true,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        draggable: true,
        styles: greyScaleStyles,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions );

    // MAP MARKER
    var iconPath = 'static/img/assets/map/map-icon.png';
    var marker = new google.maps.Marker({
        position: mapMarkerCoords,
        map: map,
        icon: iconPath,
        visible: true,
        animation: google.maps.Animation.DROP
    });

    //marker.addListener('click', toggleBounce);
    //
    //
    //function toggleBounce() {
    //    if (marker.getAnimation() !== null) {
    //        marker.setAnimation(null);
    //    } else {
    //        marker.setAnimation(google.maps.Animation.BOUNCE);
    //    }
    //}

    // MAP RESPONSIVE
    google.maps.event.addDomListener(window, 'resize', function () {
        var center = map.getCenter();
        google.maps.event.trigger( map, 'resize' );
        map.setCenter( center );
    });


    // ZOOM TO 16 WHEN CLICKING ON MARKER
    google.maps.event.addListener(marker, 'click', function () {
        map.setZoom(16);
        map.setCenter(marker.getPosition());
    });

    //MAP CENTER CHANGE
    google.maps.event.addListener(map, 'center_changed', function () {
        window.setTimeout(function () {
            map.panTo(marker.getPosition());
        }, 3000);
    });


    // MAP INFO WINDOW
    var infoWindow = new google.maps.InfoWindow({
        content:"Hello from Australia!"
    });

    google.maps.event.addListener(marker, 'click', function () {
        infoWindow.open( map, marker );
    });

}

google.maps.event.addDomListener(window, 'load', initMap);
google.maps.event.addDomListener(window, 'resize', initMap);