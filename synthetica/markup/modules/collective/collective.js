$(document).ready( function () {

    var player = videojs('video');
    player.ready(function () {
        this.play();
    });

});
