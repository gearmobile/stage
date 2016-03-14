import $ from 'jquery';
import svg4everybody from 'svg4everybody';
import swiper from 'swiper';
import 'magnific-popup';

$(() => {

	svg4everybody();

	// HEADER MOBILE
	// ------------------------------------------------

	const $headerIcon = $('.header-icon');
	const $overlay = $('.overlay');
	const $overlayClose = $('.overlay__close');

	$headerIcon.on('click', () => {
		$overlay.addClass('open');
		// $(this).delay(500).addClass('is-hidden');
	});

	$overlayClose.on('click', () => {
		$overlay.removeClass('open');
		// $headerIcon.removeClass('is-hidden');
	});


	// HEADER FIXED
	// ------------------------------------------------

	const $headerFixed = $('.header-fixed');
	const $headerFixedCenter = $headerFixed.find('.header-fixed__center');
	const $headerFixedNavigation = $headerFixed.find('.header-fixed__navigation');
	const $headerFixedLinks = $headerFixedNavigation.find('a');
	const $indexBlocks = $('.index > div');

	$(window).on('scroll', () => {
		if ( $(this).scrollTop() > 0 ) {
			$headerFixedCenter.addClass('header-fixed__center--active');
		} else {
			$headerFixedCenter.removeClass('header-fixed__center--active');
		}
	});


	// TOGGLE TOP MENU LINKS ACTIVE
	// --------------------------------------------------

	$headerFixedLinks.on('click', () => {
		const $targetID = $(this).attr('href').replace('#', '');
		$(this).addClass('is-active').siblings().removeClass('is-active');
		$indexBlocks.each( function () {
			if ( $(this).attr('id') === $targetID ) {
				$(this).css('padding-top', $headerFixed.outerHeight() + 20 );
			}
		});
	});


	// SMOOTH SCROLL
	// ------------------------------------------------

	$(function () {
		$('a[href*="#"]:not([href="#"])').on('click', () => {
			if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
				let target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').stop().delay(700).animate({scrollTop: target.offset().top}, 1000);
					return false;
				}
			}
		});
	});


	// HEADER SLIDER
	// ------------------------------------------------

	swiper('.header > .swiper-container', {
		effect: 'fade',
		autoplay: 8500
	});


	// FEATURES IMAGE SLIDE
	// -------------------------------------------------

	const $featuresBlock = $('.features');
	const $featuresImage = $featuresBlock.find('.features__image');

	$(window).on('scroll', function () {
		if ( $(this).scrollTop() > $featuresBlock.offset().top - ( $(this).height() / 3 ) * 2 ) {
			$featuresImage.css('animation-name', 'fadeInRight');
		}
	});


	// PROMO IMAGES SLIDE
	// -------------------------------------------------

	const $promoBlock = $('.promo');
	const $promoImageOne = $promoBlock.find('.promo__image--one');
	const $promoImageTwo = $promoBlock.find('.promo__image--two');

	$(window).on('scroll', () => {
		if ( $(this).scrollTop() > $promoBlock.offset().top - ( $(this).height() / 3 ) * 2 ) {
			$promoImageOne.css('animation-name', 'fadeInUp');
			$promoImageTwo.css('animation-name', 'fadeInUp');
		}
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


	// BACK TO TOP BUTTON
	// -------------------------------------------------

	const $toTopButton = $('.to-top-button');
	$toTopButton.on('click', () => {
		$('html, body').stop().animate({scrollTop: 0}, 2000);
	});

});
