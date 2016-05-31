$(document).ready( function () {

    var blockStarted = $('.started');
    var startedContent = blockStarted.find('.started__center');

    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > blockStarted.offset().top - $(window).height() * 0.5 ) {
            startedContent.addClass('animated fadeInUp');
        }
    });
});
