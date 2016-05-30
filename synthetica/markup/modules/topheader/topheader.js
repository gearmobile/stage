$(document).ready( function () {

    var topHeader = $('.topheader');
    var topHeaderNav = topHeader.find('.topheader__secondary-nav');

    if ( !topHeaderNav.hasClass('animated') ) {
        topHeaderNav.addClass('animated');
    }

    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 0 ) {
            if ( topHeaderNav.hasClass('fadeInRight') ) {
                topHeaderNav.removeClass('fadeInRight');
            }
            topHeaderNav.addClass('fadeOutRight');
        } else {
            topHeaderNav.removeClass('fadeOutRight').addClass('fadeInRight');
        }
    });
});
