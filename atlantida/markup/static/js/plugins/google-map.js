function initMap () {

    var myLatLng = { lat: 20.9652675, lng: 105.7681278 };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: myLatLng,
        disableDefaultUI: true,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        draggable: true
    });

    var iconPath = '../../../modules/map/assets/map-icon.png';
    var marker = new google.maps.Marker({
        position: { lat: 20.9652675, lng: 105.7681278 },
        map: map,
        icon: iconPath,
        visible: true,
        animation: google.maps.Animation.DROP
    });

    marker.addListener('click', toggleBounce);


    function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

    // MAKE GOOGLE MAP RESPONSIVE
    // --------------------------------------------------------------------
    var mapCenter = map.getCenter(); // returns the position displayed at the center of the map

    // CENTER GOOGLE MAPS ON BROWSER RESIZE (RESPONSIVE)
    google.maps.event.addDomListener(window, 'resize', function () {
        map.setCenter(mapCenter);
    });

    // RETURN CENTER OF MAP TO THE CENTER OF WINDOW IF MAP WAS MOVED BY USER
    google.maps.event.addListener(map, 'center_changed', function () {
        window.setTimeout(function () {
            mao.setCenter(mapCenter);
        }, 3000);
    });

}

initMap ();
