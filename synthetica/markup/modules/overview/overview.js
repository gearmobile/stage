$(document).ready( function () {

    const overview = $( '.overview');
    const counters = overview.find('.overview__item-counter').text('0');
    let marker = true;

    function count() {
        counters.each( function () {
            let current = $( this );
            $( { Counter: 0 }).animate( { Counter: current.attr('data-stop') }, {
                duration: 2000,
                easing: 'swing',
                step: function ( now ) {
                    current.text( Math.ceil( now ) );
                }
            });
        });
        marker = false;
    }

    $( window ).on('scroll', function () {
        if ( $( window ).scrollTop() > overview.offset().top - $( window ).height() * 0.5 ) {
            if ( marker ) {
                count();
            }
        }
    });

});
