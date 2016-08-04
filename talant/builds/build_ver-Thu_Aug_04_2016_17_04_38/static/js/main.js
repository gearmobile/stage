/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./static/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// PAGE INDEX
	// ----------------------------------------------------------
	__webpack_require__( 1 );
	__webpack_require__( 2 );
	__webpack_require__( 4 );
	__webpack_require__( 19 );
	__webpack_require__( 20 );
	__webpack_require__( 21 );
	
	// PAGE BLOG
	// ----------------------------------------------------------
	__webpack_require__( 23 );


/***/ },
/* 1 */
/***/ function(module, exports) {

	// TOPHEADER HIDE AND SHOW
	// ------------------------------------
	
	window.addEventListener( 'scroll', function () {
	    var topHeader = document.querySelector( '#topheader' );
	    var topOffset = 50;
	    var scrollOffset = window.pageYOffset || document.documentElement.scrollTop;
	
	    if ( scrollOffset > topOffset ) {
	        topHeader.classList.add( 'is-hidden' );
	    } else {
	        topHeader.classList.remove( 'is-hidden' );
	    }
	}, false );


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	
	// HEADER SLIDER
	// ------------------------------------
	
	var swiper = __webpack_require__( 3 );
	
	window.addEventListener( 'load', function () {
	    swiper( '.header .swiper-container', {
	        nextButton: '.header .swiper-button-next',
	        prevButton: '.header .swiper-button-prev',
	        loop: true,
	        breakpoints: {
	            768: {
	                autoplay: 2000,
	                speed: 800,
	                grabCursor: true
	            },
	            500: {
	                effect: 'fade',
	                grabCursor: false
	            }
	        }
	    });
	}, false );


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Swiper 3.3.1
	 * Most modern mobile touch slider and framework with hardware accelerated transitions
	 * 
	 * http://www.idangero.us/swiper/
	 * 
	 * Copyright 2016, Vladimir Kharlampidi
	 * The iDangero.us
	 * http://www.idangero.us/
	 * 
	 * Licensed under MIT
	 * 
	 * Released on: February 7, 2016
	 */
	(function () {
	    'use strict';
	    var $;
	    /*===========================
	    Swiper
	    ===========================*/
	    var Swiper = function (container, params) {
	        if (!(this instanceof Swiper)) return new Swiper(container, params);
	
	        var defaults = {
	            direction: 'horizontal',
	            touchEventsTarget: 'container',
	            initialSlide: 0,
	            speed: 300,
	            // autoplay
	            autoplay: false,
	            autoplayDisableOnInteraction: true,
	            autoplayStopOnLast: false,
	            // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
	            iOSEdgeSwipeDetection: false,
	            iOSEdgeSwipeThreshold: 20,
	            // Free mode
	            freeMode: false,
	            freeModeMomentum: true,
	            freeModeMomentumRatio: 1,
	            freeModeMomentumBounce: true,
	            freeModeMomentumBounceRatio: 1,
	            freeModeSticky: false,
	            freeModeMinimumVelocity: 0.02,
	            // Autoheight
	            autoHeight: false,
	            // Set wrapper width
	            setWrapperSize: false,
	            // Virtual Translate
	            virtualTranslate: false,
	            // Effects
	            effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
	            coverflow: {
	                rotate: 50,
	                stretch: 0,
	                depth: 100,
	                modifier: 1,
	                slideShadows : true
	            },
	            flip: {
	                slideShadows : true,
	                limitRotation: true
	            },
	            cube: {
	                slideShadows: true,
	                shadow: true,
	                shadowOffset: 20,
	                shadowScale: 0.94
	            },
	            fade: {
	                crossFade: false
	            },
	            // Parallax
	            parallax: false,
	            // Scrollbar
	            scrollbar: null,
	            scrollbarHide: true,
	            scrollbarDraggable: false,
	            scrollbarSnapOnRelease: false,
	            // Keyboard Mousewheel
	            keyboardControl: false,
	            mousewheelControl: false,
	            mousewheelReleaseOnEdges: false,
	            mousewheelInvert: false,
	            mousewheelForceToAxis: false,
	            mousewheelSensitivity: 1,
	            // Hash Navigation
	            hashnav: false,
	            // Breakpoints
	            breakpoints: undefined,
	            // Slides grid
	            spaceBetween: 0,
	            slidesPerView: 1,
	            slidesPerColumn: 1,
	            slidesPerColumnFill: 'column',
	            slidesPerGroup: 1,
	            centeredSlides: false,
	            slidesOffsetBefore: 0, // in px
	            slidesOffsetAfter: 0, // in px
	            // Round length
	            roundLengths: false,
	            // Touches
	            touchRatio: 1,
	            touchAngle: 45,
	            simulateTouch: true,
	            shortSwipes: true,
	            longSwipes: true,
	            longSwipesRatio: 0.5,
	            longSwipesMs: 300,
	            followFinger: true,
	            onlyExternal: false,
	            threshold: 0,
	            touchMoveStopPropagation: true,
	            // Unique Navigation Elements
	            uniqueNavElements: true,
	            // Pagination
	            pagination: null,
	            paginationElement: 'span',
	            paginationClickable: false,
	            paginationHide: false,
	            paginationBulletRender: null,
	            paginationProgressRender: null,
	            paginationFractionRender: null,
	            paginationCustomRender: null,
	            paginationType: 'bullets', // 'bullets' or 'progress' or 'fraction' or 'custom'
	            // Resistance
	            resistance: true,
	            resistanceRatio: 0.85,
	            // Next/prev buttons
	            nextButton: null,
	            prevButton: null,
	            // Progress
	            watchSlidesProgress: false,
	            watchSlidesVisibility: false,
	            // Cursor
	            grabCursor: false,
	            // Clicks
	            preventClicks: true,
	            preventClicksPropagation: true,
	            slideToClickedSlide: false,
	            // Lazy Loading
	            lazyLoading: false,
	            lazyLoadingInPrevNext: false,
	            lazyLoadingInPrevNextAmount: 1,
	            lazyLoadingOnTransitionStart: false,
	            // Images
	            preloadImages: true,
	            updateOnImagesReady: true,
	            // loop
	            loop: false,
	            loopAdditionalSlides: 0,
	            loopedSlides: null,
	            // Control
	            control: undefined,
	            controlInverse: false,
	            controlBy: 'slide', //or 'container'
	            // Swiping/no swiping
	            allowSwipeToPrev: true,
	            allowSwipeToNext: true,
	            swipeHandler: null, //'.swipe-handler',
	            noSwiping: true,
	            noSwipingClass: 'swiper-no-swiping',
	            // NS
	            slideClass: 'swiper-slide',
	            slideActiveClass: 'swiper-slide-active',
	            slideVisibleClass: 'swiper-slide-visible',
	            slideDuplicateClass: 'swiper-slide-duplicate',
	            slideNextClass: 'swiper-slide-next',
	            slidePrevClass: 'swiper-slide-prev',
	            wrapperClass: 'swiper-wrapper',
	            bulletClass: 'swiper-pagination-bullet',
	            bulletActiveClass: 'swiper-pagination-bullet-active',
	            buttonDisabledClass: 'swiper-button-disabled',
	            paginationCurrentClass: 'swiper-pagination-current',
	            paginationTotalClass: 'swiper-pagination-total',
	            paginationHiddenClass: 'swiper-pagination-hidden',
	            paginationProgressbarClass: 'swiper-pagination-progressbar',
	            // Observer
	            observer: false,
	            observeParents: false,
	            // Accessibility
	            a11y: false,
	            prevSlideMessage: 'Previous slide',
	            nextSlideMessage: 'Next slide',
	            firstSlideMessage: 'This is the first slide',
	            lastSlideMessage: 'This is the last slide',
	            paginationBulletMessage: 'Go to slide {{index}}',
	            // Callbacks
	            runCallbacksOnInit: true
	            /*
	            Callbacks:
	            onInit: function (swiper)
	            onDestroy: function (swiper)
	            onClick: function (swiper, e)
	            onTap: function (swiper, e)
	            onDoubleTap: function (swiper, e)
	            onSliderMove: function (swiper, e)
	            onSlideChangeStart: function (swiper)
	            onSlideChangeEnd: function (swiper)
	            onTransitionStart: function (swiper)
	            onTransitionEnd: function (swiper)
	            onImagesReady: function (swiper)
	            onProgress: function (swiper, progress)
	            onTouchStart: function (swiper, e)
	            onTouchMove: function (swiper, e)
	            onTouchMoveOpposite: function (swiper, e)
	            onTouchEnd: function (swiper, e)
	            onReachBeginning: function (swiper)
	            onReachEnd: function (swiper)
	            onSetTransition: function (swiper, duration)
	            onSetTranslate: function (swiper, translate)
	            onAutoplayStart: function (swiper)
	            onAutoplayStop: function (swiper),
	            onLazyImageLoad: function (swiper, slide, image)
	            onLazyImageReady: function (swiper, slide, image)
	            */
	        
	        };
	        var initialVirtualTranslate = params && params.virtualTranslate;
	        
	        params = params || {};
	        var originalParams = {};
	        for (var param in params) {
	            if (typeof params[param] === 'object' && params[param] !== null && !(params[param].nodeType || params[param] === window || params[param] === document || (typeof Dom7 !== 'undefined' && params[param] instanceof Dom7) || (typeof jQuery !== 'undefined' && params[param] instanceof jQuery))) {
	                originalParams[param] = {};
	                for (var deepParam in params[param]) {
	                    originalParams[param][deepParam] = params[param][deepParam];
	                }
	            }
	            else {
	                originalParams[param] = params[param];
	            }
	        }
	        for (var def in defaults) {
	            if (typeof params[def] === 'undefined') {
	                params[def] = defaults[def];
	            }
	            else if (typeof params[def] === 'object') {
	                for (var deepDef in defaults[def]) {
	                    if (typeof params[def][deepDef] === 'undefined') {
	                        params[def][deepDef] = defaults[def][deepDef];
	                    }
	                }
	            }
	        }
	        
	        // Swiper
	        var s = this;
	        
	        // Params
	        s.params = params;
	        s.originalParams = originalParams;
	        
	        // Classname
	        s.classNames = [];
	        /*=========================
	          Dom Library and plugins
	          ===========================*/
	        if (typeof $ !== 'undefined' && typeof Dom7 !== 'undefined'){
	            $ = Dom7;
	        }
	        if (typeof $ === 'undefined') {
	            if (typeof Dom7 === 'undefined') {
	                $ = window.Dom7 || window.Zepto || window.jQuery;
	            }
	            else {
	                $ = Dom7;
	            }
	            if (!$) return;
	        }
	        // Export it to Swiper instance
	        s.$ = $;
	        
	        /*=========================
	          Breakpoints
	          ===========================*/
	        s.currentBreakpoint = undefined;
	        s.getActiveBreakpoint = function () {
	            //Get breakpoint for window width
	            if (!s.params.breakpoints) return false;
	            var breakpoint = false;
	            var points = [], point;
	            for ( point in s.params.breakpoints ) {
	                if (s.params.breakpoints.hasOwnProperty(point)) {
	                    points.push(point);
	                }
	            }
	            points.sort(function (a, b) {
	                return parseInt(a, 10) > parseInt(b, 10);
	            });
	            for (var i = 0; i < points.length; i++) {
	                point = points[i];
	                if (point >= window.innerWidth && !breakpoint) {
	                    breakpoint = point;
	                }
	            }
	            return breakpoint || 'max';
	        };
	        s.setBreakpoint = function () {
	            //Set breakpoint for window width and update parameters
	            var breakpoint = s.getActiveBreakpoint();
	            if (breakpoint && s.currentBreakpoint !== breakpoint) {
	                var breakPointsParams = breakpoint in s.params.breakpoints ? s.params.breakpoints[breakpoint] : s.originalParams;
	                var needsReLoop = s.params.loop && (breakPointsParams.slidesPerView !== s.params.slidesPerView);
	                for ( var param in breakPointsParams ) {
	                    s.params[param] = breakPointsParams[param];
	                }
	                s.currentBreakpoint = breakpoint;
	                if(needsReLoop && s.destroyLoop) {
	                    s.reLoop(true);
	                }
	            }
	        };
	        // Set breakpoint on load
	        if (s.params.breakpoints) {
	            s.setBreakpoint();
	        }
	        
	        /*=========================
	          Preparation - Define Container, Wrapper and Pagination
	          ===========================*/
	        s.container = $(container);
	        if (s.container.length === 0) return;
	        if (s.container.length > 1) {
	            var swipers = [];
	            s.container.each(function () {
	                var container = this;
	                swipers.push(new Swiper(this, params));
	            });
	            return swipers;
	        }
	        
	        // Save instance in container HTML Element and in data
	        s.container[0].swiper = s;
	        s.container.data('swiper', s);
	        
	        s.classNames.push('swiper-container-' + s.params.direction);
	        
	        if (s.params.freeMode) {
	            s.classNames.push('swiper-container-free-mode');
	        }
	        if (!s.support.flexbox) {
	            s.classNames.push('swiper-container-no-flexbox');
	            s.params.slidesPerColumn = 1;
	        }
	        if (s.params.autoHeight) {
	            s.classNames.push('swiper-container-autoheight');
	        }
	        // Enable slides progress when required
	        if (s.params.parallax || s.params.watchSlidesVisibility) {
	            s.params.watchSlidesProgress = true;
	        }
	        // Coverflow / 3D
	        if (['cube', 'coverflow', 'flip'].indexOf(s.params.effect) >= 0) {
	            if (s.support.transforms3d) {
	                s.params.watchSlidesProgress = true;
	                s.classNames.push('swiper-container-3d');
	            }
	            else {
	                s.params.effect = 'slide';
	            }
	        }
	        if (s.params.effect !== 'slide') {
	            s.classNames.push('swiper-container-' + s.params.effect);
	        }
	        if (s.params.effect === 'cube') {
	            s.params.resistanceRatio = 0;
	            s.params.slidesPerView = 1;
	            s.params.slidesPerColumn = 1;
	            s.params.slidesPerGroup = 1;
	            s.params.centeredSlides = false;
	            s.params.spaceBetween = 0;
	            s.params.virtualTranslate = true;
	            s.params.setWrapperSize = false;
	        }
	        if (s.params.effect === 'fade' || s.params.effect === 'flip') {
	            s.params.slidesPerView = 1;
	            s.params.slidesPerColumn = 1;
	            s.params.slidesPerGroup = 1;
	            s.params.watchSlidesProgress = true;
	            s.params.spaceBetween = 0;
	            s.params.setWrapperSize = false;
	            if (typeof initialVirtualTranslate === 'undefined') {
	                s.params.virtualTranslate = true;
	            }
	        }
	        
	        // Grab Cursor
	        if (s.params.grabCursor && s.support.touch) {
	            s.params.grabCursor = false;
	        }
	        
	        // Wrapper
	        s.wrapper = s.container.children('.' + s.params.wrapperClass);
	        
	        // Pagination
	        if (s.params.pagination) {
	            s.paginationContainer = $(s.params.pagination);
	            if (s.params.uniqueNavElements && typeof s.params.pagination === 'string' && s.paginationContainer.length > 1 && s.container.find(s.params.pagination).length === 1) {
	                s.paginationContainer = s.container.find(s.params.pagination);
	            }
	        
	            if (s.params.paginationType === 'bullets' && s.params.paginationClickable) {
	                s.paginationContainer.addClass('swiper-pagination-clickable');
	            }
	            else {
	                s.params.paginationClickable = false;
	            }
	            s.paginationContainer.addClass('swiper-pagination-' + s.params.paginationType);
	        }
	        // Next/Prev Buttons
	        if (s.params.nextButton || s.params.prevButton) {
	            if (s.params.nextButton) {
	                s.nextButton = $(s.params.nextButton);
	                if (s.params.uniqueNavElements && typeof s.params.nextButton === 'string' && s.nextButton.length > 1 && s.container.find(s.params.nextButton).length === 1) {
	                    s.nextButton = s.container.find(s.params.nextButton);
	                }
	            }
	            if (s.params.prevButton) {
	                s.prevButton = $(s.params.prevButton);
	                if (s.params.uniqueNavElements && typeof s.params.prevButton === 'string' && s.prevButton.length > 1 && s.container.find(s.params.prevButton).length === 1) {
	                    s.prevButton = s.container.find(s.params.prevButton);
	                }
	            }
	        }
	        
	        // Is Horizontal
	        s.isHorizontal = function () {
	            return s.params.direction === 'horizontal';
	        };
	        // s.isH = isH;
	        
	        // RTL
	        s.rtl = s.isHorizontal() && (s.container[0].dir.toLowerCase() === 'rtl' || s.container.css('direction') === 'rtl');
	        if (s.rtl) {
	            s.classNames.push('swiper-container-rtl');
	        }
	        
	        // Wrong RTL support
	        if (s.rtl) {
	            s.wrongRTL = s.wrapper.css('display') === '-webkit-box';
	        }
	        
	        // Columns
	        if (s.params.slidesPerColumn > 1) {
	            s.classNames.push('swiper-container-multirow');
	        }
	        
	        // Check for Android
	        if (s.device.android) {
	            s.classNames.push('swiper-container-android');
	        }
	        
	        // Add classes
	        s.container.addClass(s.classNames.join(' '));
	        
	        // Translate
	        s.translate = 0;
	        
	        // Progress
	        s.progress = 0;
	        
	        // Velocity
	        s.velocity = 0;
	        
	        /*=========================
	          Locks, unlocks
	          ===========================*/
	        s.lockSwipeToNext = function () {
	            s.params.allowSwipeToNext = false;
	        };
	        s.lockSwipeToPrev = function () {
	            s.params.allowSwipeToPrev = false;
	        };
	        s.lockSwipes = function () {
	            s.params.allowSwipeToNext = s.params.allowSwipeToPrev = false;
	        };
	        s.unlockSwipeToNext = function () {
	            s.params.allowSwipeToNext = true;
	        };
	        s.unlockSwipeToPrev = function () {
	            s.params.allowSwipeToPrev = true;
	        };
	        s.unlockSwipes = function () {
	            s.params.allowSwipeToNext = s.params.allowSwipeToPrev = true;
	        };
	        
	        /*=========================
	          Round helper
	          ===========================*/
	        function round(a) {
	            return Math.floor(a);
	        }
	        /*=========================
	          Set grab cursor
	          ===========================*/
	        if (s.params.grabCursor) {
	            s.container[0].style.cursor = 'move';
	            s.container[0].style.cursor = '-webkit-grab';
	            s.container[0].style.cursor = '-moz-grab';
	            s.container[0].style.cursor = 'grab';
	        }
	        /*=========================
	          Update on Images Ready
	          ===========================*/
	        s.imagesToLoad = [];
	        s.imagesLoaded = 0;
	        
	        s.loadImage = function (imgElement, src, srcset, checkForComplete, callback) {
	            var image;
	            function onReady () {
	                if (callback) callback();
	            }
	            if (!imgElement.complete || !checkForComplete) {
	                if (src) {
	                    image = new window.Image();
	                    image.onload = onReady;
	                    image.onerror = onReady;
	                    if (srcset) {
	                        image.srcset = srcset;
	                    }
	                    if (src) {
	                        image.src = src;
	                    }
	                } else {
	                    onReady();
	                }
	        
	            } else {//image already loaded...
	                onReady();
	            }
	        };
	        s.preloadImages = function () {
	            s.imagesToLoad = s.container.find('img');
	            function _onReady() {
	                if (typeof s === 'undefined' || s === null) return;
	                if (s.imagesLoaded !== undefined) s.imagesLoaded++;
	                if (s.imagesLoaded === s.imagesToLoad.length) {
	                    if (s.params.updateOnImagesReady) s.update();
	                    s.emit('onImagesReady', s);
	                }
	            }
	            for (var i = 0; i < s.imagesToLoad.length; i++) {
	                s.loadImage(s.imagesToLoad[i], (s.imagesToLoad[i].currentSrc || s.imagesToLoad[i].getAttribute('src')), (s.imagesToLoad[i].srcset || s.imagesToLoad[i].getAttribute('srcset')), true, _onReady);
	            }
	        };
	        
	        /*=========================
	          Autoplay
	          ===========================*/
	        s.autoplayTimeoutId = undefined;
	        s.autoplaying = false;
	        s.autoplayPaused = false;
	        function autoplay() {
	            s.autoplayTimeoutId = setTimeout(function () {
	                if (s.params.loop) {
	                    s.fixLoop();
	                    s._slideNext();
	                    s.emit('onAutoplay', s);
	                }
	                else {
	                    if (!s.isEnd) {
	                        s._slideNext();
	                        s.emit('onAutoplay', s);
	                    }
	                    else {
	                        if (!params.autoplayStopOnLast) {
	                            s._slideTo(0);
	                            s.emit('onAutoplay', s);
	                        }
	                        else {
	                            s.stopAutoplay();
	                        }
	                    }
	                }
	            }, s.params.autoplay);
	        }
	        s.startAutoplay = function () {
	            if (typeof s.autoplayTimeoutId !== 'undefined') return false;
	            if (!s.params.autoplay) return false;
	            if (s.autoplaying) return false;
	            s.autoplaying = true;
	            s.emit('onAutoplayStart', s);
	            autoplay();
	        };
	        s.stopAutoplay = function (internal) {
	            if (!s.autoplayTimeoutId) return;
	            if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
	            s.autoplaying = false;
	            s.autoplayTimeoutId = undefined;
	            s.emit('onAutoplayStop', s);
	        };
	        s.pauseAutoplay = function (speed) {
	            if (s.autoplayPaused) return;
	            if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
	            s.autoplayPaused = true;
	            if (speed === 0) {
	                s.autoplayPaused = false;
	                autoplay();
	            }
	            else {
	                s.wrapper.transitionEnd(function () {
	                    if (!s) return;
	                    s.autoplayPaused = false;
	                    if (!s.autoplaying) {
	                        s.stopAutoplay();
	                    }
	                    else {
	                        autoplay();
	                    }
	                });
	            }
	        };
	        /*=========================
	          Min/Max Translate
	          ===========================*/
	        s.minTranslate = function () {
	            return (-s.snapGrid[0]);
	        };
	        s.maxTranslate = function () {
	            return (-s.snapGrid[s.snapGrid.length - 1]);
	        };
	        /*=========================
	          Slider/slides sizes
	          ===========================*/
	        s.updateAutoHeight = function () {
	            // Update Height
	            var slide = s.slides.eq(s.activeIndex)[0];
	            if (typeof slide !== 'undefined') {
	                var newHeight = slide.offsetHeight;
	                if (newHeight) s.wrapper.css('height', newHeight + 'px');
	            }
	        };
	        s.updateContainerSize = function () {
	            var width, height;
	            if (typeof s.params.width !== 'undefined') {
	                width = s.params.width;
	            }
	            else {
	                width = s.container[0].clientWidth;
	            }
	            if (typeof s.params.height !== 'undefined') {
	                height = s.params.height;
	            }
	            else {
	                height = s.container[0].clientHeight;
	            }
	            if (width === 0 && s.isHorizontal() || height === 0 && !s.isHorizontal()) {
	                return;
	            }
	        
	            //Subtract paddings
	            width = width - parseInt(s.container.css('padding-left'), 10) - parseInt(s.container.css('padding-right'), 10);
	            height = height - parseInt(s.container.css('padding-top'), 10) - parseInt(s.container.css('padding-bottom'), 10);
	        
	            // Store values
	            s.width = width;
	            s.height = height;
	            s.size = s.isHorizontal() ? s.width : s.height;
	        };
	        
	        s.updateSlidesSize = function () {
	            s.slides = s.wrapper.children('.' + s.params.slideClass);
	            s.snapGrid = [];
	            s.slidesGrid = [];
	            s.slidesSizesGrid = [];
	        
	            var spaceBetween = s.params.spaceBetween,
	                slidePosition = -s.params.slidesOffsetBefore,
	                i,
	                prevSlideSize = 0,
	                index = 0;
	            if (typeof s.size === 'undefined') return;
	            if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
	                spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * s.size;
	            }
	        
	            s.virtualSize = -spaceBetween;
	            // reset margins
	            if (s.rtl) s.slides.css({marginLeft: '', marginTop: ''});
	            else s.slides.css({marginRight: '', marginBottom: ''});
	        
	            var slidesNumberEvenToRows;
	            if (s.params.slidesPerColumn > 1) {
	                if (Math.floor(s.slides.length / s.params.slidesPerColumn) === s.slides.length / s.params.slidesPerColumn) {
	                    slidesNumberEvenToRows = s.slides.length;
	                }
	                else {
	                    slidesNumberEvenToRows = Math.ceil(s.slides.length / s.params.slidesPerColumn) * s.params.slidesPerColumn;
	                }
	                if (s.params.slidesPerView !== 'auto' && s.params.slidesPerColumnFill === 'row') {
	                    slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, s.params.slidesPerView * s.params.slidesPerColumn);
	                }
	            }
	        
	            // Calc slides
	            var slideSize;
	            var slidesPerColumn = s.params.slidesPerColumn;
	            var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
	            var numFullColumns = slidesPerRow - (s.params.slidesPerColumn * slidesPerRow - s.slides.length);
	            for (i = 0; i < s.slides.length; i++) {
	                slideSize = 0;
	                var slide = s.slides.eq(i);
	                if (s.params.slidesPerColumn > 1) {
	                    // Set slides order
	                    var newSlideOrderIndex;
	                    var column, row;
	                    if (s.params.slidesPerColumnFill === 'column') {
	                        column = Math.floor(i / slidesPerColumn);
	                        row = i - column * slidesPerColumn;
	                        if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn-1)) {
	                            if (++row >= slidesPerColumn) {
	                                row = 0;
	                                column++;
	                            }
	                        }
	                        newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
	                        slide
	                            .css({
	                                '-webkit-box-ordinal-group': newSlideOrderIndex,
	                                '-moz-box-ordinal-group': newSlideOrderIndex,
	                                '-ms-flex-order': newSlideOrderIndex,
	                                '-webkit-order': newSlideOrderIndex,
	                                'order': newSlideOrderIndex
	                            });
	                    }
	                    else {
	                        row = Math.floor(i / slidesPerRow);
	                        column = i - row * slidesPerRow;
	                    }
	                    slide
	                        .css({
	                            'margin-top': (row !== 0 && s.params.spaceBetween) && (s.params.spaceBetween + 'px')
	                        })
	                        .attr('data-swiper-column', column)
	                        .attr('data-swiper-row', row);
	        
	                }
	                if (slide.css('display') === 'none') continue;
	                if (s.params.slidesPerView === 'auto') {
	                    slideSize = s.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
	                    if (s.params.roundLengths) slideSize = round(slideSize);
	                }
	                else {
	                    slideSize = (s.size - (s.params.slidesPerView - 1) * spaceBetween) / s.params.slidesPerView;
	                    if (s.params.roundLengths) slideSize = round(slideSize);
	        
	                    if (s.isHorizontal()) {
	                        s.slides[i].style.width = slideSize + 'px';
	                    }
	                    else {
	                        s.slides[i].style.height = slideSize + 'px';
	                    }
	                }
	                s.slides[i].swiperSlideSize = slideSize;
	                s.slidesSizesGrid.push(slideSize);
	        
	        
	                if (s.params.centeredSlides) {
	                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
	                    if (i === 0) slidePosition = slidePosition - s.size / 2 - spaceBetween;
	                    if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
	                    if ((index) % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
	                    s.slidesGrid.push(slidePosition);
	                }
	                else {
	                    if ((index) % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
	                    s.slidesGrid.push(slidePosition);
	                    slidePosition = slidePosition + slideSize + spaceBetween;
	                }
	        
	                s.virtualSize += slideSize + spaceBetween;
	        
	                prevSlideSize = slideSize;
	        
	                index ++;
	            }
	            s.virtualSize = Math.max(s.virtualSize, s.size) + s.params.slidesOffsetAfter;
	            var newSlidesGrid;
	        
	            if (
	                s.rtl && s.wrongRTL && (s.params.effect === 'slide' || s.params.effect === 'coverflow')) {
	                s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
	            }
	            if (!s.support.flexbox || s.params.setWrapperSize) {
	                if (s.isHorizontal()) s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
	                else s.wrapper.css({height: s.virtualSize + s.params.spaceBetween + 'px'});
	            }
	        
	            if (s.params.slidesPerColumn > 1) {
	                s.virtualSize = (slideSize + s.params.spaceBetween) * slidesNumberEvenToRows;
	                s.virtualSize = Math.ceil(s.virtualSize / s.params.slidesPerColumn) - s.params.spaceBetween;
	                s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
	                if (s.params.centeredSlides) {
	                    newSlidesGrid = [];
	                    for (i = 0; i < s.snapGrid.length; i++) {
	                        if (s.snapGrid[i] < s.virtualSize + s.snapGrid[0]) newSlidesGrid.push(s.snapGrid[i]);
	                    }
	                    s.snapGrid = newSlidesGrid;
	                }
	            }
	        
	            // Remove last grid elements depending on width
	            if (!s.params.centeredSlides) {
	                newSlidesGrid = [];
	                for (i = 0; i < s.snapGrid.length; i++) {
	                    if (s.snapGrid[i] <= s.virtualSize - s.size) {
	                        newSlidesGrid.push(s.snapGrid[i]);
	                    }
	                }
	                s.snapGrid = newSlidesGrid;
	                if (Math.floor(s.virtualSize - s.size) - Math.floor(s.snapGrid[s.snapGrid.length - 1]) > 1) {
	                    s.snapGrid.push(s.virtualSize - s.size);
	                }
	            }
	            if (s.snapGrid.length === 0) s.snapGrid = [0];
	        
	            if (s.params.spaceBetween !== 0) {
	                if (s.isHorizontal()) {
	                    if (s.rtl) s.slides.css({marginLeft: spaceBetween + 'px'});
	                    else s.slides.css({marginRight: spaceBetween + 'px'});
	                }
	                else s.slides.css({marginBottom: spaceBetween + 'px'});
	            }
	            if (s.params.watchSlidesProgress) {
	                s.updateSlidesOffset();
	            }
	        };
	        s.updateSlidesOffset = function () {
	            for (var i = 0; i < s.slides.length; i++) {
	                s.slides[i].swiperSlideOffset = s.isHorizontal() ? s.slides[i].offsetLeft : s.slides[i].offsetTop;
	            }
	        };
	        
	        /*=========================
	          Slider/slides progress
	          ===========================*/
	        s.updateSlidesProgress = function (translate) {
	            if (typeof translate === 'undefined') {
	                translate = s.translate || 0;
	            }
	            if (s.slides.length === 0) return;
	            if (typeof s.slides[0].swiperSlideOffset === 'undefined') s.updateSlidesOffset();
	        
	            var offsetCenter = -translate;
	            if (s.rtl) offsetCenter = translate;
	        
	            // Visible Slides
	            s.slides.removeClass(s.params.slideVisibleClass);
	            for (var i = 0; i < s.slides.length; i++) {
	                var slide = s.slides[i];
	                var slideProgress = (offsetCenter - slide.swiperSlideOffset) / (slide.swiperSlideSize + s.params.spaceBetween);
	                if (s.params.watchSlidesVisibility) {
	                    var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
	                    var slideAfter = slideBefore + s.slidesSizesGrid[i];
	                    var isVisible =
	                        (slideBefore >= 0 && slideBefore < s.size) ||
	                        (slideAfter > 0 && slideAfter <= s.size) ||
	                        (slideBefore <= 0 && slideAfter >= s.size);
	                    if (isVisible) {
	                        s.slides.eq(i).addClass(s.params.slideVisibleClass);
	                    }
	                }
	                slide.progress = s.rtl ? -slideProgress : slideProgress;
	            }
	        };
	        s.updateProgress = function (translate) {
	            if (typeof translate === 'undefined') {
	                translate = s.translate || 0;
	            }
	            var translatesDiff = s.maxTranslate() - s.minTranslate();
	            var wasBeginning = s.isBeginning;
	            var wasEnd = s.isEnd;
	            if (translatesDiff === 0) {
	                s.progress = 0;
	                s.isBeginning = s.isEnd = true;
	            }
	            else {
	                s.progress = (translate - s.minTranslate()) / (translatesDiff);
	                s.isBeginning = s.progress <= 0;
	                s.isEnd = s.progress >= 1;
	            }
	            if (s.isBeginning && !wasBeginning) s.emit('onReachBeginning', s);
	            if (s.isEnd && !wasEnd) s.emit('onReachEnd', s);
	        
	            if (s.params.watchSlidesProgress) s.updateSlidesProgress(translate);
	            s.emit('onProgress', s, s.progress);
	        };
	        s.updateActiveIndex = function () {
	            var translate = s.rtl ? s.translate : -s.translate;
	            var newActiveIndex, i, snapIndex;
	            for (i = 0; i < s.slidesGrid.length; i ++) {
	                if (typeof s.slidesGrid[i + 1] !== 'undefined') {
	                    if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1] - (s.slidesGrid[i + 1] - s.slidesGrid[i]) / 2) {
	                        newActiveIndex = i;
	                    }
	                    else if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1]) {
	                        newActiveIndex = i + 1;
	                    }
	                }
	                else {
	                    if (translate >= s.slidesGrid[i]) {
	                        newActiveIndex = i;
	                    }
	                }
	            }
	            // Normalize slideIndex
	            if (newActiveIndex < 0 || typeof newActiveIndex === 'undefined') newActiveIndex = 0;
	            // for (i = 0; i < s.slidesGrid.length; i++) {
	                // if (- translate >= s.slidesGrid[i]) {
	                    // newActiveIndex = i;
	                // }
	            // }
	            snapIndex = Math.floor(newActiveIndex / s.params.slidesPerGroup);
	            if (snapIndex >= s.snapGrid.length) snapIndex = s.snapGrid.length - 1;
	        
	            if (newActiveIndex === s.activeIndex) {
	                return;
	            }
	            s.snapIndex = snapIndex;
	            s.previousIndex = s.activeIndex;
	            s.activeIndex = newActiveIndex;
	            s.updateClasses();
	        };
	        
	        /*=========================
	          Classes
	          ===========================*/
	        s.updateClasses = function () {
	            s.slides.removeClass(s.params.slideActiveClass + ' ' + s.params.slideNextClass + ' ' + s.params.slidePrevClass);
	            var activeSlide = s.slides.eq(s.activeIndex);
	            // Active classes
	            activeSlide.addClass(s.params.slideActiveClass);
	            // Next Slide
	            var nextSlide = activeSlide.next('.' + s.params.slideClass).addClass(s.params.slideNextClass);
	            if (s.params.loop && nextSlide.length === 0) {
	                s.slides.eq(0).addClass(s.params.slideNextClass);
	            }
	            // Prev Slide
	            var prevSlide = activeSlide.prev('.' + s.params.slideClass).addClass(s.params.slidePrevClass);
	            if (s.params.loop && prevSlide.length === 0) {
	                s.slides.eq(-1).addClass(s.params.slidePrevClass);
	            }
	        
	            // Pagination
	            if (s.paginationContainer && s.paginationContainer.length > 0) {
	                // Current/Total
	                var current,
	                    total = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
	                if (s.params.loop) {
	                    current = Math.ceil((s.activeIndex - s.loopedSlides)/s.params.slidesPerGroup);
	                    if (current > s.slides.length - 1 - s.loopedSlides * 2) {
	                        current = current - (s.slides.length - s.loopedSlides * 2);
	                    }
	                    if (current > total - 1) current = current - total;
	                    if (current < 0 && s.params.paginationType !== 'bullets') current = total + current;
	                }
	                else {
	                    if (typeof s.snapIndex !== 'undefined') {
	                        current = s.snapIndex;
	                    }
	                    else {
	                        current = s.activeIndex || 0;
	                    }
	                }
	                // Types
	                if (s.params.paginationType === 'bullets' && s.bullets && s.bullets.length > 0) {
	                    s.bullets.removeClass(s.params.bulletActiveClass);
	                    if (s.paginationContainer.length > 1) {
	                        s.bullets.each(function () {
	                            if ($(this).index() === current) $(this).addClass(s.params.bulletActiveClass);
	                        });
	                    }
	                    else {
	                        s.bullets.eq(current).addClass(s.params.bulletActiveClass);
	                    }
	                }
	                if (s.params.paginationType === 'fraction') {
	                    s.paginationContainer.find('.' + s.params.paginationCurrentClass).text(current + 1);
	                    s.paginationContainer.find('.' + s.params.paginationTotalClass).text(total);
	                }
	                if (s.params.paginationType === 'progress') {
	                    var scale = (current + 1) / total,
	                        scaleX = scale,
	                        scaleY = 1;
	                    if (!s.isHorizontal()) {
	                        scaleY = scale;
	                        scaleX = 1;
	                    }
	                    s.paginationContainer.find('.' + s.params.paginationProgressbarClass).transform('translate3d(0,0,0) scaleX(' + scaleX + ') scaleY(' + scaleY + ')').transition(s.params.speed);
	                }
	                if (s.params.paginationType === 'custom' && s.params.paginationCustomRender) {
	                    s.paginationContainer.html(s.params.paginationCustomRender(s, current + 1, total));
	                    s.emit('onPaginationRendered', s, s.paginationContainer[0]);
	                }
	            }
	        
	            // Next/active buttons
	            if (!s.params.loop) {
	                if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
	                    if (s.isBeginning) {
	                        s.prevButton.addClass(s.params.buttonDisabledClass);
	                        if (s.params.a11y && s.a11y) s.a11y.disable(s.prevButton);
	                    }
	                    else {
	                        s.prevButton.removeClass(s.params.buttonDisabledClass);
	                        if (s.params.a11y && s.a11y) s.a11y.enable(s.prevButton);
	                    }
	                }
	                if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
	                    if (s.isEnd) {
	                        s.nextButton.addClass(s.params.buttonDisabledClass);
	                        if (s.params.a11y && s.a11y) s.a11y.disable(s.nextButton);
	                    }
	                    else {
	                        s.nextButton.removeClass(s.params.buttonDisabledClass);
	                        if (s.params.a11y && s.a11y) s.a11y.enable(s.nextButton);
	                    }
	                }
	            }
	        };
	        
	        /*=========================
	          Pagination
	          ===========================*/
	        s.updatePagination = function () {
	            if (!s.params.pagination) return;
	            if (s.paginationContainer && s.paginationContainer.length > 0) {
	                var paginationHTML = '';
	                if (s.params.paginationType === 'bullets') {
	                    var numberOfBullets = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
	                    for (var i = 0; i < numberOfBullets; i++) {
	                        if (s.params.paginationBulletRender) {
	                            paginationHTML += s.params.paginationBulletRender(i, s.params.bulletClass);
	                        }
	                        else {
	                            paginationHTML += '<' + s.params.paginationElement+' class="' + s.params.bulletClass + '"></' + s.params.paginationElement + '>';
	                        }
	                    }
	                    s.paginationContainer.html(paginationHTML);
	                    s.bullets = s.paginationContainer.find('.' + s.params.bulletClass);
	                    if (s.params.paginationClickable && s.params.a11y && s.a11y) {
	                        s.a11y.initPagination();
	                    }
	                }
	                if (s.params.paginationType === 'fraction') {
	                    if (s.params.paginationFractionRender) {
	                        paginationHTML = s.params.paginationFractionRender(s, s.params.paginationCurrentClass, s.params.paginationTotalClass);
	                    }
	                    else {
	                        paginationHTML =
	                            '<span class="' + s.params.paginationCurrentClass + '"></span>' +
	                            ' / ' +
	                            '<span class="' + s.params.paginationTotalClass+'"></span>';
	                    }
	                    s.paginationContainer.html(paginationHTML);
	                }
	                if (s.params.paginationType === 'progress') {
	                    if (s.params.paginationProgressRender) {
	                        paginationHTML = s.params.paginationProgressRender(s, s.params.paginationProgressbarClass);
	                    }
	                    else {
	                        paginationHTML = '<span class="' + s.params.paginationProgressbarClass + '"></span>';
	                    }
	                    s.paginationContainer.html(paginationHTML);
	                }
	                if (s.params.paginationType !== 'custom') {
	                    s.emit('onPaginationRendered', s, s.paginationContainer[0]);
	                }
	            }
	        };
	        /*=========================
	          Common update method
	          ===========================*/
	        s.update = function (updateTranslate) {
	            s.updateContainerSize();
	            s.updateSlidesSize();
	            s.updateProgress();
	            s.updatePagination();
	            s.updateClasses();
	            if (s.params.scrollbar && s.scrollbar) {
	                s.scrollbar.set();
	            }
	            function forceSetTranslate() {
	                newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
	                s.setWrapperTranslate(newTranslate);
	                s.updateActiveIndex();
	                s.updateClasses();
	            }
	            if (updateTranslate) {
	                var translated, newTranslate;
	                if (s.controller && s.controller.spline) {
	                    s.controller.spline = undefined;
	                }
	                if (s.params.freeMode) {
	                    forceSetTranslate();
	                    if (s.params.autoHeight) {
	                        s.updateAutoHeight();
	                    }
	                }
	                else {
	                    if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
	                        translated = s.slideTo(s.slides.length - 1, 0, false, true);
	                    }
	                    else {
	                        translated = s.slideTo(s.activeIndex, 0, false, true);
	                    }
	                    if (!translated) {
	                        forceSetTranslate();
	                    }
	                }
	            }
	            else if (s.params.autoHeight) {
	                s.updateAutoHeight();
	            }
	        };
	        
	        /*=========================
	          Resize Handler
	          ===========================*/
	        s.onResize = function (forceUpdatePagination) {
	            //Breakpoints
	            if (s.params.breakpoints) {
	                s.setBreakpoint();
	            }
	        
	            // Disable locks on resize
	            var allowSwipeToPrev = s.params.allowSwipeToPrev;
	            var allowSwipeToNext = s.params.allowSwipeToNext;
	            s.params.allowSwipeToPrev = s.params.allowSwipeToNext = true;
	        
	            s.updateContainerSize();
	            s.updateSlidesSize();
	            if (s.params.slidesPerView === 'auto' || s.params.freeMode || forceUpdatePagination) s.updatePagination();
	            if (s.params.scrollbar && s.scrollbar) {
	                s.scrollbar.set();
	            }
	            if (s.controller && s.controller.spline) {
	                s.controller.spline = undefined;
	            }
	            var slideChangedBySlideTo = false;
	            if (s.params.freeMode) {
	                var newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
	                s.setWrapperTranslate(newTranslate);
	                s.updateActiveIndex();
	                s.updateClasses();
	        
	                if (s.params.autoHeight) {
	                    s.updateAutoHeight();
	                }
	            }
	            else {
	                s.updateClasses();
	                if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
	                    slideChangedBySlideTo = s.slideTo(s.slides.length - 1, 0, false, true);
	                }
	                else {
	                    slideChangedBySlideTo = s.slideTo(s.activeIndex, 0, false, true);
	                }
	            }
	            if (s.params.lazyLoading && !slideChangedBySlideTo && s.lazy) {
	                s.lazy.load();
	            }
	            // Return locks after resize
	            s.params.allowSwipeToPrev = allowSwipeToPrev;
	            s.params.allowSwipeToNext = allowSwipeToNext;
	        };
	        
	        /*=========================
	          Events
	          ===========================*/
	        
	        //Define Touch Events
	        var desktopEvents = ['mousedown', 'mousemove', 'mouseup'];
	        if (window.navigator.pointerEnabled) desktopEvents = ['pointerdown', 'pointermove', 'pointerup'];
	        else if (window.navigator.msPointerEnabled) desktopEvents = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
	        s.touchEvents = {
	            start : s.support.touch || !s.params.simulateTouch  ? 'touchstart' : desktopEvents[0],
	            move : s.support.touch || !s.params.simulateTouch ? 'touchmove' : desktopEvents[1],
	            end : s.support.touch || !s.params.simulateTouch ? 'touchend' : desktopEvents[2]
	        };
	        
	        
	        // WP8 Touch Events Fix
	        if (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) {
	            (s.params.touchEventsTarget === 'container' ? s.container : s.wrapper).addClass('swiper-wp8-' + s.params.direction);
	        }
	        
	        // Attach/detach events
	        s.initEvents = function (detach) {
	            var actionDom = detach ? 'off' : 'on';
	            var action = detach ? 'removeEventListener' : 'addEventListener';
	            var touchEventsTarget = s.params.touchEventsTarget === 'container' ? s.container[0] : s.wrapper[0];
	            var target = s.support.touch ? touchEventsTarget : document;
	        
	            var moveCapture = s.params.nested ? true : false;
	        
	            //Touch Events
	            if (s.browser.ie) {
	                touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, false);
	                target[action](s.touchEvents.move, s.onTouchMove, moveCapture);
	                target[action](s.touchEvents.end, s.onTouchEnd, false);
	            }
	            else {
	                if (s.support.touch) {
	                    touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, false);
	                    touchEventsTarget[action](s.touchEvents.move, s.onTouchMove, moveCapture);
	                    touchEventsTarget[action](s.touchEvents.end, s.onTouchEnd, false);
	                }
	                if (params.simulateTouch && !s.device.ios && !s.device.android) {
	                    touchEventsTarget[action]('mousedown', s.onTouchStart, false);
	                    document[action]('mousemove', s.onTouchMove, moveCapture);
	                    document[action]('mouseup', s.onTouchEnd, false);
	                }
	            }
	            window[action]('resize', s.onResize);
	        
	            // Next, Prev, Index
	            if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
	                s.nextButton[actionDom]('click', s.onClickNext);
	                if (s.params.a11y && s.a11y) s.nextButton[actionDom]('keydown', s.a11y.onEnterKey);
	            }
	            if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
	                s.prevButton[actionDom]('click', s.onClickPrev);
	                if (s.params.a11y && s.a11y) s.prevButton[actionDom]('keydown', s.a11y.onEnterKey);
	            }
	            if (s.params.pagination && s.params.paginationClickable) {
	                s.paginationContainer[actionDom]('click', '.' + s.params.bulletClass, s.onClickIndex);
	                if (s.params.a11y && s.a11y) s.paginationContainer[actionDom]('keydown', '.' + s.params.bulletClass, s.a11y.onEnterKey);
	            }
	        
	            // Prevent Links Clicks
	            if (s.params.preventClicks || s.params.preventClicksPropagation) touchEventsTarget[action]('click', s.preventClicks, true);
	        };
	        s.attachEvents = function () {
	            s.initEvents();
	        };
	        s.detachEvents = function () {
	            s.initEvents(true);
	        };
	        
	        /*=========================
	          Handle Clicks
	          ===========================*/
	        // Prevent Clicks
	        s.allowClick = true;
	        s.preventClicks = function (e) {
	            if (!s.allowClick) {
	                if (s.params.preventClicks) e.preventDefault();
	                if (s.params.preventClicksPropagation && s.animating) {
	                    e.stopPropagation();
	                    e.stopImmediatePropagation();
	                }
	            }
	        };
	        // Clicks
	        s.onClickNext = function (e) {
	            e.preventDefault();
	            if (s.isEnd && !s.params.loop) return;
	            s.slideNext();
	        };
	        s.onClickPrev = function (e) {
	            e.preventDefault();
	            if (s.isBeginning && !s.params.loop) return;
	            s.slidePrev();
	        };
	        s.onClickIndex = function (e) {
	            e.preventDefault();
	            var index = $(this).index() * s.params.slidesPerGroup;
	            if (s.params.loop) index = index + s.loopedSlides;
	            s.slideTo(index);
	        };
	        
	        /*=========================
	          Handle Touches
	          ===========================*/
	        function findElementInEvent(e, selector) {
	            var el = $(e.target);
	            if (!el.is(selector)) {
	                if (typeof selector === 'string') {
	                    el = el.parents(selector);
	                }
	                else if (selector.nodeType) {
	                    var found;
	                    el.parents().each(function (index, _el) {
	                        if (_el === selector) found = selector;
	                    });
	                    if (!found) return undefined;
	                    else return selector;
	                }
	            }
	            if (el.length === 0) {
	                return undefined;
	            }
	            return el[0];
	        }
	        s.updateClickedSlide = function (e) {
	            var slide = findElementInEvent(e, '.' + s.params.slideClass);
	            var slideFound = false;
	            if (slide) {
	                for (var i = 0; i < s.slides.length; i++) {
	                    if (s.slides[i] === slide) slideFound = true;
	                }
	            }
	        
	            if (slide && slideFound) {
	                s.clickedSlide = slide;
	                s.clickedIndex = $(slide).index();
	            }
	            else {
	                s.clickedSlide = undefined;
	                s.clickedIndex = undefined;
	                return;
	            }
	            if (s.params.slideToClickedSlide && s.clickedIndex !== undefined && s.clickedIndex !== s.activeIndex) {
	                var slideToIndex = s.clickedIndex,
	                    realIndex,
	                    duplicatedSlides;
	                if (s.params.loop) {
	                    if (s.animating) return;
	                    realIndex = $(s.clickedSlide).attr('data-swiper-slide-index');
	                    if (s.params.centeredSlides) {
	                        if ((slideToIndex < s.loopedSlides - s.params.slidesPerView/2) || (slideToIndex > s.slides.length - s.loopedSlides + s.params.slidesPerView/2)) {
	                            s.fixLoop();
	                            slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.swiper-slide-duplicate)').eq(0).index();
	                            setTimeout(function () {
	                                s.slideTo(slideToIndex);
	                            }, 0);
	                        }
	                        else {
	                            s.slideTo(slideToIndex);
	                        }
	                    }
	                    else {
	                        if (slideToIndex > s.slides.length - s.params.slidesPerView) {
	                            s.fixLoop();
	                            slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.swiper-slide-duplicate)').eq(0).index();
	                            setTimeout(function () {
	                                s.slideTo(slideToIndex);
	                            }, 0);
	                        }
	                        else {
	                            s.slideTo(slideToIndex);
	                        }
	                    }
	                }
	                else {
	                    s.slideTo(slideToIndex);
	                }
	            }
	        };
	        
	        var isTouched,
	            isMoved,
	            allowTouchCallbacks,
	            touchStartTime,
	            isScrolling,
	            currentTranslate,
	            startTranslate,
	            allowThresholdMove,
	            // Form elements to match
	            formElements = 'input, select, textarea, button',
	            // Last click time
	            lastClickTime = Date.now(), clickTimeout,
	            //Velocities
	            velocities = [],
	            allowMomentumBounce;
	        
	        // Animating Flag
	        s.animating = false;
	        
	        // Touches information
	        s.touches = {
	            startX: 0,
	            startY: 0,
	            currentX: 0,
	            currentY: 0,
	            diff: 0
	        };
	        
	        // Touch handlers
	        var isTouchEvent, startMoving;
	        s.onTouchStart = function (e) {
	            if (e.originalEvent) e = e.originalEvent;
	            isTouchEvent = e.type === 'touchstart';
	            if (!isTouchEvent && 'which' in e && e.which === 3) return;
	            if (s.params.noSwiping && findElementInEvent(e, '.' + s.params.noSwipingClass)) {
	                s.allowClick = true;
	                return;
	            }
	            if (s.params.swipeHandler) {
	                if (!findElementInEvent(e, s.params.swipeHandler)) return;
	            }
	        
	            var startX = s.touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
	            var startY = s.touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
	        
	            // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore
	            if(s.device.ios && s.params.iOSEdgeSwipeDetection && startX <= s.params.iOSEdgeSwipeThreshold) {
	                return;
	            }
	        
	            isTouched = true;
	            isMoved = false;
	            allowTouchCallbacks = true;
	            isScrolling = undefined;
	            startMoving = undefined;
	            s.touches.startX = startX;
	            s.touches.startY = startY;
	            touchStartTime = Date.now();
	            s.allowClick = true;
	            s.updateContainerSize();
	            s.swipeDirection = undefined;
	            if (s.params.threshold > 0) allowThresholdMove = false;
	            if (e.type !== 'touchstart') {
	                var preventDefault = true;
	                if ($(e.target).is(formElements)) preventDefault = false;
	                if (document.activeElement && $(document.activeElement).is(formElements)) {
	                    document.activeElement.blur();
	                }
	                if (preventDefault) {
	                    e.preventDefault();
	                }
	            }
	            s.emit('onTouchStart', s, e);
	        };
	        
	        s.onTouchMove = function (e) {
	            if (e.originalEvent) e = e.originalEvent;
	            if (isTouchEvent && e.type === 'mousemove') return;
	            if (e.preventedByNestedSwiper) {
	                s.touches.startX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
	                s.touches.startY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
	                return;
	            }
	            if (s.params.onlyExternal) {
	                // isMoved = true;
	                s.allowClick = false;
	                if (isTouched) {
	                    s.touches.startX = s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
	                    s.touches.startY = s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
	                    touchStartTime = Date.now();
	                }
	                return;
	            }
	            if (isTouchEvent && document.activeElement) {
	                if (e.target === document.activeElement && $(e.target).is(formElements)) {
	                    isMoved = true;
	                    s.allowClick = false;
	                    return;
	                }
	            }
	            if (allowTouchCallbacks) {
	                s.emit('onTouchMove', s, e);
	            }
	            if (e.targetTouches && e.targetTouches.length > 1) return;
	        
	            s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
	            s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
	        
	            if (typeof isScrolling === 'undefined') {
	                var touchAngle = Math.atan2(Math.abs(s.touches.currentY - s.touches.startY), Math.abs(s.touches.currentX - s.touches.startX)) * 180 / Math.PI;
	                isScrolling = s.isHorizontal() ? touchAngle > s.params.touchAngle : (90 - touchAngle > s.params.touchAngle);
	            }
	            if (isScrolling) {
	                s.emit('onTouchMoveOpposite', s, e);
	            }
	            if (typeof startMoving === 'undefined' && s.browser.ieTouch) {
	                if (s.touches.currentX !== s.touches.startX || s.touches.currentY !== s.touches.startY) {
	                    startMoving = true;
	                }
	            }
	            if (!isTouched) return;
	            if (isScrolling)  {
	                isTouched = false;
	                return;
	            }
	            if (!startMoving && s.browser.ieTouch) {
	                return;
	            }
	            s.allowClick = false;
	            s.emit('onSliderMove', s, e);
	            e.preventDefault();
	            if (s.params.touchMoveStopPropagation && !s.params.nested) {
	                e.stopPropagation();
	            }
	        
	            if (!isMoved) {
	                if (params.loop) {
	                    s.fixLoop();
	                }
	                startTranslate = s.getWrapperTranslate();
	                s.setWrapperTransition(0);
	                if (s.animating) {
	                    s.wrapper.trigger('webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd');
	                }
	                if (s.params.autoplay && s.autoplaying) {
	                    if (s.params.autoplayDisableOnInteraction) {
	                        s.stopAutoplay();
	                    }
	                    else {
	                        s.pauseAutoplay();
	                    }
	                }
	                allowMomentumBounce = false;
	                //Grab Cursor
	                if (s.params.grabCursor) {
	                    s.container[0].style.cursor = 'move';
	                    s.container[0].style.cursor = '-webkit-grabbing';
	                    s.container[0].style.cursor = '-moz-grabbin';
	                    s.container[0].style.cursor = 'grabbing';
	                }
	            }
	            isMoved = true;
	        
	            var diff = s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
	        
	            diff = diff * s.params.touchRatio;
	            if (s.rtl) diff = -diff;
	        
	            s.swipeDirection = diff > 0 ? 'prev' : 'next';
	            currentTranslate = diff + startTranslate;
	        
	            var disableParentSwiper = true;
	            if ((diff > 0 && currentTranslate > s.minTranslate())) {
	                disableParentSwiper = false;
	                if (s.params.resistance) currentTranslate = s.minTranslate() - 1 + Math.pow(-s.minTranslate() + startTranslate + diff, s.params.resistanceRatio);
	            }
	            else if (diff < 0 && currentTranslate < s.maxTranslate()) {
	                disableParentSwiper = false;
	                if (s.params.resistance) currentTranslate = s.maxTranslate() + 1 - Math.pow(s.maxTranslate() - startTranslate - diff, s.params.resistanceRatio);
	            }
	        
	            if (disableParentSwiper) {
	                e.preventedByNestedSwiper = true;
	            }
	        
	            // Directions locks
	            if (!s.params.allowSwipeToNext && s.swipeDirection === 'next' && currentTranslate < startTranslate) {
	                currentTranslate = startTranslate;
	            }
	            if (!s.params.allowSwipeToPrev && s.swipeDirection === 'prev' && currentTranslate > startTranslate) {
	                currentTranslate = startTranslate;
	            }
	        
	            if (!s.params.followFinger) return;
	        
	            // Threshold
	            if (s.params.threshold > 0) {
	                if (Math.abs(diff) > s.params.threshold || allowThresholdMove) {
	                    if (!allowThresholdMove) {
	                        allowThresholdMove = true;
	                        s.touches.startX = s.touches.currentX;
	                        s.touches.startY = s.touches.currentY;
	                        currentTranslate = startTranslate;
	                        s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
	                        return;
	                    }
	                }
	                else {
	                    currentTranslate = startTranslate;
	                    return;
	                }
	            }
	            // Update active index in free mode
	            if (s.params.freeMode || s.params.watchSlidesProgress) {
	                s.updateActiveIndex();
	            }
	            if (s.params.freeMode) {
	                //Velocity
	                if (velocities.length === 0) {
	                    velocities.push({
	                        position: s.touches[s.isHorizontal() ? 'startX' : 'startY'],
	                        time: touchStartTime
	                    });
	                }
	                velocities.push({
	                    position: s.touches[s.isHorizontal() ? 'currentX' : 'currentY'],
	                    time: (new window.Date()).getTime()
	                });
	            }
	            // Update progress
	            s.updateProgress(currentTranslate);
	            // Update translate
	            s.setWrapperTranslate(currentTranslate);
	        };
	        s.onTouchEnd = function (e) {
	            if (e.originalEvent) e = e.originalEvent;
	            if (allowTouchCallbacks) {
	                s.emit('onTouchEnd', s, e);
	            }
	            allowTouchCallbacks = false;
	            if (!isTouched) return;
	            //Return Grab Cursor
	            if (s.params.grabCursor && isMoved && isTouched) {
	                s.container[0].style.cursor = 'move';
	                s.container[0].style.cursor = '-webkit-grab';
	                s.container[0].style.cursor = '-moz-grab';
	                s.container[0].style.cursor = 'grab';
	            }
	        
	            // Time diff
	            var touchEndTime = Date.now();
	            var timeDiff = touchEndTime - touchStartTime;
	        
	            // Tap, doubleTap, Click
	            if (s.allowClick) {
	                s.updateClickedSlide(e);
	                s.emit('onTap', s, e);
	                if (timeDiff < 300 && (touchEndTime - lastClickTime) > 300) {
	                    if (clickTimeout) clearTimeout(clickTimeout);
	                    clickTimeout = setTimeout(function () {
	                        if (!s) return;
	                        if (s.params.paginationHide && s.paginationContainer.length > 0 && !$(e.target).hasClass(s.params.bulletClass)) {
	                            s.paginationContainer.toggleClass(s.params.paginationHiddenClass);
	                        }
	                        s.emit('onClick', s, e);
	                    }, 300);
	        
	                }
	                if (timeDiff < 300 && (touchEndTime - lastClickTime) < 300) {
	                    if (clickTimeout) clearTimeout(clickTimeout);
	                    s.emit('onDoubleTap', s, e);
	                }
	            }
	        
	            lastClickTime = Date.now();
	            setTimeout(function () {
	                if (s) s.allowClick = true;
	            }, 0);
	        
	            if (!isTouched || !isMoved || !s.swipeDirection || s.touches.diff === 0 || currentTranslate === startTranslate) {
	                isTouched = isMoved = false;
	                return;
	            }
	            isTouched = isMoved = false;
	        
	            var currentPos;
	            if (s.params.followFinger) {
	                currentPos = s.rtl ? s.translate : -s.translate;
	            }
	            else {
	                currentPos = -currentTranslate;
	            }
	            if (s.params.freeMode) {
	                if (currentPos < -s.minTranslate()) {
	                    s.slideTo(s.activeIndex);
	                    return;
	                }
	                else if (currentPos > -s.maxTranslate()) {
	                    if (s.slides.length < s.snapGrid.length) {
	                        s.slideTo(s.snapGrid.length - 1);
	                    }
	                    else {
	                        s.slideTo(s.slides.length - 1);
	                    }
	                    return;
	                }
	        
	                if (s.params.freeModeMomentum) {
	                    if (velocities.length > 1) {
	                        var lastMoveEvent = velocities.pop(), velocityEvent = velocities.pop();
	        
	                        var distance = lastMoveEvent.position - velocityEvent.position;
	                        var time = lastMoveEvent.time - velocityEvent.time;
	                        s.velocity = distance / time;
	                        s.velocity = s.velocity / 2;
	                        if (Math.abs(s.velocity) < s.params.freeModeMinimumVelocity) {
	                            s.velocity = 0;
	                        }
	                        // this implies that the user stopped moving a finger then released.
	                        // There would be no events with distance zero, so the last event is stale.
	                        if (time > 150 || (new window.Date().getTime() - lastMoveEvent.time) > 300) {
	                            s.velocity = 0;
	                        }
	                    } else {
	                        s.velocity = 0;
	                    }
	        
	                    velocities.length = 0;
	                    var momentumDuration = 1000 * s.params.freeModeMomentumRatio;
	                    var momentumDistance = s.velocity * momentumDuration;
	        
	                    var newPosition = s.translate + momentumDistance;
	                    if (s.rtl) newPosition = - newPosition;
	                    var doBounce = false;
	                    var afterBouncePosition;
	                    var bounceAmount = Math.abs(s.velocity) * 20 * s.params.freeModeMomentumBounceRatio;
	                    if (newPosition < s.maxTranslate()) {
	                        if (s.params.freeModeMomentumBounce) {
	                            if (newPosition + s.maxTranslate() < -bounceAmount) {
	                                newPosition = s.maxTranslate() - bounceAmount;
	                            }
	                            afterBouncePosition = s.maxTranslate();
	                            doBounce = true;
	                            allowMomentumBounce = true;
	                        }
	                        else {
	                            newPosition = s.maxTranslate();
	                        }
	                    }
	                    else if (newPosition > s.minTranslate()) {
	                        if (s.params.freeModeMomentumBounce) {
	                            if (newPosition - s.minTranslate() > bounceAmount) {
	                                newPosition = s.minTranslate() + bounceAmount;
	                            }
	                            afterBouncePosition = s.minTranslate();
	                            doBounce = true;
	                            allowMomentumBounce = true;
	                        }
	                        else {
	                            newPosition = s.minTranslate();
	                        }
	                    }
	                    else if (s.params.freeModeSticky) {
	                        var j = 0,
	                            nextSlide;
	                        for (j = 0; j < s.snapGrid.length; j += 1) {
	                            if (s.snapGrid[j] > -newPosition) {
	                                nextSlide = j;
	                                break;
	                            }
	        
	                        }
	                        if (Math.abs(s.snapGrid[nextSlide] - newPosition) < Math.abs(s.snapGrid[nextSlide - 1] - newPosition) || s.swipeDirection === 'next') {
	                            newPosition = s.snapGrid[nextSlide];
	                        } else {
	                            newPosition = s.snapGrid[nextSlide - 1];
	                        }
	                        if (!s.rtl) newPosition = - newPosition;
	                    }
	                    //Fix duration
	                    if (s.velocity !== 0) {
	                        if (s.rtl) {
	                            momentumDuration = Math.abs((-newPosition - s.translate) / s.velocity);
	                        }
	                        else {
	                            momentumDuration = Math.abs((newPosition - s.translate) / s.velocity);
	                        }
	                    }
	                    else if (s.params.freeModeSticky) {
	                        s.slideReset();
	                        return;
	                    }
	        
	                    if (s.params.freeModeMomentumBounce && doBounce) {
	                        s.updateProgress(afterBouncePosition);
	                        s.setWrapperTransition(momentumDuration);
	                        s.setWrapperTranslate(newPosition);
	                        s.onTransitionStart();
	                        s.animating = true;
	                        s.wrapper.transitionEnd(function () {
	                            if (!s || !allowMomentumBounce) return;
	                            s.emit('onMomentumBounce', s);
	        
	                            s.setWrapperTransition(s.params.speed);
	                            s.setWrapperTranslate(afterBouncePosition);
	                            s.wrapper.transitionEnd(function () {
	                                if (!s) return;
	                                s.onTransitionEnd();
	                            });
	                        });
	                    } else if (s.velocity) {
	                        s.updateProgress(newPosition);
	                        s.setWrapperTransition(momentumDuration);
	                        s.setWrapperTranslate(newPosition);
	                        s.onTransitionStart();
	                        if (!s.animating) {
	                            s.animating = true;
	                            s.wrapper.transitionEnd(function () {
	                                if (!s) return;
	                                s.onTransitionEnd();
	                            });
	                        }
	        
	                    } else {
	                        s.updateProgress(newPosition);
	                    }
	        
	                    s.updateActiveIndex();
	                }
	                if (!s.params.freeModeMomentum || timeDiff >= s.params.longSwipesMs) {
	                    s.updateProgress();
	                    s.updateActiveIndex();
	                }
	                return;
	            }
	        
	            // Find current slide
	            var i, stopIndex = 0, groupSize = s.slidesSizesGrid[0];
	            for (i = 0; i < s.slidesGrid.length; i += s.params.slidesPerGroup) {
	                if (typeof s.slidesGrid[i + s.params.slidesPerGroup] !== 'undefined') {
	                    if (currentPos >= s.slidesGrid[i] && currentPos < s.slidesGrid[i + s.params.slidesPerGroup]) {
	                        stopIndex = i;
	                        groupSize = s.slidesGrid[i + s.params.slidesPerGroup] - s.slidesGrid[i];
	                    }
	                }
	                else {
	                    if (currentPos >= s.slidesGrid[i]) {
	                        stopIndex = i;
	                        groupSize = s.slidesGrid[s.slidesGrid.length - 1] - s.slidesGrid[s.slidesGrid.length - 2];
	                    }
	                }
	            }
	        
	            // Find current slide size
	            var ratio = (currentPos - s.slidesGrid[stopIndex]) / groupSize;
	        
	            if (timeDiff > s.params.longSwipesMs) {
	                // Long touches
	                if (!s.params.longSwipes) {
	                    s.slideTo(s.activeIndex);
	                    return;
	                }
	                if (s.swipeDirection === 'next') {
	                    if (ratio >= s.params.longSwipesRatio) s.slideTo(stopIndex + s.params.slidesPerGroup);
	                    else s.slideTo(stopIndex);
	        
	                }
	                if (s.swipeDirection === 'prev') {
	                    if (ratio > (1 - s.params.longSwipesRatio)) s.slideTo(stopIndex + s.params.slidesPerGroup);
	                    else s.slideTo(stopIndex);
	                }
	            }
	            else {
	                // Short swipes
	                if (!s.params.shortSwipes) {
	                    s.slideTo(s.activeIndex);
	                    return;
	                }
	                if (s.swipeDirection === 'next') {
	                    s.slideTo(stopIndex + s.params.slidesPerGroup);
	        
	                }
	                if (s.swipeDirection === 'prev') {
	                    s.slideTo(stopIndex);
	                }
	            }
	        };
	        /*=========================
	          Transitions
	          ===========================*/
	        s._slideTo = function (slideIndex, speed) {
	            return s.slideTo(slideIndex, speed, true, true);
	        };
	        s.slideTo = function (slideIndex, speed, runCallbacks, internal) {
	            if (typeof runCallbacks === 'undefined') runCallbacks = true;
	            if (typeof slideIndex === 'undefined') slideIndex = 0;
	            if (slideIndex < 0) slideIndex = 0;
	            s.snapIndex = Math.floor(slideIndex / s.params.slidesPerGroup);
	            if (s.snapIndex >= s.snapGrid.length) s.snapIndex = s.snapGrid.length - 1;
	        
	            var translate = - s.snapGrid[s.snapIndex];
	            // Stop autoplay
	            if (s.params.autoplay && s.autoplaying) {
	                if (internal || !s.params.autoplayDisableOnInteraction) {
	                    s.pauseAutoplay(speed);
	                }
	                else {
	                    s.stopAutoplay();
	                }
	            }
	            // Update progress
	            s.updateProgress(translate);
	        
	            // Normalize slideIndex
	            for (var i = 0; i < s.slidesGrid.length; i++) {
	                if (- Math.floor(translate * 100) >= Math.floor(s.slidesGrid[i] * 100)) {
	                    slideIndex = i;
	                }
	            }
	        
	            // Directions locks
	            if (!s.params.allowSwipeToNext && translate < s.translate && translate < s.minTranslate()) {
	                return false;
	            }
	            if (!s.params.allowSwipeToPrev && translate > s.translate && translate > s.maxTranslate()) {
	                if ((s.activeIndex || 0) !== slideIndex ) return false;
	            }
	        
	            // Update Index
	            if (typeof speed === 'undefined') speed = s.params.speed;
	            s.previousIndex = s.activeIndex || 0;
	            s.activeIndex = slideIndex;
	        
	            if ((s.rtl && -translate === s.translate) || (!s.rtl && translate === s.translate)) {
	                // Update Height
	                if (s.params.autoHeight) {
	                    s.updateAutoHeight();
	                }
	                s.updateClasses();
	                if (s.params.effect !== 'slide') {
	                    s.setWrapperTranslate(translate);
	                }
	                return false;
	            }
	            s.updateClasses();
	            s.onTransitionStart(runCallbacks);
	        
	            if (speed === 0) {
	                s.setWrapperTranslate(translate);
	                s.setWrapperTransition(0);
	                s.onTransitionEnd(runCallbacks);
	            }
	            else {
	                s.setWrapperTranslate(translate);
	                s.setWrapperTransition(speed);
	                if (!s.animating) {
	                    s.animating = true;
	                    s.wrapper.transitionEnd(function () {
	                        if (!s) return;
	                        s.onTransitionEnd(runCallbacks);
	                    });
	                }
	        
	            }
	        
	            return true;
	        };
	        
	        s.onTransitionStart = function (runCallbacks) {
	            if (typeof runCallbacks === 'undefined') runCallbacks = true;
	            if (s.params.autoHeight) {
	                s.updateAutoHeight();
	            }
	            if (s.lazy) s.lazy.onTransitionStart();
	            if (runCallbacks) {
	                s.emit('onTransitionStart', s);
	                if (s.activeIndex !== s.previousIndex) {
	                    s.emit('onSlideChangeStart', s);
	                    if (s.activeIndex > s.previousIndex) {
	                        s.emit('onSlideNextStart', s);
	                    }
	                    else {
	                        s.emit('onSlidePrevStart', s);
	                    }
	                }
	        
	            }
	        };
	        s.onTransitionEnd = function (runCallbacks) {
	            s.animating = false;
	            s.setWrapperTransition(0);
	            if (typeof runCallbacks === 'undefined') runCallbacks = true;
	            if (s.lazy) s.lazy.onTransitionEnd();
	            if (runCallbacks) {
	                s.emit('onTransitionEnd', s);
	                if (s.activeIndex !== s.previousIndex) {
	                    s.emit('onSlideChangeEnd', s);
	                    if (s.activeIndex > s.previousIndex) {
	                        s.emit('onSlideNextEnd', s);
	                    }
	                    else {
	                        s.emit('onSlidePrevEnd', s);
	                    }
	                }
	            }
	            if (s.params.hashnav && s.hashnav) {
	                s.hashnav.setHash();
	            }
	        
	        };
	        s.slideNext = function (runCallbacks, speed, internal) {
	            if (s.params.loop) {
	                if (s.animating) return false;
	                s.fixLoop();
	                var clientLeft = s.container[0].clientLeft;
	                return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
	            }
	            else return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
	        };
	        s._slideNext = function (speed) {
	            return s.slideNext(true, speed, true);
	        };
	        s.slidePrev = function (runCallbacks, speed, internal) {
	            if (s.params.loop) {
	                if (s.animating) return false;
	                s.fixLoop();
	                var clientLeft = s.container[0].clientLeft;
	                return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
	            }
	            else return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
	        };
	        s._slidePrev = function (speed) {
	            return s.slidePrev(true, speed, true);
	        };
	        s.slideReset = function (runCallbacks, speed, internal) {
	            return s.slideTo(s.activeIndex, speed, runCallbacks);
	        };
	        
	        /*=========================
	          Translate/transition helpers
	          ===========================*/
	        s.setWrapperTransition = function (duration, byController) {
	            s.wrapper.transition(duration);
	            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
	                s.effects[s.params.effect].setTransition(duration);
	            }
	            if (s.params.parallax && s.parallax) {
	                s.parallax.setTransition(duration);
	            }
	            if (s.params.scrollbar && s.scrollbar) {
	                s.scrollbar.setTransition(duration);
	            }
	            if (s.params.control && s.controller) {
	                s.controller.setTransition(duration, byController);
	            }
	            s.emit('onSetTransition', s, duration);
	        };
	        s.setWrapperTranslate = function (translate, updateActiveIndex, byController) {
	            var x = 0, y = 0, z = 0;
	            if (s.isHorizontal()) {
	                x = s.rtl ? -translate : translate;
	            }
	            else {
	                y = translate;
	            }
	        
	            if (s.params.roundLengths) {
	                x = round(x);
	                y = round(y);
	            }
	        
	            if (!s.params.virtualTranslate) {
	                if (s.support.transforms3d) s.wrapper.transform('translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)');
	                else s.wrapper.transform('translate(' + x + 'px, ' + y + 'px)');
	            }
	        
	            s.translate = s.isHorizontal() ? x : y;
	        
	            // Check if we need to update progress
	            var progress;
	            var translatesDiff = s.maxTranslate() - s.minTranslate();
	            if (translatesDiff === 0) {
	                progress = 0;
	            }
	            else {
	                progress = (translate - s.minTranslate()) / (translatesDiff);
	            }
	            if (progress !== s.progress) {
	                s.updateProgress(translate);
	            }
	        
	            if (updateActiveIndex) s.updateActiveIndex();
	            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
	                s.effects[s.params.effect].setTranslate(s.translate);
	            }
	            if (s.params.parallax && s.parallax) {
	                s.parallax.setTranslate(s.translate);
	            }
	            if (s.params.scrollbar && s.scrollbar) {
	                s.scrollbar.setTranslate(s.translate);
	            }
	            if (s.params.control && s.controller) {
	                s.controller.setTranslate(s.translate, byController);
	            }
	            s.emit('onSetTranslate', s, s.translate);
	        };
	        
	        s.getTranslate = function (el, axis) {
	            var matrix, curTransform, curStyle, transformMatrix;
	        
	            // automatic axis detection
	            if (typeof axis === 'undefined') {
	                axis = 'x';
	            }
	        
	            if (s.params.virtualTranslate) {
	                return s.rtl ? -s.translate : s.translate;
	            }
	        
	            curStyle = window.getComputedStyle(el, null);
	            if (window.WebKitCSSMatrix) {
	                curTransform = curStyle.transform || curStyle.webkitTransform;
	                if (curTransform.split(',').length > 6) {
	                    curTransform = curTransform.split(', ').map(function(a){
	                        return a.replace(',','.');
	                    }).join(', ');
	                }
	                // Some old versions of Webkit choke when 'none' is passed; pass
	                // empty string instead in this case
	                transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
	            }
	            else {
	                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform  || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
	                matrix = transformMatrix.toString().split(',');
	            }
	        
	            if (axis === 'x') {
	                //Latest Chrome and webkits Fix
	                if (window.WebKitCSSMatrix)
	                    curTransform = transformMatrix.m41;
	                //Crazy IE10 Matrix
	                else if (matrix.length === 16)
	                    curTransform = parseFloat(matrix[12]);
	                //Normal Browsers
	                else
	                    curTransform = parseFloat(matrix[4]);
	            }
	            if (axis === 'y') {
	                //Latest Chrome and webkits Fix
	                if (window.WebKitCSSMatrix)
	                    curTransform = transformMatrix.m42;
	                //Crazy IE10 Matrix
	                else if (matrix.length === 16)
	                    curTransform = parseFloat(matrix[13]);
	                //Normal Browsers
	                else
	                    curTransform = parseFloat(matrix[5]);
	            }
	            if (s.rtl && curTransform) curTransform = -curTransform;
	            return curTransform || 0;
	        };
	        s.getWrapperTranslate = function (axis) {
	            if (typeof axis === 'undefined') {
	                axis = s.isHorizontal() ? 'x' : 'y';
	            }
	            return s.getTranslate(s.wrapper[0], axis);
	        };
	        
	        /*=========================
	          Observer
	          ===========================*/
	        s.observers = [];
	        function initObserver(target, options) {
	            options = options || {};
	            // create an observer instance
	            var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
	            var observer = new ObserverFunc(function (mutations) {
	                mutations.forEach(function (mutation) {
	                    s.onResize(true);
	                    s.emit('onObserverUpdate', s, mutation);
	                });
	            });
	        
	            observer.observe(target, {
	                attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
	                childList: typeof options.childList === 'undefined' ? true : options.childList,
	                characterData: typeof options.characterData === 'undefined' ? true : options.characterData
	            });
	        
	            s.observers.push(observer);
	        }
	        s.initObservers = function () {
	            if (s.params.observeParents) {
	                var containerParents = s.container.parents();
	                for (var i = 0; i < containerParents.length; i++) {
	                    initObserver(containerParents[i]);
	                }
	            }
	        
	            // Observe container
	            initObserver(s.container[0], {childList: false});
	        
	            // Observe wrapper
	            initObserver(s.wrapper[0], {attributes: false});
	        };
	        s.disconnectObservers = function () {
	            for (var i = 0; i < s.observers.length; i++) {
	                s.observers[i].disconnect();
	            }
	            s.observers = [];
	        };
	        /*=========================
	          Loop
	          ===========================*/
	        // Create looped slides
	        s.createLoop = function () {
	            // Remove duplicated slides
	            s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
	        
	            var slides = s.wrapper.children('.' + s.params.slideClass);
	        
	            if(s.params.slidesPerView === 'auto' && !s.params.loopedSlides) s.params.loopedSlides = slides.length;
	        
	            s.loopedSlides = parseInt(s.params.loopedSlides || s.params.slidesPerView, 10);
	            s.loopedSlides = s.loopedSlides + s.params.loopAdditionalSlides;
	            if (s.loopedSlides > slides.length) {
	                s.loopedSlides = slides.length;
	            }
	        
	            var prependSlides = [], appendSlides = [], i;
	            slides.each(function (index, el) {
	                var slide = $(this);
	                if (index < s.loopedSlides) appendSlides.push(el);
	                if (index < slides.length && index >= slides.length - s.loopedSlides) prependSlides.push(el);
	                slide.attr('data-swiper-slide-index', index);
	            });
	            for (i = 0; i < appendSlides.length; i++) {
	                s.wrapper.append($(appendSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
	            }
	            for (i = prependSlides.length - 1; i >= 0; i--) {
	                s.wrapper.prepend($(prependSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
	            }
	        };
	        s.destroyLoop = function () {
	            s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
	            s.slides.removeAttr('data-swiper-slide-index');
	        };
	        s.reLoop = function (updatePosition) {
	            var oldIndex = s.activeIndex - s.loopedSlides;
	            s.destroyLoop();
	            s.createLoop();
	            s.updateSlidesSize();
	            if (updatePosition) {
	                s.slideTo(oldIndex + s.loopedSlides, 0, false);
	            }
	        
	        };
	        s.fixLoop = function () {
	            var newIndex;
	            //Fix For Negative Oversliding
	            if (s.activeIndex < s.loopedSlides) {
	                newIndex = s.slides.length - s.loopedSlides * 3 + s.activeIndex;
	                newIndex = newIndex + s.loopedSlides;
	                s.slideTo(newIndex, 0, false, true);
	            }
	            //Fix For Positive Oversliding
	            else if ((s.params.slidesPerView === 'auto' && s.activeIndex >= s.loopedSlides * 2) || (s.activeIndex > s.slides.length - s.params.slidesPerView * 2)) {
	                newIndex = -s.slides.length + s.activeIndex + s.loopedSlides;
	                newIndex = newIndex + s.loopedSlides;
	                s.slideTo(newIndex, 0, false, true);
	            }
	        };
	        /*=========================
	          Append/Prepend/Remove Slides
	          ===========================*/
	        s.appendSlide = function (slides) {
	            if (s.params.loop) {
	                s.destroyLoop();
	            }
	            if (typeof slides === 'object' && slides.length) {
	                for (var i = 0; i < slides.length; i++) {
	                    if (slides[i]) s.wrapper.append(slides[i]);
	                }
	            }
	            else {
	                s.wrapper.append(slides);
	            }
	            if (s.params.loop) {
	                s.createLoop();
	            }
	            if (!(s.params.observer && s.support.observer)) {
	                s.update(true);
	            }
	        };
	        s.prependSlide = function (slides) {
	            if (s.params.loop) {
	                s.destroyLoop();
	            }
	            var newActiveIndex = s.activeIndex + 1;
	            if (typeof slides === 'object' && slides.length) {
	                for (var i = 0; i < slides.length; i++) {
	                    if (slides[i]) s.wrapper.prepend(slides[i]);
	                }
	                newActiveIndex = s.activeIndex + slides.length;
	            }
	            else {
	                s.wrapper.prepend(slides);
	            }
	            if (s.params.loop) {
	                s.createLoop();
	            }
	            if (!(s.params.observer && s.support.observer)) {
	                s.update(true);
	            }
	            s.slideTo(newActiveIndex, 0, false);
	        };
	        s.removeSlide = function (slidesIndexes) {
	            if (s.params.loop) {
	                s.destroyLoop();
	                s.slides = s.wrapper.children('.' + s.params.slideClass);
	            }
	            var newActiveIndex = s.activeIndex,
	                indexToRemove;
	            if (typeof slidesIndexes === 'object' && slidesIndexes.length) {
	                for (var i = 0; i < slidesIndexes.length; i++) {
	                    indexToRemove = slidesIndexes[i];
	                    if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
	                    if (indexToRemove < newActiveIndex) newActiveIndex--;
	                }
	                newActiveIndex = Math.max(newActiveIndex, 0);
	            }
	            else {
	                indexToRemove = slidesIndexes;
	                if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
	                if (indexToRemove < newActiveIndex) newActiveIndex--;
	                newActiveIndex = Math.max(newActiveIndex, 0);
	            }
	        
	            if (s.params.loop) {
	                s.createLoop();
	            }
	        
	            if (!(s.params.observer && s.support.observer)) {
	                s.update(true);
	            }
	            if (s.params.loop) {
	                s.slideTo(newActiveIndex + s.loopedSlides, 0, false);
	            }
	            else {
	                s.slideTo(newActiveIndex, 0, false);
	            }
	        
	        };
	        s.removeAllSlides = function () {
	            var slidesIndexes = [];
	            for (var i = 0; i < s.slides.length; i++) {
	                slidesIndexes.push(i);
	            }
	            s.removeSlide(slidesIndexes);
	        };
	        
	
	        /*=========================
	          Effects
	          ===========================*/
	        s.effects = {
	            fade: {
	                setTranslate: function () {
	                    for (var i = 0; i < s.slides.length; i++) {
	                        var slide = s.slides.eq(i);
	                        var offset = slide[0].swiperSlideOffset;
	                        var tx = -offset;
	                        if (!s.params.virtualTranslate) tx = tx - s.translate;
	                        var ty = 0;
	                        if (!s.isHorizontal()) {
	                            ty = tx;
	                            tx = 0;
	                        }
	                        var slideOpacity = s.params.fade.crossFade ?
	                                Math.max(1 - Math.abs(slide[0].progress), 0) :
	                                1 + Math.min(Math.max(slide[0].progress, -1), 0);
	                        slide
	                            .css({
	                                opacity: slideOpacity
	                            })
	                            .transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px)');
	        
	                    }
	        
	                },
	                setTransition: function (duration) {
	                    s.slides.transition(duration);
	                    if (s.params.virtualTranslate && duration !== 0) {
	                        var eventTriggered = false;
	                        s.slides.transitionEnd(function () {
	                            if (eventTriggered) return;
	                            if (!s) return;
	                            eventTriggered = true;
	                            s.animating = false;
	                            var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
	                            for (var i = 0; i < triggerEvents.length; i++) {
	                                s.wrapper.trigger(triggerEvents[i]);
	                            }
	                        });
	                    }
	                }
	            },
	            flip: {
	                setTranslate: function () {
	                    for (var i = 0; i < s.slides.length; i++) {
	                        var slide = s.slides.eq(i);
	                        var progress = slide[0].progress;
	                        if (s.params.flip.limitRotation) {
	                            progress = Math.max(Math.min(slide[0].progress, 1), -1);
	                        }
	                        var offset = slide[0].swiperSlideOffset;
	                        var rotate = -180 * progress,
	                            rotateY = rotate,
	                            rotateX = 0,
	                            tx = -offset,
	                            ty = 0;
	                        if (!s.isHorizontal()) {
	                            ty = tx;
	                            tx = 0;
	                            rotateX = -rotateY;
	                            rotateY = 0;
	                        }
	                        else if (s.rtl) {
	                            rotateY = -rotateY;
	                        }
	        
	                        slide[0].style.zIndex = -Math.abs(Math.round(progress)) + s.slides.length;
	        
	                        if (s.params.flip.slideShadows) {
	                            //Set shadows
	                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
	                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
	                            if (shadowBefore.length === 0) {
	                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
	                                slide.append(shadowBefore);
	                            }
	                            if (shadowAfter.length === 0) {
	                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
	                                slide.append(shadowAfter);
	                            }
	                            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
	                            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
	                        }
	        
	                        slide
	                            .transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)');
	                    }
	                },
	                setTransition: function (duration) {
	                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
	                    if (s.params.virtualTranslate && duration !== 0) {
	                        var eventTriggered = false;
	                        s.slides.eq(s.activeIndex).transitionEnd(function () {
	                            if (eventTriggered) return;
	                            if (!s) return;
	                            if (!$(this).hasClass(s.params.slideActiveClass)) return;
	                            eventTriggered = true;
	                            s.animating = false;
	                            var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
	                            for (var i = 0; i < triggerEvents.length; i++) {
	                                s.wrapper.trigger(triggerEvents[i]);
	                            }
	                        });
	                    }
	                }
	            },
	            cube: {
	                setTranslate: function () {
	                    var wrapperRotate = 0, cubeShadow;
	                    if (s.params.cube.shadow) {
	                        if (s.isHorizontal()) {
	                            cubeShadow = s.wrapper.find('.swiper-cube-shadow');
	                            if (cubeShadow.length === 0) {
	                                cubeShadow = $('<div class="swiper-cube-shadow"></div>');
	                                s.wrapper.append(cubeShadow);
	                            }
	                            cubeShadow.css({height: s.width + 'px'});
	                        }
	                        else {
	                            cubeShadow = s.container.find('.swiper-cube-shadow');
	                            if (cubeShadow.length === 0) {
	                                cubeShadow = $('<div class="swiper-cube-shadow"></div>');
	                                s.container.append(cubeShadow);
	                            }
	                        }
	                    }
	                    for (var i = 0; i < s.slides.length; i++) {
	                        var slide = s.slides.eq(i);
	                        var slideAngle = i * 90;
	                        var round = Math.floor(slideAngle / 360);
	                        if (s.rtl) {
	                            slideAngle = -slideAngle;
	                            round = Math.floor(-slideAngle / 360);
	                        }
	                        var progress = Math.max(Math.min(slide[0].progress, 1), -1);
	                        var tx = 0, ty = 0, tz = 0;
	                        if (i % 4 === 0) {
	                            tx = - round * 4 * s.size;
	                            tz = 0;
	                        }
	                        else if ((i - 1) % 4 === 0) {
	                            tx = 0;
	                            tz = - round * 4 * s.size;
	                        }
	                        else if ((i - 2) % 4 === 0) {
	                            tx = s.size + round * 4 * s.size;
	                            tz = s.size;
	                        }
	                        else if ((i - 3) % 4 === 0) {
	                            tx = - s.size;
	                            tz = 3 * s.size + s.size * 4 * round;
	                        }
	                        if (s.rtl) {
	                            tx = -tx;
	                        }
	        
	                        if (!s.isHorizontal()) {
	                            ty = tx;
	                            tx = 0;
	                        }
	        
	                        var transform = 'rotateX(' + (s.isHorizontal() ? 0 : -slideAngle) + 'deg) rotateY(' + (s.isHorizontal() ? slideAngle : 0) + 'deg) translate3d(' + tx + 'px, ' + ty + 'px, ' + tz + 'px)';
	                        if (progress <= 1 && progress > -1) {
	                            wrapperRotate = i * 90 + progress * 90;
	                            if (s.rtl) wrapperRotate = -i * 90 - progress * 90;
	                        }
	                        slide.transform(transform);
	                        if (s.params.cube.slideShadows) {
	                            //Set shadows
	                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
	                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
	                            if (shadowBefore.length === 0) {
	                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
	                                slide.append(shadowBefore);
	                            }
	                            if (shadowAfter.length === 0) {
	                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
	                                slide.append(shadowAfter);
	                            }
	                            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
	                            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
	                        }
	                    }
	                    s.wrapper.css({
	                        '-webkit-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
	                        '-moz-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
	                        '-ms-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
	                        'transform-origin': '50% 50% -' + (s.size / 2) + 'px'
	                    });
	        
	                    if (s.params.cube.shadow) {
	                        if (s.isHorizontal()) {
	                            cubeShadow.transform('translate3d(0px, ' + (s.width / 2 + s.params.cube.shadowOffset) + 'px, ' + (-s.width / 2) + 'px) rotateX(90deg) rotateZ(0deg) scale(' + (s.params.cube.shadowScale) + ')');
	                        }
	                        else {
	                            var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
	                            var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
	                            var scale1 = s.params.cube.shadowScale,
	                                scale2 = s.params.cube.shadowScale / multiplier,
	                                offset = s.params.cube.shadowOffset;
	                            cubeShadow.transform('scale3d(' + scale1 + ', 1, ' + scale2 + ') translate3d(0px, ' + (s.height / 2 + offset) + 'px, ' + (-s.height / 2 / scale2) + 'px) rotateX(-90deg)');
	                        }
	                    }
	                    var zFactor = (s.isSafari || s.isUiWebView) ? (-s.size / 2) : 0;
	                    s.wrapper.transform('translate3d(0px,0,' + zFactor + 'px) rotateX(' + (s.isHorizontal() ? 0 : wrapperRotate) + 'deg) rotateY(' + (s.isHorizontal() ? -wrapperRotate : 0) + 'deg)');
	                },
	                setTransition: function (duration) {
	                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
	                    if (s.params.cube.shadow && !s.isHorizontal()) {
	                        s.container.find('.swiper-cube-shadow').transition(duration);
	                    }
	                }
	            },
	            coverflow: {
	                setTranslate: function () {
	                    var transform = s.translate;
	                    var center = s.isHorizontal() ? -transform + s.width / 2 : -transform + s.height / 2;
	                    var rotate = s.isHorizontal() ? s.params.coverflow.rotate: -s.params.coverflow.rotate;
	                    var translate = s.params.coverflow.depth;
	                    //Each slide offset from center
	                    for (var i = 0, length = s.slides.length; i < length; i++) {
	                        var slide = s.slides.eq(i);
	                        var slideSize = s.slidesSizesGrid[i];
	                        var slideOffset = slide[0].swiperSlideOffset;
	                        var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * s.params.coverflow.modifier;
	        
	                        var rotateY = s.isHorizontal() ? rotate * offsetMultiplier : 0;
	                        var rotateX = s.isHorizontal() ? 0 : rotate * offsetMultiplier;
	                        // var rotateZ = 0
	                        var translateZ = -translate * Math.abs(offsetMultiplier);
	        
	                        var translateY = s.isHorizontal() ? 0 : s.params.coverflow.stretch * (offsetMultiplier);
	                        var translateX = s.isHorizontal() ? s.params.coverflow.stretch * (offsetMultiplier) : 0;
	        
	                        //Fix for ultra small values
	                        if (Math.abs(translateX) < 0.001) translateX = 0;
	                        if (Math.abs(translateY) < 0.001) translateY = 0;
	                        if (Math.abs(translateZ) < 0.001) translateZ = 0;
	                        if (Math.abs(rotateY) < 0.001) rotateY = 0;
	                        if (Math.abs(rotateX) < 0.001) rotateX = 0;
	        
	                        var slideTransform = 'translate3d(' + translateX + 'px,' + translateY + 'px,' + translateZ + 'px)  rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
	        
	                        slide.transform(slideTransform);
	                        slide[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
	                        if (s.params.coverflow.slideShadows) {
	                            //Set shadows
	                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
	                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
	                            if (shadowBefore.length === 0) {
	                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
	                                slide.append(shadowBefore);
	                            }
	                            if (shadowAfter.length === 0) {
	                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
	                                slide.append(shadowAfter);
	                            }
	                            if (shadowBefore.length) shadowBefore[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
	                            if (shadowAfter.length) shadowAfter[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
	                        }
	                    }
	        
	                    //Set correct perspective for IE10
	                    if (s.browser.ie) {
	                        var ws = s.wrapper[0].style;
	                        ws.perspectiveOrigin = center + 'px 50%';
	                    }
	                },
	                setTransition: function (duration) {
	                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
	                }
	            }
	        };
	
	        /*=========================
	          Images Lazy Loading
	          ===========================*/
	        s.lazy = {
	            initialImageLoaded: false,
	            loadImageInSlide: function (index, loadInDuplicate) {
	                if (typeof index === 'undefined') return;
	                if (typeof loadInDuplicate === 'undefined') loadInDuplicate = true;
	                if (s.slides.length === 0) return;
	        
	                var slide = s.slides.eq(index);
	                var img = slide.find('.swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)');
	                if (slide.hasClass('swiper-lazy') && !slide.hasClass('swiper-lazy-loaded') && !slide.hasClass('swiper-lazy-loading')) {
	                    img = img.add(slide[0]);
	                }
	                if (img.length === 0) return;
	        
	                img.each(function () {
	                    var _img = $(this);
	                    _img.addClass('swiper-lazy-loading');
	                    var background = _img.attr('data-background');
	                    var src = _img.attr('data-src'),
	                        srcset = _img.attr('data-srcset');
	                    s.loadImage(_img[0], (src || background), srcset, false, function () {
	                        if (background) {
	                            _img.css('background-image', 'url("' + background + '")');
	                            _img.removeAttr('data-background');
	                        }
	                        else {
	                            if (srcset) {
	                                _img.attr('srcset', srcset);
	                                _img.removeAttr('data-srcset');
	                            }
	                            if (src) {
	                                _img.attr('src', src);
	                                _img.removeAttr('data-src');
	                            }
	        
	                        }
	        
	                        _img.addClass('swiper-lazy-loaded').removeClass('swiper-lazy-loading');
	                        slide.find('.swiper-lazy-preloader, .preloader').remove();
	                        if (s.params.loop && loadInDuplicate) {
	                            var slideOriginalIndex = slide.attr('data-swiper-slide-index');
	                            if (slide.hasClass(s.params.slideDuplicateClass)) {
	                                var originalSlide = s.wrapper.children('[data-swiper-slide-index="' + slideOriginalIndex + '"]:not(.' + s.params.slideDuplicateClass + ')');
	                                s.lazy.loadImageInSlide(originalSlide.index(), false);
	                            }
	                            else {
	                                var duplicatedSlide = s.wrapper.children('.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + slideOriginalIndex + '"]');
	                                s.lazy.loadImageInSlide(duplicatedSlide.index(), false);
	                            }
	                        }
	                        s.emit('onLazyImageReady', s, slide[0], _img[0]);
	                    });
	        
	                    s.emit('onLazyImageLoad', s, slide[0], _img[0]);
	                });
	        
	            },
	            load: function () {
	                var i;
	                if (s.params.watchSlidesVisibility) {
	                    s.wrapper.children('.' + s.params.slideVisibleClass).each(function () {
	                        s.lazy.loadImageInSlide($(this).index());
	                    });
	                }
	                else {
	                    if (s.params.slidesPerView > 1) {
	                        for (i = s.activeIndex; i < s.activeIndex + s.params.slidesPerView ; i++) {
	                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
	                        }
	                    }
	                    else {
	                        s.lazy.loadImageInSlide(s.activeIndex);
	                    }
	                }
	                if (s.params.lazyLoadingInPrevNext) {
	                    if (s.params.slidesPerView > 1 || (s.params.lazyLoadingInPrevNextAmount && s.params.lazyLoadingInPrevNextAmount > 1)) {
	                        var amount = s.params.lazyLoadingInPrevNextAmount;
	                        var spv = s.params.slidesPerView;
	                        var maxIndex = Math.min(s.activeIndex + spv + Math.max(amount, spv), s.slides.length);
	                        var minIndex = Math.max(s.activeIndex - Math.max(spv, amount), 0);
	                        // Next Slides
	                        for (i = s.activeIndex + s.params.slidesPerView; i < maxIndex; i++) {
	                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
	                        }
	                        // Prev Slides
	                        for (i = minIndex; i < s.activeIndex ; i++) {
	                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
	                        }
	                    }
	                    else {
	                        var nextSlide = s.wrapper.children('.' + s.params.slideNextClass);
	                        if (nextSlide.length > 0) s.lazy.loadImageInSlide(nextSlide.index());
	        
	                        var prevSlide = s.wrapper.children('.' + s.params.slidePrevClass);
	                        if (prevSlide.length > 0) s.lazy.loadImageInSlide(prevSlide.index());
	                    }
	                }
	            },
	            onTransitionStart: function () {
	                if (s.params.lazyLoading) {
	                    if (s.params.lazyLoadingOnTransitionStart || (!s.params.lazyLoadingOnTransitionStart && !s.lazy.initialImageLoaded)) {
	                        s.lazy.load();
	                    }
	                }
	            },
	            onTransitionEnd: function () {
	                if (s.params.lazyLoading && !s.params.lazyLoadingOnTransitionStart) {
	                    s.lazy.load();
	                }
	            }
	        };
	        
	
	        /*=========================
	          Scrollbar
	          ===========================*/
	        s.scrollbar = {
	            isTouched: false,
	            setDragPosition: function (e) {
	                var sb = s.scrollbar;
	                var x = 0, y = 0;
	                var translate;
	                var pointerPosition = s.isHorizontal() ?
	                    ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageX : e.pageX || e.clientX) :
	                    ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageY : e.pageY || e.clientY) ;
	                var position = (pointerPosition) - sb.track.offset()[s.isHorizontal() ? 'left' : 'top'] - sb.dragSize / 2;
	                var positionMin = -s.minTranslate() * sb.moveDivider;
	                var positionMax = -s.maxTranslate() * sb.moveDivider;
	                if (position < positionMin) {
	                    position = positionMin;
	                }
	                else if (position > positionMax) {
	                    position = positionMax;
	                }
	                position = -position / sb.moveDivider;
	                s.updateProgress(position);
	                s.setWrapperTranslate(position, true);
	            },
	            dragStart: function (e) {
	                var sb = s.scrollbar;
	                sb.isTouched = true;
	                e.preventDefault();
	                e.stopPropagation();
	        
	                sb.setDragPosition(e);
	                clearTimeout(sb.dragTimeout);
	        
	                sb.track.transition(0);
	                if (s.params.scrollbarHide) {
	                    sb.track.css('opacity', 1);
	                }
	                s.wrapper.transition(100);
	                sb.drag.transition(100);
	                s.emit('onScrollbarDragStart', s);
	            },
	            dragMove: function (e) {
	                var sb = s.scrollbar;
	                if (!sb.isTouched) return;
	                if (e.preventDefault) e.preventDefault();
	                else e.returnValue = false;
	                sb.setDragPosition(e);
	                s.wrapper.transition(0);
	                sb.track.transition(0);
	                sb.drag.transition(0);
	                s.emit('onScrollbarDragMove', s);
	            },
	            dragEnd: function (e) {
	                var sb = s.scrollbar;
	                if (!sb.isTouched) return;
	                sb.isTouched = false;
	                if (s.params.scrollbarHide) {
	                    clearTimeout(sb.dragTimeout);
	                    sb.dragTimeout = setTimeout(function () {
	                        sb.track.css('opacity', 0);
	                        sb.track.transition(400);
	                    }, 1000);
	        
	                }
	                s.emit('onScrollbarDragEnd', s);
	                if (s.params.scrollbarSnapOnRelease) {
	                    s.slideReset();
	                }
	            },
	            enableDraggable: function () {
	                var sb = s.scrollbar;
	                var target = s.support.touch ? sb.track : document;
	                $(sb.track).on(s.touchEvents.start, sb.dragStart);
	                $(target).on(s.touchEvents.move, sb.dragMove);
	                $(target).on(s.touchEvents.end, sb.dragEnd);
	            },
	            disableDraggable: function () {
	                var sb = s.scrollbar;
	                var target = s.support.touch ? sb.track : document;
	                $(sb.track).off(s.touchEvents.start, sb.dragStart);
	                $(target).off(s.touchEvents.move, sb.dragMove);
	                $(target).off(s.touchEvents.end, sb.dragEnd);
	            },
	            set: function () {
	                if (!s.params.scrollbar) return;
	                var sb = s.scrollbar;
	                sb.track = $(s.params.scrollbar);
	                if (s.params.uniqueNavElements && typeof s.params.scrollbar === 'string' && sb.track.length > 1 && s.container.find(s.params.scrollbar).length === 1) {
	                    sb.track = s.container.find(s.params.scrollbar);
	                }
	                sb.drag = sb.track.find('.swiper-scrollbar-drag');
	                if (sb.drag.length === 0) {
	                    sb.drag = $('<div class="swiper-scrollbar-drag"></div>');
	                    sb.track.append(sb.drag);
	                }
	                sb.drag[0].style.width = '';
	                sb.drag[0].style.height = '';
	                sb.trackSize = s.isHorizontal() ? sb.track[0].offsetWidth : sb.track[0].offsetHeight;
	        
	                sb.divider = s.size / s.virtualSize;
	                sb.moveDivider = sb.divider * (sb.trackSize / s.size);
	                sb.dragSize = sb.trackSize * sb.divider;
	        
	                if (s.isHorizontal()) {
	                    sb.drag[0].style.width = sb.dragSize + 'px';
	                }
	                else {
	                    sb.drag[0].style.height = sb.dragSize + 'px';
	                }
	        
	                if (sb.divider >= 1) {
	                    sb.track[0].style.display = 'none';
	                }
	                else {
	                    sb.track[0].style.display = '';
	                }
	                if (s.params.scrollbarHide) {
	                    sb.track[0].style.opacity = 0;
	                }
	            },
	            setTranslate: function () {
	                if (!s.params.scrollbar) return;
	                var diff;
	                var sb = s.scrollbar;
	                var translate = s.translate || 0;
	                var newPos;
	        
	                var newSize = sb.dragSize;
	                newPos = (sb.trackSize - sb.dragSize) * s.progress;
	                if (s.rtl && s.isHorizontal()) {
	                    newPos = -newPos;
	                    if (newPos > 0) {
	                        newSize = sb.dragSize - newPos;
	                        newPos = 0;
	                    }
	                    else if (-newPos + sb.dragSize > sb.trackSize) {
	                        newSize = sb.trackSize + newPos;
	                    }
	                }
	                else {
	                    if (newPos < 0) {
	                        newSize = sb.dragSize + newPos;
	                        newPos = 0;
	                    }
	                    else if (newPos + sb.dragSize > sb.trackSize) {
	                        newSize = sb.trackSize - newPos;
	                    }
	                }
	                if (s.isHorizontal()) {
	                    if (s.support.transforms3d) {
	                        sb.drag.transform('translate3d(' + (newPos) + 'px, 0, 0)');
	                    }
	                    else {
	                        sb.drag.transform('translateX(' + (newPos) + 'px)');
	                    }
	                    sb.drag[0].style.width = newSize + 'px';
	                }
	                else {
	                    if (s.support.transforms3d) {
	                        sb.drag.transform('translate3d(0px, ' + (newPos) + 'px, 0)');
	                    }
	                    else {
	                        sb.drag.transform('translateY(' + (newPos) + 'px)');
	                    }
	                    sb.drag[0].style.height = newSize + 'px';
	                }
	                if (s.params.scrollbarHide) {
	                    clearTimeout(sb.timeout);
	                    sb.track[0].style.opacity = 1;
	                    sb.timeout = setTimeout(function () {
	                        sb.track[0].style.opacity = 0;
	                        sb.track.transition(400);
	                    }, 1000);
	                }
	            },
	            setTransition: function (duration) {
	                if (!s.params.scrollbar) return;
	                s.scrollbar.drag.transition(duration);
	            }
	        };
	
	        /*=========================
	          Controller
	          ===========================*/
	        s.controller = {
	            LinearSpline: function (x, y) {
	                this.x = x;
	                this.y = y;
	                this.lastIndex = x.length - 1;
	                // Given an x value (x2), return the expected y2 value:
	                // (x1,y1) is the known point before given value,
	                // (x3,y3) is the known point after given value.
	                var i1, i3;
	                var l = this.x.length;
	        
	                this.interpolate = function (x2) {
	                    if (!x2) return 0;
	        
	                    // Get the indexes of x1 and x3 (the array indexes before and after given x2):
	                    i3 = binarySearch(this.x, x2);
	                    i1 = i3 - 1;
	        
	                    // We have our indexes i1 & i3, so we can calculate already:
	                    // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
	                    return ((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1]) + this.y[i1];
	                };
	        
	                var binarySearch = (function() {
	                    var maxIndex, minIndex, guess;
	                    return function(array, val) {
	                        minIndex = -1;
	                        maxIndex = array.length;
	                        while (maxIndex - minIndex > 1)
	                            if (array[guess = maxIndex + minIndex >> 1] <= val) {
	                                minIndex = guess;
	                            } else {
	                                maxIndex = guess;
	                            }
	                        return maxIndex;
	                    };
	                })();
	            },
	            //xxx: for now i will just save one spline function to to
	            getInterpolateFunction: function(c){
	                if(!s.controller.spline) s.controller.spline = s.params.loop ?
	                    new s.controller.LinearSpline(s.slidesGrid, c.slidesGrid) :
	                    new s.controller.LinearSpline(s.snapGrid, c.snapGrid);
	            },
	            setTranslate: function (translate, byController) {
	               var controlled = s.params.control;
	               var multiplier, controlledTranslate;
	               function setControlledTranslate(c) {
	                    // this will create an Interpolate function based on the snapGrids
	                    // x is the Grid of the scrolled scroller and y will be the controlled scroller
	                    // it makes sense to create this only once and recall it for the interpolation
	                    // the function does a lot of value caching for performance
	                    translate = c.rtl && c.params.direction === 'horizontal' ? -s.translate : s.translate;
	                    if (s.params.controlBy === 'slide') {
	                        s.controller.getInterpolateFunction(c);
	                        // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
	                        // but it did not work out
	                        controlledTranslate = -s.controller.spline.interpolate(-translate);
	                    }
	        
	                    if(!controlledTranslate || s.params.controlBy === 'container'){
	                        multiplier = (c.maxTranslate() - c.minTranslate()) / (s.maxTranslate() - s.minTranslate());
	                        controlledTranslate = (translate - s.minTranslate()) * multiplier + c.minTranslate();
	                    }
	        
	                    if (s.params.controlInverse) {
	                        controlledTranslate = c.maxTranslate() - controlledTranslate;
	                    }
	                    c.updateProgress(controlledTranslate);
	                    c.setWrapperTranslate(controlledTranslate, false, s);
	                    c.updateActiveIndex();
	               }
	               if (s.isArray(controlled)) {
	                   for (var i = 0; i < controlled.length; i++) {
	                       if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
	                           setControlledTranslate(controlled[i]);
	                       }
	                   }
	               }
	               else if (controlled instanceof Swiper && byController !== controlled) {
	        
	                   setControlledTranslate(controlled);
	               }
	            },
	            setTransition: function (duration, byController) {
	                var controlled = s.params.control;
	                var i;
	                function setControlledTransition(c) {
	                    c.setWrapperTransition(duration, s);
	                    if (duration !== 0) {
	                        c.onTransitionStart();
	                        c.wrapper.transitionEnd(function(){
	                            if (!controlled) return;
	                            if (c.params.loop && s.params.controlBy === 'slide') {
	                                c.fixLoop();
	                            }
	                            c.onTransitionEnd();
	        
	                        });
	                    }
	                }
	                if (s.isArray(controlled)) {
	                    for (i = 0; i < controlled.length; i++) {
	                        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
	                            setControlledTransition(controlled[i]);
	                        }
	                    }
	                }
	                else if (controlled instanceof Swiper && byController !== controlled) {
	                    setControlledTransition(controlled);
	                }
	            }
	        };
	
	        /*=========================
	          Hash Navigation
	          ===========================*/
	        s.hashnav = {
	            init: function () {
	                if (!s.params.hashnav) return;
	                s.hashnav.initialized = true;
	                var hash = document.location.hash.replace('#', '');
	                if (!hash) return;
	                var speed = 0;
	                for (var i = 0, length = s.slides.length; i < length; i++) {
	                    var slide = s.slides.eq(i);
	                    var slideHash = slide.attr('data-hash');
	                    if (slideHash === hash && !slide.hasClass(s.params.slideDuplicateClass)) {
	                        var index = slide.index();
	                        s.slideTo(index, speed, s.params.runCallbacksOnInit, true);
	                    }
	                }
	            },
	            setHash: function () {
	                if (!s.hashnav.initialized || !s.params.hashnav) return;
	                document.location.hash = s.slides.eq(s.activeIndex).attr('data-hash') || '';
	            }
	        };
	
	        /*=========================
	          Keyboard Control
	          ===========================*/
	        function handleKeyboard(e) {
	            if (e.originalEvent) e = e.originalEvent; //jquery fix
	            var kc = e.keyCode || e.charCode;
	            // Directions locks
	            if (!s.params.allowSwipeToNext && (s.isHorizontal() && kc === 39 || !s.isHorizontal() && kc === 40)) {
	                return false;
	            }
	            if (!s.params.allowSwipeToPrev && (s.isHorizontal() && kc === 37 || !s.isHorizontal() && kc === 38)) {
	                return false;
	            }
	            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
	                return;
	            }
	            if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
	                return;
	            }
	            if (kc === 37 || kc === 39 || kc === 38 || kc === 40) {
	                var inView = false;
	                //Check that swiper should be inside of visible area of window
	                if (s.container.parents('.swiper-slide').length > 0 && s.container.parents('.swiper-slide-active').length === 0) {
	                    return;
	                }
	                var windowScroll = {
	                    left: window.pageXOffset,
	                    top: window.pageYOffset
	                };
	                var windowWidth = window.innerWidth;
	                var windowHeight = window.innerHeight;
	                var swiperOffset = s.container.offset();
	                if (s.rtl) swiperOffset.left = swiperOffset.left - s.container[0].scrollLeft;
	                var swiperCoord = [
	                    [swiperOffset.left, swiperOffset.top],
	                    [swiperOffset.left + s.width, swiperOffset.top],
	                    [swiperOffset.left, swiperOffset.top + s.height],
	                    [swiperOffset.left + s.width, swiperOffset.top + s.height]
	                ];
	                for (var i = 0; i < swiperCoord.length; i++) {
	                    var point = swiperCoord[i];
	                    if (
	                        point[0] >= windowScroll.left && point[0] <= windowScroll.left + windowWidth &&
	                        point[1] >= windowScroll.top && point[1] <= windowScroll.top + windowHeight
	                    ) {
	                        inView = true;
	                    }
	        
	                }
	                if (!inView) return;
	            }
	            if (s.isHorizontal()) {
	                if (kc === 37 || kc === 39) {
	                    if (e.preventDefault) e.preventDefault();
	                    else e.returnValue = false;
	                }
	                if ((kc === 39 && !s.rtl) || (kc === 37 && s.rtl)) s.slideNext();
	                if ((kc === 37 && !s.rtl) || (kc === 39 && s.rtl)) s.slidePrev();
	            }
	            else {
	                if (kc === 38 || kc === 40) {
	                    if (e.preventDefault) e.preventDefault();
	                    else e.returnValue = false;
	                }
	                if (kc === 40) s.slideNext();
	                if (kc === 38) s.slidePrev();
	            }
	        }
	        s.disableKeyboardControl = function () {
	            s.params.keyboardControl = false;
	            $(document).off('keydown', handleKeyboard);
	        };
	        s.enableKeyboardControl = function () {
	            s.params.keyboardControl = true;
	            $(document).on('keydown', handleKeyboard);
	        };
	        
	
	        /*=========================
	          Mousewheel Control
	          ===========================*/
	        s.mousewheel = {
	            event: false,
	            lastScrollTime: (new window.Date()).getTime()
	        };
	        if (s.params.mousewheelControl) {
	            try {
	                new window.WheelEvent('wheel');
	                s.mousewheel.event = 'wheel';
	            } catch (e) {
	                if (window.WheelEvent || (s.container[0] && 'wheel' in s.container[0])) {
	                    s.mousewheel.event = 'wheel';
	                }
	            }
	            if (!s.mousewheel.event && window.WheelEvent) {
	        
	            }
	            if (!s.mousewheel.event && document.onmousewheel !== undefined) {
	                s.mousewheel.event = 'mousewheel';
	            }
	            if (!s.mousewheel.event) {
	                s.mousewheel.event = 'DOMMouseScroll';
	            }
	        }
	        function handleMousewheel(e) {
	            if (e.originalEvent) e = e.originalEvent; //jquery fix
	            var we = s.mousewheel.event;
	            var delta = 0;
	            var rtlFactor = s.rtl ? -1 : 1;
	        
	            //WebKits
	            if (we === 'mousewheel') {
	                if (s.params.mousewheelForceToAxis) {
	                    if (s.isHorizontal()) {
	                        if (Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY)) delta = e.wheelDeltaX * rtlFactor;
	                        else return;
	                    }
	                    else {
	                        if (Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX)) delta = e.wheelDeltaY;
	                        else return;
	                    }
	                }
	                else {
	                    delta = Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY) ? - e.wheelDeltaX * rtlFactor : - e.wheelDeltaY;
	                }
	            }
	            //Old FireFox
	            else if (we === 'DOMMouseScroll') delta = -e.detail;
	            //New FireFox
	            else if (we === 'wheel') {
	                if (s.params.mousewheelForceToAxis) {
	                    if (s.isHorizontal()) {
	                        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) delta = -e.deltaX * rtlFactor;
	                        else return;
	                    }
	                    else {
	                        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) delta = -e.deltaY;
	                        else return;
	                    }
	                }
	                else {
	                    delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? - e.deltaX * rtlFactor : - e.deltaY;
	                }
	            }
	            if (delta === 0) return;
	        
	            if (s.params.mousewheelInvert) delta = -delta;
	        
	            if (!s.params.freeMode) {
	                if ((new window.Date()).getTime() - s.mousewheel.lastScrollTime > 60) {
	                    if (delta < 0) {
	                        if ((!s.isEnd || s.params.loop) && !s.animating) s.slideNext();
	                        else if (s.params.mousewheelReleaseOnEdges) return true;
	                    }
	                    else {
	                        if ((!s.isBeginning || s.params.loop) && !s.animating) s.slidePrev();
	                        else if (s.params.mousewheelReleaseOnEdges) return true;
	                    }
	                }
	                s.mousewheel.lastScrollTime = (new window.Date()).getTime();
	        
	            }
	            else {
	                //Freemode or scrollContainer:
	                var position = s.getWrapperTranslate() + delta * s.params.mousewheelSensitivity;
	                var wasBeginning = s.isBeginning,
	                    wasEnd = s.isEnd;
	        
	                if (position >= s.minTranslate()) position = s.minTranslate();
	                if (position <= s.maxTranslate()) position = s.maxTranslate();
	        
	                s.setWrapperTransition(0);
	                s.setWrapperTranslate(position);
	                s.updateProgress();
	                s.updateActiveIndex();
	        
	                if (!wasBeginning && s.isBeginning || !wasEnd && s.isEnd) {
	                    s.updateClasses();
	                }
	        
	                if (s.params.freeModeSticky) {
	                    clearTimeout(s.mousewheel.timeout);
	                    s.mousewheel.timeout = setTimeout(function () {
	                        s.slideReset();
	                    }, 300);
	                }
	                else {
	                    if (s.params.lazyLoading && s.lazy) {
	                        s.lazy.load();
	                    }
	                }
	        
	                // Return page scroll on edge positions
	                if (position === 0 || position === s.maxTranslate()) return;
	            }
	            if (s.params.autoplay) s.stopAutoplay();
	        
	            if (e.preventDefault) e.preventDefault();
	            else e.returnValue = false;
	            return false;
	        }
	        s.disableMousewheelControl = function () {
	            if (!s.mousewheel.event) return false;
	            s.container.off(s.mousewheel.event, handleMousewheel);
	            return true;
	        };
	        
	        s.enableMousewheelControl = function () {
	            if (!s.mousewheel.event) return false;
	            s.container.on(s.mousewheel.event, handleMousewheel);
	            return true;
	        };
	        
	
	        /*=========================
	          Parallax
	          ===========================*/
	        function setParallaxTransform(el, progress) {
	            el = $(el);
	            var p, pX, pY;
	            var rtlFactor = s.rtl ? -1 : 1;
	        
	            p = el.attr('data-swiper-parallax') || '0';
	            pX = el.attr('data-swiper-parallax-x');
	            pY = el.attr('data-swiper-parallax-y');
	            if (pX || pY) {
	                pX = pX || '0';
	                pY = pY || '0';
	            }
	            else {
	                if (s.isHorizontal()) {
	                    pX = p;
	                    pY = '0';
	                }
	                else {
	                    pY = p;
	                    pX = '0';
	                }
	            }
	        
	            if ((pX).indexOf('%') >= 0) {
	                pX = parseInt(pX, 10) * progress * rtlFactor + '%';
	            }
	            else {
	                pX = pX * progress * rtlFactor + 'px' ;
	            }
	            if ((pY).indexOf('%') >= 0) {
	                pY = parseInt(pY, 10) * progress + '%';
	            }
	            else {
	                pY = pY * progress + 'px' ;
	            }
	        
	            el.transform('translate3d(' + pX + ', ' + pY + ',0px)');
	        }
	        s.parallax = {
	            setTranslate: function () {
	                s.container.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){
	                    setParallaxTransform(this, s.progress);
	        
	                });
	                s.slides.each(function () {
	                    var slide = $(this);
	                    slide.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function () {
	                        var progress = Math.min(Math.max(slide[0].progress, -1), 1);
	                        setParallaxTransform(this, progress);
	                    });
	                });
	            },
	            setTransition: function (duration) {
	                if (typeof duration === 'undefined') duration = s.params.speed;
	                s.container.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){
	                    var el = $(this);
	                    var parallaxDuration = parseInt(el.attr('data-swiper-parallax-duration'), 10) || duration;
	                    if (duration === 0) parallaxDuration = 0;
	                    el.transition(parallaxDuration);
	                });
	            }
	        };
	        
	
	        /*=========================
	          Plugins API. Collect all and init all plugins
	          ===========================*/
	        s._plugins = [];
	        for (var plugin in s.plugins) {
	            var p = s.plugins[plugin](s, s.params[plugin]);
	            if (p) s._plugins.push(p);
	        }
	        // Method to call all plugins event/method
	        s.callPlugins = function (eventName) {
	            for (var i = 0; i < s._plugins.length; i++) {
	                if (eventName in s._plugins[i]) {
	                    s._plugins[i][eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
	                }
	            }
	        };
	
	        /*=========================
	          Events/Callbacks/Plugins Emitter
	          ===========================*/
	        function normalizeEventName (eventName) {
	            if (eventName.indexOf('on') !== 0) {
	                if (eventName[0] !== eventName[0].toUpperCase()) {
	                    eventName = 'on' + eventName[0].toUpperCase() + eventName.substring(1);
	                }
	                else {
	                    eventName = 'on' + eventName;
	                }
	            }
	            return eventName;
	        }
	        s.emitterEventListeners = {
	        
	        };
	        s.emit = function (eventName) {
	            // Trigger callbacks
	            if (s.params[eventName]) {
	                s.params[eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
	            }
	            var i;
	            // Trigger events
	            if (s.emitterEventListeners[eventName]) {
	                for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
	                    s.emitterEventListeners[eventName][i](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
	                }
	            }
	            // Trigger plugins
	            if (s.callPlugins) s.callPlugins(eventName, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
	        };
	        s.on = function (eventName, handler) {
	            eventName = normalizeEventName(eventName);
	            if (!s.emitterEventListeners[eventName]) s.emitterEventListeners[eventName] = [];
	            s.emitterEventListeners[eventName].push(handler);
	            return s;
	        };
	        s.off = function (eventName, handler) {
	            var i;
	            eventName = normalizeEventName(eventName);
	            if (typeof handler === 'undefined') {
	                // Remove all handlers for such event
	                s.emitterEventListeners[eventName] = [];
	                return s;
	            }
	            if (!s.emitterEventListeners[eventName] || s.emitterEventListeners[eventName].length === 0) return;
	            for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
	                if(s.emitterEventListeners[eventName][i] === handler) s.emitterEventListeners[eventName].splice(i, 1);
	            }
	            return s;
	        };
	        s.once = function (eventName, handler) {
	            eventName = normalizeEventName(eventName);
	            var _handler = function () {
	                handler(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
	                s.off(eventName, _handler);
	            };
	            s.on(eventName, _handler);
	            return s;
	        };
	
	        // Accessibility tools
	        s.a11y = {
	            makeFocusable: function ($el) {
	                $el.attr('tabIndex', '0');
	                return $el;
	            },
	            addRole: function ($el, role) {
	                $el.attr('role', role);
	                return $el;
	            },
	        
	            addLabel: function ($el, label) {
	                $el.attr('aria-label', label);
	                return $el;
	            },
	        
	            disable: function ($el) {
	                $el.attr('aria-disabled', true);
	                return $el;
	            },
	        
	            enable: function ($el) {
	                $el.attr('aria-disabled', false);
	                return $el;
	            },
	        
	            onEnterKey: function (event) {
	                if (event.keyCode !== 13) return;
	                if ($(event.target).is(s.params.nextButton)) {
	                    s.onClickNext(event);
	                    if (s.isEnd) {
	                        s.a11y.notify(s.params.lastSlideMessage);
	                    }
	                    else {
	                        s.a11y.notify(s.params.nextSlideMessage);
	                    }
	                }
	                else if ($(event.target).is(s.params.prevButton)) {
	                    s.onClickPrev(event);
	                    if (s.isBeginning) {
	                        s.a11y.notify(s.params.firstSlideMessage);
	                    }
	                    else {
	                        s.a11y.notify(s.params.prevSlideMessage);
	                    }
	                }
	                if ($(event.target).is('.' + s.params.bulletClass)) {
	                    $(event.target)[0].click();
	                }
	            },
	        
	            liveRegion: $('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
	        
	            notify: function (message) {
	                var notification = s.a11y.liveRegion;
	                if (notification.length === 0) return;
	                notification.html('');
	                notification.html(message);
	            },
	            init: function () {
	                // Setup accessibility
	                if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
	                    s.a11y.makeFocusable(s.nextButton);
	                    s.a11y.addRole(s.nextButton, 'button');
	                    s.a11y.addLabel(s.nextButton, s.params.nextSlideMessage);
	                }
	                if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
	                    s.a11y.makeFocusable(s.prevButton);
	                    s.a11y.addRole(s.prevButton, 'button');
	                    s.a11y.addLabel(s.prevButton, s.params.prevSlideMessage);
	                }
	        
	                $(s.container).append(s.a11y.liveRegion);
	            },
	            initPagination: function () {
	                if (s.params.pagination && s.params.paginationClickable && s.bullets && s.bullets.length) {
	                    s.bullets.each(function () {
	                        var bullet = $(this);
	                        s.a11y.makeFocusable(bullet);
	                        s.a11y.addRole(bullet, 'button');
	                        s.a11y.addLabel(bullet, s.params.paginationBulletMessage.replace(/{{index}}/, bullet.index() + 1));
	                    });
	                }
	            },
	            destroy: function () {
	                if (s.a11y.liveRegion && s.a11y.liveRegion.length > 0) s.a11y.liveRegion.remove();
	            }
	        };
	        
	
	        /*=========================
	          Init/Destroy
	          ===========================*/
	        s.init = function () {
	            if (s.params.loop) s.createLoop();
	            s.updateContainerSize();
	            s.updateSlidesSize();
	            s.updatePagination();
	            if (s.params.scrollbar && s.scrollbar) {
	                s.scrollbar.set();
	                if (s.params.scrollbarDraggable) {
	                    s.scrollbar.enableDraggable();
	                }
	            }
	            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
	                if (!s.params.loop) s.updateProgress();
	                s.effects[s.params.effect].setTranslate();
	            }
	            if (s.params.loop) {
	                s.slideTo(s.params.initialSlide + s.loopedSlides, 0, s.params.runCallbacksOnInit);
	            }
	            else {
	                s.slideTo(s.params.initialSlide, 0, s.params.runCallbacksOnInit);
	                if (s.params.initialSlide === 0) {
	                    if (s.parallax && s.params.parallax) s.parallax.setTranslate();
	                    if (s.lazy && s.params.lazyLoading) {
	                        s.lazy.load();
	                        s.lazy.initialImageLoaded = true;
	                    }
	                }
	            }
	            s.attachEvents();
	            if (s.params.observer && s.support.observer) {
	                s.initObservers();
	            }
	            if (s.params.preloadImages && !s.params.lazyLoading) {
	                s.preloadImages();
	            }
	            if (s.params.autoplay) {
	                s.startAutoplay();
	            }
	            if (s.params.keyboardControl) {
	                if (s.enableKeyboardControl) s.enableKeyboardControl();
	            }
	            if (s.params.mousewheelControl) {
	                if (s.enableMousewheelControl) s.enableMousewheelControl();
	            }
	            if (s.params.hashnav) {
	                if (s.hashnav) s.hashnav.init();
	            }
	            if (s.params.a11y && s.a11y) s.a11y.init();
	            s.emit('onInit', s);
	        };
	        
	        // Cleanup dynamic styles
	        s.cleanupStyles = function () {
	            // Container
	            s.container.removeClass(s.classNames.join(' ')).removeAttr('style');
	        
	            // Wrapper
	            s.wrapper.removeAttr('style');
	        
	            // Slides
	            if (s.slides && s.slides.length) {
	                s.slides
	                    .removeClass([
	                      s.params.slideVisibleClass,
	                      s.params.slideActiveClass,
	                      s.params.slideNextClass,
	                      s.params.slidePrevClass
	                    ].join(' '))
	                    .removeAttr('style')
	                    .removeAttr('data-swiper-column')
	                    .removeAttr('data-swiper-row');
	            }
	        
	            // Pagination/Bullets
	            if (s.paginationContainer && s.paginationContainer.length) {
	                s.paginationContainer.removeClass(s.params.paginationHiddenClass);
	            }
	            if (s.bullets && s.bullets.length) {
	                s.bullets.removeClass(s.params.bulletActiveClass);
	            }
	        
	            // Buttons
	            if (s.params.prevButton) $(s.params.prevButton).removeClass(s.params.buttonDisabledClass);
	            if (s.params.nextButton) $(s.params.nextButton).removeClass(s.params.buttonDisabledClass);
	        
	            // Scrollbar
	            if (s.params.scrollbar && s.scrollbar) {
	                if (s.scrollbar.track && s.scrollbar.track.length) s.scrollbar.track.removeAttr('style');
	                if (s.scrollbar.drag && s.scrollbar.drag.length) s.scrollbar.drag.removeAttr('style');
	            }
	        };
	        
	        // Destroy
	        s.destroy = function (deleteInstance, cleanupStyles) {
	            // Detach evebts
	            s.detachEvents();
	            // Stop autoplay
	            s.stopAutoplay();
	            // Disable draggable
	            if (s.params.scrollbar && s.scrollbar) {
	                if (s.params.scrollbarDraggable) {
	                    s.scrollbar.disableDraggable();
	                }
	            }
	            // Destroy loop
	            if (s.params.loop) {
	                s.destroyLoop();
	            }
	            // Cleanup styles
	            if (cleanupStyles) {
	                s.cleanupStyles();
	            }
	            // Disconnect observer
	            s.disconnectObservers();
	            // Disable keyboard/mousewheel
	            if (s.params.keyboardControl) {
	                if (s.disableKeyboardControl) s.disableKeyboardControl();
	            }
	            if (s.params.mousewheelControl) {
	                if (s.disableMousewheelControl) s.disableMousewheelControl();
	            }
	            // Disable a11y
	            if (s.params.a11y && s.a11y) s.a11y.destroy();
	            // Destroy callback
	            s.emit('onDestroy');
	            // Delete instance
	            if (deleteInstance !== false) s = null;
	        };
	        
	        s.init();
	        
	
	    
	        // Return swiper instance
	        return s;
	    };
	    
	
	    /*==================================================
	        Prototype
	    ====================================================*/
	    Swiper.prototype = {
	        isSafari: (function () {
	            var ua = navigator.userAgent.toLowerCase();
	            return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
	        })(),
	        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
	        isArray: function (arr) {
	            return Object.prototype.toString.apply(arr) === '[object Array]';
	        },
	        /*==================================================
	        Browser
	        ====================================================*/
	        browser: {
	            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
	            ieTouch: (window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1) || (window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1)
	        },
	        /*==================================================
	        Devices
	        ====================================================*/
	        device: (function () {
	            var ua = navigator.userAgent;
	            var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
	            var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
	            var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
	            var iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
	            return {
	                ios: ipad || iphone || ipod,
	                android: android
	            };
	        })(),
	        /*==================================================
	        Feature Detection
	        ====================================================*/
	        support: {
	            touch : (window.Modernizr && Modernizr.touch === true) || (function () {
	                return !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
	            })(),
	    
	            transforms3d : (window.Modernizr && Modernizr.csstransforms3d === true) || (function () {
	                var div = document.createElement('div').style;
	                return ('webkitPerspective' in div || 'MozPerspective' in div || 'OPerspective' in div || 'MsPerspective' in div || 'perspective' in div);
	            })(),
	    
	            flexbox: (function () {
	                var div = document.createElement('div').style;
	                var styles = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
	                for (var i = 0; i < styles.length; i++) {
	                    if (styles[i] in div) return true;
	                }
	            })(),
	    
	            observer: (function () {
	                return ('MutationObserver' in window || 'WebkitMutationObserver' in window);
	            })()
	        },
	        /*==================================================
	        Plugins
	        ====================================================*/
	        plugins: {}
	    };
	    
	
	    /*===========================
	    Dom7 Library
	    ===========================*/
	    var Dom7 = (function () {
	        var Dom7 = function (arr) {
	            var _this = this, i = 0;
	            // Create array-like object
	            for (i = 0; i < arr.length; i++) {
	                _this[i] = arr[i];
	            }
	            _this.length = arr.length;
	            // Return collection with methods
	            return this;
	        };
	        var $ = function (selector, context) {
	            var arr = [], i = 0;
	            if (selector && !context) {
	                if (selector instanceof Dom7) {
	                    return selector;
	                }
	            }
	            if (selector) {
	                // String
	                if (typeof selector === 'string') {
	                    var els, tempParent, html = selector.trim();
	                    if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
	                        var toCreate = 'div';
	                        if (html.indexOf('<li') === 0) toCreate = 'ul';
	                        if (html.indexOf('<tr') === 0) toCreate = 'tbody';
	                        if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
	                        if (html.indexOf('<tbody') === 0) toCreate = 'table';
	                        if (html.indexOf('<option') === 0) toCreate = 'select';
	                        tempParent = document.createElement(toCreate);
	                        tempParent.innerHTML = selector;
	                        for (i = 0; i < tempParent.childNodes.length; i++) {
	                            arr.push(tempParent.childNodes[i]);
	                        }
	                    }
	                    else {
	                        if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
	                            // Pure ID selector
	                            els = [document.getElementById(selector.split('#')[1])];
	                        }
	                        else {
	                            // Other selectors
	                            els = (context || document).querySelectorAll(selector);
	                        }
	                        for (i = 0; i < els.length; i++) {
	                            if (els[i]) arr.push(els[i]);
	                        }
	                    }
	                }
	                // Node/element
	                else if (selector.nodeType || selector === window || selector === document) {
	                    arr.push(selector);
	                }
	                //Array of elements or instance of Dom
	                else if (selector.length > 0 && selector[0].nodeType) {
	                    for (i = 0; i < selector.length; i++) {
	                        arr.push(selector[i]);
	                    }
	                }
	            }
	            return new Dom7(arr);
	        };
	        Dom7.prototype = {
	            // Classes and attriutes
	            addClass: function (className) {
	                if (typeof className === 'undefined') {
	                    return this;
	                }
	                var classes = className.split(' ');
	                for (var i = 0; i < classes.length; i++) {
	                    for (var j = 0; j < this.length; j++) {
	                        this[j].classList.add(classes[i]);
	                    }
	                }
	                return this;
	            },
	            removeClass: function (className) {
	                var classes = className.split(' ');
	                for (var i = 0; i < classes.length; i++) {
	                    for (var j = 0; j < this.length; j++) {
	                        this[j].classList.remove(classes[i]);
	                    }
	                }
	                return this;
	            },
	            hasClass: function (className) {
	                if (!this[0]) return false;
	                else return this[0].classList.contains(className);
	            },
	            toggleClass: function (className) {
	                var classes = className.split(' ');
	                for (var i = 0; i < classes.length; i++) {
	                    for (var j = 0; j < this.length; j++) {
	                        this[j].classList.toggle(classes[i]);
	                    }
	                }
	                return this;
	            },
	            attr: function (attrs, value) {
	                if (arguments.length === 1 && typeof attrs === 'string') {
	                    // Get attr
	                    if (this[0]) return this[0].getAttribute(attrs);
	                    else return undefined;
	                }
	                else {
	                    // Set attrs
	                    for (var i = 0; i < this.length; i++) {
	                        if (arguments.length === 2) {
	                            // String
	                            this[i].setAttribute(attrs, value);
	                        }
	                        else {
	                            // Object
	                            for (var attrName in attrs) {
	                                this[i][attrName] = attrs[attrName];
	                                this[i].setAttribute(attrName, attrs[attrName]);
	                            }
	                        }
	                    }
	                    return this;
	                }
	            },
	            removeAttr: function (attr) {
	                for (var i = 0; i < this.length; i++) {
	                    this[i].removeAttribute(attr);
	                }
	                return this;
	            },
	            data: function (key, value) {
	                if (typeof value === 'undefined') {
	                    // Get value
	                    if (this[0]) {
	                        var dataKey = this[0].getAttribute('data-' + key);
	                        if (dataKey) return dataKey;
	                        else if (this[0].dom7ElementDataStorage && (key in this[0].dom7ElementDataStorage)) return this[0].dom7ElementDataStorage[key];
	                        else return undefined;
	                    }
	                    else return undefined;
	                }
	                else {
	                    // Set value
	                    for (var i = 0; i < this.length; i++) {
	                        var el = this[i];
	                        if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
	                        el.dom7ElementDataStorage[key] = value;
	                    }
	                    return this;
	                }
	            },
	            // Transforms
	            transform : function (transform) {
	                for (var i = 0; i < this.length; i++) {
	                    var elStyle = this[i].style;
	                    elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = transform;
	                }
	                return this;
	            },
	            transition: function (duration) {
	                if (typeof duration !== 'string') {
	                    duration = duration + 'ms';
	                }
	                for (var i = 0; i < this.length; i++) {
	                    var elStyle = this[i].style;
	                    elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
	                }
	                return this;
	            },
	            //Events
	            on: function (eventName, targetSelector, listener, capture) {
	                function handleLiveEvent(e) {
	                    var target = e.target;
	                    if ($(target).is(targetSelector)) listener.call(target, e);
	                    else {
	                        var parents = $(target).parents();
	                        for (var k = 0; k < parents.length; k++) {
	                            if ($(parents[k]).is(targetSelector)) listener.call(parents[k], e);
	                        }
	                    }
	                }
	                var events = eventName.split(' ');
	                var i, j;
	                for (i = 0; i < this.length; i++) {
	                    if (typeof targetSelector === 'function' || targetSelector === false) {
	                        // Usual events
	                        if (typeof targetSelector === 'function') {
	                            listener = arguments[1];
	                            capture = arguments[2] || false;
	                        }
	                        for (j = 0; j < events.length; j++) {
	                            this[i].addEventListener(events[j], listener, capture);
	                        }
	                    }
	                    else {
	                        //Live events
	                        for (j = 0; j < events.length; j++) {
	                            if (!this[i].dom7LiveListeners) this[i].dom7LiveListeners = [];
	                            this[i].dom7LiveListeners.push({listener: listener, liveListener: handleLiveEvent});
	                            this[i].addEventListener(events[j], handleLiveEvent, capture);
	                        }
	                    }
	                }
	    
	                return this;
	            },
	            off: function (eventName, targetSelector, listener, capture) {
	                var events = eventName.split(' ');
	                for (var i = 0; i < events.length; i++) {
	                    for (var j = 0; j < this.length; j++) {
	                        if (typeof targetSelector === 'function' || targetSelector === false) {
	                            // Usual events
	                            if (typeof targetSelector === 'function') {
	                                listener = arguments[1];
	                                capture = arguments[2] || false;
	                            }
	                            this[j].removeEventListener(events[i], listener, capture);
	                        }
	                        else {
	                            // Live event
	                            if (this[j].dom7LiveListeners) {
	                                for (var k = 0; k < this[j].dom7LiveListeners.length; k++) {
	                                    if (this[j].dom7LiveListeners[k].listener === listener) {
	                                        this[j].removeEventListener(events[i], this[j].dom7LiveListeners[k].liveListener, capture);
	                                    }
	                                }
	                            }
	                        }
	                    }
	                }
	                return this;
	            },
	            once: function (eventName, targetSelector, listener, capture) {
	                var dom = this;
	                if (typeof targetSelector === 'function') {
	                    targetSelector = false;
	                    listener = arguments[1];
	                    capture = arguments[2];
	                }
	                function proxy(e) {
	                    listener(e);
	                    dom.off(eventName, targetSelector, proxy, capture);
	                }
	                dom.on(eventName, targetSelector, proxy, capture);
	            },
	            trigger: function (eventName, eventData) {
	                for (var i = 0; i < this.length; i++) {
	                    var evt;
	                    try {
	                        evt = new window.CustomEvent(eventName, {detail: eventData, bubbles: true, cancelable: true});
	                    }
	                    catch (e) {
	                        evt = document.createEvent('Event');
	                        evt.initEvent(eventName, true, true);
	                        evt.detail = eventData;
	                    }
	                    this[i].dispatchEvent(evt);
	                }
	                return this;
	            },
	            transitionEnd: function (callback) {
	                var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
	                    i, j, dom = this;
	                function fireCallBack(e) {
	                    /*jshint validthis:true */
	                    if (e.target !== this) return;
	                    callback.call(this, e);
	                    for (i = 0; i < events.length; i++) {
	                        dom.off(events[i], fireCallBack);
	                    }
	                }
	                if (callback) {
	                    for (i = 0; i < events.length; i++) {
	                        dom.on(events[i], fireCallBack);
	                    }
	                }
	                return this;
	            },
	            // Sizing/Styles
	            width: function () {
	                if (this[0] === window) {
	                    return window.innerWidth;
	                }
	                else {
	                    if (this.length > 0) {
	                        return parseFloat(this.css('width'));
	                    }
	                    else {
	                        return null;
	                    }
	                }
	            },
	            outerWidth: function (includeMargins) {
	                if (this.length > 0) {
	                    if (includeMargins)
	                        return this[0].offsetWidth + parseFloat(this.css('margin-right')) + parseFloat(this.css('margin-left'));
	                    else
	                        return this[0].offsetWidth;
	                }
	                else return null;
	            },
	            height: function () {
	                if (this[0] === window) {
	                    return window.innerHeight;
	                }
	                else {
	                    if (this.length > 0) {
	                        return parseFloat(this.css('height'));
	                    }
	                    else {
	                        return null;
	                    }
	                }
	            },
	            outerHeight: function (includeMargins) {
	                if (this.length > 0) {
	                    if (includeMargins)
	                        return this[0].offsetHeight + parseFloat(this.css('margin-top')) + parseFloat(this.css('margin-bottom'));
	                    else
	                        return this[0].offsetHeight;
	                }
	                else return null;
	            },
	            offset: function () {
	                if (this.length > 0) {
	                    var el = this[0];
	                    var box = el.getBoundingClientRect();
	                    var body = document.body;
	                    var clientTop  = el.clientTop  || body.clientTop  || 0;
	                    var clientLeft = el.clientLeft || body.clientLeft || 0;
	                    var scrollTop  = window.pageYOffset || el.scrollTop;
	                    var scrollLeft = window.pageXOffset || el.scrollLeft;
	                    return {
	                        top: box.top  + scrollTop  - clientTop,
	                        left: box.left + scrollLeft - clientLeft
	                    };
	                }
	                else {
	                    return null;
	                }
	            },
	            css: function (props, value) {
	                var i;
	                if (arguments.length === 1) {
	                    if (typeof props === 'string') {
	                        if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
	                    }
	                    else {
	                        for (i = 0; i < this.length; i++) {
	                            for (var prop in props) {
	                                this[i].style[prop] = props[prop];
	                            }
	                        }
	                        return this;
	                    }
	                }
	                if (arguments.length === 2 && typeof props === 'string') {
	                    for (i = 0; i < this.length; i++) {
	                        this[i].style[props] = value;
	                    }
	                    return this;
	                }
	                return this;
	            },
	    
	            //Dom manipulation
	            each: function (callback) {
	                for (var i = 0; i < this.length; i++) {
	                    callback.call(this[i], i, this[i]);
	                }
	                return this;
	            },
	            html: function (html) {
	                if (typeof html === 'undefined') {
	                    return this[0] ? this[0].innerHTML : undefined;
	                }
	                else {
	                    for (var i = 0; i < this.length; i++) {
	                        this[i].innerHTML = html;
	                    }
	                    return this;
	                }
	            },
	            text: function (text) {
	                if (typeof text === 'undefined') {
	                    if (this[0]) {
	                        return this[0].textContent.trim();
	                    }
	                    else return null;
	                }
	                else {
	                    for (var i = 0; i < this.length; i++) {
	                        this[i].textContent = text;
	                    }
	                    return this;
	                }
	            },
	            is: function (selector) {
	                if (!this[0]) return false;
	                var compareWith, i;
	                if (typeof selector === 'string') {
	                    var el = this[0];
	                    if (el === document) return selector === document;
	                    if (el === window) return selector === window;
	    
	                    if (el.matches) return el.matches(selector);
	                    else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
	                    else if (el.mozMatchesSelector) return el.mozMatchesSelector(selector);
	                    else if (el.msMatchesSelector) return el.msMatchesSelector(selector);
	                    else {
	                        compareWith = $(selector);
	                        for (i = 0; i < compareWith.length; i++) {
	                            if (compareWith[i] === this[0]) return true;
	                        }
	                        return false;
	                    }
	                }
	                else if (selector === document) return this[0] === document;
	                else if (selector === window) return this[0] === window;
	                else {
	                    if (selector.nodeType || selector instanceof Dom7) {
	                        compareWith = selector.nodeType ? [selector] : selector;
	                        for (i = 0; i < compareWith.length; i++) {
	                            if (compareWith[i] === this[0]) return true;
	                        }
	                        return false;
	                    }
	                    return false;
	                }
	    
	            },
	            index: function () {
	                if (this[0]) {
	                    var child = this[0];
	                    var i = 0;
	                    while ((child = child.previousSibling) !== null) {
	                        if (child.nodeType === 1) i++;
	                    }
	                    return i;
	                }
	                else return undefined;
	            },
	            eq: function (index) {
	                if (typeof index === 'undefined') return this;
	                var length = this.length;
	                var returnIndex;
	                if (index > length - 1) {
	                    return new Dom7([]);
	                }
	                if (index < 0) {
	                    returnIndex = length + index;
	                    if (returnIndex < 0) return new Dom7([]);
	                    else return new Dom7([this[returnIndex]]);
	                }
	                return new Dom7([this[index]]);
	            },
	            append: function (newChild) {
	                var i, j;
	                for (i = 0; i < this.length; i++) {
	                    if (typeof newChild === 'string') {
	                        var tempDiv = document.createElement('div');
	                        tempDiv.innerHTML = newChild;
	                        while (tempDiv.firstChild) {
	                            this[i].appendChild(tempDiv.firstChild);
	                        }
	                    }
	                    else if (newChild instanceof Dom7) {
	                        for (j = 0; j < newChild.length; j++) {
	                            this[i].appendChild(newChild[j]);
	                        }
	                    }
	                    else {
	                        this[i].appendChild(newChild);
	                    }
	                }
	                return this;
	            },
	            prepend: function (newChild) {
	                var i, j;
	                for (i = 0; i < this.length; i++) {
	                    if (typeof newChild === 'string') {
	                        var tempDiv = document.createElement('div');
	                        tempDiv.innerHTML = newChild;
	                        for (j = tempDiv.childNodes.length - 1; j >= 0; j--) {
	                            this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
	                        }
	                        // this[i].insertAdjacentHTML('afterbegin', newChild);
	                    }
	                    else if (newChild instanceof Dom7) {
	                        for (j = 0; j < newChild.length; j++) {
	                            this[i].insertBefore(newChild[j], this[i].childNodes[0]);
	                        }
	                    }
	                    else {
	                        this[i].insertBefore(newChild, this[i].childNodes[0]);
	                    }
	                }
	                return this;
	            },
	            insertBefore: function (selector) {
	                var before = $(selector);
	                for (var i = 0; i < this.length; i++) {
	                    if (before.length === 1) {
	                        before[0].parentNode.insertBefore(this[i], before[0]);
	                    }
	                    else if (before.length > 1) {
	                        for (var j = 0; j < before.length; j++) {
	                            before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
	                        }
	                    }
	                }
	            },
	            insertAfter: function (selector) {
	                var after = $(selector);
	                for (var i = 0; i < this.length; i++) {
	                    if (after.length === 1) {
	                        after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
	                    }
	                    else if (after.length > 1) {
	                        for (var j = 0; j < after.length; j++) {
	                            after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
	                        }
	                    }
	                }
	            },
	            next: function (selector) {
	                if (this.length > 0) {
	                    if (selector) {
	                        if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) return new Dom7([this[0].nextElementSibling]);
	                        else return new Dom7([]);
	                    }
	                    else {
	                        if (this[0].nextElementSibling) return new Dom7([this[0].nextElementSibling]);
	                        else return new Dom7([]);
	                    }
	                }
	                else return new Dom7([]);
	            },
	            nextAll: function (selector) {
	                var nextEls = [];
	                var el = this[0];
	                if (!el) return new Dom7([]);
	                while (el.nextElementSibling) {
	                    var next = el.nextElementSibling;
	                    if (selector) {
	                        if($(next).is(selector)) nextEls.push(next);
	                    }
	                    else nextEls.push(next);
	                    el = next;
	                }
	                return new Dom7(nextEls);
	            },
	            prev: function (selector) {
	                if (this.length > 0) {
	                    if (selector) {
	                        if (this[0].previousElementSibling && $(this[0].previousElementSibling).is(selector)) return new Dom7([this[0].previousElementSibling]);
	                        else return new Dom7([]);
	                    }
	                    else {
	                        if (this[0].previousElementSibling) return new Dom7([this[0].previousElementSibling]);
	                        else return new Dom7([]);
	                    }
	                }
	                else return new Dom7([]);
	            },
	            prevAll: function (selector) {
	                var prevEls = [];
	                var el = this[0];
	                if (!el) return new Dom7([]);
	                while (el.previousElementSibling) {
	                    var prev = el.previousElementSibling;
	                    if (selector) {
	                        if($(prev).is(selector)) prevEls.push(prev);
	                    }
	                    else prevEls.push(prev);
	                    el = prev;
	                }
	                return new Dom7(prevEls);
	            },
	            parent: function (selector) {
	                var parents = [];
	                for (var i = 0; i < this.length; i++) {
	                    if (selector) {
	                        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
	                    }
	                    else {
	                        parents.push(this[i].parentNode);
	                    }
	                }
	                return $($.unique(parents));
	            },
	            parents: function (selector) {
	                var parents = [];
	                for (var i = 0; i < this.length; i++) {
	                    var parent = this[i].parentNode;
	                    while (parent) {
	                        if (selector) {
	                            if ($(parent).is(selector)) parents.push(parent);
	                        }
	                        else {
	                            parents.push(parent);
	                        }
	                        parent = parent.parentNode;
	                    }
	                }
	                return $($.unique(parents));
	            },
	            find : function (selector) {
	                var foundElements = [];
	                for (var i = 0; i < this.length; i++) {
	                    var found = this[i].querySelectorAll(selector);
	                    for (var j = 0; j < found.length; j++) {
	                        foundElements.push(found[j]);
	                    }
	                }
	                return new Dom7(foundElements);
	            },
	            children: function (selector) {
	                var children = [];
	                for (var i = 0; i < this.length; i++) {
	                    var childNodes = this[i].childNodes;
	    
	                    for (var j = 0; j < childNodes.length; j++) {
	                        if (!selector) {
	                            if (childNodes[j].nodeType === 1) children.push(childNodes[j]);
	                        }
	                        else {
	                            if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) children.push(childNodes[j]);
	                        }
	                    }
	                }
	                return new Dom7($.unique(children));
	            },
	            remove: function () {
	                for (var i = 0; i < this.length; i++) {
	                    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
	                }
	                return this;
	            },
	            add: function () {
	                var dom = this;
	                var i, j;
	                for (i = 0; i < arguments.length; i++) {
	                    var toAdd = $(arguments[i]);
	                    for (j = 0; j < toAdd.length; j++) {
	                        dom[dom.length] = toAdd[j];
	                        dom.length++;
	                    }
	                }
	                return dom;
	            }
	        };
	        $.fn = Dom7.prototype;
	        $.unique = function (arr) {
	            var unique = [];
	            for (var i = 0; i < arr.length; i++) {
	                if (unique.indexOf(arr[i]) === -1) unique.push(arr[i]);
	            }
	            return unique;
	        };
	    
	        return $;
	    })();
	    
	
	    /*===========================
	     Get Dom libraries
	     ===========================*/
	    var swiperDomPlugins = ['jQuery', 'Zepto', 'Dom7'];
	    for (var i = 0; i < swiperDomPlugins.length; i++) {
	    	if (window[swiperDomPlugins[i]]) {
	    		addLibraryPlugin(window[swiperDomPlugins[i]]);
	    	}
	    }
	    // Required DOM Plugins
	    var domLib;
	    if (typeof Dom7 === 'undefined') {
	    	domLib = window.Dom7 || window.Zepto || window.jQuery;
	    }
	    else {
	    	domLib = Dom7;
	    }
	
	    /*===========================
	    Add .swiper plugin from Dom libraries
	    ===========================*/
	    function addLibraryPlugin(lib) {
	        lib.fn.swiper = function (params) {
	            var firstInstance;
	            lib(this).each(function () {
	                var s = new Swiper(this, params);
	                if (!firstInstance) firstInstance = s;
	            });
	            return firstInstance;
	        };
	    }
	    
	    if (domLib) {
	        if (!('transitionEnd' in domLib.fn)) {
	            domLib.fn.transitionEnd = function (callback) {
	                var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
	                    i, j, dom = this;
	                function fireCallBack(e) {
	                    /*jshint validthis:true */
	                    if (e.target !== this) return;
	                    callback.call(this, e);
	                    for (i = 0; i < events.length; i++) {
	                        dom.off(events[i], fireCallBack);
	                    }
	                }
	                if (callback) {
	                    for (i = 0; i < events.length; i++) {
	                        dom.on(events[i], fireCallBack);
	                    }
	                }
	                return this;
	            };
	        }
	        if (!('transform' in domLib.fn)) {
	            domLib.fn.transform = function (transform) {
	                for (var i = 0; i < this.length; i++) {
	                    var elStyle = this[i].style;
	                    elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = transform;
	                }
	                return this;
	            };
	        }
	        if (!('transition' in domLib.fn)) {
	            domLib.fn.transition = function (duration) {
	                if (typeof duration !== 'string') {
	                    duration = duration + 'ms';
	                }
	                for (var i = 0; i < this.length; i++) {
	                    var elStyle = this[i].style;
	                    elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
	                }
	                return this;
	            };
	        }
	    }
	
	    window.Swiper = Swiper;
	})();
	/*===========================
	Swiper AMD Export
	===========================*/
	if (true)
	{
	    module.exports = window.Swiper;
	}
	else if (typeof define === 'function' && define.amd) {
	    define([], function () {
	        'use strict';
	        return window.Swiper;
	    });
	}
	//# sourceMappingURL=maps/swiper.js.map


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// PORTFOLIO
	// ------------------------------------
	
	var imagesload = __webpack_require__( 5 );
	var Isotope = __webpack_require__( 7 );
	
	window.addEventListener( 'load', function () {
	
	    // PORTFOLIO VARIABLES
	    // ------------------------------------
	    var portfolio = document.querySelector( '.portfolio__grid' );
	    var portfolioItem = '.portfolio__item';
	    var portfolioSizer = '.portfolio__sizer';
	    var portfolioControl = document.querySelector( '.portfolio__controls' );
	    var iso;
	
	    // PORTFOLIO LAYOUT
	    // ------------------------------------
	
	    imagesload( portfolio, function () {
	        iso = new Isotope( portfolio, {
	            itemSelector: portfolioItem,
	            percentPosition: true,
	            masonry: {
	                columnWidth: portfolioSizer
	            }
	        });
	    });
	
	    // PORTFOLIO FILTERING
	    // ------------------------------------
	
	    portfolioControl.addEventListener( 'click', function ( event ) {
	        iso.arrange({ filter: event.target.getAttribute( 'data-filter' ) });
	    });
	}, false );


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * imagesLoaded v4.1.0
	 * JavaScript is all like "You images are done yet or what?"
	 * MIT License
	 */
	
	( function( window, factory ) { 'use strict';
	  // universal module definition
	
	  /*global define: false, module: false, require: false */
	
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(6)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( EvEmitter ) {
	      return factory( window, EvEmitter );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('ev-emitter')
	    );
	  } else {
	    // browser global
	    window.imagesLoaded = factory(
	      window,
	      window.EvEmitter
	    );
	  }
	
	})( window,
	
	// --------------------------  factory -------------------------- //
	
	function factory( window, EvEmitter ) {
	
	'use strict';
	
	var $ = window.jQuery;
	var console = window.console;
	
	// -------------------------- helpers -------------------------- //
	
	// extend objects
	function extend( a, b ) {
	  for ( var prop in b ) {
	    a[ prop ] = b[ prop ];
	  }
	  return a;
	}
	
	// turn element or nodeList into an array
	function makeArray( obj ) {
	  var ary = [];
	  if ( Array.isArray( obj ) ) {
	    // use object if already an array
	    ary = obj;
	  } else if ( typeof obj.length == 'number' ) {
	    // convert nodeList to array
	    for ( var i=0; i < obj.length; i++ ) {
	      ary.push( obj[i] );
	    }
	  } else {
	    // array of single index
	    ary.push( obj );
	  }
	  return ary;
	}
	
	// -------------------------- imagesLoaded -------------------------- //
	
	/**
	 * @param {Array, Element, NodeList, String} elem
	 * @param {Object or Function} options - if function, use as callback
	 * @param {Function} onAlways - callback function
	 */
	function ImagesLoaded( elem, options, onAlways ) {
	  // coerce ImagesLoaded() without new, to be new ImagesLoaded()
	  if ( !( this instanceof ImagesLoaded ) ) {
	    return new ImagesLoaded( elem, options, onAlways );
	  }
	  // use elem as selector string
	  if ( typeof elem == 'string' ) {
	    elem = document.querySelectorAll( elem );
	  }
	
	  this.elements = makeArray( elem );
	  this.options = extend( {}, this.options );
	
	  if ( typeof options == 'function' ) {
	    onAlways = options;
	  } else {
	    extend( this.options, options );
	  }
	
	  if ( onAlways ) {
	    this.on( 'always', onAlways );
	  }
	
	  this.getImages();
	
	  if ( $ ) {
	    // add jQuery Deferred object
	    this.jqDeferred = new $.Deferred();
	  }
	
	  // HACK check async to allow time to bind listeners
	  setTimeout( function() {
	    this.check();
	  }.bind( this ));
	}
	
	ImagesLoaded.prototype = Object.create( EvEmitter.prototype );
	
	ImagesLoaded.prototype.options = {};
	
	ImagesLoaded.prototype.getImages = function() {
	  this.images = [];
	
	  // filter & find items if we have an item selector
	  this.elements.forEach( this.addElementImages, this );
	};
	
	/**
	 * @param {Node} element
	 */
	ImagesLoaded.prototype.addElementImages = function( elem ) {
	  // filter siblings
	  if ( elem.nodeName == 'IMG' ) {
	    this.addImage( elem );
	  }
	  // get background image on element
	  if ( this.options.background === true ) {
	    this.addElementBackgroundImages( elem );
	  }
	
	  // find children
	  // no non-element nodes, #143
	  var nodeType = elem.nodeType;
	  if ( !nodeType || !elementNodeTypes[ nodeType ] ) {
	    return;
	  }
	  var childImgs = elem.querySelectorAll('img');
	  // concat childElems to filterFound array
	  for ( var i=0; i < childImgs.length; i++ ) {
	    var img = childImgs[i];
	    this.addImage( img );
	  }
	
	  // get child background images
	  if ( typeof this.options.background == 'string' ) {
	    var children = elem.querySelectorAll( this.options.background );
	    for ( i=0; i < children.length; i++ ) {
	      var child = children[i];
	      this.addElementBackgroundImages( child );
	    }
	  }
	};
	
	var elementNodeTypes = {
	  1: true,
	  9: true,
	  11: true
	};
	
	ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
	  var style = getComputedStyle( elem );
	  if ( !style ) {
	    // Firefox returns null if in a hidden iframe https://bugzil.la/548397
	    return;
	  }
	  // get url inside url("...")
	  var reURL = /url\((['"])?(.*?)\1\)/gi;
	  var matches = reURL.exec( style.backgroundImage );
	  while ( matches !== null ) {
	    var url = matches && matches[2];
	    if ( url ) {
	      this.addBackground( url, elem );
	    }
	    matches = reURL.exec( style.backgroundImage );
	  }
	};
	
	/**
	 * @param {Image} img
	 */
	ImagesLoaded.prototype.addImage = function( img ) {
	  var loadingImage = new LoadingImage( img );
	  this.images.push( loadingImage );
	};
	
	ImagesLoaded.prototype.addBackground = function( url, elem ) {
	  var background = new Background( url, elem );
	  this.images.push( background );
	};
	
	ImagesLoaded.prototype.check = function() {
	  var _this = this;
	  this.progressedCount = 0;
	  this.hasAnyBroken = false;
	  // complete if no images
	  if ( !this.images.length ) {
	    this.complete();
	    return;
	  }
	
	  function onProgress( image, elem, message ) {
	    // HACK - Chrome triggers event before object properties have changed. #83
	    setTimeout( function() {
	      _this.progress( image, elem, message );
	    });
	  }
	
	  this.images.forEach( function( loadingImage ) {
	    loadingImage.once( 'progress', onProgress );
	    loadingImage.check();
	  });
	};
	
	ImagesLoaded.prototype.progress = function( image, elem, message ) {
	  this.progressedCount++;
	  this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
	  // progress event
	  this.emitEvent( 'progress', [ this, image, elem ] );
	  if ( this.jqDeferred && this.jqDeferred.notify ) {
	    this.jqDeferred.notify( this, image );
	  }
	  // check if completed
	  if ( this.progressedCount == this.images.length ) {
	    this.complete();
	  }
	
	  if ( this.options.debug && console ) {
	    console.log( 'progress: ' + message, image, elem );
	  }
	};
	
	ImagesLoaded.prototype.complete = function() {
	  var eventName = this.hasAnyBroken ? 'fail' : 'done';
	  this.isComplete = true;
	  this.emitEvent( eventName, [ this ] );
	  this.emitEvent( 'always', [ this ] );
	  if ( this.jqDeferred ) {
	    var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
	    this.jqDeferred[ jqMethod ]( this );
	  }
	};
	
	// --------------------------  -------------------------- //
	
	function LoadingImage( img ) {
	  this.img = img;
	}
	
	LoadingImage.prototype = Object.create( EvEmitter.prototype );
	
	LoadingImage.prototype.check = function() {
	  // If complete is true and browser supports natural sizes,
	  // try to check for image status manually.
	  var isComplete = this.getIsImageComplete();
	  if ( isComplete ) {
	    // report based on naturalWidth
	    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
	    return;
	  }
	
	  // If none of the checks above matched, simulate loading on detached element.
	  this.proxyImage = new Image();
	  this.proxyImage.addEventListener( 'load', this );
	  this.proxyImage.addEventListener( 'error', this );
	  // bind to image as well for Firefox. #191
	  this.img.addEventListener( 'load', this );
	  this.img.addEventListener( 'error', this );
	  this.proxyImage.src = this.img.src;
	};
	
	LoadingImage.prototype.getIsImageComplete = function() {
	  return this.img.complete && this.img.naturalWidth !== undefined;
	};
	
	LoadingImage.prototype.confirm = function( isLoaded, message ) {
	  this.isLoaded = isLoaded;
	  this.emitEvent( 'progress', [ this, this.img, message ] );
	};
	
	// ----- events ----- //
	
	// trigger specified handler for event type
	LoadingImage.prototype.handleEvent = function( event ) {
	  var method = 'on' + event.type;
	  if ( this[ method ] ) {
	    this[ method ]( event );
	  }
	};
	
	LoadingImage.prototype.onload = function() {
	  this.confirm( true, 'onload' );
	  this.unbindEvents();
	};
	
	LoadingImage.prototype.onerror = function() {
	  this.confirm( false, 'onerror' );
	  this.unbindEvents();
	};
	
	LoadingImage.prototype.unbindEvents = function() {
	  this.proxyImage.removeEventListener( 'load', this );
	  this.proxyImage.removeEventListener( 'error', this );
	  this.img.removeEventListener( 'load', this );
	  this.img.removeEventListener( 'error', this );
	};
	
	// -------------------------- Background -------------------------- //
	
	function Background( url, element ) {
	  this.url = url;
	  this.element = element;
	  this.img = new Image();
	}
	
	// inherit LoadingImage prototype
	Background.prototype = Object.create( LoadingImage.prototype );
	
	Background.prototype.check = function() {
	  this.img.addEventListener( 'load', this );
	  this.img.addEventListener( 'error', this );
	  this.img.src = this.url;
	  // check if image is already complete
	  var isComplete = this.getIsImageComplete();
	  if ( isComplete ) {
	    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
	    this.unbindEvents();
	  }
	};
	
	Background.prototype.unbindEvents = function() {
	  this.img.removeEventListener( 'load', this );
	  this.img.removeEventListener( 'error', this );
	};
	
	Background.prototype.confirm = function( isLoaded, message ) {
	  this.isLoaded = isLoaded;
	  this.emitEvent( 'progress', [ this, this.element, message ] );
	};
	
	// -------------------------- jQuery -------------------------- //
	
	ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
	  jQuery = jQuery || window.jQuery;
	  if ( !jQuery ) {
	    return;
	  }
	  // set local variable
	  $ = jQuery;
	  // $().imagesLoaded()
	  $.fn.imagesLoaded = function( options, callback ) {
	    var instance = new ImagesLoaded( this, options, callback );
	    return instance.jqDeferred.promise( $(this) );
	  };
	};
	// try making plugin
	ImagesLoaded.makeJQueryPlugin();
	
	// --------------------------  -------------------------- //
	
	return ImagesLoaded;
	
	});


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * EvEmitter v1.0.3
	 * Lil' event emitter
	 * MIT License
	 */
	
	/* jshint unused: true, undef: true, strict: true */
	
	( function( global, factory ) {
	  // universal module definition
	  /* jshint strict: false */ /* globals define, module, window */
	  if ( true ) {
	    // AMD - RequireJS
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS - Browserify, Webpack
	    module.exports = factory();
	  } else {
	    // Browser globals
	    global.EvEmitter = factory();
	  }
	
	}( typeof window != 'undefined' ? window : this, function() {
	
	"use strict";
	
	function EvEmitter() {}
	
	var proto = EvEmitter.prototype;
	
	proto.on = function( eventName, listener ) {
	  if ( !eventName || !listener ) {
	    return;
	  }
	  // set events hash
	  var events = this._events = this._events || {};
	  // set listeners array
	  var listeners = events[ eventName ] = events[ eventName ] || [];
	  // only add once
	  if ( listeners.indexOf( listener ) == -1 ) {
	    listeners.push( listener );
	  }
	
	  return this;
	};
	
	proto.once = function( eventName, listener ) {
	  if ( !eventName || !listener ) {
	    return;
	  }
	  // add event
	  this.on( eventName, listener );
	  // set once flag
	  // set onceEvents hash
	  var onceEvents = this._onceEvents = this._onceEvents || {};
	  // set onceListeners object
	  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
	  // set flag
	  onceListeners[ listener ] = true;
	
	  return this;
	};
	
	proto.off = function( eventName, listener ) {
	  var listeners = this._events && this._events[ eventName ];
	  if ( !listeners || !listeners.length ) {
	    return;
	  }
	  var index = listeners.indexOf( listener );
	  if ( index != -1 ) {
	    listeners.splice( index, 1 );
	  }
	
	  return this;
	};
	
	proto.emitEvent = function( eventName, args ) {
	  var listeners = this._events && this._events[ eventName ];
	  if ( !listeners || !listeners.length ) {
	    return;
	  }
	  var i = 0;
	  var listener = listeners[i];
	  args = args || [];
	  // once stuff
	  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];
	
	  while ( listener ) {
	    var isOnce = onceListeners && onceListeners[ listener ];
	    if ( isOnce ) {
	      // remove listener
	      // remove before trigger to prevent recursion
	      this.off( eventName, listener );
	      // unset once flag
	      delete onceListeners[ listener ];
	    }
	    // trigger listener
	    listener.apply( this, args );
	    // get next listener
	    i += isOnce ? 0 : 1;
	    listener = listeners[i];
	  }
	
	  return this;
	};
	
	return EvEmitter;
	
	}));


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * Isotope v3.0.1
	 *
	 * Licensed GPLv3 for open source use
	 * or Isotope Commercial License for commercial use
	 *
	 * http://isotope.metafizzy.co
	 * Copyright 2016 Metafizzy
	 */
	
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */ /*globals define, module, require */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(11),
	        __webpack_require__(8),
	        __webpack_require__(9),
	        __webpack_require__(10),
	        __webpack_require__(18),
	        __webpack_require__(13),
	        // include default layout modes
	        __webpack_require__(14),
	        __webpack_require__(16),
	        __webpack_require__(17)
	      ], __WEBPACK_AMD_DEFINE_RESULT__ = function( Outlayer, getSize, matchesSelector, utils, Item, LayoutMode ) {
	        return factory( window, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode );
	      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('outlayer'),
	      require('get-size'),
	      require('desandro-matches-selector'),
	      require('fizzy-ui-utils'),
	      require('./item'),
	      require('./layout-mode'),
	      // include default layout modes
	      require('./layout-modes/masonry'),
	      require('./layout-modes/fit-rows'),
	      require('./layout-modes/vertical')
	    );
	  } else {
	    // browser global
	    window.Isotope = factory(
	      window,
	      window.Outlayer,
	      window.getSize,
	      window.matchesSelector,
	      window.fizzyUIUtils,
	      window.Isotope.Item,
	      window.Isotope.LayoutMode
	    );
	  }
	
	}( window, function factory( window, Outlayer, getSize, matchesSelector, utils,
	  Item, LayoutMode ) {
	
	'use strict';
	
	// -------------------------- vars -------------------------- //
	
	var jQuery = window.jQuery;
	
	// -------------------------- helpers -------------------------- //
	
	var trim = String.prototype.trim ?
	  function( str ) {
	    return str.trim();
	  } :
	  function( str ) {
	    return str.replace( /^\s+|\s+$/g, '' );
	  };
	
	// -------------------------- isotopeDefinition -------------------------- //
	
	  // create an Outlayer layout class
	  var Isotope = Outlayer.create( 'isotope', {
	    layoutMode: 'masonry',
	    isJQueryFiltering: true,
	    sortAscending: true
	  });
	
	  Isotope.Item = Item;
	  Isotope.LayoutMode = LayoutMode;
	
	  var proto = Isotope.prototype;
	
	  proto._create = function() {
	    this.itemGUID = 0;
	    // functions that sort items
	    this._sorters = {};
	    this._getSorters();
	    // call super
	    Outlayer.prototype._create.call( this );
	
	    // create layout modes
	    this.modes = {};
	    // start filteredItems with all items
	    this.filteredItems = this.items;
	    // keep of track of sortBys
	    this.sortHistory = [ 'original-order' ];
	    // create from registered layout modes
	    for ( var name in LayoutMode.modes ) {
	      this._initLayoutMode( name );
	    }
	  };
	
	  proto.reloadItems = function() {
	    // reset item ID counter
	    this.itemGUID = 0;
	    // call super
	    Outlayer.prototype.reloadItems.call( this );
	  };
	
	  proto._itemize = function() {
	    var items = Outlayer.prototype._itemize.apply( this, arguments );
	    // assign ID for original-order
	    for ( var i=0; i < items.length; i++ ) {
	      var item = items[i];
	      item.id = this.itemGUID++;
	    }
	    this._updateItemsSortData( items );
	    return items;
	  };
	
	
	  // -------------------------- layout -------------------------- //
	
	  proto._initLayoutMode = function( name ) {
	    var Mode = LayoutMode.modes[ name ];
	    // set mode options
	    // HACK extend initial options, back-fill in default options
	    var initialOpts = this.options[ name ] || {};
	    this.options[ name ] = Mode.options ?
	      utils.extend( Mode.options, initialOpts ) : initialOpts;
	    // init layout mode instance
	    this.modes[ name ] = new Mode( this );
	  };
	
	
	  proto.layout = function() {
	    // if first time doing layout, do all magic
	    if ( !this._isLayoutInited && this._getOption('initLayout') ) {
	      this.arrange();
	      return;
	    }
	    this._layout();
	  };
	
	  // private method to be used in layout() & magic()
	  proto._layout = function() {
	    // don't animate first layout
	    var isInstant = this._getIsInstant();
	    // layout flow
	    this._resetLayout();
	    this._manageStamps();
	    this.layoutItems( this.filteredItems, isInstant );
	
	    // flag for initalized
	    this._isLayoutInited = true;
	  };
	
	  // filter + sort + layout
	  proto.arrange = function( opts ) {
	    // set any options pass
	    this.option( opts );
	    this._getIsInstant();
	    // filter, sort, and layout
	
	    // filter
	    var filtered = this._filter( this.items );
	    this.filteredItems = filtered.matches;
	
	    this._bindArrangeComplete();
	
	    if ( this._isInstant ) {
	      this._noTransition( this._hideReveal, [ filtered ] );
	    } else {
	      this._hideReveal( filtered );
	    }
	
	    this._sort();
	    this._layout();
	  };
	  // alias to _init for main plugin method
	  proto._init = proto.arrange;
	
	  proto._hideReveal = function( filtered ) {
	    this.reveal( filtered.needReveal );
	    this.hide( filtered.needHide );
	  };
	
	  // HACK
	  // Don't animate/transition first layout
	  // Or don't animate/transition other layouts
	  proto._getIsInstant = function() {
	    var isLayoutInstant = this._getOption('layoutInstant');
	    var isInstant = isLayoutInstant !== undefined ? isLayoutInstant :
	      !this._isLayoutInited;
	    this._isInstant = isInstant;
	    return isInstant;
	  };
	
	  // listen for layoutComplete, hideComplete and revealComplete
	  // to trigger arrangeComplete
	  proto._bindArrangeComplete = function() {
	    // listen for 3 events to trigger arrangeComplete
	    var isLayoutComplete, isHideComplete, isRevealComplete;
	    var _this = this;
	    function arrangeParallelCallback() {
	      if ( isLayoutComplete && isHideComplete && isRevealComplete ) {
	        _this.dispatchEvent( 'arrangeComplete', null, [ _this.filteredItems ] );
	      }
	    }
	    this.once( 'layoutComplete', function() {
	      isLayoutComplete = true;
	      arrangeParallelCallback();
	    });
	    this.once( 'hideComplete', function() {
	      isHideComplete = true;
	      arrangeParallelCallback();
	    });
	    this.once( 'revealComplete', function() {
	      isRevealComplete = true;
	      arrangeParallelCallback();
	    });
	  };
	
	  // -------------------------- filter -------------------------- //
	
	  proto._filter = function( items ) {
	    var filter = this.options.filter;
	    filter = filter || '*';
	    var matches = [];
	    var hiddenMatched = [];
	    var visibleUnmatched = [];
	
	    var test = this._getFilterTest( filter );
	
	    // test each item
	    for ( var i=0; i < items.length; i++ ) {
	      var item = items[i];
	      if ( item.isIgnored ) {
	        continue;
	      }
	      // add item to either matched or unmatched group
	      var isMatched = test( item );
	      // item.isFilterMatched = isMatched;
	      // add to matches if its a match
	      if ( isMatched ) {
	        matches.push( item );
	      }
	      // add to additional group if item needs to be hidden or revealed
	      if ( isMatched && item.isHidden ) {
	        hiddenMatched.push( item );
	      } else if ( !isMatched && !item.isHidden ) {
	        visibleUnmatched.push( item );
	      }
	    }
	
	    // return collections of items to be manipulated
	    return {
	      matches: matches,
	      needReveal: hiddenMatched,
	      needHide: visibleUnmatched
	    };
	  };
	
	  // get a jQuery, function, or a matchesSelector test given the filter
	  proto._getFilterTest = function( filter ) {
	    if ( jQuery && this.options.isJQueryFiltering ) {
	      // use jQuery
	      return function( item ) {
	        return jQuery( item.element ).is( filter );
	      };
	    }
	    if ( typeof filter == 'function' ) {
	      // use filter as function
	      return function( item ) {
	        return filter( item.element );
	      };
	    }
	    // default, use filter as selector string
	    return function( item ) {
	      return matchesSelector( item.element, filter );
	    };
	  };
	
	  // -------------------------- sorting -------------------------- //
	
	  /**
	   * @params {Array} elems
	   * @public
	   */
	  proto.updateSortData = function( elems ) {
	    // get items
	    var items;
	    if ( elems ) {
	      elems = utils.makeArray( elems );
	      items = this.getItems( elems );
	    } else {
	      // update all items if no elems provided
	      items = this.items;
	    }
	
	    this._getSorters();
	    this._updateItemsSortData( items );
	  };
	
	  proto._getSorters = function() {
	    var getSortData = this.options.getSortData;
	    for ( var key in getSortData ) {
	      var sorter = getSortData[ key ];
	      this._sorters[ key ] = mungeSorter( sorter );
	    }
	  };
	
	  /**
	   * @params {Array} items - of Isotope.Items
	   * @private
	   */
	  proto._updateItemsSortData = function( items ) {
	    // do not update if no items
	    var len = items && items.length;
	
	    for ( var i=0; len && i < len; i++ ) {
	      var item = items[i];
	      item.updateSortData();
	    }
	  };
	
	  // ----- munge sorter ----- //
	
	  // encapsulate this, as we just need mungeSorter
	  // other functions in here are just for munging
	  var mungeSorter = ( function() {
	    // add a magic layer to sorters for convienent shorthands
	    // `.foo-bar` will use the text of .foo-bar querySelector
	    // `[foo-bar]` will use attribute
	    // you can also add parser
	    // `.foo-bar parseInt` will parse that as a number
	    function mungeSorter( sorter ) {
	      // if not a string, return function or whatever it is
	      if ( typeof sorter != 'string' ) {
	        return sorter;
	      }
	      // parse the sorter string
	      var args = trim( sorter ).split(' ');
	      var query = args[0];
	      // check if query looks like [an-attribute]
	      var attrMatch = query.match( /^\[(.+)\]$/ );
	      var attr = attrMatch && attrMatch[1];
	      var getValue = getValueGetter( attr, query );
	      // use second argument as a parser
	      var parser = Isotope.sortDataParsers[ args[1] ];
	      // parse the value, if there was a parser
	      sorter = parser ? function( elem ) {
	        return elem && parser( getValue( elem ) );
	      } :
	      // otherwise just return value
	      function( elem ) {
	        return elem && getValue( elem );
	      };
	
	      return sorter;
	    }
	
	    // get an attribute getter, or get text of the querySelector
	    function getValueGetter( attr, query ) {
	      // if query looks like [foo-bar], get attribute
	      if ( attr ) {
	        return function getAttribute( elem ) {
	          return elem.getAttribute( attr );
	        };
	      }
	
	      // otherwise, assume its a querySelector, and get its text
	      return function getChildText( elem ) {
	        var child = elem.querySelector( query );
	        return child && child.textContent;
	      };
	    }
	
	    return mungeSorter;
	  })();
	
	  // parsers used in getSortData shortcut strings
	  Isotope.sortDataParsers = {
	    'parseInt': function( val ) {
	      return parseInt( val, 10 );
	    },
	    'parseFloat': function( val ) {
	      return parseFloat( val );
	    }
	  };
	
	  // ----- sort method ----- //
	
	  // sort filteredItem order
	  proto._sort = function() {
	    var sortByOpt = this.options.sortBy;
	    if ( !sortByOpt ) {
	      return;
	    }
	    // concat all sortBy and sortHistory
	    var sortBys = [].concat.apply( sortByOpt, this.sortHistory );
	    // sort magic
	    var itemSorter = getItemSorter( sortBys, this.options.sortAscending );
	    this.filteredItems.sort( itemSorter );
	    // keep track of sortBy History
	    if ( sortByOpt != this.sortHistory[0] ) {
	      // add to front, oldest goes in last
	      this.sortHistory.unshift( sortByOpt );
	    }
	  };
	
	  // returns a function used for sorting
	  function getItemSorter( sortBys, sortAsc ) {
	    return function sorter( itemA, itemB ) {
	      // cycle through all sortKeys
	      for ( var i = 0; i < sortBys.length; i++ ) {
	        var sortBy = sortBys[i];
	        var a = itemA.sortData[ sortBy ];
	        var b = itemB.sortData[ sortBy ];
	        if ( a > b || a < b ) {
	          // if sortAsc is an object, use the value given the sortBy key
	          var isAscending = sortAsc[ sortBy ] !== undefined ? sortAsc[ sortBy ] : sortAsc;
	          var direction = isAscending ? 1 : -1;
	          return ( a > b ? 1 : -1 ) * direction;
	        }
	      }
	      return 0;
	    };
	  }
	
	  // -------------------------- methods -------------------------- //
	
	  // get layout mode
	  proto._mode = function() {
	    var layoutMode = this.options.layoutMode;
	    var mode = this.modes[ layoutMode ];
	    if ( !mode ) {
	      // TODO console.error
	      throw new Error( 'No layout mode: ' + layoutMode );
	    }
	    // HACK sync mode's options
	    // any options set after init for layout mode need to be synced
	    mode.options = this.options[ layoutMode ];
	    return mode;
	  };
	
	  proto._resetLayout = function() {
	    // trigger original reset layout
	    Outlayer.prototype._resetLayout.call( this );
	    this._mode()._resetLayout();
	  };
	
	  proto._getItemLayoutPosition = function( item  ) {
	    return this._mode()._getItemLayoutPosition( item );
	  };
	
	  proto._manageStamp = function( stamp ) {
	    this._mode()._manageStamp( stamp );
	  };
	
	  proto._getContainerSize = function() {
	    return this._mode()._getContainerSize();
	  };
	
	  proto.needsResizeLayout = function() {
	    return this._mode().needsResizeLayout();
	  };
	
	  // -------------------------- adding & removing -------------------------- //
	
	  // HEADS UP overwrites default Outlayer appended
	  proto.appended = function( elems ) {
	    var items = this.addItems( elems );
	    if ( !items.length ) {
	      return;
	    }
	    // filter, layout, reveal new items
	    var filteredItems = this._filterRevealAdded( items );
	    // add to filteredItems
	    this.filteredItems = this.filteredItems.concat( filteredItems );
	  };
	
	  // HEADS UP overwrites default Outlayer prepended
	  proto.prepended = function( elems ) {
	    var items = this._itemize( elems );
	    if ( !items.length ) {
	      return;
	    }
	    // start new layout
	    this._resetLayout();
	    this._manageStamps();
	    // filter, layout, reveal new items
	    var filteredItems = this._filterRevealAdded( items );
	    // layout previous items
	    this.layoutItems( this.filteredItems );
	    // add to items and filteredItems
	    this.filteredItems = filteredItems.concat( this.filteredItems );
	    this.items = items.concat( this.items );
	  };
	
	  proto._filterRevealAdded = function( items ) {
	    var filtered = this._filter( items );
	    this.hide( filtered.needHide );
	    // reveal all new items
	    this.reveal( filtered.matches );
	    // layout new items, no transition
	    this.layoutItems( filtered.matches, true );
	    return filtered.matches;
	  };
	
	  /**
	   * Filter, sort, and layout newly-appended item elements
	   * @param {Array or NodeList or Element} elems
	   */
	  proto.insert = function( elems ) {
	    var items = this.addItems( elems );
	    if ( !items.length ) {
	      return;
	    }
	    // append item elements
	    var i, item;
	    var len = items.length;
	    for ( i=0; i < len; i++ ) {
	      item = items[i];
	      this.element.appendChild( item.element );
	    }
	    // filter new stuff
	    var filteredInsertItems = this._filter( items ).matches;
	    // set flag
	    for ( i=0; i < len; i++ ) {
	      items[i].isLayoutInstant = true;
	    }
	    this.arrange();
	    // reset flag
	    for ( i=0; i < len; i++ ) {
	      delete items[i].isLayoutInstant;
	    }
	    this.reveal( filteredInsertItems );
	  };
	
	  var _remove = proto.remove;
	  proto.remove = function( elems ) {
	    elems = utils.makeArray( elems );
	    var removeItems = this.getItems( elems );
	    // do regular thing
	    _remove.call( this, elems );
	    // bail if no items to remove
	    var len = removeItems && removeItems.length;
	    // remove elems from filteredItems
	    for ( var i=0; len && i < len; i++ ) {
	      var item = removeItems[i];
	      // remove item from collection
	      utils.removeFrom( this.filteredItems, item );
	    }
	  };
	
	  proto.shuffle = function() {
	    // update random sortData
	    for ( var i=0; i < this.items.length; i++ ) {
	      var item = this.items[i];
	      item.sortData.random = Math.random();
	    }
	    this.options.sortBy = 'random';
	    this._sort();
	    this._layout();
	  };
	
	  /**
	   * trigger fn without transition
	   * kind of hacky to have this in the first place
	   * @param {Function} fn
	   * @param {Array} args
	   * @returns ret
	   * @private
	   */
	  proto._noTransition = function( fn, args ) {
	    // save transitionDuration before disabling
	    var transitionDuration = this.options.transitionDuration;
	    // disable transition
	    this.options.transitionDuration = 0;
	    // do it
	    var returnValue = fn.apply( this, args );
	    // re-enable transition for reveal
	    this.options.transitionDuration = transitionDuration;
	    return returnValue;
	  };
	
	  // ----- helper methods ----- //
	
	  /**
	   * getter method for getting filtered item elements
	   * @returns {Array} elems - collection of item elements
	   */
	  proto.getFilteredItemElements = function() {
	    return this.filteredItems.map( function( item ) {
	      return item.element;
	    });
	  };
	
	  // -----  ----- //
	
	  return Isotope;
	
	}));


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * getSize v2.0.2
	 * measure size of elements
	 * MIT license
	 */
	
	/*jshint browser: true, strict: true, undef: true, unused: true */
	/*global define: false, module: false, console: false */
	
	( function( window, factory ) {
	  'use strict';
	
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return factory();
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory();
	  } else {
	    // browser global
	    window.getSize = factory();
	  }
	
	})( window, function factory() {
	'use strict';
	
	// -------------------------- helpers -------------------------- //
	
	// get a number from a string, not a percentage
	function getStyleSize( value ) {
	  var num = parseFloat( value );
	  // not a percent like '100%', and a number
	  var isValid = value.indexOf('%') == -1 && !isNaN( num );
	  return isValid && num;
	}
	
	function noop() {}
	
	var logError = typeof console == 'undefined' ? noop :
	  function( message ) {
	    console.error( message );
	  };
	
	// -------------------------- measurements -------------------------- //
	
	var measurements = [
	  'paddingLeft',
	  'paddingRight',
	  'paddingTop',
	  'paddingBottom',
	  'marginLeft',
	  'marginRight',
	  'marginTop',
	  'marginBottom',
	  'borderLeftWidth',
	  'borderRightWidth',
	  'borderTopWidth',
	  'borderBottomWidth'
	];
	
	var measurementsLength = measurements.length;
	
	function getZeroSize() {
	  var size = {
	    width: 0,
	    height: 0,
	    innerWidth: 0,
	    innerHeight: 0,
	    outerWidth: 0,
	    outerHeight: 0
	  };
	  for ( var i=0; i < measurementsLength; i++ ) {
	    var measurement = measurements[i];
	    size[ measurement ] = 0;
	  }
	  return size;
	}
	
	// -------------------------- getStyle -------------------------- //
	
	/**
	 * getStyle, get style of element, check for Firefox bug
	 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
	 */
	function getStyle( elem ) {
	  var style = getComputedStyle( elem );
	  if ( !style ) {
	    logError( 'Style returned ' + style +
	      '. Are you running this code in a hidden iframe on Firefox? ' +
	      'See http://bit.ly/getsizebug1' );
	  }
	  return style;
	}
	
	// -------------------------- setup -------------------------- //
	
	var isSetup = false;
	
	var isBoxSizeOuter;
	
	/**
	 * setup
	 * check isBoxSizerOuter
	 * do on first getSize() rather than on page load for Firefox bug
	 */
	function setup() {
	  // setup once
	  if ( isSetup ) {
	    return;
	  }
	  isSetup = true;
	
	  // -------------------------- box sizing -------------------------- //
	
	  /**
	   * WebKit measures the outer-width on style.width on border-box elems
	   * IE & Firefox<29 measures the inner-width
	   */
	  var div = document.createElement('div');
	  div.style.width = '200px';
	  div.style.padding = '1px 2px 3px 4px';
	  div.style.borderStyle = 'solid';
	  div.style.borderWidth = '1px 2px 3px 4px';
	  div.style.boxSizing = 'border-box';
	
	  var body = document.body || document.documentElement;
	  body.appendChild( div );
	  var style = getStyle( div );
	
	  getSize.isBoxSizeOuter = isBoxSizeOuter = getStyleSize( style.width ) == 200;
	  body.removeChild( div );
	
	}
	
	// -------------------------- getSize -------------------------- //
	
	function getSize( elem ) {
	  setup();
	
	  // use querySeletor if elem is string
	  if ( typeof elem == 'string' ) {
	    elem = document.querySelector( elem );
	  }
	
	  // do not proceed on non-objects
	  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
	    return;
	  }
	
	  var style = getStyle( elem );
	
	  // if hidden, everything is 0
	  if ( style.display == 'none' ) {
	    return getZeroSize();
	  }
	
	  var size = {};
	  size.width = elem.offsetWidth;
	  size.height = elem.offsetHeight;
	
	  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';
	
	  // get all measurements
	  for ( var i=0; i < measurementsLength; i++ ) {
	    var measurement = measurements[i];
	    var value = style[ measurement ];
	    var num = parseFloat( value );
	    // any 'auto', 'medium' value will be 0
	    size[ measurement ] = !isNaN( num ) ? num : 0;
	  }
	
	  var paddingWidth = size.paddingLeft + size.paddingRight;
	  var paddingHeight = size.paddingTop + size.paddingBottom;
	  var marginWidth = size.marginLeft + size.marginRight;
	  var marginHeight = size.marginTop + size.marginBottom;
	  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
	  var borderHeight = size.borderTopWidth + size.borderBottomWidth;
	
	  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
	
	  // overwrite width and height if we can get it from style
	  var styleWidth = getStyleSize( style.width );
	  if ( styleWidth !== false ) {
	    size.width = styleWidth +
	      // add padding and border unless it's already including it
	      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
	  }
	
	  var styleHeight = getStyleSize( style.height );
	  if ( styleHeight !== false ) {
	    size.height = styleHeight +
	      // add padding and border unless it's already including it
	      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
	  }
	
	  size.innerWidth = size.width - ( paddingWidth + borderWidth );
	  size.innerHeight = size.height - ( paddingHeight + borderHeight );
	
	  size.outerWidth = size.width + marginWidth;
	  size.outerHeight = size.height + marginHeight;
	
	  return size;
	}
	
	return getSize;
	
	});


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * matchesSelector v2.0.1
	 * matchesSelector( element, '.selector' )
	 * MIT license
	 */
	
	/*jshint browser: true, strict: true, undef: true, unused: true */
	
	( function( window, factory ) {
	  /*global define: false, module: false */
	  'use strict';
	  // universal module definition
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory();
	  } else {
	    // browser global
	    window.matchesSelector = factory();
	  }
	
	}( window, function factory() {
	  'use strict';
	
	  var matchesMethod = ( function() {
	    var ElemProto = Element.prototype;
	    // check for the standard method name first
	    if ( ElemProto.matches ) {
	      return 'matches';
	    }
	    // check un-prefixed
	    if ( ElemProto.matchesSelector ) {
	      return 'matchesSelector';
	    }
	    // check vendor prefixes
	    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];
	
	    for ( var i=0; i < prefixes.length; i++ ) {
	      var prefix = prefixes[i];
	      var method = prefix + 'MatchesSelector';
	      if ( ElemProto[ method ] ) {
	        return method;
	      }
	    }
	  })();
	
	  return function matchesSelector( elem, selector ) {
	    return elem[ matchesMethod ]( selector );
	  };
	
	}));


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Fizzy UI utils v2.0.2
	 * MIT license
	 */
	
	/*jshint browser: true, undef: true, unused: true, strict: true */
	
	( function( window, factory ) {
	  // universal module definition
	  /*jshint strict: false */ /*globals define, module, require */
	
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(9)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( matchesSelector ) {
	      return factory( window, matchesSelector );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('desandro-matches-selector')
	    );
	  } else {
	    // browser global
	    window.fizzyUIUtils = factory(
	      window,
	      window.matchesSelector
	    );
	  }
	
	}( window, function factory( window, matchesSelector ) {
	
	'use strict';
	
	var utils = {};
	
	// ----- extend ----- //
	
	// extends objects
	utils.extend = function( a, b ) {
	  for ( var prop in b ) {
	    a[ prop ] = b[ prop ];
	  }
	  return a;
	};
	
	// ----- modulo ----- //
	
	utils.modulo = function( num, div ) {
	  return ( ( num % div ) + div ) % div;
	};
	
	// ----- makeArray ----- //
	
	// turn element or nodeList into an array
	utils.makeArray = function( obj ) {
	  var ary = [];
	  if ( Array.isArray( obj ) ) {
	    // use object if already an array
	    ary = obj;
	  } else if ( obj && typeof obj.length == 'number' ) {
	    // convert nodeList to array
	    for ( var i=0; i < obj.length; i++ ) {
	      ary.push( obj[i] );
	    }
	  } else {
	    // array of single index
	    ary.push( obj );
	  }
	  return ary;
	};
	
	// ----- removeFrom ----- //
	
	utils.removeFrom = function( ary, obj ) {
	  var index = ary.indexOf( obj );
	  if ( index != -1 ) {
	    ary.splice( index, 1 );
	  }
	};
	
	// ----- getParent ----- //
	
	utils.getParent = function( elem, selector ) {
	  while ( elem != document.body ) {
	    elem = elem.parentNode;
	    if ( matchesSelector( elem, selector ) ) {
	      return elem;
	    }
	  }
	};
	
	// ----- getQueryElement ----- //
	
	// use element as selector string
	utils.getQueryElement = function( elem ) {
	  if ( typeof elem == 'string' ) {
	    return document.querySelector( elem );
	  }
	  return elem;
	};
	
	// ----- handleEvent ----- //
	
	// enable .ontype to trigger from .addEventListener( elem, 'type' )
	utils.handleEvent = function( event ) {
	  var method = 'on' + event.type;
	  if ( this[ method ] ) {
	    this[ method ]( event );
	  }
	};
	
	// ----- filterFindElements ----- //
	
	utils.filterFindElements = function( elems, selector ) {
	  // make array of elems
	  elems = utils.makeArray( elems );
	  var ffElems = [];
	
	  elems.forEach( function( elem ) {
	    // check that elem is an actual element
	    if ( !( elem instanceof HTMLElement ) ) {
	      return;
	    }
	    // add elem if no selector
	    if ( !selector ) {
	      ffElems.push( elem );
	      return;
	    }
	    // filter & find items if we have a selector
	    // filter
	    if ( matchesSelector( elem, selector ) ) {
	      ffElems.push( elem );
	    }
	    // find children
	    var childElems = elem.querySelectorAll( selector );
	    // concat childElems to filterFound array
	    for ( var i=0; i < childElems.length; i++ ) {
	      ffElems.push( childElems[i] );
	    }
	  });
	
	  return ffElems;
	};
	
	// ----- debounceMethod ----- //
	
	utils.debounceMethod = function( _class, methodName, threshold ) {
	  // original method
	  var method = _class.prototype[ methodName ];
	  var timeoutName = methodName + 'Timeout';
	
	  _class.prototype[ methodName ] = function() {
	    var timeout = this[ timeoutName ];
	    if ( timeout ) {
	      clearTimeout( timeout );
	    }
	    var args = arguments;
	
	    var _this = this;
	    this[ timeoutName ] = setTimeout( function() {
	      method.apply( _this, args );
	      delete _this[ timeoutName ];
	    }, threshold || 100 );
	  };
	};
	
	// ----- docReady ----- //
	
	utils.docReady = function( callback ) {
	  var readyState = document.readyState;
	  if ( readyState == 'complete' || readyState == 'interactive' ) {
	    callback();
	  } else {
	    document.addEventListener( 'DOMContentLoaded', callback );
	  }
	};
	
	// ----- htmlInit ----- //
	
	// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
	utils.toDashed = function( str ) {
	  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
	    return $1 + '-' + $2;
	  }).toLowerCase();
	};
	
	var console = window.console;
	/**
	 * allow user to initialize classes via [data-namespace] or .js-namespace class
	 * htmlInit( Widget, 'widgetName' )
	 * options are parsed from data-namespace-options
	 */
	utils.htmlInit = function( WidgetClass, namespace ) {
	  utils.docReady( function() {
	    var dashedNamespace = utils.toDashed( namespace );
	    var dataAttr = 'data-' + dashedNamespace;
	    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
	    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
	    var elems = utils.makeArray( dataAttrElems )
	      .concat( utils.makeArray( jsDashElems ) );
	    var dataOptionsAttr = dataAttr + '-options';
	    var jQuery = window.jQuery;
	
	    elems.forEach( function( elem ) {
	      var attr = elem.getAttribute( dataAttr ) ||
	        elem.getAttribute( dataOptionsAttr );
	      var options;
	      try {
	        options = attr && JSON.parse( attr );
	      } catch ( error ) {
	        // log error, do not initialize
	        if ( console ) {
	          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
	          ': ' + error );
	        }
	        return;
	      }
	      // initialize
	      var instance = new WidgetClass( elem, options );
	      // make available via $().data('layoutname')
	      if ( jQuery ) {
	        jQuery.data( elem, namespace, instance );
	      }
	    });
	
	  });
	};
	
	// -----  ----- //
	
	return utils;
	
	}));


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * Outlayer v2.1.0
	 * the brains and guts of a layout library
	 * MIT license
	 */
	
	( function( window, factory ) {
	  'use strict';
	  // universal module definition
	  /* jshint strict: false */ /* globals define, module, require */
	  if ( true ) {
	    // AMD - RequireJS
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(6),
	        __webpack_require__(8),
	        __webpack_require__(10),
	        __webpack_require__(12)
	      ], __WEBPACK_AMD_DEFINE_RESULT__ = function( EvEmitter, getSize, utils, Item ) {
	        return factory( window, EvEmitter, getSize, utils, Item);
	      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS - Browserify, Webpack
	    module.exports = factory(
	      window,
	      require('ev-emitter'),
	      require('get-size'),
	      require('fizzy-ui-utils'),
	      require('./item')
	    );
	  } else {
	    // browser global
	    window.Outlayer = factory(
	      window,
	      window.EvEmitter,
	      window.getSize,
	      window.fizzyUIUtils,
	      window.Outlayer.Item
	    );
	  }
	
	}( window, function factory( window, EvEmitter, getSize, utils, Item ) {
	'use strict';
	
	// ----- vars ----- //
	
	var console = window.console;
	var jQuery = window.jQuery;
	var noop = function() {};
	
	// -------------------------- Outlayer -------------------------- //
	
	// globally unique identifiers
	var GUID = 0;
	// internal store of all Outlayer intances
	var instances = {};
	
	
	/**
	 * @param {Element, String} element
	 * @param {Object} options
	 * @constructor
	 */
	function Outlayer( element, options ) {
	  var queryElement = utils.getQueryElement( element );
	  if ( !queryElement ) {
	    if ( console ) {
	      console.error( 'Bad element for ' + this.constructor.namespace +
	        ': ' + ( queryElement || element ) );
	    }
	    return;
	  }
	  this.element = queryElement;
	  // add jQuery
	  if ( jQuery ) {
	    this.$element = jQuery( this.element );
	  }
	
	  // options
	  this.options = utils.extend( {}, this.constructor.defaults );
	  this.option( options );
	
	  // add id for Outlayer.getFromElement
	  var id = ++GUID;
	  this.element.outlayerGUID = id; // expando
	  instances[ id ] = this; // associate via id
	
	  // kick it off
	  this._create();
	
	  var isInitLayout = this._getOption('initLayout');
	  if ( isInitLayout ) {
	    this.layout();
	  }
	}
	
	// settings are for internal use only
	Outlayer.namespace = 'outlayer';
	Outlayer.Item = Item;
	
	// default options
	Outlayer.defaults = {
	  containerStyle: {
	    position: 'relative'
	  },
	  initLayout: true,
	  originLeft: true,
	  originTop: true,
	  resize: true,
	  resizeContainer: true,
	  // item options
	  transitionDuration: '0.4s',
	  hiddenStyle: {
	    opacity: 0,
	    transform: 'scale(0.001)'
	  },
	  visibleStyle: {
	    opacity: 1,
	    transform: 'scale(1)'
	  }
	};
	
	var proto = Outlayer.prototype;
	// inherit EvEmitter
	utils.extend( proto, EvEmitter.prototype );
	
	/**
	 * set options
	 * @param {Object} opts
	 */
	proto.option = function( opts ) {
	  utils.extend( this.options, opts );
	};
	
	/**
	 * get backwards compatible option value, check old name
	 */
	proto._getOption = function( option ) {
	  var oldOption = this.constructor.compatOptions[ option ];
	  return oldOption && this.options[ oldOption ] !== undefined ?
	    this.options[ oldOption ] : this.options[ option ];
	};
	
	Outlayer.compatOptions = {
	  // currentName: oldName
	  initLayout: 'isInitLayout',
	  horizontal: 'isHorizontal',
	  layoutInstant: 'isLayoutInstant',
	  originLeft: 'isOriginLeft',
	  originTop: 'isOriginTop',
	  resize: 'isResizeBound',
	  resizeContainer: 'isResizingContainer'
	};
	
	proto._create = function() {
	  // get items from children
	  this.reloadItems();
	  // elements that affect layout, but are not laid out
	  this.stamps = [];
	  this.stamp( this.options.stamp );
	  // set container style
	  utils.extend( this.element.style, this.options.containerStyle );
	
	  // bind resize method
	  var canBindResize = this._getOption('resize');
	  if ( canBindResize ) {
	    this.bindResize();
	  }
	};
	
	// goes through all children again and gets bricks in proper order
	proto.reloadItems = function() {
	  // collection of item elements
	  this.items = this._itemize( this.element.children );
	};
	
	
	/**
	 * turn elements into Outlayer.Items to be used in layout
	 * @param {Array or NodeList or HTMLElement} elems
	 * @returns {Array} items - collection of new Outlayer Items
	 */
	proto._itemize = function( elems ) {
	
	  var itemElems = this._filterFindItemElements( elems );
	  var Item = this.constructor.Item;
	
	  // create new Outlayer Items for collection
	  var items = [];
	  for ( var i=0; i < itemElems.length; i++ ) {
	    var elem = itemElems[i];
	    var item = new Item( elem, this );
	    items.push( item );
	  }
	
	  return items;
	};
	
	/**
	 * get item elements to be used in layout
	 * @param {Array or NodeList or HTMLElement} elems
	 * @returns {Array} items - item elements
	 */
	proto._filterFindItemElements = function( elems ) {
	  return utils.filterFindElements( elems, this.options.itemSelector );
	};
	
	/**
	 * getter method for getting item elements
	 * @returns {Array} elems - collection of item elements
	 */
	proto.getItemElements = function() {
	  return this.items.map( function( item ) {
	    return item.element;
	  });
	};
	
	// ----- init & layout ----- //
	
	/**
	 * lays out all items
	 */
	proto.layout = function() {
	  this._resetLayout();
	  this._manageStamps();
	
	  // don't animate first layout
	  var layoutInstant = this._getOption('layoutInstant');
	  var isInstant = layoutInstant !== undefined ?
	    layoutInstant : !this._isLayoutInited;
	  this.layoutItems( this.items, isInstant );
	
	  // flag for initalized
	  this._isLayoutInited = true;
	};
	
	// _init is alias for layout
	proto._init = proto.layout;
	
	/**
	 * logic before any new layout
	 */
	proto._resetLayout = function() {
	  this.getSize();
	};
	
	
	proto.getSize = function() {
	  this.size = getSize( this.element );
	};
	
	/**
	 * get measurement from option, for columnWidth, rowHeight, gutter
	 * if option is String -> get element from selector string, & get size of element
	 * if option is Element -> get size of element
	 * else use option as a number
	 *
	 * @param {String} measurement
	 * @param {String} size - width or height
	 * @private
	 */
	proto._getMeasurement = function( measurement, size ) {
	  var option = this.options[ measurement ];
	  var elem;
	  if ( !option ) {
	    // default to 0
	    this[ measurement ] = 0;
	  } else {
	    // use option as an element
	    if ( typeof option == 'string' ) {
	      elem = this.element.querySelector( option );
	    } else if ( option instanceof HTMLElement ) {
	      elem = option;
	    }
	    // use size of element, if element
	    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
	  }
	};
	
	/**
	 * layout a collection of item elements
	 * @api public
	 */
	proto.layoutItems = function( items, isInstant ) {
	  items = this._getItemsForLayout( items );
	
	  this._layoutItems( items, isInstant );
	
	  this._postLayout();
	};
	
	/**
	 * get the items to be laid out
	 * you may want to skip over some items
	 * @param {Array} items
	 * @returns {Array} items
	 */
	proto._getItemsForLayout = function( items ) {
	  return items.filter( function( item ) {
	    return !item.isIgnored;
	  });
	};
	
	/**
	 * layout items
	 * @param {Array} items
	 * @param {Boolean} isInstant
	 */
	proto._layoutItems = function( items, isInstant ) {
	  this._emitCompleteOnItems( 'layout', items );
	
	  if ( !items || !items.length ) {
	    // no items, emit event with empty array
	    return;
	  }
	
	  var queue = [];
	
	  items.forEach( function( item ) {
	    // get x/y object from method
	    var position = this._getItemLayoutPosition( item );
	    // enqueue
	    position.item = item;
	    position.isInstant = isInstant || item.isLayoutInstant;
	    queue.push( position );
	  }, this );
	
	  this._processLayoutQueue( queue );
	};
	
	/**
	 * get item layout position
	 * @param {Outlayer.Item} item
	 * @returns {Object} x and y position
	 */
	proto._getItemLayoutPosition = function( /* item */ ) {
	  return {
	    x: 0,
	    y: 0
	  };
	};
	
	/**
	 * iterate over array and position each item
	 * Reason being - separating this logic prevents 'layout invalidation'
	 * thx @paul_irish
	 * @param {Array} queue
	 */
	proto._processLayoutQueue = function( queue ) {
	  this.updateStagger();
	  queue.forEach( function( obj, i ) {
	    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant, i );
	  }, this );
	};
	
	// set stagger from option in milliseconds number
	proto.updateStagger = function() {
	  var stagger = this.options.stagger;
	  if ( stagger === null || stagger === undefined ) {
	    this.stagger = 0;
	    return;
	  }
	  this.stagger = getMilliseconds( stagger );
	  return this.stagger;
	};
	
	/**
	 * Sets position of item in DOM
	 * @param {Outlayer.Item} item
	 * @param {Number} x - horizontal position
	 * @param {Number} y - vertical position
	 * @param {Boolean} isInstant - disables transitions
	 */
	proto._positionItem = function( item, x, y, isInstant, i ) {
	  if ( isInstant ) {
	    // if not transition, just set CSS
	    item.goTo( x, y );
	  } else {
	    item.stagger( i * this.stagger );
	    item.moveTo( x, y );
	  }
	};
	
	/**
	 * Any logic you want to do after each layout,
	 * i.e. size the container
	 */
	proto._postLayout = function() {
	  this.resizeContainer();
	};
	
	proto.resizeContainer = function() {
	  var isResizingContainer = this._getOption('resizeContainer');
	  if ( !isResizingContainer ) {
	    return;
	  }
	  var size = this._getContainerSize();
	  if ( size ) {
	    this._setContainerMeasure( size.width, true );
	    this._setContainerMeasure( size.height, false );
	  }
	};
	
	/**
	 * Sets width or height of container if returned
	 * @returns {Object} size
	 *   @param {Number} width
	 *   @param {Number} height
	 */
	proto._getContainerSize = noop;
	
	/**
	 * @param {Number} measure - size of width or height
	 * @param {Boolean} isWidth
	 */
	proto._setContainerMeasure = function( measure, isWidth ) {
	  if ( measure === undefined ) {
	    return;
	  }
	
	  var elemSize = this.size;
	  // add padding and border width if border box
	  if ( elemSize.isBorderBox ) {
	    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
	      elemSize.borderLeftWidth + elemSize.borderRightWidth :
	      elemSize.paddingBottom + elemSize.paddingTop +
	      elemSize.borderTopWidth + elemSize.borderBottomWidth;
	  }
	
	  measure = Math.max( measure, 0 );
	  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
	};
	
	/**
	 * emit eventComplete on a collection of items events
	 * @param {String} eventName
	 * @param {Array} items - Outlayer.Items
	 */
	proto._emitCompleteOnItems = function( eventName, items ) {
	  var _this = this;
	  function onComplete() {
	    _this.dispatchEvent( eventName + 'Complete', null, [ items ] );
	  }
	
	  var count = items.length;
	  if ( !items || !count ) {
	    onComplete();
	    return;
	  }
	
	  var doneCount = 0;
	  function tick() {
	    doneCount++;
	    if ( doneCount == count ) {
	      onComplete();
	    }
	  }
	
	  // bind callback
	  items.forEach( function( item ) {
	    item.once( eventName, tick );
	  });
	};
	
	/**
	 * emits events via EvEmitter and jQuery events
	 * @param {String} type - name of event
	 * @param {Event} event - original event
	 * @param {Array} args - extra arguments
	 */
	proto.dispatchEvent = function( type, event, args ) {
	  // add original event to arguments
	  var emitArgs = event ? [ event ].concat( args ) : args;
	  this.emitEvent( type, emitArgs );
	
	  if ( jQuery ) {
	    // set this.$element
	    this.$element = this.$element || jQuery( this.element );
	    if ( event ) {
	      // create jQuery event
	      var $event = jQuery.Event( event );
	      $event.type = type;
	      this.$element.trigger( $event, args );
	    } else {
	      // just trigger with type if no event available
	      this.$element.trigger( type, args );
	    }
	  }
	};
	
	// -------------------------- ignore & stamps -------------------------- //
	
	
	/**
	 * keep item in collection, but do not lay it out
	 * ignored items do not get skipped in layout
	 * @param {Element} elem
	 */
	proto.ignore = function( elem ) {
	  var item = this.getItem( elem );
	  if ( item ) {
	    item.isIgnored = true;
	  }
	};
	
	/**
	 * return item to layout collection
	 * @param {Element} elem
	 */
	proto.unignore = function( elem ) {
	  var item = this.getItem( elem );
	  if ( item ) {
	    delete item.isIgnored;
	  }
	};
	
	/**
	 * adds elements to stamps
	 * @param {NodeList, Array, Element, or String} elems
	 */
	proto.stamp = function( elems ) {
	  elems = this._find( elems );
	  if ( !elems ) {
	    return;
	  }
	
	  this.stamps = this.stamps.concat( elems );
	  // ignore
	  elems.forEach( this.ignore, this );
	};
	
	/**
	 * removes elements to stamps
	 * @param {NodeList, Array, or Element} elems
	 */
	proto.unstamp = function( elems ) {
	  elems = this._find( elems );
	  if ( !elems ){
	    return;
	  }
	
	  elems.forEach( function( elem ) {
	    // filter out removed stamp elements
	    utils.removeFrom( this.stamps, elem );
	    this.unignore( elem );
	  }, this );
	};
	
	/**
	 * finds child elements
	 * @param {NodeList, Array, Element, or String} elems
	 * @returns {Array} elems
	 */
	proto._find = function( elems ) {
	  if ( !elems ) {
	    return;
	  }
	  // if string, use argument as selector string
	  if ( typeof elems == 'string' ) {
	    elems = this.element.querySelectorAll( elems );
	  }
	  elems = utils.makeArray( elems );
	  return elems;
	};
	
	proto._manageStamps = function() {
	  if ( !this.stamps || !this.stamps.length ) {
	    return;
	  }
	
	  this._getBoundingRect();
	
	  this.stamps.forEach( this._manageStamp, this );
	};
	
	// update boundingLeft / Top
	proto._getBoundingRect = function() {
	  // get bounding rect for container element
	  var boundingRect = this.element.getBoundingClientRect();
	  var size = this.size;
	  this._boundingRect = {
	    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
	    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
	    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
	    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
	  };
	};
	
	/**
	 * @param {Element} stamp
	**/
	proto._manageStamp = noop;
	
	/**
	 * get x/y position of element relative to container element
	 * @param {Element} elem
	 * @returns {Object} offset - has left, top, right, bottom
	 */
	proto._getElementOffset = function( elem ) {
	  var boundingRect = elem.getBoundingClientRect();
	  var thisRect = this._boundingRect;
	  var size = getSize( elem );
	  var offset = {
	    left: boundingRect.left - thisRect.left - size.marginLeft,
	    top: boundingRect.top - thisRect.top - size.marginTop,
	    right: thisRect.right - boundingRect.right - size.marginRight,
	    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
	  };
	  return offset;
	};
	
	// -------------------------- resize -------------------------- //
	
	// enable event handlers for listeners
	// i.e. resize -> onresize
	proto.handleEvent = utils.handleEvent;
	
	/**
	 * Bind layout to window resizing
	 */
	proto.bindResize = function() {
	  window.addEventListener( 'resize', this );
	  this.isResizeBound = true;
	};
	
	/**
	 * Unbind layout to window resizing
	 */
	proto.unbindResize = function() {
	  window.removeEventListener( 'resize', this );
	  this.isResizeBound = false;
	};
	
	proto.onresize = function() {
	  this.resize();
	};
	
	utils.debounceMethod( Outlayer, 'onresize', 100 );
	
	proto.resize = function() {
	  // don't trigger if size did not change
	  // or if resize was unbound. See #9
	  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
	    return;
	  }
	
	  this.layout();
	};
	
	/**
	 * check if layout is needed post layout
	 * @returns Boolean
	 */
	proto.needsResizeLayout = function() {
	  var size = getSize( this.element );
	  // check that this.size and size are there
	  // IE8 triggers resize on body size change, so they might not be
	  var hasSizes = this.size && size;
	  return hasSizes && size.innerWidth !== this.size.innerWidth;
	};
	
	// -------------------------- methods -------------------------- //
	
	/**
	 * add items to Outlayer instance
	 * @param {Array or NodeList or Element} elems
	 * @returns {Array} items - Outlayer.Items
	**/
	proto.addItems = function( elems ) {
	  var items = this._itemize( elems );
	  // add items to collection
	  if ( items.length ) {
	    this.items = this.items.concat( items );
	  }
	  return items;
	};
	
	/**
	 * Layout newly-appended item elements
	 * @param {Array or NodeList or Element} elems
	 */
	proto.appended = function( elems ) {
	  var items = this.addItems( elems );
	  if ( !items.length ) {
	    return;
	  }
	  // layout and reveal just the new items
	  this.layoutItems( items, true );
	  this.reveal( items );
	};
	
	/**
	 * Layout prepended elements
	 * @param {Array or NodeList or Element} elems
	 */
	proto.prepended = function( elems ) {
	  var items = this._itemize( elems );
	  if ( !items.length ) {
	    return;
	  }
	  // add items to beginning of collection
	  var previousItems = this.items.slice(0);
	  this.items = items.concat( previousItems );
	  // start new layout
	  this._resetLayout();
	  this._manageStamps();
	  // layout new stuff without transition
	  this.layoutItems( items, true );
	  this.reveal( items );
	  // layout previous items
	  this.layoutItems( previousItems );
	};
	
	/**
	 * reveal a collection of items
	 * @param {Array of Outlayer.Items} items
	 */
	proto.reveal = function( items ) {
	  this._emitCompleteOnItems( 'reveal', items );
	  if ( !items || !items.length ) {
	    return;
	  }
	  var stagger = this.updateStagger();
	  items.forEach( function( item, i ) {
	    item.stagger( i * stagger );
	    item.reveal();
	  });
	};
	
	/**
	 * hide a collection of items
	 * @param {Array of Outlayer.Items} items
	 */
	proto.hide = function( items ) {
	  this._emitCompleteOnItems( 'hide', items );
	  if ( !items || !items.length ) {
	    return;
	  }
	  var stagger = this.updateStagger();
	  items.forEach( function( item, i ) {
	    item.stagger( i * stagger );
	    item.hide();
	  });
	};
	
	/**
	 * reveal item elements
	 * @param {Array}, {Element}, {NodeList} items
	 */
	proto.revealItemElements = function( elems ) {
	  var items = this.getItems( elems );
	  this.reveal( items );
	};
	
	/**
	 * hide item elements
	 * @param {Array}, {Element}, {NodeList} items
	 */
	proto.hideItemElements = function( elems ) {
	  var items = this.getItems( elems );
	  this.hide( items );
	};
	
	/**
	 * get Outlayer.Item, given an Element
	 * @param {Element} elem
	 * @param {Function} callback
	 * @returns {Outlayer.Item} item
	 */
	proto.getItem = function( elem ) {
	  // loop through items to get the one that matches
	  for ( var i=0; i < this.items.length; i++ ) {
	    var item = this.items[i];
	    if ( item.element == elem ) {
	      // return item
	      return item;
	    }
	  }
	};
	
	/**
	 * get collection of Outlayer.Items, given Elements
	 * @param {Array} elems
	 * @returns {Array} items - Outlayer.Items
	 */
	proto.getItems = function( elems ) {
	  elems = utils.makeArray( elems );
	  var items = [];
	  elems.forEach( function( elem ) {
	    var item = this.getItem( elem );
	    if ( item ) {
	      items.push( item );
	    }
	  }, this );
	
	  return items;
	};
	
	/**
	 * remove element(s) from instance and DOM
	 * @param {Array or NodeList or Element} elems
	 */
	proto.remove = function( elems ) {
	  var removeItems = this.getItems( elems );
	
	  this._emitCompleteOnItems( 'remove', removeItems );
	
	  // bail if no items to remove
	  if ( !removeItems || !removeItems.length ) {
	    return;
	  }
	
	  removeItems.forEach( function( item ) {
	    item.remove();
	    // remove item from collection
	    utils.removeFrom( this.items, item );
	  }, this );
	};
	
	// ----- destroy ----- //
	
	// remove and disable Outlayer instance
	proto.destroy = function() {
	  // clean up dynamic styles
	  var style = this.element.style;
	  style.height = '';
	  style.position = '';
	  style.width = '';
	  // destroy items
	  this.items.forEach( function( item ) {
	    item.destroy();
	  });
	
	  this.unbindResize();
	
	  var id = this.element.outlayerGUID;
	  delete instances[ id ]; // remove reference to instance by id
	  delete this.element.outlayerGUID;
	  // remove data for jQuery
	  if ( jQuery ) {
	    jQuery.removeData( this.element, this.constructor.namespace );
	  }
	
	};
	
	// -------------------------- data -------------------------- //
	
	/**
	 * get Outlayer instance from element
	 * @param {Element} elem
	 * @returns {Outlayer}
	 */
	Outlayer.data = function( elem ) {
	  elem = utils.getQueryElement( elem );
	  var id = elem && elem.outlayerGUID;
	  return id && instances[ id ];
	};
	
	
	// -------------------------- create Outlayer class -------------------------- //
	
	/**
	 * create a layout class
	 * @param {String} namespace
	 */
	Outlayer.create = function( namespace, options ) {
	  // sub-class Outlayer
	  var Layout = subclass( Outlayer );
	  // apply new options and compatOptions
	  Layout.defaults = utils.extend( {}, Outlayer.defaults );
	  utils.extend( Layout.defaults, options );
	  Layout.compatOptions = utils.extend( {}, Outlayer.compatOptions  );
	
	  Layout.namespace = namespace;
	
	  Layout.data = Outlayer.data;
	
	  // sub-class Item
	  Layout.Item = subclass( Item );
	
	  // -------------------------- declarative -------------------------- //
	
	  utils.htmlInit( Layout, namespace );
	
	  // -------------------------- jQuery bridge -------------------------- //
	
	  // make into jQuery plugin
	  if ( jQuery && jQuery.bridget ) {
	    jQuery.bridget( namespace, Layout );
	  }
	
	  return Layout;
	};
	
	function subclass( Parent ) {
	  function SubClass() {
	    Parent.apply( this, arguments );
	  }
	
	  SubClass.prototype = Object.create( Parent.prototype );
	  SubClass.prototype.constructor = SubClass;
	
	  return SubClass;
	}
	
	// ----- helpers ----- //
	
	// how many milliseconds are in each unit
	var msUnits = {
	  ms: 1,
	  s: 1000
	};
	
	// munge time-like parameter into millisecond number
	// '0.4s' -> 40
	function getMilliseconds( time ) {
	  if ( typeof time == 'number' ) {
	    return time;
	  }
	  var matches = time.match( /(^\d*\.?\d*)(\w*)/ );
	  var num = matches && matches[1];
	  var unit = matches && matches[2];
	  if ( !num.length ) {
	    return 0;
	  }
	  num = parseFloat( num );
	  var mult = msUnits[ unit ] || 1;
	  return num * mult;
	}
	
	// ----- fin ----- //
	
	// back in global
	Outlayer.Item = Item;
	
	return Outlayer;
	
	}));


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Outlayer Item
	 */
	
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */ /* globals define, module, require */
	  if ( true ) {
	    // AMD - RequireJS
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(6),
	        __webpack_require__(8)
	      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS - Browserify, Webpack
	    module.exports = factory(
	      require('ev-emitter'),
	      require('get-size')
	    );
	  } else {
	    // browser global
	    window.Outlayer = {};
	    window.Outlayer.Item = factory(
	      window.EvEmitter,
	      window.getSize
	    );
	  }
	
	}( window, function factory( EvEmitter, getSize ) {
	'use strict';
	
	// ----- helpers ----- //
	
	function isEmptyObj( obj ) {
	  for ( var prop in obj ) {
	    return false;
	  }
	  prop = null;
	  return true;
	}
	
	// -------------------------- CSS3 support -------------------------- //
	
	
	var docElemStyle = document.documentElement.style;
	
	var transitionProperty = typeof docElemStyle.transition == 'string' ?
	  'transition' : 'WebkitTransition';
	var transformProperty = typeof docElemStyle.transform == 'string' ?
	  'transform' : 'WebkitTransform';
	
	var transitionEndEvent = {
	  WebkitTransition: 'webkitTransitionEnd',
	  transition: 'transitionend'
	}[ transitionProperty ];
	
	// cache all vendor properties that could have vendor prefix
	var vendorProperties = {
	  transform: transformProperty,
	  transition: transitionProperty,
	  transitionDuration: transitionProperty + 'Duration',
	  transitionProperty: transitionProperty + 'Property',
	  transitionDelay: transitionProperty + 'Delay'
	};
	
	// -------------------------- Item -------------------------- //
	
	function Item( element, layout ) {
	  if ( !element ) {
	    return;
	  }
	
	  this.element = element;
	  // parent layout class, i.e. Masonry, Isotope, or Packery
	  this.layout = layout;
	  this.position = {
	    x: 0,
	    y: 0
	  };
	
	  this._create();
	}
	
	// inherit EvEmitter
	var proto = Item.prototype = Object.create( EvEmitter.prototype );
	proto.constructor = Item;
	
	proto._create = function() {
	  // transition objects
	  this._transn = {
	    ingProperties: {},
	    clean: {},
	    onEnd: {}
	  };
	
	  this.css({
	    position: 'absolute'
	  });
	};
	
	// trigger specified handler for event type
	proto.handleEvent = function( event ) {
	  var method = 'on' + event.type;
	  if ( this[ method ] ) {
	    this[ method ]( event );
	  }
	};
	
	proto.getSize = function() {
	  this.size = getSize( this.element );
	};
	
	/**
	 * apply CSS styles to element
	 * @param {Object} style
	 */
	proto.css = function( style ) {
	  var elemStyle = this.element.style;
	
	  for ( var prop in style ) {
	    // use vendor property if available
	    var supportedProp = vendorProperties[ prop ] || prop;
	    elemStyle[ supportedProp ] = style[ prop ];
	  }
	};
	
	 // measure position, and sets it
	proto.getPosition = function() {
	  var style = getComputedStyle( this.element );
	  var isOriginLeft = this.layout._getOption('originLeft');
	  var isOriginTop = this.layout._getOption('originTop');
	  var xValue = style[ isOriginLeft ? 'left' : 'right' ];
	  var yValue = style[ isOriginTop ? 'top' : 'bottom' ];
	  // convert percent to pixels
	  var layoutSize = this.layout.size;
	  var x = xValue.indexOf('%') != -1 ?
	    ( parseFloat( xValue ) / 100 ) * layoutSize.width : parseInt( xValue, 10 );
	  var y = yValue.indexOf('%') != -1 ?
	    ( parseFloat( yValue ) / 100 ) * layoutSize.height : parseInt( yValue, 10 );
	
	  // clean up 'auto' or other non-integer values
	  x = isNaN( x ) ? 0 : x;
	  y = isNaN( y ) ? 0 : y;
	  // remove padding from measurement
	  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
	  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;
	
	  this.position.x = x;
	  this.position.y = y;
	};
	
	// set settled position, apply padding
	proto.layoutPosition = function() {
	  var layoutSize = this.layout.size;
	  var style = {};
	  var isOriginLeft = this.layout._getOption('originLeft');
	  var isOriginTop = this.layout._getOption('originTop');
	
	  // x
	  var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
	  var xProperty = isOriginLeft ? 'left' : 'right';
	  var xResetProperty = isOriginLeft ? 'right' : 'left';
	
	  var x = this.position.x + layoutSize[ xPadding ];
	  // set in percentage or pixels
	  style[ xProperty ] = this.getXValue( x );
	  // reset other property
	  style[ xResetProperty ] = '';
	
	  // y
	  var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
	  var yProperty = isOriginTop ? 'top' : 'bottom';
	  var yResetProperty = isOriginTop ? 'bottom' : 'top';
	
	  var y = this.position.y + layoutSize[ yPadding ];
	  // set in percentage or pixels
	  style[ yProperty ] = this.getYValue( y );
	  // reset other property
	  style[ yResetProperty ] = '';
	
	  this.css( style );
	  this.emitEvent( 'layout', [ this ] );
	};
	
	proto.getXValue = function( x ) {
	  var isHorizontal = this.layout._getOption('horizontal');
	  return this.layout.options.percentPosition && !isHorizontal ?
	    ( ( x / this.layout.size.width ) * 100 ) + '%' : x + 'px';
	};
	
	proto.getYValue = function( y ) {
	  var isHorizontal = this.layout._getOption('horizontal');
	  return this.layout.options.percentPosition && isHorizontal ?
	    ( ( y / this.layout.size.height ) * 100 ) + '%' : y + 'px';
	};
	
	proto._transitionTo = function( x, y ) {
	  this.getPosition();
	  // get current x & y from top/left
	  var curX = this.position.x;
	  var curY = this.position.y;
	
	  var compareX = parseInt( x, 10 );
	  var compareY = parseInt( y, 10 );
	  var didNotMove = compareX === this.position.x && compareY === this.position.y;
	
	  // save end position
	  this.setPosition( x, y );
	
	  // if did not move and not transitioning, just go to layout
	  if ( didNotMove && !this.isTransitioning ) {
	    this.layoutPosition();
	    return;
	  }
	
	  var transX = x - curX;
	  var transY = y - curY;
	  var transitionStyle = {};
	  transitionStyle.transform = this.getTranslate( transX, transY );
	
	  this.transition({
	    to: transitionStyle,
	    onTransitionEnd: {
	      transform: this.layoutPosition
	    },
	    isCleaning: true
	  });
	};
	
	proto.getTranslate = function( x, y ) {
	  // flip cooridinates if origin on right or bottom
	  var isOriginLeft = this.layout._getOption('originLeft');
	  var isOriginTop = this.layout._getOption('originTop');
	  x = isOriginLeft ? x : -x;
	  y = isOriginTop ? y : -y;
	  return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
	};
	
	// non transition + transform support
	proto.goTo = function( x, y ) {
	  this.setPosition( x, y );
	  this.layoutPosition();
	};
	
	proto.moveTo = proto._transitionTo;
	
	proto.setPosition = function( x, y ) {
	  this.position.x = parseInt( x, 10 );
	  this.position.y = parseInt( y, 10 );
	};
	
	// ----- transition ----- //
	
	/**
	 * @param {Object} style - CSS
	 * @param {Function} onTransitionEnd
	 */
	
	// non transition, just trigger callback
	proto._nonTransition = function( args ) {
	  this.css( args.to );
	  if ( args.isCleaning ) {
	    this._removeStyles( args.to );
	  }
	  for ( var prop in args.onTransitionEnd ) {
	    args.onTransitionEnd[ prop ].call( this );
	  }
	};
	
	/**
	 * proper transition
	 * @param {Object} args - arguments
	 *   @param {Object} to - style to transition to
	 *   @param {Object} from - style to start transition from
	 *   @param {Boolean} isCleaning - removes transition styles after transition
	 *   @param {Function} onTransitionEnd - callback
	 */
	proto.transition = function( args ) {
	  // redirect to nonTransition if no transition duration
	  if ( !parseFloat( this.layout.options.transitionDuration ) ) {
	    this._nonTransition( args );
	    return;
	  }
	
	  var _transition = this._transn;
	  // keep track of onTransitionEnd callback by css property
	  for ( var prop in args.onTransitionEnd ) {
	    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
	  }
	  // keep track of properties that are transitioning
	  for ( prop in args.to ) {
	    _transition.ingProperties[ prop ] = true;
	    // keep track of properties to clean up when transition is done
	    if ( args.isCleaning ) {
	      _transition.clean[ prop ] = true;
	    }
	  }
	
	  // set from styles
	  if ( args.from ) {
	    this.css( args.from );
	    // force redraw. http://blog.alexmaccaw.com/css-transitions
	    var h = this.element.offsetHeight;
	    // hack for JSHint to hush about unused var
	    h = null;
	  }
	  // enable transition
	  this.enableTransition( args.to );
	  // set styles that are transitioning
	  this.css( args.to );
	
	  this.isTransitioning = true;
	
	};
	
	// dash before all cap letters, including first for
	// WebkitTransform => -webkit-transform
	function toDashedAll( str ) {
	  return str.replace( /([A-Z])/g, function( $1 ) {
	    return '-' + $1.toLowerCase();
	  });
	}
	
	var transitionProps = 'opacity,' + toDashedAll( transformProperty );
	
	proto.enableTransition = function(/* style */) {
	  // HACK changing transitionProperty during a transition
	  // will cause transition to jump
	  if ( this.isTransitioning ) {
	    return;
	  }
	
	  // make `transition: foo, bar, baz` from style object
	  // HACK un-comment this when enableTransition can work
	  // while a transition is happening
	  // var transitionValues = [];
	  // for ( var prop in style ) {
	  //   // dash-ify camelCased properties like WebkitTransition
	  //   prop = vendorProperties[ prop ] || prop;
	  //   transitionValues.push( toDashedAll( prop ) );
	  // }
	  // munge number to millisecond, to match stagger
	  var duration = this.layout.options.transitionDuration;
	  duration = typeof duration == 'number' ? duration + 'ms' : duration;
	  // enable transition styles
	  this.css({
	    transitionProperty: transitionProps,
	    transitionDuration: duration,
	    transitionDelay: this.staggerDelay || 0
	  });
	  // listen for transition end event
	  this.element.addEventListener( transitionEndEvent, this, false );
	};
	
	// ----- events ----- //
	
	proto.onwebkitTransitionEnd = function( event ) {
	  this.ontransitionend( event );
	};
	
	proto.onotransitionend = function( event ) {
	  this.ontransitionend( event );
	};
	
	// properties that I munge to make my life easier
	var dashedVendorProperties = {
	  '-webkit-transform': 'transform'
	};
	
	proto.ontransitionend = function( event ) {
	  // disregard bubbled events from children
	  if ( event.target !== this.element ) {
	    return;
	  }
	  var _transition = this._transn;
	  // get property name of transitioned property, convert to prefix-free
	  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;
	
	  // remove property that has completed transitioning
	  delete _transition.ingProperties[ propertyName ];
	  // check if any properties are still transitioning
	  if ( isEmptyObj( _transition.ingProperties ) ) {
	    // all properties have completed transitioning
	    this.disableTransition();
	  }
	  // clean style
	  if ( propertyName in _transition.clean ) {
	    // clean up style
	    this.element.style[ event.propertyName ] = '';
	    delete _transition.clean[ propertyName ];
	  }
	  // trigger onTransitionEnd callback
	  if ( propertyName in _transition.onEnd ) {
	    var onTransitionEnd = _transition.onEnd[ propertyName ];
	    onTransitionEnd.call( this );
	    delete _transition.onEnd[ propertyName ];
	  }
	
	  this.emitEvent( 'transitionEnd', [ this ] );
	};
	
	proto.disableTransition = function() {
	  this.removeTransitionStyles();
	  this.element.removeEventListener( transitionEndEvent, this, false );
	  this.isTransitioning = false;
	};
	
	/**
	 * removes style property from element
	 * @param {Object} style
	**/
	proto._removeStyles = function( style ) {
	  // clean up transition styles
	  var cleanStyle = {};
	  for ( var prop in style ) {
	    cleanStyle[ prop ] = '';
	  }
	  this.css( cleanStyle );
	};
	
	var cleanTransitionStyle = {
	  transitionProperty: '',
	  transitionDuration: '',
	  transitionDelay: ''
	};
	
	proto.removeTransitionStyles = function() {
	  // remove transition
	  this.css( cleanTransitionStyle );
	};
	
	// ----- stagger ----- //
	
	proto.stagger = function( delay ) {
	  delay = isNaN( delay ) ? 0 : delay;
	  this.staggerDelay = delay + 'ms';
	};
	
	// ----- show/hide/remove ----- //
	
	// remove element from DOM
	proto.removeElem = function() {
	  this.element.parentNode.removeChild( this.element );
	  // remove display: none
	  this.css({ display: '' });
	  this.emitEvent( 'remove', [ this ] );
	};
	
	proto.remove = function() {
	  // just remove element if no transition support or no transition
	  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
	    this.removeElem();
	    return;
	  }
	
	  // start transition
	  this.once( 'transitionEnd', function() {
	    this.removeElem();
	  });
	  this.hide();
	};
	
	proto.reveal = function() {
	  delete this.isHidden;
	  // remove display: none
	  this.css({ display: '' });
	
	  var options = this.layout.options;
	
	  var onTransitionEnd = {};
	  var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
	  onTransitionEnd[ transitionEndProperty ] = this.onRevealTransitionEnd;
	
	  this.transition({
	    from: options.hiddenStyle,
	    to: options.visibleStyle,
	    isCleaning: true,
	    onTransitionEnd: onTransitionEnd
	  });
	};
	
	proto.onRevealTransitionEnd = function() {
	  // check if still visible
	  // during transition, item may have been hidden
	  if ( !this.isHidden ) {
	    this.emitEvent('reveal');
	  }
	};
	
	/**
	 * get style property use for hide/reveal transition end
	 * @param {String} styleProperty - hiddenStyle/visibleStyle
	 * @returns {String}
	 */
	proto.getHideRevealTransitionEndProperty = function( styleProperty ) {
	  var optionStyle = this.layout.options[ styleProperty ];
	  // use opacity
	  if ( optionStyle.opacity ) {
	    return 'opacity';
	  }
	  // get first property
	  for ( var prop in optionStyle ) {
	    return prop;
	  }
	};
	
	proto.hide = function() {
	  // set flag
	  this.isHidden = true;
	  // remove display: none
	  this.css({ display: '' });
	
	  var options = this.layout.options;
	
	  var onTransitionEnd = {};
	  var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
	  onTransitionEnd[ transitionEndProperty ] = this.onHideTransitionEnd;
	
	  this.transition({
	    from: options.visibleStyle,
	    to: options.hiddenStyle,
	    // keep hidden stuff hidden
	    isCleaning: true,
	    onTransitionEnd: onTransitionEnd
	  });
	};
	
	proto.onHideTransitionEnd = function() {
	  // check if still hidden
	  // during transition, item may have been un-hidden
	  if ( this.isHidden ) {
	    this.css({ display: 'none' });
	    this.emitEvent('hide');
	  }
	};
	
	proto.destroy = function() {
	  this.css({
	    position: '',
	    left: '',
	    right: '',
	    top: '',
	    bottom: '',
	    transition: '',
	    transform: ''
	  });
	};
	
	return Item;
	
	}));


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Isotope LayoutMode
	 */
	
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */ /*globals define, module, require */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(8),
	        __webpack_require__(11)
	      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      require('get-size'),
	      require('outlayer')
	    );
	  } else {
	    // browser global
	    window.Isotope = window.Isotope || {};
	    window.Isotope.LayoutMode = factory(
	      window.getSize,
	      window.Outlayer
	    );
	  }
	
	}( window, function factory( getSize, Outlayer ) {
	  'use strict';
	
	  // layout mode class
	  function LayoutMode( isotope ) {
	    this.isotope = isotope;
	    // link properties
	    if ( isotope ) {
	      this.options = isotope.options[ this.namespace ];
	      this.element = isotope.element;
	      this.items = isotope.filteredItems;
	      this.size = isotope.size;
	    }
	  }
	
	  var proto = LayoutMode.prototype;
	
	  /**
	   * some methods should just defer to default Outlayer method
	   * and reference the Isotope instance as `this`
	  **/
	  var facadeMethods = [
	    '_resetLayout',
	    '_getItemLayoutPosition',
	    '_manageStamp',
	    '_getContainerSize',
	    '_getElementOffset',
	    'needsResizeLayout',
	    '_getOption'
	  ];
	
	  facadeMethods.forEach( function( methodName ) {
	    proto[ methodName ] = function() {
	      return Outlayer.prototype[ methodName ].apply( this.isotope, arguments );
	    };
	  });
	
	  // -----  ----- //
	
	  // for horizontal layout modes, check vertical size
	  proto.needsVerticalResizeLayout = function() {
	    // don't trigger if size did not change
	    var size = getSize( this.isotope.element );
	    // check that this.size and size are there
	    // IE8 triggers resize on body size change, so they might not be
	    var hasSizes = this.isotope.size && size;
	    return hasSizes && size.innerHeight != this.isotope.size.innerHeight;
	  };
	
	  // ----- measurements ----- //
	
	  proto._getMeasurement = function() {
	    this.isotope._getMeasurement.apply( this, arguments );
	  };
	
	  proto.getColumnWidth = function() {
	    this.getSegmentSize( 'column', 'Width' );
	  };
	
	  proto.getRowHeight = function() {
	    this.getSegmentSize( 'row', 'Height' );
	  };
	
	  /**
	   * get columnWidth or rowHeight
	   * segment: 'column' or 'row'
	   * size 'Width' or 'Height'
	  **/
	  proto.getSegmentSize = function( segment, size ) {
	    var segmentName = segment + size;
	    var outerSize = 'outer' + size;
	    // columnWidth / outerWidth // rowHeight / outerHeight
	    this._getMeasurement( segmentName, outerSize );
	    // got rowHeight or columnWidth, we can chill
	    if ( this[ segmentName ] ) {
	      return;
	    }
	    // fall back to item of first element
	    var firstItemSize = this.getFirstItemSize();
	    this[ segmentName ] = firstItemSize && firstItemSize[ outerSize ] ||
	      // or size of container
	      this.isotope.size[ 'inner' + size ];
	  };
	
	  proto.getFirstItemSize = function() {
	    var firstItem = this.isotope.filteredItems[0];
	    return firstItem && firstItem.element && getSize( firstItem.element );
	  };
	
	  // ----- methods that should reference isotope ----- //
	
	  proto.layout = function() {
	    this.isotope.layout.apply( this.isotope, arguments );
	  };
	
	  proto.getSize = function() {
	    this.isotope.getSize();
	    this.size = this.isotope.size;
	  };
	
	  // -------------------------- create -------------------------- //
	
	  LayoutMode.modes = {};
	
	  LayoutMode.create = function( namespace, options ) {
	
	    function Mode() {
	      LayoutMode.apply( this, arguments );
	    }
	
	    Mode.prototype = Object.create( proto );
	    Mode.prototype.constructor = Mode;
	
	    // default options
	    if ( options ) {
	      Mode.options = options;
	    }
	
	    Mode.prototype.namespace = namespace;
	    // register in Isotope
	    LayoutMode.modes[ namespace ] = Mode;
	
	    return Mode;
	  };
	
	  return LayoutMode;
	
	}));


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * Masonry layout mode
	 * sub-classes Masonry
	 * http://masonry.desandro.com
	 */
	
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */ /*globals define, module, require */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(13),
	        __webpack_require__(15)
	      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      require('../layout-mode'),
	      require('masonry-layout')
	    );
	  } else {
	    // browser global
	    factory(
	      window.Isotope.LayoutMode,
	      window.Masonry
	    );
	  }
	
	}( window, function factory( LayoutMode, Masonry ) {
	'use strict';
	
	// -------------------------- masonryDefinition -------------------------- //
	
	  // create an Outlayer layout class
	  var MasonryMode = LayoutMode.create('masonry');
	
	  var proto = MasonryMode.prototype;
	
	  var keepModeMethods = {
	    _getElementOffset: true,
	    layout: true,
	    _getMeasurement: true
	  };
	
	  // inherit Masonry prototype
	  for ( var method in Masonry.prototype ) {
	    // do not inherit mode methods
	    if ( !keepModeMethods[ method ] ) {
	      proto[ method ] = Masonry.prototype[ method ];
	    }
	  }
	
	  var measureColumns = proto.measureColumns;
	  proto.measureColumns = function() {
	    // set items, used if measuring first item
	    this.items = this.isotope.filteredItems;
	    measureColumns.call( this );
	  };
	
	  // point to mode options for fitWidth
	  var _getOption = proto._getOption;
	  proto._getOption = function( option ) {
	    if ( option == 'fitWidth' ) {
	      return this.options.isFitWidth !== undefined ?
	        this.options.isFitWidth : this.options.fitWidth;
	    }
	    return _getOption.apply( this.isotope, arguments );
	  };
	
	  return MasonryMode;
	
	}));


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * Masonry v4.1.0
	 * Cascading grid layout library
	 * http://masonry.desandro.com
	 * MIT License
	 * by David DeSandro
	 */
	
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */ /*globals define, module, require */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(11),
	        __webpack_require__(8)
	      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      require('outlayer'),
	      require('get-size')
	    );
	  } else {
	    // browser global
	    window.Masonry = factory(
	      window.Outlayer,
	      window.getSize
	    );
	  }
	
	}( window, function factory( Outlayer, getSize ) {
	
	'use strict';
	
	// -------------------------- masonryDefinition -------------------------- //
	
	  // create an Outlayer layout class
	  var Masonry = Outlayer.create('masonry');
	  // isFitWidth -> fitWidth
	  Masonry.compatOptions.fitWidth = 'isFitWidth';
	
	  Masonry.prototype._resetLayout = function() {
	    this.getSize();
	    this._getMeasurement( 'columnWidth', 'outerWidth' );
	    this._getMeasurement( 'gutter', 'outerWidth' );
	    this.measureColumns();
	
	    // reset column Y
	    this.colYs = [];
	    for ( var i=0; i < this.cols; i++ ) {
	      this.colYs.push( 0 );
	    }
	
	    this.maxY = 0;
	  };
	
	  Masonry.prototype.measureColumns = function() {
	    this.getContainerWidth();
	    // if columnWidth is 0, default to outerWidth of first item
	    if ( !this.columnWidth ) {
	      var firstItem = this.items[0];
	      var firstItemElem = firstItem && firstItem.element;
	      // columnWidth fall back to item of first element
	      this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
	        // if first elem has no width, default to size of container
	        this.containerWidth;
	    }
	
	    var columnWidth = this.columnWidth += this.gutter;
	
	    // calculate columns
	    var containerWidth = this.containerWidth + this.gutter;
	    var cols = containerWidth / columnWidth;
	    // fix rounding errors, typically with gutters
	    var excess = columnWidth - containerWidth % columnWidth;
	    // if overshoot is less than a pixel, round up, otherwise floor it
	    var mathMethod = excess && excess < 1 ? 'round' : 'floor';
	    cols = Math[ mathMethod ]( cols );
	    this.cols = Math.max( cols, 1 );
	  };
	
	  Masonry.prototype.getContainerWidth = function() {
	    // container is parent if fit width
	    var isFitWidth = this._getOption('fitWidth');
	    var container = isFitWidth ? this.element.parentNode : this.element;
	    // check that this.size and size are there
	    // IE8 triggers resize on body size change, so they might not be
	    var size = getSize( container );
	    this.containerWidth = size && size.innerWidth;
	  };
	
	  Masonry.prototype._getItemLayoutPosition = function( item ) {
	    item.getSize();
	    // how many columns does this brick span
	    var remainder = item.size.outerWidth % this.columnWidth;
	    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
	    // round if off by 1 pixel, otherwise use ceil
	    var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );
	    colSpan = Math.min( colSpan, this.cols );
	
	    var colGroup = this._getColGroup( colSpan );
	    // get the minimum Y value from the columns
	    var minimumY = Math.min.apply( Math, colGroup );
	    var shortColIndex = colGroup.indexOf( minimumY );
	
	    // position the brick
	    var position = {
	      x: this.columnWidth * shortColIndex,
	      y: minimumY
	    };
	
	    // apply setHeight to necessary columns
	    var setHeight = minimumY + item.size.outerHeight;
	    var setSpan = this.cols + 1 - colGroup.length;
	    for ( var i = 0; i < setSpan; i++ ) {
	      this.colYs[ shortColIndex + i ] = setHeight;
	    }
	
	    return position;
	  };
	
	  /**
	   * @param {Number} colSpan - number of columns the element spans
	   * @returns {Array} colGroup
	   */
	  Masonry.prototype._getColGroup = function( colSpan ) {
	    if ( colSpan < 2 ) {
	      // if brick spans only one column, use all the column Ys
	      return this.colYs;
	    }
	
	    var colGroup = [];
	    // how many different places could this brick fit horizontally
	    var groupCount = this.cols + 1 - colSpan;
	    // for each group potential horizontal position
	    for ( var i = 0; i < groupCount; i++ ) {
	      // make an array of colY values for that one group
	      var groupColYs = this.colYs.slice( i, i + colSpan );
	      // and get the max value of the array
	      colGroup[i] = Math.max.apply( Math, groupColYs );
	    }
	    return colGroup;
	  };
	
	  Masonry.prototype._manageStamp = function( stamp ) {
	    var stampSize = getSize( stamp );
	    var offset = this._getElementOffset( stamp );
	    // get the columns that this stamp affects
	    var isOriginLeft = this._getOption('originLeft');
	    var firstX = isOriginLeft ? offset.left : offset.right;
	    var lastX = firstX + stampSize.outerWidth;
	    var firstCol = Math.floor( firstX / this.columnWidth );
	    firstCol = Math.max( 0, firstCol );
	    var lastCol = Math.floor( lastX / this.columnWidth );
	    // lastCol should not go over if multiple of columnWidth #425
	    lastCol -= lastX % this.columnWidth ? 0 : 1;
	    lastCol = Math.min( this.cols - 1, lastCol );
	    // set colYs to bottom of the stamp
	
	    var isOriginTop = this._getOption('originTop');
	    var stampMaxY = ( isOriginTop ? offset.top : offset.bottom ) +
	      stampSize.outerHeight;
	    for ( var i = firstCol; i <= lastCol; i++ ) {
	      this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );
	    }
	  };
	
	  Masonry.prototype._getContainerSize = function() {
	    this.maxY = Math.max.apply( Math, this.colYs );
	    var size = {
	      height: this.maxY
	    };
	
	    if ( this._getOption('fitWidth') ) {
	      size.width = this._getContainerFitWidth();
	    }
	
	    return size;
	  };
	
	  Masonry.prototype._getContainerFitWidth = function() {
	    var unusedCols = 0;
	    // count unused columns
	    var i = this.cols;
	    while ( --i ) {
	      if ( this.colYs[i] !== 0 ) {
	        break;
	      }
	      unusedCols++;
	    }
	    // fit container to columns that have been used
	    return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
	  };
	
	  Masonry.prototype.needsResizeLayout = function() {
	    var previousWidth = this.containerWidth;
	    this.getContainerWidth();
	    return previousWidth != this.containerWidth;
	  };
	
	  return Masonry;
	
	}));


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * fitRows layout mode
	 */
	
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */ /*globals define, module, require */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(13)
	      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof exports == 'object' ) {
	    // CommonJS
	    module.exports = factory(
	      require('../layout-mode')
	    );
	  } else {
	    // browser global
	    factory(
	      window.Isotope.LayoutMode
	    );
	  }
	
	}( window, function factory( LayoutMode ) {
	'use strict';
	
	var FitRows = LayoutMode.create('fitRows');
	
	var proto = FitRows.prototype;
	
	proto._resetLayout = function() {
	  this.x = 0;
	  this.y = 0;
	  this.maxY = 0;
	  this._getMeasurement( 'gutter', 'outerWidth' );
	};
	
	proto._getItemLayoutPosition = function( item ) {
	  item.getSize();
	
	  var itemWidth = item.size.outerWidth + this.gutter;
	  // if this element cannot fit in the current row
	  var containerWidth = this.isotope.size.innerWidth + this.gutter;
	  if ( this.x !== 0 && itemWidth + this.x > containerWidth ) {
	    this.x = 0;
	    this.y = this.maxY;
	  }
	
	  var position = {
	    x: this.x,
	    y: this.y
	  };
	
	  this.maxY = Math.max( this.maxY, this.y + item.size.outerHeight );
	  this.x += itemWidth;
	
	  return position;
	};
	
	proto._getContainerSize = function() {
	  return { height: this.maxY };
	};
	
	return FitRows;
	
	}));


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * vertical layout mode
	 */
	
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */ /*globals define, module, require */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(13)
	      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      require('../layout-mode')
	    );
	  } else {
	    // browser global
	    factory(
	      window.Isotope.LayoutMode
	    );
	  }
	
	}( window, function factory( LayoutMode ) {
	'use strict';
	
	var Vertical = LayoutMode.create( 'vertical', {
	  horizontalAlignment: 0
	});
	
	var proto = Vertical.prototype;
	
	proto._resetLayout = function() {
	  this.y = 0;
	};
	
	proto._getItemLayoutPosition = function( item ) {
	  item.getSize();
	  var x = ( this.isotope.size.innerWidth - item.size.outerWidth ) *
	    this.options.horizontalAlignment;
	  var y = this.y;
	  this.y += item.size.outerHeight;
	  return { x: x, y: y };
	};
	
	proto._getContainerSize = function() {
	  return { height: this.y };
	};
	
	return Vertical;
	
	}));


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Isotope Item
	**/
	
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */ /*globals define, module, require */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(11)
	      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      require('outlayer')
	    );
	  } else {
	    // browser global
	    window.Isotope = window.Isotope || {};
	    window.Isotope.Item = factory(
	      window.Outlayer
	    );
	  }
	
	}( window, function factory( Outlayer ) {
	'use strict';
	
	// -------------------------- Item -------------------------- //
	
	// sub-class Outlayer Item
	function Item() {
	  Outlayer.Item.apply( this, arguments );
	}
	
	var proto = Item.prototype = Object.create( Outlayer.Item.prototype );
	
	var _create = proto._create;
	proto._create = function() {
	  // assign id, used for original-order sorting
	  this.id = this.layout.itemGUID++;
	  _create.call( this );
	  this.sortData = {};
	};
	
	proto.updateSortData = function() {
	  if ( this.isIgnored ) {
	    return;
	  }
	  // default sorters
	  this.sortData.id = this.id;
	  // for backward compatibility
	  this.sortData['original-order'] = this.id;
	  this.sortData.random = Math.random();
	  // go thru getSortData obj and apply the sorters
	  var getSortData = this.layout.options.getSortData;
	  var sorters = this.layout._sorters;
	  for ( var key in getSortData ) {
	    var sorter = sorters[ key ];
	    this.sortData[ key ] = sorter( this.element, this );
	  }
	};
	
	var _destroy = proto.destroy;
	proto.destroy = function() {
	  // call super
	  _destroy.apply( this, arguments );
	  // reset display, #741
	  this.css({
	    display: ''
	  });
	};
	
	return Item;
	
	}));


/***/ },
/* 19 */
/***/ function(module, exports) {

	
	
	// BLOG GRID
	// ------------------------------------
	
	function equalHeight( items ) {
	
	    // MAX HEIGHT VALUE
	    var maxHeight = 0;
	
	    // GET ALL LIST ITEMS
	    var listItems = document.querySelectorAll( items );
	
	    // GET TALLEST LIST ITEM VALUE
	    for ( var i = 0; i < listItems.length; i++ ) {
	        listItems[i].style.height = 'auto';
	        var listItemHeight = listItems[i].offsetHeight;
	        maxHeight = maxHeight < listItemHeight ? listItemHeight : maxHeight;
	    }
	
	    // SET HEIGHT FOR ALL LIST ITEMS
	    for ( var j = 0; j < listItems.length; j++ ) {
	        listItems[j].style.height = maxHeight + 'px';
	    }
	
	}
	
	window.addEventListener( 'load', function () {
	    equalHeight( '.blog__item' );
	}, false );
	
	window.addEventListener( 'resize', function () {
	    equalHeight( '.blog__item' );
	}, false );


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// TESTIMONIALS SLIDER
	// ------------------------------------
	
	var swiper = __webpack_require__( 3 );
	
	window.addEventListener( 'load', function () {
	    swiper( '.testimonials .swiper-container', {
	        pagination: '.testimonials .swiper-pagination',
	        paginationClickable: true,
	        breakpoints: {
	            500: {
	                autoplay: 2000,
	                speed: 1000,
	                grabCursor: true
	            }
	        }
	    });
	}, false );


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	
	// GOOGLE MAPS
	// ------------------------------------
	
	var GoogleMapsLoader = __webpack_require__( 22 );
	
	GoogleMapsLoader.load( function ( google ) {
	
	    GoogleMapsLoader.LANGUAGE = 'en';
	    GoogleMapsLoader.KEY = 'AIzaSyAjunIsdBzwn5n0IhHJctIg4PPCMlH7u24';
	    var brampton = document.querySelector( '#map' );
	    var bramptonCoords = new google.maps.LatLng( 51.5220535, 0.0419289 );
	    var zoomValue = 15;
	    var markerPath = 'static/img/assets/block-map/location-icon.png';
	
	    var bramptonMapStyles = [
	        {
	            featureType: 'water',
	            elementType: 'geometry',
	            stylers: [{color: '#e9e9e9'}, {lightness: 17}]
	        },
	        {
	            featureType: 'landscape',
	            elementType: 'geometry',
	            stylers: [{color: '#f5f5f5'}, {lightness: 20}]
	        },
	        {
	            featureType: 'road.highway',
	            elementType: 'geometry.fill',
	            stylers: [{color: '#ffffff'}, {lightness: 17}]
	        },
	        {
	            featureType: 'road.highway',
	            elementType: 'geometry.stroke',
	            stylers: [{color: '#ffffff'}, {lightness: 29}, {weight: 0.2}]
	        },
	        {
	            featureType: 'road.arterial',
	            elementType: 'geometry',
	            stylers: [{color: '#ffffff'}, {lightness: 18}]
	        },
	        {
	            featureType: 'road.local',
	            elementType: 'geometry',
	            stylers: [{color: '#ffffff'}, {lightness: 16}]
	        },
	        {
	            featureType: 'poi',
	            elementType: 'geometry',
	            stylers: [{color: '#f5f5f5'}, {lightness: 21}]
	        },
	        {
	            featureType: 'poi.park',
	            elementType: 'geometry',
	            stylers: [{color: '#dedede'}, {lightness: 21}]
	        },
	        {
	            elementType: 'labels.text.stroke',
	            stylers: [{visibility: 'on'}, {color: '#ffffff'}, {lightness: 16}]
	        },
	        {
	            elementType: 'labels.text.fill',
	            stylers: [{saturation: 36}, {color: '#333333'}, {lightness: 40}]
	        },
	        {
	            elementType: 'labels.icon',
	            stylers: [{visibility: 'off'}]
	        },
	        {
	            featureType: 'transit',
	            elementType: 'geometry',
	            stylers: [{ color: '#f2f2f2' }, { lightness: 19 }]
	        },
	        {
	            featureType: 'administrative',
	            elementType: 'geometry.fill',
	            stylers: [{ color: '#fefefe' }, { lightness: 20 }]
	        },
	        {
	            featureType: 'administrative',
	            elementType: 'geometry.stroke',
	            stylers: [{ color: '#fefefe' }, { lightness: 17 }, { weight: 1.2 }]
	        }
	    ];
	
	    var bramptonProperties = {
	        center: bramptonCoords,
	        zoom: zoomValue,
	        mapTypeId: google.maps.MapTypeId.ROADMAP,
	        panControl: false,
	        zoomControl: false,
	        mapTypeControl: false,
	        streetViewControl: false,
	        scrollwheel: false,
	        disableDoubleClickZoom: true,
	        draggable: true,
	        verviewMapControl: true,
	        overviewMapControlOptions: {
	            opened: false
	        },
	        styles: bramptonMapStyles
	    };
	
	    var bramptonMap = new google.maps.Map( brampton, bramptonProperties );
	
	    var bramptonMarker = new google.maps.Marker({
	        position: bramptonCoords,
	        map: bramptonMap,
	        icon: markerPath,
	        visible: true,
	        animation: google.maps.Animation.DROP
	    });
	
	    var bramptonInfo = new google.maps.InfoWindow({
	        content: 'Brampton Manor Academy'
	    });
	
	    bramptonMarker.addListener( 'click', function () {
	        bramptonInfo.open( bramptonMap, bramptonMarker );
	    });
	
	    // MAKE GOOGLE MAP RESPONSIVE
	    // --------------------------------------------------------------------
	
	    var bramptonMapCenter = bramptonMap.getCenter(); // returns the position displayed at the center of the map
	
	    // CENTER GOOGLE MAPS ON BROWSER RESIZE (RESPONSIVE)
	    google.maps.event.addDomListener( window, 'resize', function () {
	        bramptonMap.setCenter( bramptonMapCenter );
	    });
	
	    // RETURN CENTER OF MAP TO THE CENTER OF WINDOW IF MAP WAS MOVED BY USER
	    google.maps.event.addListener( bramptonMap, 'center_changed', function () {
	        window.setTimeout( function () {
	            bramptonMap.setCenter( bramptonMapCenter );
	        }, 3000 );
	    });
	
	});
	
	module.exports = {};


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {
	
		if (root === null) {
			throw new Error('Google-maps package can be used only in browser');
		}
	
		if (true) {
			!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof exports === 'object') {
			module.exports = factory();
		} else {
			root.GoogleMapsLoader = factory();
		}
	
	})(typeof window !== 'undefined' ? window : null, function() {
	
	
		'use strict';
	
	
		var googleVersion = '3.18';
	
		var script = null;
	
		var google = null;
	
		var loading = false;
	
		var callbacks = [];
	
		var onLoadEvents = [];
	
		var originalCreateLoaderMethod = null;
	
	
		var GoogleMapsLoader = {};
	
	
		GoogleMapsLoader.URL = 'https://maps.googleapis.com/maps/api/js';
	
		GoogleMapsLoader.KEY = null;
	
		GoogleMapsLoader.LIBRARIES = [];
	
		GoogleMapsLoader.CLIENT = null;
	
		GoogleMapsLoader.CHANNEL = null;
	
		GoogleMapsLoader.LANGUAGE = null;
	
		GoogleMapsLoader.REGION = null;
	
		GoogleMapsLoader.VERSION = googleVersion;
	
		GoogleMapsLoader.WINDOW_CALLBACK_NAME = '__google_maps_api_provider_initializator__';
	
	
		GoogleMapsLoader._googleMockApiObject = {};
	
	
		GoogleMapsLoader.load = function(fn) {
			if (google === null) {
				if (loading === true) {
					if (fn) {
						callbacks.push(fn);
					}
				} else {
					loading = true;
	
					window[GoogleMapsLoader.WINDOW_CALLBACK_NAME] = function() {
						ready(fn);
					};
	
					GoogleMapsLoader.createLoader();
				}
			} else if (fn) {
				fn(google);
			}
		};
	
	
		GoogleMapsLoader.createLoader = function() {
			script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = GoogleMapsLoader.createUrl();
	
			document.body.appendChild(script);
		};
	
	
		GoogleMapsLoader.isLoaded = function() {
			return google !== null;
		};
	
	
		GoogleMapsLoader.createUrl = function() {
			var url = GoogleMapsLoader.URL;
	
			url += '?callback=' + GoogleMapsLoader.WINDOW_CALLBACK_NAME;
	
			if (GoogleMapsLoader.KEY) {
				url += '&key=' + GoogleMapsLoader.KEY;
			}
	
			if (GoogleMapsLoader.LIBRARIES.length > 0) {
				url += '&libraries=' + GoogleMapsLoader.LIBRARIES.join(',');
			}
	
			if (GoogleMapsLoader.CLIENT) {
				url += '&client=' + GoogleMapsLoader.CLIENT + '&v=' + GoogleMapsLoader.VERSION;
			}
	
			if (GoogleMapsLoader.CHANNEL) {
				url += '&channel=' + GoogleMapsLoader.CHANNEL;
			}
	
			if (GoogleMapsLoader.LANGUAGE) {
				url += '&language=' + GoogleMapsLoader.LANGUAGE;
			}
	
			if (GoogleMapsLoader.REGION) {
				url += '&region=' + GoogleMapsLoader.REGION;
			}
	
			return url;
		};
	
	
		GoogleMapsLoader.release = function(fn) {
			var release = function() {
				GoogleMapsLoader.KEY = null;
				GoogleMapsLoader.LIBRARIES = [];
				GoogleMapsLoader.CLIENT = null;
				GoogleMapsLoader.CHANNEL = null;
				GoogleMapsLoader.LANGUAGE = null;
				GoogleMapsLoader.REGION = null;
				GoogleMapsLoader.VERSION = googleVersion;
	
				google = null;
				loading = false;
				callbacks = [];
				onLoadEvents = [];
	
				if (typeof window.google !== 'undefined') {
					delete window.google;
				}
	
				if (typeof window[GoogleMapsLoader.WINDOW_CALLBACK_NAME] !== 'undefined') {
					delete window[GoogleMapsLoader.WINDOW_CALLBACK_NAME];
				}
	
				if (originalCreateLoaderMethod !== null) {
					GoogleMapsLoader.createLoader = originalCreateLoaderMethod;
					originalCreateLoaderMethod = null;
				}
	
				if (script !== null) {
					script.parentElement.removeChild(script);
					script = null;
				}
	
				if (fn) {
					fn();
				}
			};
	
			if (loading) {
				GoogleMapsLoader.load(function() {
					release();
				});
			} else {
				release();
			}
		};
	
	
		GoogleMapsLoader.onLoad = function(fn) {
			onLoadEvents.push(fn);
		};
	
	
		GoogleMapsLoader.makeMock = function() {
			originalCreateLoaderMethod = GoogleMapsLoader.createLoader;
	
			GoogleMapsLoader.createLoader = function() {
				window.google = GoogleMapsLoader._googleMockApiObject;
				window[GoogleMapsLoader.WINDOW_CALLBACK_NAME]();
			};
		};
	
	
		var ready = function(fn) {
			var i;
	
			loading = false;
	
			if (google === null) {
				google = window.google;
			}
	
			for (i = 0; i < onLoadEvents.length; i++) {
				onLoadEvents[i](google);
			}
	
			if (fn) {
				fn(google);
			}
	
			for (i = 0; i < callbacks.length; i++) {
				callbacks[i](google);
			}
	
			callbacks = [];
		};
	
	
		return GoogleMapsLoader;
	
	});


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	
	// PAGE BLOG GRID
	// -----------------------------------------------------------
	
	var imagesLoaded = __webpack_require__( 5 );
	var IsotopeBlog = __webpack_require__( 7 );
	
	window.addEventListener( 'load', function () {
	    var blogGrid = document.querySelector( '.page-blog__main .blog-grid' );
	    var blogGridSizer = '.blog-grid__sizer';
	    var blogGridItem = '.blog-grid__item';
	    var blogLayout;
	
	    imagesLoaded( blogGrid, function () {
	        blogLayout = new IsotopeBlog( blogGrid, {
	            itemSelector: blogGridItem,
	            percentPosition: true,
	            masonry: {
	                columnWidth: blogGridSizer
	            }
	        });
	    });
	});


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDJmY2MxMzdiZWMyZTM5YjcyMjciLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL3N0YXRpYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL21hcmt1cC9jb21wb25lbnRzL2Jsb2NrLXRvcGhlYWRlci9ibG9jay10b3BoZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL2NvbXBvbmVudHMvYmxvY2staGVhZGVyL2Jsb2NrLWhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3N3aXBlci9kaXN0L2pzL3N3aXBlci5qcyIsIndlYnBhY2s6Ly8vLi9tYXJrdXAvY29tcG9uZW50cy9ibG9jay1wb3J0Zm9saW8vYmxvY2stcG9ydGZvbGlvLmpzIiwid2VicGFjazovLy8uL34vaW1hZ2VzbG9hZGVkL2ltYWdlc2xvYWRlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2V2LWVtaXR0ZXIvZXYtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzb3RvcGUtbGF5b3V0L2pzL2lzb3RvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9nZXQtc2l6ZS9nZXQtc2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2Rlc2FuZHJvLW1hdGNoZXMtc2VsZWN0b3IvbWF0Y2hlcy1zZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2Zpenp5LXVpLXV0aWxzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL34vb3V0bGF5ZXIvb3V0bGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9vdXRsYXllci9pdGVtLmpzIiwid2VicGFjazovLy8uL34vaXNvdG9wZS1sYXlvdXQvanMvbGF5b3V0LW1vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pc290b3BlLWxheW91dC9qcy9sYXlvdXQtbW9kZXMvbWFzb25yeS5qcyIsIndlYnBhY2s6Ly8vLi9+L21hc29ucnktbGF5b3V0L21hc29ucnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pc290b3BlLWxheW91dC9qcy9sYXlvdXQtbW9kZXMvZml0LXJvd3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pc290b3BlLWxheW91dC9qcy9sYXlvdXQtbW9kZXMvdmVydGljYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pc290b3BlLWxheW91dC9qcy9pdGVtLmpzIiwid2VicGFjazovLy8uL21hcmt1cC9jb21wb25lbnRzL2Jsb2NrLWJsb2cvYmxvY2stYmxvZy5qcyIsIndlYnBhY2s6Ly8vLi9tYXJrdXAvY29tcG9uZW50cy9ibG9jay10ZXN0aW1vbmlhbHMvYmxvY2stdGVzdGltb25pYWxzLmpzIiwid2VicGFjazovLy8uL21hcmt1cC9jb21wb25lbnRzL2Jsb2NrLW1hcC9ibG9jay1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9nb29nbGUtbWFwcy9saWIvR29vZ2xlLmpzIiwid2VicGFjazovLy8uL21hcmt1cC9jb21wb25lbnRzL3BhZ2UtYmxvZy9wYWdlLWJsb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNiQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7O0FDWkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUM7Ozs7Ozs7QUN2QkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBb0QsT0FBTztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2IsNEJBQTJCLG1CQUFtQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7O0FBRUEsY0FBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCLDJCQUEyQjtBQUN0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQ0FBcUMsOEJBQThCO0FBQ25FLGdDQUErQixrQ0FBa0M7O0FBRWpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUI7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUErQixvREFBb0Q7QUFDbkY7QUFDQTtBQUNBLHNEQUFxRCxvREFBb0Q7QUFDekcscUNBQW9DLHFEQUFxRDtBQUN6Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0Isb0RBQW9EO0FBQ25GO0FBQ0E7QUFDQSxnQ0FBK0IsdUJBQXVCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCLHVCQUF1QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBQTZDLGdDQUFnQztBQUM3RSx3Q0FBdUMsaUNBQWlDO0FBQ3hFO0FBQ0Esb0NBQW1DLGtDQUFrQztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBMkIscUJBQXFCO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTJCLHFCQUFxQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIseUJBQXlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTBCLHlCQUF5QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW1DLHFCQUFxQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLHFCQUFxQjtBQUNwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBbUMsdUJBQXVCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQTZCO0FBQzdCLDBCQUF5QjtBQUN6QixzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQTZCO0FBQzdCOztBQUVBLHNCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF1Qix5QkFBeUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTJCLHlCQUF5QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0EsNEVBQTJFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQixjQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLDZCQUE2QjtBQUM1RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQ0FBMEMsaUJBQWlCOztBQUUzRDtBQUNBLHlDQUF3QyxrQkFBa0I7QUFDMUQ7QUFDQTtBQUNBLDRCQUEyQix3QkFBd0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYix3QkFBdUIseUJBQXlCO0FBQ2hEO0FBQ0E7QUFDQSwrQ0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLG1CQUFtQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQixtQkFBbUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQiwwQkFBMEI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCLHFCQUFxQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW1DLHFCQUFxQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBNkI7QUFDN0I7O0FBRUE7O0FBRUEsa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLDBCQUEwQjtBQUNyRTtBQUNBO0FBQ0EsMEJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBLG9DQUFtQyxxQkFBcUI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsMEJBQTBCO0FBQ3JFO0FBQ0E7QUFDQSwwQkFBeUI7QUFDekI7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE0Qyx1QkFBdUI7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW1DLHFCQUFxQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBNkQsWUFBWTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCOztBQUVyQjtBQUNBLGtCQUFpQjs7QUFFakIsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsZ0RBQStDLDZDQUE2QztBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXdFLGNBQWM7QUFDdEY7QUFDQTtBQUNBO0FBQ0EsMkNBQTBDLG9CQUFvQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakIsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBa0MsdUJBQXVCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0IsdUJBQXVCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQXlELFlBQVk7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQix3QkFBd0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBcUQ7QUFDckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQixrQkFBaUI7QUFDakIsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCLHVCQUF1QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBMkIsK0NBQStDO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QiwrQ0FBK0M7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLGNBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0EsY0FBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxjQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZGQUE0RixPQUFPO0FBQ25HLHNCQUFxQjtBQUNyQjtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxjQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLGdDQUErQixtQkFBbUI7QUFDbEQ7QUFDQTtBQUNBLGNBQWE7O0FBRWI7QUFDQTtBQUNBLGNBQWE7QUFDYixVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBbUMsa0NBQWtDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFtQyxnQkFBZ0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0IscUJBQXFCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLG9CQUFvQjtBQUNuRCxvQ0FBbUMsaUJBQWlCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxnQ0FBK0Isb0JBQW9CO0FBQ25ELG9DQUFtQyxpQkFBaUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxnQ0FBK0Isb0JBQW9CO0FBQ25ELG9DQUFtQyxpQkFBaUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFtQyxpQkFBaUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBLGdDQUErQixpQkFBaUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW1DLGlCQUFpQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBLGdDQUErQixpQkFBaUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0IsaUJBQWlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXVDLG9CQUFvQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBMkIsaUJBQWlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFtQyxtQkFBbUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFtQyxtQkFBbUI7QUFDdEQ7QUFDQSw2REFBNEQsa0RBQWtEO0FBQzlHO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxnQ0FBK0IsbUJBQW1CO0FBQ2xELG9DQUFtQyxpQkFBaUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUErQyxzQ0FBc0M7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBLGdDQUErQixpQkFBaUI7QUFDaEQ7QUFDQTtBQUNBLGtFQUFpRSxtREFBbUQ7QUFDcEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLG1CQUFtQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQixtQkFBbUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW1DLGlCQUFpQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLGlCQUFpQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTs7QUFFYjtBQUNBO0FBQ0EsZ0NBQStCLGlCQUFpQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFtQyxpQkFBaUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFtQyxpQkFBaUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW1DLHdCQUF3QjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFtQyx3QkFBd0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EsNEJBQTJCLGlCQUFpQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW1DLHFCQUFxQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSw0QkFBMkIsaUJBQWlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLGdFQUErRCxRQUFRO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBbUMscUJBQXFCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBLGdDQUErQixpQkFBaUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBdUMsbUJBQW1CO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxnQ0FBK0IsaUJBQWlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXVDLGtCQUFrQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxnQ0FBK0IsaUJBQWlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBLGdDQUErQixpQkFBaUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxnQ0FBK0IsaUJBQWlCO0FBQ2hEO0FBQ0Esb0NBQW1DLGtCQUFrQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EsZ0NBQStCLGlCQUFpQjtBQUNoRDs7QUFFQSxvQ0FBbUMsdUJBQXVCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBLGdDQUErQixpQkFBaUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDRCQUEyQixzQkFBc0I7QUFDakQ7QUFDQSxnQ0FBK0Isa0JBQWtCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCLGdCQUFnQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLDZCQUE2QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0IsbUJBQW1CO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLG1CQUFtQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLGlCQUFpQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLGlCQUFpQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7Ozs7Ozs7QUMzMUlBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBLHNCQUFxQixxREFBcUQ7QUFDMUUsTUFBSztBQUNMLEVBQUM7Ozs7Ozs7QUNuQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBK0I7QUFDL0I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsbUJBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxZQUFXLGlDQUFpQztBQUM1QyxZQUFXLG1CQUFtQjtBQUM5QixZQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBMkI7O0FBRTNCO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0Isc0JBQXNCO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFjLHFCQUFxQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUM7Ozs7Ozs7QUNqWEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsRUFBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLEVBQUM7Ozs7Ozs7QUM1R0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUM7QUFDRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG1CQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxlQUFjLE1BQU07QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBYyxNQUFNO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXNCLG9CQUFvQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFhLDZCQUE2QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFrQixnQkFBZ0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhLFNBQVM7QUFDdEIsY0FBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGdCQUFlLE1BQU07QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7O0FBRUE7O0FBRUEsRUFBQzs7Ozs7OztBQ3BtQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLEVBQUM7QUFDRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQix3QkFBd0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsaUJBQWdCLHdCQUF3QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxFQUFDOzs7Ozs7O0FDaE5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsRUFBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBLEVBQUM7Ozs7Ozs7QUNwREQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsbUJBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMLElBQUc7QUFDSDs7QUFFQTs7QUFFQTs7QUFFQSxFQUFDOzs7Ozs7O0FDM09EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUNBO0FBQ0E7QUFDQSx1SkFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLFlBQVcsZ0JBQWdCO0FBQzNCLFlBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFpQztBQUNqQzs7QUFFQTtBQUNBO0FBQ0Esa0NBQWlDO0FBQ2pDLDBCQUF5Qjs7QUFFekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFlBQVcsaUNBQWlDO0FBQzVDLGNBQWEsTUFBTTtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFnQixzQkFBc0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxpQ0FBaUM7QUFDNUMsY0FBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGNBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLFlBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVcsY0FBYztBQUN6QixjQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxjQUFjO0FBQ3pCLFlBQVcsT0FBTztBQUNsQixZQUFXLE9BQU87QUFDbEIsWUFBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYSxPQUFPO0FBQ3BCLGNBQWEsT0FBTztBQUNwQixjQUFhLE9BQU87QUFDcEI7QUFDQTs7QUFFQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLE1BQU07QUFDakIsWUFBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxvQ0FBb0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFXLDRCQUE0QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLFlBQVcsb0NBQW9DO0FBQy9DLGNBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFXLFFBQVE7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxRQUFRO0FBQ25CLGNBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFlBQVcsNkJBQTZCO0FBQ3hDLGNBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVcsNkJBQTZCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFXLDZCQUE2QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVcsd0JBQXdCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxZQUFXLHdCQUF3QjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxNQUFNLEdBQUcsUUFBUSxHQUFHLFNBQVM7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxNQUFNLEdBQUcsUUFBUSxHQUFHLFNBQVM7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxRQUFRO0FBQ25CLFlBQVcsU0FBUztBQUNwQixjQUFhLGNBQWM7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLHVCQUF1QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGNBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVcsNkJBQTZCO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7O0FBRUE7QUFDQSwwQkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxRQUFRO0FBQ25CLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFvQztBQUNwQztBQUNBLDBDQUF5Qzs7QUFFekM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsRUFBQzs7Ozs7OztBQzE2QkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FDQSxtVEFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUM7QUFDRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQixjQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLFNBQVM7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixjQUFhLE9BQU87QUFDcEIsY0FBYSxPQUFPO0FBQ3BCLGNBQWEsUUFBUTtBQUNyQixjQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVksY0FBYztBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLGNBQWM7O0FBRTFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVksY0FBYzs7QUFFMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWMsa0JBQWtCO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7O0FBRUEsRUFBQzs7Ozs7OztBQ3hpQkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsRUFBQzs7Ozs7OztBQzVKRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsRUFBQzs7Ozs7OztBQ3pFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBQzs7QUFFRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBa0IsZUFBZTtBQUNqQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFvQixhQUFhO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGNBQWEsT0FBTztBQUNwQixnQkFBZSxNQUFNO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBMkIsY0FBYztBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUM7Ozs7Ozs7QUM1TUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsV0FBVTtBQUNWOztBQUVBOztBQUVBLEVBQUM7Ozs7Ozs7QUNuRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVU7QUFDVjs7QUFFQTtBQUNBLFdBQVU7QUFDVjs7QUFFQTs7QUFFQSxFQUFDOzs7Ozs7O0FDckREO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTs7QUFFQSxFQUFDOzs7Ozs7Ozs7QUMxRUQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQW9CLHNCQUFzQjtBQUMxQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O0FDakNEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxFQUFDOzs7Ozs7OztBQ2hCRDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixpQkFBaUIsR0FBRyxjQUFjO0FBQ3pELFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsaUJBQWlCLEdBQUcsY0FBYztBQUN6RCxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLGlCQUFpQixHQUFHLGNBQWM7QUFDekQsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixpQkFBaUIsR0FBRyxjQUFjLEdBQUcsWUFBWTtBQUN4RSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLGlCQUFpQixHQUFHLGNBQWM7QUFDekQsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixpQkFBaUIsR0FBRyxjQUFjO0FBQ3pELFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsaUJBQWlCLEdBQUcsY0FBYztBQUN6RCxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLGlCQUFpQixHQUFHLGNBQWM7QUFDekQsVUFBUztBQUNUO0FBQ0E7QUFDQSx3QkFBdUIsaUJBQWlCLEdBQUcsaUJBQWlCLEdBQUcsY0FBYztBQUM3RSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLHdCQUF1QixlQUFlLEdBQUcsaUJBQWlCLEdBQUcsY0FBYztBQUMzRSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLHdCQUF1QixrQkFBa0I7QUFDekMsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixtQkFBbUIsR0FBRyxnQkFBZ0I7QUFDN0QsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixtQkFBbUIsR0FBRyxnQkFBZ0I7QUFDN0QsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixtQkFBbUIsR0FBRyxnQkFBZ0IsR0FBRyxjQUFjO0FBQzlFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQSxxREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsTUFBSzs7QUFFTCxFQUFDOztBQUVEOzs7Ozs7O0FDNUlBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7O0FBRUEsRUFBQzs7O0FBR0Q7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKLElBQUc7QUFDSDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxjQUFhLHlCQUF5QjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxjQUFhLHNCQUFzQjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBLEVBQUM7Ozs7Ozs7O0FDek5EO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULE1BQUs7QUFDTCxFQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL3N0YXRpYy9qcy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGQyZmNjMTM3YmVjMmUzOWI3MjI3XG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBQQUdFIElOREVYXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5yZXF1aXJlKCAnLi4vLi4vY29tcG9uZW50cy9ibG9jay10b3BoZWFkZXIvYmxvY2stdG9waGVhZGVyJyApO1xucmVxdWlyZSggJy4uLy4uL2NvbXBvbmVudHMvYmxvY2staGVhZGVyL2Jsb2NrLWhlYWRlcicgKTtcbnJlcXVpcmUoICcuLi8uLi9jb21wb25lbnRzL2Jsb2NrLXBvcnRmb2xpby9ibG9jay1wb3J0Zm9saW8nICk7XG5yZXF1aXJlKCAnLi4vLi4vY29tcG9uZW50cy9ibG9jay1ibG9nL2Jsb2NrLWJsb2cnICk7XG5yZXF1aXJlKCAnLi4vLi4vY29tcG9uZW50cy9ibG9jay10ZXN0aW1vbmlhbHMvYmxvY2stdGVzdGltb25pYWxzJyApO1xucmVxdWlyZSggJy4uLy4uL2NvbXBvbmVudHMvYmxvY2stbWFwL2Jsb2NrLW1hcCcgKTtcblxuLy8gUEFHRSBCTE9HXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5yZXF1aXJlKCAnLi4vLi4vY29tcG9uZW50cy9wYWdlLWJsb2cvcGFnZS1ibG9nJyApO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL21hcmt1cC9zdGF0aWMvanMvbWFpbi5qc1xuICoqIG1vZHVsZSBpZCA9IDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIFRPUEhFQURFUiBISURFIEFORCBTSE9XXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRvcEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcjdG9waGVhZGVyJyApO1xuICAgIHZhciB0b3BPZmZzZXQgPSA1MDtcbiAgICB2YXIgc2Nyb2xsT2Zmc2V0ID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG5cbiAgICBpZiAoIHNjcm9sbE9mZnNldCA+IHRvcE9mZnNldCApIHtcbiAgICAgICAgdG9wSGVhZGVyLmNsYXNzTGlzdC5hZGQoICdpcy1oaWRkZW4nICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdG9wSGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoICdpcy1oaWRkZW4nICk7XG4gICAgfVxufSwgZmFsc2UgKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9tYXJrdXAvY29tcG9uZW50cy9ibG9jay10b3BoZWFkZXIvYmxvY2stdG9waGVhZGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG4vLyBIRUFERVIgU0xJREVSXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxudmFyIHN3aXBlciA9IHJlcXVpcmUoICdzd2lwZXInICk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBzd2lwZXIoICcuaGVhZGVyIC5zd2lwZXItY29udGFpbmVyJywge1xuICAgICAgICBuZXh0QnV0dG9uOiAnLmhlYWRlciAuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgICAgcHJldkJ1dHRvbjogJy5oZWFkZXIgLnN3aXBlci1idXR0b24tcHJldicsXG4gICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgICAgICA3Njg6IHtcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogMjAwMCxcbiAgICAgICAgICAgICAgICBzcGVlZDogODAwLFxuICAgICAgICAgICAgICAgIGdyYWJDdXJzb3I6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA1MDA6IHtcbiAgICAgICAgICAgICAgICBlZmZlY3Q6ICdmYWRlJyxcbiAgICAgICAgICAgICAgICBncmFiQ3Vyc29yOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59LCBmYWxzZSApO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL21hcmt1cC9jb21wb25lbnRzL2Jsb2NrLWhlYWRlci9ibG9jay1oZWFkZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIFN3aXBlciAzLjMuMVxuICogTW9zdCBtb2Rlcm4gbW9iaWxlIHRvdWNoIHNsaWRlciBhbmQgZnJhbWV3b3JrIHdpdGggaGFyZHdhcmUgYWNjZWxlcmF0ZWQgdHJhbnNpdGlvbnNcbiAqIFxuICogaHR0cDovL3d3dy5pZGFuZ2Vyby51cy9zd2lwZXIvXG4gKiBcbiAqIENvcHlyaWdodCAyMDE2LCBWbGFkaW1pciBLaGFybGFtcGlkaVxuICogVGhlIGlEYW5nZXJvLnVzXG4gKiBodHRwOi8vd3d3LmlkYW5nZXJvLnVzL1xuICogXG4gKiBMaWNlbnNlZCB1bmRlciBNSVRcbiAqIFxuICogUmVsZWFzZWQgb246IEZlYnJ1YXJ5IDcsIDIwMTZcbiAqL1xuKGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgdmFyICQ7XG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBTd2lwZXJcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgIHZhciBTd2lwZXIgPSBmdW5jdGlvbiAoY29udGFpbmVyLCBwYXJhbXMpIHtcbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFN3aXBlcikpIHJldHVybiBuZXcgU3dpcGVyKGNvbnRhaW5lciwgcGFyYW1zKTtcblxuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICAgICAgICAgIHRvdWNoRXZlbnRzVGFyZ2V0OiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgIGluaXRpYWxTbGlkZTogMCxcbiAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICAvLyBhdXRvcGxheVxuICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgYXV0b3BsYXlEaXNhYmxlT25JbnRlcmFjdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgIGF1dG9wbGF5U3RvcE9uTGFzdDogZmFsc2UsXG4gICAgICAgICAgICAvLyBUbyBzdXBwb3J0IGlPUydzIHN3aXBlLXRvLWdvLWJhY2sgZ2VzdHVyZSAod2hlbiBiZWluZyB1c2VkIGluLWFwcCwgd2l0aCBVSVdlYlZpZXcpLlxuICAgICAgICAgICAgaU9TRWRnZVN3aXBlRGV0ZWN0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgIGlPU0VkZ2VTd2lwZVRocmVzaG9sZDogMjAsXG4gICAgICAgICAgICAvLyBGcmVlIG1vZGVcbiAgICAgICAgICAgIGZyZWVNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgIGZyZWVNb2RlTW9tZW50dW06IHRydWUsXG4gICAgICAgICAgICBmcmVlTW9kZU1vbWVudHVtUmF0aW86IDEsXG4gICAgICAgICAgICBmcmVlTW9kZU1vbWVudHVtQm91bmNlOiB0cnVlLFxuICAgICAgICAgICAgZnJlZU1vZGVNb21lbnR1bUJvdW5jZVJhdGlvOiAxLFxuICAgICAgICAgICAgZnJlZU1vZGVTdGlja3k6IGZhbHNlLFxuICAgICAgICAgICAgZnJlZU1vZGVNaW5pbXVtVmVsb2NpdHk6IDAuMDIsXG4gICAgICAgICAgICAvLyBBdXRvaGVpZ2h0XG4gICAgICAgICAgICBhdXRvSGVpZ2h0OiBmYWxzZSxcbiAgICAgICAgICAgIC8vIFNldCB3cmFwcGVyIHdpZHRoXG4gICAgICAgICAgICBzZXRXcmFwcGVyU2l6ZTogZmFsc2UsXG4gICAgICAgICAgICAvLyBWaXJ0dWFsIFRyYW5zbGF0ZVxuICAgICAgICAgICAgdmlydHVhbFRyYW5zbGF0ZTogZmFsc2UsXG4gICAgICAgICAgICAvLyBFZmZlY3RzXG4gICAgICAgICAgICBlZmZlY3Q6ICdzbGlkZScsIC8vICdzbGlkZScgb3IgJ2ZhZGUnIG9yICdjdWJlJyBvciAnY292ZXJmbG93JyBvciAnZmxpcCdcbiAgICAgICAgICAgIGNvdmVyZmxvdzoge1xuICAgICAgICAgICAgICAgIHJvdGF0ZTogNTAsXG4gICAgICAgICAgICAgICAgc3RyZXRjaDogMCxcbiAgICAgICAgICAgICAgICBkZXB0aDogMTAwLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlU2hhZG93cyA6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmbGlwOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVTaGFkb3dzIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBsaW1pdFJvdGF0aW9uOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3ViZToge1xuICAgICAgICAgICAgICAgIHNsaWRlU2hhZG93czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzaGFkb3c6IHRydWUsXG4gICAgICAgICAgICAgICAgc2hhZG93T2Zmc2V0OiAyMCxcbiAgICAgICAgICAgICAgICBzaGFkb3dTY2FsZTogMC45NFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhZGU6IHtcbiAgICAgICAgICAgICAgICBjcm9zc0ZhZGU6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gUGFyYWxsYXhcbiAgICAgICAgICAgIHBhcmFsbGF4OiBmYWxzZSxcbiAgICAgICAgICAgIC8vIFNjcm9sbGJhclxuICAgICAgICAgICAgc2Nyb2xsYmFyOiBudWxsLFxuICAgICAgICAgICAgc2Nyb2xsYmFySGlkZTogdHJ1ZSxcbiAgICAgICAgICAgIHNjcm9sbGJhckRyYWdnYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBzY3JvbGxiYXJTbmFwT25SZWxlYXNlOiBmYWxzZSxcbiAgICAgICAgICAgIC8vIEtleWJvYXJkIE1vdXNld2hlZWxcbiAgICAgICAgICAgIGtleWJvYXJkQ29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICBtb3VzZXdoZWVsQ29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICBtb3VzZXdoZWVsUmVsZWFzZU9uRWRnZXM6IGZhbHNlLFxuICAgICAgICAgICAgbW91c2V3aGVlbEludmVydDogZmFsc2UsXG4gICAgICAgICAgICBtb3VzZXdoZWVsRm9yY2VUb0F4aXM6IGZhbHNlLFxuICAgICAgICAgICAgbW91c2V3aGVlbFNlbnNpdGl2aXR5OiAxLFxuICAgICAgICAgICAgLy8gSGFzaCBOYXZpZ2F0aW9uXG4gICAgICAgICAgICBoYXNobmF2OiBmYWxzZSxcbiAgICAgICAgICAgIC8vIEJyZWFrcG9pbnRzXG4gICAgICAgICAgICBicmVha3BvaW50czogdW5kZWZpbmVkLFxuICAgICAgICAgICAgLy8gU2xpZGVzIGdyaWRcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMCxcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgICAgICBzbGlkZXNQZXJDb2x1bW46IDEsXG4gICAgICAgICAgICBzbGlkZXNQZXJDb2x1bW5GaWxsOiAnY29sdW1uJyxcbiAgICAgICAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxuICAgICAgICAgICAgY2VudGVyZWRTbGlkZXM6IGZhbHNlLFxuICAgICAgICAgICAgc2xpZGVzT2Zmc2V0QmVmb3JlOiAwLCAvLyBpbiBweFxuICAgICAgICAgICAgc2xpZGVzT2Zmc2V0QWZ0ZXI6IDAsIC8vIGluIHB4XG4gICAgICAgICAgICAvLyBSb3VuZCBsZW5ndGhcbiAgICAgICAgICAgIHJvdW5kTGVuZ3RoczogZmFsc2UsXG4gICAgICAgICAgICAvLyBUb3VjaGVzXG4gICAgICAgICAgICB0b3VjaFJhdGlvOiAxLFxuICAgICAgICAgICAgdG91Y2hBbmdsZTogNDUsXG4gICAgICAgICAgICBzaW11bGF0ZVRvdWNoOiB0cnVlLFxuICAgICAgICAgICAgc2hvcnRTd2lwZXM6IHRydWUsXG4gICAgICAgICAgICBsb25nU3dpcGVzOiB0cnVlLFxuICAgICAgICAgICAgbG9uZ1N3aXBlc1JhdGlvOiAwLjUsXG4gICAgICAgICAgICBsb25nU3dpcGVzTXM6IDMwMCxcbiAgICAgICAgICAgIGZvbGxvd0ZpbmdlcjogdHJ1ZSxcbiAgICAgICAgICAgIG9ubHlFeHRlcm5hbDogZmFsc2UsXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDAsXG4gICAgICAgICAgICB0b3VjaE1vdmVTdG9wUHJvcGFnYXRpb246IHRydWUsXG4gICAgICAgICAgICAvLyBVbmlxdWUgTmF2aWdhdGlvbiBFbGVtZW50c1xuICAgICAgICAgICAgdW5pcXVlTmF2RWxlbWVudHM6IHRydWUsXG4gICAgICAgICAgICAvLyBQYWdpbmF0aW9uXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiBudWxsLFxuICAgICAgICAgICAgcGFnaW5hdGlvbkVsZW1lbnQ6ICdzcGFuJyxcbiAgICAgICAgICAgIHBhZ2luYXRpb25DbGlja2FibGU6IGZhbHNlLFxuICAgICAgICAgICAgcGFnaW5hdGlvbkhpZGU6IGZhbHNlLFxuICAgICAgICAgICAgcGFnaW5hdGlvbkJ1bGxldFJlbmRlcjogbnVsbCxcbiAgICAgICAgICAgIHBhZ2luYXRpb25Qcm9ncmVzc1JlbmRlcjogbnVsbCxcbiAgICAgICAgICAgIHBhZ2luYXRpb25GcmFjdGlvblJlbmRlcjogbnVsbCxcbiAgICAgICAgICAgIHBhZ2luYXRpb25DdXN0b21SZW5kZXI6IG51bGwsXG4gICAgICAgICAgICBwYWdpbmF0aW9uVHlwZTogJ2J1bGxldHMnLCAvLyAnYnVsbGV0cycgb3IgJ3Byb2dyZXNzJyBvciAnZnJhY3Rpb24nIG9yICdjdXN0b20nXG4gICAgICAgICAgICAvLyBSZXNpc3RhbmNlXG4gICAgICAgICAgICByZXNpc3RhbmNlOiB0cnVlLFxuICAgICAgICAgICAgcmVzaXN0YW5jZVJhdGlvOiAwLjg1LFxuICAgICAgICAgICAgLy8gTmV4dC9wcmV2IGJ1dHRvbnNcbiAgICAgICAgICAgIG5leHRCdXR0b246IG51bGwsXG4gICAgICAgICAgICBwcmV2QnV0dG9uOiBudWxsLFxuICAgICAgICAgICAgLy8gUHJvZ3Jlc3NcbiAgICAgICAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IGZhbHNlLFxuICAgICAgICAgICAgd2F0Y2hTbGlkZXNWaXNpYmlsaXR5OiBmYWxzZSxcbiAgICAgICAgICAgIC8vIEN1cnNvclxuICAgICAgICAgICAgZ3JhYkN1cnNvcjogZmFsc2UsXG4gICAgICAgICAgICAvLyBDbGlja3NcbiAgICAgICAgICAgIHByZXZlbnRDbGlja3M6IHRydWUsXG4gICAgICAgICAgICBwcmV2ZW50Q2xpY2tzUHJvcGFnYXRpb246IHRydWUsXG4gICAgICAgICAgICBzbGlkZVRvQ2xpY2tlZFNsaWRlOiBmYWxzZSxcbiAgICAgICAgICAgIC8vIExhenkgTG9hZGluZ1xuICAgICAgICAgICAgbGF6eUxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgbGF6eUxvYWRpbmdJblByZXZOZXh0OiBmYWxzZSxcbiAgICAgICAgICAgIGxhenlMb2FkaW5nSW5QcmV2TmV4dEFtb3VudDogMSxcbiAgICAgICAgICAgIGxhenlMb2FkaW5nT25UcmFuc2l0aW9uU3RhcnQ6IGZhbHNlLFxuICAgICAgICAgICAgLy8gSW1hZ2VzXG4gICAgICAgICAgICBwcmVsb2FkSW1hZ2VzOiB0cnVlLFxuICAgICAgICAgICAgdXBkYXRlT25JbWFnZXNSZWFkeTogdHJ1ZSxcbiAgICAgICAgICAgIC8vIGxvb3BcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICAgICAgbG9vcEFkZGl0aW9uYWxTbGlkZXM6IDAsXG4gICAgICAgICAgICBsb29wZWRTbGlkZXM6IG51bGwsXG4gICAgICAgICAgICAvLyBDb250cm9sXG4gICAgICAgICAgICBjb250cm9sOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBjb250cm9sSW52ZXJzZTogZmFsc2UsXG4gICAgICAgICAgICBjb250cm9sQnk6ICdzbGlkZScsIC8vb3IgJ2NvbnRhaW5lcidcbiAgICAgICAgICAgIC8vIFN3aXBpbmcvbm8gc3dpcGluZ1xuICAgICAgICAgICAgYWxsb3dTd2lwZVRvUHJldjogdHJ1ZSxcbiAgICAgICAgICAgIGFsbG93U3dpcGVUb05leHQ6IHRydWUsXG4gICAgICAgICAgICBzd2lwZUhhbmRsZXI6IG51bGwsIC8vJy5zd2lwZS1oYW5kbGVyJyxcbiAgICAgICAgICAgIG5vU3dpcGluZzogdHJ1ZSxcbiAgICAgICAgICAgIG5vU3dpcGluZ0NsYXNzOiAnc3dpcGVyLW5vLXN3aXBpbmcnLFxuICAgICAgICAgICAgLy8gTlNcbiAgICAgICAgICAgIHNsaWRlQ2xhc3M6ICdzd2lwZXItc2xpZGUnLFxuICAgICAgICAgICAgc2xpZGVBY3RpdmVDbGFzczogJ3N3aXBlci1zbGlkZS1hY3RpdmUnLFxuICAgICAgICAgICAgc2xpZGVWaXNpYmxlQ2xhc3M6ICdzd2lwZXItc2xpZGUtdmlzaWJsZScsXG4gICAgICAgICAgICBzbGlkZUR1cGxpY2F0ZUNsYXNzOiAnc3dpcGVyLXNsaWRlLWR1cGxpY2F0ZScsXG4gICAgICAgICAgICBzbGlkZU5leHRDbGFzczogJ3N3aXBlci1zbGlkZS1uZXh0JyxcbiAgICAgICAgICAgIHNsaWRlUHJldkNsYXNzOiAnc3dpcGVyLXNsaWRlLXByZXYnLFxuICAgICAgICAgICAgd3JhcHBlckNsYXNzOiAnc3dpcGVyLXdyYXBwZXInLFxuICAgICAgICAgICAgYnVsbGV0Q2xhc3M6ICdzd2lwZXItcGFnaW5hdGlvbi1idWxsZXQnLFxuICAgICAgICAgICAgYnVsbGV0QWN0aXZlQ2xhc3M6ICdzd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlJyxcbiAgICAgICAgICAgIGJ1dHRvbkRpc2FibGVkQ2xhc3M6ICdzd2lwZXItYnV0dG9uLWRpc2FibGVkJyxcbiAgICAgICAgICAgIHBhZ2luYXRpb25DdXJyZW50Q2xhc3M6ICdzd2lwZXItcGFnaW5hdGlvbi1jdXJyZW50JyxcbiAgICAgICAgICAgIHBhZ2luYXRpb25Ub3RhbENsYXNzOiAnc3dpcGVyLXBhZ2luYXRpb24tdG90YWwnLFxuICAgICAgICAgICAgcGFnaW5hdGlvbkhpZGRlbkNsYXNzOiAnc3dpcGVyLXBhZ2luYXRpb24taGlkZGVuJyxcbiAgICAgICAgICAgIHBhZ2luYXRpb25Qcm9ncmVzc2JhckNsYXNzOiAnc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXInLFxuICAgICAgICAgICAgLy8gT2JzZXJ2ZXJcbiAgICAgICAgICAgIG9ic2VydmVyOiBmYWxzZSxcbiAgICAgICAgICAgIG9ic2VydmVQYXJlbnRzOiBmYWxzZSxcbiAgICAgICAgICAgIC8vIEFjY2Vzc2liaWxpdHlcbiAgICAgICAgICAgIGExMXk6IGZhbHNlLFxuICAgICAgICAgICAgcHJldlNsaWRlTWVzc2FnZTogJ1ByZXZpb3VzIHNsaWRlJyxcbiAgICAgICAgICAgIG5leHRTbGlkZU1lc3NhZ2U6ICdOZXh0IHNsaWRlJyxcbiAgICAgICAgICAgIGZpcnN0U2xpZGVNZXNzYWdlOiAnVGhpcyBpcyB0aGUgZmlyc3Qgc2xpZGUnLFxuICAgICAgICAgICAgbGFzdFNsaWRlTWVzc2FnZTogJ1RoaXMgaXMgdGhlIGxhc3Qgc2xpZGUnLFxuICAgICAgICAgICAgcGFnaW5hdGlvbkJ1bGxldE1lc3NhZ2U6ICdHbyB0byBzbGlkZSB7e2luZGV4fX0nLFxuICAgICAgICAgICAgLy8gQ2FsbGJhY2tzXG4gICAgICAgICAgICBydW5DYWxsYmFja3NPbkluaXQ6IHRydWVcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICBDYWxsYmFja3M6XG4gICAgICAgICAgICBvbkluaXQ6IGZ1bmN0aW9uIChzd2lwZXIpXG4gICAgICAgICAgICBvbkRlc3Ryb3k6IGZ1bmN0aW9uIChzd2lwZXIpXG4gICAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiAoc3dpcGVyLCBlKVxuICAgICAgICAgICAgb25UYXA6IGZ1bmN0aW9uIChzd2lwZXIsIGUpXG4gICAgICAgICAgICBvbkRvdWJsZVRhcDogZnVuY3Rpb24gKHN3aXBlciwgZSlcbiAgICAgICAgICAgIG9uU2xpZGVyTW92ZTogZnVuY3Rpb24gKHN3aXBlciwgZSlcbiAgICAgICAgICAgIG9uU2xpZGVDaGFuZ2VTdGFydDogZnVuY3Rpb24gKHN3aXBlcilcbiAgICAgICAgICAgIG9uU2xpZGVDaGFuZ2VFbmQ6IGZ1bmN0aW9uIChzd2lwZXIpXG4gICAgICAgICAgICBvblRyYW5zaXRpb25TdGFydDogZnVuY3Rpb24gKHN3aXBlcilcbiAgICAgICAgICAgIG9uVHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gKHN3aXBlcilcbiAgICAgICAgICAgIG9uSW1hZ2VzUmVhZHk6IGZ1bmN0aW9uIChzd2lwZXIpXG4gICAgICAgICAgICBvblByb2dyZXNzOiBmdW5jdGlvbiAoc3dpcGVyLCBwcm9ncmVzcylcbiAgICAgICAgICAgIG9uVG91Y2hTdGFydDogZnVuY3Rpb24gKHN3aXBlciwgZSlcbiAgICAgICAgICAgIG9uVG91Y2hNb3ZlOiBmdW5jdGlvbiAoc3dpcGVyLCBlKVxuICAgICAgICAgICAgb25Ub3VjaE1vdmVPcHBvc2l0ZTogZnVuY3Rpb24gKHN3aXBlciwgZSlcbiAgICAgICAgICAgIG9uVG91Y2hFbmQ6IGZ1bmN0aW9uIChzd2lwZXIsIGUpXG4gICAgICAgICAgICBvblJlYWNoQmVnaW5uaW5nOiBmdW5jdGlvbiAoc3dpcGVyKVxuICAgICAgICAgICAgb25SZWFjaEVuZDogZnVuY3Rpb24gKHN3aXBlcilcbiAgICAgICAgICAgIG9uU2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gKHN3aXBlciwgZHVyYXRpb24pXG4gICAgICAgICAgICBvblNldFRyYW5zbGF0ZTogZnVuY3Rpb24gKHN3aXBlciwgdHJhbnNsYXRlKVxuICAgICAgICAgICAgb25BdXRvcGxheVN0YXJ0OiBmdW5jdGlvbiAoc3dpcGVyKVxuICAgICAgICAgICAgb25BdXRvcGxheVN0b3A6IGZ1bmN0aW9uIChzd2lwZXIpLFxuICAgICAgICAgICAgb25MYXp5SW1hZ2VMb2FkOiBmdW5jdGlvbiAoc3dpcGVyLCBzbGlkZSwgaW1hZ2UpXG4gICAgICAgICAgICBvbkxhenlJbWFnZVJlYWR5OiBmdW5jdGlvbiAoc3dpcGVyLCBzbGlkZSwgaW1hZ2UpXG4gICAgICAgICAgICAqL1xuICAgICAgICBcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGluaXRpYWxWaXJ0dWFsVHJhbnNsYXRlID0gcGFyYW1zICYmIHBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlO1xuICAgICAgICBcbiAgICAgICAgcGFyYW1zID0gcGFyYW1zIHx8IHt9O1xuICAgICAgICB2YXIgb3JpZ2luYWxQYXJhbXMgPSB7fTtcbiAgICAgICAgZm9yICh2YXIgcGFyYW0gaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHBhcmFtc1twYXJhbV0gPT09ICdvYmplY3QnICYmIHBhcmFtc1twYXJhbV0gIT09IG51bGwgJiYgIShwYXJhbXNbcGFyYW1dLm5vZGVUeXBlIHx8IHBhcmFtc1twYXJhbV0gPT09IHdpbmRvdyB8fCBwYXJhbXNbcGFyYW1dID09PSBkb2N1bWVudCB8fCAodHlwZW9mIERvbTcgIT09ICd1bmRlZmluZWQnICYmIHBhcmFtc1twYXJhbV0gaW5zdGFuY2VvZiBEb203KSB8fCAodHlwZW9mIGpRdWVyeSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGFyYW1zW3BhcmFtXSBpbnN0YW5jZW9mIGpRdWVyeSkpKSB7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxQYXJhbXNbcGFyYW1dID0ge307XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgZGVlcFBhcmFtIGluIHBhcmFtc1twYXJhbV0pIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxQYXJhbXNbcGFyYW1dW2RlZXBQYXJhbV0gPSBwYXJhbXNbcGFyYW1dW2RlZXBQYXJhbV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxQYXJhbXNbcGFyYW1dID0gcGFyYW1zW3BhcmFtXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBkZWYgaW4gZGVmYXVsdHMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyYW1zW2RlZl0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2RlZl0gPSBkZWZhdWx0c1tkZWZdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHBhcmFtc1tkZWZdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGRlZXBEZWYgaW4gZGVmYXVsdHNbZGVmXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHBhcmFtc1tkZWZdW2RlZXBEZWZdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zW2RlZl1bZGVlcERlZl0gPSBkZWZhdWx0c1tkZWZdW2RlZXBEZWZdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBTd2lwZXJcbiAgICAgICAgdmFyIHMgPSB0aGlzO1xuICAgICAgICBcbiAgICAgICAgLy8gUGFyYW1zXG4gICAgICAgIHMucGFyYW1zID0gcGFyYW1zO1xuICAgICAgICBzLm9yaWdpbmFsUGFyYW1zID0gb3JpZ2luYWxQYXJhbXM7XG4gICAgICAgIFxuICAgICAgICAvLyBDbGFzc25hbWVcbiAgICAgICAgcy5jbGFzc05hbWVzID0gW107XG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIERvbSBMaWJyYXJ5IGFuZCBwbHVnaW5zXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgaWYgKHR5cGVvZiAkICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgRG9tNyAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICAgICAgJCA9IERvbTc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiAkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBEb203ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICQgPSB3aW5kb3cuRG9tNyB8fCB3aW5kb3cuWmVwdG8gfHwgd2luZG93LmpRdWVyeTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICQgPSBEb203O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCEkKSByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRXhwb3J0IGl0IHRvIFN3aXBlciBpbnN0YW5jZVxuICAgICAgICBzLiQgPSAkO1xuICAgICAgICBcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgQnJlYWtwb2ludHNcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBzLmN1cnJlbnRCcmVha3BvaW50ID0gdW5kZWZpbmVkO1xuICAgICAgICBzLmdldEFjdGl2ZUJyZWFrcG9pbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvL0dldCBicmVha3BvaW50IGZvciB3aW5kb3cgd2lkdGhcbiAgICAgICAgICAgIGlmICghcy5wYXJhbXMuYnJlYWtwb2ludHMpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIHZhciBicmVha3BvaW50ID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgcG9pbnRzID0gW10sIHBvaW50O1xuICAgICAgICAgICAgZm9yICggcG9pbnQgaW4gcy5wYXJhbXMuYnJlYWtwb2ludHMgKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmJyZWFrcG9pbnRzLmhhc093blByb3BlcnR5KHBvaW50KSkge1xuICAgICAgICAgICAgICAgICAgICBwb2ludHMucHVzaChwb2ludCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9pbnRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoYSwgMTApID4gcGFyc2VJbnQoYiwgMTApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHBvaW50ID0gcG9pbnRzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChwb2ludCA+PSB3aW5kb3cuaW5uZXJXaWR0aCAmJiAhYnJlYWtwb2ludCkge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50ID0gcG9pbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGJyZWFrcG9pbnQgfHwgJ21heCc7XG4gICAgICAgIH07XG4gICAgICAgIHMuc2V0QnJlYWtwb2ludCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vU2V0IGJyZWFrcG9pbnQgZm9yIHdpbmRvdyB3aWR0aCBhbmQgdXBkYXRlIHBhcmFtZXRlcnNcbiAgICAgICAgICAgIHZhciBicmVha3BvaW50ID0gcy5nZXRBY3RpdmVCcmVha3BvaW50KCk7XG4gICAgICAgICAgICBpZiAoYnJlYWtwb2ludCAmJiBzLmN1cnJlbnRCcmVha3BvaW50ICE9PSBicmVha3BvaW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGJyZWFrUG9pbnRzUGFyYW1zID0gYnJlYWtwb2ludCBpbiBzLnBhcmFtcy5icmVha3BvaW50cyA/IHMucGFyYW1zLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdIDogcy5vcmlnaW5hbFBhcmFtcztcbiAgICAgICAgICAgICAgICB2YXIgbmVlZHNSZUxvb3AgPSBzLnBhcmFtcy5sb29wICYmIChicmVha1BvaW50c1BhcmFtcy5zbGlkZXNQZXJWaWV3ICE9PSBzLnBhcmFtcy5zbGlkZXNQZXJWaWV3KTtcbiAgICAgICAgICAgICAgICBmb3IgKCB2YXIgcGFyYW0gaW4gYnJlYWtQb2ludHNQYXJhbXMgKSB7XG4gICAgICAgICAgICAgICAgICAgIHMucGFyYW1zW3BhcmFtXSA9IGJyZWFrUG9pbnRzUGFyYW1zW3BhcmFtXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcy5jdXJyZW50QnJlYWtwb2ludCA9IGJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgaWYobmVlZHNSZUxvb3AgJiYgcy5kZXN0cm95TG9vcCkge1xuICAgICAgICAgICAgICAgICAgICBzLnJlTG9vcCh0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIFNldCBicmVha3BvaW50IG9uIGxvYWRcbiAgICAgICAgaWYgKHMucGFyYW1zLmJyZWFrcG9pbnRzKSB7XG4gICAgICAgICAgICBzLnNldEJyZWFrcG9pbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgUHJlcGFyYXRpb24gLSBEZWZpbmUgQ29udGFpbmVyLCBXcmFwcGVyIGFuZCBQYWdpbmF0aW9uXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcy5jb250YWluZXIgPSAkKGNvbnRhaW5lcik7XG4gICAgICAgIGlmIChzLmNvbnRhaW5lci5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICAgICAgaWYgKHMuY29udGFpbmVyLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHZhciBzd2lwZXJzID0gW107XG4gICAgICAgICAgICBzLmNvbnRhaW5lci5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyID0gdGhpcztcbiAgICAgICAgICAgICAgICBzd2lwZXJzLnB1c2gobmV3IFN3aXBlcih0aGlzLCBwYXJhbXMpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHN3aXBlcnM7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIFNhdmUgaW5zdGFuY2UgaW4gY29udGFpbmVyIEhUTUwgRWxlbWVudCBhbmQgaW4gZGF0YVxuICAgICAgICBzLmNvbnRhaW5lclswXS5zd2lwZXIgPSBzO1xuICAgICAgICBzLmNvbnRhaW5lci5kYXRhKCdzd2lwZXInLCBzKTtcbiAgICAgICAgXG4gICAgICAgIHMuY2xhc3NOYW1lcy5wdXNoKCdzd2lwZXItY29udGFpbmVyLScgKyBzLnBhcmFtcy5kaXJlY3Rpb24pO1xuICAgICAgICBcbiAgICAgICAgaWYgKHMucGFyYW1zLmZyZWVNb2RlKSB7XG4gICAgICAgICAgICBzLmNsYXNzTmFtZXMucHVzaCgnc3dpcGVyLWNvbnRhaW5lci1mcmVlLW1vZGUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXMuc3VwcG9ydC5mbGV4Ym94KSB7XG4gICAgICAgICAgICBzLmNsYXNzTmFtZXMucHVzaCgnc3dpcGVyLWNvbnRhaW5lci1uby1mbGV4Ym94Jyk7XG4gICAgICAgICAgICBzLnBhcmFtcy5zbGlkZXNQZXJDb2x1bW4gPSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzLnBhcmFtcy5hdXRvSGVpZ2h0KSB7XG4gICAgICAgICAgICBzLmNsYXNzTmFtZXMucHVzaCgnc3dpcGVyLWNvbnRhaW5lci1hdXRvaGVpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRW5hYmxlIHNsaWRlcyBwcm9ncmVzcyB3aGVuIHJlcXVpcmVkXG4gICAgICAgIGlmIChzLnBhcmFtcy5wYXJhbGxheCB8fCBzLnBhcmFtcy53YXRjaFNsaWRlc1Zpc2liaWxpdHkpIHtcbiAgICAgICAgICAgIHMucGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3MgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIENvdmVyZmxvdyAvIDNEXG4gICAgICAgIGlmIChbJ2N1YmUnLCAnY292ZXJmbG93JywgJ2ZsaXAnXS5pbmRleE9mKHMucGFyYW1zLmVmZmVjdCkgPj0gMCkge1xuICAgICAgICAgICAgaWYgKHMuc3VwcG9ydC50cmFuc2Zvcm1zM2QpIHtcbiAgICAgICAgICAgICAgICBzLnBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzLmNsYXNzTmFtZXMucHVzaCgnc3dpcGVyLWNvbnRhaW5lci0zZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcy5wYXJhbXMuZWZmZWN0ID0gJ3NsaWRlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocy5wYXJhbXMuZWZmZWN0ICE9PSAnc2xpZGUnKSB7XG4gICAgICAgICAgICBzLmNsYXNzTmFtZXMucHVzaCgnc3dpcGVyLWNvbnRhaW5lci0nICsgcy5wYXJhbXMuZWZmZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocy5wYXJhbXMuZWZmZWN0ID09PSAnY3ViZScpIHtcbiAgICAgICAgICAgIHMucGFyYW1zLnJlc2lzdGFuY2VSYXRpbyA9IDA7XG4gICAgICAgICAgICBzLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID0gMTtcbiAgICAgICAgICAgIHMucGFyYW1zLnNsaWRlc1BlckNvbHVtbiA9IDE7XG4gICAgICAgICAgICBzLnBhcmFtcy5zbGlkZXNQZXJHcm91cCA9IDE7XG4gICAgICAgICAgICBzLnBhcmFtcy5jZW50ZXJlZFNsaWRlcyA9IGZhbHNlO1xuICAgICAgICAgICAgcy5wYXJhbXMuc3BhY2VCZXR3ZWVuID0gMDtcbiAgICAgICAgICAgIHMucGFyYW1zLnZpcnR1YWxUcmFuc2xhdGUgPSB0cnVlO1xuICAgICAgICAgICAgcy5wYXJhbXMuc2V0V3JhcHBlclNpemUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocy5wYXJhbXMuZWZmZWN0ID09PSAnZmFkZScgfHwgcy5wYXJhbXMuZWZmZWN0ID09PSAnZmxpcCcpIHtcbiAgICAgICAgICAgIHMucGFyYW1zLnNsaWRlc1BlclZpZXcgPSAxO1xuICAgICAgICAgICAgcy5wYXJhbXMuc2xpZGVzUGVyQ29sdW1uID0gMTtcbiAgICAgICAgICAgIHMucGFyYW1zLnNsaWRlc1Blckdyb3VwID0gMTtcbiAgICAgICAgICAgIHMucGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3MgPSB0cnVlO1xuICAgICAgICAgICAgcy5wYXJhbXMuc3BhY2VCZXR3ZWVuID0gMDtcbiAgICAgICAgICAgIHMucGFyYW1zLnNldFdyYXBwZXJTaXplID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGluaXRpYWxWaXJ0dWFsVHJhbnNsYXRlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHMucGFyYW1zLnZpcnR1YWxUcmFuc2xhdGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBHcmFiIEN1cnNvclxuICAgICAgICBpZiAocy5wYXJhbXMuZ3JhYkN1cnNvciAmJiBzLnN1cHBvcnQudG91Y2gpIHtcbiAgICAgICAgICAgIHMucGFyYW1zLmdyYWJDdXJzb3IgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gV3JhcHBlclxuICAgICAgICBzLndyYXBwZXIgPSBzLmNvbnRhaW5lci5jaGlsZHJlbignLicgKyBzLnBhcmFtcy53cmFwcGVyQ2xhc3MpO1xuICAgICAgICBcbiAgICAgICAgLy8gUGFnaW5hdGlvblxuICAgICAgICBpZiAocy5wYXJhbXMucGFnaW5hdGlvbikge1xuICAgICAgICAgICAgcy5wYWdpbmF0aW9uQ29udGFpbmVyID0gJChzLnBhcmFtcy5wYWdpbmF0aW9uKTtcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy51bmlxdWVOYXZFbGVtZW50cyAmJiB0eXBlb2Ygcy5wYXJhbXMucGFnaW5hdGlvbiA9PT0gJ3N0cmluZycgJiYgcy5wYWdpbmF0aW9uQ29udGFpbmVyLmxlbmd0aCA+IDEgJiYgcy5jb250YWluZXIuZmluZChzLnBhcmFtcy5wYWdpbmF0aW9uKS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBzLnBhZ2luYXRpb25Db250YWluZXIgPSBzLmNvbnRhaW5lci5maW5kKHMucGFyYW1zLnBhZ2luYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wYWdpbmF0aW9uVHlwZSA9PT0gJ2J1bGxldHMnICYmIHMucGFyYW1zLnBhZ2luYXRpb25DbGlja2FibGUpIHtcbiAgICAgICAgICAgICAgICBzLnBhZ2luYXRpb25Db250YWluZXIuYWRkQ2xhc3MoJ3N3aXBlci1wYWdpbmF0aW9uLWNsaWNrYWJsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcy5wYXJhbXMucGFnaW5hdGlvbkNsaWNrYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcy5wYWdpbmF0aW9uQ29udGFpbmVyLmFkZENsYXNzKCdzd2lwZXItcGFnaW5hdGlvbi0nICsgcy5wYXJhbXMucGFnaW5hdGlvblR5cGUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5leHQvUHJldiBCdXR0b25zXG4gICAgICAgIGlmIChzLnBhcmFtcy5uZXh0QnV0dG9uIHx8IHMucGFyYW1zLnByZXZCdXR0b24pIHtcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5uZXh0QnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgcy5uZXh0QnV0dG9uID0gJChzLnBhcmFtcy5uZXh0QnV0dG9uKTtcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMudW5pcXVlTmF2RWxlbWVudHMgJiYgdHlwZW9mIHMucGFyYW1zLm5leHRCdXR0b24gPT09ICdzdHJpbmcnICYmIHMubmV4dEJ1dHRvbi5sZW5ndGggPiAxICYmIHMuY29udGFpbmVyLmZpbmQocy5wYXJhbXMubmV4dEJ1dHRvbikubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHMubmV4dEJ1dHRvbiA9IHMuY29udGFpbmVyLmZpbmQocy5wYXJhbXMubmV4dEJ1dHRvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnByZXZCdXR0b24pIHtcbiAgICAgICAgICAgICAgICBzLnByZXZCdXR0b24gPSAkKHMucGFyYW1zLnByZXZCdXR0b24pO1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy51bmlxdWVOYXZFbGVtZW50cyAmJiB0eXBlb2Ygcy5wYXJhbXMucHJldkJ1dHRvbiA9PT0gJ3N0cmluZycgJiYgcy5wcmV2QnV0dG9uLmxlbmd0aCA+IDEgJiYgcy5jb250YWluZXIuZmluZChzLnBhcmFtcy5wcmV2QnV0dG9uKS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5wcmV2QnV0dG9uID0gcy5jb250YWluZXIuZmluZChzLnBhcmFtcy5wcmV2QnV0dG9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIElzIEhvcml6b250YWxcbiAgICAgICAgcy5pc0hvcml6b250YWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gcy5wYXJhbXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCc7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHMuaXNIID0gaXNIO1xuICAgICAgICBcbiAgICAgICAgLy8gUlRMXG4gICAgICAgIHMucnRsID0gcy5pc0hvcml6b250YWwoKSAmJiAocy5jb250YWluZXJbMF0uZGlyLnRvTG93ZXJDYXNlKCkgPT09ICdydGwnIHx8IHMuY29udGFpbmVyLmNzcygnZGlyZWN0aW9uJykgPT09ICdydGwnKTtcbiAgICAgICAgaWYgKHMucnRsKSB7XG4gICAgICAgICAgICBzLmNsYXNzTmFtZXMucHVzaCgnc3dpcGVyLWNvbnRhaW5lci1ydGwnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gV3JvbmcgUlRMIHN1cHBvcnRcbiAgICAgICAgaWYgKHMucnRsKSB7XG4gICAgICAgICAgICBzLndyb25nUlRMID0gcy53cmFwcGVyLmNzcygnZGlzcGxheScpID09PSAnLXdlYmtpdC1ib3gnO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBDb2x1bW5zXG4gICAgICAgIGlmIChzLnBhcmFtcy5zbGlkZXNQZXJDb2x1bW4gPiAxKSB7XG4gICAgICAgICAgICBzLmNsYXNzTmFtZXMucHVzaCgnc3dpcGVyLWNvbnRhaW5lci1tdWx0aXJvdycpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBDaGVjayBmb3IgQW5kcm9pZFxuICAgICAgICBpZiAocy5kZXZpY2UuYW5kcm9pZCkge1xuICAgICAgICAgICAgcy5jbGFzc05hbWVzLnB1c2goJ3N3aXBlci1jb250YWluZXItYW5kcm9pZCcpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBBZGQgY2xhc3Nlc1xuICAgICAgICBzLmNvbnRhaW5lci5hZGRDbGFzcyhzLmNsYXNzTmFtZXMuam9pbignICcpKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFRyYW5zbGF0ZVxuICAgICAgICBzLnRyYW5zbGF0ZSA9IDA7XG4gICAgICAgIFxuICAgICAgICAvLyBQcm9ncmVzc1xuICAgICAgICBzLnByb2dyZXNzID0gMDtcbiAgICAgICAgXG4gICAgICAgIC8vIFZlbG9jaXR5XG4gICAgICAgIHMudmVsb2NpdHkgPSAwO1xuICAgICAgICBcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgTG9ja3MsIHVubG9ja3NcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBzLmxvY2tTd2lwZVRvTmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHMucGFyYW1zLmFsbG93U3dpcGVUb05leHQgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgcy5sb2NrU3dpcGVUb1ByZXYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzLnBhcmFtcy5hbGxvd1N3aXBlVG9QcmV2ID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIHMubG9ja1N3aXBlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHMucGFyYW1zLmFsbG93U3dpcGVUb05leHQgPSBzLnBhcmFtcy5hbGxvd1N3aXBlVG9QcmV2ID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIHMudW5sb2NrU3dpcGVUb05leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzLnBhcmFtcy5hbGxvd1N3aXBlVG9OZXh0ID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgcy51bmxvY2tTd2lwZVRvUHJldiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHMucGFyYW1zLmFsbG93U3dpcGVUb1ByZXYgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBzLnVubG9ja1N3aXBlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHMucGFyYW1zLmFsbG93U3dpcGVUb05leHQgPSBzLnBhcmFtcy5hbGxvd1N3aXBlVG9QcmV2ID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIFJvdW5kIGhlbHBlclxuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIGZ1bmN0aW9uIHJvdW5kKGEpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKGEpO1xuICAgICAgICB9XG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIFNldCBncmFiIGN1cnNvclxuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIGlmIChzLnBhcmFtcy5ncmFiQ3Vyc29yKSB7XG4gICAgICAgICAgICBzLmNvbnRhaW5lclswXS5zdHlsZS5jdXJzb3IgPSAnbW92ZSc7XG4gICAgICAgICAgICBzLmNvbnRhaW5lclswXS5zdHlsZS5jdXJzb3IgPSAnLXdlYmtpdC1ncmFiJztcbiAgICAgICAgICAgIHMuY29udGFpbmVyWzBdLnN0eWxlLmN1cnNvciA9ICctbW96LWdyYWInO1xuICAgICAgICAgICAgcy5jb250YWluZXJbMF0uc3R5bGUuY3Vyc29yID0gJ2dyYWInO1xuICAgICAgICB9XG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIFVwZGF0ZSBvbiBJbWFnZXMgUmVhZHlcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBzLmltYWdlc1RvTG9hZCA9IFtdO1xuICAgICAgICBzLmltYWdlc0xvYWRlZCA9IDA7XG4gICAgICAgIFxuICAgICAgICBzLmxvYWRJbWFnZSA9IGZ1bmN0aW9uIChpbWdFbGVtZW50LCBzcmMsIHNyY3NldCwgY2hlY2tGb3JDb21wbGV0ZSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBpbWFnZTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uUmVhZHkgKCkge1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaW1nRWxlbWVudC5jb21wbGV0ZSB8fCAhY2hlY2tGb3JDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIGlmIChzcmMpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2UgPSBuZXcgd2luZG93LkltYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9IG9uUmVhZHk7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlLm9uZXJyb3IgPSBvblJlYWR5O1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3Jjc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZS5zcmNzZXQgPSBzcmNzZXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNyYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gc3JjO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb25SZWFkeSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2Ugey8vaW1hZ2UgYWxyZWFkeSBsb2FkZWQuLi5cbiAgICAgICAgICAgICAgICBvblJlYWR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHMucHJlbG9hZEltYWdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHMuaW1hZ2VzVG9Mb2FkID0gcy5jb250YWluZXIuZmluZCgnaW1nJyk7XG4gICAgICAgICAgICBmdW5jdGlvbiBfb25SZWFkeSgpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHMgPT09ICd1bmRlZmluZWQnIHx8IHMgPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAocy5pbWFnZXNMb2FkZWQgIT09IHVuZGVmaW5lZCkgcy5pbWFnZXNMb2FkZWQrKztcbiAgICAgICAgICAgICAgICBpZiAocy5pbWFnZXNMb2FkZWQgPT09IHMuaW1hZ2VzVG9Mb2FkLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMudXBkYXRlT25JbWFnZXNSZWFkeSkgcy51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgcy5lbWl0KCdvbkltYWdlc1JlYWR5Jywgcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzLmltYWdlc1RvTG9hZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHMubG9hZEltYWdlKHMuaW1hZ2VzVG9Mb2FkW2ldLCAocy5pbWFnZXNUb0xvYWRbaV0uY3VycmVudFNyYyB8fCBzLmltYWdlc1RvTG9hZFtpXS5nZXRBdHRyaWJ1dGUoJ3NyYycpKSwgKHMuaW1hZ2VzVG9Mb2FkW2ldLnNyY3NldCB8fCBzLmltYWdlc1RvTG9hZFtpXS5nZXRBdHRyaWJ1dGUoJ3NyY3NldCcpKSwgdHJ1ZSwgX29uUmVhZHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgQXV0b3BsYXlcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBzLmF1dG9wbGF5VGltZW91dElkID0gdW5kZWZpbmVkO1xuICAgICAgICBzLmF1dG9wbGF5aW5nID0gZmFsc2U7XG4gICAgICAgIHMuYXV0b3BsYXlQYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgZnVuY3Rpb24gYXV0b3BsYXkoKSB7XG4gICAgICAgICAgICBzLmF1dG9wbGF5VGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgcy5maXhMb29wKCk7XG4gICAgICAgICAgICAgICAgICAgIHMuX3NsaWRlTmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICBzLmVtaXQoJ29uQXV0b3BsYXknLCBzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcy5pc0VuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5fc2xpZGVOZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLmVtaXQoJ29uQXV0b3BsYXknLCBzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcGFyYW1zLmF1dG9wbGF5U3RvcE9uTGFzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuX3NsaWRlVG8oMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5lbWl0KCdvbkF1dG9wbGF5Jywgcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnN0b3BBdXRvcGxheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgcy5wYXJhbXMuYXV0b3BsYXkpO1xuICAgICAgICB9XG4gICAgICAgIHMuc3RhcnRBdXRvcGxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygcy5hdXRvcGxheVRpbWVvdXRJZCAhPT0gJ3VuZGVmaW5lZCcpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGlmICghcy5wYXJhbXMuYXV0b3BsYXkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGlmIChzLmF1dG9wbGF5aW5nKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBzLmF1dG9wbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHMuZW1pdCgnb25BdXRvcGxheVN0YXJ0Jywgcyk7XG4gICAgICAgICAgICBhdXRvcGxheSgpO1xuICAgICAgICB9O1xuICAgICAgICBzLnN0b3BBdXRvcGxheSA9IGZ1bmN0aW9uIChpbnRlcm5hbCkge1xuICAgICAgICAgICAgaWYgKCFzLmF1dG9wbGF5VGltZW91dElkKSByZXR1cm47XG4gICAgICAgICAgICBpZiAocy5hdXRvcGxheVRpbWVvdXRJZCkgY2xlYXJUaW1lb3V0KHMuYXV0b3BsYXlUaW1lb3V0SWQpO1xuICAgICAgICAgICAgcy5hdXRvcGxheWluZyA9IGZhbHNlO1xuICAgICAgICAgICAgcy5hdXRvcGxheVRpbWVvdXRJZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHMuZW1pdCgnb25BdXRvcGxheVN0b3AnLCBzKTtcbiAgICAgICAgfTtcbiAgICAgICAgcy5wYXVzZUF1dG9wbGF5ID0gZnVuY3Rpb24gKHNwZWVkKSB7XG4gICAgICAgICAgICBpZiAocy5hdXRvcGxheVBhdXNlZCkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKHMuYXV0b3BsYXlUaW1lb3V0SWQpIGNsZWFyVGltZW91dChzLmF1dG9wbGF5VGltZW91dElkKTtcbiAgICAgICAgICAgIHMuYXV0b3BsYXlQYXVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHNwZWVkID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcy5hdXRvcGxheVBhdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGF1dG9wbGF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzLndyYXBwZXIudHJhbnNpdGlvbkVuZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcykgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBzLmF1dG9wbGF5UGF1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcy5hdXRvcGxheWluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5zdG9wQXV0b3BsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgTWluL01heCBUcmFuc2xhdGVcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBzLm1pblRyYW5zbGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAoLXMuc25hcEdyaWRbMF0pO1xuICAgICAgICB9O1xuICAgICAgICBzLm1heFRyYW5zbGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAoLXMuc25hcEdyaWRbcy5zbmFwR3JpZC5sZW5ndGggLSAxXSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIFNsaWRlci9zbGlkZXMgc2l6ZXNcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBzLnVwZGF0ZUF1dG9IZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBVcGRhdGUgSGVpZ2h0XG4gICAgICAgICAgICB2YXIgc2xpZGUgPSBzLnNsaWRlcy5lcShzLmFjdGl2ZUluZGV4KVswXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc2xpZGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0hlaWdodCA9IHNsaWRlLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICBpZiAobmV3SGVpZ2h0KSBzLndyYXBwZXIuY3NzKCdoZWlnaHQnLCBuZXdIZWlnaHQgKyAncHgnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcy51cGRhdGVDb250YWluZXJTaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHdpZHRoLCBoZWlnaHQ7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHMucGFyYW1zLndpZHRoICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHdpZHRoID0gcy5wYXJhbXMud2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aWR0aCA9IHMuY29udGFpbmVyWzBdLmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzLnBhcmFtcy5oZWlnaHQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gcy5wYXJhbXMuaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gcy5jb250YWluZXJbMF0uY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHdpZHRoID09PSAwICYmIHMuaXNIb3Jpem9udGFsKCkgfHwgaGVpZ2h0ID09PSAwICYmICFzLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC8vU3VidHJhY3QgcGFkZGluZ3NcbiAgICAgICAgICAgIHdpZHRoID0gd2lkdGggLSBwYXJzZUludChzLmNvbnRhaW5lci5jc3MoJ3BhZGRpbmctbGVmdCcpLCAxMCkgLSBwYXJzZUludChzLmNvbnRhaW5lci5jc3MoJ3BhZGRpbmctcmlnaHQnKSwgMTApO1xuICAgICAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0IC0gcGFyc2VJbnQocy5jb250YWluZXIuY3NzKCdwYWRkaW5nLXRvcCcpLCAxMCkgLSBwYXJzZUludChzLmNvbnRhaW5lci5jc3MoJ3BhZGRpbmctYm90dG9tJyksIDEwKTtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyBTdG9yZSB2YWx1ZXNcbiAgICAgICAgICAgIHMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIHMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICAgICAgcy5zaXplID0gcy5pc0hvcml6b250YWwoKSA/IHMud2lkdGggOiBzLmhlaWdodDtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIHMudXBkYXRlU2xpZGVzU2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHMuc2xpZGVzID0gcy53cmFwcGVyLmNoaWxkcmVuKCcuJyArIHMucGFyYW1zLnNsaWRlQ2xhc3MpO1xuICAgICAgICAgICAgcy5zbmFwR3JpZCA9IFtdO1xuICAgICAgICAgICAgcy5zbGlkZXNHcmlkID0gW107XG4gICAgICAgICAgICBzLnNsaWRlc1NpemVzR3JpZCA9IFtdO1xuICAgICAgICBcbiAgICAgICAgICAgIHZhciBzcGFjZUJldHdlZW4gPSBzLnBhcmFtcy5zcGFjZUJldHdlZW4sXG4gICAgICAgICAgICAgICAgc2xpZGVQb3NpdGlvbiA9IC1zLnBhcmFtcy5zbGlkZXNPZmZzZXRCZWZvcmUsXG4gICAgICAgICAgICAgICAgaSxcbiAgICAgICAgICAgICAgICBwcmV2U2xpZGVTaXplID0gMCxcbiAgICAgICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHMuc2l6ZSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3BhY2VCZXR3ZWVuID09PSAnc3RyaW5nJyAmJiBzcGFjZUJldHdlZW4uaW5kZXhPZignJScpID49IDApIHtcbiAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW4gPSBwYXJzZUZsb2F0KHNwYWNlQmV0d2Vlbi5yZXBsYWNlKCclJywgJycpKSAvIDEwMCAqIHMuc2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBzLnZpcnR1YWxTaXplID0gLXNwYWNlQmV0d2VlbjtcbiAgICAgICAgICAgIC8vIHJlc2V0IG1hcmdpbnNcbiAgICAgICAgICAgIGlmIChzLnJ0bCkgcy5zbGlkZXMuY3NzKHttYXJnaW5MZWZ0OiAnJywgbWFyZ2luVG9wOiAnJ30pO1xuICAgICAgICAgICAgZWxzZSBzLnNsaWRlcy5jc3Moe21hcmdpblJpZ2h0OiAnJywgbWFyZ2luQm90dG9tOiAnJ30pO1xuICAgICAgICBcbiAgICAgICAgICAgIHZhciBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzO1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNsaWRlc1BlckNvbHVtbiA+IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5mbG9vcihzLnNsaWRlcy5sZW5ndGggLyBzLnBhcmFtcy5zbGlkZXNQZXJDb2x1bW4pID09PSBzLnNsaWRlcy5sZW5ndGggLyBzLnBhcmFtcy5zbGlkZXNQZXJDb2x1bW4pIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzTnVtYmVyRXZlblRvUm93cyA9IHMuc2xpZGVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc051bWJlckV2ZW5Ub1Jvd3MgPSBNYXRoLmNlaWwocy5zbGlkZXMubGVuZ3RoIC8gcy5wYXJhbXMuc2xpZGVzUGVyQ29sdW1uKSAqIHMucGFyYW1zLnNsaWRlc1BlckNvbHVtbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNsaWRlc1BlclZpZXcgIT09ICdhdXRvJyAmJiBzLnBhcmFtcy5zbGlkZXNQZXJDb2x1bW5GaWxsID09PSAncm93Jykge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzID0gTWF0aC5tYXgoc2xpZGVzTnVtYmVyRXZlblRvUm93cywgcy5wYXJhbXMuc2xpZGVzUGVyVmlldyAqIHMucGFyYW1zLnNsaWRlc1BlckNvbHVtbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC8vIENhbGMgc2xpZGVzXG4gICAgICAgICAgICB2YXIgc2xpZGVTaXplO1xuICAgICAgICAgICAgdmFyIHNsaWRlc1BlckNvbHVtbiA9IHMucGFyYW1zLnNsaWRlc1BlckNvbHVtbjtcbiAgICAgICAgICAgIHZhciBzbGlkZXNQZXJSb3cgPSBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzIC8gc2xpZGVzUGVyQ29sdW1uO1xuICAgICAgICAgICAgdmFyIG51bUZ1bGxDb2x1bW5zID0gc2xpZGVzUGVyUm93IC0gKHMucGFyYW1zLnNsaWRlc1BlckNvbHVtbiAqIHNsaWRlc1BlclJvdyAtIHMuc2xpZGVzLmxlbmd0aCk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcy5zbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzbGlkZVNpemUgPSAwO1xuICAgICAgICAgICAgICAgIHZhciBzbGlkZSA9IHMuc2xpZGVzLmVxKGkpO1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5zbGlkZXNQZXJDb2x1bW4gPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNldCBzbGlkZXMgb3JkZXJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1NsaWRlT3JkZXJJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbHVtbiwgcm93O1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuc2xpZGVzUGVyQ29sdW1uRmlsbCA9PT0gJ2NvbHVtbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbiA9IE1hdGguZmxvb3IoaSAvIHNsaWRlc1BlckNvbHVtbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3cgPSBpIC0gY29sdW1uICogc2xpZGVzUGVyQ29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbHVtbiA+IG51bUZ1bGxDb2x1bW5zIHx8IChjb2x1bW4gPT09IG51bUZ1bGxDb2x1bW5zICYmIHJvdyA9PT0gc2xpZGVzUGVyQ29sdW1uLTEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCsrcm93ID49IHNsaWRlc1BlckNvbHVtbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4rKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdTbGlkZU9yZGVySW5kZXggPSBjb2x1bW4gKyByb3cgKiBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzIC8gc2xpZGVzUGVyQ29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXAnOiBuZXdTbGlkZU9yZGVySW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICctbW96LWJveC1vcmRpbmFsLWdyb3VwJzogbmV3U2xpZGVPcmRlckluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLW1zLWZsZXgtb3JkZXInOiBuZXdTbGlkZU9yZGVySW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICctd2Via2l0LW9yZGVyJzogbmV3U2xpZGVPcmRlckluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnb3JkZXInOiBuZXdTbGlkZU9yZGVySW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdyA9IE1hdGguZmxvb3IoaSAvIHNsaWRlc1BlclJvdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4gPSBpIC0gcm93ICogc2xpZGVzUGVyUm93O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlXG4gICAgICAgICAgICAgICAgICAgICAgICAuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbWFyZ2luLXRvcCc6IChyb3cgIT09IDAgJiYgcy5wYXJhbXMuc3BhY2VCZXR3ZWVuKSAmJiAocy5wYXJhbXMuc3BhY2VCZXR3ZWVuICsgJ3B4JylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zd2lwZXItY29sdW1uJywgY29sdW1uKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc3dpcGVyLXJvdycsIHJvdyk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc2xpZGUuY3NzKCdkaXNwbGF5JykgPT09ICdub25lJykgY29udGludWU7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJykge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZVNpemUgPSBzLmlzSG9yaXpvbnRhbCgpID8gc2xpZGUub3V0ZXJXaWR0aCh0cnVlKSA6IHNsaWRlLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMucm91bmRMZW5ndGhzKSBzbGlkZVNpemUgPSByb3VuZChzbGlkZVNpemUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVTaXplID0gKHMuc2l6ZSAtIChzLnBhcmFtcy5zbGlkZXNQZXJWaWV3IC0gMSkgKiBzcGFjZUJldHdlZW4pIC8gcy5wYXJhbXMuc2xpZGVzUGVyVmlldztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnJvdW5kTGVuZ3Rocykgc2xpZGVTaXplID0gcm91bmQoc2xpZGVTaXplKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnNsaWRlc1tpXS5zdHlsZS53aWR0aCA9IHNsaWRlU2l6ZSArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnNsaWRlc1tpXS5zdHlsZS5oZWlnaHQgPSBzbGlkZVNpemUgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHMuc2xpZGVzW2ldLnN3aXBlclNsaWRlU2l6ZSA9IHNsaWRlU2l6ZTtcbiAgICAgICAgICAgICAgICBzLnNsaWRlc1NpemVzR3JpZC5wdXNoKHNsaWRlU2l6ZSk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVQb3NpdGlvbiA9IHNsaWRlUG9zaXRpb24gKyBzbGlkZVNpemUgLyAyICsgcHJldlNsaWRlU2l6ZSAvIDIgKyBzcGFjZUJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSAwKSBzbGlkZVBvc2l0aW9uID0gc2xpZGVQb3NpdGlvbiAtIHMuc2l6ZSAvIDIgLSBzcGFjZUJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhzbGlkZVBvc2l0aW9uKSA8IDEgLyAxMDAwKSBzbGlkZVBvc2l0aW9uID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChpbmRleCkgJSBzLnBhcmFtcy5zbGlkZXNQZXJHcm91cCA9PT0gMCkgcy5zbmFwR3JpZC5wdXNoKHNsaWRlUG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBzLnNsaWRlc0dyaWQucHVzaChzbGlkZVBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoaW5kZXgpICUgcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXAgPT09IDApIHMuc25hcEdyaWQucHVzaChzbGlkZVBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgcy5zbGlkZXNHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlUG9zaXRpb24gPSBzbGlkZVBvc2l0aW9uICsgc2xpZGVTaXplICsgc3BhY2VCZXR3ZWVuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgcy52aXJ0dWFsU2l6ZSArPSBzbGlkZVNpemUgKyBzcGFjZUJldHdlZW47XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIHByZXZTbGlkZVNpemUgPSBzbGlkZVNpemU7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGluZGV4ICsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcy52aXJ0dWFsU2l6ZSA9IE1hdGgubWF4KHMudmlydHVhbFNpemUsIHMuc2l6ZSkgKyBzLnBhcmFtcy5zbGlkZXNPZmZzZXRBZnRlcjtcbiAgICAgICAgICAgIHZhciBuZXdTbGlkZXNHcmlkO1xuICAgICAgICBcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBzLnJ0bCAmJiBzLndyb25nUlRMICYmIChzLnBhcmFtcy5lZmZlY3QgPT09ICdzbGlkZScgfHwgcy5wYXJhbXMuZWZmZWN0ID09PSAnY292ZXJmbG93JykpIHtcbiAgICAgICAgICAgICAgICBzLndyYXBwZXIuY3NzKHt3aWR0aDogcy52aXJ0dWFsU2l6ZSArIHMucGFyYW1zLnNwYWNlQmV0d2VlbiArICdweCd9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcy5zdXBwb3J0LmZsZXhib3ggfHwgcy5wYXJhbXMuc2V0V3JhcHBlclNpemUpIHtcbiAgICAgICAgICAgICAgICBpZiAocy5pc0hvcml6b250YWwoKSkgcy53cmFwcGVyLmNzcyh7d2lkdGg6IHMudmlydHVhbFNpemUgKyBzLnBhcmFtcy5zcGFjZUJldHdlZW4gKyAncHgnfSk7XG4gICAgICAgICAgICAgICAgZWxzZSBzLndyYXBwZXIuY3NzKHtoZWlnaHQ6IHMudmlydHVhbFNpemUgKyBzLnBhcmFtcy5zcGFjZUJldHdlZW4gKyAncHgnfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNsaWRlc1BlckNvbHVtbiA+IDEpIHtcbiAgICAgICAgICAgICAgICBzLnZpcnR1YWxTaXplID0gKHNsaWRlU2l6ZSArIHMucGFyYW1zLnNwYWNlQmV0d2VlbikgKiBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzO1xuICAgICAgICAgICAgICAgIHMudmlydHVhbFNpemUgPSBNYXRoLmNlaWwocy52aXJ0dWFsU2l6ZSAvIHMucGFyYW1zLnNsaWRlc1BlckNvbHVtbikgLSBzLnBhcmFtcy5zcGFjZUJldHdlZW47XG4gICAgICAgICAgICAgICAgcy53cmFwcGVyLmNzcyh7d2lkdGg6IHMudmlydHVhbFNpemUgKyBzLnBhcmFtcy5zcGFjZUJldHdlZW4gKyAncHgnfSk7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1NsaWRlc0dyaWQgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHMuc25hcEdyaWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLnNuYXBHcmlkW2ldIDwgcy52aXJ0dWFsU2l6ZSArIHMuc25hcEdyaWRbMF0pIG5ld1NsaWRlc0dyaWQucHVzaChzLnNuYXBHcmlkW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzLnNuYXBHcmlkID0gbmV3U2xpZGVzR3JpZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gUmVtb3ZlIGxhc3QgZ3JpZCBlbGVtZW50cyBkZXBlbmRpbmcgb24gd2lkdGhcbiAgICAgICAgICAgIGlmICghcy5wYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgICAgICAgICAgICBuZXdTbGlkZXNHcmlkID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHMuc25hcEdyaWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMuc25hcEdyaWRbaV0gPD0gcy52aXJ0dWFsU2l6ZSAtIHMuc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3U2xpZGVzR3JpZC5wdXNoKHMuc25hcEdyaWRbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHMuc25hcEdyaWQgPSBuZXdTbGlkZXNHcmlkO1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmZsb29yKHMudmlydHVhbFNpemUgLSBzLnNpemUpIC0gTWF0aC5mbG9vcihzLnNuYXBHcmlkW3Muc25hcEdyaWQubGVuZ3RoIC0gMV0pID4gMSkge1xuICAgICAgICAgICAgICAgICAgICBzLnNuYXBHcmlkLnB1c2gocy52aXJ0dWFsU2l6ZSAtIHMuc2l6ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMuc25hcEdyaWQubGVuZ3RoID09PSAwKSBzLnNuYXBHcmlkID0gWzBdO1xuICAgICAgICBcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5zcGFjZUJldHdlZW4gIT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAocy5pc0hvcml6b250YWwoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5ydGwpIHMuc2xpZGVzLmNzcyh7bWFyZ2luTGVmdDogc3BhY2VCZXR3ZWVuICsgJ3B4J30pO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHMuc2xpZGVzLmNzcyh7bWFyZ2luUmlnaHQ6IHNwYWNlQmV0d2VlbiArICdweCd9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBzLnNsaWRlcy5jc3Moe21hcmdpbkJvdHRvbTogc3BhY2VCZXR3ZWVuICsgJ3B4J30pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICBzLnVwZGF0ZVNsaWRlc09mZnNldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBzLnVwZGF0ZVNsaWRlc09mZnNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcy5zbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzLnNsaWRlc1tpXS5zd2lwZXJTbGlkZU9mZnNldCA9IHMuaXNIb3Jpem9udGFsKCkgPyBzLnNsaWRlc1tpXS5vZmZzZXRMZWZ0IDogcy5zbGlkZXNbaV0ub2Zmc2V0VG9wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgU2xpZGVyL3NsaWRlcyBwcm9ncmVzc1xuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIHMudXBkYXRlU2xpZGVzUHJvZ3Jlc3MgPSBmdW5jdGlvbiAodHJhbnNsYXRlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRyYW5zbGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUgPSBzLnRyYW5zbGF0ZSB8fCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMuc2xpZGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzLnNsaWRlc1swXS5zd2lwZXJTbGlkZU9mZnNldCA9PT0gJ3VuZGVmaW5lZCcpIHMudXBkYXRlU2xpZGVzT2Zmc2V0KCk7XG4gICAgICAgIFxuICAgICAgICAgICAgdmFyIG9mZnNldENlbnRlciA9IC10cmFuc2xhdGU7XG4gICAgICAgICAgICBpZiAocy5ydGwpIG9mZnNldENlbnRlciA9IHRyYW5zbGF0ZTtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyBWaXNpYmxlIFNsaWRlc1xuICAgICAgICAgICAgcy5zbGlkZXMucmVtb3ZlQ2xhc3Mocy5wYXJhbXMuc2xpZGVWaXNpYmxlQ2xhc3MpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzLnNsaWRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBzbGlkZSA9IHMuc2xpZGVzW2ldO1xuICAgICAgICAgICAgICAgIHZhciBzbGlkZVByb2dyZXNzID0gKG9mZnNldENlbnRlciAtIHNsaWRlLnN3aXBlclNsaWRlT2Zmc2V0KSAvIChzbGlkZS5zd2lwZXJTbGlkZVNpemUgKyBzLnBhcmFtcy5zcGFjZUJldHdlZW4pO1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy53YXRjaFNsaWRlc1Zpc2liaWxpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlQmVmb3JlID0gLShvZmZzZXRDZW50ZXIgLSBzbGlkZS5zd2lwZXJTbGlkZU9mZnNldCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZUFmdGVyID0gc2xpZGVCZWZvcmUgKyBzLnNsaWRlc1NpemVzR3JpZFtpXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzVmlzaWJsZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAoc2xpZGVCZWZvcmUgPj0gMCAmJiBzbGlkZUJlZm9yZSA8IHMuc2l6ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIChzbGlkZUFmdGVyID4gMCAmJiBzbGlkZUFmdGVyIDw9IHMuc2l6ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIChzbGlkZUJlZm9yZSA8PSAwICYmIHNsaWRlQWZ0ZXIgPj0gcy5zaXplKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGlkZXMuZXEoaSkuYWRkQ2xhc3Mocy5wYXJhbXMuc2xpZGVWaXNpYmxlQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNsaWRlLnByb2dyZXNzID0gcy5ydGwgPyAtc2xpZGVQcm9ncmVzcyA6IHNsaWRlUHJvZ3Jlc3M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHMudXBkYXRlUHJvZ3Jlc3MgPSBmdW5jdGlvbiAodHJhbnNsYXRlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRyYW5zbGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUgPSBzLnRyYW5zbGF0ZSB8fCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHRyYW5zbGF0ZXNEaWZmID0gcy5tYXhUcmFuc2xhdGUoKSAtIHMubWluVHJhbnNsYXRlKCk7XG4gICAgICAgICAgICB2YXIgd2FzQmVnaW5uaW5nID0gcy5pc0JlZ2lubmluZztcbiAgICAgICAgICAgIHZhciB3YXNFbmQgPSBzLmlzRW5kO1xuICAgICAgICAgICAgaWYgKHRyYW5zbGF0ZXNEaWZmID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcy5wcm9ncmVzcyA9IDA7XG4gICAgICAgICAgICAgICAgcy5pc0JlZ2lubmluZyA9IHMuaXNFbmQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcy5wcm9ncmVzcyA9ICh0cmFuc2xhdGUgLSBzLm1pblRyYW5zbGF0ZSgpKSAvICh0cmFuc2xhdGVzRGlmZik7XG4gICAgICAgICAgICAgICAgcy5pc0JlZ2lubmluZyA9IHMucHJvZ3Jlc3MgPD0gMDtcbiAgICAgICAgICAgICAgICBzLmlzRW5kID0gcy5wcm9ncmVzcyA+PSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMuaXNCZWdpbm5pbmcgJiYgIXdhc0JlZ2lubmluZykgcy5lbWl0KCdvblJlYWNoQmVnaW5uaW5nJywgcyk7XG4gICAgICAgICAgICBpZiAocy5pc0VuZCAmJiAhd2FzRW5kKSBzLmVtaXQoJ29uUmVhY2hFbmQnLCBzKTtcbiAgICAgICAgXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcykgcy51cGRhdGVTbGlkZXNQcm9ncmVzcyh0cmFuc2xhdGUpO1xuICAgICAgICAgICAgcy5lbWl0KCdvblByb2dyZXNzJywgcywgcy5wcm9ncmVzcyk7XG4gICAgICAgIH07XG4gICAgICAgIHMudXBkYXRlQWN0aXZlSW5kZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdHJhbnNsYXRlID0gcy5ydGwgPyBzLnRyYW5zbGF0ZSA6IC1zLnRyYW5zbGF0ZTtcbiAgICAgICAgICAgIHZhciBuZXdBY3RpdmVJbmRleCwgaSwgc25hcEluZGV4O1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHMuc2xpZGVzR3JpZC5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHMuc2xpZGVzR3JpZFtpICsgMV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGUgPj0gcy5zbGlkZXNHcmlkW2ldICYmIHRyYW5zbGF0ZSA8IHMuc2xpZGVzR3JpZFtpICsgMV0gLSAocy5zbGlkZXNHcmlkW2kgKyAxXSAtIHMuc2xpZGVzR3JpZFtpXSkgLyAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdBY3RpdmVJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodHJhbnNsYXRlID49IHMuc2xpZGVzR3JpZFtpXSAmJiB0cmFuc2xhdGUgPCBzLnNsaWRlc0dyaWRbaSArIDFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdBY3RpdmVJbmRleCA9IGkgKyAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHJhbnNsYXRlID49IHMuc2xpZGVzR3JpZFtpXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QWN0aXZlSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTm9ybWFsaXplIHNsaWRlSW5kZXhcbiAgICAgICAgICAgIGlmIChuZXdBY3RpdmVJbmRleCA8IDAgfHwgdHlwZW9mIG5ld0FjdGl2ZUluZGV4ID09PSAndW5kZWZpbmVkJykgbmV3QWN0aXZlSW5kZXggPSAwO1xuICAgICAgICAgICAgLy8gZm9yIChpID0gMDsgaSA8IHMuc2xpZGVzR3JpZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vIGlmICgtIHRyYW5zbGF0ZSA+PSBzLnNsaWRlc0dyaWRbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbmV3QWN0aXZlSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIHNuYXBJbmRleCA9IE1hdGguZmxvb3IobmV3QWN0aXZlSW5kZXggLyBzLnBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG4gICAgICAgICAgICBpZiAoc25hcEluZGV4ID49IHMuc25hcEdyaWQubGVuZ3RoKSBzbmFwSW5kZXggPSBzLnNuYXBHcmlkLmxlbmd0aCAtIDE7XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKG5ld0FjdGl2ZUluZGV4ID09PSBzLmFjdGl2ZUluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcy5zbmFwSW5kZXggPSBzbmFwSW5kZXg7XG4gICAgICAgICAgICBzLnByZXZpb3VzSW5kZXggPSBzLmFjdGl2ZUluZGV4O1xuICAgICAgICAgICAgcy5hY3RpdmVJbmRleCA9IG5ld0FjdGl2ZUluZGV4O1xuICAgICAgICAgICAgcy51cGRhdGVDbGFzc2VzKCk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBDbGFzc2VzXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcy51cGRhdGVDbGFzc2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcy5zbGlkZXMucmVtb3ZlQ2xhc3Mocy5wYXJhbXMuc2xpZGVBY3RpdmVDbGFzcyArICcgJyArIHMucGFyYW1zLnNsaWRlTmV4dENsYXNzICsgJyAnICsgcy5wYXJhbXMuc2xpZGVQcmV2Q2xhc3MpO1xuICAgICAgICAgICAgdmFyIGFjdGl2ZVNsaWRlID0gcy5zbGlkZXMuZXEocy5hY3RpdmVJbmRleCk7XG4gICAgICAgICAgICAvLyBBY3RpdmUgY2xhc3Nlc1xuICAgICAgICAgICAgYWN0aXZlU2xpZGUuYWRkQ2xhc3Mocy5wYXJhbXMuc2xpZGVBY3RpdmVDbGFzcyk7XG4gICAgICAgICAgICAvLyBOZXh0IFNsaWRlXG4gICAgICAgICAgICB2YXIgbmV4dFNsaWRlID0gYWN0aXZlU2xpZGUubmV4dCgnLicgKyBzLnBhcmFtcy5zbGlkZUNsYXNzKS5hZGRDbGFzcyhzLnBhcmFtcy5zbGlkZU5leHRDbGFzcyk7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubG9vcCAmJiBuZXh0U2xpZGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcy5zbGlkZXMuZXEoMCkuYWRkQ2xhc3Mocy5wYXJhbXMuc2xpZGVOZXh0Q2xhc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUHJldiBTbGlkZVxuICAgICAgICAgICAgdmFyIHByZXZTbGlkZSA9IGFjdGl2ZVNsaWRlLnByZXYoJy4nICsgcy5wYXJhbXMuc2xpZGVDbGFzcykuYWRkQ2xhc3Mocy5wYXJhbXMuc2xpZGVQcmV2Q2xhc3MpO1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxvb3AgJiYgcHJldlNsaWRlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHMuc2xpZGVzLmVxKC0xKS5hZGRDbGFzcyhzLnBhcmFtcy5zbGlkZVByZXZDbGFzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gUGFnaW5hdGlvblxuICAgICAgICAgICAgaWYgKHMucGFnaW5hdGlvbkNvbnRhaW5lciAmJiBzLnBhZ2luYXRpb25Db250YWluZXIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIEN1cnJlbnQvVG90YWxcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudCxcbiAgICAgICAgICAgICAgICAgICAgdG90YWwgPSBzLnBhcmFtcy5sb29wID8gTWF0aC5jZWlsKChzLnNsaWRlcy5sZW5ndGggLSBzLmxvb3BlZFNsaWRlcyAqIDIpIC8gcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXApIDogcy5zbmFwR3JpZC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IE1hdGguY2VpbCgocy5hY3RpdmVJbmRleCAtIHMubG9vcGVkU2xpZGVzKS9zLnBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50ID4gcy5zbGlkZXMubGVuZ3RoIC0gMSAtIHMubG9vcGVkU2xpZGVzICogMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQgLSAocy5zbGlkZXMubGVuZ3RoIC0gcy5sb29wZWRTbGlkZXMgKiAyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudCA+IHRvdGFsIC0gMSkgY3VycmVudCA9IGN1cnJlbnQgLSB0b3RhbDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgPCAwICYmIHMucGFyYW1zLnBhZ2luYXRpb25UeXBlICE9PSAnYnVsbGV0cycpIGN1cnJlbnQgPSB0b3RhbCArIGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHMuc25hcEluZGV4ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IHMuc25hcEluZGV4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IHMuYWN0aXZlSW5kZXggfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBUeXBlc1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wYWdpbmF0aW9uVHlwZSA9PT0gJ2J1bGxldHMnICYmIHMuYnVsbGV0cyAmJiBzLmJ1bGxldHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBzLmJ1bGxldHMucmVtb3ZlQ2xhc3Mocy5wYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYWdpbmF0aW9uQ29udGFpbmVyLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuYnVsbGV0cy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5pbmRleCgpID09PSBjdXJyZW50KSAkKHRoaXMpLmFkZENsYXNzKHMucGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5idWxsZXRzLmVxKGN1cnJlbnQpLmFkZENsYXNzKHMucGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMucGFnaW5hdGlvblR5cGUgPT09ICdmcmFjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5wYWdpbmF0aW9uQ29udGFpbmVyLmZpbmQoJy4nICsgcy5wYXJhbXMucGFnaW5hdGlvbkN1cnJlbnRDbGFzcykudGV4dChjdXJyZW50ICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIHMucGFnaW5hdGlvbkNvbnRhaW5lci5maW5kKCcuJyArIHMucGFyYW1zLnBhZ2luYXRpb25Ub3RhbENsYXNzKS50ZXh0KHRvdGFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnBhZ2luYXRpb25UeXBlID09PSAncHJvZ3Jlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzY2FsZSA9IChjdXJyZW50ICsgMSkgLyB0b3RhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlWCA9IHNjYWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVZID0gMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZVkgPSBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlWCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcy5wYWdpbmF0aW9uQ29udGFpbmVyLmZpbmQoJy4nICsgcy5wYXJhbXMucGFnaW5hdGlvblByb2dyZXNzYmFyQ2xhc3MpLnRyYW5zZm9ybSgndHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlWCgnICsgc2NhbGVYICsgJykgc2NhbGVZKCcgKyBzY2FsZVkgKyAnKScpLnRyYW5zaXRpb24ocy5wYXJhbXMuc3BlZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMucGFnaW5hdGlvblR5cGUgPT09ICdjdXN0b20nICYmIHMucGFyYW1zLnBhZ2luYXRpb25DdXN0b21SZW5kZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5wYWdpbmF0aW9uQ29udGFpbmVyLmh0bWwocy5wYXJhbXMucGFnaW5hdGlvbkN1c3RvbVJlbmRlcihzLCBjdXJyZW50ICsgMSwgdG90YWwpKTtcbiAgICAgICAgICAgICAgICAgICAgcy5lbWl0KCdvblBhZ2luYXRpb25SZW5kZXJlZCcsIHMsIHMucGFnaW5hdGlvbkNvbnRhaW5lclswXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC8vIE5leHQvYWN0aXZlIGJ1dHRvbnNcbiAgICAgICAgICAgIGlmICghcy5wYXJhbXMubG9vcCkge1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wcmV2QnV0dG9uICYmIHMucHJldkJ1dHRvbiAmJiBzLnByZXZCdXR0b24ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5pc0JlZ2lubmluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5wcmV2QnV0dG9uLmFkZENsYXNzKHMucGFyYW1zLmJ1dHRvbkRpc2FibGVkQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmExMXkgJiYgcy5hMTF5KSBzLmExMXkuZGlzYWJsZShzLnByZXZCdXR0b24pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5wcmV2QnV0dG9uLnJlbW92ZUNsYXNzKHMucGFyYW1zLmJ1dHRvbkRpc2FibGVkQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmExMXkgJiYgcy5hMTF5KSBzLmExMXkuZW5hYmxlKHMucHJldkJ1dHRvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLm5leHRCdXR0b24gJiYgcy5uZXh0QnV0dG9uICYmIHMubmV4dEJ1dHRvbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmlzRW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLm5leHRCdXR0b24uYWRkQ2xhc3Mocy5wYXJhbXMuYnV0dG9uRGlzYWJsZWRDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuYTExeSAmJiBzLmExMXkpIHMuYTExeS5kaXNhYmxlKHMubmV4dEJ1dHRvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLm5leHRCdXR0b24ucmVtb3ZlQ2xhc3Mocy5wYXJhbXMuYnV0dG9uRGlzYWJsZWRDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuYTExeSAmJiBzLmExMXkpIHMuYTExeS5lbmFibGUocy5uZXh0QnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIFBhZ2luYXRpb25cbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBzLnVwZGF0ZVBhZ2luYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXMucGFyYW1zLnBhZ2luYXRpb24pIHJldHVybjtcbiAgICAgICAgICAgIGlmIChzLnBhZ2luYXRpb25Db250YWluZXIgJiYgcy5wYWdpbmF0aW9uQ29udGFpbmVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFnaW5hdGlvbkhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMucGFnaW5hdGlvblR5cGUgPT09ICdidWxsZXRzJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbnVtYmVyT2ZCdWxsZXRzID0gcy5wYXJhbXMubG9vcCA/IE1hdGguY2VpbCgocy5zbGlkZXMubGVuZ3RoIC0gcy5sb29wZWRTbGlkZXMgKiAyKSAvIHMucGFyYW1zLnNsaWRlc1Blckdyb3VwKSA6IHMuc25hcEdyaWQubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bWJlck9mQnVsbGV0czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMucGFnaW5hdGlvbkJ1bGxldFJlbmRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25IVE1MICs9IHMucGFyYW1zLnBhZ2luYXRpb25CdWxsZXRSZW5kZXIoaSwgcy5wYXJhbXMuYnVsbGV0Q2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbkhUTUwgKz0gJzwnICsgcy5wYXJhbXMucGFnaW5hdGlvbkVsZW1lbnQrJyBjbGFzcz1cIicgKyBzLnBhcmFtcy5idWxsZXRDbGFzcyArICdcIj48LycgKyBzLnBhcmFtcy5wYWdpbmF0aW9uRWxlbWVudCArICc+JztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzLnBhZ2luYXRpb25Db250YWluZXIuaHRtbChwYWdpbmF0aW9uSFRNTCk7XG4gICAgICAgICAgICAgICAgICAgIHMuYnVsbGV0cyA9IHMucGFnaW5hdGlvbkNvbnRhaW5lci5maW5kKCcuJyArIHMucGFyYW1zLmJ1bGxldENsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnBhZ2luYXRpb25DbGlja2FibGUgJiYgcy5wYXJhbXMuYTExeSAmJiBzLmExMXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuYTExeS5pbml0UGFnaW5hdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wYWdpbmF0aW9uVHlwZSA9PT0gJ2ZyYWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMucGFnaW5hdGlvbkZyYWN0aW9uUmVuZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uSFRNTCA9IHMucGFyYW1zLnBhZ2luYXRpb25GcmFjdGlvblJlbmRlcihzLCBzLnBhcmFtcy5wYWdpbmF0aW9uQ3VycmVudENsYXNzLCBzLnBhcmFtcy5wYWdpbmF0aW9uVG90YWxDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uSFRNTCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiJyArIHMucGFyYW1zLnBhZ2luYXRpb25DdXJyZW50Q2xhc3MgKyAnXCI+PC9zcGFuPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgLyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCInICsgcy5wYXJhbXMucGFnaW5hdGlvblRvdGFsQ2xhc3MrJ1wiPjwvc3Bhbj4nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHMucGFnaW5hdGlvbkNvbnRhaW5lci5odG1sKHBhZ2luYXRpb25IVE1MKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnBhZ2luYXRpb25UeXBlID09PSAncHJvZ3Jlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wYWdpbmF0aW9uUHJvZ3Jlc3NSZW5kZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25IVE1MID0gcy5wYXJhbXMucGFnaW5hdGlvblByb2dyZXNzUmVuZGVyKHMsIHMucGFyYW1zLnBhZ2luYXRpb25Qcm9ncmVzc2JhckNsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25IVE1MID0gJzxzcGFuIGNsYXNzPVwiJyArIHMucGFyYW1zLnBhZ2luYXRpb25Qcm9ncmVzc2JhckNsYXNzICsgJ1wiPjwvc3Bhbj4nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHMucGFnaW5hdGlvbkNvbnRhaW5lci5odG1sKHBhZ2luYXRpb25IVE1MKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnBhZ2luYXRpb25UeXBlICE9PSAnY3VzdG9tJykge1xuICAgICAgICAgICAgICAgICAgICBzLmVtaXQoJ29uUGFnaW5hdGlvblJlbmRlcmVkJywgcywgcy5wYWdpbmF0aW9uQ29udGFpbmVyWzBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIENvbW1vbiB1cGRhdGUgbWV0aG9kXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcy51cGRhdGUgPSBmdW5jdGlvbiAodXBkYXRlVHJhbnNsYXRlKSB7XG4gICAgICAgICAgICBzLnVwZGF0ZUNvbnRhaW5lclNpemUoKTtcbiAgICAgICAgICAgIHMudXBkYXRlU2xpZGVzU2l6ZSgpO1xuICAgICAgICAgICAgcy51cGRhdGVQcm9ncmVzcygpO1xuICAgICAgICAgICAgcy51cGRhdGVQYWdpbmF0aW9uKCk7XG4gICAgICAgICAgICBzLnVwZGF0ZUNsYXNzZXMoKTtcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5zY3JvbGxiYXIgJiYgcy5zY3JvbGxiYXIpIHtcbiAgICAgICAgICAgICAgICBzLnNjcm9sbGJhci5zZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGZvcmNlU2V0VHJhbnNsYXRlKCkge1xuICAgICAgICAgICAgICAgIG5ld1RyYW5zbGF0ZSA9IE1hdGgubWluKE1hdGgubWF4KHMudHJhbnNsYXRlLCBzLm1heFRyYW5zbGF0ZSgpKSwgcy5taW5UcmFuc2xhdGUoKSk7XG4gICAgICAgICAgICAgICAgcy5zZXRXcmFwcGVyVHJhbnNsYXRlKG5ld1RyYW5zbGF0ZSk7XG4gICAgICAgICAgICAgICAgcy51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgICAgICAgICAgICAgIHMudXBkYXRlQ2xhc3NlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHVwZGF0ZVRyYW5zbGF0ZSkge1xuICAgICAgICAgICAgICAgIHZhciB0cmFuc2xhdGVkLCBuZXdUcmFuc2xhdGU7XG4gICAgICAgICAgICAgICAgaWYgKHMuY29udHJvbGxlciAmJiBzLmNvbnRyb2xsZXIuc3BsaW5lKSB7XG4gICAgICAgICAgICAgICAgICAgIHMuY29udHJvbGxlci5zcGxpbmUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5mcmVlTW9kZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3JjZVNldFRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuYXV0b0hlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy51cGRhdGVBdXRvSGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgocy5wYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nIHx8IHMucGFyYW1zLnNsaWRlc1BlclZpZXcgPiAxKSAmJiBzLmlzRW5kICYmICFzLnBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlZCA9IHMuc2xpZGVUbyhzLnNsaWRlcy5sZW5ndGggLSAxLCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVkID0gcy5zbGlkZVRvKHMuYWN0aXZlSW5kZXgsIDAsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRyYW5zbGF0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlU2V0VHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzLnBhcmFtcy5hdXRvSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgcy51cGRhdGVBdXRvSGVpZ2h0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBSZXNpemUgSGFuZGxlclxuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIHMub25SZXNpemUgPSBmdW5jdGlvbiAoZm9yY2VVcGRhdGVQYWdpbmF0aW9uKSB7XG4gICAgICAgICAgICAvL0JyZWFrcG9pbnRzXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuYnJlYWtwb2ludHMpIHtcbiAgICAgICAgICAgICAgICBzLnNldEJyZWFrcG9pbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAvLyBEaXNhYmxlIGxvY2tzIG9uIHJlc2l6ZVxuICAgICAgICAgICAgdmFyIGFsbG93U3dpcGVUb1ByZXYgPSBzLnBhcmFtcy5hbGxvd1N3aXBlVG9QcmV2O1xuICAgICAgICAgICAgdmFyIGFsbG93U3dpcGVUb05leHQgPSBzLnBhcmFtcy5hbGxvd1N3aXBlVG9OZXh0O1xuICAgICAgICAgICAgcy5wYXJhbXMuYWxsb3dTd2lwZVRvUHJldiA9IHMucGFyYW1zLmFsbG93U3dpcGVUb05leHQgPSB0cnVlO1xuICAgICAgICBcbiAgICAgICAgICAgIHMudXBkYXRlQ29udGFpbmVyU2l6ZSgpO1xuICAgICAgICAgICAgcy51cGRhdGVTbGlkZXNTaXplKCk7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nIHx8IHMucGFyYW1zLmZyZWVNb2RlIHx8IGZvcmNlVXBkYXRlUGFnaW5hdGlvbikgcy51cGRhdGVQYWdpbmF0aW9uKCk7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuc2Nyb2xsYmFyICYmIHMuc2Nyb2xsYmFyKSB7XG4gICAgICAgICAgICAgICAgcy5zY3JvbGxiYXIuc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5jb250cm9sbGVyICYmIHMuY29udHJvbGxlci5zcGxpbmUpIHtcbiAgICAgICAgICAgICAgICBzLmNvbnRyb2xsZXIuc3BsaW5lID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHNsaWRlQ2hhbmdlZEJ5U2xpZGVUbyA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmZyZWVNb2RlKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld1RyYW5zbGF0ZSA9IE1hdGgubWluKE1hdGgubWF4KHMudHJhbnNsYXRlLCBzLm1heFRyYW5zbGF0ZSgpKSwgcy5taW5UcmFuc2xhdGUoKSk7XG4gICAgICAgICAgICAgICAgcy5zZXRXcmFwcGVyVHJhbnNsYXRlKG5ld1RyYW5zbGF0ZSk7XG4gICAgICAgICAgICAgICAgcy51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgICAgICAgICAgICAgIHMudXBkYXRlQ2xhc3NlcygpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuYXV0b0hlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBzLnVwZGF0ZUF1dG9IZWlnaHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzLnVwZGF0ZUNsYXNzZXMoKTtcbiAgICAgICAgICAgICAgICBpZiAoKHMucGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyB8fCBzLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID4gMSkgJiYgcy5pc0VuZCAmJiAhcy5wYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVDaGFuZ2VkQnlTbGlkZVRvID0gcy5zbGlkZVRvKHMuc2xpZGVzLmxlbmd0aCAtIDEsIDAsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlQ2hhbmdlZEJ5U2xpZGVUbyA9IHMuc2xpZGVUbyhzLmFjdGl2ZUluZGV4LCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxhenlMb2FkaW5nICYmICFzbGlkZUNoYW5nZWRCeVNsaWRlVG8gJiYgcy5sYXp5KSB7XG4gICAgICAgICAgICAgICAgcy5sYXp5LmxvYWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJldHVybiBsb2NrcyBhZnRlciByZXNpemVcbiAgICAgICAgICAgIHMucGFyYW1zLmFsbG93U3dpcGVUb1ByZXYgPSBhbGxvd1N3aXBlVG9QcmV2O1xuICAgICAgICAgICAgcy5wYXJhbXMuYWxsb3dTd2lwZVRvTmV4dCA9IGFsbG93U3dpcGVUb05leHQ7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBFdmVudHNcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBcbiAgICAgICAgLy9EZWZpbmUgVG91Y2ggRXZlbnRzXG4gICAgICAgIHZhciBkZXNrdG9wRXZlbnRzID0gWydtb3VzZWRvd24nLCAnbW91c2Vtb3ZlJywgJ21vdXNldXAnXTtcbiAgICAgICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IucG9pbnRlckVuYWJsZWQpIGRlc2t0b3BFdmVudHMgPSBbJ3BvaW50ZXJkb3duJywgJ3BvaW50ZXJtb3ZlJywgJ3BvaW50ZXJ1cCddO1xuICAgICAgICBlbHNlIGlmICh3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQpIGRlc2t0b3BFdmVudHMgPSBbJ01TUG9pbnRlckRvd24nLCAnTVNQb2ludGVyTW92ZScsICdNU1BvaW50ZXJVcCddO1xuICAgICAgICBzLnRvdWNoRXZlbnRzID0ge1xuICAgICAgICAgICAgc3RhcnQgOiBzLnN1cHBvcnQudG91Y2ggfHwgIXMucGFyYW1zLnNpbXVsYXRlVG91Y2ggID8gJ3RvdWNoc3RhcnQnIDogZGVza3RvcEV2ZW50c1swXSxcbiAgICAgICAgICAgIG1vdmUgOiBzLnN1cHBvcnQudG91Y2ggfHwgIXMucGFyYW1zLnNpbXVsYXRlVG91Y2ggPyAndG91Y2htb3ZlJyA6IGRlc2t0b3BFdmVudHNbMV0sXG4gICAgICAgICAgICBlbmQgOiBzLnN1cHBvcnQudG91Y2ggfHwgIXMucGFyYW1zLnNpbXVsYXRlVG91Y2ggPyAndG91Y2hlbmQnIDogZGVza3RvcEV2ZW50c1syXVxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIC8vIFdQOCBUb3VjaCBFdmVudHMgRml4XG4gICAgICAgIGlmICh3aW5kb3cubmF2aWdhdG9yLnBvaW50ZXJFbmFibGVkIHx8IHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCkge1xuICAgICAgICAgICAgKHMucGFyYW1zLnRvdWNoRXZlbnRzVGFyZ2V0ID09PSAnY29udGFpbmVyJyA/IHMuY29udGFpbmVyIDogcy53cmFwcGVyKS5hZGRDbGFzcygnc3dpcGVyLXdwOC0nICsgcy5wYXJhbXMuZGlyZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gQXR0YWNoL2RldGFjaCBldmVudHNcbiAgICAgICAgcy5pbml0RXZlbnRzID0gZnVuY3Rpb24gKGRldGFjaCkge1xuICAgICAgICAgICAgdmFyIGFjdGlvbkRvbSA9IGRldGFjaCA/ICdvZmYnIDogJ29uJztcbiAgICAgICAgICAgIHZhciBhY3Rpb24gPSBkZXRhY2ggPyAncmVtb3ZlRXZlbnRMaXN0ZW5lcicgOiAnYWRkRXZlbnRMaXN0ZW5lcic7XG4gICAgICAgICAgICB2YXIgdG91Y2hFdmVudHNUYXJnZXQgPSBzLnBhcmFtcy50b3VjaEV2ZW50c1RhcmdldCA9PT0gJ2NvbnRhaW5lcicgPyBzLmNvbnRhaW5lclswXSA6IHMud3JhcHBlclswXTtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBzLnN1cHBvcnQudG91Y2ggPyB0b3VjaEV2ZW50c1RhcmdldCA6IGRvY3VtZW50O1xuICAgICAgICBcbiAgICAgICAgICAgIHZhciBtb3ZlQ2FwdHVyZSA9IHMucGFyYW1zLm5lc3RlZCA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgICAgICAvL1RvdWNoIEV2ZW50c1xuICAgICAgICAgICAgaWYgKHMuYnJvd3Nlci5pZSkge1xuICAgICAgICAgICAgICAgIHRvdWNoRXZlbnRzVGFyZ2V0W2FjdGlvbl0ocy50b3VjaEV2ZW50cy5zdGFydCwgcy5vblRvdWNoU3RhcnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRbYWN0aW9uXShzLnRvdWNoRXZlbnRzLm1vdmUsIHMub25Ub3VjaE1vdmUsIG1vdmVDYXB0dXJlKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRbYWN0aW9uXShzLnRvdWNoRXZlbnRzLmVuZCwgcy5vblRvdWNoRW5kLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocy5zdXBwb3J0LnRvdWNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvdWNoRXZlbnRzVGFyZ2V0W2FjdGlvbl0ocy50b3VjaEV2ZW50cy5zdGFydCwgcy5vblRvdWNoU3RhcnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hFdmVudHNUYXJnZXRbYWN0aW9uXShzLnRvdWNoRXZlbnRzLm1vdmUsIHMub25Ub3VjaE1vdmUsIG1vdmVDYXB0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hFdmVudHNUYXJnZXRbYWN0aW9uXShzLnRvdWNoRXZlbnRzLmVuZCwgcy5vblRvdWNoRW5kLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMuc2ltdWxhdGVUb3VjaCAmJiAhcy5kZXZpY2UuaW9zICYmICFzLmRldmljZS5hbmRyb2lkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvdWNoRXZlbnRzVGFyZ2V0W2FjdGlvbl0oJ21vdXNlZG93bicsIHMub25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50W2FjdGlvbl0oJ21vdXNlbW92ZScsIHMub25Ub3VjaE1vdmUsIG1vdmVDYXB0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRbYWN0aW9uXSgnbW91c2V1cCcsIHMub25Ub3VjaEVuZCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvd1thY3Rpb25dKCdyZXNpemUnLCBzLm9uUmVzaXplKTtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyBOZXh0LCBQcmV2LCBJbmRleFxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLm5leHRCdXR0b24gJiYgcy5uZXh0QnV0dG9uICYmIHMubmV4dEJ1dHRvbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcy5uZXh0QnV0dG9uW2FjdGlvbkRvbV0oJ2NsaWNrJywgcy5vbkNsaWNrTmV4dCk7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmExMXkgJiYgcy5hMTF5KSBzLm5leHRCdXR0b25bYWN0aW9uRG9tXSgna2V5ZG93bicsIHMuYTExeS5vbkVudGVyS2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wcmV2QnV0dG9uICYmIHMucHJldkJ1dHRvbiAmJiBzLnByZXZCdXR0b24ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHMucHJldkJ1dHRvblthY3Rpb25Eb21dKCdjbGljaycsIHMub25DbGlja1ByZXYpO1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5hMTF5ICYmIHMuYTExeSkgcy5wcmV2QnV0dG9uW2FjdGlvbkRvbV0oJ2tleWRvd24nLCBzLmExMXkub25FbnRlcktleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMucGFnaW5hdGlvbiAmJiBzLnBhcmFtcy5wYWdpbmF0aW9uQ2xpY2thYmxlKSB7XG4gICAgICAgICAgICAgICAgcy5wYWdpbmF0aW9uQ29udGFpbmVyW2FjdGlvbkRvbV0oJ2NsaWNrJywgJy4nICsgcy5wYXJhbXMuYnVsbGV0Q2xhc3MsIHMub25DbGlja0luZGV4KTtcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuYTExeSAmJiBzLmExMXkpIHMucGFnaW5hdGlvbkNvbnRhaW5lclthY3Rpb25Eb21dKCdrZXlkb3duJywgJy4nICsgcy5wYXJhbXMuYnVsbGV0Q2xhc3MsIHMuYTExeS5vbkVudGVyS2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAvLyBQcmV2ZW50IExpbmtzIENsaWNrc1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnByZXZlbnRDbGlja3MgfHwgcy5wYXJhbXMucHJldmVudENsaWNrc1Byb3BhZ2F0aW9uKSB0b3VjaEV2ZW50c1RhcmdldFthY3Rpb25dKCdjbGljaycsIHMucHJldmVudENsaWNrcywgdHJ1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIHMuYXR0YWNoRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcy5pbml0RXZlbnRzKCk7XG4gICAgICAgIH07XG4gICAgICAgIHMuZGV0YWNoRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcy5pbml0RXZlbnRzKHRydWUpO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgSGFuZGxlIENsaWNrc1xuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIC8vIFByZXZlbnQgQ2xpY2tzXG4gICAgICAgIHMuYWxsb3dDbGljayA9IHRydWU7XG4gICAgICAgIHMucHJldmVudENsaWNrcyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoIXMuYWxsb3dDbGljaykge1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wcmV2ZW50Q2xpY2tzKSBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnByZXZlbnRDbGlja3NQcm9wYWdhdGlvbiAmJiBzLmFuaW1hdGluZykge1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8gQ2xpY2tzXG4gICAgICAgIHMub25DbGlja05leHQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKHMuaXNFbmQgJiYgIXMucGFyYW1zLmxvb3ApIHJldHVybjtcbiAgICAgICAgICAgIHMuc2xpZGVOZXh0KCk7XG4gICAgICAgIH07XG4gICAgICAgIHMub25DbGlja1ByZXYgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKHMuaXNCZWdpbm5pbmcgJiYgIXMucGFyYW1zLmxvb3ApIHJldHVybjtcbiAgICAgICAgICAgIHMuc2xpZGVQcmV2KCk7XG4gICAgICAgIH07XG4gICAgICAgIHMub25DbGlja0luZGV4ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBpbmRleCA9ICQodGhpcykuaW5kZXgoKSAqIHMucGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxvb3ApIGluZGV4ID0gaW5kZXggKyBzLmxvb3BlZFNsaWRlcztcbiAgICAgICAgICAgIHMuc2xpZGVUbyhpbmRleCk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBIYW5kbGUgVG91Y2hlc1xuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIGZ1bmN0aW9uIGZpbmRFbGVtZW50SW5FdmVudChlLCBzZWxlY3Rvcikge1xuICAgICAgICAgICAgdmFyIGVsID0gJChlLnRhcmdldCk7XG4gICAgICAgICAgICBpZiAoIWVsLmlzKHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsID0gZWwucGFyZW50cyhzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlbGVjdG9yLm5vZGVUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmb3VuZDtcbiAgICAgICAgICAgICAgICAgICAgZWwucGFyZW50cygpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBfZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfZWwgPT09IHNlbGVjdG9yKSBmb3VuZCA9IHNlbGVjdG9yO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmb3VuZCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gc2VsZWN0b3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZWxbMF07XG4gICAgICAgIH1cbiAgICAgICAgcy51cGRhdGVDbGlja2VkU2xpZGUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHNsaWRlID0gZmluZEVsZW1lbnRJbkV2ZW50KGUsICcuJyArIHMucGFyYW1zLnNsaWRlQ2xhc3MpO1xuICAgICAgICAgICAgdmFyIHNsaWRlRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChzbGlkZSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcy5zbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMuc2xpZGVzW2ldID09PSBzbGlkZSkgc2xpZGVGb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGlmIChzbGlkZSAmJiBzbGlkZUZvdW5kKSB7XG4gICAgICAgICAgICAgICAgcy5jbGlja2VkU2xpZGUgPSBzbGlkZTtcbiAgICAgICAgICAgICAgICBzLmNsaWNrZWRJbmRleCA9ICQoc2xpZGUpLmluZGV4KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzLmNsaWNrZWRTbGlkZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBzLmNsaWNrZWRJbmRleCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuc2xpZGVUb0NsaWNrZWRTbGlkZSAmJiBzLmNsaWNrZWRJbmRleCAhPT0gdW5kZWZpbmVkICYmIHMuY2xpY2tlZEluZGV4ICE9PSBzLmFjdGl2ZUluZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlVG9JbmRleCA9IHMuY2xpY2tlZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICByZWFsSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIGR1cGxpY2F0ZWRTbGlkZXM7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMuYW5pbWF0aW5nKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIHJlYWxJbmRleCA9ICQocy5jbGlja2VkU2xpZGUpLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4Jyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChzbGlkZVRvSW5kZXggPCBzLmxvb3BlZFNsaWRlcyAtIHMucGFyYW1zLnNsaWRlc1BlclZpZXcvMikgfHwgKHNsaWRlVG9JbmRleCA+IHMuc2xpZGVzLmxlbmd0aCAtIHMubG9vcGVkU2xpZGVzICsgcy5wYXJhbXMuc2xpZGVzUGVyVmlldy8yKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuZml4TG9vcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlVG9JbmRleCA9IHMud3JhcHBlci5jaGlsZHJlbignLicgKyBzLnBhcmFtcy5zbGlkZUNsYXNzICsgJ1tkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicgKyByZWFsSW5kZXggKyAnXCJdOm5vdCguc3dpcGVyLXNsaWRlLWR1cGxpY2F0ZSknKS5lcSgwKS5pbmRleCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNsaWRlVG9JbmRleCA+IHMuc2xpZGVzLmxlbmd0aCAtIHMucGFyYW1zLnNsaWRlc1BlclZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmZpeExvb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZVRvSW5kZXggPSBzLndyYXBwZXIuY2hpbGRyZW4oJy4nICsgcy5wYXJhbXMuc2xpZGVDbGFzcyArICdbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCInICsgcmVhbEluZGV4ICsgJ1wiXTpub3QoLnN3aXBlci1zbGlkZS1kdXBsaWNhdGUpJykuZXEoMCkuaW5kZXgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGlkZVRvKHNsaWRlVG9JbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcy5zbGlkZVRvKHNsaWRlVG9JbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgdmFyIGlzVG91Y2hlZCxcbiAgICAgICAgICAgIGlzTW92ZWQsXG4gICAgICAgICAgICBhbGxvd1RvdWNoQ2FsbGJhY2tzLFxuICAgICAgICAgICAgdG91Y2hTdGFydFRpbWUsXG4gICAgICAgICAgICBpc1Njcm9sbGluZyxcbiAgICAgICAgICAgIGN1cnJlbnRUcmFuc2xhdGUsXG4gICAgICAgICAgICBzdGFydFRyYW5zbGF0ZSxcbiAgICAgICAgICAgIGFsbG93VGhyZXNob2xkTW92ZSxcbiAgICAgICAgICAgIC8vIEZvcm0gZWxlbWVudHMgdG8gbWF0Y2hcbiAgICAgICAgICAgIGZvcm1FbGVtZW50cyA9ICdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgYnV0dG9uJyxcbiAgICAgICAgICAgIC8vIExhc3QgY2xpY2sgdGltZVxuICAgICAgICAgICAgbGFzdENsaWNrVGltZSA9IERhdGUubm93KCksIGNsaWNrVGltZW91dCxcbiAgICAgICAgICAgIC8vVmVsb2NpdGllc1xuICAgICAgICAgICAgdmVsb2NpdGllcyA9IFtdLFxuICAgICAgICAgICAgYWxsb3dNb21lbnR1bUJvdW5jZTtcbiAgICAgICAgXG4gICAgICAgIC8vIEFuaW1hdGluZyBGbGFnXG4gICAgICAgIHMuYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICAvLyBUb3VjaGVzIGluZm9ybWF0aW9uXG4gICAgICAgIHMudG91Y2hlcyA9IHtcbiAgICAgICAgICAgIHN0YXJ0WDogMCxcbiAgICAgICAgICAgIHN0YXJ0WTogMCxcbiAgICAgICAgICAgIGN1cnJlbnRYOiAwLFxuICAgICAgICAgICAgY3VycmVudFk6IDAsXG4gICAgICAgICAgICBkaWZmOiAwXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAvLyBUb3VjaCBoYW5kbGVyc1xuICAgICAgICB2YXIgaXNUb3VjaEV2ZW50LCBzdGFydE1vdmluZztcbiAgICAgICAgcy5vblRvdWNoU3RhcnQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKGUub3JpZ2luYWxFdmVudCkgZSA9IGUub3JpZ2luYWxFdmVudDtcbiAgICAgICAgICAgIGlzVG91Y2hFdmVudCA9IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnO1xuICAgICAgICAgICAgaWYgKCFpc1RvdWNoRXZlbnQgJiYgJ3doaWNoJyBpbiBlICYmIGUud2hpY2ggPT09IDMpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5ub1N3aXBpbmcgJiYgZmluZEVsZW1lbnRJbkV2ZW50KGUsICcuJyArIHMucGFyYW1zLm5vU3dpcGluZ0NsYXNzKSkge1xuICAgICAgICAgICAgICAgIHMuYWxsb3dDbGljayA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnN3aXBlSGFuZGxlcikge1xuICAgICAgICAgICAgICAgIGlmICghZmluZEVsZW1lbnRJbkV2ZW50KGUsIHMucGFyYW1zLnN3aXBlSGFuZGxlcikpIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICB2YXIgc3RhcnRYID0gcy50b3VjaGVzLmN1cnJlbnRYID0gZS50eXBlID09PSAndG91Y2hzdGFydCcgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVggOiBlLnBhZ2VYO1xuICAgICAgICAgICAgdmFyIHN0YXJ0WSA9IHMudG91Y2hlcy5jdXJyZW50WSA9IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIDogZS5wYWdlWTtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyBEbyBOT1Qgc3RhcnQgaWYgaU9TIGVkZ2Ugc3dpcGUgaXMgZGV0ZWN0ZWQuIE90aGVyd2lzZSBpT1MgYXBwIChVSVdlYlZpZXcpIGNhbm5vdCBzd2lwZS10by1nby1iYWNrIGFueW1vcmVcbiAgICAgICAgICAgIGlmKHMuZGV2aWNlLmlvcyAmJiBzLnBhcmFtcy5pT1NFZGdlU3dpcGVEZXRlY3Rpb24gJiYgc3RhcnRYIDw9IHMucGFyYW1zLmlPU0VkZ2VTd2lwZVRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBpc1RvdWNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgaXNNb3ZlZCA9IGZhbHNlO1xuICAgICAgICAgICAgYWxsb3dUb3VjaENhbGxiYWNrcyA9IHRydWU7XG4gICAgICAgICAgICBpc1Njcm9sbGluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHN0YXJ0TW92aW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgcy50b3VjaGVzLnN0YXJ0WCA9IHN0YXJ0WDtcbiAgICAgICAgICAgIHMudG91Y2hlcy5zdGFydFkgPSBzdGFydFk7XG4gICAgICAgICAgICB0b3VjaFN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICBzLmFsbG93Q2xpY2sgPSB0cnVlO1xuICAgICAgICAgICAgcy51cGRhdGVDb250YWluZXJTaXplKCk7XG4gICAgICAgICAgICBzLnN3aXBlRGlyZWN0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnRocmVzaG9sZCA+IDApIGFsbG93VGhyZXNob2xkTW92ZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKGUudHlwZSAhPT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByZXZlbnREZWZhdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoJChlLnRhcmdldCkuaXMoZm9ybUVsZW1lbnRzKSkgcHJldmVudERlZmF1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiAkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpLmlzKGZvcm1FbGVtZW50cykpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcy5lbWl0KCdvblRvdWNoU3RhcnQnLCBzLCBlKTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIHMub25Ub3VjaE1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKGUub3JpZ2luYWxFdmVudCkgZSA9IGUub3JpZ2luYWxFdmVudDtcbiAgICAgICAgICAgIGlmIChpc1RvdWNoRXZlbnQgJiYgZS50eXBlID09PSAnbW91c2Vtb3ZlJykgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGUucHJldmVudGVkQnlOZXN0ZWRTd2lwZXIpIHtcbiAgICAgICAgICAgICAgICBzLnRvdWNoZXMuc3RhcnRYID0gZS50eXBlID09PSAndG91Y2htb3ZlJyA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCA6IGUucGFnZVg7XG4gICAgICAgICAgICAgICAgcy50b3VjaGVzLnN0YXJ0WSA9IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgOiBlLnBhZ2VZO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5vbmx5RXh0ZXJuYWwpIHtcbiAgICAgICAgICAgICAgICAvLyBpc01vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzLmFsbG93Q2xpY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoaXNUb3VjaGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHMudG91Y2hlcy5zdGFydFggPSBzLnRvdWNoZXMuY3VycmVudFggPSBlLnR5cGUgPT09ICd0b3VjaG1vdmUnID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYIDogZS5wYWdlWDtcbiAgICAgICAgICAgICAgICAgICAgcy50b3VjaGVzLnN0YXJ0WSA9IHMudG91Y2hlcy5jdXJyZW50WSA9IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgOiBlLnBhZ2VZO1xuICAgICAgICAgICAgICAgICAgICB0b3VjaFN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc1RvdWNoRXZlbnQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiAkKGUudGFyZ2V0KS5pcyhmb3JtRWxlbWVudHMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzTW92ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBzLmFsbG93Q2xpY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhbGxvd1RvdWNoQ2FsbGJhY2tzKSB7XG4gICAgICAgICAgICAgICAgcy5lbWl0KCdvblRvdWNoTW92ZScsIHMsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0VG91Y2hlcyAmJiBlLnRhcmdldFRvdWNoZXMubGVuZ3RoID4gMSkgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgICAgIHMudG91Y2hlcy5jdXJyZW50WCA9IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVggOiBlLnBhZ2VYO1xuICAgICAgICAgICAgcy50b3VjaGVzLmN1cnJlbnRZID0gZS50eXBlID09PSAndG91Y2htb3ZlJyA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSA6IGUucGFnZVk7XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpc1Njcm9sbGluZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB2YXIgdG91Y2hBbmdsZSA9IE1hdGguYXRhbjIoTWF0aC5hYnMocy50b3VjaGVzLmN1cnJlbnRZIC0gcy50b3VjaGVzLnN0YXJ0WSksIE1hdGguYWJzKHMudG91Y2hlcy5jdXJyZW50WCAtIHMudG91Y2hlcy5zdGFydFgpKSAqIDE4MCAvIE1hdGguUEk7XG4gICAgICAgICAgICAgICAgaXNTY3JvbGxpbmcgPSBzLmlzSG9yaXpvbnRhbCgpID8gdG91Y2hBbmdsZSA+IHMucGFyYW1zLnRvdWNoQW5nbGUgOiAoOTAgLSB0b3VjaEFuZ2xlID4gcy5wYXJhbXMudG91Y2hBbmdsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNTY3JvbGxpbmcpIHtcbiAgICAgICAgICAgICAgICBzLmVtaXQoJ29uVG91Y2hNb3ZlT3Bwb3NpdGUnLCBzLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RhcnRNb3ZpbmcgPT09ICd1bmRlZmluZWQnICYmIHMuYnJvd3Nlci5pZVRvdWNoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMudG91Y2hlcy5jdXJyZW50WCAhPT0gcy50b3VjaGVzLnN0YXJ0WCB8fCBzLnRvdWNoZXMuY3VycmVudFkgIT09IHMudG91Y2hlcy5zdGFydFkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRNb3ZpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaXNUb3VjaGVkKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoaXNTY3JvbGxpbmcpICB7XG4gICAgICAgICAgICAgICAgaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzdGFydE1vdmluZyAmJiBzLmJyb3dzZXIuaWVUb3VjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHMuYWxsb3dDbGljayA9IGZhbHNlO1xuICAgICAgICAgICAgcy5lbWl0KCdvblNsaWRlck1vdmUnLCBzLCBlKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy50b3VjaE1vdmVTdG9wUHJvcGFnYXRpb24gJiYgIXMucGFyYW1zLm5lc3RlZCkge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKCFpc01vdmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgICAgICAgICAgICAgICAgIHMuZml4TG9vcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdGFydFRyYW5zbGF0ZSA9IHMuZ2V0V3JhcHBlclRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIHMuc2V0V3JhcHBlclRyYW5zaXRpb24oMCk7XG4gICAgICAgICAgICAgICAgaWYgKHMuYW5pbWF0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHMud3JhcHBlci50cmlnZ2VyKCd3ZWJraXRUcmFuc2l0aW9uRW5kIHRyYW5zaXRpb25lbmQgb1RyYW5zaXRpb25FbmQgTVNUcmFuc2l0aW9uRW5kIG1zVHJhbnNpdGlvbkVuZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuYXV0b3BsYXkgJiYgcy5hdXRvcGxheWluZykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuYXV0b3BsYXlEaXNhYmxlT25JbnRlcmFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5zdG9wQXV0b3BsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMucGF1c2VBdXRvcGxheSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFsbG93TW9tZW50dW1Cb3VuY2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvL0dyYWIgQ3Vyc29yXG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmdyYWJDdXJzb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5jb250YWluZXJbMF0uc3R5bGUuY3Vyc29yID0gJ21vdmUnO1xuICAgICAgICAgICAgICAgICAgICBzLmNvbnRhaW5lclswXS5zdHlsZS5jdXJzb3IgPSAnLXdlYmtpdC1ncmFiYmluZyc7XG4gICAgICAgICAgICAgICAgICAgIHMuY29udGFpbmVyWzBdLnN0eWxlLmN1cnNvciA9ICctbW96LWdyYWJiaW4nO1xuICAgICAgICAgICAgICAgICAgICBzLmNvbnRhaW5lclswXS5zdHlsZS5jdXJzb3IgPSAnZ3JhYmJpbmcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlzTW92ZWQgPSB0cnVlO1xuICAgICAgICBcbiAgICAgICAgICAgIHZhciBkaWZmID0gcy50b3VjaGVzLmRpZmYgPSBzLmlzSG9yaXpvbnRhbCgpID8gcy50b3VjaGVzLmN1cnJlbnRYIC0gcy50b3VjaGVzLnN0YXJ0WCA6IHMudG91Y2hlcy5jdXJyZW50WSAtIHMudG91Y2hlcy5zdGFydFk7XG4gICAgICAgIFxuICAgICAgICAgICAgZGlmZiA9IGRpZmYgKiBzLnBhcmFtcy50b3VjaFJhdGlvO1xuICAgICAgICAgICAgaWYgKHMucnRsKSBkaWZmID0gLWRpZmY7XG4gICAgICAgIFxuICAgICAgICAgICAgcy5zd2lwZURpcmVjdGlvbiA9IGRpZmYgPiAwID8gJ3ByZXYnIDogJ25leHQnO1xuICAgICAgICAgICAgY3VycmVudFRyYW5zbGF0ZSA9IGRpZmYgKyBzdGFydFRyYW5zbGF0ZTtcbiAgICAgICAgXG4gICAgICAgICAgICB2YXIgZGlzYWJsZVBhcmVudFN3aXBlciA9IHRydWU7XG4gICAgICAgICAgICBpZiAoKGRpZmYgPiAwICYmIGN1cnJlbnRUcmFuc2xhdGUgPiBzLm1pblRyYW5zbGF0ZSgpKSkge1xuICAgICAgICAgICAgICAgIGRpc2FibGVQYXJlbnRTd2lwZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMucmVzaXN0YW5jZSkgY3VycmVudFRyYW5zbGF0ZSA9IHMubWluVHJhbnNsYXRlKCkgLSAxICsgTWF0aC5wb3coLXMubWluVHJhbnNsYXRlKCkgKyBzdGFydFRyYW5zbGF0ZSArIGRpZmYsIHMucGFyYW1zLnJlc2lzdGFuY2VSYXRpbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkaWZmIDwgMCAmJiBjdXJyZW50VHJhbnNsYXRlIDwgcy5tYXhUcmFuc2xhdGUoKSkge1xuICAgICAgICAgICAgICAgIGRpc2FibGVQYXJlbnRTd2lwZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMucmVzaXN0YW5jZSkgY3VycmVudFRyYW5zbGF0ZSA9IHMubWF4VHJhbnNsYXRlKCkgKyAxIC0gTWF0aC5wb3cocy5tYXhUcmFuc2xhdGUoKSAtIHN0YXJ0VHJhbnNsYXRlIC0gZGlmZiwgcy5wYXJhbXMucmVzaXN0YW5jZVJhdGlvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBpZiAoZGlzYWJsZVBhcmVudFN3aXBlcikge1xuICAgICAgICAgICAgICAgIGUucHJldmVudGVkQnlOZXN0ZWRTd2lwZXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC8vIERpcmVjdGlvbnMgbG9ja3NcbiAgICAgICAgICAgIGlmICghcy5wYXJhbXMuYWxsb3dTd2lwZVRvTmV4dCAmJiBzLnN3aXBlRGlyZWN0aW9uID09PSAnbmV4dCcgJiYgY3VycmVudFRyYW5zbGF0ZSA8IHN0YXJ0VHJhbnNsYXRlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFRyYW5zbGF0ZSA9IHN0YXJ0VHJhbnNsYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy5hbGxvd1N3aXBlVG9QcmV2ICYmIHMuc3dpcGVEaXJlY3Rpb24gPT09ICdwcmV2JyAmJiBjdXJyZW50VHJhbnNsYXRlID4gc3RhcnRUcmFuc2xhdGUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50VHJhbnNsYXRlID0gc3RhcnRUcmFuc2xhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy5mb2xsb3dGaW5nZXIpIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyBUaHJlc2hvbGRcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy50aHJlc2hvbGQgPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGRpZmYpID4gcy5wYXJhbXMudGhyZXNob2xkIHx8IGFsbG93VGhyZXNob2xkTW92ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWFsbG93VGhyZXNob2xkTW92ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dUaHJlc2hvbGRNb3ZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMudG91Y2hlcy5zdGFydFggPSBzLnRvdWNoZXMuY3VycmVudFg7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnRvdWNoZXMuc3RhcnRZID0gcy50b3VjaGVzLmN1cnJlbnRZO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFRyYW5zbGF0ZSA9IHN0YXJ0VHJhbnNsYXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy50b3VjaGVzLmRpZmYgPSBzLmlzSG9yaXpvbnRhbCgpID8gcy50b3VjaGVzLmN1cnJlbnRYIC0gcy50b3VjaGVzLnN0YXJ0WCA6IHMudG91Y2hlcy5jdXJyZW50WSAtIHMudG91Y2hlcy5zdGFydFk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUcmFuc2xhdGUgPSBzdGFydFRyYW5zbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBhY3RpdmUgaW5kZXggaW4gZnJlZSBtb2RlXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuZnJlZU1vZGUgfHwgcy5wYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcykge1xuICAgICAgICAgICAgICAgIHMudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5mcmVlTW9kZSkge1xuICAgICAgICAgICAgICAgIC8vVmVsb2NpdHlcbiAgICAgICAgICAgICAgICBpZiAodmVsb2NpdGllcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmVsb2NpdGllcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzLnRvdWNoZXNbcy5pc0hvcml6b250YWwoKSA/ICdzdGFydFgnIDogJ3N0YXJ0WSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogdG91Y2hTdGFydFRpbWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZlbG9jaXRpZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzLnRvdWNoZXNbcy5pc0hvcml6b250YWwoKSA/ICdjdXJyZW50WCcgOiAnY3VycmVudFknXSxcbiAgICAgICAgICAgICAgICAgICAgdGltZTogKG5ldyB3aW5kb3cuRGF0ZSgpKS5nZXRUaW1lKClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBwcm9ncmVzc1xuICAgICAgICAgICAgcy51cGRhdGVQcm9ncmVzcyhjdXJyZW50VHJhbnNsYXRlKTtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0cmFuc2xhdGVcbiAgICAgICAgICAgIHMuc2V0V3JhcHBlclRyYW5zbGF0ZShjdXJyZW50VHJhbnNsYXRlKTtcbiAgICAgICAgfTtcbiAgICAgICAgcy5vblRvdWNoRW5kID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChlLm9yaWdpbmFsRXZlbnQpIGUgPSBlLm9yaWdpbmFsRXZlbnQ7XG4gICAgICAgICAgICBpZiAoYWxsb3dUb3VjaENhbGxiYWNrcykge1xuICAgICAgICAgICAgICAgIHMuZW1pdCgnb25Ub3VjaEVuZCcsIHMsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWxsb3dUb3VjaENhbGxiYWNrcyA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKCFpc1RvdWNoZWQpIHJldHVybjtcbiAgICAgICAgICAgIC8vUmV0dXJuIEdyYWIgQ3Vyc29yXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuZ3JhYkN1cnNvciAmJiBpc01vdmVkICYmIGlzVG91Y2hlZCkge1xuICAgICAgICAgICAgICAgIHMuY29udGFpbmVyWzBdLnN0eWxlLmN1cnNvciA9ICdtb3ZlJztcbiAgICAgICAgICAgICAgICBzLmNvbnRhaW5lclswXS5zdHlsZS5jdXJzb3IgPSAnLXdlYmtpdC1ncmFiJztcbiAgICAgICAgICAgICAgICBzLmNvbnRhaW5lclswXS5zdHlsZS5jdXJzb3IgPSAnLW1vei1ncmFiJztcbiAgICAgICAgICAgICAgICBzLmNvbnRhaW5lclswXS5zdHlsZS5jdXJzb3IgPSAnZ3JhYic7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gVGltZSBkaWZmXG4gICAgICAgICAgICB2YXIgdG91Y2hFbmRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIHZhciB0aW1lRGlmZiA9IHRvdWNoRW5kVGltZSAtIHRvdWNoU3RhcnRUaW1lO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIFRhcCwgZG91YmxlVGFwLCBDbGlja1xuICAgICAgICAgICAgaWYgKHMuYWxsb3dDbGljaykge1xuICAgICAgICAgICAgICAgIHMudXBkYXRlQ2xpY2tlZFNsaWRlKGUpO1xuICAgICAgICAgICAgICAgIHMuZW1pdCgnb25UYXAnLCBzLCBlKTtcbiAgICAgICAgICAgICAgICBpZiAodGltZURpZmYgPCAzMDAgJiYgKHRvdWNoRW5kVGltZSAtIGxhc3RDbGlja1RpbWUpID4gMzAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGlja1RpbWVvdXQpIGNsZWFyVGltZW91dChjbGlja1RpbWVvdXQpO1xuICAgICAgICAgICAgICAgICAgICBjbGlja1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcykgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnBhZ2luYXRpb25IaWRlICYmIHMucGFnaW5hdGlvbkNvbnRhaW5lci5sZW5ndGggPiAwICYmICEkKGUudGFyZ2V0KS5oYXNDbGFzcyhzLnBhcmFtcy5idWxsZXRDbGFzcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnBhZ2luYXRpb25Db250YWluZXIudG9nZ2xlQ2xhc3Mocy5wYXJhbXMucGFnaW5hdGlvbkhpZGRlbkNsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHMuZW1pdCgnb25DbGljaycsIHMsIGUpO1xuICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRpbWVEaWZmIDwgMzAwICYmICh0b3VjaEVuZFRpbWUgLSBsYXN0Q2xpY2tUaW1lKSA8IDMwMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2xpY2tUaW1lb3V0KSBjbGVhclRpbWVvdXQoY2xpY2tUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgcy5lbWl0KCdvbkRvdWJsZVRhcCcsIHMsIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBsYXN0Q2xpY2tUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChzKSBzLmFsbG93Q2xpY2sgPSB0cnVlO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKCFpc1RvdWNoZWQgfHwgIWlzTW92ZWQgfHwgIXMuc3dpcGVEaXJlY3Rpb24gfHwgcy50b3VjaGVzLmRpZmYgPT09IDAgfHwgY3VycmVudFRyYW5zbGF0ZSA9PT0gc3RhcnRUcmFuc2xhdGUpIHtcbiAgICAgICAgICAgICAgICBpc1RvdWNoZWQgPSBpc01vdmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXNUb3VjaGVkID0gaXNNb3ZlZCA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgICAgIHZhciBjdXJyZW50UG9zO1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmZvbGxvd0Zpbmdlcikge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQb3MgPSBzLnJ0bCA/IHMudHJhbnNsYXRlIDogLXMudHJhbnNsYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFBvcyA9IC1jdXJyZW50VHJhbnNsYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmZyZWVNb2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQb3MgPCAtcy5taW5UcmFuc2xhdGUoKSkge1xuICAgICAgICAgICAgICAgICAgICBzLnNsaWRlVG8ocy5hY3RpdmVJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY3VycmVudFBvcyA+IC1zLm1heFRyYW5zbGF0ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnNsaWRlcy5sZW5ndGggPCBzLnNuYXBHcmlkLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGlkZVRvKHMuc25hcEdyaWQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnNsaWRlVG8ocy5zbGlkZXMubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmZyZWVNb2RlTW9tZW50dW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZlbG9jaXRpZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxhc3RNb3ZlRXZlbnQgPSB2ZWxvY2l0aWVzLnBvcCgpLCB2ZWxvY2l0eUV2ZW50ID0gdmVsb2NpdGllcy5wb3AoKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlzdGFuY2UgPSBsYXN0TW92ZUV2ZW50LnBvc2l0aW9uIC0gdmVsb2NpdHlFdmVudC5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aW1lID0gbGFzdE1vdmVFdmVudC50aW1lIC0gdmVsb2NpdHlFdmVudC50aW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy52ZWxvY2l0eSA9IGRpc3RhbmNlIC8gdGltZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMudmVsb2NpdHkgPSBzLnZlbG9jaXR5IC8gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhzLnZlbG9jaXR5KSA8IHMucGFyYW1zLmZyZWVNb2RlTWluaW11bVZlbG9jaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy52ZWxvY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGltcGxpZXMgdGhhdCB0aGUgdXNlciBzdG9wcGVkIG1vdmluZyBhIGZpbmdlciB0aGVuIHJlbGVhc2VkLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlcmUgd291bGQgYmUgbm8gZXZlbnRzIHdpdGggZGlzdGFuY2UgemVybywgc28gdGhlIGxhc3QgZXZlbnQgaXMgc3RhbGUuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGltZSA+IDE1MCB8fCAobmV3IHdpbmRvdy5EYXRlKCkuZ2V0VGltZSgpIC0gbGFzdE1vdmVFdmVudC50aW1lKSA+IDMwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMudmVsb2NpdHkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy52ZWxvY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHZlbG9jaXRpZXMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1vbWVudHVtRHVyYXRpb24gPSAxMDAwICogcy5wYXJhbXMuZnJlZU1vZGVNb21lbnR1bVJhdGlvO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbW9tZW50dW1EaXN0YW5jZSA9IHMudmVsb2NpdHkgKiBtb21lbnR1bUR1cmF0aW9uO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1Bvc2l0aW9uID0gcy50cmFuc2xhdGUgKyBtb21lbnR1bURpc3RhbmNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5ydGwpIG5ld1Bvc2l0aW9uID0gLSBuZXdQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRvQm91bmNlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhZnRlckJvdW5jZVBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYm91bmNlQW1vdW50ID0gTWF0aC5hYnMocy52ZWxvY2l0eSkgKiAyMCAqIHMucGFyYW1zLmZyZWVNb2RlTW9tZW50dW1Cb3VuY2VSYXRpbztcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1Bvc2l0aW9uIDwgcy5tYXhUcmFuc2xhdGUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmZyZWVNb2RlTW9tZW50dW1Cb3VuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3UG9zaXRpb24gKyBzLm1heFRyYW5zbGF0ZSgpIDwgLWJvdW5jZUFtb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbiA9IHMubWF4VHJhbnNsYXRlKCkgLSBib3VuY2VBbW91bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyQm91bmNlUG9zaXRpb24gPSBzLm1heFRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvQm91bmNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd01vbWVudHVtQm91bmNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gcy5tYXhUcmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChuZXdQb3NpdGlvbiA+IHMubWluVHJhbnNsYXRlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5mcmVlTW9kZU1vbWVudHVtQm91bmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1Bvc2l0aW9uIC0gcy5taW5UcmFuc2xhdGUoKSA+IGJvdW5jZUFtb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbiA9IHMubWluVHJhbnNsYXRlKCkgKyBib3VuY2VBbW91bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyQm91bmNlUG9zaXRpb24gPSBzLm1pblRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvQm91bmNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd01vbWVudHVtQm91bmNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gcy5taW5UcmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzLnBhcmFtcy5mcmVlTW9kZVN0aWNreSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGogPSAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRTbGlkZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBzLnNuYXBHcmlkLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMuc25hcEdyaWRbal0gPiAtbmV3UG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFNsaWRlID0gajtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhzLnNuYXBHcmlkW25leHRTbGlkZV0gLSBuZXdQb3NpdGlvbikgPCBNYXRoLmFicyhzLnNuYXBHcmlkW25leHRTbGlkZSAtIDFdIC0gbmV3UG9zaXRpb24pIHx8IHMuc3dpcGVEaXJlY3Rpb24gPT09ICduZXh0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gcy5zbmFwR3JpZFtuZXh0U2xpZGVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbiA9IHMuc25hcEdyaWRbbmV4dFNsaWRlIC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXMucnRsKSBuZXdQb3NpdGlvbiA9IC0gbmV3UG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy9GaXggZHVyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgaWYgKHMudmVsb2NpdHkgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLnJ0bCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbWVudHVtRHVyYXRpb24gPSBNYXRoLmFicygoLW5ld1Bvc2l0aW9uIC0gcy50cmFuc2xhdGUpIC8gcy52ZWxvY2l0eSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb21lbnR1bUR1cmF0aW9uID0gTWF0aC5hYnMoKG5ld1Bvc2l0aW9uIC0gcy50cmFuc2xhdGUpIC8gcy52ZWxvY2l0eSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocy5wYXJhbXMuZnJlZU1vZGVTdGlja3kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpZGVSZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuZnJlZU1vZGVNb21lbnR1bUJvdW5jZSAmJiBkb0JvdW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy51cGRhdGVQcm9ncmVzcyhhZnRlckJvdW5jZVBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuc2V0V3JhcHBlclRyYW5zaXRpb24obW9tZW50dW1EdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnNldFdyYXBwZXJUcmFuc2xhdGUobmV3UG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5vblRyYW5zaXRpb25TdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5hbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy53cmFwcGVyLnRyYW5zaXRpb25FbmQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcyB8fCAhYWxsb3dNb21lbnR1bUJvdW5jZSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuZW1pdCgnb25Nb21lbnR1bUJvdW5jZScsIHMpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnNldFdyYXBwZXJUcmFuc2l0aW9uKHMucGFyYW1zLnNwZWVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnNldFdyYXBwZXJUcmFuc2xhdGUoYWZ0ZXJCb3VuY2VQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy53cmFwcGVyLnRyYW5zaXRpb25FbmQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXMpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5vblRyYW5zaXRpb25FbmQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHMudmVsb2NpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMudXBkYXRlUHJvZ3Jlc3MobmV3UG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5zZXRXcmFwcGVyVHJhbnNpdGlvbihtb21lbnR1bUR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuc2V0V3JhcHBlclRyYW5zbGF0ZShuZXdQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLm9uVHJhbnNpdGlvblN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXMuYW5pbWF0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5hbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMud3JhcHBlci50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMub25UcmFuc2l0aW9uRW5kKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy51cGRhdGVQcm9ncmVzcyhuZXdQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHMudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy5mcmVlTW9kZU1vbWVudHVtIHx8IHRpbWVEaWZmID49IHMucGFyYW1zLmxvbmdTd2lwZXNNcykge1xuICAgICAgICAgICAgICAgICAgICBzLnVwZGF0ZVByb2dyZXNzKCk7XG4gICAgICAgICAgICAgICAgICAgIHMudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC8vIEZpbmQgY3VycmVudCBzbGlkZVxuICAgICAgICAgICAgdmFyIGksIHN0b3BJbmRleCA9IDAsIGdyb3VwU2l6ZSA9IHMuc2xpZGVzU2l6ZXNHcmlkWzBdO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHMuc2xpZGVzR3JpZC5sZW5ndGg7IGkgKz0gcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXApIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHMuc2xpZGVzR3JpZFtpICsgcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXBdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBvcyA+PSBzLnNsaWRlc0dyaWRbaV0gJiYgY3VycmVudFBvcyA8IHMuc2xpZGVzR3JpZFtpICsgcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9wSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBTaXplID0gcy5zbGlkZXNHcmlkW2kgKyBzLnBhcmFtcy5zbGlkZXNQZXJHcm91cF0gLSBzLnNsaWRlc0dyaWRbaV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UG9zID49IHMuc2xpZGVzR3JpZFtpXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcEluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwU2l6ZSA9IHMuc2xpZGVzR3JpZFtzLnNsaWRlc0dyaWQubGVuZ3RoIC0gMV0gLSBzLnNsaWRlc0dyaWRbcy5zbGlkZXNHcmlkLmxlbmd0aCAtIDJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC8vIEZpbmQgY3VycmVudCBzbGlkZSBzaXplXG4gICAgICAgICAgICB2YXIgcmF0aW8gPSAoY3VycmVudFBvcyAtIHMuc2xpZGVzR3JpZFtzdG9wSW5kZXhdKSAvIGdyb3VwU2l6ZTtcbiAgICAgICAgXG4gICAgICAgICAgICBpZiAodGltZURpZmYgPiBzLnBhcmFtcy5sb25nU3dpcGVzTXMpIHtcbiAgICAgICAgICAgICAgICAvLyBMb25nIHRvdWNoZXNcbiAgICAgICAgICAgICAgICBpZiAoIXMucGFyYW1zLmxvbmdTd2lwZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5zbGlkZVRvKHMuYWN0aXZlSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzLnN3aXBlRGlyZWN0aW9uID09PSAnbmV4dCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJhdGlvID49IHMucGFyYW1zLmxvbmdTd2lwZXNSYXRpbykgcy5zbGlkZVRvKHN0b3BJbmRleCArIHMucGFyYW1zLnNsaWRlc1Blckdyb3VwKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBzLnNsaWRlVG8oc3RvcEluZGV4KTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzLnN3aXBlRGlyZWN0aW9uID09PSAncHJldicpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJhdGlvID4gKDEgLSBzLnBhcmFtcy5sb25nU3dpcGVzUmF0aW8pKSBzLnNsaWRlVG8oc3RvcEluZGV4ICsgcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHMuc2xpZGVUbyhzdG9wSW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFNob3J0IHN3aXBlc1xuICAgICAgICAgICAgICAgIGlmICghcy5wYXJhbXMuc2hvcnRTd2lwZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5zbGlkZVRvKHMuYWN0aXZlSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzLnN3aXBlRGlyZWN0aW9uID09PSAnbmV4dCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5zbGlkZVRvKHN0b3BJbmRleCArIHMucGFyYW1zLnNsaWRlc1Blckdyb3VwKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzLnN3aXBlRGlyZWN0aW9uID09PSAncHJldicpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5zbGlkZVRvKHN0b3BJbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBUcmFuc2l0aW9uc1xuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIHMuX3NsaWRlVG8gPSBmdW5jdGlvbiAoc2xpZGVJbmRleCwgc3BlZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBzLnNsaWRlVG8oc2xpZGVJbmRleCwgc3BlZWQsIHRydWUsIHRydWUpO1xuICAgICAgICB9O1xuICAgICAgICBzLnNsaWRlVG8gPSBmdW5jdGlvbiAoc2xpZGVJbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcnVuQ2FsbGJhY2tzID09PSAndW5kZWZpbmVkJykgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc2xpZGVJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHNsaWRlSW5kZXggPSAwO1xuICAgICAgICAgICAgaWYgKHNsaWRlSW5kZXggPCAwKSBzbGlkZUluZGV4ID0gMDtcbiAgICAgICAgICAgIHMuc25hcEluZGV4ID0gTWF0aC5mbG9vcihzbGlkZUluZGV4IC8gcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuICAgICAgICAgICAgaWYgKHMuc25hcEluZGV4ID49IHMuc25hcEdyaWQubGVuZ3RoKSBzLnNuYXBJbmRleCA9IHMuc25hcEdyaWQubGVuZ3RoIC0gMTtcbiAgICAgICAgXG4gICAgICAgICAgICB2YXIgdHJhbnNsYXRlID0gLSBzLnNuYXBHcmlkW3Muc25hcEluZGV4XTtcbiAgICAgICAgICAgIC8vIFN0b3AgYXV0b3BsYXlcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5hdXRvcGxheSAmJiBzLmF1dG9wbGF5aW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGludGVybmFsIHx8ICFzLnBhcmFtcy5hdXRvcGxheURpc2FibGVPbkludGVyYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHMucGF1c2VBdXRvcGxheShzcGVlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzLnN0b3BBdXRvcGxheSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBwcm9ncmVzc1xuICAgICAgICAgICAgcy51cGRhdGVQcm9ncmVzcyh0cmFuc2xhdGUpO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIE5vcm1hbGl6ZSBzbGlkZUluZGV4XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHMuc2xpZGVzR3JpZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICgtIE1hdGguZmxvb3IodHJhbnNsYXRlICogMTAwKSA+PSBNYXRoLmZsb29yKHMuc2xpZGVzR3JpZFtpXSAqIDEwMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC8vIERpcmVjdGlvbnMgbG9ja3NcbiAgICAgICAgICAgIGlmICghcy5wYXJhbXMuYWxsb3dTd2lwZVRvTmV4dCAmJiB0cmFuc2xhdGUgPCBzLnRyYW5zbGF0ZSAmJiB0cmFuc2xhdGUgPCBzLm1pblRyYW5zbGF0ZSgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy5hbGxvd1N3aXBlVG9QcmV2ICYmIHRyYW5zbGF0ZSA+IHMudHJhbnNsYXRlICYmIHRyYW5zbGF0ZSA+IHMubWF4VHJhbnNsYXRlKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoKHMuYWN0aXZlSW5kZXggfHwgMCkgIT09IHNsaWRlSW5kZXggKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gVXBkYXRlIEluZGV4XG4gICAgICAgICAgICBpZiAodHlwZW9mIHNwZWVkID09PSAndW5kZWZpbmVkJykgc3BlZWQgPSBzLnBhcmFtcy5zcGVlZDtcbiAgICAgICAgICAgIHMucHJldmlvdXNJbmRleCA9IHMuYWN0aXZlSW5kZXggfHwgMDtcbiAgICAgICAgICAgIHMuYWN0aXZlSW5kZXggPSBzbGlkZUluZGV4O1xuICAgICAgICBcbiAgICAgICAgICAgIGlmICgocy5ydGwgJiYgLXRyYW5zbGF0ZSA9PT0gcy50cmFuc2xhdGUpIHx8ICghcy5ydGwgJiYgdHJhbnNsYXRlID09PSBzLnRyYW5zbGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgSGVpZ2h0XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmF1dG9IZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcy51cGRhdGVBdXRvSGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHMudXBkYXRlQ2xhc3NlcygpO1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5lZmZlY3QgIT09ICdzbGlkZScpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5zZXRXcmFwcGVyVHJhbnNsYXRlKHRyYW5zbGF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHMudXBkYXRlQ2xhc3NlcygpO1xuICAgICAgICAgICAgcy5vblRyYW5zaXRpb25TdGFydChydW5DYWxsYmFja3MpO1xuICAgICAgICBcbiAgICAgICAgICAgIGlmIChzcGVlZCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHMuc2V0V3JhcHBlclRyYW5zbGF0ZSh0cmFuc2xhdGUpO1xuICAgICAgICAgICAgICAgIHMuc2V0V3JhcHBlclRyYW5zaXRpb24oMCk7XG4gICAgICAgICAgICAgICAgcy5vblRyYW5zaXRpb25FbmQocnVuQ2FsbGJhY2tzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHMuc2V0V3JhcHBlclRyYW5zbGF0ZSh0cmFuc2xhdGUpO1xuICAgICAgICAgICAgICAgIHMuc2V0V3JhcHBlclRyYW5zaXRpb24oc3BlZWQpO1xuICAgICAgICAgICAgICAgIGlmICghcy5hbmltYXRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5hbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBzLndyYXBwZXIudHJhbnNpdGlvbkVuZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXMpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMub25UcmFuc2l0aW9uRW5kKHJ1bkNhbGxiYWNrcyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBzLm9uVHJhbnNpdGlvblN0YXJ0ID0gZnVuY3Rpb24gKHJ1bkNhbGxiYWNrcykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBydW5DYWxsYmFja3MgPT09ICd1bmRlZmluZWQnKSBydW5DYWxsYmFja3MgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmF1dG9IZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBzLnVwZGF0ZUF1dG9IZWlnaHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLmxhenkpIHMubGF6eS5vblRyYW5zaXRpb25TdGFydCgpO1xuICAgICAgICAgICAgaWYgKHJ1bkNhbGxiYWNrcykge1xuICAgICAgICAgICAgICAgIHMuZW1pdCgnb25UcmFuc2l0aW9uU3RhcnQnLCBzKTtcbiAgICAgICAgICAgICAgICBpZiAocy5hY3RpdmVJbmRleCAhPT0gcy5wcmV2aW91c0luZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHMuZW1pdCgnb25TbGlkZUNoYW5nZVN0YXJ0Jywgcyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmFjdGl2ZUluZGV4ID4gcy5wcmV2aW91c0luZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLmVtaXQoJ29uU2xpZGVOZXh0U3RhcnQnLCBzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuZW1pdCgnb25TbGlkZVByZXZTdGFydCcsIHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcy5vblRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiAocnVuQ2FsbGJhY2tzKSB7XG4gICAgICAgICAgICBzLmFuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgcy5zZXRXcmFwcGVyVHJhbnNpdGlvbigwKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcnVuQ2FsbGJhY2tzID09PSAndW5kZWZpbmVkJykgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChzLmxhenkpIHMubGF6eS5vblRyYW5zaXRpb25FbmQoKTtcbiAgICAgICAgICAgIGlmIChydW5DYWxsYmFja3MpIHtcbiAgICAgICAgICAgICAgICBzLmVtaXQoJ29uVHJhbnNpdGlvbkVuZCcsIHMpO1xuICAgICAgICAgICAgICAgIGlmIChzLmFjdGl2ZUluZGV4ICE9PSBzLnByZXZpb3VzSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5lbWl0KCdvblNsaWRlQ2hhbmdlRW5kJywgcyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmFjdGl2ZUluZGV4ID4gcy5wcmV2aW91c0luZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLmVtaXQoJ29uU2xpZGVOZXh0RW5kJywgcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLmVtaXQoJ29uU2xpZGVQcmV2RW5kJywgcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuaGFzaG5hdiAmJiBzLmhhc2huYXYpIHtcbiAgICAgICAgICAgICAgICBzLmhhc2huYXYuc2V0SGFzaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgfTtcbiAgICAgICAgcy5zbGlkZU5leHQgPSBmdW5jdGlvbiAocnVuQ2FsbGJhY2tzLCBzcGVlZCwgaW50ZXJuYWwpIHtcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sb29wKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMuYW5pbWF0aW5nKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgcy5maXhMb29wKCk7XG4gICAgICAgICAgICAgICAgdmFyIGNsaWVudExlZnQgPSBzLmNvbnRhaW5lclswXS5jbGllbnRMZWZ0O1xuICAgICAgICAgICAgICAgIHJldHVybiBzLnNsaWRlVG8ocy5hY3RpdmVJbmRleCArIHMucGFyYW1zLnNsaWRlc1Blckdyb3VwLCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHJldHVybiBzLnNsaWRlVG8ocy5hY3RpdmVJbmRleCArIHMucGFyYW1zLnNsaWRlc1Blckdyb3VwLCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG4gICAgICAgIH07XG4gICAgICAgIHMuX3NsaWRlTmV4dCA9IGZ1bmN0aW9uIChzcGVlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHMuc2xpZGVOZXh0KHRydWUsIHNwZWVkLCB0cnVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgcy5zbGlkZVByZXYgPSBmdW5jdGlvbiAocnVuQ2FsbGJhY2tzLCBzcGVlZCwgaW50ZXJuYWwpIHtcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sb29wKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMuYW5pbWF0aW5nKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgcy5maXhMb29wKCk7XG4gICAgICAgICAgICAgICAgdmFyIGNsaWVudExlZnQgPSBzLmNvbnRhaW5lclswXS5jbGllbnRMZWZ0O1xuICAgICAgICAgICAgICAgIHJldHVybiBzLnNsaWRlVG8ocy5hY3RpdmVJbmRleCAtIDEsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIHMuc2xpZGVUbyhzLmFjdGl2ZUluZGV4IC0gMSwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xuICAgICAgICB9O1xuICAgICAgICBzLl9zbGlkZVByZXYgPSBmdW5jdGlvbiAoc3BlZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBzLnNsaWRlUHJldih0cnVlLCBzcGVlZCwgdHJ1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIHMuc2xpZGVSZXNldCA9IGZ1bmN0aW9uIChydW5DYWxsYmFja3MsIHNwZWVkLCBpbnRlcm5hbCkge1xuICAgICAgICAgICAgcmV0dXJuIHMuc2xpZGVUbyhzLmFjdGl2ZUluZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzKTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIFRyYW5zbGF0ZS90cmFuc2l0aW9uIGhlbHBlcnNcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBzLnNldFdyYXBwZXJUcmFuc2l0aW9uID0gZnVuY3Rpb24gKGR1cmF0aW9uLCBieUNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIHMud3JhcHBlci50cmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5lZmZlY3QgIT09ICdzbGlkZScgJiYgcy5lZmZlY3RzW3MucGFyYW1zLmVmZmVjdF0pIHtcbiAgICAgICAgICAgICAgICBzLmVmZmVjdHNbcy5wYXJhbXMuZWZmZWN0XS5zZXRUcmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wYXJhbGxheCAmJiBzLnBhcmFsbGF4KSB7XG4gICAgICAgICAgICAgICAgcy5wYXJhbGxheC5zZXRUcmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5zY3JvbGxiYXIgJiYgcy5zY3JvbGxiYXIpIHtcbiAgICAgICAgICAgICAgICBzLnNjcm9sbGJhci5zZXRUcmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5jb250cm9sICYmIHMuY29udHJvbGxlcikge1xuICAgICAgICAgICAgICAgIHMuY29udHJvbGxlci5zZXRUcmFuc2l0aW9uKGR1cmF0aW9uLCBieUNvbnRyb2xsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcy5lbWl0KCdvblNldFRyYW5zaXRpb24nLCBzLCBkdXJhdGlvbik7XG4gICAgICAgIH07XG4gICAgICAgIHMuc2V0V3JhcHBlclRyYW5zbGF0ZSA9IGZ1bmN0aW9uICh0cmFuc2xhdGUsIHVwZGF0ZUFjdGl2ZUluZGV4LCBieUNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIHZhciB4ID0gMCwgeSA9IDAsIHogPSAwO1xuICAgICAgICAgICAgaWYgKHMuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgICAgICAgICB4ID0gcy5ydGwgPyAtdHJhbnNsYXRlIDogdHJhbnNsYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgeSA9IHRyYW5zbGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMucm91bmRMZW5ndGhzKSB7XG4gICAgICAgICAgICAgICAgeCA9IHJvdW5kKHgpO1xuICAgICAgICAgICAgICAgIHkgPSByb3VuZCh5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBpZiAoIXMucGFyYW1zLnZpcnR1YWxUcmFuc2xhdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAocy5zdXBwb3J0LnRyYW5zZm9ybXMzZCkgcy53cmFwcGVyLnRyYW5zZm9ybSgndHJhbnNsYXRlM2QoJyArIHggKyAncHgsICcgKyB5ICsgJ3B4LCAnICsgeiArICdweCknKTtcbiAgICAgICAgICAgICAgICBlbHNlIHMud3JhcHBlci50cmFuc2Zvcm0oJ3RyYW5zbGF0ZSgnICsgeCArICdweCwgJyArIHkgKyAncHgpJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgcy50cmFuc2xhdGUgPSBzLmlzSG9yaXpvbnRhbCgpID8geCA6IHk7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgd2UgbmVlZCB0byB1cGRhdGUgcHJvZ3Jlc3NcbiAgICAgICAgICAgIHZhciBwcm9ncmVzcztcbiAgICAgICAgICAgIHZhciB0cmFuc2xhdGVzRGlmZiA9IHMubWF4VHJhbnNsYXRlKCkgLSBzLm1pblRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgaWYgKHRyYW5zbGF0ZXNEaWZmID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSAodHJhbnNsYXRlIC0gcy5taW5UcmFuc2xhdGUoKSkgLyAodHJhbnNsYXRlc0RpZmYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2dyZXNzICE9PSBzLnByb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgcy51cGRhdGVQcm9ncmVzcyh0cmFuc2xhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGlmICh1cGRhdGVBY3RpdmVJbmRleCkgcy51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmVmZmVjdCAhPT0gJ3NsaWRlJyAmJiBzLmVmZmVjdHNbcy5wYXJhbXMuZWZmZWN0XSkge1xuICAgICAgICAgICAgICAgIHMuZWZmZWN0c1tzLnBhcmFtcy5lZmZlY3RdLnNldFRyYW5zbGF0ZShzLnRyYW5zbGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMucGFyYWxsYXggJiYgcy5wYXJhbGxheCkge1xuICAgICAgICAgICAgICAgIHMucGFyYWxsYXguc2V0VHJhbnNsYXRlKHMudHJhbnNsYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5zY3JvbGxiYXIgJiYgcy5zY3JvbGxiYXIpIHtcbiAgICAgICAgICAgICAgICBzLnNjcm9sbGJhci5zZXRUcmFuc2xhdGUocy50cmFuc2xhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmNvbnRyb2wgJiYgcy5jb250cm9sbGVyKSB7XG4gICAgICAgICAgICAgICAgcy5jb250cm9sbGVyLnNldFRyYW5zbGF0ZShzLnRyYW5zbGF0ZSwgYnlDb250cm9sbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHMuZW1pdCgnb25TZXRUcmFuc2xhdGUnLCBzLCBzLnRyYW5zbGF0ZSk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBzLmdldFRyYW5zbGF0ZSA9IGZ1bmN0aW9uIChlbCwgYXhpcykge1xuICAgICAgICAgICAgdmFyIG1hdHJpeCwgY3VyVHJhbnNmb3JtLCBjdXJTdHlsZSwgdHJhbnNmb3JtTWF0cml4O1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIGF1dG9tYXRpYyBheGlzIGRldGVjdGlvblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBheGlzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGF4aXMgPSAneCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnZpcnR1YWxUcmFuc2xhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcy5ydGwgPyAtcy50cmFuc2xhdGUgOiBzLnRyYW5zbGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBjdXJTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKTtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuV2ViS2l0Q1NTTWF0cml4KSB7XG4gICAgICAgICAgICAgICAgY3VyVHJhbnNmb3JtID0gY3VyU3R5bGUudHJhbnNmb3JtIHx8IGN1clN0eWxlLndlYmtpdFRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgICBpZiAoY3VyVHJhbnNmb3JtLnNwbGl0KCcsJykubGVuZ3RoID4gNikge1xuICAgICAgICAgICAgICAgICAgICBjdXJUcmFuc2Zvcm0gPSBjdXJUcmFuc2Zvcm0uc3BsaXQoJywgJykubWFwKGZ1bmN0aW9uKGEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEucmVwbGFjZSgnLCcsJy4nKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuam9pbignLCAnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU29tZSBvbGQgdmVyc2lvbnMgb2YgV2Via2l0IGNob2tlIHdoZW4gJ25vbmUnIGlzIHBhc3NlZDsgcGFzc1xuICAgICAgICAgICAgICAgIC8vIGVtcHR5IHN0cmluZyBpbnN0ZWFkIGluIHRoaXMgY2FzZVxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybU1hdHJpeCA9IG5ldyB3aW5kb3cuV2ViS2l0Q1NTTWF0cml4KGN1clRyYW5zZm9ybSA9PT0gJ25vbmUnID8gJycgOiBjdXJUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtTWF0cml4ID0gY3VyU3R5bGUuTW96VHJhbnNmb3JtIHx8IGN1clN0eWxlLk9UcmFuc2Zvcm0gfHwgY3VyU3R5bGUuTXNUcmFuc2Zvcm0gfHwgY3VyU3R5bGUubXNUcmFuc2Zvcm0gIHx8IGN1clN0eWxlLnRyYW5zZm9ybSB8fCBjdXJTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCd0cmFuc2Zvcm0nKS5yZXBsYWNlKCd0cmFuc2xhdGUoJywgJ21hdHJpeCgxLCAwLCAwLCAxLCcpO1xuICAgICAgICAgICAgICAgIG1hdHJpeCA9IHRyYW5zZm9ybU1hdHJpeC50b1N0cmluZygpLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKGF4aXMgPT09ICd4Jykge1xuICAgICAgICAgICAgICAgIC8vTGF0ZXN0IENocm9tZSBhbmQgd2Via2l0cyBGaXhcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LldlYktpdENTU01hdHJpeClcbiAgICAgICAgICAgICAgICAgICAgY3VyVHJhbnNmb3JtID0gdHJhbnNmb3JtTWF0cml4Lm00MTtcbiAgICAgICAgICAgICAgICAvL0NyYXp5IElFMTAgTWF0cml4XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobWF0cml4Lmxlbmd0aCA9PT0gMTYpXG4gICAgICAgICAgICAgICAgICAgIGN1clRyYW5zZm9ybSA9IHBhcnNlRmxvYXQobWF0cml4WzEyXSk7XG4gICAgICAgICAgICAgICAgLy9Ob3JtYWwgQnJvd3NlcnNcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGN1clRyYW5zZm9ybSA9IHBhcnNlRmxvYXQobWF0cml4WzRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChheGlzID09PSAneScpIHtcbiAgICAgICAgICAgICAgICAvL0xhdGVzdCBDaHJvbWUgYW5kIHdlYmtpdHMgRml4XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5XZWJLaXRDU1NNYXRyaXgpXG4gICAgICAgICAgICAgICAgICAgIGN1clRyYW5zZm9ybSA9IHRyYW5zZm9ybU1hdHJpeC5tNDI7XG4gICAgICAgICAgICAgICAgLy9DcmF6eSBJRTEwIE1hdHJpeFxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1hdHJpeC5sZW5ndGggPT09IDE2KVxuICAgICAgICAgICAgICAgICAgICBjdXJUcmFuc2Zvcm0gPSBwYXJzZUZsb2F0KG1hdHJpeFsxM10pO1xuICAgICAgICAgICAgICAgIC8vTm9ybWFsIEJyb3dzZXJzXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBjdXJUcmFuc2Zvcm0gPSBwYXJzZUZsb2F0KG1hdHJpeFs1XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5ydGwgJiYgY3VyVHJhbnNmb3JtKSBjdXJUcmFuc2Zvcm0gPSAtY3VyVHJhbnNmb3JtO1xuICAgICAgICAgICAgcmV0dXJuIGN1clRyYW5zZm9ybSB8fCAwO1xuICAgICAgICB9O1xuICAgICAgICBzLmdldFdyYXBwZXJUcmFuc2xhdGUgPSBmdW5jdGlvbiAoYXhpcykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBheGlzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGF4aXMgPSBzLmlzSG9yaXpvbnRhbCgpID8gJ3gnIDogJ3knO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHMuZ2V0VHJhbnNsYXRlKHMud3JhcHBlclswXSwgYXhpcyk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBPYnNlcnZlclxuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIHMub2JzZXJ2ZXJzID0gW107XG4gICAgICAgIGZ1bmN0aW9uIGluaXRPYnNlcnZlcih0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICAgICAgLy8gY3JlYXRlIGFuIG9ic2VydmVyIGluc3RhbmNlXG4gICAgICAgICAgICB2YXIgT2JzZXJ2ZXJGdW5jID0gd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIgfHwgd2luZG93LldlYmtpdE11dGF0aW9uT2JzZXJ2ZXI7XG4gICAgICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgT2JzZXJ2ZXJGdW5jKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAobXV0YXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcy5vblJlc2l6ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgcy5lbWl0KCdvbk9ic2VydmVyVXBkYXRlJywgcywgbXV0YXRpb24pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQsIHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBvcHRpb25zLmF0dHJpYnV0ZXMsXG4gICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0eXBlb2Ygb3B0aW9ucy5jaGlsZExpc3QgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IG9wdGlvbnMuY2hpbGRMaXN0LFxuICAgICAgICAgICAgICAgIGNoYXJhY3RlckRhdGE6IHR5cGVvZiBvcHRpb25zLmNoYXJhY3RlckRhdGEgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IG9wdGlvbnMuY2hhcmFjdGVyRGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgcy5vYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XG4gICAgICAgIH1cbiAgICAgICAgcy5pbml0T2JzZXJ2ZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLm9ic2VydmVQYXJlbnRzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lclBhcmVudHMgPSBzLmNvbnRhaW5lci5wYXJlbnRzKCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb250YWluZXJQYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGluaXRPYnNlcnZlcihjb250YWluZXJQYXJlbnRzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gT2JzZXJ2ZSBjb250YWluZXJcbiAgICAgICAgICAgIGluaXRPYnNlcnZlcihzLmNvbnRhaW5lclswXSwge2NoaWxkTGlzdDogZmFsc2V9KTtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyBPYnNlcnZlIHdyYXBwZXJcbiAgICAgICAgICAgIGluaXRPYnNlcnZlcihzLndyYXBwZXJbMF0sIHthdHRyaWJ1dGVzOiBmYWxzZX0pO1xuICAgICAgICB9O1xuICAgICAgICBzLmRpc2Nvbm5lY3RPYnNlcnZlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHMub2JzZXJ2ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcy5vYnNlcnZlcnNbaV0uZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcy5vYnNlcnZlcnMgPSBbXTtcbiAgICAgICAgfTtcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgTG9vcFxuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIC8vIENyZWF0ZSBsb29wZWQgc2xpZGVzXG4gICAgICAgIHMuY3JlYXRlTG9vcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBkdXBsaWNhdGVkIHNsaWRlc1xuICAgICAgICAgICAgcy53cmFwcGVyLmNoaWxkcmVuKCcuJyArIHMucGFyYW1zLnNsaWRlQ2xhc3MgKyAnLicgKyBzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKS5yZW1vdmUoKTtcbiAgICAgICAgXG4gICAgICAgICAgICB2YXIgc2xpZGVzID0gcy53cmFwcGVyLmNoaWxkcmVuKCcuJyArIHMucGFyYW1zLnNsaWRlQ2xhc3MpO1xuICAgICAgICBcbiAgICAgICAgICAgIGlmKHMucGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyAmJiAhcy5wYXJhbXMubG9vcGVkU2xpZGVzKSBzLnBhcmFtcy5sb29wZWRTbGlkZXMgPSBzbGlkZXMubGVuZ3RoO1xuICAgICAgICBcbiAgICAgICAgICAgIHMubG9vcGVkU2xpZGVzID0gcGFyc2VJbnQocy5wYXJhbXMubG9vcGVkU2xpZGVzIHx8IHMucGFyYW1zLnNsaWRlc1BlclZpZXcsIDEwKTtcbiAgICAgICAgICAgIHMubG9vcGVkU2xpZGVzID0gcy5sb29wZWRTbGlkZXMgKyBzLnBhcmFtcy5sb29wQWRkaXRpb25hbFNsaWRlcztcbiAgICAgICAgICAgIGlmIChzLmxvb3BlZFNsaWRlcyA+IHNsaWRlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzLmxvb3BlZFNsaWRlcyA9IHNsaWRlcy5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgdmFyIHByZXBlbmRTbGlkZXMgPSBbXSwgYXBwZW5kU2xpZGVzID0gW10sIGk7XG4gICAgICAgICAgICBzbGlkZXMuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPCBzLmxvb3BlZFNsaWRlcykgYXBwZW5kU2xpZGVzLnB1c2goZWwpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IHNsaWRlcy5sZW5ndGggJiYgaW5kZXggPj0gc2xpZGVzLmxlbmd0aCAtIHMubG9vcGVkU2xpZGVzKSBwcmVwZW5kU2xpZGVzLnB1c2goZWwpO1xuICAgICAgICAgICAgICAgIHNsaWRlLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JywgaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYXBwZW5kU2xpZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcy53cmFwcGVyLmFwcGVuZCgkKGFwcGVuZFNsaWRlc1tpXS5jbG9uZU5vZGUodHJ1ZSkpLmFkZENsYXNzKHMucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoaSA9IHByZXBlbmRTbGlkZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBzLndyYXBwZXIucHJlcGVuZCgkKHByZXBlbmRTbGlkZXNbaV0uY2xvbmVOb2RlKHRydWUpKS5hZGRDbGFzcyhzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHMuZGVzdHJveUxvb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzLndyYXBwZXIuY2hpbGRyZW4oJy4nICsgcy5wYXJhbXMuc2xpZGVDbGFzcyArICcuJyArIHMucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpLnJlbW92ZSgpO1xuICAgICAgICAgICAgcy5zbGlkZXMucmVtb3ZlQXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKTtcbiAgICAgICAgfTtcbiAgICAgICAgcy5yZUxvb3AgPSBmdW5jdGlvbiAodXBkYXRlUG9zaXRpb24pIHtcbiAgICAgICAgICAgIHZhciBvbGRJbmRleCA9IHMuYWN0aXZlSW5kZXggLSBzLmxvb3BlZFNsaWRlcztcbiAgICAgICAgICAgIHMuZGVzdHJveUxvb3AoKTtcbiAgICAgICAgICAgIHMuY3JlYXRlTG9vcCgpO1xuICAgICAgICAgICAgcy51cGRhdGVTbGlkZXNTaXplKCk7XG4gICAgICAgICAgICBpZiAodXBkYXRlUG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICBzLnNsaWRlVG8ob2xkSW5kZXggKyBzLmxvb3BlZFNsaWRlcywgMCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgfTtcbiAgICAgICAgcy5maXhMb29wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG5ld0luZGV4O1xuICAgICAgICAgICAgLy9GaXggRm9yIE5lZ2F0aXZlIE92ZXJzbGlkaW5nXG4gICAgICAgICAgICBpZiAocy5hY3RpdmVJbmRleCA8IHMubG9vcGVkU2xpZGVzKSB7XG4gICAgICAgICAgICAgICAgbmV3SW5kZXggPSBzLnNsaWRlcy5sZW5ndGggLSBzLmxvb3BlZFNsaWRlcyAqIDMgKyBzLmFjdGl2ZUluZGV4O1xuICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyBzLmxvb3BlZFNsaWRlcztcbiAgICAgICAgICAgICAgICBzLnNsaWRlVG8obmV3SW5kZXgsIDAsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vRml4IEZvciBQb3NpdGl2ZSBPdmVyc2xpZGluZ1xuICAgICAgICAgICAgZWxzZSBpZiAoKHMucGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyAmJiBzLmFjdGl2ZUluZGV4ID49IHMubG9vcGVkU2xpZGVzICogMikgfHwgKHMuYWN0aXZlSW5kZXggPiBzLnNsaWRlcy5sZW5ndGggLSBzLnBhcmFtcy5zbGlkZXNQZXJWaWV3ICogMikpIHtcbiAgICAgICAgICAgICAgICBuZXdJbmRleCA9IC1zLnNsaWRlcy5sZW5ndGggKyBzLmFjdGl2ZUluZGV4ICsgcy5sb29wZWRTbGlkZXM7XG4gICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIHMubG9vcGVkU2xpZGVzO1xuICAgICAgICAgICAgICAgIHMuc2xpZGVUbyhuZXdJbmRleCwgMCwgZmFsc2UsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBBcHBlbmQvUHJlcGVuZC9SZW1vdmUgU2xpZGVzXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcy5hcHBlbmRTbGlkZSA9IGZ1bmN0aW9uIChzbGlkZXMpIHtcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sb29wKSB7XG4gICAgICAgICAgICAgICAgcy5kZXN0cm95TG9vcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzbGlkZXMgPT09ICdvYmplY3QnICYmIHNsaWRlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2xpZGVzW2ldKSBzLndyYXBwZXIuYXBwZW5kKHNsaWRlc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcy53cmFwcGVyLmFwcGVuZChzbGlkZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgICAgICAgICBzLmNyZWF0ZUxvb3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghKHMucGFyYW1zLm9ic2VydmVyICYmIHMuc3VwcG9ydC5vYnNlcnZlcikpIHtcbiAgICAgICAgICAgICAgICBzLnVwZGF0ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcy5wcmVwZW5kU2xpZGUgPSBmdW5jdGlvbiAoc2xpZGVzKSB7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubG9vcCkge1xuICAgICAgICAgICAgICAgIHMuZGVzdHJveUxvb3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBuZXdBY3RpdmVJbmRleCA9IHMuYWN0aXZlSW5kZXggKyAxO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzbGlkZXMgPT09ICdvYmplY3QnICYmIHNsaWRlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2xpZGVzW2ldKSBzLndyYXBwZXIucHJlcGVuZChzbGlkZXNbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXdBY3RpdmVJbmRleCA9IHMuYWN0aXZlSW5kZXggKyBzbGlkZXMubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcy53cmFwcGVyLnByZXBlbmQoc2xpZGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sb29wKSB7XG4gICAgICAgICAgICAgICAgcy5jcmVhdGVMb29wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIShzLnBhcmFtcy5vYnNlcnZlciAmJiBzLnN1cHBvcnQub2JzZXJ2ZXIpKSB7XG4gICAgICAgICAgICAgICAgcy51cGRhdGUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzLnNsaWRlVG8obmV3QWN0aXZlSW5kZXgsIDAsIGZhbHNlKTtcbiAgICAgICAgfTtcbiAgICAgICAgcy5yZW1vdmVTbGlkZSA9IGZ1bmN0aW9uIChzbGlkZXNJbmRleGVzKSB7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubG9vcCkge1xuICAgICAgICAgICAgICAgIHMuZGVzdHJveUxvb3AoKTtcbiAgICAgICAgICAgICAgICBzLnNsaWRlcyA9IHMud3JhcHBlci5jaGlsZHJlbignLicgKyBzLnBhcmFtcy5zbGlkZUNsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBuZXdBY3RpdmVJbmRleCA9IHMuYWN0aXZlSW5kZXgsXG4gICAgICAgICAgICAgICAgaW5kZXhUb1JlbW92ZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc2xpZGVzSW5kZXhlcyA9PT0gJ29iamVjdCcgJiYgc2xpZGVzSW5kZXhlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlc0luZGV4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhUb1JlbW92ZSA9IHNsaWRlc0luZGV4ZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnNsaWRlc1tpbmRleFRvUmVtb3ZlXSkgcy5zbGlkZXMuZXEoaW5kZXhUb1JlbW92ZSkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleFRvUmVtb3ZlIDwgbmV3QWN0aXZlSW5kZXgpIG5ld0FjdGl2ZUluZGV4LS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld0FjdGl2ZUluZGV4ID0gTWF0aC5tYXgobmV3QWN0aXZlSW5kZXgsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5kZXhUb1JlbW92ZSA9IHNsaWRlc0luZGV4ZXM7XG4gICAgICAgICAgICAgICAgaWYgKHMuc2xpZGVzW2luZGV4VG9SZW1vdmVdKSBzLnNsaWRlcy5lcShpbmRleFRvUmVtb3ZlKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXhUb1JlbW92ZSA8IG5ld0FjdGl2ZUluZGV4KSBuZXdBY3RpdmVJbmRleC0tO1xuICAgICAgICAgICAgICAgIG5ld0FjdGl2ZUluZGV4ID0gTWF0aC5tYXgobmV3QWN0aXZlSW5kZXgsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sb29wKSB7XG4gICAgICAgICAgICAgICAgcy5jcmVhdGVMb29wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKCEocy5wYXJhbXMub2JzZXJ2ZXIgJiYgcy5zdXBwb3J0Lm9ic2VydmVyKSkge1xuICAgICAgICAgICAgICAgIHMudXBkYXRlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgICAgICAgICBzLnNsaWRlVG8obmV3QWN0aXZlSW5kZXggKyBzLmxvb3BlZFNsaWRlcywgMCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcy5zbGlkZVRvKG5ld0FjdGl2ZUluZGV4LCAwLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB9O1xuICAgICAgICBzLnJlbW92ZUFsbFNsaWRlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzbGlkZXNJbmRleGVzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHMuc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc2xpZGVzSW5kZXhlcy5wdXNoKGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcy5yZW1vdmVTbGlkZShzbGlkZXNJbmRleGVzKTtcbiAgICAgICAgfTtcbiAgICAgICAgXG5cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgRWZmZWN0c1xuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIHMuZWZmZWN0cyA9IHtcbiAgICAgICAgICAgIGZhZGU6IHtcbiAgICAgICAgICAgICAgICBzZXRUcmFuc2xhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzLnNsaWRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlID0gcy5zbGlkZXMuZXEoaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gc2xpZGVbMF0uc3dpcGVyU2xpZGVPZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHggPSAtb2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlKSB0eCA9IHR4IC0gcy50cmFuc2xhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHkgPSB0eDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGVPcGFjaXR5ID0gcy5wYXJhbXMuZmFkZS5jcm9zc0ZhZGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1heCgxIC0gTWF0aC5hYnMoc2xpZGVbMF0ucHJvZ3Jlc3MpLCAwKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEgKyBNYXRoLm1pbihNYXRoLm1heChzbGlkZVswXS5wcm9ncmVzcywgLTEpLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IHNsaWRlT3BhY2l0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRyYW5zZm9ybSgndHJhbnNsYXRlM2QoJyArIHR4ICsgJ3B4LCAnICsgdHkgKyAncHgsIDBweCknKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXRUcmFuc2l0aW9uOiBmdW5jdGlvbiAoZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcy5zbGlkZXMudHJhbnNpdGlvbihkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlICYmIGR1cmF0aW9uICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXZlbnRUcmlnZ2VyZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpZGVzLnRyYW5zaXRpb25FbmQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudFRyaWdnZXJlZCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcykgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50VHJpZ2dlcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmFuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0cmlnZ2VyRXZlbnRzID0gWyd3ZWJraXRUcmFuc2l0aW9uRW5kJywgJ3RyYW5zaXRpb25lbmQnLCAnb1RyYW5zaXRpb25FbmQnLCAnTVNUcmFuc2l0aW9uRW5kJywgJ21zVHJhbnNpdGlvbkVuZCddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHJpZ2dlckV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLndyYXBwZXIudHJpZ2dlcih0cmlnZ2VyRXZlbnRzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmbGlwOiB7XG4gICAgICAgICAgICAgICAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcy5zbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZSA9IHMuc2xpZGVzLmVxKGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gc2xpZGVbMF0ucHJvZ3Jlc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuZmxpcC5saW1pdFJvdGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSBNYXRoLm1heChNYXRoLm1pbihzbGlkZVswXS5wcm9ncmVzcywgMSksIC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvZmZzZXQgPSBzbGlkZVswXS5zd2lwZXJTbGlkZU9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByb3RhdGUgPSAtMTgwICogcHJvZ3Jlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlWSA9IHJvdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3RhdGVYID0gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eCA9IC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHkgPSB0eDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlWCA9IC1yb3RhdGVZO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZVkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocy5ydGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3RhdGVZID0gLXJvdGF0ZVk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVbMF0uc3R5bGUuekluZGV4ID0gLU1hdGguYWJzKE1hdGgucm91bmQocHJvZ3Jlc3MpKSArIHMuc2xpZGVzLmxlbmd0aDtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuZmxpcC5zbGlkZVNoYWRvd3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1NldCBzaGFkb3dzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNoYWRvd0JlZm9yZSA9IHMuaXNIb3Jpem9udGFsKCkgPyBzbGlkZS5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0JykgOiBzbGlkZS5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2hhZG93QWZ0ZXIgPSBzLmlzSG9yaXpvbnRhbCgpID8gc2xpZGUuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQnKSA6IHNsaWRlLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGFkb3dCZWZvcmUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRvd0JlZm9yZSA9ICQoJzxkaXYgY2xhc3M9XCJzd2lwZXItc2xpZGUtc2hhZG93LScgKyAocy5pc0hvcml6b250YWwoKSA/ICdsZWZ0JyA6ICd0b3AnKSArICdcIj48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGUuYXBwZW5kKHNoYWRvd0JlZm9yZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGFkb3dBZnRlci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhZG93QWZ0ZXIgPSAkKCc8ZGl2IGNsYXNzPVwic3dpcGVyLXNsaWRlLXNoYWRvdy0nICsgKHMuaXNIb3Jpem9udGFsKCkgPyAncmlnaHQnIDogJ2JvdHRvbScpICsgJ1wiPjwvZGl2PicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZS5hcHBlbmQoc2hhZG93QWZ0ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hhZG93QmVmb3JlLmxlbmd0aCkgc2hhZG93QmVmb3JlWzBdLnN0eWxlLm9wYWNpdHkgPSBNYXRoLm1heCgtcHJvZ3Jlc3MsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGFkb3dBZnRlci5sZW5ndGgpIHNoYWRvd0FmdGVyWzBdLnN0eWxlLm9wYWNpdHkgPSBNYXRoLm1heChwcm9ncmVzcywgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudHJhbnNmb3JtKCd0cmFuc2xhdGUzZCgnICsgdHggKyAncHgsICcgKyB0eSArICdweCwgMHB4KSByb3RhdGVYKCcgKyByb3RhdGVYICsgJ2RlZykgcm90YXRlWSgnICsgcm90YXRlWSArICdkZWcpJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uIChkdXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBzLnNsaWRlcy50cmFuc2l0aW9uKGR1cmF0aW9uKS5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQnKS50cmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnZpcnR1YWxUcmFuc2xhdGUgJiYgZHVyYXRpb24gIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBldmVudFRyaWdnZXJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGlkZXMuZXEocy5hY3RpdmVJbmRleCkudHJhbnNpdGlvbkVuZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50VHJpZ2dlcmVkKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKHMucGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3MpKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRUcmlnZ2VyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRyaWdnZXJFdmVudHMgPSBbJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCAndHJhbnNpdGlvbmVuZCcsICdvVHJhbnNpdGlvbkVuZCcsICdNU1RyYW5zaXRpb25FbmQnLCAnbXNUcmFuc2l0aW9uRW5kJ107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmlnZ2VyRXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMud3JhcHBlci50cmlnZ2VyKHRyaWdnZXJFdmVudHNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGN1YmU6IHtcbiAgICAgICAgICAgICAgICBzZXRUcmFuc2xhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHdyYXBwZXJSb3RhdGUgPSAwLCBjdWJlU2hhZG93O1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuY3ViZS5zaGFkb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3ViZVNoYWRvdyA9IHMud3JhcHBlci5maW5kKCcuc3dpcGVyLWN1YmUtc2hhZG93Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1YmVTaGFkb3cubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1YmVTaGFkb3cgPSAkKCc8ZGl2IGNsYXNzPVwic3dpcGVyLWN1YmUtc2hhZG93XCI+PC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMud3JhcHBlci5hcHBlbmQoY3ViZVNoYWRvdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1YmVTaGFkb3cuY3NzKHtoZWlnaHQ6IHMud2lkdGggKyAncHgnfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdWJlU2hhZG93ID0gcy5jb250YWluZXIuZmluZCgnLnN3aXBlci1jdWJlLXNoYWRvdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdWJlU2hhZG93Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdWJlU2hhZG93ID0gJCgnPGRpdiBjbGFzcz1cInN3aXBlci1jdWJlLXNoYWRvd1wiPjwvZGl2PicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmNvbnRhaW5lci5hcHBlbmQoY3ViZVNoYWRvdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcy5zbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZSA9IHMuc2xpZGVzLmVxKGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlQW5nbGUgPSBpICogOTA7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcm91bmQgPSBNYXRoLmZsb29yKHNsaWRlQW5nbGUgLyAzNjApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMucnRsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVBbmdsZSA9IC1zbGlkZUFuZ2xlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kID0gTWF0aC5mbG9vcigtc2xpZGVBbmdsZSAvIDM2MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSBNYXRoLm1heChNYXRoLm1pbihzbGlkZVswXS5wcm9ncmVzcywgMSksIC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0eCA9IDAsIHR5ID0gMCwgdHogPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgJSA0ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHggPSAtIHJvdW5kICogNCAqIHMuc2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eiA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgoaSAtIDEpICUgNCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eiA9IC0gcm91bmQgKiA0ICogcy5zaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKGkgLSAyKSAlIDQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eCA9IHMuc2l6ZSArIHJvdW5kICogNCAqIHMuc2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eiA9IHMuc2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKChpIC0gMykgJSA0ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHggPSAtIHMuc2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eiA9IDMgKiBzLnNpemUgKyBzLnNpemUgKiA0ICogcm91bmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5ydGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eCA9IC10eDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXMuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eSA9IHR4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHJhbnNmb3JtID0gJ3JvdGF0ZVgoJyArIChzLmlzSG9yaXpvbnRhbCgpID8gMCA6IC1zbGlkZUFuZ2xlKSArICdkZWcpIHJvdGF0ZVkoJyArIChzLmlzSG9yaXpvbnRhbCgpID8gc2xpZGVBbmdsZSA6IDApICsgJ2RlZykgdHJhbnNsYXRlM2QoJyArIHR4ICsgJ3B4LCAnICsgdHkgKyAncHgsICcgKyB0eiArICdweCknO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2dyZXNzIDw9IDEgJiYgcHJvZ3Jlc3MgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXJSb3RhdGUgPSBpICogOTAgKyBwcm9ncmVzcyAqIDkwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLnJ0bCkgd3JhcHBlclJvdGF0ZSA9IC1pICogOTAgLSBwcm9ncmVzcyAqIDkwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGUudHJhbnNmb3JtKHRyYW5zZm9ybSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuY3ViZS5zbGlkZVNoYWRvd3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1NldCBzaGFkb3dzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNoYWRvd0JlZm9yZSA9IHMuaXNIb3Jpem9udGFsKCkgPyBzbGlkZS5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0JykgOiBzbGlkZS5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2hhZG93QWZ0ZXIgPSBzLmlzSG9yaXpvbnRhbCgpID8gc2xpZGUuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQnKSA6IHNsaWRlLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGFkb3dCZWZvcmUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRvd0JlZm9yZSA9ICQoJzxkaXYgY2xhc3M9XCJzd2lwZXItc2xpZGUtc2hhZG93LScgKyAocy5pc0hvcml6b250YWwoKSA/ICdsZWZ0JyA6ICd0b3AnKSArICdcIj48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGUuYXBwZW5kKHNoYWRvd0JlZm9yZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGFkb3dBZnRlci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhZG93QWZ0ZXIgPSAkKCc8ZGl2IGNsYXNzPVwic3dpcGVyLXNsaWRlLXNoYWRvdy0nICsgKHMuaXNIb3Jpem9udGFsKCkgPyAncmlnaHQnIDogJ2JvdHRvbScpICsgJ1wiPjwvZGl2PicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZS5hcHBlbmQoc2hhZG93QWZ0ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hhZG93QmVmb3JlLmxlbmd0aCkgc2hhZG93QmVmb3JlWzBdLnN0eWxlLm9wYWNpdHkgPSBNYXRoLm1heCgtcHJvZ3Jlc3MsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGFkb3dBZnRlci5sZW5ndGgpIHNoYWRvd0FmdGVyWzBdLnN0eWxlLm9wYWNpdHkgPSBNYXRoLm1heChwcm9ncmVzcywgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcy53cmFwcGVyLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luJzogJzUwJSA1MCUgLScgKyAocy5zaXplIC8gMikgKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJy1tb3otdHJhbnNmb3JtLW9yaWdpbic6ICc1MCUgNTAlIC0nICsgKHMuc2l6ZSAvIDIpICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICctbXMtdHJhbnNmb3JtLW9yaWdpbic6ICc1MCUgNTAlIC0nICsgKHMuc2l6ZSAvIDIpICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogJzUwJSA1MCUgLScgKyAocy5zaXplIC8gMikgKyAncHgnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmN1YmUuc2hhZG93KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5pc0hvcml6b250YWwoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1YmVTaGFkb3cudHJhbnNmb3JtKCd0cmFuc2xhdGUzZCgwcHgsICcgKyAocy53aWR0aCAvIDIgKyBzLnBhcmFtcy5jdWJlLnNoYWRvd09mZnNldCkgKyAncHgsICcgKyAoLXMud2lkdGggLyAyKSArICdweCkgcm90YXRlWCg5MGRlZykgcm90YXRlWigwZGVnKSBzY2FsZSgnICsgKHMucGFyYW1zLmN1YmUuc2hhZG93U2NhbGUpICsgJyknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzaGFkb3dBbmdsZSA9IE1hdGguYWJzKHdyYXBwZXJSb3RhdGUpIC0gTWF0aC5mbG9vcihNYXRoLmFicyh3cmFwcGVyUm90YXRlKSAvIDkwKSAqIDkwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtdWx0aXBsaWVyID0gMS41IC0gKE1hdGguc2luKHNoYWRvd0FuZ2xlICogMiAqIE1hdGguUEkgLyAzNjApIC8gMiArIE1hdGguY29zKHNoYWRvd0FuZ2xlICogMiAqIE1hdGguUEkgLyAzNjApIC8gMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNjYWxlMSA9IHMucGFyYW1zLmN1YmUuc2hhZG93U2NhbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlMiA9IHMucGFyYW1zLmN1YmUuc2hhZG93U2NhbGUgLyBtdWx0aXBsaWVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBzLnBhcmFtcy5jdWJlLnNoYWRvd09mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdWJlU2hhZG93LnRyYW5zZm9ybSgnc2NhbGUzZCgnICsgc2NhbGUxICsgJywgMSwgJyArIHNjYWxlMiArICcpIHRyYW5zbGF0ZTNkKDBweCwgJyArIChzLmhlaWdodCAvIDIgKyBvZmZzZXQpICsgJ3B4LCAnICsgKC1zLmhlaWdodCAvIDIgLyBzY2FsZTIpICsgJ3B4KSByb3RhdGVYKC05MGRlZyknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgekZhY3RvciA9IChzLmlzU2FmYXJpIHx8IHMuaXNVaVdlYlZpZXcpID8gKC1zLnNpemUgLyAyKSA6IDA7XG4gICAgICAgICAgICAgICAgICAgIHMud3JhcHBlci50cmFuc2Zvcm0oJ3RyYW5zbGF0ZTNkKDBweCwwLCcgKyB6RmFjdG9yICsgJ3B4KSByb3RhdGVYKCcgKyAocy5pc0hvcml6b250YWwoKSA/IDAgOiB3cmFwcGVyUm90YXRlKSArICdkZWcpIHJvdGF0ZVkoJyArIChzLmlzSG9yaXpvbnRhbCgpID8gLXdyYXBwZXJSb3RhdGUgOiAwKSArICdkZWcpJyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXRUcmFuc2l0aW9uOiBmdW5jdGlvbiAoZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcy5zbGlkZXMudHJhbnNpdGlvbihkdXJhdGlvbikuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0JykudHJhbnNpdGlvbihkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5jdWJlLnNoYWRvdyAmJiAhcy5pc0hvcml6b250YWwoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5jb250YWluZXIuZmluZCgnLnN3aXBlci1jdWJlLXNoYWRvdycpLnRyYW5zaXRpb24oZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvdmVyZmxvdzoge1xuICAgICAgICAgICAgICAgIHNldFRyYW5zbGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdHJhbnNmb3JtID0gcy50cmFuc2xhdGU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjZW50ZXIgPSBzLmlzSG9yaXpvbnRhbCgpID8gLXRyYW5zZm9ybSArIHMud2lkdGggLyAyIDogLXRyYW5zZm9ybSArIHMuaGVpZ2h0IC8gMjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJvdGF0ZSA9IHMuaXNIb3Jpem9udGFsKCkgPyBzLnBhcmFtcy5jb3ZlcmZsb3cucm90YXRlOiAtcy5wYXJhbXMuY292ZXJmbG93LnJvdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyYW5zbGF0ZSA9IHMucGFyYW1zLmNvdmVyZmxvdy5kZXB0aDtcbiAgICAgICAgICAgICAgICAgICAgLy9FYWNoIHNsaWRlIG9mZnNldCBmcm9tIGNlbnRlclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gcy5zbGlkZXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZSA9IHMuc2xpZGVzLmVxKGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlU2l6ZSA9IHMuc2xpZGVzU2l6ZXNHcmlkW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlT2Zmc2V0ID0gc2xpZGVbMF0uc3dpcGVyU2xpZGVPZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0TXVsdGlwbGllciA9IChjZW50ZXIgLSBzbGlkZU9mZnNldCAtIHNsaWRlU2l6ZSAvIDIpIC8gc2xpZGVTaXplICogcy5wYXJhbXMuY292ZXJmbG93Lm1vZGlmaWVyO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByb3RhdGVZID0gcy5pc0hvcml6b250YWwoKSA/IHJvdGF0ZSAqIG9mZnNldE11bHRpcGxpZXIgOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJvdGF0ZVggPSBzLmlzSG9yaXpvbnRhbCgpID8gMCA6IHJvdGF0ZSAqIG9mZnNldE11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB2YXIgcm90YXRlWiA9IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0cmFuc2xhdGVaID0gLXRyYW5zbGF0ZSAqIE1hdGguYWJzKG9mZnNldE11bHRpcGxpZXIpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0cmFuc2xhdGVZID0gcy5pc0hvcml6b250YWwoKSA/IDAgOiBzLnBhcmFtcy5jb3ZlcmZsb3cuc3RyZXRjaCAqIChvZmZzZXRNdWx0aXBsaWVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0cmFuc2xhdGVYID0gcy5pc0hvcml6b250YWwoKSA/IHMucGFyYW1zLmNvdmVyZmxvdy5zdHJldGNoICogKG9mZnNldE11bHRpcGxpZXIpIDogMDtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0ZpeCBmb3IgdWx0cmEgc21hbGwgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnModHJhbnNsYXRlWCkgPCAwLjAwMSkgdHJhbnNsYXRlWCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnModHJhbnNsYXRlWSkgPCAwLjAwMSkgdHJhbnNsYXRlWSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnModHJhbnNsYXRlWikgPCAwLjAwMSkgdHJhbnNsYXRlWiA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMocm90YXRlWSkgPCAwLjAwMSkgcm90YXRlWSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMocm90YXRlWCkgPCAwLjAwMSkgcm90YXRlWCA9IDA7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlVHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKCcgKyB0cmFuc2xhdGVYICsgJ3B4LCcgKyB0cmFuc2xhdGVZICsgJ3B4LCcgKyB0cmFuc2xhdGVaICsgJ3B4KSAgcm90YXRlWCgnICsgcm90YXRlWCArICdkZWcpIHJvdGF0ZVkoJyArIHJvdGF0ZVkgKyAnZGVnKSc7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGUudHJhbnNmb3JtKHNsaWRlVHJhbnNmb3JtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlWzBdLnN0eWxlLnpJbmRleCA9IC1NYXRoLmFicyhNYXRoLnJvdW5kKG9mZnNldE11bHRpcGxpZXIpKSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuY292ZXJmbG93LnNsaWRlU2hhZG93cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vU2V0IHNoYWRvd3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2hhZG93QmVmb3JlID0gcy5pc0hvcml6b250YWwoKSA/IHNsaWRlLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQnKSA6IHNsaWRlLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzaGFkb3dBZnRlciA9IHMuaXNIb3Jpem9udGFsKCkgPyBzbGlkZS5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCcpIDogc2xpZGUuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoYWRvd0JlZm9yZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhZG93QmVmb3JlID0gJCgnPGRpdiBjbGFzcz1cInN3aXBlci1zbGlkZS1zaGFkb3ctJyArIChzLmlzSG9yaXpvbnRhbCgpID8gJ2xlZnQnIDogJ3RvcCcpICsgJ1wiPjwvZGl2PicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZS5hcHBlbmQoc2hhZG93QmVmb3JlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoYWRvd0FmdGVyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFkb3dBZnRlciA9ICQoJzxkaXYgY2xhc3M9XCJzd2lwZXItc2xpZGUtc2hhZG93LScgKyAocy5pc0hvcml6b250YWwoKSA/ICdyaWdodCcgOiAnYm90dG9tJykgKyAnXCI+PC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlLmFwcGVuZChzaGFkb3dBZnRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGFkb3dCZWZvcmUubGVuZ3RoKSBzaGFkb3dCZWZvcmVbMF0uc3R5bGUub3BhY2l0eSA9IG9mZnNldE11bHRpcGxpZXIgPiAwID8gb2Zmc2V0TXVsdGlwbGllciA6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoYWRvd0FmdGVyLmxlbmd0aCkgc2hhZG93QWZ0ZXJbMF0uc3R5bGUub3BhY2l0eSA9ICgtb2Zmc2V0TXVsdGlwbGllcikgPiAwID8gLW9mZnNldE11bHRpcGxpZXIgOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvL1NldCBjb3JyZWN0IHBlcnNwZWN0aXZlIGZvciBJRTEwXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmJyb3dzZXIuaWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3cyA9IHMud3JhcHBlclswXS5zdHlsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdzLnBlcnNwZWN0aXZlT3JpZ2luID0gY2VudGVyICsgJ3B4IDUwJSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uIChkdXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBzLnNsaWRlcy50cmFuc2l0aW9uKGR1cmF0aW9uKS5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQnKS50cmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgSW1hZ2VzIExhenkgTG9hZGluZ1xuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIHMubGF6eSA9IHtcbiAgICAgICAgICAgIGluaXRpYWxJbWFnZUxvYWRlZDogZmFsc2UsXG4gICAgICAgICAgICBsb2FkSW1hZ2VJblNsaWRlOiBmdW5jdGlvbiAoaW5kZXgsIGxvYWRJbkR1cGxpY2F0ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaW5kZXggPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsb2FkSW5EdXBsaWNhdGUgPT09ICd1bmRlZmluZWQnKSBsb2FkSW5EdXBsaWNhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChzLnNsaWRlcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlID0gcy5zbGlkZXMuZXEoaW5kZXgpO1xuICAgICAgICAgICAgICAgIHZhciBpbWcgPSBzbGlkZS5maW5kKCcuc3dpcGVyLWxhenk6bm90KC5zd2lwZXItbGF6eS1sb2FkZWQpOm5vdCguc3dpcGVyLWxhenktbG9hZGluZyknKTtcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGUuaGFzQ2xhc3MoJ3N3aXBlci1sYXp5JykgJiYgIXNsaWRlLmhhc0NsYXNzKCdzd2lwZXItbGF6eS1sb2FkZWQnKSAmJiAhc2xpZGUuaGFzQ2xhc3MoJ3N3aXBlci1sYXp5LWxvYWRpbmcnKSkge1xuICAgICAgICAgICAgICAgICAgICBpbWcgPSBpbWcuYWRkKHNsaWRlWzBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGltZy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgaW1nLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2ltZyA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIF9pbWcuYWRkQ2xhc3MoJ3N3aXBlci1sYXp5LWxvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJhY2tncm91bmQgPSBfaW1nLmF0dHIoJ2RhdGEtYmFja2dyb3VuZCcpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3JjID0gX2ltZy5hdHRyKCdkYXRhLXNyYycpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Jjc2V0ID0gX2ltZy5hdHRyKCdkYXRhLXNyY3NldCcpO1xuICAgICAgICAgICAgICAgICAgICBzLmxvYWRJbWFnZShfaW1nWzBdLCAoc3JjIHx8IGJhY2tncm91bmQpLCBzcmNzZXQsIGZhbHNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmFja2dyb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pbWcuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgJ3VybChcIicgKyBiYWNrZ3JvdW5kICsgJ1wiKScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pbWcucmVtb3ZlQXR0cignZGF0YS1iYWNrZ3JvdW5kJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3Jjc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pbWcuYXR0cignc3Jjc2V0Jywgc3Jjc2V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2ltZy5yZW1vdmVBdHRyKCdkYXRhLXNyY3NldCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pbWcuYXR0cignc3JjJywgc3JjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2ltZy5yZW1vdmVBdHRyKCdkYXRhLXNyYycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgX2ltZy5hZGRDbGFzcygnc3dpcGVyLWxhenktbG9hZGVkJykucmVtb3ZlQ2xhc3MoJ3N3aXBlci1sYXp5LWxvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlLmZpbmQoJy5zd2lwZXItbGF6eS1wcmVsb2FkZXIsIC5wcmVsb2FkZXInKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sb29wICYmIGxvYWRJbkR1cGxpY2F0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZU9yaWdpbmFsSW5kZXggPSBzbGlkZS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzbGlkZS5oYXNDbGFzcyhzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWxTbGlkZSA9IHMud3JhcHBlci5jaGlsZHJlbignW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJyArIHNsaWRlT3JpZ2luYWxJbmRleCArICdcIl06bm90KC4nICsgcy5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcyArICcpJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMubGF6eS5sb2FkSW1hZ2VJblNsaWRlKG9yaWdpbmFsU2xpZGUuaW5kZXgoKSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGR1cGxpY2F0ZWRTbGlkZSA9IHMud3JhcHBlci5jaGlsZHJlbignLicgKyBzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgJ1tkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicgKyBzbGlkZU9yaWdpbmFsSW5kZXggKyAnXCJdJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMubGF6eS5sb2FkSW1hZ2VJblNsaWRlKGR1cGxpY2F0ZWRTbGlkZS5pbmRleCgpLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcy5lbWl0KCdvbkxhenlJbWFnZVJlYWR5Jywgcywgc2xpZGVbMF0sIF9pbWdbMF0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHMuZW1pdCgnb25MYXp5SW1hZ2VMb2FkJywgcywgc2xpZGVbMF0sIF9pbWdbMF0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLndhdGNoU2xpZGVzVmlzaWJpbGl0eSkge1xuICAgICAgICAgICAgICAgICAgICBzLndyYXBwZXIuY2hpbGRyZW4oJy4nICsgcy5wYXJhbXMuc2xpZGVWaXNpYmxlQ2xhc3MpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5sYXp5LmxvYWRJbWFnZUluU2xpZGUoJCh0aGlzKS5pbmRleCgpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuc2xpZGVzUGVyVmlldyA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IHMuYWN0aXZlSW5kZXg7IGkgPCBzLmFjdGl2ZUluZGV4ICsgcy5wYXJhbXMuc2xpZGVzUGVyVmlldyA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLnNsaWRlc1tpXSkgcy5sYXp5LmxvYWRJbWFnZUluU2xpZGUoaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLmxhenkubG9hZEltYWdlSW5TbGlkZShzLmFjdGl2ZUluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMubGF6eUxvYWRpbmdJblByZXZOZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID4gMSB8fCAocy5wYXJhbXMubGF6eUxvYWRpbmdJblByZXZOZXh0QW1vdW50ICYmIHMucGFyYW1zLmxhenlMb2FkaW5nSW5QcmV2TmV4dEFtb3VudCA+IDEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYW1vdW50ID0gcy5wYXJhbXMubGF6eUxvYWRpbmdJblByZXZOZXh0QW1vdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNwdiA9IHMucGFyYW1zLnNsaWRlc1BlclZpZXc7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4SW5kZXggPSBNYXRoLm1pbihzLmFjdGl2ZUluZGV4ICsgc3B2ICsgTWF0aC5tYXgoYW1vdW50LCBzcHYpLCBzLnNsaWRlcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbkluZGV4ID0gTWF0aC5tYXgocy5hY3RpdmVJbmRleCAtIE1hdGgubWF4KHNwdiwgYW1vdW50KSwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOZXh0IFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gcy5hY3RpdmVJbmRleCArIHMucGFyYW1zLnNsaWRlc1BlclZpZXc7IGkgPCBtYXhJbmRleDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMuc2xpZGVzW2ldKSBzLmxhenkubG9hZEltYWdlSW5TbGlkZShpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFByZXYgU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBtaW5JbmRleDsgaSA8IHMuYWN0aXZlSW5kZXggOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5zbGlkZXNbaV0pIHMubGF6eS5sb2FkSW1hZ2VJblNsaWRlKGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5leHRTbGlkZSA9IHMud3JhcHBlci5jaGlsZHJlbignLicgKyBzLnBhcmFtcy5zbGlkZU5leHRDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dFNsaWRlLmxlbmd0aCA+IDApIHMubGF6eS5sb2FkSW1hZ2VJblNsaWRlKG5leHRTbGlkZS5pbmRleCgpKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJldlNsaWRlID0gcy53cmFwcGVyLmNoaWxkcmVuKCcuJyArIHMucGFyYW1zLnNsaWRlUHJldkNsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmV2U2xpZGUubGVuZ3RoID4gMCkgcy5sYXp5LmxvYWRJbWFnZUluU2xpZGUocHJldlNsaWRlLmluZGV4KCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uVHJhbnNpdGlvblN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxhenlMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sYXp5TG9hZGluZ09uVHJhbnNpdGlvblN0YXJ0IHx8ICghcy5wYXJhbXMubGF6eUxvYWRpbmdPblRyYW5zaXRpb25TdGFydCAmJiAhcy5sYXp5LmluaXRpYWxJbWFnZUxvYWRlZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMubGF6eS5sb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25UcmFuc2l0aW9uRW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxhenlMb2FkaW5nICYmICFzLnBhcmFtcy5sYXp5TG9hZGluZ09uVHJhbnNpdGlvblN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHMubGF6eS5sb2FkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBcblxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBTY3JvbGxiYXJcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBzLnNjcm9sbGJhciA9IHtcbiAgICAgICAgICAgIGlzVG91Y2hlZDogZmFsc2UsXG4gICAgICAgICAgICBzZXREcmFnUG9zaXRpb246IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNiID0gcy5zY3JvbGxiYXI7XG4gICAgICAgICAgICAgICAgdmFyIHggPSAwLCB5ID0gMDtcbiAgICAgICAgICAgICAgICB2YXIgdHJhbnNsYXRlO1xuICAgICAgICAgICAgICAgIHZhciBwb2ludGVyUG9zaXRpb24gPSBzLmlzSG9yaXpvbnRhbCgpID9cbiAgICAgICAgICAgICAgICAgICAgKChlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyB8fCBlLnR5cGUgPT09ICd0b3VjaG1vdmUnKSA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCA6IGUucGFnZVggfHwgZS5jbGllbnRYKSA6XG4gICAgICAgICAgICAgICAgICAgICgoZS50eXBlID09PSAndG91Y2hzdGFydCcgfHwgZS50eXBlID09PSAndG91Y2htb3ZlJykgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgOiBlLnBhZ2VZIHx8IGUuY2xpZW50WSkgO1xuICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IChwb2ludGVyUG9zaXRpb24pIC0gc2IudHJhY2sub2Zmc2V0KClbcy5pc0hvcml6b250YWwoKSA/ICdsZWZ0JyA6ICd0b3AnXSAtIHNiLmRyYWdTaXplIC8gMjtcbiAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb25NaW4gPSAtcy5taW5UcmFuc2xhdGUoKSAqIHNiLm1vdmVEaXZpZGVyO1xuICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbk1heCA9IC1zLm1heFRyYW5zbGF0ZSgpICogc2IubW92ZURpdmlkZXI7XG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uIDwgcG9zaXRpb25NaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbk1pbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocG9zaXRpb24gPiBwb3NpdGlvbk1heCkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHBvc2l0aW9uTWF4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IC1wb3NpdGlvbiAvIHNiLm1vdmVEaXZpZGVyO1xuICAgICAgICAgICAgICAgIHMudXBkYXRlUHJvZ3Jlc3MocG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIHMuc2V0V3JhcHBlclRyYW5zbGF0ZShwb3NpdGlvbiwgdHJ1ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZHJhZ1N0YXJ0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHZhciBzYiA9IHMuc2Nyb2xsYmFyO1xuICAgICAgICAgICAgICAgIHNiLmlzVG91Y2hlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIHNiLnNldERyYWdQb3NpdGlvbihlKTtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoc2IuZHJhZ1RpbWVvdXQpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBzYi50cmFjay50cmFuc2l0aW9uKDApO1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5zY3JvbGxiYXJIaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNiLnRyYWNrLmNzcygnb3BhY2l0eScsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzLndyYXBwZXIudHJhbnNpdGlvbigxMDApO1xuICAgICAgICAgICAgICAgIHNiLmRyYWcudHJhbnNpdGlvbigxMDApO1xuICAgICAgICAgICAgICAgIHMuZW1pdCgnb25TY3JvbGxiYXJEcmFnU3RhcnQnLCBzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkcmFnTW92ZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2IgPSBzLnNjcm9sbGJhcjtcbiAgICAgICAgICAgICAgICBpZiAoIXNiLmlzVG91Y2hlZCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZWxzZSBlLnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc2Iuc2V0RHJhZ1Bvc2l0aW9uKGUpO1xuICAgICAgICAgICAgICAgIHMud3JhcHBlci50cmFuc2l0aW9uKDApO1xuICAgICAgICAgICAgICAgIHNiLnRyYWNrLnRyYW5zaXRpb24oMCk7XG4gICAgICAgICAgICAgICAgc2IuZHJhZy50cmFuc2l0aW9uKDApO1xuICAgICAgICAgICAgICAgIHMuZW1pdCgnb25TY3JvbGxiYXJEcmFnTW92ZScsIHMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRyYWdFbmQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNiID0gcy5zY3JvbGxiYXI7XG4gICAgICAgICAgICAgICAgaWYgKCFzYi5pc1RvdWNoZWQpIHJldHVybjtcbiAgICAgICAgICAgICAgICBzYi5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuc2Nyb2xsYmFySGlkZSkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoc2IuZHJhZ1RpbWVvdXQpO1xuICAgICAgICAgICAgICAgICAgICBzYi5kcmFnVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2IudHJhY2suY3NzKCdvcGFjaXR5JywgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYi50cmFjay50cmFuc2l0aW9uKDQwMCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcy5lbWl0KCdvblNjcm9sbGJhckRyYWdFbmQnLCBzKTtcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuc2Nyb2xsYmFyU25hcE9uUmVsZWFzZSkge1xuICAgICAgICAgICAgICAgICAgICBzLnNsaWRlUmVzZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW5hYmxlRHJhZ2dhYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNiID0gcy5zY3JvbGxiYXI7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IHMuc3VwcG9ydC50b3VjaCA/IHNiLnRyYWNrIDogZG9jdW1lbnQ7XG4gICAgICAgICAgICAgICAgJChzYi50cmFjaykub24ocy50b3VjaEV2ZW50cy5zdGFydCwgc2IuZHJhZ1N0YXJ0KTtcbiAgICAgICAgICAgICAgICAkKHRhcmdldCkub24ocy50b3VjaEV2ZW50cy5tb3ZlLCBzYi5kcmFnTW92ZSk7XG4gICAgICAgICAgICAgICAgJCh0YXJnZXQpLm9uKHMudG91Y2hFdmVudHMuZW5kLCBzYi5kcmFnRW5kKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkaXNhYmxlRHJhZ2dhYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNiID0gcy5zY3JvbGxiYXI7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IHMuc3VwcG9ydC50b3VjaCA/IHNiLnRyYWNrIDogZG9jdW1lbnQ7XG4gICAgICAgICAgICAgICAgJChzYi50cmFjaykub2ZmKHMudG91Y2hFdmVudHMuc3RhcnQsIHNiLmRyYWdTdGFydCk7XG4gICAgICAgICAgICAgICAgJCh0YXJnZXQpLm9mZihzLnRvdWNoRXZlbnRzLm1vdmUsIHNiLmRyYWdNb3ZlKTtcbiAgICAgICAgICAgICAgICAkKHRhcmdldCkub2ZmKHMudG91Y2hFdmVudHMuZW5kLCBzYi5kcmFnRW5kKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXMucGFyYW1zLnNjcm9sbGJhcikgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHZhciBzYiA9IHMuc2Nyb2xsYmFyO1xuICAgICAgICAgICAgICAgIHNiLnRyYWNrID0gJChzLnBhcmFtcy5zY3JvbGxiYXIpO1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy51bmlxdWVOYXZFbGVtZW50cyAmJiB0eXBlb2Ygcy5wYXJhbXMuc2Nyb2xsYmFyID09PSAnc3RyaW5nJyAmJiBzYi50cmFjay5sZW5ndGggPiAxICYmIHMuY29udGFpbmVyLmZpbmQocy5wYXJhbXMuc2Nyb2xsYmFyKS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2IudHJhY2sgPSBzLmNvbnRhaW5lci5maW5kKHMucGFyYW1zLnNjcm9sbGJhcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNiLmRyYWcgPSBzYi50cmFjay5maW5kKCcuc3dpcGVyLXNjcm9sbGJhci1kcmFnJyk7XG4gICAgICAgICAgICAgICAgaWYgKHNiLmRyYWcubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNiLmRyYWcgPSAkKCc8ZGl2IGNsYXNzPVwic3dpcGVyLXNjcm9sbGJhci1kcmFnXCI+PC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgICAgIHNiLnRyYWNrLmFwcGVuZChzYi5kcmFnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2IuZHJhZ1swXS5zdHlsZS53aWR0aCA9ICcnO1xuICAgICAgICAgICAgICAgIHNiLmRyYWdbMF0uc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgICAgICAgICAgICAgc2IudHJhY2tTaXplID0gcy5pc0hvcml6b250YWwoKSA/IHNiLnRyYWNrWzBdLm9mZnNldFdpZHRoIDogc2IudHJhY2tbMF0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBzYi5kaXZpZGVyID0gcy5zaXplIC8gcy52aXJ0dWFsU2l6ZTtcbiAgICAgICAgICAgICAgICBzYi5tb3ZlRGl2aWRlciA9IHNiLmRpdmlkZXIgKiAoc2IudHJhY2tTaXplIC8gcy5zaXplKTtcbiAgICAgICAgICAgICAgICBzYi5kcmFnU2l6ZSA9IHNiLnRyYWNrU2l6ZSAqIHNiLmRpdmlkZXI7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChzLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNiLmRyYWdbMF0uc3R5bGUud2lkdGggPSBzYi5kcmFnU2l6ZSArICdweCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzYi5kcmFnWzBdLnN0eWxlLmhlaWdodCA9IHNiLmRyYWdTaXplICsgJ3B4JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChzYi5kaXZpZGVyID49IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2IudHJhY2tbMF0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNiLnRyYWNrWzBdLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNjcm9sbGJhckhpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2IudHJhY2tbMF0uc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldFRyYW5zbGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICghcy5wYXJhbXMuc2Nyb2xsYmFyKSByZXR1cm47XG4gICAgICAgICAgICAgICAgdmFyIGRpZmY7XG4gICAgICAgICAgICAgICAgdmFyIHNiID0gcy5zY3JvbGxiYXI7XG4gICAgICAgICAgICAgICAgdmFyIHRyYW5zbGF0ZSA9IHMudHJhbnNsYXRlIHx8IDA7XG4gICAgICAgICAgICAgICAgdmFyIG5ld1BvcztcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgdmFyIG5ld1NpemUgPSBzYi5kcmFnU2l6ZTtcbiAgICAgICAgICAgICAgICBuZXdQb3MgPSAoc2IudHJhY2tTaXplIC0gc2IuZHJhZ1NpemUpICogcy5wcm9ncmVzcztcbiAgICAgICAgICAgICAgICBpZiAocy5ydGwgJiYgcy5pc0hvcml6b250YWwoKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdQb3MgPSAtbmV3UG9zO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV3UG9zID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3U2l6ZSA9IHNiLmRyYWdTaXplIC0gbmV3UG9zO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UG9zID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgtbmV3UG9zICsgc2IuZHJhZ1NpemUgPiBzYi50cmFja1NpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1NpemUgPSBzYi50cmFja1NpemUgKyBuZXdQb3M7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdQb3MgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdTaXplID0gc2IuZHJhZ1NpemUgKyBuZXdQb3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQb3MgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5ld1BvcyArIHNiLmRyYWdTaXplID4gc2IudHJhY2tTaXplKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdTaXplID0gc2IudHJhY2tTaXplIC0gbmV3UG9zO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnN1cHBvcnQudHJhbnNmb3JtczNkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYi5kcmFnLnRyYW5zZm9ybSgndHJhbnNsYXRlM2QoJyArIChuZXdQb3MpICsgJ3B4LCAwLCAwKScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2IuZHJhZy50cmFuc2Zvcm0oJ3RyYW5zbGF0ZVgoJyArIChuZXdQb3MpICsgJ3B4KScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNiLmRyYWdbMF0uc3R5bGUud2lkdGggPSBuZXdTaXplICsgJ3B4JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnN1cHBvcnQudHJhbnNmb3JtczNkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYi5kcmFnLnRyYW5zZm9ybSgndHJhbnNsYXRlM2QoMHB4LCAnICsgKG5ld1BvcykgKyAncHgsIDApJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYi5kcmFnLnRyYW5zZm9ybSgndHJhbnNsYXRlWSgnICsgKG5ld1BvcykgKyAncHgpJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2IuZHJhZ1swXS5zdHlsZS5oZWlnaHQgPSBuZXdTaXplICsgJ3B4JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNjcm9sbGJhckhpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHNiLnRpbWVvdXQpO1xuICAgICAgICAgICAgICAgICAgICBzYi50cmFja1swXS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgc2IudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2IudHJhY2tbMF0uc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYi50cmFjay50cmFuc2l0aW9uKDQwMCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXRUcmFuc2l0aW9uOiBmdW5jdGlvbiAoZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoIXMucGFyYW1zLnNjcm9sbGJhcikgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHMuc2Nyb2xsYmFyLmRyYWcudHJhbnNpdGlvbihkdXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgQ29udHJvbGxlclxuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIHMuY29udHJvbGxlciA9IHtcbiAgICAgICAgICAgIExpbmVhclNwbGluZTogZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICAgICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0SW5kZXggPSB4Lmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgLy8gR2l2ZW4gYW4geCB2YWx1ZSAoeDIpLCByZXR1cm4gdGhlIGV4cGVjdGVkIHkyIHZhbHVlOlxuICAgICAgICAgICAgICAgIC8vICh4MSx5MSkgaXMgdGhlIGtub3duIHBvaW50IGJlZm9yZSBnaXZlbiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAvLyAoeDMseTMpIGlzIHRoZSBrbm93biBwb2ludCBhZnRlciBnaXZlbiB2YWx1ZS5cbiAgICAgICAgICAgICAgICB2YXIgaTEsIGkzO1xuICAgICAgICAgICAgICAgIHZhciBsID0gdGhpcy54Lmxlbmd0aDtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uICh4Mikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXgyKSByZXR1cm4gMDtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgaW5kZXhlcyBvZiB4MSBhbmQgeDMgKHRoZSBhcnJheSBpbmRleGVzIGJlZm9yZSBhbmQgYWZ0ZXIgZ2l2ZW4geDIpOlxuICAgICAgICAgICAgICAgICAgICBpMyA9IGJpbmFyeVNlYXJjaCh0aGlzLngsIHgyKTtcbiAgICAgICAgICAgICAgICAgICAgaTEgPSBpMyAtIDE7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBXZSBoYXZlIG91ciBpbmRleGVzIGkxICYgaTMsIHNvIHdlIGNhbiBjYWxjdWxhdGUgYWxyZWFkeTpcbiAgICAgICAgICAgICAgICAgICAgLy8geTIgOj0gKCh4MuKIkngxKSDDlyAoeTPiiJJ5MSkpIMO3ICh4M+KIkngxKSArIHkxXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoKHgyIC0gdGhpcy54W2kxXSkgKiAodGhpcy55W2kzXSAtIHRoaXMueVtpMV0pKSAvICh0aGlzLnhbaTNdIC0gdGhpcy54W2kxXSkgKyB0aGlzLnlbaTFdO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciBiaW5hcnlTZWFyY2ggPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXhJbmRleCwgbWluSW5kZXgsIGd1ZXNzO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oYXJyYXksIHZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluSW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heEluZGV4ID0gYXJyYXkubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKG1heEluZGV4IC0gbWluSW5kZXggPiAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJheVtndWVzcyA9IG1heEluZGV4ICsgbWluSW5kZXggPj4gMV0gPD0gdmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkluZGV4ID0gZ3Vlc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4SW5kZXggPSBndWVzcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF4SW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvL3h4eDogZm9yIG5vdyBpIHdpbGwganVzdCBzYXZlIG9uZSBzcGxpbmUgZnVuY3Rpb24gdG8gdG9cbiAgICAgICAgICAgIGdldEludGVycG9sYXRlRnVuY3Rpb246IGZ1bmN0aW9uKGMpe1xuICAgICAgICAgICAgICAgIGlmKCFzLmNvbnRyb2xsZXIuc3BsaW5lKSBzLmNvbnRyb2xsZXIuc3BsaW5lID0gcy5wYXJhbXMubG9vcCA/XG4gICAgICAgICAgICAgICAgICAgIG5ldyBzLmNvbnRyb2xsZXIuTGluZWFyU3BsaW5lKHMuc2xpZGVzR3JpZCwgYy5zbGlkZXNHcmlkKSA6XG4gICAgICAgICAgICAgICAgICAgIG5ldyBzLmNvbnRyb2xsZXIuTGluZWFyU3BsaW5lKHMuc25hcEdyaWQsIGMuc25hcEdyaWQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldFRyYW5zbGF0ZTogZnVuY3Rpb24gKHRyYW5zbGF0ZSwgYnlDb250cm9sbGVyKSB7XG4gICAgICAgICAgICAgICB2YXIgY29udHJvbGxlZCA9IHMucGFyYW1zLmNvbnRyb2w7XG4gICAgICAgICAgICAgICB2YXIgbXVsdGlwbGllciwgY29udHJvbGxlZFRyYW5zbGF0ZTtcbiAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNldENvbnRyb2xsZWRUcmFuc2xhdGUoYykge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdpbGwgY3JlYXRlIGFuIEludGVycG9sYXRlIGZ1bmN0aW9uIGJhc2VkIG9uIHRoZSBzbmFwR3JpZHNcbiAgICAgICAgICAgICAgICAgICAgLy8geCBpcyB0aGUgR3JpZCBvZiB0aGUgc2Nyb2xsZWQgc2Nyb2xsZXIgYW5kIHkgd2lsbCBiZSB0aGUgY29udHJvbGxlZCBzY3JvbGxlclxuICAgICAgICAgICAgICAgICAgICAvLyBpdCBtYWtlcyBzZW5zZSB0byBjcmVhdGUgdGhpcyBvbmx5IG9uY2UgYW5kIHJlY2FsbCBpdCBmb3IgdGhlIGludGVycG9sYXRpb25cbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGZ1bmN0aW9uIGRvZXMgYSBsb3Qgb2YgdmFsdWUgY2FjaGluZyBmb3IgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlID0gYy5ydGwgJiYgYy5wYXJhbXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgPyAtcy50cmFuc2xhdGUgOiBzLnRyYW5zbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmNvbnRyb2xCeSA9PT0gJ3NsaWRlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5jb250cm9sbGVyLmdldEludGVycG9sYXRlRnVuY3Rpb24oYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpIGFtIG5vdCBzdXJlIHdoeSB0aGUgdmFsdWVzIGhhdmUgdG8gYmUgbXVsdGlwbGljYXRlZCB0aGlzIHdheSwgdHJpZWQgdG8gaW52ZXJ0IHRoZSBzbmFwR3JpZFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYnV0IGl0IGRpZCBub3Qgd29yayBvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZWRUcmFuc2xhdGUgPSAtcy5jb250cm9sbGVyLnNwbGluZS5pbnRlcnBvbGF0ZSgtdHJhbnNsYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYoIWNvbnRyb2xsZWRUcmFuc2xhdGUgfHwgcy5wYXJhbXMuY29udHJvbEJ5ID09PSAnY29udGFpbmVyJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsaWVyID0gKGMubWF4VHJhbnNsYXRlKCkgLSBjLm1pblRyYW5zbGF0ZSgpKSAvIChzLm1heFRyYW5zbGF0ZSgpIC0gcy5taW5UcmFuc2xhdGUoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVkVHJhbnNsYXRlID0gKHRyYW5zbGF0ZSAtIHMubWluVHJhbnNsYXRlKCkpICogbXVsdGlwbGllciArIGMubWluVHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5jb250cm9sSW52ZXJzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlZFRyYW5zbGF0ZSA9IGMubWF4VHJhbnNsYXRlKCkgLSBjb250cm9sbGVkVHJhbnNsYXRlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGMudXBkYXRlUHJvZ3Jlc3MoY29udHJvbGxlZFRyYW5zbGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGMuc2V0V3JhcHBlclRyYW5zbGF0ZShjb250cm9sbGVkVHJhbnNsYXRlLCBmYWxzZSwgcyk7XG4gICAgICAgICAgICAgICAgICAgIGMudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIGlmIChzLmlzQXJyYXkoY29udHJvbGxlZCkpIHtcbiAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbnRyb2xsZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRyb2xsZWRbaV0gIT09IGJ5Q29udHJvbGxlciAmJiBjb250cm9sbGVkW2ldIGluc3RhbmNlb2YgU3dpcGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDb250cm9sbGVkVHJhbnNsYXRlKGNvbnRyb2xsZWRbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgZWxzZSBpZiAoY29udHJvbGxlZCBpbnN0YW5jZW9mIFN3aXBlciAmJiBieUNvbnRyb2xsZXIgIT09IGNvbnRyb2xsZWQpIHtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgc2V0Q29udHJvbGxlZFRyYW5zbGF0ZShjb250cm9sbGVkKTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXRUcmFuc2l0aW9uOiBmdW5jdGlvbiAoZHVyYXRpb24sIGJ5Q29udHJvbGxlcikge1xuICAgICAgICAgICAgICAgIHZhciBjb250cm9sbGVkID0gcy5wYXJhbXMuY29udHJvbDtcbiAgICAgICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzZXRDb250cm9sbGVkVHJhbnNpdGlvbihjKSB7XG4gICAgICAgICAgICAgICAgICAgIGMuc2V0V3JhcHBlclRyYW5zaXRpb24oZHVyYXRpb24sIHMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZHVyYXRpb24gIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMub25UcmFuc2l0aW9uU3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMud3JhcHBlci50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb250cm9sbGVkKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGMucGFyYW1zLmxvb3AgJiYgcy5wYXJhbXMuY29udHJvbEJ5ID09PSAnc2xpZGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMuZml4TG9vcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLm9uVHJhbnNpdGlvbkVuZCgpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzLmlzQXJyYXkoY29udHJvbGxlZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvbnRyb2xsZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250cm9sbGVkW2ldICE9PSBieUNvbnRyb2xsZXIgJiYgY29udHJvbGxlZFtpXSBpbnN0YW5jZW9mIFN3aXBlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbnRyb2xsZWRUcmFuc2l0aW9uKGNvbnRyb2xsZWRbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbnRyb2xsZWQgaW5zdGFuY2VvZiBTd2lwZXIgJiYgYnlDb250cm9sbGVyICE9PSBjb250cm9sbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldENvbnRyb2xsZWRUcmFuc2l0aW9uKGNvbnRyb2xsZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBIYXNoIE5hdmlnYXRpb25cbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBzLmhhc2huYXYgPSB7XG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy5oYXNobmF2KSByZXR1cm47XG4gICAgICAgICAgICAgICAgcy5oYXNobmF2LmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB2YXIgaGFzaCA9IGRvY3VtZW50LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWhhc2gpIHJldHVybjtcbiAgICAgICAgICAgICAgICB2YXIgc3BlZWQgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBzLnNsaWRlcy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGUgPSBzLnNsaWRlcy5lcShpKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlSGFzaCA9IHNsaWRlLmF0dHIoJ2RhdGEtaGFzaCcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2xpZGVIYXNoID09PSBoYXNoICYmICFzbGlkZS5oYXNDbGFzcyhzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gc2xpZGUuaW5kZXgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpZGVUbyhpbmRleCwgc3BlZWQsIHMucGFyYW1zLnJ1bkNhbGxiYWNrc09uSW5pdCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0SGFzaDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICghcy5oYXNobmF2LmluaXRpYWxpemVkIHx8ICFzLnBhcmFtcy5oYXNobmF2KSByZXR1cm47XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaGFzaCA9IHMuc2xpZGVzLmVxKHMuYWN0aXZlSW5kZXgpLmF0dHIoJ2RhdGEtaGFzaCcpIHx8ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIEtleWJvYXJkIENvbnRyb2xcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBmdW5jdGlvbiBoYW5kbGVLZXlib2FyZChlKSB7XG4gICAgICAgICAgICBpZiAoZS5vcmlnaW5hbEV2ZW50KSBlID0gZS5vcmlnaW5hbEV2ZW50OyAvL2pxdWVyeSBmaXhcbiAgICAgICAgICAgIHZhciBrYyA9IGUua2V5Q29kZSB8fCBlLmNoYXJDb2RlO1xuICAgICAgICAgICAgLy8gRGlyZWN0aW9ucyBsb2Nrc1xuICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy5hbGxvd1N3aXBlVG9OZXh0ICYmIChzLmlzSG9yaXpvbnRhbCgpICYmIGtjID09PSAzOSB8fCAhcy5pc0hvcml6b250YWwoKSAmJiBrYyA9PT0gNDApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy5hbGxvd1N3aXBlVG9QcmV2ICYmIChzLmlzSG9yaXpvbnRhbCgpICYmIGtjID09PSAzNyB8fCAhcy5pc0hvcml6b250YWwoKSAmJiBrYyA9PT0gMzgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGUuc2hpZnRLZXkgfHwgZS5hbHRLZXkgfHwgZS5jdHJsS2V5IHx8IGUubWV0YUtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQubm9kZU5hbWUgJiYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0JyB8fCBkb2N1bWVudC5hY3RpdmVFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICd0ZXh0YXJlYScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGtjID09PSAzNyB8fCBrYyA9PT0gMzkgfHwga2MgPT09IDM4IHx8IGtjID09PSA0MCkge1xuICAgICAgICAgICAgICAgIHZhciBpblZpZXcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvL0NoZWNrIHRoYXQgc3dpcGVyIHNob3VsZCBiZSBpbnNpZGUgb2YgdmlzaWJsZSBhcmVhIG9mIHdpbmRvd1xuICAgICAgICAgICAgICAgIGlmIChzLmNvbnRhaW5lci5wYXJlbnRzKCcuc3dpcGVyLXNsaWRlJykubGVuZ3RoID4gMCAmJiBzLmNvbnRhaW5lci5wYXJlbnRzKCcuc3dpcGVyLXNsaWRlLWFjdGl2ZScpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB3aW5kb3dTY3JvbGwgPSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHdpbmRvdy5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiB3aW5kb3cucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgICAgIHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICAgICAgdmFyIHN3aXBlck9mZnNldCA9IHMuY29udGFpbmVyLm9mZnNldCgpO1xuICAgICAgICAgICAgICAgIGlmIChzLnJ0bCkgc3dpcGVyT2Zmc2V0LmxlZnQgPSBzd2lwZXJPZmZzZXQubGVmdCAtIHMuY29udGFpbmVyWzBdLnNjcm9sbExlZnQ7XG4gICAgICAgICAgICAgICAgdmFyIHN3aXBlckNvb3JkID0gW1xuICAgICAgICAgICAgICAgICAgICBbc3dpcGVyT2Zmc2V0LmxlZnQsIHN3aXBlck9mZnNldC50b3BdLFxuICAgICAgICAgICAgICAgICAgICBbc3dpcGVyT2Zmc2V0LmxlZnQgKyBzLndpZHRoLCBzd2lwZXJPZmZzZXQudG9wXSxcbiAgICAgICAgICAgICAgICAgICAgW3N3aXBlck9mZnNldC5sZWZ0LCBzd2lwZXJPZmZzZXQudG9wICsgcy5oZWlnaHRdLFxuICAgICAgICAgICAgICAgICAgICBbc3dpcGVyT2Zmc2V0LmxlZnQgKyBzLndpZHRoLCBzd2lwZXJPZmZzZXQudG9wICsgcy5oZWlnaHRdXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN3aXBlckNvb3JkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwb2ludCA9IHN3aXBlckNvb3JkW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludFswXSA+PSB3aW5kb3dTY3JvbGwubGVmdCAmJiBwb2ludFswXSA8PSB3aW5kb3dTY3JvbGwubGVmdCArIHdpbmRvd1dpZHRoICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludFsxXSA+PSB3aW5kb3dTY3JvbGwudG9wICYmIHBvaW50WzFdIDw9IHdpbmRvd1Njcm9sbC50b3AgKyB3aW5kb3dIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpblZpZXcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWluVmlldykgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2MgPT09IDM3IHx8IGtjID09PSAzOSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKChrYyA9PT0gMzkgJiYgIXMucnRsKSB8fCAoa2MgPT09IDM3ICYmIHMucnRsKSkgcy5zbGlkZU5leHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoKGtjID09PSAzNyAmJiAhcy5ydGwpIHx8IChrYyA9PT0gMzkgJiYgcy5ydGwpKSBzLnNsaWRlUHJldigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGtjID09PSAzOCB8fCBrYyA9PT0gNDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBlLnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChrYyA9PT0gNDApIHMuc2xpZGVOZXh0KCk7XG4gICAgICAgICAgICAgICAgaWYgKGtjID09PSAzOCkgcy5zbGlkZVByZXYoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzLmRpc2FibGVLZXlib2FyZENvbnRyb2wgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzLnBhcmFtcy5rZXlib2FyZENvbnRyb2wgPSBmYWxzZTtcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLm9mZigna2V5ZG93bicsIGhhbmRsZUtleWJvYXJkKTtcbiAgICAgICAgfTtcbiAgICAgICAgcy5lbmFibGVLZXlib2FyZENvbnRyb2wgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzLnBhcmFtcy5rZXlib2FyZENvbnRyb2wgPSB0cnVlO1xuICAgICAgICAgICAgJChkb2N1bWVudCkub24oJ2tleWRvd24nLCBoYW5kbGVLZXlib2FyZCk7XG4gICAgICAgIH07XG4gICAgICAgIFxuXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIE1vdXNld2hlZWwgQ29udHJvbFxuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIHMubW91c2V3aGVlbCA9IHtcbiAgICAgICAgICAgIGV2ZW50OiBmYWxzZSxcbiAgICAgICAgICAgIGxhc3RTY3JvbGxUaW1lOiAobmV3IHdpbmRvdy5EYXRlKCkpLmdldFRpbWUoKVxuICAgICAgICB9O1xuICAgICAgICBpZiAocy5wYXJhbXMubW91c2V3aGVlbENvbnRyb2wpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbmV3IHdpbmRvdy5XaGVlbEV2ZW50KCd3aGVlbCcpO1xuICAgICAgICAgICAgICAgIHMubW91c2V3aGVlbC5ldmVudCA9ICd3aGVlbCc7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5XaGVlbEV2ZW50IHx8IChzLmNvbnRhaW5lclswXSAmJiAnd2hlZWwnIGluIHMuY29udGFpbmVyWzBdKSkge1xuICAgICAgICAgICAgICAgICAgICBzLm1vdXNld2hlZWwuZXZlbnQgPSAnd2hlZWwnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcy5tb3VzZXdoZWVsLmV2ZW50ICYmIHdpbmRvdy5XaGVlbEV2ZW50KSB7XG4gICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzLm1vdXNld2hlZWwuZXZlbnQgJiYgZG9jdW1lbnQub25tb3VzZXdoZWVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzLm1vdXNld2hlZWwuZXZlbnQgPSAnbW91c2V3aGVlbCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXMubW91c2V3aGVlbC5ldmVudCkge1xuICAgICAgICAgICAgICAgIHMubW91c2V3aGVlbC5ldmVudCA9ICdET01Nb3VzZVNjcm9sbCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlTW91c2V3aGVlbChlKSB7XG4gICAgICAgICAgICBpZiAoZS5vcmlnaW5hbEV2ZW50KSBlID0gZS5vcmlnaW5hbEV2ZW50OyAvL2pxdWVyeSBmaXhcbiAgICAgICAgICAgIHZhciB3ZSA9IHMubW91c2V3aGVlbC5ldmVudDtcbiAgICAgICAgICAgIHZhciBkZWx0YSA9IDA7XG4gICAgICAgICAgICB2YXIgcnRsRmFjdG9yID0gcy5ydGwgPyAtMSA6IDE7XG4gICAgICAgIFxuICAgICAgICAgICAgLy9XZWJLaXRzXG4gICAgICAgICAgICBpZiAod2UgPT09ICdtb3VzZXdoZWVsJykge1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5tb3VzZXdoZWVsRm9yY2VUb0F4aXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhlLndoZWVsRGVsdGFYKSA+IE1hdGguYWJzKGUud2hlZWxEZWx0YVkpKSBkZWx0YSA9IGUud2hlZWxEZWx0YVggKiBydGxGYWN0b3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhlLndoZWVsRGVsdGFZKSA+IE1hdGguYWJzKGUud2hlZWxEZWx0YVgpKSBkZWx0YSA9IGUud2hlZWxEZWx0YVk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsdGEgPSBNYXRoLmFicyhlLndoZWVsRGVsdGFYKSA+IE1hdGguYWJzKGUud2hlZWxEZWx0YVkpID8gLSBlLndoZWVsRGVsdGFYICogcnRsRmFjdG9yIDogLSBlLndoZWVsRGVsdGFZO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vT2xkIEZpcmVGb3hcbiAgICAgICAgICAgIGVsc2UgaWYgKHdlID09PSAnRE9NTW91c2VTY3JvbGwnKSBkZWx0YSA9IC1lLmRldGFpbDtcbiAgICAgICAgICAgIC8vTmV3IEZpcmVGb3hcbiAgICAgICAgICAgIGVsc2UgaWYgKHdlID09PSAnd2hlZWwnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLm1vdXNld2hlZWxGb3JjZVRvQXhpcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5pc0hvcml6b250YWwoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGUuZGVsdGFYKSA+IE1hdGguYWJzKGUuZGVsdGFZKSkgZGVsdGEgPSAtZS5kZWx0YVggKiBydGxGYWN0b3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhlLmRlbHRhWSkgPiBNYXRoLmFicyhlLmRlbHRhWCkpIGRlbHRhID0gLWUuZGVsdGFZO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbHRhID0gTWF0aC5hYnMoZS5kZWx0YVgpID4gTWF0aC5hYnMoZS5kZWx0YVkpID8gLSBlLmRlbHRhWCAqIHJ0bEZhY3RvciA6IC0gZS5kZWx0YVk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRlbHRhID09PSAwKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLm1vdXNld2hlZWxJbnZlcnQpIGRlbHRhID0gLWRlbHRhO1xuICAgICAgICBcbiAgICAgICAgICAgIGlmICghcy5wYXJhbXMuZnJlZU1vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoKG5ldyB3aW5kb3cuRGF0ZSgpKS5nZXRUaW1lKCkgLSBzLm1vdXNld2hlZWwubGFzdFNjcm9sbFRpbWUgPiA2MCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVsdGEgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKCFzLmlzRW5kIHx8IHMucGFyYW1zLmxvb3ApICYmICFzLmFuaW1hdGluZykgcy5zbGlkZU5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHMucGFyYW1zLm1vdXNld2hlZWxSZWxlYXNlT25FZGdlcykgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKCFzLmlzQmVnaW5uaW5nIHx8IHMucGFyYW1zLmxvb3ApICYmICFzLmFuaW1hdGluZykgcy5zbGlkZVByZXYoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHMucGFyYW1zLm1vdXNld2hlZWxSZWxlYXNlT25FZGdlcykgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcy5tb3VzZXdoZWVsLmxhc3RTY3JvbGxUaW1lID0gKG5ldyB3aW5kb3cuRGF0ZSgpKS5nZXRUaW1lKCk7XG4gICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9GcmVlbW9kZSBvciBzY3JvbGxDb250YWluZXI6XG4gICAgICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gcy5nZXRXcmFwcGVyVHJhbnNsYXRlKCkgKyBkZWx0YSAqIHMucGFyYW1zLm1vdXNld2hlZWxTZW5zaXRpdml0eTtcbiAgICAgICAgICAgICAgICB2YXIgd2FzQmVnaW5uaW5nID0gcy5pc0JlZ2lubmluZyxcbiAgICAgICAgICAgICAgICAgICAgd2FzRW5kID0gcy5pc0VuZDtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uID49IHMubWluVHJhbnNsYXRlKCkpIHBvc2l0aW9uID0gcy5taW5UcmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24gPD0gcy5tYXhUcmFuc2xhdGUoKSkgcG9zaXRpb24gPSBzLm1heFRyYW5zbGF0ZSgpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBzLnNldFdyYXBwZXJUcmFuc2l0aW9uKDApO1xuICAgICAgICAgICAgICAgIHMuc2V0V3JhcHBlclRyYW5zbGF0ZShwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgcy51cGRhdGVQcm9ncmVzcygpO1xuICAgICAgICAgICAgICAgIHMudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKCF3YXNCZWdpbm5pbmcgJiYgcy5pc0JlZ2lubmluZyB8fCAhd2FzRW5kICYmIHMuaXNFbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgcy51cGRhdGVDbGFzc2VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuZnJlZU1vZGVTdGlja3kpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHMubW91c2V3aGVlbC50aW1lb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgcy5tb3VzZXdoZWVsLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpZGVSZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxhenlMb2FkaW5nICYmIHMubGF6eSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5sYXp5LmxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gUmV0dXJuIHBhZ2Ugc2Nyb2xsIG9uIGVkZ2UgcG9zaXRpb25zXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uID09PSAwIHx8IHBvc2l0aW9uID09PSBzLm1heFRyYW5zbGF0ZSgpKSByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuYXV0b3BsYXkpIHMuc3RvcEF1dG9wbGF5KCk7XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGVsc2UgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHMuZGlzYWJsZU1vdXNld2hlZWxDb250cm9sID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFzLm1vdXNld2hlZWwuZXZlbnQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIHMuY29udGFpbmVyLm9mZihzLm1vdXNld2hlZWwuZXZlbnQsIGhhbmRsZU1vdXNld2hlZWwpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBzLmVuYWJsZU1vdXNld2hlZWxDb250cm9sID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFzLm1vdXNld2hlZWwuZXZlbnQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIHMuY29udGFpbmVyLm9uKHMubW91c2V3aGVlbC5ldmVudCwgaGFuZGxlTW91c2V3aGVlbCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgXG5cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgUGFyYWxsYXhcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBmdW5jdGlvbiBzZXRQYXJhbGxheFRyYW5zZm9ybShlbCwgcHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIGVsID0gJChlbCk7XG4gICAgICAgICAgICB2YXIgcCwgcFgsIHBZO1xuICAgICAgICAgICAgdmFyIHJ0bEZhY3RvciA9IHMucnRsID8gLTEgOiAxO1xuICAgICAgICBcbiAgICAgICAgICAgIHAgPSBlbC5hdHRyKCdkYXRhLXN3aXBlci1wYXJhbGxheCcpIHx8ICcwJztcbiAgICAgICAgICAgIHBYID0gZWwuYXR0cignZGF0YS1zd2lwZXItcGFyYWxsYXgteCcpO1xuICAgICAgICAgICAgcFkgPSBlbC5hdHRyKCdkYXRhLXN3aXBlci1wYXJhbGxheC15Jyk7XG4gICAgICAgICAgICBpZiAocFggfHwgcFkpIHtcbiAgICAgICAgICAgICAgICBwWCA9IHBYIHx8ICcwJztcbiAgICAgICAgICAgICAgICBwWSA9IHBZIHx8ICcwJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChzLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBYID0gcDtcbiAgICAgICAgICAgICAgICAgICAgcFkgPSAnMCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwWSA9IHA7XG4gICAgICAgICAgICAgICAgICAgIHBYID0gJzAnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBpZiAoKHBYKS5pbmRleE9mKCclJykgPj0gMCkge1xuICAgICAgICAgICAgICAgIHBYID0gcGFyc2VJbnQocFgsIDEwKSAqIHByb2dyZXNzICogcnRsRmFjdG9yICsgJyUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcFggPSBwWCAqIHByb2dyZXNzICogcnRsRmFjdG9yICsgJ3B4JyA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKHBZKS5pbmRleE9mKCclJykgPj0gMCkge1xuICAgICAgICAgICAgICAgIHBZID0gcGFyc2VJbnQocFksIDEwKSAqIHByb2dyZXNzICsgJyUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcFkgPSBwWSAqIHByb2dyZXNzICsgJ3B4JyA7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgZWwudHJhbnNmb3JtKCd0cmFuc2xhdGUzZCgnICsgcFggKyAnLCAnICsgcFkgKyAnLDBweCknKTtcbiAgICAgICAgfVxuICAgICAgICBzLnBhcmFsbGF4ID0ge1xuICAgICAgICAgICAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcy5jb250YWluZXIuY2hpbGRyZW4oJ1tkYXRhLXN3aXBlci1wYXJhbGxheF0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC14XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LXldJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBzZXRQYXJhbGxheFRyYW5zZm9ybSh0aGlzLCBzLnByb2dyZXNzKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcy5zbGlkZXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZSA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlLmZpbmQoJ1tkYXRhLXN3aXBlci1wYXJhbGxheF0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC14XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LXldJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSBNYXRoLm1pbihNYXRoLm1heChzbGlkZVswXS5wcm9ncmVzcywgLTEpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBhcmFsbGF4VHJhbnNmb3JtKHRoaXMsIHByb2dyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gKGR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkdXJhdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIGR1cmF0aW9uID0gcy5wYXJhbXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgcy5jb250YWluZXIuZmluZCgnW2RhdGEtc3dpcGVyLXBhcmFsbGF4XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LXhdLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgteV0nKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJhbGxheER1cmF0aW9uID0gcGFyc2VJbnQoZWwuYXR0cignZGF0YS1zd2lwZXItcGFyYWxsYXgtZHVyYXRpb24nKSwgMTApIHx8IGR1cmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZHVyYXRpb24gPT09IDApIHBhcmFsbGF4RHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgICAgICAgICBlbC50cmFuc2l0aW9uKHBhcmFsbGF4RHVyYXRpb24pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBcblxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBQbHVnaW5zIEFQSS4gQ29sbGVjdCBhbGwgYW5kIGluaXQgYWxsIHBsdWdpbnNcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBzLl9wbHVnaW5zID0gW107XG4gICAgICAgIGZvciAodmFyIHBsdWdpbiBpbiBzLnBsdWdpbnMpIHtcbiAgICAgICAgICAgIHZhciBwID0gcy5wbHVnaW5zW3BsdWdpbl0ocywgcy5wYXJhbXNbcGx1Z2luXSk7XG4gICAgICAgICAgICBpZiAocCkgcy5fcGx1Z2lucy5wdXNoKHApO1xuICAgICAgICB9XG4gICAgICAgIC8vIE1ldGhvZCB0byBjYWxsIGFsbCBwbHVnaW5zIGV2ZW50L21ldGhvZFxuICAgICAgICBzLmNhbGxQbHVnaW5zID0gZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzLl9wbHVnaW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50TmFtZSBpbiBzLl9wbHVnaW5zW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIHMuX3BsdWdpbnNbaV1bZXZlbnROYW1lXShhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSwgYXJndW1lbnRzWzNdLCBhcmd1bWVudHNbNF0sIGFyZ3VtZW50c1s1XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIEV2ZW50cy9DYWxsYmFja3MvUGx1Z2lucyBFbWl0dGVyXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgZnVuY3Rpb24gbm9ybWFsaXplRXZlbnROYW1lIChldmVudE5hbWUpIHtcbiAgICAgICAgICAgIGlmIChldmVudE5hbWUuaW5kZXhPZignb24nKSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChldmVudE5hbWVbMF0gIT09IGV2ZW50TmFtZVswXS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZSA9ICdvbicgKyBldmVudE5hbWVbMF0udG9VcHBlckNhc2UoKSArIGV2ZW50TmFtZS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBldmVudE5hbWUgPSAnb24nICsgZXZlbnROYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBldmVudE5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgcy5lbWl0dGVyRXZlbnRMaXN0ZW5lcnMgPSB7XG4gICAgICAgIFxuICAgICAgICB9O1xuICAgICAgICBzLmVtaXQgPSBmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgICAgICAgICAvLyBUcmlnZ2VyIGNhbGxiYWNrc1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgICAgICAgICBzLnBhcmFtc1tldmVudE5hbWVdKGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdLCBhcmd1bWVudHNbM10sIGFyZ3VtZW50c1s0XSwgYXJndW1lbnRzWzVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgLy8gVHJpZ2dlciBldmVudHNcbiAgICAgICAgICAgIGlmIChzLmVtaXR0ZXJFdmVudExpc3RlbmVyc1tldmVudE5hbWVdKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHMuZW1pdHRlckV2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcy5lbWl0dGVyRXZlbnRMaXN0ZW5lcnNbZXZlbnROYW1lXVtpXShhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSwgYXJndW1lbnRzWzNdLCBhcmd1bWVudHNbNF0sIGFyZ3VtZW50c1s1XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVHJpZ2dlciBwbHVnaW5zXG4gICAgICAgICAgICBpZiAocy5jYWxsUGx1Z2lucykgcy5jYWxsUGx1Z2lucyhldmVudE5hbWUsIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdLCBhcmd1bWVudHNbM10sIGFyZ3VtZW50c1s0XSwgYXJndW1lbnRzWzVdKTtcbiAgICAgICAgfTtcbiAgICAgICAgcy5vbiA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGV2ZW50TmFtZSA9IG5vcm1hbGl6ZUV2ZW50TmFtZShldmVudE5hbWUpO1xuICAgICAgICAgICAgaWYgKCFzLmVtaXR0ZXJFdmVudExpc3RlbmVyc1tldmVudE5hbWVdKSBzLmVtaXR0ZXJFdmVudExpc3RlbmVyc1tldmVudE5hbWVdID0gW107XG4gICAgICAgICAgICBzLmVtaXR0ZXJFdmVudExpc3RlbmVyc1tldmVudE5hbWVdLnB1c2goaGFuZGxlcik7XG4gICAgICAgICAgICByZXR1cm4gcztcbiAgICAgICAgfTtcbiAgICAgICAgcy5vZmYgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgIGV2ZW50TmFtZSA9IG5vcm1hbGl6ZUV2ZW50TmFtZShldmVudE5hbWUpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBhbGwgaGFuZGxlcnMgZm9yIHN1Y2ggZXZlbnRcbiAgICAgICAgICAgICAgICBzLmVtaXR0ZXJFdmVudExpc3RlbmVyc1tldmVudE5hbWVdID0gW107XG4gICAgICAgICAgICAgICAgcmV0dXJuIHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXMuZW1pdHRlckV2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV0gfHwgcy5lbWl0dGVyRXZlbnRMaXN0ZW5lcnNbZXZlbnROYW1lXS5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzLmVtaXR0ZXJFdmVudExpc3RlbmVyc1tldmVudE5hbWVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYocy5lbWl0dGVyRXZlbnRMaXN0ZW5lcnNbZXZlbnROYW1lXVtpXSA9PT0gaGFuZGxlcikgcy5lbWl0dGVyRXZlbnRMaXN0ZW5lcnNbZXZlbnROYW1lXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcztcbiAgICAgICAgfTtcbiAgICAgICAgcy5vbmNlID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgZXZlbnROYW1lID0gbm9ybWFsaXplRXZlbnROYW1lKGV2ZW50TmFtZSk7XG4gICAgICAgICAgICB2YXIgX2hhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcihhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdLCBhcmd1bWVudHNbM10sIGFyZ3VtZW50c1s0XSk7XG4gICAgICAgICAgICAgICAgcy5vZmYoZXZlbnROYW1lLCBfaGFuZGxlcik7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcy5vbihldmVudE5hbWUsIF9oYW5kbGVyKTtcbiAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEFjY2Vzc2liaWxpdHkgdG9vbHNcbiAgICAgICAgcy5hMTF5ID0ge1xuICAgICAgICAgICAgbWFrZUZvY3VzYWJsZTogZnVuY3Rpb24gKCRlbCkge1xuICAgICAgICAgICAgICAgICRlbC5hdHRyKCd0YWJJbmRleCcsICcwJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICRlbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGRSb2xlOiBmdW5jdGlvbiAoJGVsLCByb2xlKSB7XG4gICAgICAgICAgICAgICAgJGVsLmF0dHIoJ3JvbGUnLCByb2xlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJGVsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgICAgICBhZGRMYWJlbDogZnVuY3Rpb24gKCRlbCwgbGFiZWwpIHtcbiAgICAgICAgICAgICAgICAkZWwuYXR0cignYXJpYS1sYWJlbCcsIGxhYmVsKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJGVsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgICAgICBkaXNhYmxlOiBmdW5jdGlvbiAoJGVsKSB7XG4gICAgICAgICAgICAgICAgJGVsLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJGVsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgICAgICBlbmFibGU6IGZ1bmN0aW9uICgkZWwpIHtcbiAgICAgICAgICAgICAgICAkZWwuYXR0cignYXJpYS1kaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJGVsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgICAgICBvbkVudGVyS2V5OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSAhPT0gMTMpIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoJChldmVudC50YXJnZXQpLmlzKHMucGFyYW1zLm5leHRCdXR0b24pKSB7XG4gICAgICAgICAgICAgICAgICAgIHMub25DbGlja05leHQoZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5pc0VuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5hMTF5Lm5vdGlmeShzLnBhcmFtcy5sYXN0U2xpZGVNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuYTExeS5ub3RpZnkocy5wYXJhbXMubmV4dFNsaWRlTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoJChldmVudC50YXJnZXQpLmlzKHMucGFyYW1zLnByZXZCdXR0b24pKSB7XG4gICAgICAgICAgICAgICAgICAgIHMub25DbGlja1ByZXYoZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5pc0JlZ2lubmluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5hMTF5Lm5vdGlmeShzLnBhcmFtcy5maXJzdFNsaWRlTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLmExMXkubm90aWZ5KHMucGFyYW1zLnByZXZTbGlkZU1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgkKGV2ZW50LnRhcmdldCkuaXMoJy4nICsgcy5wYXJhbXMuYnVsbGV0Q2xhc3MpKSB7XG4gICAgICAgICAgICAgICAgICAgICQoZXZlbnQudGFyZ2V0KVswXS5jbGljaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAgICAgbGl2ZVJlZ2lvbjogJCgnPHNwYW4gY2xhc3M9XCJzd2lwZXItbm90aWZpY2F0aW9uXCIgYXJpYS1saXZlPVwiYXNzZXJ0aXZlXCIgYXJpYS1hdG9taWM9XCJ0cnVlXCI+PC9zcGFuPicpLFxuICAgICAgICBcbiAgICAgICAgICAgIG5vdGlmeTogZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgbm90aWZpY2F0aW9uID0gcy5hMTF5LmxpdmVSZWdpb247XG4gICAgICAgICAgICAgICAgaWYgKG5vdGlmaWNhdGlvbi5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICAgICAgICAgICAgICBub3RpZmljYXRpb24uaHRtbCgnJyk7XG4gICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uLmh0bWwobWVzc2FnZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIFNldHVwIGFjY2Vzc2liaWxpdHlcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMubmV4dEJ1dHRvbiAmJiBzLm5leHRCdXR0b24gJiYgcy5uZXh0QnV0dG9uLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcy5hMTF5Lm1ha2VGb2N1c2FibGUocy5uZXh0QnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgICAgcy5hMTF5LmFkZFJvbGUocy5uZXh0QnV0dG9uLCAnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgIHMuYTExeS5hZGRMYWJlbChzLm5leHRCdXR0b24sIHMucGFyYW1zLm5leHRTbGlkZU1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMucHJldkJ1dHRvbiAmJiBzLnByZXZCdXR0b24gJiYgcy5wcmV2QnV0dG9uLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcy5hMTF5Lm1ha2VGb2N1c2FibGUocy5wcmV2QnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgICAgcy5hMTF5LmFkZFJvbGUocy5wcmV2QnV0dG9uLCAnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgIHMuYTExeS5hZGRMYWJlbChzLnByZXZCdXR0b24sIHMucGFyYW1zLnByZXZTbGlkZU1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgJChzLmNvbnRhaW5lcikuYXBwZW5kKHMuYTExeS5saXZlUmVnaW9uKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbml0UGFnaW5hdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wYWdpbmF0aW9uICYmIHMucGFyYW1zLnBhZ2luYXRpb25DbGlja2FibGUgJiYgcy5idWxsZXRzICYmIHMuYnVsbGV0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5idWxsZXRzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJ1bGxldCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLmExMXkubWFrZUZvY3VzYWJsZShidWxsZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5hMTF5LmFkZFJvbGUoYnVsbGV0LCAnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLmExMXkuYWRkTGFiZWwoYnVsbGV0LCBzLnBhcmFtcy5wYWdpbmF0aW9uQnVsbGV0TWVzc2FnZS5yZXBsYWNlKC97e2luZGV4fX0vLCBidWxsZXQuaW5kZXgoKSArIDEpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAocy5hMTF5LmxpdmVSZWdpb24gJiYgcy5hMTF5LmxpdmVSZWdpb24ubGVuZ3RoID4gMCkgcy5hMTF5LmxpdmVSZWdpb24ucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFxuXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIEluaXQvRGVzdHJveVxuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIHMuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sb29wKSBzLmNyZWF0ZUxvb3AoKTtcbiAgICAgICAgICAgIHMudXBkYXRlQ29udGFpbmVyU2l6ZSgpO1xuICAgICAgICAgICAgcy51cGRhdGVTbGlkZXNTaXplKCk7XG4gICAgICAgICAgICBzLnVwZGF0ZVBhZ2luYXRpb24oKTtcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5zY3JvbGxiYXIgJiYgcy5zY3JvbGxiYXIpIHtcbiAgICAgICAgICAgICAgICBzLnNjcm9sbGJhci5zZXQoKTtcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuc2Nyb2xsYmFyRHJhZ2dhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHMuc2Nyb2xsYmFyLmVuYWJsZURyYWdnYWJsZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5lZmZlY3QgIT09ICdzbGlkZScgJiYgcy5lZmZlY3RzW3MucGFyYW1zLmVmZmVjdF0pIHtcbiAgICAgICAgICAgICAgICBpZiAoIXMucGFyYW1zLmxvb3ApIHMudXBkYXRlUHJvZ3Jlc3MoKTtcbiAgICAgICAgICAgICAgICBzLmVmZmVjdHNbcy5wYXJhbXMuZWZmZWN0XS5zZXRUcmFuc2xhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sb29wKSB7XG4gICAgICAgICAgICAgICAgcy5zbGlkZVRvKHMucGFyYW1zLmluaXRpYWxTbGlkZSArIHMubG9vcGVkU2xpZGVzLCAwLCBzLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcy5zbGlkZVRvKHMucGFyYW1zLmluaXRpYWxTbGlkZSwgMCwgcy5wYXJhbXMucnVuQ2FsbGJhY2tzT25Jbml0KTtcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuaW5pdGlhbFNsaWRlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFsbGF4ICYmIHMucGFyYW1zLnBhcmFsbGF4KSBzLnBhcmFsbGF4LnNldFRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5sYXp5ICYmIHMucGFyYW1zLmxhenlMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLmxhenkubG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5sYXp5LmluaXRpYWxJbWFnZUxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzLmF0dGFjaEV2ZW50cygpO1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLm9ic2VydmVyICYmIHMuc3VwcG9ydC5vYnNlcnZlcikge1xuICAgICAgICAgICAgICAgIHMuaW5pdE9ic2VydmVycygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnByZWxvYWRJbWFnZXMgJiYgIXMucGFyYW1zLmxhenlMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgcy5wcmVsb2FkSW1hZ2VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuYXV0b3BsYXkpIHtcbiAgICAgICAgICAgICAgICBzLnN0YXJ0QXV0b3BsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5rZXlib2FyZENvbnRyb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocy5lbmFibGVLZXlib2FyZENvbnRyb2wpIHMuZW5hYmxlS2V5Ym9hcmRDb250cm9sKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubW91c2V3aGVlbENvbnRyb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocy5lbmFibGVNb3VzZXdoZWVsQ29udHJvbCkgcy5lbmFibGVNb3VzZXdoZWVsQ29udHJvbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmhhc2huYXYpIHtcbiAgICAgICAgICAgICAgICBpZiAocy5oYXNobmF2KSBzLmhhc2huYXYuaW5pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmExMXkgJiYgcy5hMTF5KSBzLmExMXkuaW5pdCgpO1xuICAgICAgICAgICAgcy5lbWl0KCdvbkluaXQnLCBzKTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIC8vIENsZWFudXAgZHluYW1pYyBzdHlsZXNcbiAgICAgICAgcy5jbGVhbnVwU3R5bGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ29udGFpbmVyXG4gICAgICAgICAgICBzLmNvbnRhaW5lci5yZW1vdmVDbGFzcyhzLmNsYXNzTmFtZXMuam9pbignICcpKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIFdyYXBwZXJcbiAgICAgICAgICAgIHMud3JhcHBlci5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIFNsaWRlc1xuICAgICAgICAgICAgaWYgKHMuc2xpZGVzICYmIHMuc2xpZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHMuc2xpZGVzXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhbXG4gICAgICAgICAgICAgICAgICAgICAgcy5wYXJhbXMuc2xpZGVWaXNpYmxlQ2xhc3MsXG4gICAgICAgICAgICAgICAgICAgICAgcy5wYXJhbXMuc2xpZGVBY3RpdmVDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgICBzLnBhcmFtcy5zbGlkZU5leHRDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgICBzLnBhcmFtcy5zbGlkZVByZXZDbGFzc1xuICAgICAgICAgICAgICAgICAgICBdLmpvaW4oJyAnKSlcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ3N0eWxlJylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtc3dpcGVyLWNvbHVtbicpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLXN3aXBlci1yb3cnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAvLyBQYWdpbmF0aW9uL0J1bGxldHNcbiAgICAgICAgICAgIGlmIChzLnBhZ2luYXRpb25Db250YWluZXIgJiYgcy5wYWdpbmF0aW9uQ29udGFpbmVyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHMucGFnaW5hdGlvbkNvbnRhaW5lci5yZW1vdmVDbGFzcyhzLnBhcmFtcy5wYWdpbmF0aW9uSGlkZGVuQ2xhc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMuYnVsbGV0cyAmJiBzLmJ1bGxldHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcy5idWxsZXRzLnJlbW92ZUNsYXNzKHMucGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAvLyBCdXR0b25zXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMucHJldkJ1dHRvbikgJChzLnBhcmFtcy5wcmV2QnV0dG9uKS5yZW1vdmVDbGFzcyhzLnBhcmFtcy5idXR0b25EaXNhYmxlZENsYXNzKTtcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5uZXh0QnV0dG9uKSAkKHMucGFyYW1zLm5leHRCdXR0b24pLnJlbW92ZUNsYXNzKHMucGFyYW1zLmJ1dHRvbkRpc2FibGVkQ2xhc3MpO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIFNjcm9sbGJhclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNjcm9sbGJhciAmJiBzLnNjcm9sbGJhcikge1xuICAgICAgICAgICAgICAgIGlmIChzLnNjcm9sbGJhci50cmFjayAmJiBzLnNjcm9sbGJhci50cmFjay5sZW5ndGgpIHMuc2Nyb2xsYmFyLnRyYWNrLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgaWYgKHMuc2Nyb2xsYmFyLmRyYWcgJiYgcy5zY3JvbGxiYXIuZHJhZy5sZW5ndGgpIHMuc2Nyb2xsYmFyLmRyYWcucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIC8vIERlc3Ryb3lcbiAgICAgICAgcy5kZXN0cm95ID0gZnVuY3Rpb24gKGRlbGV0ZUluc3RhbmNlLCBjbGVhbnVwU3R5bGVzKSB7XG4gICAgICAgICAgICAvLyBEZXRhY2ggZXZlYnRzXG4gICAgICAgICAgICBzLmRldGFjaEV2ZW50cygpO1xuICAgICAgICAgICAgLy8gU3RvcCBhdXRvcGxheVxuICAgICAgICAgICAgcy5zdG9wQXV0b3BsYXkoKTtcbiAgICAgICAgICAgIC8vIERpc2FibGUgZHJhZ2dhYmxlXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuc2Nyb2xsYmFyICYmIHMuc2Nyb2xsYmFyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNjcm9sbGJhckRyYWdnYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICBzLnNjcm9sbGJhci5kaXNhYmxlRHJhZ2dhYmxlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRGVzdHJveSBsb29wXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubG9vcCkge1xuICAgICAgICAgICAgICAgIHMuZGVzdHJveUxvb3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENsZWFudXAgc3R5bGVzXG4gICAgICAgICAgICBpZiAoY2xlYW51cFN0eWxlcykge1xuICAgICAgICAgICAgICAgIHMuY2xlYW51cFN0eWxlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRGlzY29ubmVjdCBvYnNlcnZlclxuICAgICAgICAgICAgcy5kaXNjb25uZWN0T2JzZXJ2ZXJzKCk7XG4gICAgICAgICAgICAvLyBEaXNhYmxlIGtleWJvYXJkL21vdXNld2hlZWxcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5rZXlib2FyZENvbnRyb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocy5kaXNhYmxlS2V5Ym9hcmRDb250cm9sKSBzLmRpc2FibGVLZXlib2FyZENvbnRyb2woKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5tb3VzZXdoZWVsQ29udHJvbCkge1xuICAgICAgICAgICAgICAgIGlmIChzLmRpc2FibGVNb3VzZXdoZWVsQ29udHJvbCkgcy5kaXNhYmxlTW91c2V3aGVlbENvbnRyb2woKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERpc2FibGUgYTExeVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmExMXkgJiYgcy5hMTF5KSBzLmExMXkuZGVzdHJveSgpO1xuICAgICAgICAgICAgLy8gRGVzdHJveSBjYWxsYmFja1xuICAgICAgICAgICAgcy5lbWl0KCdvbkRlc3Ryb3knKTtcbiAgICAgICAgICAgIC8vIERlbGV0ZSBpbnN0YW5jZVxuICAgICAgICAgICAgaWYgKGRlbGV0ZUluc3RhbmNlICE9PSBmYWxzZSkgcyA9IG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBzLmluaXQoKTtcbiAgICAgICAgXG5cbiAgICBcbiAgICAgICAgLy8gUmV0dXJuIHN3aXBlciBpbnN0YW5jZVxuICAgICAgICByZXR1cm4gcztcbiAgICB9O1xuICAgIFxuXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICBQcm90b3R5cGVcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICBTd2lwZXIucHJvdG90eXBlID0ge1xuICAgICAgICBpc1NhZmFyaTogKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHJldHVybiAodWEuaW5kZXhPZignc2FmYXJpJykgPj0gMCAmJiB1YS5pbmRleE9mKCdjaHJvbWUnKSA8IDAgJiYgdWEuaW5kZXhPZignYW5kcm9pZCcpIDwgMCk7XG4gICAgICAgIH0pKCksXG4gICAgICAgIGlzVWlXZWJWaWV3OiAvKGlQaG9uZXxpUG9kfGlQYWQpLipBcHBsZVdlYktpdCg/IS4qU2FmYXJpKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksXG4gICAgICAgIGlzQXJyYXk6IGZ1bmN0aW9uIChhcnIpIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmFwcGx5KGFycikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgICAgIH0sXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgQnJvd3NlclxuICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgYnJvd3Nlcjoge1xuICAgICAgICAgICAgaWU6IHdpbmRvdy5uYXZpZ2F0b3IucG9pbnRlckVuYWJsZWQgfHwgd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkLFxuICAgICAgICAgICAgaWVUb3VjaDogKHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCAmJiB3aW5kb3cubmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMgPiAxKSB8fCAod2luZG93Lm5hdmlnYXRvci5wb2ludGVyRW5hYmxlZCAmJiB3aW5kb3cubmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMSlcbiAgICAgICAgfSxcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICBEZXZpY2VzXG4gICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBkZXZpY2U6IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICAgICAgICAgICAgdmFyIGFuZHJvaWQgPSB1YS5tYXRjaCgvKEFuZHJvaWQpOz9bXFxzXFwvXSsoW1xcZC5dKyk/Lyk7XG4gICAgICAgICAgICB2YXIgaXBhZCA9IHVhLm1hdGNoKC8oaVBhZCkuKk9TXFxzKFtcXGRfXSspLyk7XG4gICAgICAgICAgICB2YXIgaXBvZCA9IHVhLm1hdGNoKC8oaVBvZCkoLipPU1xccyhbXFxkX10rKSk/Lyk7XG4gICAgICAgICAgICB2YXIgaXBob25lID0gIWlwYWQgJiYgdWEubWF0Y2goLyhpUGhvbmVcXHNPUylcXHMoW1xcZF9dKykvKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaW9zOiBpcGFkIHx8IGlwaG9uZSB8fCBpcG9kLFxuICAgICAgICAgICAgICAgIGFuZHJvaWQ6IGFuZHJvaWRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pKCksXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgRmVhdHVyZSBEZXRlY3Rpb25cbiAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIHN1cHBvcnQ6IHtcbiAgICAgICAgICAgIHRvdWNoIDogKHdpbmRvdy5Nb2Rlcm5penIgJiYgTW9kZXJuaXpyLnRvdWNoID09PSB0cnVlKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhISgoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSB8fCB3aW5kb3cuRG9jdW1lbnRUb3VjaCAmJiBkb2N1bWVudCBpbnN0YW5jZW9mIERvY3VtZW50VG91Y2gpO1xuICAgICAgICAgICAgfSkoKSxcbiAgICBcbiAgICAgICAgICAgIHRyYW5zZm9ybXMzZCA6ICh3aW5kb3cuTW9kZXJuaXpyICYmIE1vZGVybml6ci5jc3N0cmFuc2Zvcm1zM2QgPT09IHRydWUpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLnN0eWxlO1xuICAgICAgICAgICAgICAgIHJldHVybiAoJ3dlYmtpdFBlcnNwZWN0aXZlJyBpbiBkaXYgfHwgJ01velBlcnNwZWN0aXZlJyBpbiBkaXYgfHwgJ09QZXJzcGVjdGl2ZScgaW4gZGl2IHx8ICdNc1BlcnNwZWN0aXZlJyBpbiBkaXYgfHwgJ3BlcnNwZWN0aXZlJyBpbiBkaXYpO1xuICAgICAgICAgICAgfSkoKSxcbiAgICBcbiAgICAgICAgICAgIGZsZXhib3g6IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLnN0eWxlO1xuICAgICAgICAgICAgICAgIHZhciBzdHlsZXMgPSAoJ2FsaWduSXRlbXMgd2Via2l0QWxpZ25JdGVtcyB3ZWJraXRCb3hBbGlnbiBtc0ZsZXhBbGlnbiBtb3pCb3hBbGlnbiB3ZWJraXRGbGV4RGlyZWN0aW9uIG1zRmxleERpcmVjdGlvbiBtb3pCb3hEaXJlY3Rpb24gbW96Qm94T3JpZW50IHdlYmtpdEJveERpcmVjdGlvbiB3ZWJraXRCb3hPcmllbnQnKS5zcGxpdCgnICcpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZXNbaV0gaW4gZGl2KSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSgpLFxuICAgIFxuICAgICAgICAgICAgb2JzZXJ2ZXI6IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgnTXV0YXRpb25PYnNlcnZlcicgaW4gd2luZG93IHx8ICdXZWJraXRNdXRhdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cpO1xuICAgICAgICAgICAgfSkoKVxuICAgICAgICB9LFxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIFBsdWdpbnNcbiAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIHBsdWdpbnM6IHt9XG4gICAgfTtcbiAgICBcblxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgRG9tNyBMaWJyYXJ5XG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICB2YXIgRG9tNyA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBEb203ID0gZnVuY3Rpb24gKGFycikge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcywgaSA9IDA7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYXJyYXktbGlrZSBvYmplY3RcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBfdGhpc1tpXSA9IGFycltpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLmxlbmd0aCA9IGFyci5sZW5ndGg7XG4gICAgICAgICAgICAvLyBSZXR1cm4gY29sbGVjdGlvbiB3aXRoIG1ldGhvZHNcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgJCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgY29udGV4dCkge1xuICAgICAgICAgICAgdmFyIGFyciA9IFtdLCBpID0gMDtcbiAgICAgICAgICAgIGlmIChzZWxlY3RvciAmJiAhY29udGV4dCkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIERvbTcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIC8vIFN0cmluZ1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbHMsIHRlbXBQYXJlbnQsIGh0bWwgPSBzZWxlY3Rvci50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChodG1sLmluZGV4T2YoJzwnKSA+PSAwICYmIGh0bWwuaW5kZXhPZignPicpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b0NyZWF0ZSA9ICdkaXYnO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGh0bWwuaW5kZXhPZignPGxpJykgPT09IDApIHRvQ3JlYXRlID0gJ3VsJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChodG1sLmluZGV4T2YoJzx0cicpID09PSAwKSB0b0NyZWF0ZSA9ICd0Ym9keSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaHRtbC5pbmRleE9mKCc8dGQnKSA9PT0gMCB8fCBodG1sLmluZGV4T2YoJzx0aCcpID09PSAwKSB0b0NyZWF0ZSA9ICd0cic7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaHRtbC5pbmRleE9mKCc8dGJvZHknKSA9PT0gMCkgdG9DcmVhdGUgPSAndGFibGUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGh0bWwuaW5kZXhPZignPG9wdGlvbicpID09PSAwKSB0b0NyZWF0ZSA9ICdzZWxlY3QnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodG9DcmVhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFBhcmVudC5pbm5lckhUTUwgPSBzZWxlY3RvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0ZW1wUGFyZW50LmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh0ZW1wUGFyZW50LmNoaWxkTm9kZXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb250ZXh0ICYmIHNlbGVjdG9yWzBdID09PSAnIycgJiYgIXNlbGVjdG9yLm1hdGNoKC9bIC48Pjp+XS8pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUHVyZSBJRCBzZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVscyA9IFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvci5zcGxpdCgnIycpWzFdKV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPdGhlciBzZWxlY3RvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHMgPSAoY29udGV4dCB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsc1tpXSkgYXJyLnB1c2goZWxzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBOb2RlL2VsZW1lbnRcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzZWxlY3Rvci5ub2RlVHlwZSB8fCBzZWxlY3RvciA9PT0gd2luZG93IHx8IHNlbGVjdG9yID09PSBkb2N1bWVudCkge1xuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vQXJyYXkgb2YgZWxlbWVudHMgb3IgaW5zdGFuY2Ugb2YgRG9tXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc2VsZWN0b3IubGVuZ3RoID4gMCAmJiBzZWxlY3RvclswXS5ub2RlVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2VsZWN0b3IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHNlbGVjdG9yW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgRG9tNyhhcnIpO1xuICAgICAgICB9O1xuICAgICAgICBEb203LnByb3RvdHlwZSA9IHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgYW5kIGF0dHJpdXRlc1xuICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNsYXNzTmFtZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBjbGFzc2VzID0gY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tqXS5jbGFzc0xpc3QuYWRkKGNsYXNzZXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNsYXNzZXMgPSBjbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNsYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2pdLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3Nlc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGFzQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXNbMF0pIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiB0aGlzWzBdLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvZ2dsZUNsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNsYXNzZXMgPSBjbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNsYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2pdLmNsYXNzTGlzdC50b2dnbGUoY2xhc3Nlc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXR0cjogZnVuY3Rpb24gKGF0dHJzLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmIHR5cGVvZiBhdHRycyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IGF0dHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbMF0pIHJldHVybiB0aGlzWzBdLmdldEF0dHJpYnV0ZShhdHRycyk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNldCBhdHRyc1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RyaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tpXS5zZXRBdHRyaWJ1dGUoYXR0cnMsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9iamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGF0dHJOYW1lIGluIGF0dHJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbaV1bYXR0ck5hbWVdID0gYXR0cnNbYXR0ck5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgYXR0cnNbYXR0ck5hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlbW92ZUF0dHI6IGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbaV0ucmVtb3ZlQXR0cmlidXRlKGF0dHIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRhOiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpc1swXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFLZXkgPSB0aGlzWzBdLmdldEF0dHJpYnV0ZSgnZGF0YS0nICsga2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhS2V5KSByZXR1cm4gZGF0YUtleTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXNbMF0uZG9tN0VsZW1lbnREYXRhU3RvcmFnZSAmJiAoa2V5IGluIHRoaXNbMF0uZG9tN0VsZW1lbnREYXRhU3RvcmFnZSkpIHJldHVybiB0aGlzWzBdLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2Vba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBTZXQgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSB0aGlzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlbC5kb203RWxlbWVudERhdGFTdG9yYWdlKSBlbC5kb203RWxlbWVudERhdGFTdG9yYWdlID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5kb203RWxlbWVudERhdGFTdG9yYWdlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gVHJhbnNmb3Jtc1xuICAgICAgICAgICAgdHJhbnNmb3JtIDogZnVuY3Rpb24gKHRyYW5zZm9ybSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxTdHlsZSA9IHRoaXNbaV0uc3R5bGU7XG4gICAgICAgICAgICAgICAgICAgIGVsU3R5bGUud2Via2l0VHJhbnNmb3JtID0gZWxTdHlsZS5Nc1RyYW5zZm9ybSA9IGVsU3R5bGUubXNUcmFuc2Zvcm0gPSBlbFN0eWxlLk1velRyYW5zZm9ybSA9IGVsU3R5bGUuT1RyYW5zZm9ybSA9IGVsU3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBmdW5jdGlvbiAoZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGR1cmF0aW9uICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IGR1cmF0aW9uICsgJ21zJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbFN0eWxlID0gdGhpc1tpXS5zdHlsZTtcbiAgICAgICAgICAgICAgICAgICAgZWxTdHlsZS53ZWJraXRUcmFuc2l0aW9uRHVyYXRpb24gPSBlbFN0eWxlLk1zVHJhbnNpdGlvbkR1cmF0aW9uID0gZWxTdHlsZS5tc1RyYW5zaXRpb25EdXJhdGlvbiA9IGVsU3R5bGUuTW96VHJhbnNpdGlvbkR1cmF0aW9uID0gZWxTdHlsZS5PVHJhbnNpdGlvbkR1cmF0aW9uID0gZWxTdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy9FdmVudHNcbiAgICAgICAgICAgIG9uOiBmdW5jdGlvbiAoZXZlbnROYW1lLCB0YXJnZXRTZWxlY3RvciwgbGlzdGVuZXIsIGNhcHR1cmUpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVMaXZlRXZlbnQoZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkKHRhcmdldCkuaXModGFyZ2V0U2VsZWN0b3IpKSBsaXN0ZW5lci5jYWxsKHRhcmdldCwgZSk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudHMgPSAkKHRhcmdldCkucGFyZW50cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBwYXJlbnRzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQocGFyZW50c1trXSkuaXModGFyZ2V0U2VsZWN0b3IpKSBsaXN0ZW5lci5jYWxsKHBhcmVudHNba10sIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBldmVudHMgPSBldmVudE5hbWUuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgICAgICB2YXIgaSwgajtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldFNlbGVjdG9yID09PSAnZnVuY3Rpb24nIHx8IHRhcmdldFNlbGVjdG9yID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVXN1YWwgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldFNlbGVjdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIgPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZSA9IGFyZ3VtZW50c1syXSB8fCBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBldmVudHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRzW2pdLCBsaXN0ZW5lciwgY2FwdHVyZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL0xpdmUgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgZXZlbnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzW2ldLmRvbTdMaXZlTGlzdGVuZXJzKSB0aGlzW2ldLmRvbTdMaXZlTGlzdGVuZXJzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tpXS5kb203TGl2ZUxpc3RlbmVycy5wdXNoKHtsaXN0ZW5lcjogbGlzdGVuZXIsIGxpdmVMaXN0ZW5lcjogaGFuZGxlTGl2ZUV2ZW50fSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tpXS5hZGRFdmVudExpc3RlbmVyKGV2ZW50c1tqXSwgaGFuZGxlTGl2ZUV2ZW50LCBjYXB0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvZmY6IGZ1bmN0aW9uIChldmVudE5hbWUsIHRhcmdldFNlbGVjdG9yLCBsaXN0ZW5lciwgY2FwdHVyZSkge1xuICAgICAgICAgICAgICAgIHZhciBldmVudHMgPSBldmVudE5hbWUuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0U2VsZWN0b3IgPT09ICdmdW5jdGlvbicgfHwgdGFyZ2V0U2VsZWN0b3IgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVXN1YWwgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRTZWxlY3RvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lciA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZSA9IGFyZ3VtZW50c1syXSB8fCBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tqXS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50c1tpXSwgbGlzdGVuZXIsIGNhcHR1cmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGl2ZSBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2pdLmRvbTdMaXZlTGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpc1tqXS5kb203TGl2ZUxpc3RlbmVycy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbal0uZG9tN0xpdmVMaXN0ZW5lcnNba10ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tqXS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50c1tpXSwgdGhpc1tqXS5kb203TGl2ZUxpc3RlbmVyc1trXS5saXZlTGlzdGVuZXIsIGNhcHR1cmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uY2U6IGZ1bmN0aW9uIChldmVudE5hbWUsIHRhcmdldFNlbGVjdG9yLCBsaXN0ZW5lciwgY2FwdHVyZSkge1xuICAgICAgICAgICAgICAgIHZhciBkb20gPSB0aGlzO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0U2VsZWN0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0U2VsZWN0b3IgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIgPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICAgICAgICAgIGNhcHR1cmUgPSBhcmd1bWVudHNbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHByb3h5KGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIoZSk7XG4gICAgICAgICAgICAgICAgICAgIGRvbS5vZmYoZXZlbnROYW1lLCB0YXJnZXRTZWxlY3RvciwgcHJveHksIGNhcHR1cmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkb20ub24oZXZlbnROYW1lLCB0YXJnZXRTZWxlY3RvciwgcHJveHksIGNhcHR1cmUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRyaWdnZXI6IGZ1bmN0aW9uIChldmVudE5hbWUsIGV2ZW50RGF0YSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXZ0O1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZ0ID0gbmV3IHdpbmRvdy5DdXN0b21FdmVudChldmVudE5hbWUsIHtkZXRhaWw6IGV2ZW50RGF0YSwgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZX0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2dC5pbml0RXZlbnQoZXZlbnROYW1lLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2dC5kZXRhaWwgPSBldmVudERhdGE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpc1tpXS5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHZhciBldmVudHMgPSBbJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCAndHJhbnNpdGlvbmVuZCcsICdvVHJhbnNpdGlvbkVuZCcsICdNU1RyYW5zaXRpb25FbmQnLCAnbXNUcmFuc2l0aW9uRW5kJ10sXG4gICAgICAgICAgICAgICAgICAgIGksIGosIGRvbSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZmlyZUNhbGxCYWNrKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ICE9PSB0aGlzKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcywgZSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbS5vZmYoZXZlbnRzW2ldLCBmaXJlQ2FsbEJhY2spO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb20ub24oZXZlbnRzW2ldLCBmaXJlQ2FsbEJhY2spO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIFNpemluZy9TdHlsZXNcbiAgICAgICAgICAgIHdpZHRoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXNbMF0gPT09IHdpbmRvdykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh0aGlzLmNzcygnd2lkdGgnKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvdXRlcldpZHRoOiBmdW5jdGlvbiAoaW5jbHVkZU1hcmdpbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmNsdWRlTWFyZ2lucylcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzWzBdLm9mZnNldFdpZHRoICsgcGFyc2VGbG9hdCh0aGlzLmNzcygnbWFyZ2luLXJpZ2h0JykpICsgcGFyc2VGbG9hdCh0aGlzLmNzcygnbWFyZ2luLWxlZnQnKSk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzWzBdLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhlaWdodDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzWzBdID09PSB3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHRoaXMuY3NzKCdoZWlnaHQnKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvdXRlckhlaWdodDogZnVuY3Rpb24gKGluY2x1ZGVNYXJnaW5zKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5jbHVkZU1hcmdpbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1swXS5vZmZzZXRIZWlnaHQgKyBwYXJzZUZsb2F0KHRoaXMuY3NzKCdtYXJnaW4tdG9wJykpICsgcGFyc2VGbG9hdCh0aGlzLmNzcygnbWFyZ2luLWJvdHRvbScpKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbMF0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9mZnNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsID0gdGhpc1swXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJveCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjbGllbnRUb3AgID0gZWwuY2xpZW50VG9wICB8fCBib2R5LmNsaWVudFRvcCAgfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNsaWVudExlZnQgPSBlbC5jbGllbnRMZWZ0IHx8IGJvZHkuY2xpZW50TGVmdCB8fCAwO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsVG9wICA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBlbC5zY3JvbGxUb3A7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGVsLnNjcm9sbExlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGJveC50b3AgICsgc2Nyb2xsVG9wICAtIGNsaWVudFRvcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGJveC5sZWZ0ICsgc2Nyb2xsTGVmdCAtIGNsaWVudExlZnRcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjc3M6IGZ1bmN0aW9uIChwcm9wcywgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHByb3BzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbMF0pIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzWzBdLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBwcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLnN0eWxlW3Byb3BdID0gcHJvcHNbcHJvcF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIgJiYgdHlwZW9mIHByb3BzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tpXS5zdHlsZVtwcm9wc10gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuICAgIFxuICAgICAgICAgICAgLy9Eb20gbWFuaXB1bGF0aW9uXG4gICAgICAgICAgICBlYWNoOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzW2ldLCBpLCB0aGlzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaHRtbDogZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGh0bWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzWzBdID8gdGhpc1swXS5pbm5lckhUTUwgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbaV0uaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGV4dDogZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRleHQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1swXS50ZXh0Q29udGVudC50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tpXS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzOiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXNbMF0pIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB2YXIgY29tcGFyZVdpdGgsIGk7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsID0gdGhpc1swXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsID09PSBkb2N1bWVudCkgcmV0dXJuIHNlbGVjdG9yID09PSBkb2N1bWVudDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsID09PSB3aW5kb3cpIHJldHVybiBzZWxlY3RvciA9PT0gd2luZG93O1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoZWwubWF0Y2hlcykgcmV0dXJuIGVsLm1hdGNoZXMoc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChlbC53ZWJraXRNYXRjaGVzU2VsZWN0b3IpIHJldHVybiBlbC53ZWJraXRNYXRjaGVzU2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChlbC5tb3pNYXRjaGVzU2VsZWN0b3IpIHJldHVybiBlbC5tb3pNYXRjaGVzU2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChlbC5tc01hdGNoZXNTZWxlY3RvcikgcmV0dXJuIGVsLm1zTWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wYXJlV2l0aCA9ICQoc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvbXBhcmVXaXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhcmVXaXRoW2ldID09PSB0aGlzWzBdKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzZWxlY3RvciA9PT0gZG9jdW1lbnQpIHJldHVybiB0aGlzWzBdID09PSBkb2N1bWVudDtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzZWxlY3RvciA9PT0gd2luZG93KSByZXR1cm4gdGhpc1swXSA9PT0gd2luZG93O1xuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0b3Iubm9kZVR5cGUgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBEb203KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wYXJlV2l0aCA9IHNlbGVjdG9yLm5vZGVUeXBlID8gW3NlbGVjdG9yXSA6IHNlbGVjdG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvbXBhcmVXaXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhcmVXaXRoW2ldID09PSB0aGlzWzBdKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluZGV4OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXNbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gdGhpc1swXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoKGNoaWxkID0gY2hpbGQucHJldmlvdXNTaWJsaW5nKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLm5vZGVUeXBlID09PSAxKSBpKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcTogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB2YXIgcmV0dXJuSW5kZXg7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gbGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERvbTcoW10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybkluZGV4ID0gbGVuZ3RoICsgaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXR1cm5JbmRleCA8IDApIHJldHVybiBuZXcgRG9tNyhbXSk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIG5ldyBEb203KFt0aGlzW3JldHVybkluZGV4XV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERvbTcoW3RoaXNbaW5kZXhdXSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXBwZW5kOiBmdW5jdGlvbiAobmV3Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICB2YXIgaSwgajtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5ld0NoaWxkID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBEaXYuaW5uZXJIVE1MID0gbmV3Q2hpbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAodGVtcERpdi5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tpXS5hcHBlbmRDaGlsZCh0ZW1wRGl2LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5ld0NoaWxkIGluc3RhbmNlb2YgRG9tNykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG5ld0NoaWxkLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tpXS5hcHBlbmRDaGlsZChuZXdDaGlsZFtqXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLmFwcGVuZENoaWxkKG5ld0NoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmVwZW5kOiBmdW5jdGlvbiAobmV3Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICB2YXIgaSwgajtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5ld0NoaWxkID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBEaXYuaW5uZXJIVE1MID0gbmV3Q2hpbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSB0ZW1wRGl2LmNoaWxkTm9kZXMubGVuZ3RoIC0gMTsgaiA+PSAwOyBqLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLmluc2VydEJlZm9yZSh0ZW1wRGl2LmNoaWxkTm9kZXNbal0sIHRoaXNbaV0uY2hpbGROb2Rlc1swXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzW2ldLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIG5ld0NoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChuZXdDaGlsZCBpbnN0YW5jZW9mIERvbTcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBuZXdDaGlsZC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbaV0uaW5zZXJ0QmVmb3JlKG5ld0NoaWxkW2pdLCB0aGlzW2ldLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tpXS5pbnNlcnRCZWZvcmUobmV3Q2hpbGQsIHRoaXNbaV0uY2hpbGROb2Rlc1swXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5zZXJ0QmVmb3JlOiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICB2YXIgYmVmb3JlID0gJChzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiZWZvcmUubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZWZvcmVbMF0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpc1tpXSwgYmVmb3JlWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChiZWZvcmUubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBiZWZvcmUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWZvcmVbal0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpc1tpXS5jbG9uZU5vZGUodHJ1ZSksIGJlZm9yZVtqXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5zZXJ0QWZ0ZXI6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIHZhciBhZnRlciA9ICQoc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWZ0ZXIubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZnRlclswXS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzW2ldLCBhZnRlclswXS5uZXh0U2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYWZ0ZXIubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBhZnRlci5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyW2pdLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXNbaV0uY2xvbmVOb2RlKHRydWUpLCBhZnRlcltqXS5uZXh0U2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzWzBdLm5leHRFbGVtZW50U2libGluZyAmJiAkKHRoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nKS5pcyhzZWxlY3RvcikpIHJldHVybiBuZXcgRG9tNyhbdGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmddKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIG5ldyBEb203KFtdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzWzBdLm5leHRFbGVtZW50U2libGluZykgcmV0dXJuIG5ldyBEb203KFt0aGlzWzBdLm5leHRFbGVtZW50U2libGluZ10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gbmV3IERvbTcoW10pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIG5ldyBEb203KFtdKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuZXh0QWxsOiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV4dEVscyA9IFtdO1xuICAgICAgICAgICAgICAgIHZhciBlbCA9IHRoaXNbMF07XG4gICAgICAgICAgICAgICAgaWYgKCFlbCkgcmV0dXJuIG5ldyBEb203KFtdKTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoZWwubmV4dEVsZW1lbnRTaWJsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXh0ID0gZWwubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCQobmV4dCkuaXMoc2VsZWN0b3IpKSBuZXh0RWxzLnB1c2gobmV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBuZXh0RWxzLnB1c2gobmV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGVsID0gbmV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEb203KG5leHRFbHMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByZXY6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpc1swXS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nICYmICQodGhpc1swXS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKS5pcyhzZWxlY3RvcikpIHJldHVybiBuZXcgRG9tNyhbdGhpc1swXS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBuZXcgRG9tNyhbXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpc1swXS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSByZXR1cm4gbmV3IERvbTcoW3RoaXNbMF0ucHJldmlvdXNFbGVtZW50U2libGluZ10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gbmV3IERvbTcoW10pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIG5ldyBEb203KFtdKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmV2QWxsOiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJldkVscyA9IFtdO1xuICAgICAgICAgICAgICAgIHZhciBlbCA9IHRoaXNbMF07XG4gICAgICAgICAgICAgICAgaWYgKCFlbCkgcmV0dXJuIG5ldyBEb203KFtdKTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoZWwucHJldmlvdXNFbGVtZW50U2libGluZykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldiA9IGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoJChwcmV2KS5pcyhzZWxlY3RvcikpIHByZXZFbHMucHVzaChwcmV2KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHByZXZFbHMucHVzaChwcmV2KTtcbiAgICAgICAgICAgICAgICAgICAgZWwgPSBwcmV2O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERvbTcocHJldkVscyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFyZW50OiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50cyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXNbaV0ucGFyZW50Tm9kZSkuaXMoc2VsZWN0b3IpKSBwYXJlbnRzLnB1c2godGhpc1tpXS5wYXJlbnROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudHMucHVzaCh0aGlzW2ldLnBhcmVudE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAkKCQudW5pcXVlKHBhcmVudHMpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXJlbnRzOiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50cyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gdGhpc1tpXS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJChwYXJlbnQpLmlzKHNlbGVjdG9yKSkgcGFyZW50cy5wdXNoKHBhcmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLnB1c2gocGFyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAkKCQudW5pcXVlKHBhcmVudHMpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmaW5kIDogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZvdW5kRWxlbWVudHMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZvdW5kID0gdGhpc1tpXS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBmb3VuZC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRFbGVtZW50cy5wdXNoKGZvdW5kW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERvbTcoZm91bmRFbGVtZW50cyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hpbGRyZW46IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGROb2RlcyA9IHRoaXNbaV0uY2hpbGROb2RlcztcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjaGlsZE5vZGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkTm9kZXNbal0ubm9kZVR5cGUgPT09IDEpIGNoaWxkcmVuLnB1c2goY2hpbGROb2Rlc1tqXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGROb2Rlc1tqXS5ub2RlVHlwZSA9PT0gMSAmJiAkKGNoaWxkTm9kZXNbal0pLmlzKHNlbGVjdG9yKSkgY2hpbGRyZW4ucHVzaChjaGlsZE5vZGVzW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERvbTcoJC51bmlxdWUoY2hpbGRyZW4pKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZW1vdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbaV0ucGFyZW50Tm9kZSkgdGhpc1tpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXNbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZG9tID0gdGhpcztcbiAgICAgICAgICAgICAgICB2YXIgaSwgajtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0b0FkZCA9ICQoYXJndW1lbnRzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHRvQWRkLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb21bZG9tLmxlbmd0aF0gPSB0b0FkZFtqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbS5sZW5ndGgrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZG9tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAkLmZuID0gRG9tNy5wcm90b3R5cGU7XG4gICAgICAgICQudW5pcXVlID0gZnVuY3Rpb24gKGFycikge1xuICAgICAgICAgICAgdmFyIHVuaXF1ZSA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodW5pcXVlLmluZGV4T2YoYXJyW2ldKSA9PT0gLTEpIHVuaXF1ZS5wdXNoKGFycltpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdW5pcXVlO1xuICAgICAgICB9O1xuICAgIFxuICAgICAgICByZXR1cm4gJDtcbiAgICB9KSgpO1xuICAgIFxuXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgR2V0IERvbSBsaWJyYXJpZXNcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICB2YXIgc3dpcGVyRG9tUGx1Z2lucyA9IFsnalF1ZXJ5JywgJ1plcHRvJywgJ0RvbTcnXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN3aXBlckRvbVBsdWdpbnMubGVuZ3RoOyBpKyspIHtcbiAgICBcdGlmICh3aW5kb3dbc3dpcGVyRG9tUGx1Z2luc1tpXV0pIHtcbiAgICBcdFx0YWRkTGlicmFyeVBsdWdpbih3aW5kb3dbc3dpcGVyRG9tUGx1Z2luc1tpXV0pO1xuICAgIFx0fVxuICAgIH1cbiAgICAvLyBSZXF1aXJlZCBET00gUGx1Z2luc1xuICAgIHZhciBkb21MaWI7XG4gICAgaWYgKHR5cGVvZiBEb203ID09PSAndW5kZWZpbmVkJykge1xuICAgIFx0ZG9tTGliID0gd2luZG93LkRvbTcgfHwgd2luZG93LlplcHRvIHx8IHdpbmRvdy5qUXVlcnk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgIFx0ZG9tTGliID0gRG9tNztcbiAgICB9XG5cbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIEFkZCAuc3dpcGVyIHBsdWdpbiBmcm9tIERvbSBsaWJyYXJpZXNcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgIGZ1bmN0aW9uIGFkZExpYnJhcnlQbHVnaW4obGliKSB7XG4gICAgICAgIGxpYi5mbi5zd2lwZXIgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgICAgICB2YXIgZmlyc3RJbnN0YW5jZTtcbiAgICAgICAgICAgIGxpYih0aGlzKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgcyA9IG5ldyBTd2lwZXIodGhpcywgcGFyYW1zKTtcbiAgICAgICAgICAgICAgICBpZiAoIWZpcnN0SW5zdGFuY2UpIGZpcnN0SW5zdGFuY2UgPSBzO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZmlyc3RJbnN0YW5jZTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgXG4gICAgaWYgKGRvbUxpYikge1xuICAgICAgICBpZiAoISgndHJhbnNpdGlvbkVuZCcgaW4gZG9tTGliLmZuKSkge1xuICAgICAgICAgICAgZG9tTGliLmZuLnRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnRzID0gWyd3ZWJraXRUcmFuc2l0aW9uRW5kJywgJ3RyYW5zaXRpb25lbmQnLCAnb1RyYW5zaXRpb25FbmQnLCAnTVNUcmFuc2l0aW9uRW5kJywgJ21zVHJhbnNpdGlvbkVuZCddLFxuICAgICAgICAgICAgICAgICAgICBpLCBqLCBkb20gPSB0aGlzO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGZpcmVDYWxsQmFjayhlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldCAhPT0gdGhpcykgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMsIGUpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb20ub2ZmKGV2ZW50c1tpXSwgZmlyZUNhbGxCYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tLm9uKGV2ZW50c1tpXSwgZmlyZUNhbGxCYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoJ3RyYW5zZm9ybScgaW4gZG9tTGliLmZuKSkge1xuICAgICAgICAgICAgZG9tTGliLmZuLnRyYW5zZm9ybSA9IGZ1bmN0aW9uICh0cmFuc2Zvcm0pIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsU3R5bGUgPSB0aGlzW2ldLnN0eWxlO1xuICAgICAgICAgICAgICAgICAgICBlbFN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IGVsU3R5bGUuTXNUcmFuc2Zvcm0gPSBlbFN0eWxlLm1zVHJhbnNmb3JtID0gZWxTdHlsZS5Nb3pUcmFuc2Zvcm0gPSBlbFN0eWxlLk9UcmFuc2Zvcm0gPSBlbFN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICghKCd0cmFuc2l0aW9uJyBpbiBkb21MaWIuZm4pKSB7XG4gICAgICAgICAgICBkb21MaWIuZm4udHJhbnNpdGlvbiA9IGZ1bmN0aW9uIChkdXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZHVyYXRpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsU3R5bGUgPSB0aGlzW2ldLnN0eWxlO1xuICAgICAgICAgICAgICAgICAgICBlbFN0eWxlLndlYmtpdFRyYW5zaXRpb25EdXJhdGlvbiA9IGVsU3R5bGUuTXNUcmFuc2l0aW9uRHVyYXRpb24gPSBlbFN0eWxlLm1zVHJhbnNpdGlvbkR1cmF0aW9uID0gZWxTdHlsZS5Nb3pUcmFuc2l0aW9uRHVyYXRpb24gPSBlbFN0eWxlLk9UcmFuc2l0aW9uRHVyYXRpb24gPSBlbFN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB3aW5kb3cuU3dpcGVyID0gU3dpcGVyO1xufSkoKTtcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09XG5Td2lwZXIgQU1EIEV4cG9ydFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbmlmICh0eXBlb2YobW9kdWxlKSAhPT0gJ3VuZGVmaW5lZCcpXG57XG4gICAgbW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuU3dpcGVyO1xufVxuZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFtdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5Td2lwZXI7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYXBzL3N3aXBlci5qcy5tYXBcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N3aXBlci9kaXN0L2pzL3N3aXBlci5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIFBPUlRGT0xJT1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnZhciBpbWFnZXNsb2FkID0gcmVxdWlyZSggJ2ltYWdlc2xvYWRlZCcgKTtcbnZhciBJc290b3BlID0gcmVxdWlyZSggJ2lzb3RvcGUtbGF5b3V0JyApO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAvLyBQT1JURk9MSU8gVkFSSUFCTEVTXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdmFyIHBvcnRmb2xpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucG9ydGZvbGlvX19ncmlkJyApO1xuICAgIHZhciBwb3J0Zm9saW9JdGVtID0gJy5wb3J0Zm9saW9fX2l0ZW0nO1xuICAgIHZhciBwb3J0Zm9saW9TaXplciA9ICcucG9ydGZvbGlvX19zaXplcic7XG4gICAgdmFyIHBvcnRmb2xpb0NvbnRyb2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnBvcnRmb2xpb19fY29udHJvbHMnICk7XG4gICAgdmFyIGlzbztcblxuICAgIC8vIFBPUlRGT0xJTyBMQVlPVVRcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGltYWdlc2xvYWQoIHBvcnRmb2xpbywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpc28gPSBuZXcgSXNvdG9wZSggcG9ydGZvbGlvLCB7XG4gICAgICAgICAgICBpdGVtU2VsZWN0b3I6IHBvcnRmb2xpb0l0ZW0sXG4gICAgICAgICAgICBwZXJjZW50UG9zaXRpb246IHRydWUsXG4gICAgICAgICAgICBtYXNvbnJ5OiB7XG4gICAgICAgICAgICAgICAgY29sdW1uV2lkdGg6IHBvcnRmb2xpb1NpemVyXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gUE9SVEZPTElPIEZJTFRFUklOR1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgcG9ydGZvbGlvQ29udHJvbC5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuICAgICAgICBpc28uYXJyYW5nZSh7IGZpbHRlcjogZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSggJ2RhdGEtZmlsdGVyJyApIH0pO1xuICAgIH0pO1xufSwgZmFsc2UgKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9tYXJrdXAvY29tcG9uZW50cy9ibG9jay1wb3J0Zm9saW8vYmxvY2stcG9ydGZvbGlvLmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyohXG4gKiBpbWFnZXNMb2FkZWQgdjQuMS4wXG4gKiBKYXZhU2NyaXB0IGlzIGFsbCBsaWtlIFwiWW91IGltYWdlcyBhcmUgZG9uZSB5ZXQgb3Igd2hhdD9cIlxuICogTUlUIExpY2Vuc2VcbiAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7ICd1c2Ugc3RyaWN0JztcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG5cbiAgLypnbG9iYWwgZGVmaW5lOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSwgcmVxdWlyZTogZmFsc2UgKi9cblxuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgJ2V2LWVtaXR0ZXIvZXYtZW1pdHRlcidcbiAgICBdLCBmdW5jdGlvbiggRXZFbWl0dGVyICkge1xuICAgICAgcmV0dXJuIGZhY3RvcnkoIHdpbmRvdywgRXZFbWl0dGVyICk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICByZXF1aXJlKCdldi1lbWl0dGVyJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93LmltYWdlc0xvYWRlZCA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICB3aW5kb3cuRXZFbWl0dGVyXG4gICAgKTtcbiAgfVxuXG59KSggd2luZG93LFxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgZmFjdG9yeSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5mdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEV2RW1pdHRlciApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJCA9IHdpbmRvdy5qUXVlcnk7XG52YXIgY29uc29sZSA9IHdpbmRvdy5jb25zb2xlO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBoZWxwZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIGV4dGVuZCBvYmplY3RzXG5mdW5jdGlvbiBleHRlbmQoIGEsIGIgKSB7XG4gIGZvciAoIHZhciBwcm9wIGluIGIgKSB7XG4gICAgYVsgcHJvcCBdID0gYlsgcHJvcCBdO1xuICB9XG4gIHJldHVybiBhO1xufVxuXG4vLyB0dXJuIGVsZW1lbnQgb3Igbm9kZUxpc3QgaW50byBhbiBhcnJheVxuZnVuY3Rpb24gbWFrZUFycmF5KCBvYmogKSB7XG4gIHZhciBhcnkgPSBbXTtcbiAgaWYgKCBBcnJheS5pc0FycmF5KCBvYmogKSApIHtcbiAgICAvLyB1c2Ugb2JqZWN0IGlmIGFscmVhZHkgYW4gYXJyYXlcbiAgICBhcnkgPSBvYmo7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBvYmoubGVuZ3RoID09ICdudW1iZXInICkge1xuICAgIC8vIGNvbnZlcnQgbm9kZUxpc3QgdG8gYXJyYXlcbiAgICBmb3IgKCB2YXIgaT0wOyBpIDwgb2JqLmxlbmd0aDsgaSsrICkge1xuICAgICAgYXJ5LnB1c2goIG9ialtpXSApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBhcnJheSBvZiBzaW5nbGUgaW5kZXhcbiAgICBhcnkucHVzaCggb2JqICk7XG4gIH1cbiAgcmV0dXJuIGFyeTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaW1hZ2VzTG9hZGVkIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8qKlxuICogQHBhcmFtIHtBcnJheSwgRWxlbWVudCwgTm9kZUxpc3QsIFN0cmluZ30gZWxlbVxuICogQHBhcmFtIHtPYmplY3Qgb3IgRnVuY3Rpb259IG9wdGlvbnMgLSBpZiBmdW5jdGlvbiwgdXNlIGFzIGNhbGxiYWNrXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvbkFsd2F5cyAtIGNhbGxiYWNrIGZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIEltYWdlc0xvYWRlZCggZWxlbSwgb3B0aW9ucywgb25BbHdheXMgKSB7XG4gIC8vIGNvZXJjZSBJbWFnZXNMb2FkZWQoKSB3aXRob3V0IG5ldywgdG8gYmUgbmV3IEltYWdlc0xvYWRlZCgpXG4gIGlmICggISggdGhpcyBpbnN0YW5jZW9mIEltYWdlc0xvYWRlZCApICkge1xuICAgIHJldHVybiBuZXcgSW1hZ2VzTG9hZGVkKCBlbGVtLCBvcHRpb25zLCBvbkFsd2F5cyApO1xuICB9XG4gIC8vIHVzZSBlbGVtIGFzIHNlbGVjdG9yIHN0cmluZ1xuICBpZiAoIHR5cGVvZiBlbGVtID09ICdzdHJpbmcnICkge1xuICAgIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCBlbGVtICk7XG4gIH1cblxuICB0aGlzLmVsZW1lbnRzID0gbWFrZUFycmF5KCBlbGVtICk7XG4gIHRoaXMub3B0aW9ucyA9IGV4dGVuZCgge30sIHRoaXMub3B0aW9ucyApO1xuXG4gIGlmICggdHlwZW9mIG9wdGlvbnMgPT0gJ2Z1bmN0aW9uJyApIHtcbiAgICBvbkFsd2F5cyA9IG9wdGlvbnM7XG4gIH0gZWxzZSB7XG4gICAgZXh0ZW5kKCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMgKTtcbiAgfVxuXG4gIGlmICggb25BbHdheXMgKSB7XG4gICAgdGhpcy5vbiggJ2Fsd2F5cycsIG9uQWx3YXlzICk7XG4gIH1cblxuICB0aGlzLmdldEltYWdlcygpO1xuXG4gIGlmICggJCApIHtcbiAgICAvLyBhZGQgalF1ZXJ5IERlZmVycmVkIG9iamVjdFxuICAgIHRoaXMuanFEZWZlcnJlZCA9IG5ldyAkLkRlZmVycmVkKCk7XG4gIH1cblxuICAvLyBIQUNLIGNoZWNrIGFzeW5jIHRvIGFsbG93IHRpbWUgdG8gYmluZCBsaXN0ZW5lcnNcbiAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5jaGVjaygpO1xuICB9LmJpbmQoIHRoaXMgKSk7XG59XG5cbkltYWdlc0xvYWRlZC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBFdkVtaXR0ZXIucHJvdG90eXBlICk7XG5cbkltYWdlc0xvYWRlZC5wcm90b3R5cGUub3B0aW9ucyA9IHt9O1xuXG5JbWFnZXNMb2FkZWQucHJvdG90eXBlLmdldEltYWdlcyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmltYWdlcyA9IFtdO1xuXG4gIC8vIGZpbHRlciAmIGZpbmQgaXRlbXMgaWYgd2UgaGF2ZSBhbiBpdGVtIHNlbGVjdG9yXG4gIHRoaXMuZWxlbWVudHMuZm9yRWFjaCggdGhpcy5hZGRFbGVtZW50SW1hZ2VzLCB0aGlzICk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZX0gZWxlbWVudFxuICovXG5JbWFnZXNMb2FkZWQucHJvdG90eXBlLmFkZEVsZW1lbnRJbWFnZXMgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgLy8gZmlsdGVyIHNpYmxpbmdzXG4gIGlmICggZWxlbS5ub2RlTmFtZSA9PSAnSU1HJyApIHtcbiAgICB0aGlzLmFkZEltYWdlKCBlbGVtICk7XG4gIH1cbiAgLy8gZ2V0IGJhY2tncm91bmQgaW1hZ2Ugb24gZWxlbWVudFxuICBpZiAoIHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kID09PSB0cnVlICkge1xuICAgIHRoaXMuYWRkRWxlbWVudEJhY2tncm91bmRJbWFnZXMoIGVsZW0gKTtcbiAgfVxuXG4gIC8vIGZpbmQgY2hpbGRyZW5cbiAgLy8gbm8gbm9uLWVsZW1lbnQgbm9kZXMsICMxNDNcbiAgdmFyIG5vZGVUeXBlID0gZWxlbS5ub2RlVHlwZTtcbiAgaWYgKCAhbm9kZVR5cGUgfHwgIWVsZW1lbnROb2RlVHlwZXNbIG5vZGVUeXBlIF0gKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBjaGlsZEltZ3MgPSBlbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpO1xuICAvLyBjb25jYXQgY2hpbGRFbGVtcyB0byBmaWx0ZXJGb3VuZCBhcnJheVxuICBmb3IgKCB2YXIgaT0wOyBpIDwgY2hpbGRJbWdzLmxlbmd0aDsgaSsrICkge1xuICAgIHZhciBpbWcgPSBjaGlsZEltZ3NbaV07XG4gICAgdGhpcy5hZGRJbWFnZSggaW1nICk7XG4gIH1cblxuICAvLyBnZXQgY2hpbGQgYmFja2dyb3VuZCBpbWFnZXNcbiAgaWYgKCB0eXBlb2YgdGhpcy5vcHRpb25zLmJhY2tncm91bmQgPT0gJ3N0cmluZycgKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZCApO1xuICAgIGZvciAoIGk9MDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrICkge1xuICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICB0aGlzLmFkZEVsZW1lbnRCYWNrZ3JvdW5kSW1hZ2VzKCBjaGlsZCApO1xuICAgIH1cbiAgfVxufTtcblxudmFyIGVsZW1lbnROb2RlVHlwZXMgPSB7XG4gIDE6IHRydWUsXG4gIDk6IHRydWUsXG4gIDExOiB0cnVlXG59O1xuXG5JbWFnZXNMb2FkZWQucHJvdG90eXBlLmFkZEVsZW1lbnRCYWNrZ3JvdW5kSW1hZ2VzID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIHZhciBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoIGVsZW0gKTtcbiAgaWYgKCAhc3R5bGUgKSB7XG4gICAgLy8gRmlyZWZveCByZXR1cm5zIG51bGwgaWYgaW4gYSBoaWRkZW4gaWZyYW1lIGh0dHBzOi8vYnVnemlsLmxhLzU0ODM5N1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBnZXQgdXJsIGluc2lkZSB1cmwoXCIuLi5cIilcbiAgdmFyIHJlVVJMID0gL3VybFxcKChbJ1wiXSk/KC4qPylcXDFcXCkvZ2k7XG4gIHZhciBtYXRjaGVzID0gcmVVUkwuZXhlYyggc3R5bGUuYmFja2dyb3VuZEltYWdlICk7XG4gIHdoaWxlICggbWF0Y2hlcyAhPT0gbnVsbCApIHtcbiAgICB2YXIgdXJsID0gbWF0Y2hlcyAmJiBtYXRjaGVzWzJdO1xuICAgIGlmICggdXJsICkge1xuICAgICAgdGhpcy5hZGRCYWNrZ3JvdW5kKCB1cmwsIGVsZW0gKTtcbiAgICB9XG4gICAgbWF0Y2hlcyA9IHJlVVJMLmV4ZWMoIHN0eWxlLmJhY2tncm91bmRJbWFnZSApO1xuICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7SW1hZ2V9IGltZ1xuICovXG5JbWFnZXNMb2FkZWQucHJvdG90eXBlLmFkZEltYWdlID0gZnVuY3Rpb24oIGltZyApIHtcbiAgdmFyIGxvYWRpbmdJbWFnZSA9IG5ldyBMb2FkaW5nSW1hZ2UoIGltZyApO1xuICB0aGlzLmltYWdlcy5wdXNoKCBsb2FkaW5nSW1hZ2UgKTtcbn07XG5cbkltYWdlc0xvYWRlZC5wcm90b3R5cGUuYWRkQmFja2dyb3VuZCA9IGZ1bmN0aW9uKCB1cmwsIGVsZW0gKSB7XG4gIHZhciBiYWNrZ3JvdW5kID0gbmV3IEJhY2tncm91bmQoIHVybCwgZWxlbSApO1xuICB0aGlzLmltYWdlcy5wdXNoKCBiYWNrZ3JvdW5kICk7XG59O1xuXG5JbWFnZXNMb2FkZWQucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG4gIHRoaXMucHJvZ3Jlc3NlZENvdW50ID0gMDtcbiAgdGhpcy5oYXNBbnlCcm9rZW4gPSBmYWxzZTtcbiAgLy8gY29tcGxldGUgaWYgbm8gaW1hZ2VzXG4gIGlmICggIXRoaXMuaW1hZ2VzLmxlbmd0aCApIHtcbiAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Qcm9ncmVzcyggaW1hZ2UsIGVsZW0sIG1lc3NhZ2UgKSB7XG4gICAgLy8gSEFDSyAtIENocm9tZSB0cmlnZ2VycyBldmVudCBiZWZvcmUgb2JqZWN0IHByb3BlcnRpZXMgaGF2ZSBjaGFuZ2VkLiAjODNcbiAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICAgIF90aGlzLnByb2dyZXNzKCBpbWFnZSwgZWxlbSwgbWVzc2FnZSApO1xuICAgIH0pO1xuICB9XG5cbiAgdGhpcy5pbWFnZXMuZm9yRWFjaCggZnVuY3Rpb24oIGxvYWRpbmdJbWFnZSApIHtcbiAgICBsb2FkaW5nSW1hZ2Uub25jZSggJ3Byb2dyZXNzJywgb25Qcm9ncmVzcyApO1xuICAgIGxvYWRpbmdJbWFnZS5jaGVjaygpO1xuICB9KTtcbn07XG5cbkltYWdlc0xvYWRlZC5wcm90b3R5cGUucHJvZ3Jlc3MgPSBmdW5jdGlvbiggaW1hZ2UsIGVsZW0sIG1lc3NhZ2UgKSB7XG4gIHRoaXMucHJvZ3Jlc3NlZENvdW50Kys7XG4gIHRoaXMuaGFzQW55QnJva2VuID0gdGhpcy5oYXNBbnlCcm9rZW4gfHwgIWltYWdlLmlzTG9hZGVkO1xuICAvLyBwcm9ncmVzcyBldmVudFxuICB0aGlzLmVtaXRFdmVudCggJ3Byb2dyZXNzJywgWyB0aGlzLCBpbWFnZSwgZWxlbSBdICk7XG4gIGlmICggdGhpcy5qcURlZmVycmVkICYmIHRoaXMuanFEZWZlcnJlZC5ub3RpZnkgKSB7XG4gICAgdGhpcy5qcURlZmVycmVkLm5vdGlmeSggdGhpcywgaW1hZ2UgKTtcbiAgfVxuICAvLyBjaGVjayBpZiBjb21wbGV0ZWRcbiAgaWYgKCB0aGlzLnByb2dyZXNzZWRDb3VudCA9PSB0aGlzLmltYWdlcy5sZW5ndGggKSB7XG4gICAgdGhpcy5jb21wbGV0ZSgpO1xuICB9XG5cbiAgaWYgKCB0aGlzLm9wdGlvbnMuZGVidWcgJiYgY29uc29sZSApIHtcbiAgICBjb25zb2xlLmxvZyggJ3Byb2dyZXNzOiAnICsgbWVzc2FnZSwgaW1hZ2UsIGVsZW0gKTtcbiAgfVxufTtcblxuSW1hZ2VzTG9hZGVkLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZXZlbnROYW1lID0gdGhpcy5oYXNBbnlCcm9rZW4gPyAnZmFpbCcgOiAnZG9uZSc7XG4gIHRoaXMuaXNDb21wbGV0ZSA9IHRydWU7XG4gIHRoaXMuZW1pdEV2ZW50KCBldmVudE5hbWUsIFsgdGhpcyBdICk7XG4gIHRoaXMuZW1pdEV2ZW50KCAnYWx3YXlzJywgWyB0aGlzIF0gKTtcbiAgaWYgKCB0aGlzLmpxRGVmZXJyZWQgKSB7XG4gICAgdmFyIGpxTWV0aG9kID0gdGhpcy5oYXNBbnlCcm9rZW4gPyAncmVqZWN0JyA6ICdyZXNvbHZlJztcbiAgICB0aGlzLmpxRGVmZXJyZWRbIGpxTWV0aG9kIF0oIHRoaXMgKTtcbiAgfVxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbmZ1bmN0aW9uIExvYWRpbmdJbWFnZSggaW1nICkge1xuICB0aGlzLmltZyA9IGltZztcbn1cblxuTG9hZGluZ0ltYWdlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEV2RW1pdHRlci5wcm90b3R5cGUgKTtcblxuTG9hZGluZ0ltYWdlLnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uKCkge1xuICAvLyBJZiBjb21wbGV0ZSBpcyB0cnVlIGFuZCBicm93c2VyIHN1cHBvcnRzIG5hdHVyYWwgc2l6ZXMsXG4gIC8vIHRyeSB0byBjaGVjayBmb3IgaW1hZ2Ugc3RhdHVzIG1hbnVhbGx5LlxuICB2YXIgaXNDb21wbGV0ZSA9IHRoaXMuZ2V0SXNJbWFnZUNvbXBsZXRlKCk7XG4gIGlmICggaXNDb21wbGV0ZSApIHtcbiAgICAvLyByZXBvcnQgYmFzZWQgb24gbmF0dXJhbFdpZHRoXG4gICAgdGhpcy5jb25maXJtKCB0aGlzLmltZy5uYXR1cmFsV2lkdGggIT09IDAsICduYXR1cmFsV2lkdGgnICk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gSWYgbm9uZSBvZiB0aGUgY2hlY2tzIGFib3ZlIG1hdGNoZWQsIHNpbXVsYXRlIGxvYWRpbmcgb24gZGV0YWNoZWQgZWxlbWVudC5cbiAgdGhpcy5wcm94eUltYWdlID0gbmV3IEltYWdlKCk7XG4gIHRoaXMucHJveHlJbWFnZS5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIHRoaXMgKTtcbiAgdGhpcy5wcm94eUltYWdlLmFkZEV2ZW50TGlzdGVuZXIoICdlcnJvcicsIHRoaXMgKTtcbiAgLy8gYmluZCB0byBpbWFnZSBhcyB3ZWxsIGZvciBGaXJlZm94LiAjMTkxXG4gIHRoaXMuaW1nLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgdGhpcyApO1xuICB0aGlzLmltZy5hZGRFdmVudExpc3RlbmVyKCAnZXJyb3InLCB0aGlzICk7XG4gIHRoaXMucHJveHlJbWFnZS5zcmMgPSB0aGlzLmltZy5zcmM7XG59O1xuXG5Mb2FkaW5nSW1hZ2UucHJvdG90eXBlLmdldElzSW1hZ2VDb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5pbWcuY29tcGxldGUgJiYgdGhpcy5pbWcubmF0dXJhbFdpZHRoICE9PSB1bmRlZmluZWQ7XG59O1xuXG5Mb2FkaW5nSW1hZ2UucHJvdG90eXBlLmNvbmZpcm0gPSBmdW5jdGlvbiggaXNMb2FkZWQsIG1lc3NhZ2UgKSB7XG4gIHRoaXMuaXNMb2FkZWQgPSBpc0xvYWRlZDtcbiAgdGhpcy5lbWl0RXZlbnQoICdwcm9ncmVzcycsIFsgdGhpcywgdGhpcy5pbWcsIG1lc3NhZ2UgXSApO1xufTtcblxuLy8gLS0tLS0gZXZlbnRzIC0tLS0tIC8vXG5cbi8vIHRyaWdnZXIgc3BlY2lmaWVkIGhhbmRsZXIgZm9yIGV2ZW50IHR5cGVcbkxvYWRpbmdJbWFnZS5wcm90b3R5cGUuaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHZhciBtZXRob2QgPSAnb24nICsgZXZlbnQudHlwZTtcbiAgaWYgKCB0aGlzWyBtZXRob2QgXSApIHtcbiAgICB0aGlzWyBtZXRob2QgXSggZXZlbnQgKTtcbiAgfVxufTtcblxuTG9hZGluZ0ltYWdlLnByb3RvdHlwZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5jb25maXJtKCB0cnVlLCAnb25sb2FkJyApO1xuICB0aGlzLnVuYmluZEV2ZW50cygpO1xufTtcblxuTG9hZGluZ0ltYWdlLnByb3RvdHlwZS5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuY29uZmlybSggZmFsc2UsICdvbmVycm9yJyApO1xuICB0aGlzLnVuYmluZEV2ZW50cygpO1xufTtcblxuTG9hZGluZ0ltYWdlLnByb3RvdHlwZS51bmJpbmRFdmVudHMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5wcm94eUltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdsb2FkJywgdGhpcyApO1xuICB0aGlzLnByb3h5SW1hZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2Vycm9yJywgdGhpcyApO1xuICB0aGlzLmltZy5yZW1vdmVFdmVudExpc3RlbmVyKCAnbG9hZCcsIHRoaXMgKTtcbiAgdGhpcy5pbWcucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2Vycm9yJywgdGhpcyApO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQmFja2dyb3VuZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5mdW5jdGlvbiBCYWNrZ3JvdW5kKCB1cmwsIGVsZW1lbnQgKSB7XG4gIHRoaXMudXJsID0gdXJsO1xuICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xufVxuXG4vLyBpbmhlcml0IExvYWRpbmdJbWFnZSBwcm90b3R5cGVcbkJhY2tncm91bmQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggTG9hZGluZ0ltYWdlLnByb3RvdHlwZSApO1xuXG5CYWNrZ3JvdW5kLnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmltZy5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIHRoaXMgKTtcbiAgdGhpcy5pbWcuYWRkRXZlbnRMaXN0ZW5lciggJ2Vycm9yJywgdGhpcyApO1xuICB0aGlzLmltZy5zcmMgPSB0aGlzLnVybDtcbiAgLy8gY2hlY2sgaWYgaW1hZ2UgaXMgYWxyZWFkeSBjb21wbGV0ZVxuICB2YXIgaXNDb21wbGV0ZSA9IHRoaXMuZ2V0SXNJbWFnZUNvbXBsZXRlKCk7XG4gIGlmICggaXNDb21wbGV0ZSApIHtcbiAgICB0aGlzLmNvbmZpcm0oIHRoaXMuaW1nLm5hdHVyYWxXaWR0aCAhPT0gMCwgJ25hdHVyYWxXaWR0aCcgKTtcbiAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xuICB9XG59O1xuXG5CYWNrZ3JvdW5kLnByb3RvdHlwZS51bmJpbmRFdmVudHMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5pbWcucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCB0aGlzICk7XG4gIHRoaXMuaW1nLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdlcnJvcicsIHRoaXMgKTtcbn07XG5cbkJhY2tncm91bmQucHJvdG90eXBlLmNvbmZpcm0gPSBmdW5jdGlvbiggaXNMb2FkZWQsIG1lc3NhZ2UgKSB7XG4gIHRoaXMuaXNMb2FkZWQgPSBpc0xvYWRlZDtcbiAgdGhpcy5lbWl0RXZlbnQoICdwcm9ncmVzcycsIFsgdGhpcywgdGhpcy5lbGVtZW50LCBtZXNzYWdlIF0gKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGpRdWVyeSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5JbWFnZXNMb2FkZWQubWFrZUpRdWVyeVBsdWdpbiA9IGZ1bmN0aW9uKCBqUXVlcnkgKSB7XG4gIGpRdWVyeSA9IGpRdWVyeSB8fCB3aW5kb3cualF1ZXJ5O1xuICBpZiAoICFqUXVlcnkgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIHNldCBsb2NhbCB2YXJpYWJsZVxuICAkID0galF1ZXJ5O1xuICAvLyAkKCkuaW1hZ2VzTG9hZGVkKClcbiAgJC5mbi5pbWFnZXNMb2FkZWQgPSBmdW5jdGlvbiggb3B0aW9ucywgY2FsbGJhY2sgKSB7XG4gICAgdmFyIGluc3RhbmNlID0gbmV3IEltYWdlc0xvYWRlZCggdGhpcywgb3B0aW9ucywgY2FsbGJhY2sgKTtcbiAgICByZXR1cm4gaW5zdGFuY2UuanFEZWZlcnJlZC5wcm9taXNlKCAkKHRoaXMpICk7XG4gIH07XG59O1xuLy8gdHJ5IG1ha2luZyBwbHVnaW5cbkltYWdlc0xvYWRlZC5tYWtlSlF1ZXJ5UGx1Z2luKCk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5yZXR1cm4gSW1hZ2VzTG9hZGVkO1xuXG59KTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ltYWdlc2xvYWRlZC9pbWFnZXNsb2FkZWQuanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEV2RW1pdHRlciB2MS4wLjNcbiAqIExpbCcgZXZlbnQgZW1pdHRlclxuICogTUlUIExpY2Vuc2VcbiAqL1xuXG4vKiBqc2hpbnQgdW51c2VkOiB0cnVlLCB1bmRlZjogdHJ1ZSwgc3RyaWN0OiB0cnVlICovXG5cbiggZnVuY3Rpb24oIGdsb2JhbCwgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qIGdsb2JhbHMgZGVmaW5lLCBtb2R1bGUsIHdpbmRvdyAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRCAtIFJlcXVpcmVKU1xuICAgIGRlZmluZSggZmFjdG9yeSApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTIC0gQnJvd3NlcmlmeSwgV2VicGFja1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xuICAgIGdsb2JhbC5FdkVtaXR0ZXIgPSBmYWN0b3J5KCk7XG4gIH1cblxufSggdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHRoaXMsIGZ1bmN0aW9uKCkge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gRXZFbWl0dGVyKCkge31cblxudmFyIHByb3RvID0gRXZFbWl0dGVyLnByb3RvdHlwZTtcblxucHJvdG8ub24gPSBmdW5jdGlvbiggZXZlbnROYW1lLCBsaXN0ZW5lciApIHtcbiAgaWYgKCAhZXZlbnROYW1lIHx8ICFsaXN0ZW5lciApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gc2V0IGV2ZW50cyBoYXNoXG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHMgPSB0aGlzLl9ldmVudHMgfHwge307XG4gIC8vIHNldCBsaXN0ZW5lcnMgYXJyYXlcbiAgdmFyIGxpc3RlbmVycyA9IGV2ZW50c1sgZXZlbnROYW1lIF0gPSBldmVudHNbIGV2ZW50TmFtZSBdIHx8IFtdO1xuICAvLyBvbmx5IGFkZCBvbmNlXG4gIGlmICggbGlzdGVuZXJzLmluZGV4T2YoIGxpc3RlbmVyICkgPT0gLTEgKSB7XG4gICAgbGlzdGVuZXJzLnB1c2goIGxpc3RlbmVyICk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLm9uY2UgPSBmdW5jdGlvbiggZXZlbnROYW1lLCBsaXN0ZW5lciApIHtcbiAgaWYgKCAhZXZlbnROYW1lIHx8ICFsaXN0ZW5lciApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gYWRkIGV2ZW50XG4gIHRoaXMub24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKTtcbiAgLy8gc2V0IG9uY2UgZmxhZ1xuICAvLyBzZXQgb25jZUV2ZW50cyBoYXNoXG4gIHZhciBvbmNlRXZlbnRzID0gdGhpcy5fb25jZUV2ZW50cyA9IHRoaXMuX29uY2VFdmVudHMgfHwge307XG4gIC8vIHNldCBvbmNlTGlzdGVuZXJzIG9iamVjdFxuICB2YXIgb25jZUxpc3RlbmVycyA9IG9uY2VFdmVudHNbIGV2ZW50TmFtZSBdID0gb25jZUV2ZW50c1sgZXZlbnROYW1lIF0gfHwge307XG4gIC8vIHNldCBmbGFnXG4gIG9uY2VMaXN0ZW5lcnNbIGxpc3RlbmVyIF0gPSB0cnVlO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8ub2ZmID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKSB7XG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHMgJiYgdGhpcy5fZXZlbnRzWyBldmVudE5hbWUgXTtcbiAgaWYgKCAhbGlzdGVuZXJzIHx8ICFsaXN0ZW5lcnMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgaW5kZXggPSBsaXN0ZW5lcnMuaW5kZXhPZiggbGlzdGVuZXIgKTtcbiAgaWYgKCBpbmRleCAhPSAtMSApIHtcbiAgICBsaXN0ZW5lcnMuc3BsaWNlKCBpbmRleCwgMSApO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5wcm90by5lbWl0RXZlbnQgPSBmdW5jdGlvbiggZXZlbnROYW1lLCBhcmdzICkge1xuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzICYmIHRoaXMuX2V2ZW50c1sgZXZlbnROYW1lIF07XG4gIGlmICggIWxpc3RlbmVycyB8fCAhbGlzdGVuZXJzLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIGkgPSAwO1xuICB2YXIgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV07XG4gIGFyZ3MgPSBhcmdzIHx8IFtdO1xuICAvLyBvbmNlIHN0dWZmXG4gIHZhciBvbmNlTGlzdGVuZXJzID0gdGhpcy5fb25jZUV2ZW50cyAmJiB0aGlzLl9vbmNlRXZlbnRzWyBldmVudE5hbWUgXTtcblxuICB3aGlsZSAoIGxpc3RlbmVyICkge1xuICAgIHZhciBpc09uY2UgPSBvbmNlTGlzdGVuZXJzICYmIG9uY2VMaXN0ZW5lcnNbIGxpc3RlbmVyIF07XG4gICAgaWYgKCBpc09uY2UgKSB7XG4gICAgICAvLyByZW1vdmUgbGlzdGVuZXJcbiAgICAgIC8vIHJlbW92ZSBiZWZvcmUgdHJpZ2dlciB0byBwcmV2ZW50IHJlY3Vyc2lvblxuICAgICAgdGhpcy5vZmYoIGV2ZW50TmFtZSwgbGlzdGVuZXIgKTtcbiAgICAgIC8vIHVuc2V0IG9uY2UgZmxhZ1xuICAgICAgZGVsZXRlIG9uY2VMaXN0ZW5lcnNbIGxpc3RlbmVyIF07XG4gICAgfVxuICAgIC8vIHRyaWdnZXIgbGlzdGVuZXJcbiAgICBsaXN0ZW5lci5hcHBseSggdGhpcywgYXJncyApO1xuICAgIC8vIGdldCBuZXh0IGxpc3RlbmVyXG4gICAgaSArPSBpc09uY2UgPyAwIDogMTtcbiAgICBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxucmV0dXJuIEV2RW1pdHRlcjtcblxufSkpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZXYtZW1pdHRlci9ldi1lbWl0dGVyLmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyohXG4gKiBJc290b3BlIHYzLjAuMVxuICpcbiAqIExpY2Vuc2VkIEdQTHYzIGZvciBvcGVuIHNvdXJjZSB1c2VcbiAqIG9yIElzb3RvcGUgQ29tbWVyY2lhbCBMaWNlbnNlIGZvciBjb21tZXJjaWFsIHVzZVxuICpcbiAqIGh0dHA6Ly9pc290b3BlLm1ldGFmaXp6eS5jb1xuICogQ29weXJpZ2h0IDIwMTYgTWV0YWZpenp5XG4gKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi8gLypnbG9iYWxzIGRlZmluZSwgbW9kdWxlLCByZXF1aXJlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAgICdvdXRsYXllci9vdXRsYXllcicsXG4gICAgICAgICdnZXQtc2l6ZS9nZXQtc2l6ZScsXG4gICAgICAgICdkZXNhbmRyby1tYXRjaGVzLXNlbGVjdG9yL21hdGNoZXMtc2VsZWN0b3InLFxuICAgICAgICAnZml6enktdWktdXRpbHMvdXRpbHMnLFxuICAgICAgICAnLi9pdGVtJyxcbiAgICAgICAgJy4vbGF5b3V0LW1vZGUnLFxuICAgICAgICAvLyBpbmNsdWRlIGRlZmF1bHQgbGF5b3V0IG1vZGVzXG4gICAgICAgICcuL2xheW91dC1tb2Rlcy9tYXNvbnJ5JyxcbiAgICAgICAgJy4vbGF5b3V0LW1vZGVzL2ZpdC1yb3dzJyxcbiAgICAgICAgJy4vbGF5b3V0LW1vZGVzL3ZlcnRpY2FsJ1xuICAgICAgXSxcbiAgICAgIGZ1bmN0aW9uKCBPdXRsYXllciwgZ2V0U2l6ZSwgbWF0Y2hlc1NlbGVjdG9yLCB1dGlscywgSXRlbSwgTGF5b3V0TW9kZSApIHtcbiAgICAgICAgcmV0dXJuIGZhY3RvcnkoIHdpbmRvdywgT3V0bGF5ZXIsIGdldFNpemUsIG1hdGNoZXNTZWxlY3RvciwgdXRpbHMsIEl0ZW0sIExheW91dE1vZGUgKTtcbiAgICAgIH0pO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgcmVxdWlyZSgnb3V0bGF5ZXInKSxcbiAgICAgIHJlcXVpcmUoJ2dldC1zaXplJyksXG4gICAgICByZXF1aXJlKCdkZXNhbmRyby1tYXRjaGVzLXNlbGVjdG9yJyksXG4gICAgICByZXF1aXJlKCdmaXp6eS11aS11dGlscycpLFxuICAgICAgcmVxdWlyZSgnLi9pdGVtJyksXG4gICAgICByZXF1aXJlKCcuL2xheW91dC1tb2RlJyksXG4gICAgICAvLyBpbmNsdWRlIGRlZmF1bHQgbGF5b3V0IG1vZGVzXG4gICAgICByZXF1aXJlKCcuL2xheW91dC1tb2Rlcy9tYXNvbnJ5JyksXG4gICAgICByZXF1aXJlKCcuL2xheW91dC1tb2Rlcy9maXQtcm93cycpLFxuICAgICAgcmVxdWlyZSgnLi9sYXlvdXQtbW9kZXMvdmVydGljYWwnKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuSXNvdG9wZSA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICB3aW5kb3cuT3V0bGF5ZXIsXG4gICAgICB3aW5kb3cuZ2V0U2l6ZSxcbiAgICAgIHdpbmRvdy5tYXRjaGVzU2VsZWN0b3IsXG4gICAgICB3aW5kb3cuZml6enlVSVV0aWxzLFxuICAgICAgd2luZG93Lklzb3RvcGUuSXRlbSxcbiAgICAgIHdpbmRvdy5Jc290b3BlLkxheW91dE1vZGVcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBPdXRsYXllciwgZ2V0U2l6ZSwgbWF0Y2hlc1NlbGVjdG9yLCB1dGlscyxcbiAgSXRlbSwgTGF5b3V0TW9kZSApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB2YXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnZhciBqUXVlcnkgPSB3aW5kb3cualF1ZXJ5O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBoZWxwZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnZhciB0cmltID0gU3RyaW5nLnByb3RvdHlwZS50cmltID9cbiAgZnVuY3Rpb24oIHN0ciApIHtcbiAgICByZXR1cm4gc3RyLnRyaW0oKTtcbiAgfSA6XG4gIGZ1bmN0aW9uKCBzdHIgKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKCAvXlxccyt8XFxzKyQvZywgJycgKTtcbiAgfTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaXNvdG9wZURlZmluaXRpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICAvLyBjcmVhdGUgYW4gT3V0bGF5ZXIgbGF5b3V0IGNsYXNzXG4gIHZhciBJc290b3BlID0gT3V0bGF5ZXIuY3JlYXRlKCAnaXNvdG9wZScsIHtcbiAgICBsYXlvdXRNb2RlOiAnbWFzb25yeScsXG4gICAgaXNKUXVlcnlGaWx0ZXJpbmc6IHRydWUsXG4gICAgc29ydEFzY2VuZGluZzogdHJ1ZVxuICB9KTtcblxuICBJc290b3BlLkl0ZW0gPSBJdGVtO1xuICBJc290b3BlLkxheW91dE1vZGUgPSBMYXlvdXRNb2RlO1xuXG4gIHZhciBwcm90byA9IElzb3RvcGUucHJvdG90eXBlO1xuXG4gIHByb3RvLl9jcmVhdGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLml0ZW1HVUlEID0gMDtcbiAgICAvLyBmdW5jdGlvbnMgdGhhdCBzb3J0IGl0ZW1zXG4gICAgdGhpcy5fc29ydGVycyA9IHt9O1xuICAgIHRoaXMuX2dldFNvcnRlcnMoKTtcbiAgICAvLyBjYWxsIHN1cGVyXG4gICAgT3V0bGF5ZXIucHJvdG90eXBlLl9jcmVhdGUuY2FsbCggdGhpcyApO1xuXG4gICAgLy8gY3JlYXRlIGxheW91dCBtb2Rlc1xuICAgIHRoaXMubW9kZXMgPSB7fTtcbiAgICAvLyBzdGFydCBmaWx0ZXJlZEl0ZW1zIHdpdGggYWxsIGl0ZW1zXG4gICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICAvLyBrZWVwIG9mIHRyYWNrIG9mIHNvcnRCeXNcbiAgICB0aGlzLnNvcnRIaXN0b3J5ID0gWyAnb3JpZ2luYWwtb3JkZXInIF07XG4gICAgLy8gY3JlYXRlIGZyb20gcmVnaXN0ZXJlZCBsYXlvdXQgbW9kZXNcbiAgICBmb3IgKCB2YXIgbmFtZSBpbiBMYXlvdXRNb2RlLm1vZGVzICkge1xuICAgICAgdGhpcy5faW5pdExheW91dE1vZGUoIG5hbWUgKTtcbiAgICB9XG4gIH07XG5cbiAgcHJvdG8ucmVsb2FkSXRlbXMgPSBmdW5jdGlvbigpIHtcbiAgICAvLyByZXNldCBpdGVtIElEIGNvdW50ZXJcbiAgICB0aGlzLml0ZW1HVUlEID0gMDtcbiAgICAvLyBjYWxsIHN1cGVyXG4gICAgT3V0bGF5ZXIucHJvdG90eXBlLnJlbG9hZEl0ZW1zLmNhbGwoIHRoaXMgKTtcbiAgfTtcblxuICBwcm90by5faXRlbWl6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IE91dGxheWVyLnByb3RvdHlwZS5faXRlbWl6ZS5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG4gICAgLy8gYXNzaWduIElEIGZvciBvcmlnaW5hbC1vcmRlclxuICAgIGZvciAoIHZhciBpPTA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKyApIHtcbiAgICAgIHZhciBpdGVtID0gaXRlbXNbaV07XG4gICAgICBpdGVtLmlkID0gdGhpcy5pdGVtR1VJRCsrO1xuICAgIH1cbiAgICB0aGlzLl91cGRhdGVJdGVtc1NvcnREYXRhKCBpdGVtcyApO1xuICAgIHJldHVybiBpdGVtcztcbiAgfTtcblxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGxheW91dCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4gIHByb3RvLl9pbml0TGF5b3V0TW9kZSA9IGZ1bmN0aW9uKCBuYW1lICkge1xuICAgIHZhciBNb2RlID0gTGF5b3V0TW9kZS5tb2Rlc1sgbmFtZSBdO1xuICAgIC8vIHNldCBtb2RlIG9wdGlvbnNcbiAgICAvLyBIQUNLIGV4dGVuZCBpbml0aWFsIG9wdGlvbnMsIGJhY2stZmlsbCBpbiBkZWZhdWx0IG9wdGlvbnNcbiAgICB2YXIgaW5pdGlhbE9wdHMgPSB0aGlzLm9wdGlvbnNbIG5hbWUgXSB8fCB7fTtcbiAgICB0aGlzLm9wdGlvbnNbIG5hbWUgXSA9IE1vZGUub3B0aW9ucyA/XG4gICAgICB1dGlscy5leHRlbmQoIE1vZGUub3B0aW9ucywgaW5pdGlhbE9wdHMgKSA6IGluaXRpYWxPcHRzO1xuICAgIC8vIGluaXQgbGF5b3V0IG1vZGUgaW5zdGFuY2VcbiAgICB0aGlzLm1vZGVzWyBuYW1lIF0gPSBuZXcgTW9kZSggdGhpcyApO1xuICB9O1xuXG5cbiAgcHJvdG8ubGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gaWYgZmlyc3QgdGltZSBkb2luZyBsYXlvdXQsIGRvIGFsbCBtYWdpY1xuICAgIGlmICggIXRoaXMuX2lzTGF5b3V0SW5pdGVkICYmIHRoaXMuX2dldE9wdGlvbignaW5pdExheW91dCcpICkge1xuICAgICAgdGhpcy5hcnJhbmdlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2xheW91dCgpO1xuICB9O1xuXG4gIC8vIHByaXZhdGUgbWV0aG9kIHRvIGJlIHVzZWQgaW4gbGF5b3V0KCkgJiBtYWdpYygpXG4gIHByb3RvLl9sYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBkb24ndCBhbmltYXRlIGZpcnN0IGxheW91dFxuICAgIHZhciBpc0luc3RhbnQgPSB0aGlzLl9nZXRJc0luc3RhbnQoKTtcbiAgICAvLyBsYXlvdXQgZmxvd1xuICAgIHRoaXMuX3Jlc2V0TGF5b3V0KCk7XG4gICAgdGhpcy5fbWFuYWdlU3RhbXBzKCk7XG4gICAgdGhpcy5sYXlvdXRJdGVtcyggdGhpcy5maWx0ZXJlZEl0ZW1zLCBpc0luc3RhbnQgKTtcblxuICAgIC8vIGZsYWcgZm9yIGluaXRhbGl6ZWRcbiAgICB0aGlzLl9pc0xheW91dEluaXRlZCA9IHRydWU7XG4gIH07XG5cbiAgLy8gZmlsdGVyICsgc29ydCArIGxheW91dFxuICBwcm90by5hcnJhbmdlID0gZnVuY3Rpb24oIG9wdHMgKSB7XG4gICAgLy8gc2V0IGFueSBvcHRpb25zIHBhc3NcbiAgICB0aGlzLm9wdGlvbiggb3B0cyApO1xuICAgIHRoaXMuX2dldElzSW5zdGFudCgpO1xuICAgIC8vIGZpbHRlciwgc29ydCwgYW5kIGxheW91dFxuXG4gICAgLy8gZmlsdGVyXG4gICAgdmFyIGZpbHRlcmVkID0gdGhpcy5fZmlsdGVyKCB0aGlzLml0ZW1zICk7XG4gICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gZmlsdGVyZWQubWF0Y2hlcztcblxuICAgIHRoaXMuX2JpbmRBcnJhbmdlQ29tcGxldGUoKTtcblxuICAgIGlmICggdGhpcy5faXNJbnN0YW50ICkge1xuICAgICAgdGhpcy5fbm9UcmFuc2l0aW9uKCB0aGlzLl9oaWRlUmV2ZWFsLCBbIGZpbHRlcmVkIF0gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faGlkZVJldmVhbCggZmlsdGVyZWQgKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zb3J0KCk7XG4gICAgdGhpcy5fbGF5b3V0KCk7XG4gIH07XG4gIC8vIGFsaWFzIHRvIF9pbml0IGZvciBtYWluIHBsdWdpbiBtZXRob2RcbiAgcHJvdG8uX2luaXQgPSBwcm90by5hcnJhbmdlO1xuXG4gIHByb3RvLl9oaWRlUmV2ZWFsID0gZnVuY3Rpb24oIGZpbHRlcmVkICkge1xuICAgIHRoaXMucmV2ZWFsKCBmaWx0ZXJlZC5uZWVkUmV2ZWFsICk7XG4gICAgdGhpcy5oaWRlKCBmaWx0ZXJlZC5uZWVkSGlkZSApO1xuICB9O1xuXG4gIC8vIEhBQ0tcbiAgLy8gRG9uJ3QgYW5pbWF0ZS90cmFuc2l0aW9uIGZpcnN0IGxheW91dFxuICAvLyBPciBkb24ndCBhbmltYXRlL3RyYW5zaXRpb24gb3RoZXIgbGF5b3V0c1xuICBwcm90by5fZ2V0SXNJbnN0YW50ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGlzTGF5b3V0SW5zdGFudCA9IHRoaXMuX2dldE9wdGlvbignbGF5b3V0SW5zdGFudCcpO1xuICAgIHZhciBpc0luc3RhbnQgPSBpc0xheW91dEluc3RhbnQgIT09IHVuZGVmaW5lZCA/IGlzTGF5b3V0SW5zdGFudCA6XG4gICAgICAhdGhpcy5faXNMYXlvdXRJbml0ZWQ7XG4gICAgdGhpcy5faXNJbnN0YW50ID0gaXNJbnN0YW50O1xuICAgIHJldHVybiBpc0luc3RhbnQ7XG4gIH07XG5cbiAgLy8gbGlzdGVuIGZvciBsYXlvdXRDb21wbGV0ZSwgaGlkZUNvbXBsZXRlIGFuZCByZXZlYWxDb21wbGV0ZVxuICAvLyB0byB0cmlnZ2VyIGFycmFuZ2VDb21wbGV0ZVxuICBwcm90by5fYmluZEFycmFuZ2VDb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIGxpc3RlbiBmb3IgMyBldmVudHMgdG8gdHJpZ2dlciBhcnJhbmdlQ29tcGxldGVcbiAgICB2YXIgaXNMYXlvdXRDb21wbGV0ZSwgaXNIaWRlQ29tcGxldGUsIGlzUmV2ZWFsQ29tcGxldGU7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICBmdW5jdGlvbiBhcnJhbmdlUGFyYWxsZWxDYWxsYmFjaygpIHtcbiAgICAgIGlmICggaXNMYXlvdXRDb21wbGV0ZSAmJiBpc0hpZGVDb21wbGV0ZSAmJiBpc1JldmVhbENvbXBsZXRlICkge1xuICAgICAgICBfdGhpcy5kaXNwYXRjaEV2ZW50KCAnYXJyYW5nZUNvbXBsZXRlJywgbnVsbCwgWyBfdGhpcy5maWx0ZXJlZEl0ZW1zIF0gKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5vbmNlKCAnbGF5b3V0Q29tcGxldGUnLCBmdW5jdGlvbigpIHtcbiAgICAgIGlzTGF5b3V0Q29tcGxldGUgPSB0cnVlO1xuICAgICAgYXJyYW5nZVBhcmFsbGVsQ2FsbGJhY2soKTtcbiAgICB9KTtcbiAgICB0aGlzLm9uY2UoICdoaWRlQ29tcGxldGUnLCBmdW5jdGlvbigpIHtcbiAgICAgIGlzSGlkZUNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgIGFycmFuZ2VQYXJhbGxlbENhbGxiYWNrKCk7XG4gICAgfSk7XG4gICAgdGhpcy5vbmNlKCAncmV2ZWFsQ29tcGxldGUnLCBmdW5jdGlvbigpIHtcbiAgICAgIGlzUmV2ZWFsQ29tcGxldGUgPSB0cnVlO1xuICAgICAgYXJyYW5nZVBhcmFsbGVsQ2FsbGJhY2soKTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBmaWx0ZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICBwcm90by5fZmlsdGVyID0gZnVuY3Rpb24oIGl0ZW1zICkge1xuICAgIHZhciBmaWx0ZXIgPSB0aGlzLm9wdGlvbnMuZmlsdGVyO1xuICAgIGZpbHRlciA9IGZpbHRlciB8fCAnKic7XG4gICAgdmFyIG1hdGNoZXMgPSBbXTtcbiAgICB2YXIgaGlkZGVuTWF0Y2hlZCA9IFtdO1xuICAgIHZhciB2aXNpYmxlVW5tYXRjaGVkID0gW107XG5cbiAgICB2YXIgdGVzdCA9IHRoaXMuX2dldEZpbHRlclRlc3QoIGZpbHRlciApO1xuXG4gICAgLy8gdGVzdCBlYWNoIGl0ZW1cbiAgICBmb3IgKCB2YXIgaT0wOyBpIDwgaXRlbXMubGVuZ3RoOyBpKysgKSB7XG4gICAgICB2YXIgaXRlbSA9IGl0ZW1zW2ldO1xuICAgICAgaWYgKCBpdGVtLmlzSWdub3JlZCApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICAvLyBhZGQgaXRlbSB0byBlaXRoZXIgbWF0Y2hlZCBvciB1bm1hdGNoZWQgZ3JvdXBcbiAgICAgIHZhciBpc01hdGNoZWQgPSB0ZXN0KCBpdGVtICk7XG4gICAgICAvLyBpdGVtLmlzRmlsdGVyTWF0Y2hlZCA9IGlzTWF0Y2hlZDtcbiAgICAgIC8vIGFkZCB0byBtYXRjaGVzIGlmIGl0cyBhIG1hdGNoXG4gICAgICBpZiAoIGlzTWF0Y2hlZCApIHtcbiAgICAgICAgbWF0Y2hlcy5wdXNoKCBpdGVtICk7XG4gICAgICB9XG4gICAgICAvLyBhZGQgdG8gYWRkaXRpb25hbCBncm91cCBpZiBpdGVtIG5lZWRzIHRvIGJlIGhpZGRlbiBvciByZXZlYWxlZFxuICAgICAgaWYgKCBpc01hdGNoZWQgJiYgaXRlbS5pc0hpZGRlbiApIHtcbiAgICAgICAgaGlkZGVuTWF0Y2hlZC5wdXNoKCBpdGVtICk7XG4gICAgICB9IGVsc2UgaWYgKCAhaXNNYXRjaGVkICYmICFpdGVtLmlzSGlkZGVuICkge1xuICAgICAgICB2aXNpYmxlVW5tYXRjaGVkLnB1c2goIGl0ZW0gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZXR1cm4gY29sbGVjdGlvbnMgb2YgaXRlbXMgdG8gYmUgbWFuaXB1bGF0ZWRcbiAgICByZXR1cm4ge1xuICAgICAgbWF0Y2hlczogbWF0Y2hlcyxcbiAgICAgIG5lZWRSZXZlYWw6IGhpZGRlbk1hdGNoZWQsXG4gICAgICBuZWVkSGlkZTogdmlzaWJsZVVubWF0Y2hlZFxuICAgIH07XG4gIH07XG5cbiAgLy8gZ2V0IGEgalF1ZXJ5LCBmdW5jdGlvbiwgb3IgYSBtYXRjaGVzU2VsZWN0b3IgdGVzdCBnaXZlbiB0aGUgZmlsdGVyXG4gIHByb3RvLl9nZXRGaWx0ZXJUZXN0ID0gZnVuY3Rpb24oIGZpbHRlciApIHtcbiAgICBpZiAoIGpRdWVyeSAmJiB0aGlzLm9wdGlvbnMuaXNKUXVlcnlGaWx0ZXJpbmcgKSB7XG4gICAgICAvLyB1c2UgalF1ZXJ5XG4gICAgICByZXR1cm4gZnVuY3Rpb24oIGl0ZW0gKSB7XG4gICAgICAgIHJldHVybiBqUXVlcnkoIGl0ZW0uZWxlbWVudCApLmlzKCBmaWx0ZXIgKTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICggdHlwZW9mIGZpbHRlciA9PSAnZnVuY3Rpb24nICkge1xuICAgICAgLy8gdXNlIGZpbHRlciBhcyBmdW5jdGlvblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCBpdGVtICkge1xuICAgICAgICByZXR1cm4gZmlsdGVyKCBpdGVtLmVsZW1lbnQgKTtcbiAgICAgIH07XG4gICAgfVxuICAgIC8vIGRlZmF1bHQsIHVzZSBmaWx0ZXIgYXMgc2VsZWN0b3Igc3RyaW5nXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCBpdGVtICkge1xuICAgICAgcmV0dXJuIG1hdGNoZXNTZWxlY3RvciggaXRlbS5lbGVtZW50LCBmaWx0ZXIgKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHNvcnRpbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICAvKipcbiAgICogQHBhcmFtcyB7QXJyYXl9IGVsZW1zXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHByb3RvLnVwZGF0ZVNvcnREYXRhID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICAgIC8vIGdldCBpdGVtc1xuICAgIHZhciBpdGVtcztcbiAgICBpZiAoIGVsZW1zICkge1xuICAgICAgZWxlbXMgPSB1dGlscy5tYWtlQXJyYXkoIGVsZW1zICk7XG4gICAgICBpdGVtcyA9IHRoaXMuZ2V0SXRlbXMoIGVsZW1zICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHVwZGF0ZSBhbGwgaXRlbXMgaWYgbm8gZWxlbXMgcHJvdmlkZWRcbiAgICAgIGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICB9XG5cbiAgICB0aGlzLl9nZXRTb3J0ZXJzKCk7XG4gICAgdGhpcy5fdXBkYXRlSXRlbXNTb3J0RGF0YSggaXRlbXMgKTtcbiAgfTtcblxuICBwcm90by5fZ2V0U29ydGVycyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBnZXRTb3J0RGF0YSA9IHRoaXMub3B0aW9ucy5nZXRTb3J0RGF0YTtcbiAgICBmb3IgKCB2YXIga2V5IGluIGdldFNvcnREYXRhICkge1xuICAgICAgdmFyIHNvcnRlciA9IGdldFNvcnREYXRhWyBrZXkgXTtcbiAgICAgIHRoaXMuX3NvcnRlcnNbIGtleSBdID0gbXVuZ2VTb3J0ZXIoIHNvcnRlciApO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtcyB7QXJyYXl9IGl0ZW1zIC0gb2YgSXNvdG9wZS5JdGVtc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJvdG8uX3VwZGF0ZUl0ZW1zU29ydERhdGEgPSBmdW5jdGlvbiggaXRlbXMgKSB7XG4gICAgLy8gZG8gbm90IHVwZGF0ZSBpZiBubyBpdGVtc1xuICAgIHZhciBsZW4gPSBpdGVtcyAmJiBpdGVtcy5sZW5ndGg7XG5cbiAgICBmb3IgKCB2YXIgaT0wOyBsZW4gJiYgaSA8IGxlbjsgaSsrICkge1xuICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tpXTtcbiAgICAgIGl0ZW0udXBkYXRlU29ydERhdGEoKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gLS0tLS0gbXVuZ2Ugc29ydGVyIC0tLS0tIC8vXG5cbiAgLy8gZW5jYXBzdWxhdGUgdGhpcywgYXMgd2UganVzdCBuZWVkIG11bmdlU29ydGVyXG4gIC8vIG90aGVyIGZ1bmN0aW9ucyBpbiBoZXJlIGFyZSBqdXN0IGZvciBtdW5naW5nXG4gIHZhciBtdW5nZVNvcnRlciA9ICggZnVuY3Rpb24oKSB7XG4gICAgLy8gYWRkIGEgbWFnaWMgbGF5ZXIgdG8gc29ydGVycyBmb3IgY29udmllbmVudCBzaG9ydGhhbmRzXG4gICAgLy8gYC5mb28tYmFyYCB3aWxsIHVzZSB0aGUgdGV4dCBvZiAuZm9vLWJhciBxdWVyeVNlbGVjdG9yXG4gICAgLy8gYFtmb28tYmFyXWAgd2lsbCB1c2UgYXR0cmlidXRlXG4gICAgLy8geW91IGNhbiBhbHNvIGFkZCBwYXJzZXJcbiAgICAvLyBgLmZvby1iYXIgcGFyc2VJbnRgIHdpbGwgcGFyc2UgdGhhdCBhcyBhIG51bWJlclxuICAgIGZ1bmN0aW9uIG11bmdlU29ydGVyKCBzb3J0ZXIgKSB7XG4gICAgICAvLyBpZiBub3QgYSBzdHJpbmcsIHJldHVybiBmdW5jdGlvbiBvciB3aGF0ZXZlciBpdCBpc1xuICAgICAgaWYgKCB0eXBlb2Ygc29ydGVyICE9ICdzdHJpbmcnICkge1xuICAgICAgICByZXR1cm4gc29ydGVyO1xuICAgICAgfVxuICAgICAgLy8gcGFyc2UgdGhlIHNvcnRlciBzdHJpbmdcbiAgICAgIHZhciBhcmdzID0gdHJpbSggc29ydGVyICkuc3BsaXQoJyAnKTtcbiAgICAgIHZhciBxdWVyeSA9IGFyZ3NbMF07XG4gICAgICAvLyBjaGVjayBpZiBxdWVyeSBsb29rcyBsaWtlIFthbi1hdHRyaWJ1dGVdXG4gICAgICB2YXIgYXR0ck1hdGNoID0gcXVlcnkubWF0Y2goIC9eXFxbKC4rKVxcXSQvICk7XG4gICAgICB2YXIgYXR0ciA9IGF0dHJNYXRjaCAmJiBhdHRyTWF0Y2hbMV07XG4gICAgICB2YXIgZ2V0VmFsdWUgPSBnZXRWYWx1ZUdldHRlciggYXR0ciwgcXVlcnkgKTtcbiAgICAgIC8vIHVzZSBzZWNvbmQgYXJndW1lbnQgYXMgYSBwYXJzZXJcbiAgICAgIHZhciBwYXJzZXIgPSBJc290b3BlLnNvcnREYXRhUGFyc2Vyc1sgYXJnc1sxXSBdO1xuICAgICAgLy8gcGFyc2UgdGhlIHZhbHVlLCBpZiB0aGVyZSB3YXMgYSBwYXJzZXJcbiAgICAgIHNvcnRlciA9IHBhcnNlciA/IGZ1bmN0aW9uKCBlbGVtICkge1xuICAgICAgICByZXR1cm4gZWxlbSAmJiBwYXJzZXIoIGdldFZhbHVlKCBlbGVtICkgKTtcbiAgICAgIH0gOlxuICAgICAgLy8gb3RoZXJ3aXNlIGp1c3QgcmV0dXJuIHZhbHVlXG4gICAgICBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAgICAgcmV0dXJuIGVsZW0gJiYgZ2V0VmFsdWUoIGVsZW0gKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBzb3J0ZXI7XG4gICAgfVxuXG4gICAgLy8gZ2V0IGFuIGF0dHJpYnV0ZSBnZXR0ZXIsIG9yIGdldCB0ZXh0IG9mIHRoZSBxdWVyeVNlbGVjdG9yXG4gICAgZnVuY3Rpb24gZ2V0VmFsdWVHZXR0ZXIoIGF0dHIsIHF1ZXJ5ICkge1xuICAgICAgLy8gaWYgcXVlcnkgbG9va3MgbGlrZSBbZm9vLWJhcl0sIGdldCBhdHRyaWJ1dGVcbiAgICAgIGlmICggYXR0ciApIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGdldEF0dHJpYnV0ZSggZWxlbSApIHtcbiAgICAgICAgICByZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUoIGF0dHIgKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLy8gb3RoZXJ3aXNlLCBhc3N1bWUgaXRzIGEgcXVlcnlTZWxlY3RvciwgYW5kIGdldCBpdHMgdGV4dFxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGdldENoaWxkVGV4dCggZWxlbSApIHtcbiAgICAgICAgdmFyIGNoaWxkID0gZWxlbS5xdWVyeVNlbGVjdG9yKCBxdWVyeSApO1xuICAgICAgICByZXR1cm4gY2hpbGQgJiYgY2hpbGQudGV4dENvbnRlbnQ7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBtdW5nZVNvcnRlcjtcbiAgfSkoKTtcblxuICAvLyBwYXJzZXJzIHVzZWQgaW4gZ2V0U29ydERhdGEgc2hvcnRjdXQgc3RyaW5nc1xuICBJc290b3BlLnNvcnREYXRhUGFyc2VycyA9IHtcbiAgICAncGFyc2VJbnQnOiBmdW5jdGlvbiggdmFsICkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KCB2YWwsIDEwICk7XG4gICAgfSxcbiAgICAncGFyc2VGbG9hdCc6IGZ1bmN0aW9uKCB2YWwgKSB7XG4gICAgICByZXR1cm4gcGFyc2VGbG9hdCggdmFsICk7XG4gICAgfVxuICB9O1xuXG4gIC8vIC0tLS0tIHNvcnQgbWV0aG9kIC0tLS0tIC8vXG5cbiAgLy8gc29ydCBmaWx0ZXJlZEl0ZW0gb3JkZXJcbiAgcHJvdG8uX3NvcnQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc29ydEJ5T3B0ID0gdGhpcy5vcHRpb25zLnNvcnRCeTtcbiAgICBpZiAoICFzb3J0QnlPcHQgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGNvbmNhdCBhbGwgc29ydEJ5IGFuZCBzb3J0SGlzdG9yeVxuICAgIHZhciBzb3J0QnlzID0gW10uY29uY2F0LmFwcGx5KCBzb3J0QnlPcHQsIHRoaXMuc29ydEhpc3RvcnkgKTtcbiAgICAvLyBzb3J0IG1hZ2ljXG4gICAgdmFyIGl0ZW1Tb3J0ZXIgPSBnZXRJdGVtU29ydGVyKCBzb3J0QnlzLCB0aGlzLm9wdGlvbnMuc29ydEFzY2VuZGluZyApO1xuICAgIHRoaXMuZmlsdGVyZWRJdGVtcy5zb3J0KCBpdGVtU29ydGVyICk7XG4gICAgLy8ga2VlcCB0cmFjayBvZiBzb3J0QnkgSGlzdG9yeVxuICAgIGlmICggc29ydEJ5T3B0ICE9IHRoaXMuc29ydEhpc3RvcnlbMF0gKSB7XG4gICAgICAvLyBhZGQgdG8gZnJvbnQsIG9sZGVzdCBnb2VzIGluIGxhc3RcbiAgICAgIHRoaXMuc29ydEhpc3RvcnkudW5zaGlmdCggc29ydEJ5T3B0ICk7XG4gICAgfVxuICB9O1xuXG4gIC8vIHJldHVybnMgYSBmdW5jdGlvbiB1c2VkIGZvciBzb3J0aW5nXG4gIGZ1bmN0aW9uIGdldEl0ZW1Tb3J0ZXIoIHNvcnRCeXMsIHNvcnRBc2MgKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHNvcnRlciggaXRlbUEsIGl0ZW1CICkge1xuICAgICAgLy8gY3ljbGUgdGhyb3VnaCBhbGwgc29ydEtleXNcbiAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IHNvcnRCeXMubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgIHZhciBzb3J0QnkgPSBzb3J0QnlzW2ldO1xuICAgICAgICB2YXIgYSA9IGl0ZW1BLnNvcnREYXRhWyBzb3J0QnkgXTtcbiAgICAgICAgdmFyIGIgPSBpdGVtQi5zb3J0RGF0YVsgc29ydEJ5IF07XG4gICAgICAgIGlmICggYSA+IGIgfHwgYSA8IGIgKSB7XG4gICAgICAgICAgLy8gaWYgc29ydEFzYyBpcyBhbiBvYmplY3QsIHVzZSB0aGUgdmFsdWUgZ2l2ZW4gdGhlIHNvcnRCeSBrZXlcbiAgICAgICAgICB2YXIgaXNBc2NlbmRpbmcgPSBzb3J0QXNjWyBzb3J0QnkgXSAhPT0gdW5kZWZpbmVkID8gc29ydEFzY1sgc29ydEJ5IF0gOiBzb3J0QXNjO1xuICAgICAgICAgIHZhciBkaXJlY3Rpb24gPSBpc0FzY2VuZGluZyA/IDEgOiAtMTtcbiAgICAgICAgICByZXR1cm4gKCBhID4gYiA/IDEgOiAtMSApICogZGlyZWN0aW9uO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9O1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWV0aG9kcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4gIC8vIGdldCBsYXlvdXQgbW9kZVxuICBwcm90by5fbW9kZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsYXlvdXRNb2RlID0gdGhpcy5vcHRpb25zLmxheW91dE1vZGU7XG4gICAgdmFyIG1vZGUgPSB0aGlzLm1vZGVzWyBsYXlvdXRNb2RlIF07XG4gICAgaWYgKCAhbW9kZSApIHtcbiAgICAgIC8vIFRPRE8gY29uc29sZS5lcnJvclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCAnTm8gbGF5b3V0IG1vZGU6ICcgKyBsYXlvdXRNb2RlICk7XG4gICAgfVxuICAgIC8vIEhBQ0sgc3luYyBtb2RlJ3Mgb3B0aW9uc1xuICAgIC8vIGFueSBvcHRpb25zIHNldCBhZnRlciBpbml0IGZvciBsYXlvdXQgbW9kZSBuZWVkIHRvIGJlIHN5bmNlZFxuICAgIG1vZGUub3B0aW9ucyA9IHRoaXMub3B0aW9uc1sgbGF5b3V0TW9kZSBdO1xuICAgIHJldHVybiBtb2RlO1xuICB9O1xuXG4gIHByb3RvLl9yZXNldExheW91dCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIHRyaWdnZXIgb3JpZ2luYWwgcmVzZXQgbGF5b3V0XG4gICAgT3V0bGF5ZXIucHJvdG90eXBlLl9yZXNldExheW91dC5jYWxsKCB0aGlzICk7XG4gICAgdGhpcy5fbW9kZSgpLl9yZXNldExheW91dCgpO1xuICB9O1xuXG4gIHByb3RvLl9nZXRJdGVtTGF5b3V0UG9zaXRpb24gPSBmdW5jdGlvbiggaXRlbSAgKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGUoKS5fZ2V0SXRlbUxheW91dFBvc2l0aW9uKCBpdGVtICk7XG4gIH07XG5cbiAgcHJvdG8uX21hbmFnZVN0YW1wID0gZnVuY3Rpb24oIHN0YW1wICkge1xuICAgIHRoaXMuX21vZGUoKS5fbWFuYWdlU3RhbXAoIHN0YW1wICk7XG4gIH07XG5cbiAgcHJvdG8uX2dldENvbnRhaW5lclNpemUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZSgpLl9nZXRDb250YWluZXJTaXplKCk7XG4gIH07XG5cbiAgcHJvdG8ubmVlZHNSZXNpemVMYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZSgpLm5lZWRzUmVzaXplTGF5b3V0KCk7XG4gIH07XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYWRkaW5nICYgcmVtb3ZpbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICAvLyBIRUFEUyBVUCBvdmVyd3JpdGVzIGRlZmF1bHQgT3V0bGF5ZXIgYXBwZW5kZWRcbiAgcHJvdG8uYXBwZW5kZWQgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gICAgdmFyIGl0ZW1zID0gdGhpcy5hZGRJdGVtcyggZWxlbXMgKTtcbiAgICBpZiAoICFpdGVtcy5sZW5ndGggKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGZpbHRlciwgbGF5b3V0LCByZXZlYWwgbmV3IGl0ZW1zXG4gICAgdmFyIGZpbHRlcmVkSXRlbXMgPSB0aGlzLl9maWx0ZXJSZXZlYWxBZGRlZCggaXRlbXMgKTtcbiAgICAvLyBhZGQgdG8gZmlsdGVyZWRJdGVtc1xuICAgIHRoaXMuZmlsdGVyZWRJdGVtcyA9IHRoaXMuZmlsdGVyZWRJdGVtcy5jb25jYXQoIGZpbHRlcmVkSXRlbXMgKTtcbiAgfTtcblxuICAvLyBIRUFEUyBVUCBvdmVyd3JpdGVzIGRlZmF1bHQgT3V0bGF5ZXIgcHJlcGVuZGVkXG4gIHByb3RvLnByZXBlbmRlZCA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgICB2YXIgaXRlbXMgPSB0aGlzLl9pdGVtaXplKCBlbGVtcyApO1xuICAgIGlmICggIWl0ZW1zLmxlbmd0aCApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gc3RhcnQgbmV3IGxheW91dFxuICAgIHRoaXMuX3Jlc2V0TGF5b3V0KCk7XG4gICAgdGhpcy5fbWFuYWdlU3RhbXBzKCk7XG4gICAgLy8gZmlsdGVyLCBsYXlvdXQsIHJldmVhbCBuZXcgaXRlbXNcbiAgICB2YXIgZmlsdGVyZWRJdGVtcyA9IHRoaXMuX2ZpbHRlclJldmVhbEFkZGVkKCBpdGVtcyApO1xuICAgIC8vIGxheW91dCBwcmV2aW91cyBpdGVtc1xuICAgIHRoaXMubGF5b3V0SXRlbXMoIHRoaXMuZmlsdGVyZWRJdGVtcyApO1xuICAgIC8vIGFkZCB0byBpdGVtcyBhbmQgZmlsdGVyZWRJdGVtc1xuICAgIHRoaXMuZmlsdGVyZWRJdGVtcyA9IGZpbHRlcmVkSXRlbXMuY29uY2F0KCB0aGlzLmZpbHRlcmVkSXRlbXMgKTtcbiAgICB0aGlzLml0ZW1zID0gaXRlbXMuY29uY2F0KCB0aGlzLml0ZW1zICk7XG4gIH07XG5cbiAgcHJvdG8uX2ZpbHRlclJldmVhbEFkZGVkID0gZnVuY3Rpb24oIGl0ZW1zICkge1xuICAgIHZhciBmaWx0ZXJlZCA9IHRoaXMuX2ZpbHRlciggaXRlbXMgKTtcbiAgICB0aGlzLmhpZGUoIGZpbHRlcmVkLm5lZWRIaWRlICk7XG4gICAgLy8gcmV2ZWFsIGFsbCBuZXcgaXRlbXNcbiAgICB0aGlzLnJldmVhbCggZmlsdGVyZWQubWF0Y2hlcyApO1xuICAgIC8vIGxheW91dCBuZXcgaXRlbXMsIG5vIHRyYW5zaXRpb25cbiAgICB0aGlzLmxheW91dEl0ZW1zKCBmaWx0ZXJlZC5tYXRjaGVzLCB0cnVlICk7XG4gICAgcmV0dXJuIGZpbHRlcmVkLm1hdGNoZXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZpbHRlciwgc29ydCwgYW5kIGxheW91dCBuZXdseS1hcHBlbmRlZCBpdGVtIGVsZW1lbnRzXG4gICAqIEBwYXJhbSB7QXJyYXkgb3IgTm9kZUxpc3Qgb3IgRWxlbWVudH0gZWxlbXNcbiAgICovXG4gIHByb3RvLmluc2VydCA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgICB2YXIgaXRlbXMgPSB0aGlzLmFkZEl0ZW1zKCBlbGVtcyApO1xuICAgIGlmICggIWl0ZW1zLmxlbmd0aCApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gYXBwZW5kIGl0ZW0gZWxlbWVudHNcbiAgICB2YXIgaSwgaXRlbTtcbiAgICB2YXIgbGVuID0gaXRlbXMubGVuZ3RoO1xuICAgIGZvciAoIGk9MDsgaSA8IGxlbjsgaSsrICkge1xuICAgICAgaXRlbSA9IGl0ZW1zW2ldO1xuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKCBpdGVtLmVsZW1lbnQgKTtcbiAgICB9XG4gICAgLy8gZmlsdGVyIG5ldyBzdHVmZlxuICAgIHZhciBmaWx0ZXJlZEluc2VydEl0ZW1zID0gdGhpcy5fZmlsdGVyKCBpdGVtcyApLm1hdGNoZXM7XG4gICAgLy8gc2V0IGZsYWdcbiAgICBmb3IgKCBpPTA7IGkgPCBsZW47IGkrKyApIHtcbiAgICAgIGl0ZW1zW2ldLmlzTGF5b3V0SW5zdGFudCA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuYXJyYW5nZSgpO1xuICAgIC8vIHJlc2V0IGZsYWdcbiAgICBmb3IgKCBpPTA7IGkgPCBsZW47IGkrKyApIHtcbiAgICAgIGRlbGV0ZSBpdGVtc1tpXS5pc0xheW91dEluc3RhbnQ7XG4gICAgfVxuICAgIHRoaXMucmV2ZWFsKCBmaWx0ZXJlZEluc2VydEl0ZW1zICk7XG4gIH07XG5cbiAgdmFyIF9yZW1vdmUgPSBwcm90by5yZW1vdmU7XG4gIHByb3RvLnJlbW92ZSA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgICBlbGVtcyA9IHV0aWxzLm1ha2VBcnJheSggZWxlbXMgKTtcbiAgICB2YXIgcmVtb3ZlSXRlbXMgPSB0aGlzLmdldEl0ZW1zKCBlbGVtcyApO1xuICAgIC8vIGRvIHJlZ3VsYXIgdGhpbmdcbiAgICBfcmVtb3ZlLmNhbGwoIHRoaXMsIGVsZW1zICk7XG4gICAgLy8gYmFpbCBpZiBubyBpdGVtcyB0byByZW1vdmVcbiAgICB2YXIgbGVuID0gcmVtb3ZlSXRlbXMgJiYgcmVtb3ZlSXRlbXMubGVuZ3RoO1xuICAgIC8vIHJlbW92ZSBlbGVtcyBmcm9tIGZpbHRlcmVkSXRlbXNcbiAgICBmb3IgKCB2YXIgaT0wOyBsZW4gJiYgaSA8IGxlbjsgaSsrICkge1xuICAgICAgdmFyIGl0ZW0gPSByZW1vdmVJdGVtc1tpXTtcbiAgICAgIC8vIHJlbW92ZSBpdGVtIGZyb20gY29sbGVjdGlvblxuICAgICAgdXRpbHMucmVtb3ZlRnJvbSggdGhpcy5maWx0ZXJlZEl0ZW1zLCBpdGVtICk7XG4gICAgfVxuICB9O1xuXG4gIHByb3RvLnNodWZmbGUgPSBmdW5jdGlvbigpIHtcbiAgICAvLyB1cGRhdGUgcmFuZG9tIHNvcnREYXRhXG4gICAgZm9yICggdmFyIGk9MDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKysgKSB7XG4gICAgICB2YXIgaXRlbSA9IHRoaXMuaXRlbXNbaV07XG4gICAgICBpdGVtLnNvcnREYXRhLnJhbmRvbSA9IE1hdGgucmFuZG9tKCk7XG4gICAgfVxuICAgIHRoaXMub3B0aW9ucy5zb3J0QnkgPSAncmFuZG9tJztcbiAgICB0aGlzLl9zb3J0KCk7XG4gICAgdGhpcy5fbGF5b3V0KCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIHRyaWdnZXIgZm4gd2l0aG91dCB0cmFuc2l0aW9uXG4gICAqIGtpbmQgb2YgaGFja3kgdG8gaGF2ZSB0aGlzIGluIHRoZSBmaXJzdCBwbGFjZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICAgKiBAcGFyYW0ge0FycmF5fSBhcmdzXG4gICAqIEByZXR1cm5zIHJldFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJvdG8uX25vVHJhbnNpdGlvbiA9IGZ1bmN0aW9uKCBmbiwgYXJncyApIHtcbiAgICAvLyBzYXZlIHRyYW5zaXRpb25EdXJhdGlvbiBiZWZvcmUgZGlzYWJsaW5nXG4gICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IHRoaXMub3B0aW9ucy50cmFuc2l0aW9uRHVyYXRpb247XG4gICAgLy8gZGlzYWJsZSB0cmFuc2l0aW9uXG4gICAgdGhpcy5vcHRpb25zLnRyYW5zaXRpb25EdXJhdGlvbiA9IDA7XG4gICAgLy8gZG8gaXRcbiAgICB2YXIgcmV0dXJuVmFsdWUgPSBmbi5hcHBseSggdGhpcywgYXJncyApO1xuICAgIC8vIHJlLWVuYWJsZSB0cmFuc2l0aW9uIGZvciByZXZlYWxcbiAgICB0aGlzLm9wdGlvbnMudHJhbnNpdGlvbkR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uO1xuICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgfTtcblxuICAvLyAtLS0tLSBoZWxwZXIgbWV0aG9kcyAtLS0tLSAvL1xuXG4gIC8qKlxuICAgKiBnZXR0ZXIgbWV0aG9kIGZvciBnZXR0aW5nIGZpbHRlcmVkIGl0ZW0gZWxlbWVudHNcbiAgICogQHJldHVybnMge0FycmF5fSBlbGVtcyAtIGNvbGxlY3Rpb24gb2YgaXRlbSBlbGVtZW50c1xuICAgKi9cbiAgcHJvdG8uZ2V0RmlsdGVyZWRJdGVtRWxlbWVudHMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJlZEl0ZW1zLm1hcCggZnVuY3Rpb24oIGl0ZW0gKSB7XG4gICAgICByZXR1cm4gaXRlbS5lbGVtZW50O1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIC0tLS0tICAtLS0tLSAvL1xuXG4gIHJldHVybiBJc290b3BlO1xuXG59KSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9pc290b3BlLWxheW91dC9qcy9pc290b3BlLmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyohXG4gKiBnZXRTaXplIHYyLjAuMlxuICogbWVhc3VyZSBzaXplIG9mIGVsZW1lbnRzXG4gKiBNSVQgbGljZW5zZVxuICovXG5cbi8qanNoaW50IGJyb3dzZXI6IHRydWUsIHN0cmljdDogdHJ1ZSwgdW5kZWY6IHRydWUsIHVudXNlZDogdHJ1ZSAqL1xuLypnbG9iYWwgZGVmaW5lOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSwgY29uc29sZTogZmFsc2UgKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZhY3RvcnkoKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93LmdldFNpemUgPSBmYWN0b3J5KCk7XG4gIH1cblxufSkoIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSgpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaGVscGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBnZXQgYSBudW1iZXIgZnJvbSBhIHN0cmluZywgbm90IGEgcGVyY2VudGFnZVxuZnVuY3Rpb24gZ2V0U3R5bGVTaXplKCB2YWx1ZSApIHtcbiAgdmFyIG51bSA9IHBhcnNlRmxvYXQoIHZhbHVlICk7XG4gIC8vIG5vdCBhIHBlcmNlbnQgbGlrZSAnMTAwJScsIGFuZCBhIG51bWJlclxuICB2YXIgaXNWYWxpZCA9IHZhbHVlLmluZGV4T2YoJyUnKSA9PSAtMSAmJiAhaXNOYU4oIG51bSApO1xuICByZXR1cm4gaXNWYWxpZCAmJiBudW07XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG52YXIgbG9nRXJyb3IgPSB0eXBlb2YgY29uc29sZSA9PSAndW5kZWZpbmVkJyA/IG5vb3AgOlxuICBmdW5jdGlvbiggbWVzc2FnZSApIHtcbiAgICBjb25zb2xlLmVycm9yKCBtZXNzYWdlICk7XG4gIH07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1lYXN1cmVtZW50cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG52YXIgbWVhc3VyZW1lbnRzID0gW1xuICAncGFkZGluZ0xlZnQnLFxuICAncGFkZGluZ1JpZ2h0JyxcbiAgJ3BhZGRpbmdUb3AnLFxuICAncGFkZGluZ0JvdHRvbScsXG4gICdtYXJnaW5MZWZ0JyxcbiAgJ21hcmdpblJpZ2h0JyxcbiAgJ21hcmdpblRvcCcsXG4gICdtYXJnaW5Cb3R0b20nLFxuICAnYm9yZGVyTGVmdFdpZHRoJyxcbiAgJ2JvcmRlclJpZ2h0V2lkdGgnLFxuICAnYm9yZGVyVG9wV2lkdGgnLFxuICAnYm9yZGVyQm90dG9tV2lkdGgnXG5dO1xuXG52YXIgbWVhc3VyZW1lbnRzTGVuZ3RoID0gbWVhc3VyZW1lbnRzLmxlbmd0aDtcblxuZnVuY3Rpb24gZ2V0WmVyb1NpemUoKSB7XG4gIHZhciBzaXplID0ge1xuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICBpbm5lcldpZHRoOiAwLFxuICAgIGlubmVySGVpZ2h0OiAwLFxuICAgIG91dGVyV2lkdGg6IDAsXG4gICAgb3V0ZXJIZWlnaHQ6IDBcbiAgfTtcbiAgZm9yICggdmFyIGk9MDsgaSA8IG1lYXN1cmVtZW50c0xlbmd0aDsgaSsrICkge1xuICAgIHZhciBtZWFzdXJlbWVudCA9IG1lYXN1cmVtZW50c1tpXTtcbiAgICBzaXplWyBtZWFzdXJlbWVudCBdID0gMDtcbiAgfVxuICByZXR1cm4gc2l6ZTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2V0U3R5bGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLyoqXG4gKiBnZXRTdHlsZSwgZ2V0IHN0eWxlIG9mIGVsZW1lbnQsIGNoZWNrIGZvciBGaXJlZm94IGJ1Z1xuICogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTQ4Mzk3XG4gKi9cbmZ1bmN0aW9uIGdldFN0eWxlKCBlbGVtICkge1xuICB2YXIgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKCBlbGVtICk7XG4gIGlmICggIXN0eWxlICkge1xuICAgIGxvZ0Vycm9yKCAnU3R5bGUgcmV0dXJuZWQgJyArIHN0eWxlICtcbiAgICAgICcuIEFyZSB5b3UgcnVubmluZyB0aGlzIGNvZGUgaW4gYSBoaWRkZW4gaWZyYW1lIG9uIEZpcmVmb3g/ICcgK1xuICAgICAgJ1NlZSBodHRwOi8vYml0Lmx5L2dldHNpemVidWcxJyApO1xuICB9XG4gIHJldHVybiBzdHlsZTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gc2V0dXAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxudmFyIGlzU2V0dXAgPSBmYWxzZTtcblxudmFyIGlzQm94U2l6ZU91dGVyO1xuXG4vKipcbiAqIHNldHVwXG4gKiBjaGVjayBpc0JveFNpemVyT3V0ZXJcbiAqIGRvIG9uIGZpcnN0IGdldFNpemUoKSByYXRoZXIgdGhhbiBvbiBwYWdlIGxvYWQgZm9yIEZpcmVmb3ggYnVnXG4gKi9cbmZ1bmN0aW9uIHNldHVwKCkge1xuICAvLyBzZXR1cCBvbmNlXG4gIGlmICggaXNTZXR1cCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaXNTZXR1cCA9IHRydWU7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYm94IHNpemluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4gIC8qKlxuICAgKiBXZWJLaXQgbWVhc3VyZXMgdGhlIG91dGVyLXdpZHRoIG9uIHN0eWxlLndpZHRoIG9uIGJvcmRlci1ib3ggZWxlbXNcbiAgICogSUUgJiBGaXJlZm94PDI5IG1lYXN1cmVzIHRoZSBpbm5lci13aWR0aFxuICAgKi9cbiAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuc3R5bGUud2lkdGggPSAnMjAwcHgnO1xuICBkaXYuc3R5bGUucGFkZGluZyA9ICcxcHggMnB4IDNweCA0cHgnO1xuICBkaXYuc3R5bGUuYm9yZGVyU3R5bGUgPSAnc29saWQnO1xuICBkaXYuc3R5bGUuYm9yZGVyV2lkdGggPSAnMXB4IDJweCAzcHggNHB4JztcbiAgZGl2LnN0eWxlLmJveFNpemluZyA9ICdib3JkZXItYm94JztcblxuICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBib2R5LmFwcGVuZENoaWxkKCBkaXYgKTtcbiAgdmFyIHN0eWxlID0gZ2V0U3R5bGUoIGRpdiApO1xuXG4gIGdldFNpemUuaXNCb3hTaXplT3V0ZXIgPSBpc0JveFNpemVPdXRlciA9IGdldFN0eWxlU2l6ZSggc3R5bGUud2lkdGggKSA9PSAyMDA7XG4gIGJvZHkucmVtb3ZlQ2hpbGQoIGRpdiApO1xuXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdldFNpemUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuZnVuY3Rpb24gZ2V0U2l6ZSggZWxlbSApIHtcbiAgc2V0dXAoKTtcblxuICAvLyB1c2UgcXVlcnlTZWxldG9yIGlmIGVsZW0gaXMgc3RyaW5nXG4gIGlmICggdHlwZW9mIGVsZW0gPT0gJ3N0cmluZycgKSB7XG4gICAgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIGVsZW0gKTtcbiAgfVxuXG4gIC8vIGRvIG5vdCBwcm9jZWVkIG9uIG5vbi1vYmplY3RzXG4gIGlmICggIWVsZW0gfHwgdHlwZW9mIGVsZW0gIT0gJ29iamVjdCcgfHwgIWVsZW0ubm9kZVR5cGUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHN0eWxlID0gZ2V0U3R5bGUoIGVsZW0gKTtcblxuICAvLyBpZiBoaWRkZW4sIGV2ZXJ5dGhpbmcgaXMgMFxuICBpZiAoIHN0eWxlLmRpc3BsYXkgPT0gJ25vbmUnICkge1xuICAgIHJldHVybiBnZXRaZXJvU2l6ZSgpO1xuICB9XG5cbiAgdmFyIHNpemUgPSB7fTtcbiAgc2l6ZS53aWR0aCA9IGVsZW0ub2Zmc2V0V2lkdGg7XG4gIHNpemUuaGVpZ2h0ID0gZWxlbS5vZmZzZXRIZWlnaHQ7XG5cbiAgdmFyIGlzQm9yZGVyQm94ID0gc2l6ZS5pc0JvcmRlckJveCA9IHN0eWxlLmJveFNpemluZyA9PSAnYm9yZGVyLWJveCc7XG5cbiAgLy8gZ2V0IGFsbCBtZWFzdXJlbWVudHNcbiAgZm9yICggdmFyIGk9MDsgaSA8IG1lYXN1cmVtZW50c0xlbmd0aDsgaSsrICkge1xuICAgIHZhciBtZWFzdXJlbWVudCA9IG1lYXN1cmVtZW50c1tpXTtcbiAgICB2YXIgdmFsdWUgPSBzdHlsZVsgbWVhc3VyZW1lbnQgXTtcbiAgICB2YXIgbnVtID0gcGFyc2VGbG9hdCggdmFsdWUgKTtcbiAgICAvLyBhbnkgJ2F1dG8nLCAnbWVkaXVtJyB2YWx1ZSB3aWxsIGJlIDBcbiAgICBzaXplWyBtZWFzdXJlbWVudCBdID0gIWlzTmFOKCBudW0gKSA/IG51bSA6IDA7XG4gIH1cblxuICB2YXIgcGFkZGluZ1dpZHRoID0gc2l6ZS5wYWRkaW5nTGVmdCArIHNpemUucGFkZGluZ1JpZ2h0O1xuICB2YXIgcGFkZGluZ0hlaWdodCA9IHNpemUucGFkZGluZ1RvcCArIHNpemUucGFkZGluZ0JvdHRvbTtcbiAgdmFyIG1hcmdpbldpZHRoID0gc2l6ZS5tYXJnaW5MZWZ0ICsgc2l6ZS5tYXJnaW5SaWdodDtcbiAgdmFyIG1hcmdpbkhlaWdodCA9IHNpemUubWFyZ2luVG9wICsgc2l6ZS5tYXJnaW5Cb3R0b207XG4gIHZhciBib3JkZXJXaWR0aCA9IHNpemUuYm9yZGVyTGVmdFdpZHRoICsgc2l6ZS5ib3JkZXJSaWdodFdpZHRoO1xuICB2YXIgYm9yZGVySGVpZ2h0ID0gc2l6ZS5ib3JkZXJUb3BXaWR0aCArIHNpemUuYm9yZGVyQm90dG9tV2lkdGg7XG5cbiAgdmFyIGlzQm9yZGVyQm94U2l6ZU91dGVyID0gaXNCb3JkZXJCb3ggJiYgaXNCb3hTaXplT3V0ZXI7XG5cbiAgLy8gb3ZlcndyaXRlIHdpZHRoIGFuZCBoZWlnaHQgaWYgd2UgY2FuIGdldCBpdCBmcm9tIHN0eWxlXG4gIHZhciBzdHlsZVdpZHRoID0gZ2V0U3R5bGVTaXplKCBzdHlsZS53aWR0aCApO1xuICBpZiAoIHN0eWxlV2lkdGggIT09IGZhbHNlICkge1xuICAgIHNpemUud2lkdGggPSBzdHlsZVdpZHRoICtcbiAgICAgIC8vIGFkZCBwYWRkaW5nIGFuZCBib3JkZXIgdW5sZXNzIGl0J3MgYWxyZWFkeSBpbmNsdWRpbmcgaXRcbiAgICAgICggaXNCb3JkZXJCb3hTaXplT3V0ZXIgPyAwIDogcGFkZGluZ1dpZHRoICsgYm9yZGVyV2lkdGggKTtcbiAgfVxuXG4gIHZhciBzdHlsZUhlaWdodCA9IGdldFN0eWxlU2l6ZSggc3R5bGUuaGVpZ2h0ICk7XG4gIGlmICggc3R5bGVIZWlnaHQgIT09IGZhbHNlICkge1xuICAgIHNpemUuaGVpZ2h0ID0gc3R5bGVIZWlnaHQgK1xuICAgICAgLy8gYWRkIHBhZGRpbmcgYW5kIGJvcmRlciB1bmxlc3MgaXQncyBhbHJlYWR5IGluY2x1ZGluZyBpdFxuICAgICAgKCBpc0JvcmRlckJveFNpemVPdXRlciA/IDAgOiBwYWRkaW5nSGVpZ2h0ICsgYm9yZGVySGVpZ2h0ICk7XG4gIH1cblxuICBzaXplLmlubmVyV2lkdGggPSBzaXplLndpZHRoIC0gKCBwYWRkaW5nV2lkdGggKyBib3JkZXJXaWR0aCApO1xuICBzaXplLmlubmVySGVpZ2h0ID0gc2l6ZS5oZWlnaHQgLSAoIHBhZGRpbmdIZWlnaHQgKyBib3JkZXJIZWlnaHQgKTtcblxuICBzaXplLm91dGVyV2lkdGggPSBzaXplLndpZHRoICsgbWFyZ2luV2lkdGg7XG4gIHNpemUub3V0ZXJIZWlnaHQgPSBzaXplLmhlaWdodCArIG1hcmdpbkhlaWdodDtcblxuICByZXR1cm4gc2l6ZTtcbn1cblxucmV0dXJuIGdldFNpemU7XG5cbn0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZ2V0LXNpemUvZ2V0LXNpemUuanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIG1hdGNoZXNTZWxlY3RvciB2Mi4wLjFcbiAqIG1hdGNoZXNTZWxlY3RvciggZWxlbWVudCwgJy5zZWxlY3RvcicgKVxuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCBzdHJpY3Q6IHRydWUsIHVuZGVmOiB0cnVlLCB1bnVzZWQ6IHRydWUgKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvKmdsb2JhbCBkZWZpbmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG4gICd1c2Ugc3RyaWN0JztcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBmYWN0b3J5ICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5tYXRjaGVzU2VsZWN0b3IgPSBmYWN0b3J5KCk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIG1hdGNoZXNNZXRob2QgPSAoIGZ1bmN0aW9uKCkge1xuICAgIHZhciBFbGVtUHJvdG8gPSBFbGVtZW50LnByb3RvdHlwZTtcbiAgICAvLyBjaGVjayBmb3IgdGhlIHN0YW5kYXJkIG1ldGhvZCBuYW1lIGZpcnN0XG4gICAgaWYgKCBFbGVtUHJvdG8ubWF0Y2hlcyApIHtcbiAgICAgIHJldHVybiAnbWF0Y2hlcyc7XG4gICAgfVxuICAgIC8vIGNoZWNrIHVuLXByZWZpeGVkXG4gICAgaWYgKCBFbGVtUHJvdG8ubWF0Y2hlc1NlbGVjdG9yICkge1xuICAgICAgcmV0dXJuICdtYXRjaGVzU2VsZWN0b3InO1xuICAgIH1cbiAgICAvLyBjaGVjayB2ZW5kb3IgcHJlZml4ZXNcbiAgICB2YXIgcHJlZml4ZXMgPSBbICd3ZWJraXQnLCAnbW96JywgJ21zJywgJ28nIF07XG5cbiAgICBmb3IgKCB2YXIgaT0wOyBpIDwgcHJlZml4ZXMubGVuZ3RoOyBpKysgKSB7XG4gICAgICB2YXIgcHJlZml4ID0gcHJlZml4ZXNbaV07XG4gICAgICB2YXIgbWV0aG9kID0gcHJlZml4ICsgJ01hdGNoZXNTZWxlY3Rvcic7XG4gICAgICBpZiAoIEVsZW1Qcm90b1sgbWV0aG9kIF0gKSB7XG4gICAgICAgIHJldHVybiBtZXRob2Q7XG4gICAgICB9XG4gICAgfVxuICB9KSgpO1xuXG4gIHJldHVybiBmdW5jdGlvbiBtYXRjaGVzU2VsZWN0b3IoIGVsZW0sIHNlbGVjdG9yICkge1xuICAgIHJldHVybiBlbGVtWyBtYXRjaGVzTWV0aG9kIF0oIHNlbGVjdG9yICk7XG4gIH07XG5cbn0pKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Rlc2FuZHJvLW1hdGNoZXMtc2VsZWN0b3IvbWF0Y2hlcy1zZWxlY3Rvci5qc1xuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogRml6enkgVUkgdXRpbHMgdjIuMC4yXG4gKiBNSVQgbGljZW5zZVxuICovXG5cbi8qanNoaW50IGJyb3dzZXI6IHRydWUsIHVuZGVmOiB0cnVlLCB1bnVzZWQ6IHRydWUsIHN0cmljdDogdHJ1ZSAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKmpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgcmVxdWlyZSAqL1xuXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAnZGVzYW5kcm8tbWF0Y2hlcy1zZWxlY3Rvci9tYXRjaGVzLXNlbGVjdG9yJ1xuICAgIF0sIGZ1bmN0aW9uKCBtYXRjaGVzU2VsZWN0b3IgKSB7XG4gICAgICByZXR1cm4gZmFjdG9yeSggd2luZG93LCBtYXRjaGVzU2VsZWN0b3IgKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHJlcXVpcmUoJ2Rlc2FuZHJvLW1hdGNoZXMtc2VsZWN0b3InKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuZml6enlVSVV0aWxzID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHdpbmRvdy5tYXRjaGVzU2VsZWN0b3JcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBtYXRjaGVzU2VsZWN0b3IgKSB7XG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0ge307XG5cbi8vIC0tLS0tIGV4dGVuZCAtLS0tLSAvL1xuXG4vLyBleHRlbmRzIG9iamVjdHNcbnV0aWxzLmV4dGVuZCA9IGZ1bmN0aW9uKCBhLCBiICkge1xuICBmb3IgKCB2YXIgcHJvcCBpbiBiICkge1xuICAgIGFbIHByb3AgXSA9IGJbIHByb3AgXTtcbiAgfVxuICByZXR1cm4gYTtcbn07XG5cbi8vIC0tLS0tIG1vZHVsbyAtLS0tLSAvL1xuXG51dGlscy5tb2R1bG8gPSBmdW5jdGlvbiggbnVtLCBkaXYgKSB7XG4gIHJldHVybiAoICggbnVtICUgZGl2ICkgKyBkaXYgKSAlIGRpdjtcbn07XG5cbi8vIC0tLS0tIG1ha2VBcnJheSAtLS0tLSAvL1xuXG4vLyB0dXJuIGVsZW1lbnQgb3Igbm9kZUxpc3QgaW50byBhbiBhcnJheVxudXRpbHMubWFrZUFycmF5ID0gZnVuY3Rpb24oIG9iaiApIHtcbiAgdmFyIGFyeSA9IFtdO1xuICBpZiAoIEFycmF5LmlzQXJyYXkoIG9iaiApICkge1xuICAgIC8vIHVzZSBvYmplY3QgaWYgYWxyZWFkeSBhbiBhcnJheVxuICAgIGFyeSA9IG9iajtcbiAgfSBlbHNlIGlmICggb2JqICYmIHR5cGVvZiBvYmoubGVuZ3RoID09ICdudW1iZXInICkge1xuICAgIC8vIGNvbnZlcnQgbm9kZUxpc3QgdG8gYXJyYXlcbiAgICBmb3IgKCB2YXIgaT0wOyBpIDwgb2JqLmxlbmd0aDsgaSsrICkge1xuICAgICAgYXJ5LnB1c2goIG9ialtpXSApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBhcnJheSBvZiBzaW5nbGUgaW5kZXhcbiAgICBhcnkucHVzaCggb2JqICk7XG4gIH1cbiAgcmV0dXJuIGFyeTtcbn07XG5cbi8vIC0tLS0tIHJlbW92ZUZyb20gLS0tLS0gLy9cblxudXRpbHMucmVtb3ZlRnJvbSA9IGZ1bmN0aW9uKCBhcnksIG9iaiApIHtcbiAgdmFyIGluZGV4ID0gYXJ5LmluZGV4T2YoIG9iaiApO1xuICBpZiAoIGluZGV4ICE9IC0xICkge1xuICAgIGFyeS5zcGxpY2UoIGluZGV4LCAxICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tIGdldFBhcmVudCAtLS0tLSAvL1xuXG51dGlscy5nZXRQYXJlbnQgPSBmdW5jdGlvbiggZWxlbSwgc2VsZWN0b3IgKSB7XG4gIHdoaWxlICggZWxlbSAhPSBkb2N1bWVudC5ib2R5ICkge1xuICAgIGVsZW0gPSBlbGVtLnBhcmVudE5vZGU7XG4gICAgaWYgKCBtYXRjaGVzU2VsZWN0b3IoIGVsZW0sIHNlbGVjdG9yICkgKSB7XG4gICAgICByZXR1cm4gZWxlbTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIC0tLS0tIGdldFF1ZXJ5RWxlbWVudCAtLS0tLSAvL1xuXG4vLyB1c2UgZWxlbWVudCBhcyBzZWxlY3RvciBzdHJpbmdcbnV0aWxzLmdldFF1ZXJ5RWxlbWVudCA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICBpZiAoIHR5cGVvZiBlbGVtID09ICdzdHJpbmcnICkge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBlbGVtICk7XG4gIH1cbiAgcmV0dXJuIGVsZW07XG59O1xuXG4vLyAtLS0tLSBoYW5kbGVFdmVudCAtLS0tLSAvL1xuXG4vLyBlbmFibGUgLm9udHlwZSB0byB0cmlnZ2VyIGZyb20gLmFkZEV2ZW50TGlzdGVuZXIoIGVsZW0sICd0eXBlJyApXG51dGlscy5oYW5kbGVFdmVudCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgdmFyIG1ldGhvZCA9ICdvbicgKyBldmVudC50eXBlO1xuICBpZiAoIHRoaXNbIG1ldGhvZCBdICkge1xuICAgIHRoaXNbIG1ldGhvZCBdKCBldmVudCApO1xuICB9XG59O1xuXG4vLyAtLS0tLSBmaWx0ZXJGaW5kRWxlbWVudHMgLS0tLS0gLy9cblxudXRpbHMuZmlsdGVyRmluZEVsZW1lbnRzID0gZnVuY3Rpb24oIGVsZW1zLCBzZWxlY3RvciApIHtcbiAgLy8gbWFrZSBhcnJheSBvZiBlbGVtc1xuICBlbGVtcyA9IHV0aWxzLm1ha2VBcnJheSggZWxlbXMgKTtcbiAgdmFyIGZmRWxlbXMgPSBbXTtcblxuICBlbGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAvLyBjaGVjayB0aGF0IGVsZW0gaXMgYW4gYWN0dWFsIGVsZW1lbnRcbiAgICBpZiAoICEoIGVsZW0gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCApICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBhZGQgZWxlbSBpZiBubyBzZWxlY3RvclxuICAgIGlmICggIXNlbGVjdG9yICkge1xuICAgICAgZmZFbGVtcy5wdXNoKCBlbGVtICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGZpbHRlciAmIGZpbmQgaXRlbXMgaWYgd2UgaGF2ZSBhIHNlbGVjdG9yXG4gICAgLy8gZmlsdGVyXG4gICAgaWYgKCBtYXRjaGVzU2VsZWN0b3IoIGVsZW0sIHNlbGVjdG9yICkgKSB7XG4gICAgICBmZkVsZW1zLnB1c2goIGVsZW0gKTtcbiAgICB9XG4gICAgLy8gZmluZCBjaGlsZHJlblxuICAgIHZhciBjaGlsZEVsZW1zID0gZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCBzZWxlY3RvciApO1xuICAgIC8vIGNvbmNhdCBjaGlsZEVsZW1zIHRvIGZpbHRlckZvdW5kIGFycmF5XG4gICAgZm9yICggdmFyIGk9MDsgaSA8IGNoaWxkRWxlbXMubGVuZ3RoOyBpKysgKSB7XG4gICAgICBmZkVsZW1zLnB1c2goIGNoaWxkRWxlbXNbaV0gKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBmZkVsZW1zO1xufTtcblxuLy8gLS0tLS0gZGVib3VuY2VNZXRob2QgLS0tLS0gLy9cblxudXRpbHMuZGVib3VuY2VNZXRob2QgPSBmdW5jdGlvbiggX2NsYXNzLCBtZXRob2ROYW1lLCB0aHJlc2hvbGQgKSB7XG4gIC8vIG9yaWdpbmFsIG1ldGhvZFxuICB2YXIgbWV0aG9kID0gX2NsYXNzLnByb3RvdHlwZVsgbWV0aG9kTmFtZSBdO1xuICB2YXIgdGltZW91dE5hbWUgPSBtZXRob2ROYW1lICsgJ1RpbWVvdXQnO1xuXG4gIF9jbGFzcy5wcm90b3R5cGVbIG1ldGhvZE5hbWUgXSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB0aW1lb3V0ID0gdGhpc1sgdGltZW91dE5hbWUgXTtcbiAgICBpZiAoIHRpbWVvdXQgKSB7XG4gICAgICBjbGVhclRpbWVvdXQoIHRpbWVvdXQgKTtcbiAgICB9XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHRoaXNbIHRpbWVvdXROYW1lIF0gPSBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICAgIG1ldGhvZC5hcHBseSggX3RoaXMsIGFyZ3MgKTtcbiAgICAgIGRlbGV0ZSBfdGhpc1sgdGltZW91dE5hbWUgXTtcbiAgICB9LCB0aHJlc2hvbGQgfHwgMTAwICk7XG4gIH07XG59O1xuXG4vLyAtLS0tLSBkb2NSZWFkeSAtLS0tLSAvL1xuXG51dGlscy5kb2NSZWFkeSA9IGZ1bmN0aW9uKCBjYWxsYmFjayApIHtcbiAgdmFyIHJlYWR5U3RhdGUgPSBkb2N1bWVudC5yZWFkeVN0YXRlO1xuICBpZiAoIHJlYWR5U3RhdGUgPT0gJ2NvbXBsZXRlJyB8fCByZWFkeVN0YXRlID09ICdpbnRlcmFjdGl2ZScgKSB7XG4gICAgY2FsbGJhY2soKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnRE9NQ29udGVudExvYWRlZCcsIGNhbGxiYWNrICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tIGh0bWxJbml0IC0tLS0tIC8vXG5cbi8vIGh0dHA6Ly9qYW1lc3JvYmVydHMubmFtZS9ibG9nLzIwMTAvMDIvMjIvc3RyaW5nLWZ1bmN0aW9ucy1mb3ItamF2YXNjcmlwdC10cmltLXRvLWNhbWVsLWNhc2UtdG8tZGFzaGVkLWFuZC10by11bmRlcnNjb3JlL1xudXRpbHMudG9EYXNoZWQgPSBmdW5jdGlvbiggc3RyICkge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoIC8oLikoW0EtWl0pL2csIGZ1bmN0aW9uKCBtYXRjaCwgJDEsICQyICkge1xuICAgIHJldHVybiAkMSArICctJyArICQyO1xuICB9KS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIGNvbnNvbGUgPSB3aW5kb3cuY29uc29sZTtcbi8qKlxuICogYWxsb3cgdXNlciB0byBpbml0aWFsaXplIGNsYXNzZXMgdmlhIFtkYXRhLW5hbWVzcGFjZV0gb3IgLmpzLW5hbWVzcGFjZSBjbGFzc1xuICogaHRtbEluaXQoIFdpZGdldCwgJ3dpZGdldE5hbWUnIClcbiAqIG9wdGlvbnMgYXJlIHBhcnNlZCBmcm9tIGRhdGEtbmFtZXNwYWNlLW9wdGlvbnNcbiAqL1xudXRpbHMuaHRtbEluaXQgPSBmdW5jdGlvbiggV2lkZ2V0Q2xhc3MsIG5hbWVzcGFjZSApIHtcbiAgdXRpbHMuZG9jUmVhZHkoIGZ1bmN0aW9uKCkge1xuICAgIHZhciBkYXNoZWROYW1lc3BhY2UgPSB1dGlscy50b0Rhc2hlZCggbmFtZXNwYWNlICk7XG4gICAgdmFyIGRhdGFBdHRyID0gJ2RhdGEtJyArIGRhc2hlZE5hbWVzcGFjZTtcbiAgICB2YXIgZGF0YUF0dHJFbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICdbJyArIGRhdGFBdHRyICsgJ10nICk7XG4gICAgdmFyIGpzRGFzaEVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5qcy0nICsgZGFzaGVkTmFtZXNwYWNlICk7XG4gICAgdmFyIGVsZW1zID0gdXRpbHMubWFrZUFycmF5KCBkYXRhQXR0ckVsZW1zIClcbiAgICAgIC5jb25jYXQoIHV0aWxzLm1ha2VBcnJheSgganNEYXNoRWxlbXMgKSApO1xuICAgIHZhciBkYXRhT3B0aW9uc0F0dHIgPSBkYXRhQXR0ciArICctb3B0aW9ucyc7XG4gICAgdmFyIGpRdWVyeSA9IHdpbmRvdy5qUXVlcnk7XG5cbiAgICBlbGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAgIHZhciBhdHRyID0gZWxlbS5nZXRBdHRyaWJ1dGUoIGRhdGFBdHRyICkgfHxcbiAgICAgICAgZWxlbS5nZXRBdHRyaWJ1dGUoIGRhdGFPcHRpb25zQXR0ciApO1xuICAgICAgdmFyIG9wdGlvbnM7XG4gICAgICB0cnkge1xuICAgICAgICBvcHRpb25zID0gYXR0ciAmJiBKU09OLnBhcnNlKCBhdHRyICk7XG4gICAgICB9IGNhdGNoICggZXJyb3IgKSB7XG4gICAgICAgIC8vIGxvZyBlcnJvciwgZG8gbm90IGluaXRpYWxpemVcbiAgICAgICAgaWYgKCBjb25zb2xlICkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoICdFcnJvciBwYXJzaW5nICcgKyBkYXRhQXR0ciArICcgb24gJyArIGVsZW0uY2xhc3NOYW1lICtcbiAgICAgICAgICAnOiAnICsgZXJyb3IgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBpbml0aWFsaXplXG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgV2lkZ2V0Q2xhc3MoIGVsZW0sIG9wdGlvbnMgKTtcbiAgICAgIC8vIG1ha2UgYXZhaWxhYmxlIHZpYSAkKCkuZGF0YSgnbGF5b3V0bmFtZScpXG4gICAgICBpZiAoIGpRdWVyeSApIHtcbiAgICAgICAgalF1ZXJ5LmRhdGEoIGVsZW0sIG5hbWVzcGFjZSwgaW5zdGFuY2UgKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICB9KTtcbn07XG5cbi8vIC0tLS0tICAtLS0tLSAvL1xuXG5yZXR1cm4gdXRpbHM7XG5cbn0pKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Zpenp5LXVpLXV0aWxzL3V0aWxzLmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qIVxuICogT3V0bGF5ZXIgdjIuMS4wXG4gKiB0aGUgYnJhaW5zIGFuZCBndXRzIG9mIGEgbGF5b3V0IGxpYnJhcnlcbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAndXNlIHN0cmljdCc7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqLyAvKiBnbG9iYWxzIGRlZmluZSwgbW9kdWxlLCByZXF1aXJlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EIC0gUmVxdWlyZUpTXG4gICAgZGVmaW5lKCBbXG4gICAgICAgICdldi1lbWl0dGVyL2V2LWVtaXR0ZXInLFxuICAgICAgICAnZ2V0LXNpemUvZ2V0LXNpemUnLFxuICAgICAgICAnZml6enktdWktdXRpbHMvdXRpbHMnLFxuICAgICAgICAnLi9pdGVtJ1xuICAgICAgXSxcbiAgICAgIGZ1bmN0aW9uKCBFdkVtaXR0ZXIsIGdldFNpemUsIHV0aWxzLCBJdGVtICkge1xuICAgICAgICByZXR1cm4gZmFjdG9yeSggd2luZG93LCBFdkVtaXR0ZXIsIGdldFNpemUsIHV0aWxzLCBJdGVtKTtcbiAgICAgIH1cbiAgICApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTIC0gQnJvd3NlcmlmeSwgV2VicGFja1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHJlcXVpcmUoJ2V2LWVtaXR0ZXInKSxcbiAgICAgIHJlcXVpcmUoJ2dldC1zaXplJyksXG4gICAgICByZXF1aXJlKCdmaXp6eS11aS11dGlscycpLFxuICAgICAgcmVxdWlyZSgnLi9pdGVtJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93Lk91dGxheWVyID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHdpbmRvdy5FdkVtaXR0ZXIsXG4gICAgICB3aW5kb3cuZ2V0U2l6ZSxcbiAgICAgIHdpbmRvdy5maXp6eVVJVXRpbHMsXG4gICAgICB3aW5kb3cuT3V0bGF5ZXIuSXRlbVxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEV2RW1pdHRlciwgZ2V0U2l6ZSwgdXRpbHMsIEl0ZW0gKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIC0tLS0tIHZhcnMgLS0tLS0gLy9cblxudmFyIGNvbnNvbGUgPSB3aW5kb3cuY29uc29sZTtcbnZhciBqUXVlcnkgPSB3aW5kb3cualF1ZXJ5O1xudmFyIG5vb3AgPSBmdW5jdGlvbigpIHt9O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBPdXRsYXllciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBnbG9iYWxseSB1bmlxdWUgaWRlbnRpZmllcnNcbnZhciBHVUlEID0gMDtcbi8vIGludGVybmFsIHN0b3JlIG9mIGFsbCBPdXRsYXllciBpbnRhbmNlc1xudmFyIGluc3RhbmNlcyA9IHt9O1xuXG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50LCBTdHJpbmd9IGVsZW1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gT3V0bGF5ZXIoIGVsZW1lbnQsIG9wdGlvbnMgKSB7XG4gIHZhciBxdWVyeUVsZW1lbnQgPSB1dGlscy5nZXRRdWVyeUVsZW1lbnQoIGVsZW1lbnQgKTtcbiAgaWYgKCAhcXVlcnlFbGVtZW50ICkge1xuICAgIGlmICggY29uc29sZSApIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoICdCYWQgZWxlbWVudCBmb3IgJyArIHRoaXMuY29uc3RydWN0b3IubmFtZXNwYWNlICtcbiAgICAgICAgJzogJyArICggcXVlcnlFbGVtZW50IHx8IGVsZW1lbnQgKSApO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5lbGVtZW50ID0gcXVlcnlFbGVtZW50O1xuICAvLyBhZGQgalF1ZXJ5XG4gIGlmICggalF1ZXJ5ICkge1xuICAgIHRoaXMuJGVsZW1lbnQgPSBqUXVlcnkoIHRoaXMuZWxlbWVudCApO1xuICB9XG5cbiAgLy8gb3B0aW9uc1xuICB0aGlzLm9wdGlvbnMgPSB1dGlscy5leHRlbmQoIHt9LCB0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRzICk7XG4gIHRoaXMub3B0aW9uKCBvcHRpb25zICk7XG5cbiAgLy8gYWRkIGlkIGZvciBPdXRsYXllci5nZXRGcm9tRWxlbWVudFxuICB2YXIgaWQgPSArK0dVSUQ7XG4gIHRoaXMuZWxlbWVudC5vdXRsYXllckdVSUQgPSBpZDsgLy8gZXhwYW5kb1xuICBpbnN0YW5jZXNbIGlkIF0gPSB0aGlzOyAvLyBhc3NvY2lhdGUgdmlhIGlkXG5cbiAgLy8ga2ljayBpdCBvZmZcbiAgdGhpcy5fY3JlYXRlKCk7XG5cbiAgdmFyIGlzSW5pdExheW91dCA9IHRoaXMuX2dldE9wdGlvbignaW5pdExheW91dCcpO1xuICBpZiAoIGlzSW5pdExheW91dCApIHtcbiAgICB0aGlzLmxheW91dCgpO1xuICB9XG59XG5cbi8vIHNldHRpbmdzIGFyZSBmb3IgaW50ZXJuYWwgdXNlIG9ubHlcbk91dGxheWVyLm5hbWVzcGFjZSA9ICdvdXRsYXllcic7XG5PdXRsYXllci5JdGVtID0gSXRlbTtcblxuLy8gZGVmYXVsdCBvcHRpb25zXG5PdXRsYXllci5kZWZhdWx0cyA9IHtcbiAgY29udGFpbmVyU3R5bGU6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICB9LFxuICBpbml0TGF5b3V0OiB0cnVlLFxuICBvcmlnaW5MZWZ0OiB0cnVlLFxuICBvcmlnaW5Ub3A6IHRydWUsXG4gIHJlc2l6ZTogdHJ1ZSxcbiAgcmVzaXplQ29udGFpbmVyOiB0cnVlLFxuICAvLyBpdGVtIG9wdGlvbnNcbiAgdHJhbnNpdGlvbkR1cmF0aW9uOiAnMC40cycsXG4gIGhpZGRlblN0eWxlOiB7XG4gICAgb3BhY2l0eTogMCxcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjAwMSknXG4gIH0sXG4gIHZpc2libGVTdHlsZToge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknXG4gIH1cbn07XG5cbnZhciBwcm90byA9IE91dGxheWVyLnByb3RvdHlwZTtcbi8vIGluaGVyaXQgRXZFbWl0dGVyXG51dGlscy5leHRlbmQoIHByb3RvLCBFdkVtaXR0ZXIucHJvdG90eXBlICk7XG5cbi8qKlxuICogc2V0IG9wdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gKi9cbnByb3RvLm9wdGlvbiA9IGZ1bmN0aW9uKCBvcHRzICkge1xuICB1dGlscy5leHRlbmQoIHRoaXMub3B0aW9ucywgb3B0cyApO1xufTtcblxuLyoqXG4gKiBnZXQgYmFja3dhcmRzIGNvbXBhdGlibGUgb3B0aW9uIHZhbHVlLCBjaGVjayBvbGQgbmFtZVxuICovXG5wcm90by5fZ2V0T3B0aW9uID0gZnVuY3Rpb24oIG9wdGlvbiApIHtcbiAgdmFyIG9sZE9wdGlvbiA9IHRoaXMuY29uc3RydWN0b3IuY29tcGF0T3B0aW9uc1sgb3B0aW9uIF07XG4gIHJldHVybiBvbGRPcHRpb24gJiYgdGhpcy5vcHRpb25zWyBvbGRPcHRpb24gXSAhPT0gdW5kZWZpbmVkID9cbiAgICB0aGlzLm9wdGlvbnNbIG9sZE9wdGlvbiBdIDogdGhpcy5vcHRpb25zWyBvcHRpb24gXTtcbn07XG5cbk91dGxheWVyLmNvbXBhdE9wdGlvbnMgPSB7XG4gIC8vIGN1cnJlbnROYW1lOiBvbGROYW1lXG4gIGluaXRMYXlvdXQ6ICdpc0luaXRMYXlvdXQnLFxuICBob3Jpem9udGFsOiAnaXNIb3Jpem9udGFsJyxcbiAgbGF5b3V0SW5zdGFudDogJ2lzTGF5b3V0SW5zdGFudCcsXG4gIG9yaWdpbkxlZnQ6ICdpc09yaWdpbkxlZnQnLFxuICBvcmlnaW5Ub3A6ICdpc09yaWdpblRvcCcsXG4gIHJlc2l6ZTogJ2lzUmVzaXplQm91bmQnLFxuICByZXNpemVDb250YWluZXI6ICdpc1Jlc2l6aW5nQ29udGFpbmVyJ1xufTtcblxucHJvdG8uX2NyZWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAvLyBnZXQgaXRlbXMgZnJvbSBjaGlsZHJlblxuICB0aGlzLnJlbG9hZEl0ZW1zKCk7XG4gIC8vIGVsZW1lbnRzIHRoYXQgYWZmZWN0IGxheW91dCwgYnV0IGFyZSBub3QgbGFpZCBvdXRcbiAgdGhpcy5zdGFtcHMgPSBbXTtcbiAgdGhpcy5zdGFtcCggdGhpcy5vcHRpb25zLnN0YW1wICk7XG4gIC8vIHNldCBjb250YWluZXIgc3R5bGVcbiAgdXRpbHMuZXh0ZW5kKCB0aGlzLmVsZW1lbnQuc3R5bGUsIHRoaXMub3B0aW9ucy5jb250YWluZXJTdHlsZSApO1xuXG4gIC8vIGJpbmQgcmVzaXplIG1ldGhvZFxuICB2YXIgY2FuQmluZFJlc2l6ZSA9IHRoaXMuX2dldE9wdGlvbigncmVzaXplJyk7XG4gIGlmICggY2FuQmluZFJlc2l6ZSApIHtcbiAgICB0aGlzLmJpbmRSZXNpemUoKTtcbiAgfVxufTtcblxuLy8gZ29lcyB0aHJvdWdoIGFsbCBjaGlsZHJlbiBhZ2FpbiBhbmQgZ2V0cyBicmlja3MgaW4gcHJvcGVyIG9yZGVyXG5wcm90by5yZWxvYWRJdGVtcyA9IGZ1bmN0aW9uKCkge1xuICAvLyBjb2xsZWN0aW9uIG9mIGl0ZW0gZWxlbWVudHNcbiAgdGhpcy5pdGVtcyA9IHRoaXMuX2l0ZW1pemUoIHRoaXMuZWxlbWVudC5jaGlsZHJlbiApO1xufTtcblxuXG4vKipcbiAqIHR1cm4gZWxlbWVudHMgaW50byBPdXRsYXllci5JdGVtcyB0byBiZSB1c2VkIGluIGxheW91dFxuICogQHBhcmFtIHtBcnJheSBvciBOb2RlTGlzdCBvciBIVE1MRWxlbWVudH0gZWxlbXNcbiAqIEByZXR1cm5zIHtBcnJheX0gaXRlbXMgLSBjb2xsZWN0aW9uIG9mIG5ldyBPdXRsYXllciBJdGVtc1xuICovXG5wcm90by5faXRlbWl6ZSA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcblxuICB2YXIgaXRlbUVsZW1zID0gdGhpcy5fZmlsdGVyRmluZEl0ZW1FbGVtZW50cyggZWxlbXMgKTtcbiAgdmFyIEl0ZW0gPSB0aGlzLmNvbnN0cnVjdG9yLkl0ZW07XG5cbiAgLy8gY3JlYXRlIG5ldyBPdXRsYXllciBJdGVtcyBmb3IgY29sbGVjdGlvblxuICB2YXIgaXRlbXMgPSBbXTtcbiAgZm9yICggdmFyIGk9MDsgaSA8IGl0ZW1FbGVtcy5sZW5ndGg7IGkrKyApIHtcbiAgICB2YXIgZWxlbSA9IGl0ZW1FbGVtc1tpXTtcbiAgICB2YXIgaXRlbSA9IG5ldyBJdGVtKCBlbGVtLCB0aGlzICk7XG4gICAgaXRlbXMucHVzaCggaXRlbSApO1xuICB9XG5cbiAgcmV0dXJuIGl0ZW1zO1xufTtcblxuLyoqXG4gKiBnZXQgaXRlbSBlbGVtZW50cyB0byBiZSB1c2VkIGluIGxheW91dFxuICogQHBhcmFtIHtBcnJheSBvciBOb2RlTGlzdCBvciBIVE1MRWxlbWVudH0gZWxlbXNcbiAqIEByZXR1cm5zIHtBcnJheX0gaXRlbXMgLSBpdGVtIGVsZW1lbnRzXG4gKi9cbnByb3RvLl9maWx0ZXJGaW5kSXRlbUVsZW1lbnRzID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICByZXR1cm4gdXRpbHMuZmlsdGVyRmluZEVsZW1lbnRzKCBlbGVtcywgdGhpcy5vcHRpb25zLml0ZW1TZWxlY3RvciApO1xufTtcblxuLyoqXG4gKiBnZXR0ZXIgbWV0aG9kIGZvciBnZXR0aW5nIGl0ZW0gZWxlbWVudHNcbiAqIEByZXR1cm5zIHtBcnJheX0gZWxlbXMgLSBjb2xsZWN0aW9uIG9mIGl0ZW0gZWxlbWVudHNcbiAqL1xucHJvdG8uZ2V0SXRlbUVsZW1lbnRzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLml0ZW1zLm1hcCggZnVuY3Rpb24oIGl0ZW0gKSB7XG4gICAgcmV0dXJuIGl0ZW0uZWxlbWVudDtcbiAgfSk7XG59O1xuXG4vLyAtLS0tLSBpbml0ICYgbGF5b3V0IC0tLS0tIC8vXG5cbi8qKlxuICogbGF5cyBvdXQgYWxsIGl0ZW1zXG4gKi9cbnByb3RvLmxheW91dCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9yZXNldExheW91dCgpO1xuICB0aGlzLl9tYW5hZ2VTdGFtcHMoKTtcblxuICAvLyBkb24ndCBhbmltYXRlIGZpcnN0IGxheW91dFxuICB2YXIgbGF5b3V0SW5zdGFudCA9IHRoaXMuX2dldE9wdGlvbignbGF5b3V0SW5zdGFudCcpO1xuICB2YXIgaXNJbnN0YW50ID0gbGF5b3V0SW5zdGFudCAhPT0gdW5kZWZpbmVkID9cbiAgICBsYXlvdXRJbnN0YW50IDogIXRoaXMuX2lzTGF5b3V0SW5pdGVkO1xuICB0aGlzLmxheW91dEl0ZW1zKCB0aGlzLml0ZW1zLCBpc0luc3RhbnQgKTtcblxuICAvLyBmbGFnIGZvciBpbml0YWxpemVkXG4gIHRoaXMuX2lzTGF5b3V0SW5pdGVkID0gdHJ1ZTtcbn07XG5cbi8vIF9pbml0IGlzIGFsaWFzIGZvciBsYXlvdXRcbnByb3RvLl9pbml0ID0gcHJvdG8ubGF5b3V0O1xuXG4vKipcbiAqIGxvZ2ljIGJlZm9yZSBhbnkgbmV3IGxheW91dFxuICovXG5wcm90by5fcmVzZXRMYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5nZXRTaXplKCk7XG59O1xuXG5cbnByb3RvLmdldFNpemUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zaXplID0gZ2V0U2l6ZSggdGhpcy5lbGVtZW50ICk7XG59O1xuXG4vKipcbiAqIGdldCBtZWFzdXJlbWVudCBmcm9tIG9wdGlvbiwgZm9yIGNvbHVtbldpZHRoLCByb3dIZWlnaHQsIGd1dHRlclxuICogaWYgb3B0aW9uIGlzIFN0cmluZyAtPiBnZXQgZWxlbWVudCBmcm9tIHNlbGVjdG9yIHN0cmluZywgJiBnZXQgc2l6ZSBvZiBlbGVtZW50XG4gKiBpZiBvcHRpb24gaXMgRWxlbWVudCAtPiBnZXQgc2l6ZSBvZiBlbGVtZW50XG4gKiBlbHNlIHVzZSBvcHRpb24gYXMgYSBudW1iZXJcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVhc3VyZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzaXplIC0gd2lkdGggb3IgaGVpZ2h0XG4gKiBAcHJpdmF0ZVxuICovXG5wcm90by5fZ2V0TWVhc3VyZW1lbnQgPSBmdW5jdGlvbiggbWVhc3VyZW1lbnQsIHNpemUgKSB7XG4gIHZhciBvcHRpb24gPSB0aGlzLm9wdGlvbnNbIG1lYXN1cmVtZW50IF07XG4gIHZhciBlbGVtO1xuICBpZiAoICFvcHRpb24gKSB7XG4gICAgLy8gZGVmYXVsdCB0byAwXG4gICAgdGhpc1sgbWVhc3VyZW1lbnQgXSA9IDA7XG4gIH0gZWxzZSB7XG4gICAgLy8gdXNlIG9wdGlvbiBhcyBhbiBlbGVtZW50XG4gICAgaWYgKCB0eXBlb2Ygb3B0aW9uID09ICdzdHJpbmcnICkge1xuICAgICAgZWxlbSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCBvcHRpb24gKTtcbiAgICB9IGVsc2UgaWYgKCBvcHRpb24gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCApIHtcbiAgICAgIGVsZW0gPSBvcHRpb247XG4gICAgfVxuICAgIC8vIHVzZSBzaXplIG9mIGVsZW1lbnQsIGlmIGVsZW1lbnRcbiAgICB0aGlzWyBtZWFzdXJlbWVudCBdID0gZWxlbSA/IGdldFNpemUoIGVsZW0gKVsgc2l6ZSBdIDogb3B0aW9uO1xuICB9XG59O1xuXG4vKipcbiAqIGxheW91dCBhIGNvbGxlY3Rpb24gb2YgaXRlbSBlbGVtZW50c1xuICogQGFwaSBwdWJsaWNcbiAqL1xucHJvdG8ubGF5b3V0SXRlbXMgPSBmdW5jdGlvbiggaXRlbXMsIGlzSW5zdGFudCApIHtcbiAgaXRlbXMgPSB0aGlzLl9nZXRJdGVtc0ZvckxheW91dCggaXRlbXMgKTtcblxuICB0aGlzLl9sYXlvdXRJdGVtcyggaXRlbXMsIGlzSW5zdGFudCApO1xuXG4gIHRoaXMuX3Bvc3RMYXlvdXQoKTtcbn07XG5cbi8qKlxuICogZ2V0IHRoZSBpdGVtcyB0byBiZSBsYWlkIG91dFxuICogeW91IG1heSB3YW50IHRvIHNraXAgb3ZlciBzb21lIGl0ZW1zXG4gKiBAcGFyYW0ge0FycmF5fSBpdGVtc1xuICogQHJldHVybnMge0FycmF5fSBpdGVtc1xuICovXG5wcm90by5fZ2V0SXRlbXNGb3JMYXlvdXQgPSBmdW5jdGlvbiggaXRlbXMgKSB7XG4gIHJldHVybiBpdGVtcy5maWx0ZXIoIGZ1bmN0aW9uKCBpdGVtICkge1xuICAgIHJldHVybiAhaXRlbS5pc0lnbm9yZWQ7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBsYXlvdXQgaXRlbXNcbiAqIEBwYXJhbSB7QXJyYXl9IGl0ZW1zXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzSW5zdGFudFxuICovXG5wcm90by5fbGF5b3V0SXRlbXMgPSBmdW5jdGlvbiggaXRlbXMsIGlzSW5zdGFudCApIHtcbiAgdGhpcy5fZW1pdENvbXBsZXRlT25JdGVtcyggJ2xheW91dCcsIGl0ZW1zICk7XG5cbiAgaWYgKCAhaXRlbXMgfHwgIWl0ZW1zLmxlbmd0aCApIHtcbiAgICAvLyBubyBpdGVtcywgZW1pdCBldmVudCB3aXRoIGVtcHR5IGFycmF5XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHF1ZXVlID0gW107XG5cbiAgaXRlbXMuZm9yRWFjaCggZnVuY3Rpb24oIGl0ZW0gKSB7XG4gICAgLy8gZ2V0IHgveSBvYmplY3QgZnJvbSBtZXRob2RcbiAgICB2YXIgcG9zaXRpb24gPSB0aGlzLl9nZXRJdGVtTGF5b3V0UG9zaXRpb24oIGl0ZW0gKTtcbiAgICAvLyBlbnF1ZXVlXG4gICAgcG9zaXRpb24uaXRlbSA9IGl0ZW07XG4gICAgcG9zaXRpb24uaXNJbnN0YW50ID0gaXNJbnN0YW50IHx8IGl0ZW0uaXNMYXlvdXRJbnN0YW50O1xuICAgIHF1ZXVlLnB1c2goIHBvc2l0aW9uICk7XG4gIH0sIHRoaXMgKTtcblxuICB0aGlzLl9wcm9jZXNzTGF5b3V0UXVldWUoIHF1ZXVlICk7XG59O1xuXG4vKipcbiAqIGdldCBpdGVtIGxheW91dCBwb3NpdGlvblxuICogQHBhcmFtIHtPdXRsYXllci5JdGVtfSBpdGVtXG4gKiBAcmV0dXJucyB7T2JqZWN0fSB4IGFuZCB5IHBvc2l0aW9uXG4gKi9cbnByb3RvLl9nZXRJdGVtTGF5b3V0UG9zaXRpb24gPSBmdW5jdGlvbiggLyogaXRlbSAqLyApIHtcbiAgcmV0dXJuIHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcbn07XG5cbi8qKlxuICogaXRlcmF0ZSBvdmVyIGFycmF5IGFuZCBwb3NpdGlvbiBlYWNoIGl0ZW1cbiAqIFJlYXNvbiBiZWluZyAtIHNlcGFyYXRpbmcgdGhpcyBsb2dpYyBwcmV2ZW50cyAnbGF5b3V0IGludmFsaWRhdGlvbidcbiAqIHRoeCBAcGF1bF9pcmlzaFxuICogQHBhcmFtIHtBcnJheX0gcXVldWVcbiAqL1xucHJvdG8uX3Byb2Nlc3NMYXlvdXRRdWV1ZSA9IGZ1bmN0aW9uKCBxdWV1ZSApIHtcbiAgdGhpcy51cGRhdGVTdGFnZ2VyKCk7XG4gIHF1ZXVlLmZvckVhY2goIGZ1bmN0aW9uKCBvYmosIGkgKSB7XG4gICAgdGhpcy5fcG9zaXRpb25JdGVtKCBvYmouaXRlbSwgb2JqLngsIG9iai55LCBvYmouaXNJbnN0YW50LCBpICk7XG4gIH0sIHRoaXMgKTtcbn07XG5cbi8vIHNldCBzdGFnZ2VyIGZyb20gb3B0aW9uIGluIG1pbGxpc2Vjb25kcyBudW1iZXJcbnByb3RvLnVwZGF0ZVN0YWdnZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHN0YWdnZXIgPSB0aGlzLm9wdGlvbnMuc3RhZ2dlcjtcbiAgaWYgKCBzdGFnZ2VyID09PSBudWxsIHx8IHN0YWdnZXIgPT09IHVuZGVmaW5lZCApIHtcbiAgICB0aGlzLnN0YWdnZXIgPSAwO1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLnN0YWdnZXIgPSBnZXRNaWxsaXNlY29uZHMoIHN0YWdnZXIgKTtcbiAgcmV0dXJuIHRoaXMuc3RhZ2dlcjtcbn07XG5cbi8qKlxuICogU2V0cyBwb3NpdGlvbiBvZiBpdGVtIGluIERPTVxuICogQHBhcmFtIHtPdXRsYXllci5JdGVtfSBpdGVtXG4gKiBAcGFyYW0ge051bWJlcn0geCAtIGhvcml6b250YWwgcG9zaXRpb25cbiAqIEBwYXJhbSB7TnVtYmVyfSB5IC0gdmVydGljYWwgcG9zaXRpb25cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNJbnN0YW50IC0gZGlzYWJsZXMgdHJhbnNpdGlvbnNcbiAqL1xucHJvdG8uX3Bvc2l0aW9uSXRlbSA9IGZ1bmN0aW9uKCBpdGVtLCB4LCB5LCBpc0luc3RhbnQsIGkgKSB7XG4gIGlmICggaXNJbnN0YW50ICkge1xuICAgIC8vIGlmIG5vdCB0cmFuc2l0aW9uLCBqdXN0IHNldCBDU1NcbiAgICBpdGVtLmdvVG8oIHgsIHkgKTtcbiAgfSBlbHNlIHtcbiAgICBpdGVtLnN0YWdnZXIoIGkgKiB0aGlzLnN0YWdnZXIgKTtcbiAgICBpdGVtLm1vdmVUbyggeCwgeSApO1xuICB9XG59O1xuXG4vKipcbiAqIEFueSBsb2dpYyB5b3Ugd2FudCB0byBkbyBhZnRlciBlYWNoIGxheW91dCxcbiAqIGkuZS4gc2l6ZSB0aGUgY29udGFpbmVyXG4gKi9cbnByb3RvLl9wb3N0TGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucmVzaXplQ29udGFpbmVyKCk7XG59O1xuXG5wcm90by5yZXNpemVDb250YWluZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGlzUmVzaXppbmdDb250YWluZXIgPSB0aGlzLl9nZXRPcHRpb24oJ3Jlc2l6ZUNvbnRhaW5lcicpO1xuICBpZiAoICFpc1Jlc2l6aW5nQ29udGFpbmVyICkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgc2l6ZSA9IHRoaXMuX2dldENvbnRhaW5lclNpemUoKTtcbiAgaWYgKCBzaXplICkge1xuICAgIHRoaXMuX3NldENvbnRhaW5lck1lYXN1cmUoIHNpemUud2lkdGgsIHRydWUgKTtcbiAgICB0aGlzLl9zZXRDb250YWluZXJNZWFzdXJlKCBzaXplLmhlaWdodCwgZmFsc2UgKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTZXRzIHdpZHRoIG9yIGhlaWdodCBvZiBjb250YWluZXIgaWYgcmV0dXJuZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IHNpemVcbiAqICAgQHBhcmFtIHtOdW1iZXJ9IHdpZHRoXG4gKiAgIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHRcbiAqL1xucHJvdG8uX2dldENvbnRhaW5lclNpemUgPSBub29wO1xuXG4vKipcbiAqIEBwYXJhbSB7TnVtYmVyfSBtZWFzdXJlIC0gc2l6ZSBvZiB3aWR0aCBvciBoZWlnaHRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNXaWR0aFxuICovXG5wcm90by5fc2V0Q29udGFpbmVyTWVhc3VyZSA9IGZ1bmN0aW9uKCBtZWFzdXJlLCBpc1dpZHRoICkge1xuICBpZiAoIG1lYXN1cmUgPT09IHVuZGVmaW5lZCApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZWxlbVNpemUgPSB0aGlzLnNpemU7XG4gIC8vIGFkZCBwYWRkaW5nIGFuZCBib3JkZXIgd2lkdGggaWYgYm9yZGVyIGJveFxuICBpZiAoIGVsZW1TaXplLmlzQm9yZGVyQm94ICkge1xuICAgIG1lYXN1cmUgKz0gaXNXaWR0aCA/IGVsZW1TaXplLnBhZGRpbmdMZWZ0ICsgZWxlbVNpemUucGFkZGluZ1JpZ2h0ICtcbiAgICAgIGVsZW1TaXplLmJvcmRlckxlZnRXaWR0aCArIGVsZW1TaXplLmJvcmRlclJpZ2h0V2lkdGggOlxuICAgICAgZWxlbVNpemUucGFkZGluZ0JvdHRvbSArIGVsZW1TaXplLnBhZGRpbmdUb3AgK1xuICAgICAgZWxlbVNpemUuYm9yZGVyVG9wV2lkdGggKyBlbGVtU2l6ZS5ib3JkZXJCb3R0b21XaWR0aDtcbiAgfVxuXG4gIG1lYXN1cmUgPSBNYXRoLm1heCggbWVhc3VyZSwgMCApO1xuICB0aGlzLmVsZW1lbnQuc3R5bGVbIGlzV2lkdGggPyAnd2lkdGgnIDogJ2hlaWdodCcgXSA9IG1lYXN1cmUgKyAncHgnO1xufTtcblxuLyoqXG4gKiBlbWl0IGV2ZW50Q29tcGxldGUgb24gYSBjb2xsZWN0aW9uIG9mIGl0ZW1zIGV2ZW50c1xuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZVxuICogQHBhcmFtIHtBcnJheX0gaXRlbXMgLSBPdXRsYXllci5JdGVtc1xuICovXG5wcm90by5fZW1pdENvbXBsZXRlT25JdGVtcyA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGl0ZW1zICkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuICBmdW5jdGlvbiBvbkNvbXBsZXRlKCkge1xuICAgIF90aGlzLmRpc3BhdGNoRXZlbnQoIGV2ZW50TmFtZSArICdDb21wbGV0ZScsIG51bGwsIFsgaXRlbXMgXSApO1xuICB9XG5cbiAgdmFyIGNvdW50ID0gaXRlbXMubGVuZ3RoO1xuICBpZiAoICFpdGVtcyB8fCAhY291bnQgKSB7XG4gICAgb25Db21wbGV0ZSgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBkb25lQ291bnQgPSAwO1xuICBmdW5jdGlvbiB0aWNrKCkge1xuICAgIGRvbmVDb3VudCsrO1xuICAgIGlmICggZG9uZUNvdW50ID09IGNvdW50ICkge1xuICAgICAgb25Db21wbGV0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGJpbmQgY2FsbGJhY2tcbiAgaXRlbXMuZm9yRWFjaCggZnVuY3Rpb24oIGl0ZW0gKSB7XG4gICAgaXRlbS5vbmNlKCBldmVudE5hbWUsIHRpY2sgKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIGVtaXRzIGV2ZW50cyB2aWEgRXZFbWl0dGVyIGFuZCBqUXVlcnkgZXZlbnRzXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSAtIG5hbWUgb2YgZXZlbnRcbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gb3JpZ2luYWwgZXZlbnRcbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgLSBleHRyYSBhcmd1bWVudHNcbiAqL1xucHJvdG8uZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uKCB0eXBlLCBldmVudCwgYXJncyApIHtcbiAgLy8gYWRkIG9yaWdpbmFsIGV2ZW50IHRvIGFyZ3VtZW50c1xuICB2YXIgZW1pdEFyZ3MgPSBldmVudCA/IFsgZXZlbnQgXS5jb25jYXQoIGFyZ3MgKSA6IGFyZ3M7XG4gIHRoaXMuZW1pdEV2ZW50KCB0eXBlLCBlbWl0QXJncyApO1xuXG4gIGlmICggalF1ZXJ5ICkge1xuICAgIC8vIHNldCB0aGlzLiRlbGVtZW50XG4gICAgdGhpcy4kZWxlbWVudCA9IHRoaXMuJGVsZW1lbnQgfHwgalF1ZXJ5KCB0aGlzLmVsZW1lbnQgKTtcbiAgICBpZiAoIGV2ZW50ICkge1xuICAgICAgLy8gY3JlYXRlIGpRdWVyeSBldmVudFxuICAgICAgdmFyICRldmVudCA9IGpRdWVyeS5FdmVudCggZXZlbnQgKTtcbiAgICAgICRldmVudC50eXBlID0gdHlwZTtcbiAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlciggJGV2ZW50LCBhcmdzICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGp1c3QgdHJpZ2dlciB3aXRoIHR5cGUgaWYgbm8gZXZlbnQgYXZhaWxhYmxlXG4gICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoIHR5cGUsIGFyZ3MgKTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGlnbm9yZSAmIHN0YW1wcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cbi8qKlxuICoga2VlcCBpdGVtIGluIGNvbGxlY3Rpb24sIGJ1dCBkbyBub3QgbGF5IGl0IG91dFxuICogaWdub3JlZCBpdGVtcyBkbyBub3QgZ2V0IHNraXBwZWQgaW4gbGF5b3V0XG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1cbiAqL1xucHJvdG8uaWdub3JlID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIHZhciBpdGVtID0gdGhpcy5nZXRJdGVtKCBlbGVtICk7XG4gIGlmICggaXRlbSApIHtcbiAgICBpdGVtLmlzSWdub3JlZCA9IHRydWU7XG4gIH1cbn07XG5cbi8qKlxuICogcmV0dXJuIGl0ZW0gdG8gbGF5b3V0IGNvbGxlY3Rpb25cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbVxuICovXG5wcm90by51bmlnbm9yZSA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICB2YXIgaXRlbSA9IHRoaXMuZ2V0SXRlbSggZWxlbSApO1xuICBpZiAoIGl0ZW0gKSB7XG4gICAgZGVsZXRlIGl0ZW0uaXNJZ25vcmVkO1xuICB9XG59O1xuXG4vKipcbiAqIGFkZHMgZWxlbWVudHMgdG8gc3RhbXBzXG4gKiBAcGFyYW0ge05vZGVMaXN0LCBBcnJheSwgRWxlbWVudCwgb3IgU3RyaW5nfSBlbGVtc1xuICovXG5wcm90by5zdGFtcCA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgZWxlbXMgPSB0aGlzLl9maW5kKCBlbGVtcyApO1xuICBpZiAoICFlbGVtcyApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLnN0YW1wcyA9IHRoaXMuc3RhbXBzLmNvbmNhdCggZWxlbXMgKTtcbiAgLy8gaWdub3JlXG4gIGVsZW1zLmZvckVhY2goIHRoaXMuaWdub3JlLCB0aGlzICk7XG59O1xuXG4vKipcbiAqIHJlbW92ZXMgZWxlbWVudHMgdG8gc3RhbXBzXG4gKiBAcGFyYW0ge05vZGVMaXN0LCBBcnJheSwgb3IgRWxlbWVudH0gZWxlbXNcbiAqL1xucHJvdG8udW5zdGFtcCA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgZWxlbXMgPSB0aGlzLl9maW5kKCBlbGVtcyApO1xuICBpZiAoICFlbGVtcyApe1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGVsZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBlbGVtICkge1xuICAgIC8vIGZpbHRlciBvdXQgcmVtb3ZlZCBzdGFtcCBlbGVtZW50c1xuICAgIHV0aWxzLnJlbW92ZUZyb20oIHRoaXMuc3RhbXBzLCBlbGVtICk7XG4gICAgdGhpcy51bmlnbm9yZSggZWxlbSApO1xuICB9LCB0aGlzICk7XG59O1xuXG4vKipcbiAqIGZpbmRzIGNoaWxkIGVsZW1lbnRzXG4gKiBAcGFyYW0ge05vZGVMaXN0LCBBcnJheSwgRWxlbWVudCwgb3IgU3RyaW5nfSBlbGVtc1xuICogQHJldHVybnMge0FycmF5fSBlbGVtc1xuICovXG5wcm90by5fZmluZCA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgaWYgKCAhZWxlbXMgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGlmIHN0cmluZywgdXNlIGFyZ3VtZW50IGFzIHNlbGVjdG9yIHN0cmluZ1xuICBpZiAoIHR5cGVvZiBlbGVtcyA9PSAnc3RyaW5nJyApIHtcbiAgICBlbGVtcyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCBlbGVtcyApO1xuICB9XG4gIGVsZW1zID0gdXRpbHMubWFrZUFycmF5KCBlbGVtcyApO1xuICByZXR1cm4gZWxlbXM7XG59O1xuXG5wcm90by5fbWFuYWdlU3RhbXBzID0gZnVuY3Rpb24oKSB7XG4gIGlmICggIXRoaXMuc3RhbXBzIHx8ICF0aGlzLnN0YW1wcy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5fZ2V0Qm91bmRpbmdSZWN0KCk7XG5cbiAgdGhpcy5zdGFtcHMuZm9yRWFjaCggdGhpcy5fbWFuYWdlU3RhbXAsIHRoaXMgKTtcbn07XG5cbi8vIHVwZGF0ZSBib3VuZGluZ0xlZnQgLyBUb3BcbnByb3RvLl9nZXRCb3VuZGluZ1JlY3QgPSBmdW5jdGlvbigpIHtcbiAgLy8gZ2V0IGJvdW5kaW5nIHJlY3QgZm9yIGNvbnRhaW5lciBlbGVtZW50XG4gIHZhciBib3VuZGluZ1JlY3QgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciBzaXplID0gdGhpcy5zaXplO1xuICB0aGlzLl9ib3VuZGluZ1JlY3QgPSB7XG4gICAgbGVmdDogYm91bmRpbmdSZWN0LmxlZnQgKyBzaXplLnBhZGRpbmdMZWZ0ICsgc2l6ZS5ib3JkZXJMZWZ0V2lkdGgsXG4gICAgdG9wOiBib3VuZGluZ1JlY3QudG9wICsgc2l6ZS5wYWRkaW5nVG9wICsgc2l6ZS5ib3JkZXJUb3BXaWR0aCxcbiAgICByaWdodDogYm91bmRpbmdSZWN0LnJpZ2h0IC0gKCBzaXplLnBhZGRpbmdSaWdodCArIHNpemUuYm9yZGVyUmlnaHRXaWR0aCApLFxuICAgIGJvdHRvbTogYm91bmRpbmdSZWN0LmJvdHRvbSAtICggc2l6ZS5wYWRkaW5nQm90dG9tICsgc2l6ZS5ib3JkZXJCb3R0b21XaWR0aCApXG4gIH07XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudH0gc3RhbXBcbioqL1xucHJvdG8uX21hbmFnZVN0YW1wID0gbm9vcDtcblxuLyoqXG4gKiBnZXQgeC95IHBvc2l0aW9uIG9mIGVsZW1lbnQgcmVsYXRpdmUgdG8gY29udGFpbmVyIGVsZW1lbnRcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbVxuICogQHJldHVybnMge09iamVjdH0gb2Zmc2V0IC0gaGFzIGxlZnQsIHRvcCwgcmlnaHQsIGJvdHRvbVxuICovXG5wcm90by5fZ2V0RWxlbWVudE9mZnNldCA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICB2YXIgYm91bmRpbmdSZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIHRoaXNSZWN0ID0gdGhpcy5fYm91bmRpbmdSZWN0O1xuICB2YXIgc2l6ZSA9IGdldFNpemUoIGVsZW0gKTtcbiAgdmFyIG9mZnNldCA9IHtcbiAgICBsZWZ0OiBib3VuZGluZ1JlY3QubGVmdCAtIHRoaXNSZWN0LmxlZnQgLSBzaXplLm1hcmdpbkxlZnQsXG4gICAgdG9wOiBib3VuZGluZ1JlY3QudG9wIC0gdGhpc1JlY3QudG9wIC0gc2l6ZS5tYXJnaW5Ub3AsXG4gICAgcmlnaHQ6IHRoaXNSZWN0LnJpZ2h0IC0gYm91bmRpbmdSZWN0LnJpZ2h0IC0gc2l6ZS5tYXJnaW5SaWdodCxcbiAgICBib3R0b206IHRoaXNSZWN0LmJvdHRvbSAtIGJvdW5kaW5nUmVjdC5ib3R0b20gLSBzaXplLm1hcmdpbkJvdHRvbVxuICB9O1xuICByZXR1cm4gb2Zmc2V0O1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcmVzaXplIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIGVuYWJsZSBldmVudCBoYW5kbGVycyBmb3IgbGlzdGVuZXJzXG4vLyBpLmUuIHJlc2l6ZSAtPiBvbnJlc2l6ZVxucHJvdG8uaGFuZGxlRXZlbnQgPSB1dGlscy5oYW5kbGVFdmVudDtcblxuLyoqXG4gKiBCaW5kIGxheW91dCB0byB3aW5kb3cgcmVzaXppbmdcbiAqL1xucHJvdG8uYmluZFJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIHRoaXMgKTtcbiAgdGhpcy5pc1Jlc2l6ZUJvdW5kID0gdHJ1ZTtcbn07XG5cbi8qKlxuICogVW5iaW5kIGxheW91dCB0byB3aW5kb3cgcmVzaXppbmdcbiAqL1xucHJvdG8udW5iaW5kUmVzaXplID0gZnVuY3Rpb24oKSB7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAncmVzaXplJywgdGhpcyApO1xuICB0aGlzLmlzUmVzaXplQm91bmQgPSBmYWxzZTtcbn07XG5cbnByb3RvLm9ucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucmVzaXplKCk7XG59O1xuXG51dGlscy5kZWJvdW5jZU1ldGhvZCggT3V0bGF5ZXIsICdvbnJlc2l6ZScsIDEwMCApO1xuXG5wcm90by5yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgLy8gZG9uJ3QgdHJpZ2dlciBpZiBzaXplIGRpZCBub3QgY2hhbmdlXG4gIC8vIG9yIGlmIHJlc2l6ZSB3YXMgdW5ib3VuZC4gU2VlICM5XG4gIGlmICggIXRoaXMuaXNSZXNpemVCb3VuZCB8fCAhdGhpcy5uZWVkc1Jlc2l6ZUxheW91dCgpICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMubGF5b3V0KCk7XG59O1xuXG4vKipcbiAqIGNoZWNrIGlmIGxheW91dCBpcyBuZWVkZWQgcG9zdCBsYXlvdXRcbiAqIEByZXR1cm5zIEJvb2xlYW5cbiAqL1xucHJvdG8ubmVlZHNSZXNpemVMYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHNpemUgPSBnZXRTaXplKCB0aGlzLmVsZW1lbnQgKTtcbiAgLy8gY2hlY2sgdGhhdCB0aGlzLnNpemUgYW5kIHNpemUgYXJlIHRoZXJlXG4gIC8vIElFOCB0cmlnZ2VycyByZXNpemUgb24gYm9keSBzaXplIGNoYW5nZSwgc28gdGhleSBtaWdodCBub3QgYmVcbiAgdmFyIGhhc1NpemVzID0gdGhpcy5zaXplICYmIHNpemU7XG4gIHJldHVybiBoYXNTaXplcyAmJiBzaXplLmlubmVyV2lkdGggIT09IHRoaXMuc2l6ZS5pbm5lcldpZHRoO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWV0aG9kcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vKipcbiAqIGFkZCBpdGVtcyB0byBPdXRsYXllciBpbnN0YW5jZVxuICogQHBhcmFtIHtBcnJheSBvciBOb2RlTGlzdCBvciBFbGVtZW50fSBlbGVtc1xuICogQHJldHVybnMge0FycmF5fSBpdGVtcyAtIE91dGxheWVyLkl0ZW1zXG4qKi9cbnByb3RvLmFkZEl0ZW1zID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICB2YXIgaXRlbXMgPSB0aGlzLl9pdGVtaXplKCBlbGVtcyApO1xuICAvLyBhZGQgaXRlbXMgdG8gY29sbGVjdGlvblxuICBpZiAoIGl0ZW1zLmxlbmd0aCApIHtcbiAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtcy5jb25jYXQoIGl0ZW1zICk7XG4gIH1cbiAgcmV0dXJuIGl0ZW1zO1xufTtcblxuLyoqXG4gKiBMYXlvdXQgbmV3bHktYXBwZW5kZWQgaXRlbSBlbGVtZW50c1xuICogQHBhcmFtIHtBcnJheSBvciBOb2RlTGlzdCBvciBFbGVtZW50fSBlbGVtc1xuICovXG5wcm90by5hcHBlbmRlZCA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgdmFyIGl0ZW1zID0gdGhpcy5hZGRJdGVtcyggZWxlbXMgKTtcbiAgaWYgKCAhaXRlbXMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBsYXlvdXQgYW5kIHJldmVhbCBqdXN0IHRoZSBuZXcgaXRlbXNcbiAgdGhpcy5sYXlvdXRJdGVtcyggaXRlbXMsIHRydWUgKTtcbiAgdGhpcy5yZXZlYWwoIGl0ZW1zICk7XG59O1xuXG4vKipcbiAqIExheW91dCBwcmVwZW5kZWQgZWxlbWVudHNcbiAqIEBwYXJhbSB7QXJyYXkgb3IgTm9kZUxpc3Qgb3IgRWxlbWVudH0gZWxlbXNcbiAqL1xucHJvdG8ucHJlcGVuZGVkID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICB2YXIgaXRlbXMgPSB0aGlzLl9pdGVtaXplKCBlbGVtcyApO1xuICBpZiAoICFpdGVtcy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGFkZCBpdGVtcyB0byBiZWdpbm5pbmcgb2YgY29sbGVjdGlvblxuICB2YXIgcHJldmlvdXNJdGVtcyA9IHRoaXMuaXRlbXMuc2xpY2UoMCk7XG4gIHRoaXMuaXRlbXMgPSBpdGVtcy5jb25jYXQoIHByZXZpb3VzSXRlbXMgKTtcbiAgLy8gc3RhcnQgbmV3IGxheW91dFxuICB0aGlzLl9yZXNldExheW91dCgpO1xuICB0aGlzLl9tYW5hZ2VTdGFtcHMoKTtcbiAgLy8gbGF5b3V0IG5ldyBzdHVmZiB3aXRob3V0IHRyYW5zaXRpb25cbiAgdGhpcy5sYXlvdXRJdGVtcyggaXRlbXMsIHRydWUgKTtcbiAgdGhpcy5yZXZlYWwoIGl0ZW1zICk7XG4gIC8vIGxheW91dCBwcmV2aW91cyBpdGVtc1xuICB0aGlzLmxheW91dEl0ZW1zKCBwcmV2aW91c0l0ZW1zICk7XG59O1xuXG4vKipcbiAqIHJldmVhbCBhIGNvbGxlY3Rpb24gb2YgaXRlbXNcbiAqIEBwYXJhbSB7QXJyYXkgb2YgT3V0bGF5ZXIuSXRlbXN9IGl0ZW1zXG4gKi9cbnByb3RvLnJldmVhbCA9IGZ1bmN0aW9uKCBpdGVtcyApIHtcbiAgdGhpcy5fZW1pdENvbXBsZXRlT25JdGVtcyggJ3JldmVhbCcsIGl0ZW1zICk7XG4gIGlmICggIWl0ZW1zIHx8ICFpdGVtcy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBzdGFnZ2VyID0gdGhpcy51cGRhdGVTdGFnZ2VyKCk7XG4gIGl0ZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBpdGVtLCBpICkge1xuICAgIGl0ZW0uc3RhZ2dlciggaSAqIHN0YWdnZXIgKTtcbiAgICBpdGVtLnJldmVhbCgpO1xuICB9KTtcbn07XG5cbi8qKlxuICogaGlkZSBhIGNvbGxlY3Rpb24gb2YgaXRlbXNcbiAqIEBwYXJhbSB7QXJyYXkgb2YgT3V0bGF5ZXIuSXRlbXN9IGl0ZW1zXG4gKi9cbnByb3RvLmhpZGUgPSBmdW5jdGlvbiggaXRlbXMgKSB7XG4gIHRoaXMuX2VtaXRDb21wbGV0ZU9uSXRlbXMoICdoaWRlJywgaXRlbXMgKTtcbiAgaWYgKCAhaXRlbXMgfHwgIWl0ZW1zLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIHN0YWdnZXIgPSB0aGlzLnVwZGF0ZVN0YWdnZXIoKTtcbiAgaXRlbXMuZm9yRWFjaCggZnVuY3Rpb24oIGl0ZW0sIGkgKSB7XG4gICAgaXRlbS5zdGFnZ2VyKCBpICogc3RhZ2dlciApO1xuICAgIGl0ZW0uaGlkZSgpO1xuICB9KTtcbn07XG5cbi8qKlxuICogcmV2ZWFsIGl0ZW0gZWxlbWVudHNcbiAqIEBwYXJhbSB7QXJyYXl9LCB7RWxlbWVudH0sIHtOb2RlTGlzdH0gaXRlbXNcbiAqL1xucHJvdG8ucmV2ZWFsSXRlbUVsZW1lbnRzID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICB2YXIgaXRlbXMgPSB0aGlzLmdldEl0ZW1zKCBlbGVtcyApO1xuICB0aGlzLnJldmVhbCggaXRlbXMgKTtcbn07XG5cbi8qKlxuICogaGlkZSBpdGVtIGVsZW1lbnRzXG4gKiBAcGFyYW0ge0FycmF5fSwge0VsZW1lbnR9LCB7Tm9kZUxpc3R9IGl0ZW1zXG4gKi9cbnByb3RvLmhpZGVJdGVtRWxlbWVudHMgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIHZhciBpdGVtcyA9IHRoaXMuZ2V0SXRlbXMoIGVsZW1zICk7XG4gIHRoaXMuaGlkZSggaXRlbXMgKTtcbn07XG5cbi8qKlxuICogZ2V0IE91dGxheWVyLkl0ZW0sIGdpdmVuIGFuIEVsZW1lbnRcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtPdXRsYXllci5JdGVtfSBpdGVtXG4gKi9cbnByb3RvLmdldEl0ZW0gPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgLy8gbG9vcCB0aHJvdWdoIGl0ZW1zIHRvIGdldCB0aGUgb25lIHRoYXQgbWF0Y2hlc1xuICBmb3IgKCB2YXIgaT0wOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKyApIHtcbiAgICB2YXIgaXRlbSA9IHRoaXMuaXRlbXNbaV07XG4gICAgaWYgKCBpdGVtLmVsZW1lbnQgPT0gZWxlbSApIHtcbiAgICAgIC8vIHJldHVybiBpdGVtXG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogZ2V0IGNvbGxlY3Rpb24gb2YgT3V0bGF5ZXIuSXRlbXMsIGdpdmVuIEVsZW1lbnRzXG4gKiBAcGFyYW0ge0FycmF5fSBlbGVtc1xuICogQHJldHVybnMge0FycmF5fSBpdGVtcyAtIE91dGxheWVyLkl0ZW1zXG4gKi9cbnByb3RvLmdldEl0ZW1zID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICBlbGVtcyA9IHV0aWxzLm1ha2VBcnJheSggZWxlbXMgKTtcbiAgdmFyIGl0ZW1zID0gW107XG4gIGVsZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBlbGVtICkge1xuICAgIHZhciBpdGVtID0gdGhpcy5nZXRJdGVtKCBlbGVtICk7XG4gICAgaWYgKCBpdGVtICkge1xuICAgICAgaXRlbXMucHVzaCggaXRlbSApO1xuICAgIH1cbiAgfSwgdGhpcyApO1xuXG4gIHJldHVybiBpdGVtcztcbn07XG5cbi8qKlxuICogcmVtb3ZlIGVsZW1lbnQocykgZnJvbSBpbnN0YW5jZSBhbmQgRE9NXG4gKiBAcGFyYW0ge0FycmF5IG9yIE5vZGVMaXN0IG9yIEVsZW1lbnR9IGVsZW1zXG4gKi9cbnByb3RvLnJlbW92ZSA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgdmFyIHJlbW92ZUl0ZW1zID0gdGhpcy5nZXRJdGVtcyggZWxlbXMgKTtcblxuICB0aGlzLl9lbWl0Q29tcGxldGVPbkl0ZW1zKCAncmVtb3ZlJywgcmVtb3ZlSXRlbXMgKTtcblxuICAvLyBiYWlsIGlmIG5vIGl0ZW1zIHRvIHJlbW92ZVxuICBpZiAoICFyZW1vdmVJdGVtcyB8fCAhcmVtb3ZlSXRlbXMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJlbW92ZUl0ZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBpdGVtICkge1xuICAgIGl0ZW0ucmVtb3ZlKCk7XG4gICAgLy8gcmVtb3ZlIGl0ZW0gZnJvbSBjb2xsZWN0aW9uXG4gICAgdXRpbHMucmVtb3ZlRnJvbSggdGhpcy5pdGVtcywgaXRlbSApO1xuICB9LCB0aGlzICk7XG59O1xuXG4vLyAtLS0tLSBkZXN0cm95IC0tLS0tIC8vXG5cbi8vIHJlbW92ZSBhbmQgZGlzYWJsZSBPdXRsYXllciBpbnN0YW5jZVxucHJvdG8uZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAvLyBjbGVhbiB1cCBkeW5hbWljIHN0eWxlc1xuICB2YXIgc3R5bGUgPSB0aGlzLmVsZW1lbnQuc3R5bGU7XG4gIHN0eWxlLmhlaWdodCA9ICcnO1xuICBzdHlsZS5wb3NpdGlvbiA9ICcnO1xuICBzdHlsZS53aWR0aCA9ICcnO1xuICAvLyBkZXN0cm95IGl0ZW1zXG4gIHRoaXMuaXRlbXMuZm9yRWFjaCggZnVuY3Rpb24oIGl0ZW0gKSB7XG4gICAgaXRlbS5kZXN0cm95KCk7XG4gIH0pO1xuXG4gIHRoaXMudW5iaW5kUmVzaXplKCk7XG5cbiAgdmFyIGlkID0gdGhpcy5lbGVtZW50Lm91dGxheWVyR1VJRDtcbiAgZGVsZXRlIGluc3RhbmNlc1sgaWQgXTsgLy8gcmVtb3ZlIHJlZmVyZW5jZSB0byBpbnN0YW5jZSBieSBpZFxuICBkZWxldGUgdGhpcy5lbGVtZW50Lm91dGxheWVyR1VJRDtcbiAgLy8gcmVtb3ZlIGRhdGEgZm9yIGpRdWVyeVxuICBpZiAoIGpRdWVyeSApIHtcbiAgICBqUXVlcnkucmVtb3ZlRGF0YSggdGhpcy5lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLm5hbWVzcGFjZSApO1xuICB9XG5cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGRhdGEgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLyoqXG4gKiBnZXQgT3V0bGF5ZXIgaW5zdGFuY2UgZnJvbSBlbGVtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1cbiAqIEByZXR1cm5zIHtPdXRsYXllcn1cbiAqL1xuT3V0bGF5ZXIuZGF0YSA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICBlbGVtID0gdXRpbHMuZ2V0UXVlcnlFbGVtZW50KCBlbGVtICk7XG4gIHZhciBpZCA9IGVsZW0gJiYgZWxlbS5vdXRsYXllckdVSUQ7XG4gIHJldHVybiBpZCAmJiBpbnN0YW5jZXNbIGlkIF07XG59O1xuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNyZWF0ZSBPdXRsYXllciBjbGFzcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vKipcbiAqIGNyZWF0ZSBhIGxheW91dCBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuICovXG5PdXRsYXllci5jcmVhdGUgPSBmdW5jdGlvbiggbmFtZXNwYWNlLCBvcHRpb25zICkge1xuICAvLyBzdWItY2xhc3MgT3V0bGF5ZXJcbiAgdmFyIExheW91dCA9IHN1YmNsYXNzKCBPdXRsYXllciApO1xuICAvLyBhcHBseSBuZXcgb3B0aW9ucyBhbmQgY29tcGF0T3B0aW9uc1xuICBMYXlvdXQuZGVmYXVsdHMgPSB1dGlscy5leHRlbmQoIHt9LCBPdXRsYXllci5kZWZhdWx0cyApO1xuICB1dGlscy5leHRlbmQoIExheW91dC5kZWZhdWx0cywgb3B0aW9ucyApO1xuICBMYXlvdXQuY29tcGF0T3B0aW9ucyA9IHV0aWxzLmV4dGVuZCgge30sIE91dGxheWVyLmNvbXBhdE9wdGlvbnMgICk7XG5cbiAgTGF5b3V0Lm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcblxuICBMYXlvdXQuZGF0YSA9IE91dGxheWVyLmRhdGE7XG5cbiAgLy8gc3ViLWNsYXNzIEl0ZW1cbiAgTGF5b3V0Lkl0ZW0gPSBzdWJjbGFzcyggSXRlbSApO1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGRlY2xhcmF0aXZlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbiAgdXRpbHMuaHRtbEluaXQoIExheW91dCwgbmFtZXNwYWNlICk7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0galF1ZXJ5IGJyaWRnZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4gIC8vIG1ha2UgaW50byBqUXVlcnkgcGx1Z2luXG4gIGlmICggalF1ZXJ5ICYmIGpRdWVyeS5icmlkZ2V0ICkge1xuICAgIGpRdWVyeS5icmlkZ2V0KCBuYW1lc3BhY2UsIExheW91dCApO1xuICB9XG5cbiAgcmV0dXJuIExheW91dDtcbn07XG5cbmZ1bmN0aW9uIHN1YmNsYXNzKCBQYXJlbnQgKSB7XG4gIGZ1bmN0aW9uIFN1YkNsYXNzKCkge1xuICAgIFBhcmVudC5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG4gIH1cblxuICBTdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBQYXJlbnQucHJvdG90eXBlICk7XG4gIFN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN1YkNsYXNzO1xuXG4gIHJldHVybiBTdWJDbGFzcztcbn1cblxuLy8gLS0tLS0gaGVscGVycyAtLS0tLSAvL1xuXG4vLyBob3cgbWFueSBtaWxsaXNlY29uZHMgYXJlIGluIGVhY2ggdW5pdFxudmFyIG1zVW5pdHMgPSB7XG4gIG1zOiAxLFxuICBzOiAxMDAwXG59O1xuXG4vLyBtdW5nZSB0aW1lLWxpa2UgcGFyYW1ldGVyIGludG8gbWlsbGlzZWNvbmQgbnVtYmVyXG4vLyAnMC40cycgLT4gNDBcbmZ1bmN0aW9uIGdldE1pbGxpc2Vjb25kcyggdGltZSApIHtcbiAgaWYgKCB0eXBlb2YgdGltZSA9PSAnbnVtYmVyJyApIHtcbiAgICByZXR1cm4gdGltZTtcbiAgfVxuICB2YXIgbWF0Y2hlcyA9IHRpbWUubWF0Y2goIC8oXlxcZCpcXC4/XFxkKikoXFx3KikvICk7XG4gIHZhciBudW0gPSBtYXRjaGVzICYmIG1hdGNoZXNbMV07XG4gIHZhciB1bml0ID0gbWF0Y2hlcyAmJiBtYXRjaGVzWzJdO1xuICBpZiAoICFudW0ubGVuZ3RoICkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIG51bSA9IHBhcnNlRmxvYXQoIG51bSApO1xuICB2YXIgbXVsdCA9IG1zVW5pdHNbIHVuaXQgXSB8fCAxO1xuICByZXR1cm4gbnVtICogbXVsdDtcbn1cblxuLy8gLS0tLS0gZmluIC0tLS0tIC8vXG5cbi8vIGJhY2sgaW4gZ2xvYmFsXG5PdXRsYXllci5JdGVtID0gSXRlbTtcblxucmV0dXJuIE91dGxheWVyO1xuXG59KSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9vdXRsYXllci9vdXRsYXllci5qc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIE91dGxheWVyIEl0ZW1cbiAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqLyAvKiBnbG9iYWxzIGRlZmluZSwgbW9kdWxlLCByZXF1aXJlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EIC0gUmVxdWlyZUpTXG4gICAgZGVmaW5lKCBbXG4gICAgICAgICdldi1lbWl0dGVyL2V2LWVtaXR0ZXInLFxuICAgICAgICAnZ2V0LXNpemUvZ2V0LXNpemUnXG4gICAgICBdLFxuICAgICAgZmFjdG9yeVxuICAgICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlMgLSBCcm93c2VyaWZ5LCBXZWJwYWNrXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgcmVxdWlyZSgnZXYtZW1pdHRlcicpLFxuICAgICAgcmVxdWlyZSgnZ2V0LXNpemUnKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuT3V0bGF5ZXIgPSB7fTtcbiAgICB3aW5kb3cuT3V0bGF5ZXIuSXRlbSA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3cuRXZFbWl0dGVyLFxuICAgICAgd2luZG93LmdldFNpemVcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggRXZFbWl0dGVyLCBnZXRTaXplICkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLSBoZWxwZXJzIC0tLS0tIC8vXG5cbmZ1bmN0aW9uIGlzRW1wdHlPYmooIG9iaiApIHtcbiAgZm9yICggdmFyIHByb3AgaW4gb2JqICkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBwcm9wID0gbnVsbDtcbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIENTUzMgc3VwcG9ydCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cbnZhciBkb2NFbGVtU3R5bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG5cbnZhciB0cmFuc2l0aW9uUHJvcGVydHkgPSB0eXBlb2YgZG9jRWxlbVN0eWxlLnRyYW5zaXRpb24gPT0gJ3N0cmluZycgP1xuICAndHJhbnNpdGlvbicgOiAnV2Via2l0VHJhbnNpdGlvbic7XG52YXIgdHJhbnNmb3JtUHJvcGVydHkgPSB0eXBlb2YgZG9jRWxlbVN0eWxlLnRyYW5zZm9ybSA9PSAnc3RyaW5nJyA/XG4gICd0cmFuc2Zvcm0nIDogJ1dlYmtpdFRyYW5zZm9ybSc7XG5cbnZhciB0cmFuc2l0aW9uRW5kRXZlbnQgPSB7XG4gIFdlYmtpdFRyYW5zaXRpb246ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgdHJhbnNpdGlvbjogJ3RyYW5zaXRpb25lbmQnXG59WyB0cmFuc2l0aW9uUHJvcGVydHkgXTtcblxuLy8gY2FjaGUgYWxsIHZlbmRvciBwcm9wZXJ0aWVzIHRoYXQgY291bGQgaGF2ZSB2ZW5kb3IgcHJlZml4XG52YXIgdmVuZG9yUHJvcGVydGllcyA9IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1Qcm9wZXJ0eSxcbiAgdHJhbnNpdGlvbjogdHJhbnNpdGlvblByb3BlcnR5LFxuICB0cmFuc2l0aW9uRHVyYXRpb246IHRyYW5zaXRpb25Qcm9wZXJ0eSArICdEdXJhdGlvbicsXG4gIHRyYW5zaXRpb25Qcm9wZXJ0eTogdHJhbnNpdGlvblByb3BlcnR5ICsgJ1Byb3BlcnR5JyxcbiAgdHJhbnNpdGlvbkRlbGF5OiB0cmFuc2l0aW9uUHJvcGVydHkgKyAnRGVsYXknXG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJdGVtIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbmZ1bmN0aW9uIEl0ZW0oIGVsZW1lbnQsIGxheW91dCApIHtcbiAgaWYgKCAhZWxlbWVudCApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAvLyBwYXJlbnQgbGF5b3V0IGNsYXNzLCBpLmUuIE1hc29ucnksIElzb3RvcGUsIG9yIFBhY2tlcnlcbiAgdGhpcy5sYXlvdXQgPSBsYXlvdXQ7XG4gIHRoaXMucG9zaXRpb24gPSB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG5cbiAgdGhpcy5fY3JlYXRlKCk7XG59XG5cbi8vIGluaGVyaXQgRXZFbWl0dGVyXG52YXIgcHJvdG8gPSBJdGVtLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEV2RW1pdHRlci5wcm90b3R5cGUgKTtcbnByb3RvLmNvbnN0cnVjdG9yID0gSXRlbTtcblxucHJvdG8uX2NyZWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAvLyB0cmFuc2l0aW9uIG9iamVjdHNcbiAgdGhpcy5fdHJhbnNuID0ge1xuICAgIGluZ1Byb3BlcnRpZXM6IHt9LFxuICAgIGNsZWFuOiB7fSxcbiAgICBvbkVuZDoge31cbiAgfTtcblxuICB0aGlzLmNzcyh7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgfSk7XG59O1xuXG4vLyB0cmlnZ2VyIHNwZWNpZmllZCBoYW5kbGVyIGZvciBldmVudCB0eXBlXG5wcm90by5oYW5kbGVFdmVudCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgdmFyIG1ldGhvZCA9ICdvbicgKyBldmVudC50eXBlO1xuICBpZiAoIHRoaXNbIG1ldGhvZCBdICkge1xuICAgIHRoaXNbIG1ldGhvZCBdKCBldmVudCApO1xuICB9XG59O1xuXG5wcm90by5nZXRTaXplID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2l6ZSA9IGdldFNpemUoIHRoaXMuZWxlbWVudCApO1xufTtcblxuLyoqXG4gKiBhcHBseSBDU1Mgc3R5bGVzIHRvIGVsZW1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZVxuICovXG5wcm90by5jc3MgPSBmdW5jdGlvbiggc3R5bGUgKSB7XG4gIHZhciBlbGVtU3R5bGUgPSB0aGlzLmVsZW1lbnQuc3R5bGU7XG5cbiAgZm9yICggdmFyIHByb3AgaW4gc3R5bGUgKSB7XG4gICAgLy8gdXNlIHZlbmRvciBwcm9wZXJ0eSBpZiBhdmFpbGFibGVcbiAgICB2YXIgc3VwcG9ydGVkUHJvcCA9IHZlbmRvclByb3BlcnRpZXNbIHByb3AgXSB8fCBwcm9wO1xuICAgIGVsZW1TdHlsZVsgc3VwcG9ydGVkUHJvcCBdID0gc3R5bGVbIHByb3AgXTtcbiAgfVxufTtcblxuIC8vIG1lYXN1cmUgcG9zaXRpb24sIGFuZCBzZXRzIGl0XG5wcm90by5nZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKCB0aGlzLmVsZW1lbnQgKTtcbiAgdmFyIGlzT3JpZ2luTGVmdCA9IHRoaXMubGF5b3V0Ll9nZXRPcHRpb24oJ29yaWdpbkxlZnQnKTtcbiAgdmFyIGlzT3JpZ2luVG9wID0gdGhpcy5sYXlvdXQuX2dldE9wdGlvbignb3JpZ2luVG9wJyk7XG4gIHZhciB4VmFsdWUgPSBzdHlsZVsgaXNPcmlnaW5MZWZ0ID8gJ2xlZnQnIDogJ3JpZ2h0JyBdO1xuICB2YXIgeVZhbHVlID0gc3R5bGVbIGlzT3JpZ2luVG9wID8gJ3RvcCcgOiAnYm90dG9tJyBdO1xuICAvLyBjb252ZXJ0IHBlcmNlbnQgdG8gcGl4ZWxzXG4gIHZhciBsYXlvdXRTaXplID0gdGhpcy5sYXlvdXQuc2l6ZTtcbiAgdmFyIHggPSB4VmFsdWUuaW5kZXhPZignJScpICE9IC0xID9cbiAgICAoIHBhcnNlRmxvYXQoIHhWYWx1ZSApIC8gMTAwICkgKiBsYXlvdXRTaXplLndpZHRoIDogcGFyc2VJbnQoIHhWYWx1ZSwgMTAgKTtcbiAgdmFyIHkgPSB5VmFsdWUuaW5kZXhPZignJScpICE9IC0xID9cbiAgICAoIHBhcnNlRmxvYXQoIHlWYWx1ZSApIC8gMTAwICkgKiBsYXlvdXRTaXplLmhlaWdodCA6IHBhcnNlSW50KCB5VmFsdWUsIDEwICk7XG5cbiAgLy8gY2xlYW4gdXAgJ2F1dG8nIG9yIG90aGVyIG5vbi1pbnRlZ2VyIHZhbHVlc1xuICB4ID0gaXNOYU4oIHggKSA/IDAgOiB4O1xuICB5ID0gaXNOYU4oIHkgKSA/IDAgOiB5O1xuICAvLyByZW1vdmUgcGFkZGluZyBmcm9tIG1lYXN1cmVtZW50XG4gIHggLT0gaXNPcmlnaW5MZWZ0ID8gbGF5b3V0U2l6ZS5wYWRkaW5nTGVmdCA6IGxheW91dFNpemUucGFkZGluZ1JpZ2h0O1xuICB5IC09IGlzT3JpZ2luVG9wID8gbGF5b3V0U2l6ZS5wYWRkaW5nVG9wIDogbGF5b3V0U2l6ZS5wYWRkaW5nQm90dG9tO1xuXG4gIHRoaXMucG9zaXRpb24ueCA9IHg7XG4gIHRoaXMucG9zaXRpb24ueSA9IHk7XG59O1xuXG4vLyBzZXQgc2V0dGxlZCBwb3NpdGlvbiwgYXBwbHkgcGFkZGluZ1xucHJvdG8ubGF5b3V0UG9zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgdmFyIGxheW91dFNpemUgPSB0aGlzLmxheW91dC5zaXplO1xuICB2YXIgc3R5bGUgPSB7fTtcbiAgdmFyIGlzT3JpZ2luTGVmdCA9IHRoaXMubGF5b3V0Ll9nZXRPcHRpb24oJ29yaWdpbkxlZnQnKTtcbiAgdmFyIGlzT3JpZ2luVG9wID0gdGhpcy5sYXlvdXQuX2dldE9wdGlvbignb3JpZ2luVG9wJyk7XG5cbiAgLy8geFxuICB2YXIgeFBhZGRpbmcgPSBpc09yaWdpbkxlZnQgPyAncGFkZGluZ0xlZnQnIDogJ3BhZGRpbmdSaWdodCc7XG4gIHZhciB4UHJvcGVydHkgPSBpc09yaWdpbkxlZnQgPyAnbGVmdCcgOiAncmlnaHQnO1xuICB2YXIgeFJlc2V0UHJvcGVydHkgPSBpc09yaWdpbkxlZnQgPyAncmlnaHQnIDogJ2xlZnQnO1xuXG4gIHZhciB4ID0gdGhpcy5wb3NpdGlvbi54ICsgbGF5b3V0U2l6ZVsgeFBhZGRpbmcgXTtcbiAgLy8gc2V0IGluIHBlcmNlbnRhZ2Ugb3IgcGl4ZWxzXG4gIHN0eWxlWyB4UHJvcGVydHkgXSA9IHRoaXMuZ2V0WFZhbHVlKCB4ICk7XG4gIC8vIHJlc2V0IG90aGVyIHByb3BlcnR5XG4gIHN0eWxlWyB4UmVzZXRQcm9wZXJ0eSBdID0gJyc7XG5cbiAgLy8geVxuICB2YXIgeVBhZGRpbmcgPSBpc09yaWdpblRvcCA/ICdwYWRkaW5nVG9wJyA6ICdwYWRkaW5nQm90dG9tJztcbiAgdmFyIHlQcm9wZXJ0eSA9IGlzT3JpZ2luVG9wID8gJ3RvcCcgOiAnYm90dG9tJztcbiAgdmFyIHlSZXNldFByb3BlcnR5ID0gaXNPcmlnaW5Ub3AgPyAnYm90dG9tJyA6ICd0b3AnO1xuXG4gIHZhciB5ID0gdGhpcy5wb3NpdGlvbi55ICsgbGF5b3V0U2l6ZVsgeVBhZGRpbmcgXTtcbiAgLy8gc2V0IGluIHBlcmNlbnRhZ2Ugb3IgcGl4ZWxzXG4gIHN0eWxlWyB5UHJvcGVydHkgXSA9IHRoaXMuZ2V0WVZhbHVlKCB5ICk7XG4gIC8vIHJlc2V0IG90aGVyIHByb3BlcnR5XG4gIHN0eWxlWyB5UmVzZXRQcm9wZXJ0eSBdID0gJyc7XG5cbiAgdGhpcy5jc3MoIHN0eWxlICk7XG4gIHRoaXMuZW1pdEV2ZW50KCAnbGF5b3V0JywgWyB0aGlzIF0gKTtcbn07XG5cbnByb3RvLmdldFhWYWx1ZSA9IGZ1bmN0aW9uKCB4ICkge1xuICB2YXIgaXNIb3Jpem9udGFsID0gdGhpcy5sYXlvdXQuX2dldE9wdGlvbignaG9yaXpvbnRhbCcpO1xuICByZXR1cm4gdGhpcy5sYXlvdXQub3B0aW9ucy5wZXJjZW50UG9zaXRpb24gJiYgIWlzSG9yaXpvbnRhbCA/XG4gICAgKCAoIHggLyB0aGlzLmxheW91dC5zaXplLndpZHRoICkgKiAxMDAgKSArICclJyA6IHggKyAncHgnO1xufTtcblxucHJvdG8uZ2V0WVZhbHVlID0gZnVuY3Rpb24oIHkgKSB7XG4gIHZhciBpc0hvcml6b250YWwgPSB0aGlzLmxheW91dC5fZ2V0T3B0aW9uKCdob3Jpem9udGFsJyk7XG4gIHJldHVybiB0aGlzLmxheW91dC5vcHRpb25zLnBlcmNlbnRQb3NpdGlvbiAmJiBpc0hvcml6b250YWwgP1xuICAgICggKCB5IC8gdGhpcy5sYXlvdXQuc2l6ZS5oZWlnaHQgKSAqIDEwMCApICsgJyUnIDogeSArICdweCc7XG59O1xuXG5wcm90by5fdHJhbnNpdGlvblRvID0gZnVuY3Rpb24oIHgsIHkgKSB7XG4gIHRoaXMuZ2V0UG9zaXRpb24oKTtcbiAgLy8gZ2V0IGN1cnJlbnQgeCAmIHkgZnJvbSB0b3AvbGVmdFxuICB2YXIgY3VyWCA9IHRoaXMucG9zaXRpb24ueDtcbiAgdmFyIGN1clkgPSB0aGlzLnBvc2l0aW9uLnk7XG5cbiAgdmFyIGNvbXBhcmVYID0gcGFyc2VJbnQoIHgsIDEwICk7XG4gIHZhciBjb21wYXJlWSA9IHBhcnNlSW50KCB5LCAxMCApO1xuICB2YXIgZGlkTm90TW92ZSA9IGNvbXBhcmVYID09PSB0aGlzLnBvc2l0aW9uLnggJiYgY29tcGFyZVkgPT09IHRoaXMucG9zaXRpb24ueTtcblxuICAvLyBzYXZlIGVuZCBwb3NpdGlvblxuICB0aGlzLnNldFBvc2l0aW9uKCB4LCB5ICk7XG5cbiAgLy8gaWYgZGlkIG5vdCBtb3ZlIGFuZCBub3QgdHJhbnNpdGlvbmluZywganVzdCBnbyB0byBsYXlvdXRcbiAgaWYgKCBkaWROb3RNb3ZlICYmICF0aGlzLmlzVHJhbnNpdGlvbmluZyApIHtcbiAgICB0aGlzLmxheW91dFBvc2l0aW9uKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHRyYW5zWCA9IHggLSBjdXJYO1xuICB2YXIgdHJhbnNZID0geSAtIGN1clk7XG4gIHZhciB0cmFuc2l0aW9uU3R5bGUgPSB7fTtcbiAgdHJhbnNpdGlvblN0eWxlLnRyYW5zZm9ybSA9IHRoaXMuZ2V0VHJhbnNsYXRlKCB0cmFuc1gsIHRyYW5zWSApO1xuXG4gIHRoaXMudHJhbnNpdGlvbih7XG4gICAgdG86IHRyYW5zaXRpb25TdHlsZSxcbiAgICBvblRyYW5zaXRpb25FbmQ6IHtcbiAgICAgIHRyYW5zZm9ybTogdGhpcy5sYXlvdXRQb3NpdGlvblxuICAgIH0sXG4gICAgaXNDbGVhbmluZzogdHJ1ZVxuICB9KTtcbn07XG5cbnByb3RvLmdldFRyYW5zbGF0ZSA9IGZ1bmN0aW9uKCB4LCB5ICkge1xuICAvLyBmbGlwIGNvb3JpZGluYXRlcyBpZiBvcmlnaW4gb24gcmlnaHQgb3IgYm90dG9tXG4gIHZhciBpc09yaWdpbkxlZnQgPSB0aGlzLmxheW91dC5fZ2V0T3B0aW9uKCdvcmlnaW5MZWZ0Jyk7XG4gIHZhciBpc09yaWdpblRvcCA9IHRoaXMubGF5b3V0Ll9nZXRPcHRpb24oJ29yaWdpblRvcCcpO1xuICB4ID0gaXNPcmlnaW5MZWZ0ID8geCA6IC14O1xuICB5ID0gaXNPcmlnaW5Ub3AgPyB5IDogLXk7XG4gIHJldHVybiAndHJhbnNsYXRlM2QoJyArIHggKyAncHgsICcgKyB5ICsgJ3B4LCAwKSc7XG59O1xuXG4vLyBub24gdHJhbnNpdGlvbiArIHRyYW5zZm9ybSBzdXBwb3J0XG5wcm90by5nb1RvID0gZnVuY3Rpb24oIHgsIHkgKSB7XG4gIHRoaXMuc2V0UG9zaXRpb24oIHgsIHkgKTtcbiAgdGhpcy5sYXlvdXRQb3NpdGlvbigpO1xufTtcblxucHJvdG8ubW92ZVRvID0gcHJvdG8uX3RyYW5zaXRpb25UbztcblxucHJvdG8uc2V0UG9zaXRpb24gPSBmdW5jdGlvbiggeCwgeSApIHtcbiAgdGhpcy5wb3NpdGlvbi54ID0gcGFyc2VJbnQoIHgsIDEwICk7XG4gIHRoaXMucG9zaXRpb24ueSA9IHBhcnNlSW50KCB5LCAxMCApO1xufTtcblxuLy8gLS0tLS0gdHJhbnNpdGlvbiAtLS0tLSAvL1xuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZSAtIENTU1xuICogQHBhcmFtIHtGdW5jdGlvbn0gb25UcmFuc2l0aW9uRW5kXG4gKi9cblxuLy8gbm9uIHRyYW5zaXRpb24sIGp1c3QgdHJpZ2dlciBjYWxsYmFja1xucHJvdG8uX25vblRyYW5zaXRpb24gPSBmdW5jdGlvbiggYXJncyApIHtcbiAgdGhpcy5jc3MoIGFyZ3MudG8gKTtcbiAgaWYgKCBhcmdzLmlzQ2xlYW5pbmcgKSB7XG4gICAgdGhpcy5fcmVtb3ZlU3R5bGVzKCBhcmdzLnRvICk7XG4gIH1cbiAgZm9yICggdmFyIHByb3AgaW4gYXJncy5vblRyYW5zaXRpb25FbmQgKSB7XG4gICAgYXJncy5vblRyYW5zaXRpb25FbmRbIHByb3AgXS5jYWxsKCB0aGlzICk7XG4gIH1cbn07XG5cbi8qKlxuICogcHJvcGVyIHRyYW5zaXRpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSBhcmdzIC0gYXJndW1lbnRzXG4gKiAgIEBwYXJhbSB7T2JqZWN0fSB0byAtIHN0eWxlIHRvIHRyYW5zaXRpb24gdG9cbiAqICAgQHBhcmFtIHtPYmplY3R9IGZyb20gLSBzdHlsZSB0byBzdGFydCB0cmFuc2l0aW9uIGZyb21cbiAqICAgQHBhcmFtIHtCb29sZWFufSBpc0NsZWFuaW5nIC0gcmVtb3ZlcyB0cmFuc2l0aW9uIHN0eWxlcyBhZnRlciB0cmFuc2l0aW9uXG4gKiAgIEBwYXJhbSB7RnVuY3Rpb259IG9uVHJhbnNpdGlvbkVuZCAtIGNhbGxiYWNrXG4gKi9cbnByb3RvLnRyYW5zaXRpb24gPSBmdW5jdGlvbiggYXJncyApIHtcbiAgLy8gcmVkaXJlY3QgdG8gbm9uVHJhbnNpdGlvbiBpZiBubyB0cmFuc2l0aW9uIGR1cmF0aW9uXG4gIGlmICggIXBhcnNlRmxvYXQoIHRoaXMubGF5b3V0Lm9wdGlvbnMudHJhbnNpdGlvbkR1cmF0aW9uICkgKSB7XG4gICAgdGhpcy5fbm9uVHJhbnNpdGlvbiggYXJncyApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBfdHJhbnNpdGlvbiA9IHRoaXMuX3RyYW5zbjtcbiAgLy8ga2VlcCB0cmFjayBvZiBvblRyYW5zaXRpb25FbmQgY2FsbGJhY2sgYnkgY3NzIHByb3BlcnR5XG4gIGZvciAoIHZhciBwcm9wIGluIGFyZ3Mub25UcmFuc2l0aW9uRW5kICkge1xuICAgIF90cmFuc2l0aW9uLm9uRW5kWyBwcm9wIF0gPSBhcmdzLm9uVHJhbnNpdGlvbkVuZFsgcHJvcCBdO1xuICB9XG4gIC8vIGtlZXAgdHJhY2sgb2YgcHJvcGVydGllcyB0aGF0IGFyZSB0cmFuc2l0aW9uaW5nXG4gIGZvciAoIHByb3AgaW4gYXJncy50byApIHtcbiAgICBfdHJhbnNpdGlvbi5pbmdQcm9wZXJ0aWVzWyBwcm9wIF0gPSB0cnVlO1xuICAgIC8vIGtlZXAgdHJhY2sgb2YgcHJvcGVydGllcyB0byBjbGVhbiB1cCB3aGVuIHRyYW5zaXRpb24gaXMgZG9uZVxuICAgIGlmICggYXJncy5pc0NsZWFuaW5nICkge1xuICAgICAgX3RyYW5zaXRpb24uY2xlYW5bIHByb3AgXSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLy8gc2V0IGZyb20gc3R5bGVzXG4gIGlmICggYXJncy5mcm9tICkge1xuICAgIHRoaXMuY3NzKCBhcmdzLmZyb20gKTtcbiAgICAvLyBmb3JjZSByZWRyYXcuIGh0dHA6Ly9ibG9nLmFsZXhtYWNjYXcuY29tL2Nzcy10cmFuc2l0aW9uc1xuICAgIHZhciBoID0gdGhpcy5lbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAvLyBoYWNrIGZvciBKU0hpbnQgdG8gaHVzaCBhYm91dCB1bnVzZWQgdmFyXG4gICAgaCA9IG51bGw7XG4gIH1cbiAgLy8gZW5hYmxlIHRyYW5zaXRpb25cbiAgdGhpcy5lbmFibGVUcmFuc2l0aW9uKCBhcmdzLnRvICk7XG4gIC8vIHNldCBzdHlsZXMgdGhhdCBhcmUgdHJhbnNpdGlvbmluZ1xuICB0aGlzLmNzcyggYXJncy50byApO1xuXG4gIHRoaXMuaXNUcmFuc2l0aW9uaW5nID0gdHJ1ZTtcblxufTtcblxuLy8gZGFzaCBiZWZvcmUgYWxsIGNhcCBsZXR0ZXJzLCBpbmNsdWRpbmcgZmlyc3QgZm9yXG4vLyBXZWJraXRUcmFuc2Zvcm0gPT4gLXdlYmtpdC10cmFuc2Zvcm1cbmZ1bmN0aW9uIHRvRGFzaGVkQWxsKCBzdHIgKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSggLyhbQS1aXSkvZywgZnVuY3Rpb24oICQxICkge1xuICAgIHJldHVybiAnLScgKyAkMS50b0xvd2VyQ2FzZSgpO1xuICB9KTtcbn1cblxudmFyIHRyYW5zaXRpb25Qcm9wcyA9ICdvcGFjaXR5LCcgKyB0b0Rhc2hlZEFsbCggdHJhbnNmb3JtUHJvcGVydHkgKTtcblxucHJvdG8uZW5hYmxlVHJhbnNpdGlvbiA9IGZ1bmN0aW9uKC8qIHN0eWxlICovKSB7XG4gIC8vIEhBQ0sgY2hhbmdpbmcgdHJhbnNpdGlvblByb3BlcnR5IGR1cmluZyBhIHRyYW5zaXRpb25cbiAgLy8gd2lsbCBjYXVzZSB0cmFuc2l0aW9uIHRvIGp1bXBcbiAgaWYgKCB0aGlzLmlzVHJhbnNpdGlvbmluZyApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBtYWtlIGB0cmFuc2l0aW9uOiBmb28sIGJhciwgYmF6YCBmcm9tIHN0eWxlIG9iamVjdFxuICAvLyBIQUNLIHVuLWNvbW1lbnQgdGhpcyB3aGVuIGVuYWJsZVRyYW5zaXRpb24gY2FuIHdvcmtcbiAgLy8gd2hpbGUgYSB0cmFuc2l0aW9uIGlzIGhhcHBlbmluZ1xuICAvLyB2YXIgdHJhbnNpdGlvblZhbHVlcyA9IFtdO1xuICAvLyBmb3IgKCB2YXIgcHJvcCBpbiBzdHlsZSApIHtcbiAgLy8gICAvLyBkYXNoLWlmeSBjYW1lbENhc2VkIHByb3BlcnRpZXMgbGlrZSBXZWJraXRUcmFuc2l0aW9uXG4gIC8vICAgcHJvcCA9IHZlbmRvclByb3BlcnRpZXNbIHByb3AgXSB8fCBwcm9wO1xuICAvLyAgIHRyYW5zaXRpb25WYWx1ZXMucHVzaCggdG9EYXNoZWRBbGwoIHByb3AgKSApO1xuICAvLyB9XG4gIC8vIG11bmdlIG51bWJlciB0byBtaWxsaXNlY29uZCwgdG8gbWF0Y2ggc3RhZ2dlclxuICB2YXIgZHVyYXRpb24gPSB0aGlzLmxheW91dC5vcHRpb25zLnRyYW5zaXRpb25EdXJhdGlvbjtcbiAgZHVyYXRpb24gPSB0eXBlb2YgZHVyYXRpb24gPT0gJ251bWJlcicgPyBkdXJhdGlvbiArICdtcycgOiBkdXJhdGlvbjtcbiAgLy8gZW5hYmxlIHRyYW5zaXRpb24gc3R5bGVzXG4gIHRoaXMuY3NzKHtcbiAgICB0cmFuc2l0aW9uUHJvcGVydHk6IHRyYW5zaXRpb25Qcm9wcyxcbiAgICB0cmFuc2l0aW9uRHVyYXRpb246IGR1cmF0aW9uLFxuICAgIHRyYW5zaXRpb25EZWxheTogdGhpcy5zdGFnZ2VyRGVsYXkgfHwgMFxuICB9KTtcbiAgLy8gbGlzdGVuIGZvciB0cmFuc2l0aW9uIGVuZCBldmVudFxuICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggdHJhbnNpdGlvbkVuZEV2ZW50LCB0aGlzLCBmYWxzZSApO1xufTtcblxuLy8gLS0tLS0gZXZlbnRzIC0tLS0tIC8vXG5cbnByb3RvLm9ud2Via2l0VHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgdGhpcy5vbnRyYW5zaXRpb25lbmQoIGV2ZW50ICk7XG59O1xuXG5wcm90by5vbm90cmFuc2l0aW9uZW5kID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICB0aGlzLm9udHJhbnNpdGlvbmVuZCggZXZlbnQgKTtcbn07XG5cbi8vIHByb3BlcnRpZXMgdGhhdCBJIG11bmdlIHRvIG1ha2UgbXkgbGlmZSBlYXNpZXJcbnZhciBkYXNoZWRWZW5kb3JQcm9wZXJ0aWVzID0ge1xuICAnLXdlYmtpdC10cmFuc2Zvcm0nOiAndHJhbnNmb3JtJ1xufTtcblxucHJvdG8ub250cmFuc2l0aW9uZW5kID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICAvLyBkaXNyZWdhcmQgYnViYmxlZCBldmVudHMgZnJvbSBjaGlsZHJlblxuICBpZiAoIGV2ZW50LnRhcmdldCAhPT0gdGhpcy5lbGVtZW50ICkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgX3RyYW5zaXRpb24gPSB0aGlzLl90cmFuc247XG4gIC8vIGdldCBwcm9wZXJ0eSBuYW1lIG9mIHRyYW5zaXRpb25lZCBwcm9wZXJ0eSwgY29udmVydCB0byBwcmVmaXgtZnJlZVxuICB2YXIgcHJvcGVydHlOYW1lID0gZGFzaGVkVmVuZG9yUHJvcGVydGllc1sgZXZlbnQucHJvcGVydHlOYW1lIF0gfHwgZXZlbnQucHJvcGVydHlOYW1lO1xuXG4gIC8vIHJlbW92ZSBwcm9wZXJ0eSB0aGF0IGhhcyBjb21wbGV0ZWQgdHJhbnNpdGlvbmluZ1xuICBkZWxldGUgX3RyYW5zaXRpb24uaW5nUHJvcGVydGllc1sgcHJvcGVydHlOYW1lIF07XG4gIC8vIGNoZWNrIGlmIGFueSBwcm9wZXJ0aWVzIGFyZSBzdGlsbCB0cmFuc2l0aW9uaW5nXG4gIGlmICggaXNFbXB0eU9iaiggX3RyYW5zaXRpb24uaW5nUHJvcGVydGllcyApICkge1xuICAgIC8vIGFsbCBwcm9wZXJ0aWVzIGhhdmUgY29tcGxldGVkIHRyYW5zaXRpb25pbmdcbiAgICB0aGlzLmRpc2FibGVUcmFuc2l0aW9uKCk7XG4gIH1cbiAgLy8gY2xlYW4gc3R5bGVcbiAgaWYgKCBwcm9wZXJ0eU5hbWUgaW4gX3RyYW5zaXRpb24uY2xlYW4gKSB7XG4gICAgLy8gY2xlYW4gdXAgc3R5bGVcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGVbIGV2ZW50LnByb3BlcnR5TmFtZSBdID0gJyc7XG4gICAgZGVsZXRlIF90cmFuc2l0aW9uLmNsZWFuWyBwcm9wZXJ0eU5hbWUgXTtcbiAgfVxuICAvLyB0cmlnZ2VyIG9uVHJhbnNpdGlvbkVuZCBjYWxsYmFja1xuICBpZiAoIHByb3BlcnR5TmFtZSBpbiBfdHJhbnNpdGlvbi5vbkVuZCApIHtcbiAgICB2YXIgb25UcmFuc2l0aW9uRW5kID0gX3RyYW5zaXRpb24ub25FbmRbIHByb3BlcnR5TmFtZSBdO1xuICAgIG9uVHJhbnNpdGlvbkVuZC5jYWxsKCB0aGlzICk7XG4gICAgZGVsZXRlIF90cmFuc2l0aW9uLm9uRW5kWyBwcm9wZXJ0eU5hbWUgXTtcbiAgfVxuXG4gIHRoaXMuZW1pdEV2ZW50KCAndHJhbnNpdGlvbkVuZCcsIFsgdGhpcyBdICk7XG59O1xuXG5wcm90by5kaXNhYmxlVHJhbnNpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnJlbW92ZVRyYW5zaXRpb25TdHlsZXMoKTtcbiAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoIHRyYW5zaXRpb25FbmRFdmVudCwgdGhpcywgZmFsc2UgKTtcbiAgdGhpcy5pc1RyYW5zaXRpb25pbmcgPSBmYWxzZTtcbn07XG5cbi8qKlxuICogcmVtb3ZlcyBzdHlsZSBwcm9wZXJ0eSBmcm9tIGVsZW1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZVxuKiovXG5wcm90by5fcmVtb3ZlU3R5bGVzID0gZnVuY3Rpb24oIHN0eWxlICkge1xuICAvLyBjbGVhbiB1cCB0cmFuc2l0aW9uIHN0eWxlc1xuICB2YXIgY2xlYW5TdHlsZSA9IHt9O1xuICBmb3IgKCB2YXIgcHJvcCBpbiBzdHlsZSApIHtcbiAgICBjbGVhblN0eWxlWyBwcm9wIF0gPSAnJztcbiAgfVxuICB0aGlzLmNzcyggY2xlYW5TdHlsZSApO1xufTtcblxudmFyIGNsZWFuVHJhbnNpdGlvblN0eWxlID0ge1xuICB0cmFuc2l0aW9uUHJvcGVydHk6ICcnLFxuICB0cmFuc2l0aW9uRHVyYXRpb246ICcnLFxuICB0cmFuc2l0aW9uRGVsYXk6ICcnXG59O1xuXG5wcm90by5yZW1vdmVUcmFuc2l0aW9uU3R5bGVzID0gZnVuY3Rpb24oKSB7XG4gIC8vIHJlbW92ZSB0cmFuc2l0aW9uXG4gIHRoaXMuY3NzKCBjbGVhblRyYW5zaXRpb25TdHlsZSApO1xufTtcblxuLy8gLS0tLS0gc3RhZ2dlciAtLS0tLSAvL1xuXG5wcm90by5zdGFnZ2VyID0gZnVuY3Rpb24oIGRlbGF5ICkge1xuICBkZWxheSA9IGlzTmFOKCBkZWxheSApID8gMCA6IGRlbGF5O1xuICB0aGlzLnN0YWdnZXJEZWxheSA9IGRlbGF5ICsgJ21zJztcbn07XG5cbi8vIC0tLS0tIHNob3cvaGlkZS9yZW1vdmUgLS0tLS0gLy9cblxuLy8gcmVtb3ZlIGVsZW1lbnQgZnJvbSBET01cbnByb3RvLnJlbW92ZUVsZW0gPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIHRoaXMuZWxlbWVudCApO1xuICAvLyByZW1vdmUgZGlzcGxheTogbm9uZVxuICB0aGlzLmNzcyh7IGRpc3BsYXk6ICcnIH0pO1xuICB0aGlzLmVtaXRFdmVudCggJ3JlbW92ZScsIFsgdGhpcyBdICk7XG59O1xuXG5wcm90by5yZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgLy8ganVzdCByZW1vdmUgZWxlbWVudCBpZiBubyB0cmFuc2l0aW9uIHN1cHBvcnQgb3Igbm8gdHJhbnNpdGlvblxuICBpZiAoICF0cmFuc2l0aW9uUHJvcGVydHkgfHwgIXBhcnNlRmxvYXQoIHRoaXMubGF5b3V0Lm9wdGlvbnMudHJhbnNpdGlvbkR1cmF0aW9uICkgKSB7XG4gICAgdGhpcy5yZW1vdmVFbGVtKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gc3RhcnQgdHJhbnNpdGlvblxuICB0aGlzLm9uY2UoICd0cmFuc2l0aW9uRW5kJywgZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yZW1vdmVFbGVtKCk7XG4gIH0pO1xuICB0aGlzLmhpZGUoKTtcbn07XG5cbnByb3RvLnJldmVhbCA9IGZ1bmN0aW9uKCkge1xuICBkZWxldGUgdGhpcy5pc0hpZGRlbjtcbiAgLy8gcmVtb3ZlIGRpc3BsYXk6IG5vbmVcbiAgdGhpcy5jc3MoeyBkaXNwbGF5OiAnJyB9KTtcblxuICB2YXIgb3B0aW9ucyA9IHRoaXMubGF5b3V0Lm9wdGlvbnM7XG5cbiAgdmFyIG9uVHJhbnNpdGlvbkVuZCA9IHt9O1xuICB2YXIgdHJhbnNpdGlvbkVuZFByb3BlcnR5ID0gdGhpcy5nZXRIaWRlUmV2ZWFsVHJhbnNpdGlvbkVuZFByb3BlcnR5KCd2aXNpYmxlU3R5bGUnKTtcbiAgb25UcmFuc2l0aW9uRW5kWyB0cmFuc2l0aW9uRW5kUHJvcGVydHkgXSA9IHRoaXMub25SZXZlYWxUcmFuc2l0aW9uRW5kO1xuXG4gIHRoaXMudHJhbnNpdGlvbih7XG4gICAgZnJvbTogb3B0aW9ucy5oaWRkZW5TdHlsZSxcbiAgICB0bzogb3B0aW9ucy52aXNpYmxlU3R5bGUsXG4gICAgaXNDbGVhbmluZzogdHJ1ZSxcbiAgICBvblRyYW5zaXRpb25FbmQ6IG9uVHJhbnNpdGlvbkVuZFxuICB9KTtcbn07XG5cbnByb3RvLm9uUmV2ZWFsVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uKCkge1xuICAvLyBjaGVjayBpZiBzdGlsbCB2aXNpYmxlXG4gIC8vIGR1cmluZyB0cmFuc2l0aW9uLCBpdGVtIG1heSBoYXZlIGJlZW4gaGlkZGVuXG4gIGlmICggIXRoaXMuaXNIaWRkZW4gKSB7XG4gICAgdGhpcy5lbWl0RXZlbnQoJ3JldmVhbCcpO1xuICB9XG59O1xuXG4vKipcbiAqIGdldCBzdHlsZSBwcm9wZXJ0eSB1c2UgZm9yIGhpZGUvcmV2ZWFsIHRyYW5zaXRpb24gZW5kXG4gKiBAcGFyYW0ge1N0cmluZ30gc3R5bGVQcm9wZXJ0eSAtIGhpZGRlblN0eWxlL3Zpc2libGVTdHlsZVxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xucHJvdG8uZ2V0SGlkZVJldmVhbFRyYW5zaXRpb25FbmRQcm9wZXJ0eSA9IGZ1bmN0aW9uKCBzdHlsZVByb3BlcnR5ICkge1xuICB2YXIgb3B0aW9uU3R5bGUgPSB0aGlzLmxheW91dC5vcHRpb25zWyBzdHlsZVByb3BlcnR5IF07XG4gIC8vIHVzZSBvcGFjaXR5XG4gIGlmICggb3B0aW9uU3R5bGUub3BhY2l0eSApIHtcbiAgICByZXR1cm4gJ29wYWNpdHknO1xuICB9XG4gIC8vIGdldCBmaXJzdCBwcm9wZXJ0eVxuICBmb3IgKCB2YXIgcHJvcCBpbiBvcHRpb25TdHlsZSApIHtcbiAgICByZXR1cm4gcHJvcDtcbiAgfVxufTtcblxucHJvdG8uaGlkZSA9IGZ1bmN0aW9uKCkge1xuICAvLyBzZXQgZmxhZ1xuICB0aGlzLmlzSGlkZGVuID0gdHJ1ZTtcbiAgLy8gcmVtb3ZlIGRpc3BsYXk6IG5vbmVcbiAgdGhpcy5jc3MoeyBkaXNwbGF5OiAnJyB9KTtcblxuICB2YXIgb3B0aW9ucyA9IHRoaXMubGF5b3V0Lm9wdGlvbnM7XG5cbiAgdmFyIG9uVHJhbnNpdGlvbkVuZCA9IHt9O1xuICB2YXIgdHJhbnNpdGlvbkVuZFByb3BlcnR5ID0gdGhpcy5nZXRIaWRlUmV2ZWFsVHJhbnNpdGlvbkVuZFByb3BlcnR5KCdoaWRkZW5TdHlsZScpO1xuICBvblRyYW5zaXRpb25FbmRbIHRyYW5zaXRpb25FbmRQcm9wZXJ0eSBdID0gdGhpcy5vbkhpZGVUcmFuc2l0aW9uRW5kO1xuXG4gIHRoaXMudHJhbnNpdGlvbih7XG4gICAgZnJvbTogb3B0aW9ucy52aXNpYmxlU3R5bGUsXG4gICAgdG86IG9wdGlvbnMuaGlkZGVuU3R5bGUsXG4gICAgLy8ga2VlcCBoaWRkZW4gc3R1ZmYgaGlkZGVuXG4gICAgaXNDbGVhbmluZzogdHJ1ZSxcbiAgICBvblRyYW5zaXRpb25FbmQ6IG9uVHJhbnNpdGlvbkVuZFxuICB9KTtcbn07XG5cbnByb3RvLm9uSGlkZVRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbigpIHtcbiAgLy8gY2hlY2sgaWYgc3RpbGwgaGlkZGVuXG4gIC8vIGR1cmluZyB0cmFuc2l0aW9uLCBpdGVtIG1heSBoYXZlIGJlZW4gdW4taGlkZGVuXG4gIGlmICggdGhpcy5pc0hpZGRlbiApIHtcbiAgICB0aGlzLmNzcyh7IGRpc3BsYXk6ICdub25lJyB9KTtcbiAgICB0aGlzLmVtaXRFdmVudCgnaGlkZScpO1xuICB9XG59O1xuXG5wcm90by5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuY3NzKHtcbiAgICBwb3NpdGlvbjogJycsXG4gICAgbGVmdDogJycsXG4gICAgcmlnaHQ6ICcnLFxuICAgIHRvcDogJycsXG4gICAgYm90dG9tOiAnJyxcbiAgICB0cmFuc2l0aW9uOiAnJyxcbiAgICB0cmFuc2Zvcm06ICcnXG4gIH0pO1xufTtcblxucmV0dXJuIEl0ZW07XG5cbn0pKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L291dGxheWVyL2l0ZW0uanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBJc290b3BlIExheW91dE1vZGVcbiAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqLyAvKmdsb2JhbHMgZGVmaW5lLCBtb2R1bGUsIHJlcXVpcmUgKi9cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIFtcbiAgICAgICAgJ2dldC1zaXplL2dldC1zaXplJyxcbiAgICAgICAgJ291dGxheWVyL291dGxheWVyJ1xuICAgICAgXSxcbiAgICAgIGZhY3RvcnkgKTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHJlcXVpcmUoJ2dldC1zaXplJyksXG4gICAgICByZXF1aXJlKCdvdXRsYXllcicpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5Jc290b3BlID0gd2luZG93Lklzb3RvcGUgfHwge307XG4gICAgd2luZG93Lklzb3RvcGUuTGF5b3V0TW9kZSA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3cuZ2V0U2l6ZSxcbiAgICAgIHdpbmRvdy5PdXRsYXllclxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCBnZXRTaXplLCBPdXRsYXllciApIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIGxheW91dCBtb2RlIGNsYXNzXG4gIGZ1bmN0aW9uIExheW91dE1vZGUoIGlzb3RvcGUgKSB7XG4gICAgdGhpcy5pc290b3BlID0gaXNvdG9wZTtcbiAgICAvLyBsaW5rIHByb3BlcnRpZXNcbiAgICBpZiAoIGlzb3RvcGUgKSB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBpc290b3BlLm9wdGlvbnNbIHRoaXMubmFtZXNwYWNlIF07XG4gICAgICB0aGlzLmVsZW1lbnQgPSBpc290b3BlLmVsZW1lbnQ7XG4gICAgICB0aGlzLml0ZW1zID0gaXNvdG9wZS5maWx0ZXJlZEl0ZW1zO1xuICAgICAgdGhpcy5zaXplID0gaXNvdG9wZS5zaXplO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwcm90byA9IExheW91dE1vZGUucHJvdG90eXBlO1xuXG4gIC8qKlxuICAgKiBzb21lIG1ldGhvZHMgc2hvdWxkIGp1c3QgZGVmZXIgdG8gZGVmYXVsdCBPdXRsYXllciBtZXRob2RcbiAgICogYW5kIHJlZmVyZW5jZSB0aGUgSXNvdG9wZSBpbnN0YW5jZSBhcyBgdGhpc2BcbiAgKiovXG4gIHZhciBmYWNhZGVNZXRob2RzID0gW1xuICAgICdfcmVzZXRMYXlvdXQnLFxuICAgICdfZ2V0SXRlbUxheW91dFBvc2l0aW9uJyxcbiAgICAnX21hbmFnZVN0YW1wJyxcbiAgICAnX2dldENvbnRhaW5lclNpemUnLFxuICAgICdfZ2V0RWxlbWVudE9mZnNldCcsXG4gICAgJ25lZWRzUmVzaXplTGF5b3V0JyxcbiAgICAnX2dldE9wdGlvbidcbiAgXTtcblxuICBmYWNhZGVNZXRob2RzLmZvckVhY2goIGZ1bmN0aW9uKCBtZXRob2ROYW1lICkge1xuICAgIHByb3RvWyBtZXRob2ROYW1lIF0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBPdXRsYXllci5wcm90b3R5cGVbIG1ldGhvZE5hbWUgXS5hcHBseSggdGhpcy5pc290b3BlLCBhcmd1bWVudHMgKTtcbiAgICB9O1xuICB9KTtcblxuICAvLyAtLS0tLSAgLS0tLS0gLy9cblxuICAvLyBmb3IgaG9yaXpvbnRhbCBsYXlvdXQgbW9kZXMsIGNoZWNrIHZlcnRpY2FsIHNpemVcbiAgcHJvdG8ubmVlZHNWZXJ0aWNhbFJlc2l6ZUxheW91dCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIGRvbid0IHRyaWdnZXIgaWYgc2l6ZSBkaWQgbm90IGNoYW5nZVxuICAgIHZhciBzaXplID0gZ2V0U2l6ZSggdGhpcy5pc290b3BlLmVsZW1lbnQgKTtcbiAgICAvLyBjaGVjayB0aGF0IHRoaXMuc2l6ZSBhbmQgc2l6ZSBhcmUgdGhlcmVcbiAgICAvLyBJRTggdHJpZ2dlcnMgcmVzaXplIG9uIGJvZHkgc2l6ZSBjaGFuZ2UsIHNvIHRoZXkgbWlnaHQgbm90IGJlXG4gICAgdmFyIGhhc1NpemVzID0gdGhpcy5pc290b3BlLnNpemUgJiYgc2l6ZTtcbiAgICByZXR1cm4gaGFzU2l6ZXMgJiYgc2l6ZS5pbm5lckhlaWdodCAhPSB0aGlzLmlzb3RvcGUuc2l6ZS5pbm5lckhlaWdodDtcbiAgfTtcblxuICAvLyAtLS0tLSBtZWFzdXJlbWVudHMgLS0tLS0gLy9cblxuICBwcm90by5fZ2V0TWVhc3VyZW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmlzb3RvcGUuX2dldE1lYXN1cmVtZW50LmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcbiAgfTtcblxuICBwcm90by5nZXRDb2x1bW5XaWR0aCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZ2V0U2VnbWVudFNpemUoICdjb2x1bW4nLCAnV2lkdGgnICk7XG4gIH07XG5cbiAgcHJvdG8uZ2V0Um93SGVpZ2h0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5nZXRTZWdtZW50U2l6ZSggJ3JvdycsICdIZWlnaHQnICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIGdldCBjb2x1bW5XaWR0aCBvciByb3dIZWlnaHRcbiAgICogc2VnbWVudDogJ2NvbHVtbicgb3IgJ3JvdydcbiAgICogc2l6ZSAnV2lkdGgnIG9yICdIZWlnaHQnXG4gICoqL1xuICBwcm90by5nZXRTZWdtZW50U2l6ZSA9IGZ1bmN0aW9uKCBzZWdtZW50LCBzaXplICkge1xuICAgIHZhciBzZWdtZW50TmFtZSA9IHNlZ21lbnQgKyBzaXplO1xuICAgIHZhciBvdXRlclNpemUgPSAnb3V0ZXInICsgc2l6ZTtcbiAgICAvLyBjb2x1bW5XaWR0aCAvIG91dGVyV2lkdGggLy8gcm93SGVpZ2h0IC8gb3V0ZXJIZWlnaHRcbiAgICB0aGlzLl9nZXRNZWFzdXJlbWVudCggc2VnbWVudE5hbWUsIG91dGVyU2l6ZSApO1xuICAgIC8vIGdvdCByb3dIZWlnaHQgb3IgY29sdW1uV2lkdGgsIHdlIGNhbiBjaGlsbFxuICAgIGlmICggdGhpc1sgc2VnbWVudE5hbWUgXSApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gZmFsbCBiYWNrIHRvIGl0ZW0gb2YgZmlyc3QgZWxlbWVudFxuICAgIHZhciBmaXJzdEl0ZW1TaXplID0gdGhpcy5nZXRGaXJzdEl0ZW1TaXplKCk7XG4gICAgdGhpc1sgc2VnbWVudE5hbWUgXSA9IGZpcnN0SXRlbVNpemUgJiYgZmlyc3RJdGVtU2l6ZVsgb3V0ZXJTaXplIF0gfHxcbiAgICAgIC8vIG9yIHNpemUgb2YgY29udGFpbmVyXG4gICAgICB0aGlzLmlzb3RvcGUuc2l6ZVsgJ2lubmVyJyArIHNpemUgXTtcbiAgfTtcblxuICBwcm90by5nZXRGaXJzdEl0ZW1TaXplID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGZpcnN0SXRlbSA9IHRoaXMuaXNvdG9wZS5maWx0ZXJlZEl0ZW1zWzBdO1xuICAgIHJldHVybiBmaXJzdEl0ZW0gJiYgZmlyc3RJdGVtLmVsZW1lbnQgJiYgZ2V0U2l6ZSggZmlyc3RJdGVtLmVsZW1lbnQgKTtcbiAgfTtcblxuICAvLyAtLS0tLSBtZXRob2RzIHRoYXQgc2hvdWxkIHJlZmVyZW5jZSBpc290b3BlIC0tLS0tIC8vXG5cbiAgcHJvdG8ubGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pc290b3BlLmxheW91dC5hcHBseSggdGhpcy5pc290b3BlLCBhcmd1bWVudHMgKTtcbiAgfTtcblxuICBwcm90by5nZXRTaXplID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pc290b3BlLmdldFNpemUoKTtcbiAgICB0aGlzLnNpemUgPSB0aGlzLmlzb3RvcGUuc2l6ZTtcbiAgfTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjcmVhdGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICBMYXlvdXRNb2RlLm1vZGVzID0ge307XG5cbiAgTGF5b3V0TW9kZS5jcmVhdGUgPSBmdW5jdGlvbiggbmFtZXNwYWNlLCBvcHRpb25zICkge1xuXG4gICAgZnVuY3Rpb24gTW9kZSgpIHtcbiAgICAgIExheW91dE1vZGUuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuICAgIH1cblxuICAgIE1vZGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggcHJvdG8gKTtcbiAgICBNb2RlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE1vZGU7XG5cbiAgICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgICBpZiAoIG9wdGlvbnMgKSB7XG4gICAgICBNb2RlLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cblxuICAgIE1vZGUucHJvdG90eXBlLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcbiAgICAvLyByZWdpc3RlciBpbiBJc290b3BlXG4gICAgTGF5b3V0TW9kZS5tb2Rlc1sgbmFtZXNwYWNlIF0gPSBNb2RlO1xuXG4gICAgcmV0dXJuIE1vZGU7XG4gIH07XG5cbiAgcmV0dXJuIExheW91dE1vZGU7XG5cbn0pKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2lzb3RvcGUtbGF5b3V0L2pzL2xheW91dC1tb2RlLmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qIVxuICogTWFzb25yeSBsYXlvdXQgbW9kZVxuICogc3ViLWNsYXNzZXMgTWFzb25yeVxuICogaHR0cDovL21hc29ucnkuZGVzYW5kcm8uY29tXG4gKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi8gLypnbG9iYWxzIGRlZmluZSwgbW9kdWxlLCByZXF1aXJlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAgICcuLi9sYXlvdXQtbW9kZScsXG4gICAgICAgICdtYXNvbnJ5L21hc29ucnknXG4gICAgICBdLFxuICAgICAgZmFjdG9yeSApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgcmVxdWlyZSgnLi4vbGF5b3V0LW1vZGUnKSxcbiAgICAgIHJlcXVpcmUoJ21hc29ucnktbGF5b3V0JylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgZmFjdG9yeShcbiAgICAgIHdpbmRvdy5Jc290b3BlLkxheW91dE1vZGUsXG4gICAgICB3aW5kb3cuTWFzb25yeVxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCBMYXlvdXRNb2RlLCBNYXNvbnJ5ICkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtYXNvbnJ5RGVmaW5pdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4gIC8vIGNyZWF0ZSBhbiBPdXRsYXllciBsYXlvdXQgY2xhc3NcbiAgdmFyIE1hc29ucnlNb2RlID0gTGF5b3V0TW9kZS5jcmVhdGUoJ21hc29ucnknKTtcblxuICB2YXIgcHJvdG8gPSBNYXNvbnJ5TW9kZS5wcm90b3R5cGU7XG5cbiAgdmFyIGtlZXBNb2RlTWV0aG9kcyA9IHtcbiAgICBfZ2V0RWxlbWVudE9mZnNldDogdHJ1ZSxcbiAgICBsYXlvdXQ6IHRydWUsXG4gICAgX2dldE1lYXN1cmVtZW50OiB0cnVlXG4gIH07XG5cbiAgLy8gaW5oZXJpdCBNYXNvbnJ5IHByb3RvdHlwZVxuICBmb3IgKCB2YXIgbWV0aG9kIGluIE1hc29ucnkucHJvdG90eXBlICkge1xuICAgIC8vIGRvIG5vdCBpbmhlcml0IG1vZGUgbWV0aG9kc1xuICAgIGlmICggIWtlZXBNb2RlTWV0aG9kc1sgbWV0aG9kIF0gKSB7XG4gICAgICBwcm90b1sgbWV0aG9kIF0gPSBNYXNvbnJ5LnByb3RvdHlwZVsgbWV0aG9kIF07XG4gICAgfVxuICB9XG5cbiAgdmFyIG1lYXN1cmVDb2x1bW5zID0gcHJvdG8ubWVhc3VyZUNvbHVtbnM7XG4gIHByb3RvLm1lYXN1cmVDb2x1bW5zID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gc2V0IGl0ZW1zLCB1c2VkIGlmIG1lYXN1cmluZyBmaXJzdCBpdGVtXG4gICAgdGhpcy5pdGVtcyA9IHRoaXMuaXNvdG9wZS5maWx0ZXJlZEl0ZW1zO1xuICAgIG1lYXN1cmVDb2x1bW5zLmNhbGwoIHRoaXMgKTtcbiAgfTtcblxuICAvLyBwb2ludCB0byBtb2RlIG9wdGlvbnMgZm9yIGZpdFdpZHRoXG4gIHZhciBfZ2V0T3B0aW9uID0gcHJvdG8uX2dldE9wdGlvbjtcbiAgcHJvdG8uX2dldE9wdGlvbiA9IGZ1bmN0aW9uKCBvcHRpb24gKSB7XG4gICAgaWYgKCBvcHRpb24gPT0gJ2ZpdFdpZHRoJyApIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaXNGaXRXaWR0aCAhPT0gdW5kZWZpbmVkID9cbiAgICAgICAgdGhpcy5vcHRpb25zLmlzRml0V2lkdGggOiB0aGlzLm9wdGlvbnMuZml0V2lkdGg7XG4gICAgfVxuICAgIHJldHVybiBfZ2V0T3B0aW9uLmFwcGx5KCB0aGlzLmlzb3RvcGUsIGFyZ3VtZW50cyApO1xuICB9O1xuXG4gIHJldHVybiBNYXNvbnJ5TW9kZTtcblxufSkpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaXNvdG9wZS1sYXlvdXQvanMvbGF5b3V0LW1vZGVzL21hc29ucnkuanNcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyohXG4gKiBNYXNvbnJ5IHY0LjEuMFxuICogQ2FzY2FkaW5nIGdyaWQgbGF5b3V0IGxpYnJhcnlcbiAqIGh0dHA6Ly9tYXNvbnJ5LmRlc2FuZHJvLmNvbVxuICogTUlUIExpY2Vuc2VcbiAqIGJ5IERhdmlkIERlU2FuZHJvXG4gKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi8gLypnbG9iYWxzIGRlZmluZSwgbW9kdWxlLCByZXF1aXJlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAgICdvdXRsYXllci9vdXRsYXllcicsXG4gICAgICAgICdnZXQtc2l6ZS9nZXQtc2l6ZSdcbiAgICAgIF0sXG4gICAgICBmYWN0b3J5ICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICByZXF1aXJlKCdvdXRsYXllcicpLFxuICAgICAgcmVxdWlyZSgnZ2V0LXNpemUnKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuTWFzb25yeSA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3cuT3V0bGF5ZXIsXG4gICAgICB3aW5kb3cuZ2V0U2l6ZVxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCBPdXRsYXllciwgZ2V0U2l6ZSApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtYXNvbnJ5RGVmaW5pdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4gIC8vIGNyZWF0ZSBhbiBPdXRsYXllciBsYXlvdXQgY2xhc3NcbiAgdmFyIE1hc29ucnkgPSBPdXRsYXllci5jcmVhdGUoJ21hc29ucnknKTtcbiAgLy8gaXNGaXRXaWR0aCAtPiBmaXRXaWR0aFxuICBNYXNvbnJ5LmNvbXBhdE9wdGlvbnMuZml0V2lkdGggPSAnaXNGaXRXaWR0aCc7XG5cbiAgTWFzb25yeS5wcm90b3R5cGUuX3Jlc2V0TGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5nZXRTaXplKCk7XG4gICAgdGhpcy5fZ2V0TWVhc3VyZW1lbnQoICdjb2x1bW5XaWR0aCcsICdvdXRlcldpZHRoJyApO1xuICAgIHRoaXMuX2dldE1lYXN1cmVtZW50KCAnZ3V0dGVyJywgJ291dGVyV2lkdGgnICk7XG4gICAgdGhpcy5tZWFzdXJlQ29sdW1ucygpO1xuXG4gICAgLy8gcmVzZXQgY29sdW1uIFlcbiAgICB0aGlzLmNvbFlzID0gW107XG4gICAgZm9yICggdmFyIGk9MDsgaSA8IHRoaXMuY29sczsgaSsrICkge1xuICAgICAgdGhpcy5jb2xZcy5wdXNoKCAwICk7XG4gICAgfVxuXG4gICAgdGhpcy5tYXhZID0gMDtcbiAgfTtcblxuICBNYXNvbnJ5LnByb3RvdHlwZS5tZWFzdXJlQ29sdW1ucyA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZ2V0Q29udGFpbmVyV2lkdGgoKTtcbiAgICAvLyBpZiBjb2x1bW5XaWR0aCBpcyAwLCBkZWZhdWx0IHRvIG91dGVyV2lkdGggb2YgZmlyc3QgaXRlbVxuICAgIGlmICggIXRoaXMuY29sdW1uV2lkdGggKSB7XG4gICAgICB2YXIgZmlyc3RJdGVtID0gdGhpcy5pdGVtc1swXTtcbiAgICAgIHZhciBmaXJzdEl0ZW1FbGVtID0gZmlyc3RJdGVtICYmIGZpcnN0SXRlbS5lbGVtZW50O1xuICAgICAgLy8gY29sdW1uV2lkdGggZmFsbCBiYWNrIHRvIGl0ZW0gb2YgZmlyc3QgZWxlbWVudFxuICAgICAgdGhpcy5jb2x1bW5XaWR0aCA9IGZpcnN0SXRlbUVsZW0gJiYgZ2V0U2l6ZSggZmlyc3RJdGVtRWxlbSApLm91dGVyV2lkdGggfHxcbiAgICAgICAgLy8gaWYgZmlyc3QgZWxlbSBoYXMgbm8gd2lkdGgsIGRlZmF1bHQgdG8gc2l6ZSBvZiBjb250YWluZXJcbiAgICAgICAgdGhpcy5jb250YWluZXJXaWR0aDtcbiAgICB9XG5cbiAgICB2YXIgY29sdW1uV2lkdGggPSB0aGlzLmNvbHVtbldpZHRoICs9IHRoaXMuZ3V0dGVyO1xuXG4gICAgLy8gY2FsY3VsYXRlIGNvbHVtbnNcbiAgICB2YXIgY29udGFpbmVyV2lkdGggPSB0aGlzLmNvbnRhaW5lcldpZHRoICsgdGhpcy5ndXR0ZXI7XG4gICAgdmFyIGNvbHMgPSBjb250YWluZXJXaWR0aCAvIGNvbHVtbldpZHRoO1xuICAgIC8vIGZpeCByb3VuZGluZyBlcnJvcnMsIHR5cGljYWxseSB3aXRoIGd1dHRlcnNcbiAgICB2YXIgZXhjZXNzID0gY29sdW1uV2lkdGggLSBjb250YWluZXJXaWR0aCAlIGNvbHVtbldpZHRoO1xuICAgIC8vIGlmIG92ZXJzaG9vdCBpcyBsZXNzIHRoYW4gYSBwaXhlbCwgcm91bmQgdXAsIG90aGVyd2lzZSBmbG9vciBpdFxuICAgIHZhciBtYXRoTWV0aG9kID0gZXhjZXNzICYmIGV4Y2VzcyA8IDEgPyAncm91bmQnIDogJ2Zsb29yJztcbiAgICBjb2xzID0gTWF0aFsgbWF0aE1ldGhvZCBdKCBjb2xzICk7XG4gICAgdGhpcy5jb2xzID0gTWF0aC5tYXgoIGNvbHMsIDEgKTtcbiAgfTtcblxuICBNYXNvbnJ5LnByb3RvdHlwZS5nZXRDb250YWluZXJXaWR0aCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIGNvbnRhaW5lciBpcyBwYXJlbnQgaWYgZml0IHdpZHRoXG4gICAgdmFyIGlzRml0V2lkdGggPSB0aGlzLl9nZXRPcHRpb24oJ2ZpdFdpZHRoJyk7XG4gICAgdmFyIGNvbnRhaW5lciA9IGlzRml0V2lkdGggPyB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSA6IHRoaXMuZWxlbWVudDtcbiAgICAvLyBjaGVjayB0aGF0IHRoaXMuc2l6ZSBhbmQgc2l6ZSBhcmUgdGhlcmVcbiAgICAvLyBJRTggdHJpZ2dlcnMgcmVzaXplIG9uIGJvZHkgc2l6ZSBjaGFuZ2UsIHNvIHRoZXkgbWlnaHQgbm90IGJlXG4gICAgdmFyIHNpemUgPSBnZXRTaXplKCBjb250YWluZXIgKTtcbiAgICB0aGlzLmNvbnRhaW5lcldpZHRoID0gc2l6ZSAmJiBzaXplLmlubmVyV2lkdGg7XG4gIH07XG5cbiAgTWFzb25yeS5wcm90b3R5cGUuX2dldEl0ZW1MYXlvdXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCBpdGVtICkge1xuICAgIGl0ZW0uZ2V0U2l6ZSgpO1xuICAgIC8vIGhvdyBtYW55IGNvbHVtbnMgZG9lcyB0aGlzIGJyaWNrIHNwYW5cbiAgICB2YXIgcmVtYWluZGVyID0gaXRlbS5zaXplLm91dGVyV2lkdGggJSB0aGlzLmNvbHVtbldpZHRoO1xuICAgIHZhciBtYXRoTWV0aG9kID0gcmVtYWluZGVyICYmIHJlbWFpbmRlciA8IDEgPyAncm91bmQnIDogJ2NlaWwnO1xuICAgIC8vIHJvdW5kIGlmIG9mZiBieSAxIHBpeGVsLCBvdGhlcndpc2UgdXNlIGNlaWxcbiAgICB2YXIgY29sU3BhbiA9IE1hdGhbIG1hdGhNZXRob2QgXSggaXRlbS5zaXplLm91dGVyV2lkdGggLyB0aGlzLmNvbHVtbldpZHRoICk7XG4gICAgY29sU3BhbiA9IE1hdGgubWluKCBjb2xTcGFuLCB0aGlzLmNvbHMgKTtcblxuICAgIHZhciBjb2xHcm91cCA9IHRoaXMuX2dldENvbEdyb3VwKCBjb2xTcGFuICk7XG4gICAgLy8gZ2V0IHRoZSBtaW5pbXVtIFkgdmFsdWUgZnJvbSB0aGUgY29sdW1uc1xuICAgIHZhciBtaW5pbXVtWSA9IE1hdGgubWluLmFwcGx5KCBNYXRoLCBjb2xHcm91cCApO1xuICAgIHZhciBzaG9ydENvbEluZGV4ID0gY29sR3JvdXAuaW5kZXhPZiggbWluaW11bVkgKTtcblxuICAgIC8vIHBvc2l0aW9uIHRoZSBicmlja1xuICAgIHZhciBwb3NpdGlvbiA9IHtcbiAgICAgIHg6IHRoaXMuY29sdW1uV2lkdGggKiBzaG9ydENvbEluZGV4LFxuICAgICAgeTogbWluaW11bVlcbiAgICB9O1xuXG4gICAgLy8gYXBwbHkgc2V0SGVpZ2h0IHRvIG5lY2Vzc2FyeSBjb2x1bW5zXG4gICAgdmFyIHNldEhlaWdodCA9IG1pbmltdW1ZICsgaXRlbS5zaXplLm91dGVySGVpZ2h0O1xuICAgIHZhciBzZXRTcGFuID0gdGhpcy5jb2xzICsgMSAtIGNvbEdyb3VwLmxlbmd0aDtcbiAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBzZXRTcGFuOyBpKysgKSB7XG4gICAgICB0aGlzLmNvbFlzWyBzaG9ydENvbEluZGV4ICsgaSBdID0gc2V0SGVpZ2h0O1xuICAgIH1cblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbFNwYW4gLSBudW1iZXIgb2YgY29sdW1ucyB0aGUgZWxlbWVudCBzcGFuc1xuICAgKiBAcmV0dXJucyB7QXJyYXl9IGNvbEdyb3VwXG4gICAqL1xuICBNYXNvbnJ5LnByb3RvdHlwZS5fZ2V0Q29sR3JvdXAgPSBmdW5jdGlvbiggY29sU3BhbiApIHtcbiAgICBpZiAoIGNvbFNwYW4gPCAyICkge1xuICAgICAgLy8gaWYgYnJpY2sgc3BhbnMgb25seSBvbmUgY29sdW1uLCB1c2UgYWxsIHRoZSBjb2x1bW4gWXNcbiAgICAgIHJldHVybiB0aGlzLmNvbFlzO1xuICAgIH1cblxuICAgIHZhciBjb2xHcm91cCA9IFtdO1xuICAgIC8vIGhvdyBtYW55IGRpZmZlcmVudCBwbGFjZXMgY291bGQgdGhpcyBicmljayBmaXQgaG9yaXpvbnRhbGx5XG4gICAgdmFyIGdyb3VwQ291bnQgPSB0aGlzLmNvbHMgKyAxIC0gY29sU3BhbjtcbiAgICAvLyBmb3IgZWFjaCBncm91cCBwb3RlbnRpYWwgaG9yaXpvbnRhbCBwb3NpdGlvblxuICAgIGZvciAoIHZhciBpID0gMDsgaSA8IGdyb3VwQ291bnQ7IGkrKyApIHtcbiAgICAgIC8vIG1ha2UgYW4gYXJyYXkgb2YgY29sWSB2YWx1ZXMgZm9yIHRoYXQgb25lIGdyb3VwXG4gICAgICB2YXIgZ3JvdXBDb2xZcyA9IHRoaXMuY29sWXMuc2xpY2UoIGksIGkgKyBjb2xTcGFuICk7XG4gICAgICAvLyBhbmQgZ2V0IHRoZSBtYXggdmFsdWUgb2YgdGhlIGFycmF5XG4gICAgICBjb2xHcm91cFtpXSA9IE1hdGgubWF4LmFwcGx5KCBNYXRoLCBncm91cENvbFlzICk7XG4gICAgfVxuICAgIHJldHVybiBjb2xHcm91cDtcbiAgfTtcblxuICBNYXNvbnJ5LnByb3RvdHlwZS5fbWFuYWdlU3RhbXAgPSBmdW5jdGlvbiggc3RhbXAgKSB7XG4gICAgdmFyIHN0YW1wU2l6ZSA9IGdldFNpemUoIHN0YW1wICk7XG4gICAgdmFyIG9mZnNldCA9IHRoaXMuX2dldEVsZW1lbnRPZmZzZXQoIHN0YW1wICk7XG4gICAgLy8gZ2V0IHRoZSBjb2x1bW5zIHRoYXQgdGhpcyBzdGFtcCBhZmZlY3RzXG4gICAgdmFyIGlzT3JpZ2luTGVmdCA9IHRoaXMuX2dldE9wdGlvbignb3JpZ2luTGVmdCcpO1xuICAgIHZhciBmaXJzdFggPSBpc09yaWdpbkxlZnQgPyBvZmZzZXQubGVmdCA6IG9mZnNldC5yaWdodDtcbiAgICB2YXIgbGFzdFggPSBmaXJzdFggKyBzdGFtcFNpemUub3V0ZXJXaWR0aDtcbiAgICB2YXIgZmlyc3RDb2wgPSBNYXRoLmZsb29yKCBmaXJzdFggLyB0aGlzLmNvbHVtbldpZHRoICk7XG4gICAgZmlyc3RDb2wgPSBNYXRoLm1heCggMCwgZmlyc3RDb2wgKTtcbiAgICB2YXIgbGFzdENvbCA9IE1hdGguZmxvb3IoIGxhc3RYIC8gdGhpcy5jb2x1bW5XaWR0aCApO1xuICAgIC8vIGxhc3RDb2wgc2hvdWxkIG5vdCBnbyBvdmVyIGlmIG11bHRpcGxlIG9mIGNvbHVtbldpZHRoICM0MjVcbiAgICBsYXN0Q29sIC09IGxhc3RYICUgdGhpcy5jb2x1bW5XaWR0aCA/IDAgOiAxO1xuICAgIGxhc3RDb2wgPSBNYXRoLm1pbiggdGhpcy5jb2xzIC0gMSwgbGFzdENvbCApO1xuICAgIC8vIHNldCBjb2xZcyB0byBib3R0b20gb2YgdGhlIHN0YW1wXG5cbiAgICB2YXIgaXNPcmlnaW5Ub3AgPSB0aGlzLl9nZXRPcHRpb24oJ29yaWdpblRvcCcpO1xuICAgIHZhciBzdGFtcE1heFkgPSAoIGlzT3JpZ2luVG9wID8gb2Zmc2V0LnRvcCA6IG9mZnNldC5ib3R0b20gKSArXG4gICAgICBzdGFtcFNpemUub3V0ZXJIZWlnaHQ7XG4gICAgZm9yICggdmFyIGkgPSBmaXJzdENvbDsgaSA8PSBsYXN0Q29sOyBpKysgKSB7XG4gICAgICB0aGlzLmNvbFlzW2ldID0gTWF0aC5tYXgoIHN0YW1wTWF4WSwgdGhpcy5jb2xZc1tpXSApO1xuICAgIH1cbiAgfTtcblxuICBNYXNvbnJ5LnByb3RvdHlwZS5fZ2V0Q29udGFpbmVyU2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMubWF4WSA9IE1hdGgubWF4LmFwcGx5KCBNYXRoLCB0aGlzLmNvbFlzICk7XG4gICAgdmFyIHNpemUgPSB7XG4gICAgICBoZWlnaHQ6IHRoaXMubWF4WVxuICAgIH07XG5cbiAgICBpZiAoIHRoaXMuX2dldE9wdGlvbignZml0V2lkdGgnKSApIHtcbiAgICAgIHNpemUud2lkdGggPSB0aGlzLl9nZXRDb250YWluZXJGaXRXaWR0aCgpO1xuICAgIH1cblxuICAgIHJldHVybiBzaXplO1xuICB9O1xuXG4gIE1hc29ucnkucHJvdG90eXBlLl9nZXRDb250YWluZXJGaXRXaWR0aCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB1bnVzZWRDb2xzID0gMDtcbiAgICAvLyBjb3VudCB1bnVzZWQgY29sdW1uc1xuICAgIHZhciBpID0gdGhpcy5jb2xzO1xuICAgIHdoaWxlICggLS1pICkge1xuICAgICAgaWYgKCB0aGlzLmNvbFlzW2ldICE9PSAwICkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHVudXNlZENvbHMrKztcbiAgICB9XG4gICAgLy8gZml0IGNvbnRhaW5lciB0byBjb2x1bW5zIHRoYXQgaGF2ZSBiZWVuIHVzZWRcbiAgICByZXR1cm4gKCB0aGlzLmNvbHMgLSB1bnVzZWRDb2xzICkgKiB0aGlzLmNvbHVtbldpZHRoIC0gdGhpcy5ndXR0ZXI7XG4gIH07XG5cbiAgTWFzb25yeS5wcm90b3R5cGUubmVlZHNSZXNpemVMYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcHJldmlvdXNXaWR0aCA9IHRoaXMuY29udGFpbmVyV2lkdGg7XG4gICAgdGhpcy5nZXRDb250YWluZXJXaWR0aCgpO1xuICAgIHJldHVybiBwcmV2aW91c1dpZHRoICE9IHRoaXMuY29udGFpbmVyV2lkdGg7XG4gIH07XG5cbiAgcmV0dXJuIE1hc29ucnk7XG5cbn0pKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L21hc29ucnktbGF5b3V0L21hc29ucnkuanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBmaXRSb3dzIGxheW91dCBtb2RlXG4gKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi8gLypnbG9iYWxzIGRlZmluZSwgbW9kdWxlLCByZXF1aXJlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAgICcuLi9sYXlvdXQtbW9kZSdcbiAgICAgIF0sXG4gICAgICBmYWN0b3J5ICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgcmVxdWlyZSgnLi4vbGF5b3V0LW1vZGUnKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICBmYWN0b3J5KFxuICAgICAgd2luZG93Lklzb3RvcGUuTGF5b3V0TW9kZVxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCBMYXlvdXRNb2RlICkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgRml0Um93cyA9IExheW91dE1vZGUuY3JlYXRlKCdmaXRSb3dzJyk7XG5cbnZhciBwcm90byA9IEZpdFJvd3MucHJvdG90eXBlO1xuXG5wcm90by5fcmVzZXRMYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy54ID0gMDtcbiAgdGhpcy55ID0gMDtcbiAgdGhpcy5tYXhZID0gMDtcbiAgdGhpcy5fZ2V0TWVhc3VyZW1lbnQoICdndXR0ZXInLCAnb3V0ZXJXaWR0aCcgKTtcbn07XG5cbnByb3RvLl9nZXRJdGVtTGF5b3V0UG9zaXRpb24gPSBmdW5jdGlvbiggaXRlbSApIHtcbiAgaXRlbS5nZXRTaXplKCk7XG5cbiAgdmFyIGl0ZW1XaWR0aCA9IGl0ZW0uc2l6ZS5vdXRlcldpZHRoICsgdGhpcy5ndXR0ZXI7XG4gIC8vIGlmIHRoaXMgZWxlbWVudCBjYW5ub3QgZml0IGluIHRoZSBjdXJyZW50IHJvd1xuICB2YXIgY29udGFpbmVyV2lkdGggPSB0aGlzLmlzb3RvcGUuc2l6ZS5pbm5lcldpZHRoICsgdGhpcy5ndXR0ZXI7XG4gIGlmICggdGhpcy54ICE9PSAwICYmIGl0ZW1XaWR0aCArIHRoaXMueCA+IGNvbnRhaW5lcldpZHRoICkge1xuICAgIHRoaXMueCA9IDA7XG4gICAgdGhpcy55ID0gdGhpcy5tYXhZO1xuICB9XG5cbiAgdmFyIHBvc2l0aW9uID0ge1xuICAgIHg6IHRoaXMueCxcbiAgICB5OiB0aGlzLnlcbiAgfTtcblxuICB0aGlzLm1heFkgPSBNYXRoLm1heCggdGhpcy5tYXhZLCB0aGlzLnkgKyBpdGVtLnNpemUub3V0ZXJIZWlnaHQgKTtcbiAgdGhpcy54ICs9IGl0ZW1XaWR0aDtcblxuICByZXR1cm4gcG9zaXRpb247XG59O1xuXG5wcm90by5fZ2V0Q29udGFpbmVyU2l6ZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4geyBoZWlnaHQ6IHRoaXMubWF4WSB9O1xufTtcblxucmV0dXJuIEZpdFJvd3M7XG5cbn0pKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2lzb3RvcGUtbGF5b3V0L2pzL2xheW91dC1tb2Rlcy9maXQtcm93cy5qc1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIHZlcnRpY2FsIGxheW91dCBtb2RlXG4gKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi8gLypnbG9iYWxzIGRlZmluZSwgbW9kdWxlLCByZXF1aXJlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAgICcuLi9sYXlvdXQtbW9kZSdcbiAgICAgIF0sXG4gICAgICBmYWN0b3J5ICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICByZXF1aXJlKCcuLi9sYXlvdXQtbW9kZScpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIGZhY3RvcnkoXG4gICAgICB3aW5kb3cuSXNvdG9wZS5MYXlvdXRNb2RlXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIExheW91dE1vZGUgKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBWZXJ0aWNhbCA9IExheW91dE1vZGUuY3JlYXRlKCAndmVydGljYWwnLCB7XG4gIGhvcml6b250YWxBbGlnbm1lbnQ6IDBcbn0pO1xuXG52YXIgcHJvdG8gPSBWZXJ0aWNhbC5wcm90b3R5cGU7XG5cbnByb3RvLl9yZXNldExheW91dCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnkgPSAwO1xufTtcblxucHJvdG8uX2dldEl0ZW1MYXlvdXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCBpdGVtICkge1xuICBpdGVtLmdldFNpemUoKTtcbiAgdmFyIHggPSAoIHRoaXMuaXNvdG9wZS5zaXplLmlubmVyV2lkdGggLSBpdGVtLnNpemUub3V0ZXJXaWR0aCApICpcbiAgICB0aGlzLm9wdGlvbnMuaG9yaXpvbnRhbEFsaWdubWVudDtcbiAgdmFyIHkgPSB0aGlzLnk7XG4gIHRoaXMueSArPSBpdGVtLnNpemUub3V0ZXJIZWlnaHQ7XG4gIHJldHVybiB7IHg6IHgsIHk6IHkgfTtcbn07XG5cbnByb3RvLl9nZXRDb250YWluZXJTaXplID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7IGhlaWdodDogdGhpcy55IH07XG59O1xuXG5yZXR1cm4gVmVydGljYWw7XG5cbn0pKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2lzb3RvcGUtbGF5b3V0L2pzL2xheW91dC1tb2Rlcy92ZXJ0aWNhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIElzb3RvcGUgSXRlbVxuKiovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgcmVxdWlyZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgICAnb3V0bGF5ZXIvb3V0bGF5ZXInXG4gICAgICBdLFxuICAgICAgZmFjdG9yeSApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgcmVxdWlyZSgnb3V0bGF5ZXInKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuSXNvdG9wZSA9IHdpbmRvdy5Jc290b3BlIHx8IHt9O1xuICAgIHdpbmRvdy5Jc290b3BlLkl0ZW0gPSBmYWN0b3J5KFxuICAgICAgd2luZG93Lk91dGxheWVyXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIE91dGxheWVyICkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJdGVtIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIHN1Yi1jbGFzcyBPdXRsYXllciBJdGVtXG5mdW5jdGlvbiBJdGVtKCkge1xuICBPdXRsYXllci5JdGVtLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcbn1cblxudmFyIHByb3RvID0gSXRlbS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBPdXRsYXllci5JdGVtLnByb3RvdHlwZSApO1xuXG52YXIgX2NyZWF0ZSA9IHByb3RvLl9jcmVhdGU7XG5wcm90by5fY3JlYXRlID0gZnVuY3Rpb24oKSB7XG4gIC8vIGFzc2lnbiBpZCwgdXNlZCBmb3Igb3JpZ2luYWwtb3JkZXIgc29ydGluZ1xuICB0aGlzLmlkID0gdGhpcy5sYXlvdXQuaXRlbUdVSUQrKztcbiAgX2NyZWF0ZS5jYWxsKCB0aGlzICk7XG4gIHRoaXMuc29ydERhdGEgPSB7fTtcbn07XG5cbnByb3RvLnVwZGF0ZVNvcnREYXRhID0gZnVuY3Rpb24oKSB7XG4gIGlmICggdGhpcy5pc0lnbm9yZWQgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGRlZmF1bHQgc29ydGVyc1xuICB0aGlzLnNvcnREYXRhLmlkID0gdGhpcy5pZDtcbiAgLy8gZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbiAgdGhpcy5zb3J0RGF0YVsnb3JpZ2luYWwtb3JkZXInXSA9IHRoaXMuaWQ7XG4gIHRoaXMuc29ydERhdGEucmFuZG9tID0gTWF0aC5yYW5kb20oKTtcbiAgLy8gZ28gdGhydSBnZXRTb3J0RGF0YSBvYmogYW5kIGFwcGx5IHRoZSBzb3J0ZXJzXG4gIHZhciBnZXRTb3J0RGF0YSA9IHRoaXMubGF5b3V0Lm9wdGlvbnMuZ2V0U29ydERhdGE7XG4gIHZhciBzb3J0ZXJzID0gdGhpcy5sYXlvdXQuX3NvcnRlcnM7XG4gIGZvciAoIHZhciBrZXkgaW4gZ2V0U29ydERhdGEgKSB7XG4gICAgdmFyIHNvcnRlciA9IHNvcnRlcnNbIGtleSBdO1xuICAgIHRoaXMuc29ydERhdGFbIGtleSBdID0gc29ydGVyKCB0aGlzLmVsZW1lbnQsIHRoaXMgKTtcbiAgfVxufTtcblxudmFyIF9kZXN0cm95ID0gcHJvdG8uZGVzdHJveTtcbnByb3RvLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgLy8gY2FsbCBzdXBlclxuICBfZGVzdHJveS5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG4gIC8vIHJlc2V0IGRpc3BsYXksICM3NDFcbiAgdGhpcy5jc3Moe1xuICAgIGRpc3BsYXk6ICcnXG4gIH0pO1xufTtcblxucmV0dXJuIEl0ZW07XG5cbn0pKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2lzb3RvcGUtbGF5b3V0L2pzL2l0ZW0uanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG5cbi8vIEJMT0cgR1JJRFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGVxdWFsSGVpZ2h0KCBpdGVtcyApIHtcblxuICAgIC8vIE1BWCBIRUlHSFQgVkFMVUVcbiAgICB2YXIgbWF4SGVpZ2h0ID0gMDtcblxuICAgIC8vIEdFVCBBTEwgTElTVCBJVEVNU1xuICAgIHZhciBsaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCBpdGVtcyApO1xuXG4gICAgLy8gR0VUIFRBTExFU1QgTElTVCBJVEVNIFZBTFVFXG4gICAgZm9yICggdmFyIGkgPSAwOyBpIDwgbGlzdEl0ZW1zLmxlbmd0aDsgaSsrICkge1xuICAgICAgICBsaXN0SXRlbXNbaV0uc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICAgICAgICB2YXIgbGlzdEl0ZW1IZWlnaHQgPSBsaXN0SXRlbXNbaV0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBtYXhIZWlnaHQgPSBtYXhIZWlnaHQgPCBsaXN0SXRlbUhlaWdodCA/IGxpc3RJdGVtSGVpZ2h0IDogbWF4SGVpZ2h0O1xuICAgIH1cblxuICAgIC8vIFNFVCBIRUlHSFQgRk9SIEFMTCBMSVNUIElURU1TXG4gICAgZm9yICggdmFyIGogPSAwOyBqIDwgbGlzdEl0ZW1zLmxlbmd0aDsgaisrICkge1xuICAgICAgICBsaXN0SXRlbXNbal0uc3R5bGUuaGVpZ2h0ID0gbWF4SGVpZ2h0ICsgJ3B4JztcbiAgICB9XG5cbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgIGVxdWFsSGVpZ2h0KCAnLmJsb2dfX2l0ZW0nICk7XG59LCBmYWxzZSApO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcbiAgICBlcXVhbEhlaWdodCggJy5ibG9nX19pdGVtJyApO1xufSwgZmFsc2UgKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9tYXJrdXAvY29tcG9uZW50cy9ibG9jay1ibG9nL2Jsb2NrLWJsb2cuanNcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gVEVTVElNT05JQUxTIFNMSURFUlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnZhciBzd2lwZXIgPSByZXF1aXJlKCAnc3dpcGVyJyApO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgc3dpcGVyKCAnLnRlc3RpbW9uaWFscyAuc3dpcGVyLWNvbnRhaW5lcicsIHtcbiAgICAgICAgcGFnaW5hdGlvbjogJy50ZXN0aW1vbmlhbHMgLnN3aXBlci1wYWdpbmF0aW9uJyxcbiAgICAgICAgcGFnaW5hdGlvbkNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgICAgIDUwMDoge1xuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiAyMDAwLFxuICAgICAgICAgICAgICAgIHNwZWVkOiAxMDAwLFxuICAgICAgICAgICAgICAgIGdyYWJDdXJzb3I6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufSwgZmFsc2UgKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9tYXJrdXAvY29tcG9uZW50cy9ibG9jay10ZXN0aW1vbmlhbHMvYmxvY2stdGVzdGltb25pYWxzLmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxuLy8gR09PR0xFIE1BUFNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG52YXIgR29vZ2xlTWFwc0xvYWRlciA9IHJlcXVpcmUoICdnb29nbGUtbWFwcycgKTtcblxuR29vZ2xlTWFwc0xvYWRlci5sb2FkKCBmdW5jdGlvbiAoIGdvb2dsZSApIHtcblxuICAgIEdvb2dsZU1hcHNMb2FkZXIuTEFOR1VBR0UgPSAnZW4nO1xuICAgIEdvb2dsZU1hcHNMb2FkZXIuS0VZID0gJ0FJemFTeUFqdW5Jc2RCenduNW4wSWhISmN0SWc0UFBDTWxIN3UyNCc7XG4gICAgdmFyIGJyYW1wdG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJyNtYXAnICk7XG4gICAgdmFyIGJyYW1wdG9uQ29vcmRzID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyggNTEuNTIyMDUzNSwgMC4wNDE5Mjg5ICk7XG4gICAgdmFyIHpvb21WYWx1ZSA9IDE1O1xuICAgIHZhciBtYXJrZXJQYXRoID0gJ3N0YXRpYy9pbWcvYXNzZXRzL2Jsb2NrLW1hcC9sb2NhdGlvbi1pY29uLnBuZyc7XG5cbiAgICB2YXIgYnJhbXB0b25NYXBTdHlsZXMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAnd2F0ZXInLFxuICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsXG4gICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnI2U5ZTllOSd9LCB7bGlnaHRuZXNzOiAxN31dXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAnbGFuZHNjYXBlJyxcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLFxuICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyNmNWY1ZjUnfSwge2xpZ2h0bmVzczogMjB9XVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3JvYWQuaGlnaHdheScsXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5LmZpbGwnLFxuICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyNmZmZmZmYnfSwge2xpZ2h0bmVzczogMTd9XVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3JvYWQuaGlnaHdheScsXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5LnN0cm9rZScsXG4gICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnI2ZmZmZmZid9LCB7bGlnaHRuZXNzOiAyOX0sIHt3ZWlnaHQ6IDAuMn1dXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncm9hZC5hcnRlcmlhbCcsXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5JyxcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjZmZmZmZmJ30sIHtsaWdodG5lc3M6IDE4fV1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdyb2FkLmxvY2FsJyxcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLFxuICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyNmZmZmZmYnfSwge2xpZ2h0bmVzczogMTZ9XVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3BvaScsXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5JyxcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjZjVmNWY1J30sIHtsaWdodG5lc3M6IDIxfV1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdwb2kucGFyaycsXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5JyxcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjZGVkZWRlJ30sIHtsaWdodG5lc3M6IDIxfV1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5zdHJva2UnLFxuICAgICAgICAgICAgc3R5bGVyczogW3t2aXNpYmlsaXR5OiAnb24nfSwge2NvbG9yOiAnI2ZmZmZmZid9LCB7bGlnaHRuZXNzOiAxNn1dXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXG4gICAgICAgICAgICBzdHlsZXJzOiBbe3NhdHVyYXRpb246IDM2fSwge2NvbG9yOiAnIzMzMzMzMyd9LCB7bGlnaHRuZXNzOiA0MH1dXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLmljb24nLFxuICAgICAgICAgICAgc3R5bGVyczogW3t2aXNpYmlsaXR5OiAnb2ZmJ31dXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAndHJhbnNpdCcsXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5JyxcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiAnI2YyZjJmMicgfSwgeyBsaWdodG5lc3M6IDE5IH1dXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAnYWRtaW5pc3RyYXRpdmUnLFxuICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeS5maWxsJyxcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiAnI2ZlZmVmZScgfSwgeyBsaWdodG5lc3M6IDIwIH1dXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAnYWRtaW5pc3RyYXRpdmUnLFxuICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeS5zdHJva2UnLFxuICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6ICcjZmVmZWZlJyB9LCB7IGxpZ2h0bmVzczogMTcgfSwgeyB3ZWlnaHQ6IDEuMiB9XVxuICAgICAgICB9XG4gICAgXTtcblxuICAgIHZhciBicmFtcHRvblByb3BlcnRpZXMgPSB7XG4gICAgICAgIGNlbnRlcjogYnJhbXB0b25Db29yZHMsXG4gICAgICAgIHpvb206IHpvb21WYWx1ZSxcbiAgICAgICAgbWFwVHlwZUlkOiBnb29nbGUubWFwcy5NYXBUeXBlSWQuUk9BRE1BUCxcbiAgICAgICAgcGFuQ29udHJvbDogZmFsc2UsXG4gICAgICAgIHpvb21Db250cm9sOiBmYWxzZSxcbiAgICAgICAgbWFwVHlwZUNvbnRyb2w6IGZhbHNlLFxuICAgICAgICBzdHJlZXRWaWV3Q29udHJvbDogZmFsc2UsXG4gICAgICAgIHNjcm9sbHdoZWVsOiBmYWxzZSxcbiAgICAgICAgZGlzYWJsZURvdWJsZUNsaWNrWm9vbTogdHJ1ZSxcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICB2ZXJ2aWV3TWFwQ29udHJvbDogdHJ1ZSxcbiAgICAgICAgb3ZlcnZpZXdNYXBDb250cm9sT3B0aW9uczoge1xuICAgICAgICAgICAgb3BlbmVkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBzdHlsZXM6IGJyYW1wdG9uTWFwU3R5bGVzXG4gICAgfTtcblxuICAgIHZhciBicmFtcHRvbk1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoIGJyYW1wdG9uLCBicmFtcHRvblByb3BlcnRpZXMgKTtcblxuICAgIHZhciBicmFtcHRvbk1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICBwb3NpdGlvbjogYnJhbXB0b25Db29yZHMsXG4gICAgICAgIG1hcDogYnJhbXB0b25NYXAsXG4gICAgICAgIGljb246IG1hcmtlclBhdGgsXG4gICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgIGFuaW1hdGlvbjogZ29vZ2xlLm1hcHMuQW5pbWF0aW9uLkRST1BcbiAgICB9KTtcblxuICAgIHZhciBicmFtcHRvbkluZm8gPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7XG4gICAgICAgIGNvbnRlbnQ6ICdCcmFtcHRvbiBNYW5vciBBY2FkZW15J1xuICAgIH0pO1xuXG4gICAgYnJhbXB0b25NYXJrZXIuYWRkTGlzdGVuZXIoICdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYnJhbXB0b25JbmZvLm9wZW4oIGJyYW1wdG9uTWFwLCBicmFtcHRvbk1hcmtlciApO1xuICAgIH0pO1xuXG4gICAgLy8gTUFLRSBHT09HTEUgTUFQIFJFU1BPTlNJVkVcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgdmFyIGJyYW1wdG9uTWFwQ2VudGVyID0gYnJhbXB0b25NYXAuZ2V0Q2VudGVyKCk7IC8vIHJldHVybnMgdGhlIHBvc2l0aW9uIGRpc3BsYXllZCBhdCB0aGUgY2VudGVyIG9mIHRoZSBtYXBcblxuICAgIC8vIENFTlRFUiBHT09HTEUgTUFQUyBPTiBCUk9XU0VSIFJFU0laRSAoUkVTUE9OU0lWRSlcbiAgICBnb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lciggd2luZG93LCAncmVzaXplJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBicmFtcHRvbk1hcC5zZXRDZW50ZXIoIGJyYW1wdG9uTWFwQ2VudGVyICk7XG4gICAgfSk7XG5cbiAgICAvLyBSRVRVUk4gQ0VOVEVSIE9GIE1BUCBUTyBUSEUgQ0VOVEVSIE9GIFdJTkRPVyBJRiBNQVAgV0FTIE1PVkVEIEJZIFVTRVJcbiAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lciggYnJhbXB0b25NYXAsICdjZW50ZXJfY2hhbmdlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGJyYW1wdG9uTWFwLnNldENlbnRlciggYnJhbXB0b25NYXBDZW50ZXIgKTtcbiAgICAgICAgfSwgMzAwMCApO1xuICAgIH0pO1xuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9tYXJrdXAvY29tcG9uZW50cy9ibG9jay1tYXAvYmxvY2stbWFwLmpzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIihmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG5cblx0aWYgKHJvb3QgPT09IG51bGwpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0dvb2dsZS1tYXBzIHBhY2thZ2UgY2FuIGJlIHVzZWQgb25seSBpbiBicm93c2VyJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKGZhY3RvcnkpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHR9IGVsc2Uge1xuXHRcdHJvb3QuR29vZ2xlTWFwc0xvYWRlciA9IGZhY3RvcnkoKTtcblx0fVxuXG59KSh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IG51bGwsIGZ1bmN0aW9uKCkge1xuXG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cblx0dmFyIGdvb2dsZVZlcnNpb24gPSAnMy4xOCc7XG5cblx0dmFyIHNjcmlwdCA9IG51bGw7XG5cblx0dmFyIGdvb2dsZSA9IG51bGw7XG5cblx0dmFyIGxvYWRpbmcgPSBmYWxzZTtcblxuXHR2YXIgY2FsbGJhY2tzID0gW107XG5cblx0dmFyIG9uTG9hZEV2ZW50cyA9IFtdO1xuXG5cdHZhciBvcmlnaW5hbENyZWF0ZUxvYWRlck1ldGhvZCA9IG51bGw7XG5cblxuXHR2YXIgR29vZ2xlTWFwc0xvYWRlciA9IHt9O1xuXG5cblx0R29vZ2xlTWFwc0xvYWRlci5VUkwgPSAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzJztcblxuXHRHb29nbGVNYXBzTG9hZGVyLktFWSA9IG51bGw7XG5cblx0R29vZ2xlTWFwc0xvYWRlci5MSUJSQVJJRVMgPSBbXTtcblxuXHRHb29nbGVNYXBzTG9hZGVyLkNMSUVOVCA9IG51bGw7XG5cblx0R29vZ2xlTWFwc0xvYWRlci5DSEFOTkVMID0gbnVsbDtcblxuXHRHb29nbGVNYXBzTG9hZGVyLkxBTkdVQUdFID0gbnVsbDtcblxuXHRHb29nbGVNYXBzTG9hZGVyLlJFR0lPTiA9IG51bGw7XG5cblx0R29vZ2xlTWFwc0xvYWRlci5WRVJTSU9OID0gZ29vZ2xlVmVyc2lvbjtcblxuXHRHb29nbGVNYXBzTG9hZGVyLldJTkRPV19DQUxMQkFDS19OQU1FID0gJ19fZ29vZ2xlX21hcHNfYXBpX3Byb3ZpZGVyX2luaXRpYWxpemF0b3JfXyc7XG5cblxuXHRHb29nbGVNYXBzTG9hZGVyLl9nb29nbGVNb2NrQXBpT2JqZWN0ID0ge307XG5cblxuXHRHb29nbGVNYXBzTG9hZGVyLmxvYWQgPSBmdW5jdGlvbihmbikge1xuXHRcdGlmIChnb29nbGUgPT09IG51bGwpIHtcblx0XHRcdGlmIChsb2FkaW5nID09PSB0cnVlKSB7XG5cdFx0XHRcdGlmIChmbikge1xuXHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGZuKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bG9hZGluZyA9IHRydWU7XG5cblx0XHRcdFx0d2luZG93W0dvb2dsZU1hcHNMb2FkZXIuV0lORE9XX0NBTExCQUNLX05BTUVdID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmVhZHkoZm4pO1xuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdEdvb2dsZU1hcHNMb2FkZXIuY3JlYXRlTG9hZGVyKCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChmbikge1xuXHRcdFx0Zm4oZ29vZ2xlKTtcblx0XHR9XG5cdH07XG5cblxuXHRHb29nbGVNYXBzTG9hZGVyLmNyZWF0ZUxvYWRlciA9IGZ1bmN0aW9uKCkge1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXHRcdHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG5cdFx0c2NyaXB0LnNyYyA9IEdvb2dsZU1hcHNMb2FkZXIuY3JlYXRlVXJsKCk7XG5cblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG5cdH07XG5cblxuXHRHb29nbGVNYXBzTG9hZGVyLmlzTG9hZGVkID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGdvb2dsZSAhPT0gbnVsbDtcblx0fTtcblxuXG5cdEdvb2dsZU1hcHNMb2FkZXIuY3JlYXRlVXJsID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHVybCA9IEdvb2dsZU1hcHNMb2FkZXIuVVJMO1xuXG5cdFx0dXJsICs9ICc/Y2FsbGJhY2s9JyArIEdvb2dsZU1hcHNMb2FkZXIuV0lORE9XX0NBTExCQUNLX05BTUU7XG5cblx0XHRpZiAoR29vZ2xlTWFwc0xvYWRlci5LRVkpIHtcblx0XHRcdHVybCArPSAnJmtleT0nICsgR29vZ2xlTWFwc0xvYWRlci5LRVk7XG5cdFx0fVxuXG5cdFx0aWYgKEdvb2dsZU1hcHNMb2FkZXIuTElCUkFSSUVTLmxlbmd0aCA+IDApIHtcblx0XHRcdHVybCArPSAnJmxpYnJhcmllcz0nICsgR29vZ2xlTWFwc0xvYWRlci5MSUJSQVJJRVMuam9pbignLCcpO1xuXHRcdH1cblxuXHRcdGlmIChHb29nbGVNYXBzTG9hZGVyLkNMSUVOVCkge1xuXHRcdFx0dXJsICs9ICcmY2xpZW50PScgKyBHb29nbGVNYXBzTG9hZGVyLkNMSUVOVCArICcmdj0nICsgR29vZ2xlTWFwc0xvYWRlci5WRVJTSU9OO1xuXHRcdH1cblxuXHRcdGlmIChHb29nbGVNYXBzTG9hZGVyLkNIQU5ORUwpIHtcblx0XHRcdHVybCArPSAnJmNoYW5uZWw9JyArIEdvb2dsZU1hcHNMb2FkZXIuQ0hBTk5FTDtcblx0XHR9XG5cblx0XHRpZiAoR29vZ2xlTWFwc0xvYWRlci5MQU5HVUFHRSkge1xuXHRcdFx0dXJsICs9ICcmbGFuZ3VhZ2U9JyArIEdvb2dsZU1hcHNMb2FkZXIuTEFOR1VBR0U7XG5cdFx0fVxuXG5cdFx0aWYgKEdvb2dsZU1hcHNMb2FkZXIuUkVHSU9OKSB7XG5cdFx0XHR1cmwgKz0gJyZyZWdpb249JyArIEdvb2dsZU1hcHNMb2FkZXIuUkVHSU9OO1xuXHRcdH1cblxuXHRcdHJldHVybiB1cmw7XG5cdH07XG5cblxuXHRHb29nbGVNYXBzTG9hZGVyLnJlbGVhc2UgPSBmdW5jdGlvbihmbikge1xuXHRcdHZhciByZWxlYXNlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRHb29nbGVNYXBzTG9hZGVyLktFWSA9IG51bGw7XG5cdFx0XHRHb29nbGVNYXBzTG9hZGVyLkxJQlJBUklFUyA9IFtdO1xuXHRcdFx0R29vZ2xlTWFwc0xvYWRlci5DTElFTlQgPSBudWxsO1xuXHRcdFx0R29vZ2xlTWFwc0xvYWRlci5DSEFOTkVMID0gbnVsbDtcblx0XHRcdEdvb2dsZU1hcHNMb2FkZXIuTEFOR1VBR0UgPSBudWxsO1xuXHRcdFx0R29vZ2xlTWFwc0xvYWRlci5SRUdJT04gPSBudWxsO1xuXHRcdFx0R29vZ2xlTWFwc0xvYWRlci5WRVJTSU9OID0gZ29vZ2xlVmVyc2lvbjtcblxuXHRcdFx0Z29vZ2xlID0gbnVsbDtcblx0XHRcdGxvYWRpbmcgPSBmYWxzZTtcblx0XHRcdGNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0b25Mb2FkRXZlbnRzID0gW107XG5cblx0XHRcdGlmICh0eXBlb2Ygd2luZG93Lmdvb2dsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0ZGVsZXRlIHdpbmRvdy5nb29nbGU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0eXBlb2Ygd2luZG93W0dvb2dsZU1hcHNMb2FkZXIuV0lORE9XX0NBTExCQUNLX05BTUVdICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRkZWxldGUgd2luZG93W0dvb2dsZU1hcHNMb2FkZXIuV0lORE9XX0NBTExCQUNLX05BTUVdO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAob3JpZ2luYWxDcmVhdGVMb2FkZXJNZXRob2QgIT09IG51bGwpIHtcblx0XHRcdFx0R29vZ2xlTWFwc0xvYWRlci5jcmVhdGVMb2FkZXIgPSBvcmlnaW5hbENyZWF0ZUxvYWRlck1ldGhvZDtcblx0XHRcdFx0b3JpZ2luYWxDcmVhdGVMb2FkZXJNZXRob2QgPSBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc2NyaXB0ICE9PSBudWxsKSB7XG5cdFx0XHRcdHNjcmlwdC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0XHRcdHNjcmlwdCA9IG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChmbikge1xuXHRcdFx0XHRmbigpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRpZiAobG9hZGluZykge1xuXHRcdFx0R29vZ2xlTWFwc0xvYWRlci5sb2FkKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZWxlYXNlKCk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVsZWFzZSgpO1xuXHRcdH1cblx0fTtcblxuXG5cdEdvb2dsZU1hcHNMb2FkZXIub25Mb2FkID0gZnVuY3Rpb24oZm4pIHtcblx0XHRvbkxvYWRFdmVudHMucHVzaChmbik7XG5cdH07XG5cblxuXHRHb29nbGVNYXBzTG9hZGVyLm1ha2VNb2NrID0gZnVuY3Rpb24oKSB7XG5cdFx0b3JpZ2luYWxDcmVhdGVMb2FkZXJNZXRob2QgPSBHb29nbGVNYXBzTG9hZGVyLmNyZWF0ZUxvYWRlcjtcblxuXHRcdEdvb2dsZU1hcHNMb2FkZXIuY3JlYXRlTG9hZGVyID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR3aW5kb3cuZ29vZ2xlID0gR29vZ2xlTWFwc0xvYWRlci5fZ29vZ2xlTW9ja0FwaU9iamVjdDtcblx0XHRcdHdpbmRvd1tHb29nbGVNYXBzTG9hZGVyLldJTkRPV19DQUxMQkFDS19OQU1FXSgpO1xuXHRcdH07XG5cdH07XG5cblxuXHR2YXIgcmVhZHkgPSBmdW5jdGlvbihmbikge1xuXHRcdHZhciBpO1xuXG5cdFx0bG9hZGluZyA9IGZhbHNlO1xuXG5cdFx0aWYgKGdvb2dsZSA9PT0gbnVsbCkge1xuXHRcdFx0Z29vZ2xlID0gd2luZG93Lmdvb2dsZTtcblx0XHR9XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgb25Mb2FkRXZlbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRvbkxvYWRFdmVudHNbaV0oZ29vZ2xlKTtcblx0XHR9XG5cblx0XHRpZiAoZm4pIHtcblx0XHRcdGZuKGdvb2dsZSk7XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y2FsbGJhY2tzW2ldKGdvb2dsZSk7XG5cdFx0fVxuXG5cdFx0Y2FsbGJhY2tzID0gW107XG5cdH07XG5cblxuXHRyZXR1cm4gR29vZ2xlTWFwc0xvYWRlcjtcblxufSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9nb29nbGUtbWFwcy9saWIvR29vZ2xlLmpzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxuLy8gUEFHRSBCTE9HIEdSSURcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnZhciBpbWFnZXNMb2FkZWQgPSByZXF1aXJlKCAnaW1hZ2VzbG9hZGVkJyApO1xudmFyIElzb3RvcGVCbG9nID0gcmVxdWlyZSggJ2lzb3RvcGUtbGF5b3V0JyApO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGJsb2dHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5wYWdlLWJsb2dfX21haW4gLmJsb2ctZ3JpZCcgKTtcbiAgICB2YXIgYmxvZ0dyaWRTaXplciA9ICcuYmxvZy1ncmlkX19zaXplcic7XG4gICAgdmFyIGJsb2dHcmlkSXRlbSA9ICcuYmxvZy1ncmlkX19pdGVtJztcbiAgICB2YXIgYmxvZ0xheW91dDtcblxuICAgIGltYWdlc0xvYWRlZCggYmxvZ0dyaWQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYmxvZ0xheW91dCA9IG5ldyBJc290b3BlQmxvZyggYmxvZ0dyaWQsIHtcbiAgICAgICAgICAgIGl0ZW1TZWxlY3RvcjogYmxvZ0dyaWRJdGVtLFxuICAgICAgICAgICAgcGVyY2VudFBvc2l0aW9uOiB0cnVlLFxuICAgICAgICAgICAgbWFzb25yeToge1xuICAgICAgICAgICAgICAgIGNvbHVtbldpZHRoOiBibG9nR3JpZFNpemVyXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbWFya3VwL2NvbXBvbmVudHMvcGFnZS1ibG9nL3BhZ2UtYmxvZy5qc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9