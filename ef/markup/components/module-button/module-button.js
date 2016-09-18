var $ = require('jquery');

$(document).ready( function () {
    // --------------------------------------------
    var topButton = $( '.module-button' );
    var topOffset = 110;
    // --------------------------------------------
    topButton.addClass( 'is-hidden' );
    // --------------------------------------------
    $(window).on( 'load', function () {
        if ( $(window).width() < 500 ) {
            topButton.removeClass( 'is-hidden is-visible' ).addClass( 'is-destroy' );
        }
    }, false );
    // --------------------------------------------
    $(window).on( 'resize', function () {
        if ( $(window).width() < 500 ) {
            topButton.removeClass( 'is-hidden is-visible' ).addClass( 'is-destroy' );
        }
    }, false );
    // --------------------------------------------
    $(window).on( 'scroll', function () {
        if ( $(window).scrollTop() > topOffset ) {
            topButton.removeClass( 'is-hidden' ).addClass( 'is-visible' );
        } else {
            topButton.removeClass( 'is-visible' ).addClass( 'is-hidden' );
        }
    }, false );
});
