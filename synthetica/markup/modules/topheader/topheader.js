$(document).ready( function () {
    // ------------------------------------------------------------------------
    // constIABLES
    // -----------------------------------------------------------------
    const topHeader = $('.topheader');
    const topHeaderNav = topHeader.find('.topheader__secondary-nav');
    const topHeaderSecondarySubscribe = topHeader.find('.topheader__secondary-subscribe');
    const topHeaderSecondarySearch = topHeader.find('.topheader__secondary-search');
    const topHeaderSecondaryOpen = topHeader.find('.topheader__secondary-open');
    const topHeaderSecondaryClose = topHeader.find('.topheader__secondary-close');
    const topHeaderHamburgerIcon = topHeader.find('.topheader__secondary-mobile > .hamburger');
    const topOverlay = topHeader.find('.topheader-overlay');
    const topHeaderOverlayButton = topHeader.find('.topheader-overlay__button > .hamburger');
    const topHeaderOverlayLinks = topHeader.find('.topheader-overlay .topheader-overlay__link');
    // ------------------------------------------------------------------------
    // HIDE \ SHOW SECONDARY MENU TO RIGHT
    // -----------------------------------------------------------------
    if ( !topHeaderNav.hasClass('animated') ) {
        topHeaderNav.addClass('animated');
    }
    // ------------------------------------------------------------------------
    $(window).on( 'scroll', function () {
        if ( $( window ).scrollTop() > 0 ) {
            topHeaderNav.removeClass( 'fadeInRight' ).addClass( 'fadeOutRight' );
            topHeaderSecondarySubscribe.addClass( 'is-fixed' );
        } else if ( $( window ).scrollTop() === 0 ) {
            topHeaderNav.removeClass( 'fadeOutRight' ).addClass( 'fadeInRight' );
            topHeaderSecondarySubscribe.removeClass( 'is-fixed' );
        }
    });
    // ------------------------------------------------------------------------
    // ANIMATE SCROLL
    // -----------------------------------------------------------------
    $('a[href*="#"]:not([href="#"])').on( 'click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            let target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $( 'html, body' ).animate( {
                    scrollTop: target.offset().top
                }, 1500, 'easeInOutSine');
                return false;
            }
        }
    });
    // ------------------------------------------------------------------------
    // SHOW \ HIDE SEARCH BLOCK
    // -----------------------------------------------------------------
    topHeaderSecondaryOpen.on( 'click', function () {
        topHeaderSecondarySubscribe.removeClass( 'is-visible' ).addClass( 'is-hidden' );
        topHeaderSecondarySearch.removeClass( 'is-hidden' ).addClass( 'is-visible' );
    });
    // ------------------------------------------------------------------------
    topHeaderSecondaryClose.on( 'click', function () {
        topHeaderSecondarySearch.removeClass( 'is-visible' ).addClass( 'is-hidden' );
        topHeaderSecondarySubscribe.removeClass( 'is-hidden' ).addClass( 'is-visible' );
    });
    // ------------------------------------------------------------------------
    // TOPHEADER MOBILE MENU
    // -----------------------------------------------------------------
    if ( !topOverlay.hasClass( 'animated' ) ) {
        topOverlay.addClass( 'animated' );
    }
    // ------------------------------------------------------------------------
    topHeaderHamburgerIcon.hover(
        function () {
            $(this).addClass( 'is-active' );
        },
        function () {
            $(this).removeClass( 'is-active' );
        }
    );
    // ------------------------------------------------------------------------
    topHeaderHamburgerIcon.on( 'click', function () {
        if ( !topOverlay.hasClass( 'fadeInDown' ) ) {
            topOverlay.css( 'visibility', 'visible').removeClass( 'fadeOutUp' ).addClass( 'fadeInDown' );
        } else {
            topOverlay.css( 'visibility', 'hidden').removeClass( 'fadeInDown' ).addClass( 'fadeOutUp' );
        }
    });
    // ------------------------------------------------------------------------
    topHeaderOverlayButton.hover(
        function () {
            $(this).addClass( 'is-active' );
        },
        function () {
            $(this).removeClass( 'is-active' );
        }
    );
    // ------------------------------------------------------------------------
    topHeaderOverlayButton.on( 'click', function () {
        topOverlay.removeClass( 'fadeInDown' ).addClass( 'fadeOutUp' );
    });
    // ------------------------------------------------------------------------
    topHeaderOverlayLinks.on( 'click', function () {
        topOverlay.removeClass( 'fadeInDown' ).addClass( 'fadeOutUp' );
    });
    // ------------------------------------------------------------------------
});



























