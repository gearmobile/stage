import $ from 'jquery';
import svg4everybody from 'svg4everybody';
import swiper from 'swiper';
import 'magnific-popup';

$(() => {

	svg4everybody();


	// HEADER FIXED
	// ------------------------------------------------
	const $headerFixed = $('.header-fixed__center');
	$(window).on('scroll', function () {
		if ( $(this).scrollTop() > 0 ) {
			$headerFixed.addClass('header-fixed__center--active');
		} else {
			$headerFixed.removeClass('header-fixed__center--active');
		}
	});


	// HEADER SLIDER
	// ------------------------------------------------
	swiper('.header > .swiper-container', {
		effect: 'fade',
		autoplay: 8500
	});


	// MAGNIFIC POPUP
	// -------------------------------------------------
	$('.news__inner').magnificPopup({
		delegate: '.news__image',
		type: 'image'
	});

	// TESTIMONIALS SLIDER
	// -------------------------------------------------
	swiper('.testimonials > .swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev'
	});

});
