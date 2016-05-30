$(document).ready(function () {

    // BAR CHART ANIMATION
    // -------------------------------------------

    var blockSkills = $('.skills');
    var bars = $('.skills__bar-value').width('0%');

    $(window).on('scroll', function () {
        if ( $(window).scrollTop() < blockSkills.offset().top - $(window).height() * 0.75 ) {
            bars.each( function () {
                var value = $(this).data('value');
                $(this).animate( { width: value + '%' }, { duration: 2000, easing: 'easeInCirc' } );
            });
        }
    });




});
