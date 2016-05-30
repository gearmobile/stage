$(document).ready( function () {

    var counter = 0;
    var blockOverview = $('.overview');
    var overviewCounters = blockOverview.find('.overview__item-counter');
    overviewCounters.text(counter);

    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > blockOverview.offset().top - $(window).height() * 0.75 ) {
            overviewCounters.each(function () {
                var currentCounter = $(this);
                $({ Counter: 0 }).animate( { Counter: currentCounter.attr('data-stop') }, {
                    duration: 2000,
                    easing: 'easeInSine',
                    step: function (now) {
                        currentCounter.text(Math.ceil(now));
                    }} );
            });
            this.destroy();
        }
    });
});
