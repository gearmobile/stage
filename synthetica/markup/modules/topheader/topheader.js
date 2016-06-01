$(document).ready( function () {

    // VARIABLES
    // -----------------------------------------------------------------
    var topHeader = $('.topheader');
    var topHeaderNav = topHeader.find('.topheader__secondary-nav');
    var topHeaderSecondarySubscribe = topHeader.find('.topheader__secondary-subscribe');
    var topHeaderSecondarySearch = topHeader.find('.topheader__secondary-search');
    var topHeaderSecondaryOpen = topHeader.find('.topheader__secondary-open');
    var topHeaderSecondaryClose = topHeader.find('.topheader__secondary-close');
    var topHeaderHamburgerIcon = topHeader.find('.topheader__secondary-mobile > .hamburger');
    var topOverlay = topHeader.find('.topheader-overlay');
    var topHeaderOverlayButton = topHeader.find('.topheader-overlay__button > .hamburger');
    var topHeaderOverlayLinks = topHeader.find('.topheader-overlay .topheader-overlay__link');

    // HIDE \ SHOW SECONDARY MENU TO RIGHT
    // -----------------------------------------------------------------
    if ( !topHeaderNav.hasClass('animated') ) {
        topHeaderNav.addClass('animated');
    }

    $(window).on('scroll', function () {
        console.log($(window).scrollTop());
        if ( $(window).scrollTop() > 0 ) {
            topHeaderNav.removeClass('fadeInRight').addClass('fadeOutRight');
            topHeaderSecondarySubscribe.addClass('is-fixed');
        } else if ( $(window).scrollTop() === 0 ) {
            topHeaderNav.removeClass('fadeOutRight').addClass('fadeInRight');
            topHeaderSecondarySubscribe.removeClass('is-fixed');
        }
    });

    // ANIMATE SCROLL
    // -----------------------------------------------------------------
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

    // SHOW \ HIDE SEARCH BLOCK
    // -----------------------------------------------------------------
    topHeaderSecondaryOpen.on('click', function () {
        topHeaderSecondarySubscribe.removeClass('is-visible').addClass('is-hidden');
        topHeaderSecondarySearch.removeClass('is-hidden').addClass('is-visible');
        topHeaderNav.removeClass('fadeInRight').addClass('fadeOutRight');
    });

    topHeaderSecondaryClose.on('click', function () {
        topHeaderSecondarySearch.removeClass('is-visible').addClass('is-hidden');
        topHeaderSecondarySubscribe.removeClass('is-hidden').addClass('is-visible');
        topHeaderNav.removeClass('fadeOutRight').addClass('fadeInRight');
    });

    // TOPHEADER MOBILE MENU
    // -----------------------------------------------------------------
    if ( !topOverlay.hasClass('animated') ) {
        topOverlay.addClass('animated fadeOutUp');
    }

    topHeaderHamburgerIcon.hover(
        function () {
            $(this).addClass('is-active');
        },
        function () {
            $(this).removeClass('is-active');
        }
    );

    topHeaderHamburgerIcon.on('click', function () {
        topOverlay.removeClass('fadeOutUp').addClass('fadeInDown');
    });

    topHeaderOverlayButton.hover(
        function () {
            $(this).addClass('is-active');
        },
        function () {
            $(this).removeClass('is-active');
        }
    );

    topHeaderOverlayButton.on('click', function () {
        topOverlay.removeClass('fadeInDown').addClass('fadeOutUp');
    });

    topHeaderOverlayLinks.on('click', function () {
        topOverlay.removeClass('fadeInDown').addClass('fadeOutUp');
    });
});



























