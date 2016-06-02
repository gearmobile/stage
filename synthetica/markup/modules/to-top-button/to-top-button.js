$(document).ready( function () {
    var topButton = $('.to-top-button');
    var scrollValue = $('.hero').height();
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > scrollValue ) {
            topButton.fadeIn();
        } else {
            topButton.fadeOut();
        }
    });
    topButton.on('click', function () {
        $('html, body').animate( { scrollTop: 0 }, 800 );
    });
});
