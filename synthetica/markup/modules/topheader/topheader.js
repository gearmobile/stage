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

    $('a[href*="#"]:not([href="#"])').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate( {
                    scrollTop: target.offset().top
                }, 1500, 'easeInOutSine');
                return false;
            }
        }
    });
});
