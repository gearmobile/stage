const topHeader = $('.top-header');

$(window).on('scroll', function () {
    if ( $(window).scrollTop > 0 ) {
        topHeader.addClass('is-fixed');
    } else {
        topHeader.removeClass('is-fixed');
    }
});
