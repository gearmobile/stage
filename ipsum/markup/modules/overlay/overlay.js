$( () => {

    const $overlay = $('.overlay');
    const $overlayBtn = $overlay.find('.overlay__button');
    const $overlayLinks = $overlay.find('.overlay__link');
    const $headerIcon = $('.header__icon');

    $headerIcon.on('click', () => {
        if ( $overlay.not('.close') ) {
            $overlay.addClass('open');
            $headerIcon.addClass('is-hide');
        }
    });

    $overlayBtn.on('click', () => {
        if ( $overlay.hasClass('open') ) {
            $overlay.removeClass('open');
            $headerIcon.removeClass('is-hide');
        }
    });

    $overlayLinks.on('click', (event) => {
        event.preventDefault();
        $('html, body').stop().animate({scrollTop: $( $(this).attr('href') ).offset().top}, 1000, 'swing');
        $overlay.delay(500).removeClass('open');
        $headerIcon.removeClass('is-hide');
    });

});
