import $ from 'jquery';
import svg4everybody from 'svg4everybody';
import swiper from 'swiper';
import 'jquery-smooth-scroll';
import 'magnific-popup';
import 'jquery-match-height';
import GoogleMapsLoader from 'google-maps';


$( function () {

	// HEADER SWIPER SLIDER
	// ------------------------------------------

	const $topheader = $('.topheader');
	const $buttonToTop = $('.button-to-top');

	$buttonToTop.addClass('animated fadeOutRight');

	swiper('.header > .swiper-container', {
		effect: 'fade',
		autoplay: 8500,
		pagination: '.swiper-pagination',
		paginationClickable: true
	});


	// TOP MENU FIXED
	// -------------------------------------------

	$(window).on('scroll', function () {
		if ( $(window).scrollTop() > 0 ) {
			$topheader.addClass('topheader--fixed');
		} else {
			$topheader.removeClass('topheader--fixed');
		}
	});

	$(window).on('scroll', function () {
		if ( $(window).scrollTop() > $(window).height() / 2 ) {
			$buttonToTop.removeClass('fadeOutRight').addClass('fadeInRight');
		} else {
			$buttonToTop.removeClass('fadeInRight').addClass('fadeOutRight');
		}
	});


	// BACK TO TOP BUTTON
	// ------------------------------------

	$buttonToTop.on('click', function () {
		$('html, body').stop().animate({scrollTop: 0}, 1500);
	});

	$buttonToTop.on('mouseover', function () {
		$(this).addClass('button-to-top--active');
	});

	$buttonToTop.on('mouseout', function () {
		$(this).removeClass('button-to-top--active');
	});


	// SMOOTH SCROLL NAVIGATION
	// ------------------------------------

	$topheader.find('a').smoothScroll({
		speed: 'auto'
	});


	// CONTACT HALF BLOCKS EQUAL HEIGHT
	// -------------------------------------
	$('.contact__half').matchHeight();


	// GOOGLE MAPS
	// -------------------------------------

	GoogleMapsLoader.KEY = 'AIzaSyB8K34DDu7gT9BqenQE8vJDxx7FQZt4Khg';
	GoogleMapsLoader.LANGUAGE = 'en';

	GoogleMapsLoader.load(function (google) {
		const ahmedabad = document.getElementById('ahmedabadMap');
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


	// SCROLLSPY MENU
	// ------------------------------------------------

	const $navbar = $('.topheader__menu');
	const $navbarLinks = $navbar.find('.topheader__link');
	const $activeClass = 'topheader__link--active';
	const $heightNavbar = $navbar.outerHeight();
	const $sections = [];
	let $scrolledID = '';
	let $ID = false;

	$navbarLinks.each(function () {
		$sections.push($($(this).attr('href')));
	});

	$navbarLinks.on('click', function (e) {
		e.preventDefault();
		$('html, body').stop().animate({scrollTop: $( $(this).attr('href') ).offset().top - $heightNavbar}, 1000);
	});

	$(window).on('scroll', function (e) {
		e.preventDefault();
		const $scrollTop = $(window).scrollTop() + ($(window).height() / 4);

		for (const i in $sections) {
			const $section = $sections[i];

			if ($scrollTop > $section.offset().top) {
				$scrolledID = $section.attr('id');
			}

			if ($scrolledID !== $ID) {
				$ID = $scrolledID;
				history.pushState(null, null, '#' + $ID);
				$navbarLinks.removeClass($activeClass);
				$('a[href="#' + $ID + '"]', $navbar).addClass($activeClass);
			}
		}
	});

	$(window).trigger('scroll');


	// MAGNIFIC POPUP
	// -------------------------------------------------

	$('.gallery').magnificPopup({
		type: 'image',
		delegate: '.gallery-overlay',
		removalDelay: 300,
		mainClass: 'mfp-with-fade',
		gallery: {enabled: true}
	});



	// SVG SPRITE
	// ------------------------------------------------
	svg4everybody();

});
