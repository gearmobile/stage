$(document).ready( function () {

    var blockStarted = $('.started');
    var contentStarted = blockStarted.find('.started__center');

    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > blockStarted.offset().top - $(window).height() * 0.5 ) {
            contentStarted.addClass('animated fadeInUp');
        }
    });
});
