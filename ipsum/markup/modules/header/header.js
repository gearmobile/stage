const $header = $('.header');

$(window).on('scroll', function () {

    if ( $(this).scrollTop() > $(this).height() / 5 ) {
        $header.addClass('is-active');
    } else {
        $header.removeClass('is-active');
    }

});
