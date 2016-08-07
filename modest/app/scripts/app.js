import $ from 'jquery';
import svg4everybody from 'svg4everybody';
import swiper from 'swiper';
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
		paginationClickable: true,
		breakpoints: {
			500: {
				grabCursor: true
			}
		}
	});


	// TOP MENU FIXED
	// -------------------------------------------

	if ( $(window).width() > 768 ) {
		$(this).on('scroll', function () {
			if ( $(this).scrollTop() > 0 ) {
				$topheader.addClass('topheader--fixed');
			} else {
				$topheader.removeClass('topheader--fixed');
			}
		});
	}

	$(window).on( 'scroll', function () {
		if ( $(this).scrollTop() > $(this).height() / 2 ) {
			$buttonToTop.removeClass('fadeOutRight').addClass('fadeInRight');
		} else {
			$buttonToTop.removeClass('fadeInRight').addClass('fadeOutRight');
		}
	});


	// BACK TO TOP BUTTON
	// ------------------------------------

	$buttonToTop.on('click', function (event) {
		event.preventDefault();
		$('html, body').stop().animate({scrollTop: 0}, 1500);
	});

	$buttonToTop.on('mouseover', function (event) {
		event.preventDefault();
		$(this).addClass('button-to-top--active');
	});

	$buttonToTop.on('mouseout', function (event) {
		event.preventDefault();
		$(this).removeClass('button-to-top--active');
	});

	$(window).on( 'load', function () {
		if ( $(window).width() < 500 ) {
			$buttonToTop.css('display', 'none');
		}
	});

	$(window).on( 'resize', function () {
		if ( $(window).width() < 500 ) {
			$buttonToTop.css('display', 'none');
		}
	});


	// CONTACT HALF BLOCKS EQUAL HEIGHT
	// -------------------------------------
	if ( $(window).width() > 768 ) {
		$('.contact__half').matchHeight();
	}


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

	const $header = $('.topheader__menu');
	const $headerLinks = $header.children('a');
	const $activeClass = 'is-active';
	const $sections = [];
	let $scrolledID = '';
	let $ID = false;
	const $menuMobile = $('.topheader__menu--mobile');
	const $menuIcon = $('.topheader__icon');
	const $menuMobileLinks = $menuMobile.children('a');
	const $menuActiveClass = 'is-visible';

	$headerLinks.each(function () {
		$sections.push( $( $(this).attr('href') ) );
	});

	$headerLinks.on('click', function (event) {
		event.preventDefault();
		$('html, body').stop().animate({scrollTop: $( $(this).attr('href') ).offset().top - $header.outerHeight()}, 1000, 'swing');
	});

	$(window).on('scroll', function (event) {
		event.preventDefault();
		const $scrollTop = $(this).scrollTop() + ($(this).height() / 4);

		for (const i in $sections) {
			const $section = $sections[i];

			if ($scrollTop > $section.offset().top) {
				$scrolledID = $section.attr('id');
			}

			if ($scrolledID !== $ID) {
				$ID = $scrolledID;
				history.pushState(null, null, '#' + $ID);
				$headerLinks.removeClass($activeClass);
				$('a[href="#' + $ID + '"]', $header).addClass($activeClass);
			}
		}
	});

	$(window).trigger('scroll');

	$menuMobile.css( 'top', $topheader.outerHeight() );
	$menuMobileLinks.each( function () {
		$(this).css('height', ( $(window).height() - $topheader.outerHeight() ) / $menuMobileLinks.length );
	});

	$menuIcon.on('click', function (event) {
		event.preventDefault();
		$(this).toggleClass('is-active');
		$menuMobile.toggleClass($menuActiveClass);
	});

	$menuMobileLinks.on('click', function (event) {
		event.preventDefault();
		$(this).parent().removeClass($menuActiveClass);
		$('html, body').stop().animate({scrollTop: $( $(this).attr('href') ).offset().top - $topheader.outerHeight()}, 1500, 'swing');
		$menuIcon.removeClass('is-active');
	});


	// GALLERY SHOW MORE
	// -------------------------------------------------

	const $button = $('.gallery__footer .button');
	const $buttonMore = 'show me more';
	const $buttonLess = 'show me less';
	const $col = $('.gallery .gallery__item');
	let flag = 'short';

	$.fn.toggleText = function ( $more, $less ) {
		$(this).text( ( $(this).text() === $more ) ? $less : $more );
	};

	$button.text($buttonMore);

	$col.each( function ( index ) {
		if ( index < $col.length / 2 ) {
			$(this).css('display', 'block');
		} else {
			$(this).css('display', 'none');
		}
	});

	$button.on( 'click', function () {
		$(this).toggleText( $buttonMore, $buttonLess );
		flag = ( flag === 'short' ) ? 'full' : 'short';
		if ( flag === 'short' ) {
			$col.each( function ( index ) {
				if ( index < $col.length / 2 ) {
					$(this).css('display', 'block');
				} else {
					$(this).css('display', 'none');
				}
			});
		} else if ( flag === 'full' ) {
			$col.each( function () {
				$(this).css('display', 'block');
			});
		}
	});

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
