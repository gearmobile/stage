$(document).ready( function () {
    var topHeader = $('.topheader');
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 0 ) {
            topHeader.addClass('is-scrolled');
        } else {
            topHeader.removeClass('is-scrolled');
        }
    });
});
