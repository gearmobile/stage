$(document).ready( function () {
    // -------------------------------------------------------------
    const blockStarted = $( '.started' );
    const blockStartedContent = blockStarted.find( '.started__center' );
    // -------------------------------------------------------------
    $(window).on( 'scroll', function () {
        if ( $( window ).scrollTop() > blockStarted.offset().top - $( window ).height() * 0.85 ) {
            blockStartedContent.addClass( 'animated fadeInUp' );
        }
    });
    // -------------------------------------------------------------
});
