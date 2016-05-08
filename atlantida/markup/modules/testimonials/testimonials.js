$(document).ready(function () {

    const slickOptions = {
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 1000,
        // autoplay: true,
        infinite: true,
        customPaging: function () {
            return '<a href="#"></a>';
        }
    };

    $('.testimonials__slider').slick(slickOptions);
});
