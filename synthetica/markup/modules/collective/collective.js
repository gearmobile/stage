
window.addEventListener('DOMContentLoaded', function () {

    function videoPlay() {

        var video = document.querySelector('.video');

        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }

}, false);
