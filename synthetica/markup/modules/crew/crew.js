$(document).ready(function () {
    // -------------------------------------------------------------
    // BAR CHART ANIMATION
    // -------------------------------------------------------------
    const blockSkills = $('.skills');
    const bars = $('.skills__bar-value').width( '0%' );
    // -------------------------------------------------------------
    $( window ).on( 'scroll', function () {
        if ( $( window ).scrollTop() < blockSkills.offset().top - $( window ).height() * 0.65 ) {
            bars.each( function () {
                let value = $( this ).data( 'value' );
                $( this ).animate( { width: value + '%' }, {
                    duration: 2000,
                    easing: 'easeInCirc'
                });
            });
        }
    });
    // -------------------------------------------------------------
});
