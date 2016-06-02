$(document).ready( function () {
    var topButton = $('.to-top-button');
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() !== 0 ) {
            topButton.fadeIn();
        } else {
            topButton.fadeOut();
        }
    });
    topButton.on('click', function () {
        $('html, body').animate( { scrollTop: 0 }, 800 );
    });
});
