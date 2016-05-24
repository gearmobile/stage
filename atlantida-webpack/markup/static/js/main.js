'use strict';

const $ = require('jquery');
const GoogleMapsLoader = require('google-maps');
require('imagesloaded');
require('isotope-layout');
require('magnific-popup');
require('slick-carousel');


// SHOW COLLAPSED HISTORY
// -----------------------------------------------

const showButton = $('.content__show');
const collapsedBlock = $('.is-collapsed');

showButton.on('click', function () {
    collapsedBlock.removeClass('is-collapsed').addClass('is-opened');
    showButton.parent().css('display', 'none');
});


// PORTFOLIO GALLERY
// -----------------------------------------------

const portfolioGallery = $('.portfolio .gallery');
const portfolioFiltering = $('.portfolio .filtering');
const portfolioItems = $('.portfolio .gallery__item');

portfolioGallery.isotope({
    itemSelector: '.portfolio .gallery__item',
    percentPosition: true,
    masonry: {
        columnWidth: '.portfolio .gallery__sizer'
    }
});

portfolioGallery.imagesLoaded().progress( function () {
    portfolioGallery.isotope('layout');
});

portfolioFiltering.on('click', 'a', function () {
    var filterValue = $( this ).attr('data-filter');
    portfolioGallery.isotope({ filter: filterValue });
});

portfolioItems.magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom',
    image: {
        verticalFit: true
    },
    zoom: {
        enabled: true,
        duration: 300
    }
});


// TESTIMONIALS SLIDER
// -------------------------------------------------------

const slickOptions = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    infinite: true,
    customPaging: function () {
        return '<a href="#"></a>';
    }
};

$('.testimonials .testimonials__slider').slick(slickOptions);


// GOOGLE MAPS
// -------------------------------------------------------

GoogleMapsLoader.KEY = 'AIzaSyB8K34DDu7gT9BqenQE8vJDxx7FQZt4Khg';
GoogleMapsLoader.LANGUAGE = 'en';

GoogleMapsLoader.load(function (google) {
    const ahmedabad = document.getElementById('map');
    const ahmedabadCoords = new google.maps.LatLng(23.022505, 72.57136209999999);
    const zoomValue = 8;

    const ahmedabadProp = {
        center: ahmedabadCoords,
        zoom: zoomValue,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        panControl: false,
        zoomControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        scrollwheel: false
        // styles: brisbaneMapStyles // ПОДКЛЮЧИТЬ КАСТОМНЫЕ СТИЛИ ДЛЯ КАРТЫ
    };

    const ahmedabadMap = new google.maps.Map(ahmedabad, ahmedabadProp);
    const ahmedabadMapCenter = ahmedabadMap.getCenter();

    google.maps.event.addDomListener(window, 'resize', function () {
        ahmedabadMap.setCenter(ahmedabadMapCenter);
    });

    google.maps.event.addListener(ahmedabadMap, 'center_changed', function () {
        window.setTimeout(function () {
            ahmedabadMap.setCenter(ahmedabadMapCenter);
        }, 3000);
    });

});


// TOP HEADER
// ---------------------------------------------------

const topHeader = $('.top-header');

$(window).on('scroll', function () {
    if ( $(window).scrollTop() > 0 ) {
        topHeader.addClass('is-fixed');
    } else {
        topHeader.removeClass('is-fixed');
    }
});

var overlay = $('.overlay');
var overlayTrigger = $('.overlay__trigger');
var overlayClose = $('.overlay__button');
var overlayLinks = $('.overlay__link');

function openOverlay() {
    if ( overlay.hasClass('is-close') ) {
        overlay.removeClass('is-close');
    }
    overlay.addClass('is-open');
}

function closeOverlay() {
    if ( overlay.hasClass('is-open') ) {
        overlay.removeClass('is-open').addClass('is-close');
    }
}

overlayTrigger.on('click', openOverlay);
overlayClose.on('click', closeOverlay);
overlayLinks.on('click', closeOverlay);


// HERO SLIDER
// ------------------------------------------------

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
