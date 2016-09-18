var $ = require('jquery');

$(document).ready( function () {
    // --------------------------------------------
    var topHeader = $( '.topheader' );
    var topOffset = 110;
    // --------------------------------------------
    topHeader.addClass( 'is-visible' );
    // --------------------------------------------
    $(window).on( 'scroll', function () {
        if ( $(window).scrollTop() > topOffset ) {
            topHeader.removeClass( 'is-visible' ).addClass( 'is-hidden' );
        } else {
            topHeader.removeClass( 'is-hidden' ).addClass( 'is-visible' );
        }
    });
    // --------------------------------------------
});
