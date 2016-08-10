$( () => {

    const $overlay = $('.overlay');
    const $overlayButton = $overlay.find('.overlay__button');
    const $overlayLinks = $overlay.find('.overlay__link');
    const $headerIcon = $('.header__icon');

    $headerIcon.on('click', function () {
        if ( $overlay.not('.close') ) {
            $overlay.addClass('open');
            $headerIcon.addClass('is-hide');
        }
    });

    $overlayButton.on('click', function () {
        if ( $overlay.hasClass('open') ) {
            $overlay.removeClass('open');
            $headerIcon.removeClass('is-hide');
        }
    });

    $overlayLinks.on('click', function () {
        if ( $overlay.hasClass('open') ) {
            $overlay.removeClass('open');
            $headerIcon.removeClass('is-hide');
        }
    });

    $overlayLinks.smoothScroll({
        speed: 'auto',
        easing: 'swing'
    });

});
