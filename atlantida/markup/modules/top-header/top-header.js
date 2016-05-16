$(function () {

    const topHeader = $('.top-header');

    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 0 ) {
            topHeader.addClass('is-fixed');
        } else {
            topHeader.removeClass('is-fixed');
        }
    });

    var overlay = $('.overlay');
    var overlayTrigger = $('.overlay__trigger');
    var overlayClose = $('.overlay__button');

    function toggleOverlay() {
        if ( overlay.hasClass('is-open') ) {
            overlay.removeClass('is-open').addClass('is-close');
        } else if ( overlay.not(overlay.hasClass('is-close')) ) {
            overlay.addClass('is-open');
        }
    }

    overlayTrigger.addEventListener('click', toggleOverlay, false);
    overlayClose.addEventListener('click', toggleOverlay, false);

});
