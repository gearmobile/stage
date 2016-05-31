$(document).ready( function () {

    var overview = $( '.overview');
    var counters = overview.find('.overview__item-counter').text('0');

    $( window ).on('scroll', function () {
        if ( $( window ).scrollTop() > overview.offset().top - $( window ).height() * 0.5 ) {
            counters.each( function () {
                var current = $( this );
                $( { Counter: 0 }).animate( { Counter: current.attr('data-stop') }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function ( now ) {
                        current.text( Math.ceil( now ) );
                    }
                });
            });
            $( window ).off( 'scroll' );
        }
    });

});
