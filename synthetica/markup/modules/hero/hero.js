$(document).ready(function () {

    // HERO CAROUSSEL
    // -------------------------------------------------------
    var heroSlider = $('.main-carousel');
    heroSlider.flickity({
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false,
        pageDots: true,
        autoPlay: true,
        imagesLoaded: true,
        accessibility: false,
        wrapAround: true
    });

    // HERO ANIMATE
    // -------------------------------------------------------
    var hero = $('.hero');
    var heroTitle = hero.find('.hero__content-title');
    var heroButtonPrimary = hero.find('.button-primary');
    var heroContentSecondary = hero.find('.hero__content-secondary');

    if ( !heroTitle.hasClass('animated') || !heroButtonPrimary.hasClass('animated') || !heroContentSecondary.hasClass('animated') ) {
        heroTitle.addClass('animated');
        heroButtonPrimary.addClass('animated');
        heroContentSecondary.addClass('animated');
    }

    $(window).on('load', function () {
        if ( !heroTitle.hasClass('fadeInOut') ) {
            heroTitle.addClass('fadeInOut');
        }
    });
});

