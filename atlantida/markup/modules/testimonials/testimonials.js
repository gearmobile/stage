$(document).ready( function () {

    const slickOptions = {
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        infinite: true,
        customPaging: function () {
            return '<a href="#"></a>';
        },

        // DISABLE DOTS AT 600PX
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    dots: false
                }
            }
        ]
    };

    $('.testimonials__slider').slick(slickOptions);
});
