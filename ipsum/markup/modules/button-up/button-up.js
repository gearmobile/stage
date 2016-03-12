const $buttonToTop = $('.button-up');

$buttonToTop.addClass('is-out');

$(window).on('scroll', () => {
    if ( $(this).scrollTop() > $(this).height() / 3 ) {
        $buttonToTop.removeClass('is-out').addClass('is-in');
    } else {
        $buttonToTop.removeClass('is-in').addClass('is-out');
    }
});

$buttonToTop.on('click', (event) => {
    event.preventDefault();
    $('html, body').stop().animate({scrollTop: 0}, 1500);
});
