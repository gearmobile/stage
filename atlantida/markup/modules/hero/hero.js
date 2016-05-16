$('.slider').slick({
    dots: false,
    fade: true,
    infinite: false,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<a href="#" class="slick-prev"></a>',
    nextArrow: '<a href="#" class="slick-next"></a>',
    responsive: [
        {
            breakpoint: 1110,
            settings: {
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000,
                fade: false
            }
        },
        {
            breakpoint: 400,
            settings: {
                fade: true,
                autoplay: true,
                autoplaySpeed: 2000
            }
        }
    ]
});
