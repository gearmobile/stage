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
    var overlayLinks = $('.overlay__link');

    // OPEN OVERLAY
    function openOverlay() {
        if ( overlay.hasClass('is-close') ) {
            overlay.removeClass('is-close');
        }
        overlay.addClass('is-open');
    }

    // CLOSE OVERLAY
    function closeOverlay() {
        if ( overlay.hasClass('is-open') ) {
            overlay.removeClass('is-open').addClass('is-close');
        }
    }

    overlayTrigger.on('click', openOverlay);
    overlayClose.on('click', closeOverlay);
    overlayLinks.on('click', closeOverlay);

});
