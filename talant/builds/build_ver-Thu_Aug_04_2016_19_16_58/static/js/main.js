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
	
	GoogleMapsLoader.LANGUAGE = 'en';
	GoogleMapsLoader.KEY = 'AIzaSyAQTQ3gx58ulhmp6zKOzTwAlzv2zhbari8';
	
	GoogleMapsLoader.load( function ( google ) {
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2I5NDQ2MTNjMzI1MjAzYzg0YTYiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL3N0YXRpYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL21hcmt1cC9jb21wb25lbnRzL2Jsb2NrLXRvcGhlYWRlci9ibG9jay10b3BoZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL2NvbXBvbmVudHMvYmxvY2staGVhZGVyL2Jsb2NrLWhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3N3aXBlci9kaXN0L2pzL3N3aXBlci5qcyIsIndlYnBhY2s6Ly8vLi9tYXJrdXAvY29tcG9uZW50cy9ibG9jay1wb3J0Zm9saW8vYmxvY2stcG9ydGZvbGlvLmpzIiwid2VicGFjazovLy8uL34vaW1hZ2VzbG9hZGVkL2ltYWdlc2xvYWRlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2V2LWVtaXR0ZXIvZXYtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzb3RvcGUtbGF5b3V0L2pzL2lzb3RvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9nZXQtc2l6ZS9nZXQtc2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2Rlc2FuZHJvLW1hdGNoZXMtc2VsZWN0b3IvbWF0Y2hlcy1zZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2Zpenp5LXVpLXV0aWxzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL34vb3V0bGF5ZXIvb3V0bGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9vdXRsYXllci9pdGVtLmpzIiwid2VicGFjazovLy8uL34vaXNvdG9wZS1sYXlvdXQvanMvbGF5b3V0LW1vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pc290b3BlLWxheW91dC9qcy9sYXlvdXQtbW9kZXMvbWFzb25yeS5qcyIsIndlYnBhY2s6Ly8vLi9+L21hc29ucnktbGF5b3V0L21hc29ucnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pc290b3BlLWxheW91dC9qcy9sYXlvdXQtbW9kZXMvZml0LXJvd3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pc290b3BlLWxheW91dC9qcy9sYXlvdXQtbW9kZXMvdmVydGljYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pc290b3BlLWxheW91dC9qcy9pdGVtLmpzIiwid2VicGFjazovLy8uL21hcmt1cC9jb21wb25lbnRzL2Jsb2NrLWJsb2cvYmxvY2stYmxvZy5qcyIsIndlYnBhY2s6Ly8vLi9tYXJrdXAvY29tcG9uZW50cy9ibG9jay10ZXN0aW1vbmlhbHMvYmxvY2stdGVzdGltb25pYWxzLmpzIiwid2VicGFjazovLy8uL21hcmt1cC9jb21wb25lbnRzL2Jsb2NrLW1hcC9ibG9jay1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9nb29nbGUtbWFwcy9saWIvR29vZ2xlLmpzIiwid2VicGFjazovLy8uL21hcmt1cC9jb21wb25lbnRzL3BhZ2UtYmxvZy9wYWdlLWJsb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNiQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7O0FDWkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUM7Ozs7Ozs7QUN2QkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBb0QsT0FBTztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2IsNEJBQTJCLG1CQUFtQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7O0FBRUEsY0FBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCLDJCQUEyQjtBQUN0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQ0FBcUMsOEJBQThCO0FBQ25FLGdDQUErQixrQ0FBa0M7O0FBRWpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUI7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUErQixvREFBb0Q7QUFDbkY7QUFDQTtBQUNBLHNEQUFxRCxvREFBb0Q7QUFDekcscUNBQW9DLHFEQUFxRDtBQUN6Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0Isb0RBQW9EO0FBQ25GO0FBQ0E7QUFDQSxnQ0FBK0IsdUJBQXVCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCLHVCQUF1QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBQTZDLGdDQUFnQztBQUM3RSx3Q0FBdUMsaUNBQWlDO0FBQ3hFO0FBQ0Esb0NBQW1DLGtDQUFrQztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBMkIscUJBQXFCO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTJCLHFCQUFxQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIseUJBQXlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTBCLHlCQUF5QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW1DLHFCQUFxQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLHFCQUFxQjtBQUNwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBbUMsdUJBQXVCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQTZCO0FBQzdCLDBCQUF5QjtBQUN6QixzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQTZCO0FBQzdCOztBQUVBLHNCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF1Qix5QkFBeUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTJCLHlCQUF5QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0EsNEVBQTJFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQixjQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLDZCQUE2QjtBQUM1RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQ0FBMEMsaUJBQWlCOztBQUUzRDtBQUNBLHlDQUF3QyxrQkFBa0I7QUFDMUQ7QUFDQTtBQUNBLDRCQUEyQix3QkFBd0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYix3QkFBdUIseUJBQXlCO0FBQ2hEO0FBQ0E7QUFDQSwrQ0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLG1CQUFtQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQixtQkFBbUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQiwwQkFBMEI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCLHFCQUFxQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW1DLHFCQUFxQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBNkI7QUFDN0I7O0FBRUE7O0FBRUEsa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLDBCQUEwQjtBQUNyRTtBQUNBO0FBQ0EsMEJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBLG9DQUFtQyxxQkFBcUI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsMEJBQTBCO0FBQ3JFO0FBQ0E7QUFDQSwwQkFBeUI7QUFDekI7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE0Qyx1QkFBdUI7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW1DLHFCQUFxQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBNkQsWUFBWTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCOztBQUVyQjtBQUNBLGtCQUFpQjs7QUFFakIsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsZ0RBQStDLDZDQUE2QztBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXdFLGNBQWM7QUFDdEY7QUFDQTtBQUNBO0FBQ0EsMkNBQTBDLG9CQUFvQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakIsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBa0MsdUJBQXVCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0IsdUJBQXVCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQXlELFlBQVk7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQix3QkFBd0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBcUQ7QUFDckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQixrQkFBaUI7QUFDakIsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCLHVCQUF1QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBMkIsK0NBQStDO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QiwrQ0FBK0M7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLGNBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0EsY0FBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxjQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZGQUE0RixPQUFPO0FBQ25HLHNCQUFxQjtBQUNyQjtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxjQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLGdDQUErQixtQkFBbUI7QUFDbEQ7QUFDQTtBQUNBLGNBQWE7O0FBRWI7QUFDQTtBQUNBLGNBQWE7QUFDYixVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBbUMsa0NBQWtDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFtQyxnQkFBZ0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0IscUJBQXFCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLG9CQUFvQjtBQUNuRCxvQ0FBbUMsaUJBQWlCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxnQ0FBK0Isb0JBQW9CO0FBQ25ELG9DQUFtQyxpQkFBaUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxnQ0FBK0Isb0JBQW9CO0FBQ25ELG9DQUFtQyxpQkFBaUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFtQyxpQkFBaUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBLGdDQUErQixpQkFBaUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW1DLGlCQUFpQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBLGdDQUErQixpQkFBaUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0IsaUJBQWlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXVDLG9CQUFvQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBMkIsaUJBQWlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFtQyxtQkFBbUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFtQyxtQkFBbUI7QUFDdEQ7QUFDQSw2REFBNEQsa0RBQWtEO0FBQzlHO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxnQ0FBK0IsbUJBQW1CO0FBQ2xELG9DQUFtQyxpQkFBaUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUErQyxzQ0FBc0M7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBLGdDQUErQixpQkFBaUI7QUFDaEQ7QUFDQTtBQUNBLGtFQUFpRSxtREFBbUQ7QUFDcEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLG1CQUFtQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQixtQkFBbUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW1DLGlCQUFpQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLGlCQUFpQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTs7QUFFYjtBQUNBO0FBQ0EsZ0NBQStCLGlCQUFpQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFtQyxpQkFBaUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFtQyxpQkFBaUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW1DLHdCQUF3QjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFtQyx3QkFBd0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EsNEJBQTJCLGlCQUFpQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW1DLHFCQUFxQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSw0QkFBMkIsaUJBQWlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLGdFQUErRCxRQUFRO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBbUMscUJBQXFCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBLGdDQUErQixpQkFBaUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBdUMsbUJBQW1CO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxnQ0FBK0IsaUJBQWlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXVDLGtCQUFrQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxnQ0FBK0IsaUJBQWlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBLGdDQUErQixpQkFBaUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxnQ0FBK0IsaUJBQWlCO0FBQ2hEO0FBQ0Esb0NBQW1DLGtCQUFrQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EsZ0NBQStCLGlCQUFpQjtBQUNoRDs7QUFFQSxvQ0FBbUMsdUJBQXVCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBLGdDQUErQixpQkFBaUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDRCQUEyQixzQkFBc0I7QUFDakQ7QUFDQSxnQ0FBK0Isa0JBQWtCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCLGdCQUFnQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLDZCQUE2QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0IsbUJBQW1CO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLG1CQUFtQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLGlCQUFpQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLGlCQUFpQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7Ozs7Ozs7QUMzMUlBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBLHNCQUFxQixxREFBcUQ7QUFDMUUsTUFBSztBQUNMLEVBQUM7Ozs7Ozs7QUNuQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBK0I7QUFDL0I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsbUJBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxZQUFXLGlDQUFpQztBQUM1QyxZQUFXLG1CQUFtQjtBQUM5QixZQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBMkI7O0FBRTNCO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0Isc0JBQXNCO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFjLHFCQUFxQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUM7Ozs7Ozs7QUNqWEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsRUFBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLEVBQUM7Ozs7Ozs7QUM1R0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUM7QUFDRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG1CQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxlQUFjLE1BQU07QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBYyxNQUFNO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXNCLG9CQUFvQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFhLDZCQUE2QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFrQixnQkFBZ0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhLFNBQVM7QUFDdEIsY0FBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGdCQUFlLE1BQU07QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7O0FBRUE7O0FBRUEsRUFBQzs7Ozs7OztBQ3BtQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLEVBQUM7QUFDRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQix3QkFBd0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsaUJBQWdCLHdCQUF3QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxFQUFDOzs7Ozs7O0FDaE5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsRUFBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBLEVBQUM7Ozs7Ozs7QUNwREQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsbUJBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMLElBQUc7QUFDSDs7QUFFQTs7QUFFQTs7QUFFQSxFQUFDOzs7Ozs7O0FDM09EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUNBO0FBQ0E7QUFDQSx1SkFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLFlBQVcsZ0JBQWdCO0FBQzNCLFlBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFpQztBQUNqQzs7QUFFQTtBQUNBO0FBQ0Esa0NBQWlDO0FBQ2pDLDBCQUF5Qjs7QUFFekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFlBQVcsaUNBQWlDO0FBQzVDLGNBQWEsTUFBTTtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFnQixzQkFBc0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxpQ0FBaUM7QUFDNUMsY0FBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGNBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLFlBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVcsY0FBYztBQUN6QixjQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxjQUFjO0FBQ3pCLFlBQVcsT0FBTztBQUNsQixZQUFXLE9BQU87QUFDbEIsWUFBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYSxPQUFPO0FBQ3BCLGNBQWEsT0FBTztBQUNwQixjQUFhLE9BQU87QUFDcEI7QUFDQTs7QUFFQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLE1BQU07QUFDakIsWUFBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxvQ0FBb0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFXLDRCQUE0QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLFlBQVcsb0NBQW9DO0FBQy9DLGNBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFXLFFBQVE7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxRQUFRO0FBQ25CLGNBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFlBQVcsNkJBQTZCO0FBQ3hDLGNBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVcsNkJBQTZCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFXLDZCQUE2QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVcsd0JBQXdCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxZQUFXLHdCQUF3QjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxNQUFNLEdBQUcsUUFBUSxHQUFHLFNBQVM7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxNQUFNLEdBQUcsUUFBUSxHQUFHLFNBQVM7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxRQUFRO0FBQ25CLFlBQVcsU0FBUztBQUNwQixjQUFhLGNBQWM7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLHVCQUF1QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGNBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVcsNkJBQTZCO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7O0FBRUE7QUFDQSwwQkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxRQUFRO0FBQ25CLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFvQztBQUNwQztBQUNBLDBDQUF5Qzs7QUFFekM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsRUFBQzs7Ozs7OztBQzE2QkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FDQSxtVEFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUM7QUFDRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQixjQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLFNBQVM7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixjQUFhLE9BQU87QUFDcEIsY0FBYSxPQUFPO0FBQ3BCLGNBQWEsUUFBUTtBQUNyQixjQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVksY0FBYztBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLGNBQWM7O0FBRTFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVksY0FBYzs7QUFFMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWMsa0JBQWtCO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7O0FBRUEsRUFBQzs7Ozs7OztBQ3hpQkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsRUFBQzs7Ozs7OztBQzVKRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsRUFBQzs7Ozs7OztBQ3pFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBQzs7QUFFRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBa0IsZUFBZTtBQUNqQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFvQixhQUFhO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGNBQWEsT0FBTztBQUNwQixnQkFBZSxNQUFNO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBMkIsY0FBYztBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUM7Ozs7Ozs7QUM1TUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsV0FBVTtBQUNWOztBQUVBOztBQUVBLEVBQUM7Ozs7Ozs7QUNuRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVU7QUFDVjs7QUFFQTtBQUNBLFdBQVU7QUFDVjs7QUFFQTs7QUFFQSxFQUFDOzs7Ozs7O0FDckREO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTs7QUFFQSxFQUFDOzs7Ozs7Ozs7QUMxRUQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQW9CLHNCQUFzQjtBQUMxQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O0FDakNEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxFQUFDOzs7Ozs7OztBQ2hCRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsaUJBQWlCLEdBQUcsY0FBYztBQUN6RCxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLGlCQUFpQixHQUFHLGNBQWM7QUFDekQsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixpQkFBaUIsR0FBRyxjQUFjO0FBQ3pELFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsaUJBQWlCLEdBQUcsY0FBYyxHQUFHLFlBQVk7QUFDeEUsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixpQkFBaUIsR0FBRyxjQUFjO0FBQ3pELFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsaUJBQWlCLEdBQUcsY0FBYztBQUN6RCxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLGlCQUFpQixHQUFHLGNBQWM7QUFDekQsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixpQkFBaUIsR0FBRyxjQUFjO0FBQ3pELFVBQVM7QUFDVDtBQUNBO0FBQ0Esd0JBQXVCLGlCQUFpQixHQUFHLGlCQUFpQixHQUFHLGNBQWM7QUFDN0UsVUFBUztBQUNUO0FBQ0E7QUFDQSx3QkFBdUIsZUFBZSxHQUFHLGlCQUFpQixHQUFHLGNBQWM7QUFDM0UsVUFBUztBQUNUO0FBQ0E7QUFDQSx3QkFBdUIsa0JBQWtCO0FBQ3pDLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsbUJBQW1CLEdBQUcsZ0JBQWdCO0FBQzdELFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsbUJBQW1CLEdBQUcsZ0JBQWdCO0FBQzdELFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsbUJBQW1CLEdBQUcsZ0JBQWdCLEdBQUcsY0FBYztBQUM5RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUEscURBQW9EOztBQUVwRDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULE1BQUs7O0FBRUwsRUFBQzs7QUFFRDs7Ozs7OztBQzdJQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBLEdBQUU7QUFDRjtBQUNBOztBQUVBLEVBQUM7OztBQUdEOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSixJQUFHO0FBQ0g7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYSx5QkFBeUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYSxzQkFBc0I7QUFDbkM7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQSxFQUFDOzs7Ozs7OztBQ3pORDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCxNQUFLO0FBQ0wsRUFBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9zdGF0aWMvanMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBjYjk0NDYxM2MzMjUyMDNjODRhNlxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuLy8gUEFHRSBJTkRFWFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxucmVxdWlyZSggJy4uLy4uL2NvbXBvbmVudHMvYmxvY2stdG9waGVhZGVyL2Jsb2NrLXRvcGhlYWRlcicgKTtcbnJlcXVpcmUoICcuLi8uLi9jb21wb25lbnRzL2Jsb2NrLWhlYWRlci9ibG9jay1oZWFkZXInICk7XG5yZXF1aXJlKCAnLi4vLi4vY29tcG9uZW50cy9ibG9jay1wb3J0Zm9saW8vYmxvY2stcG9ydGZvbGlvJyApO1xucmVxdWlyZSggJy4uLy4uL2NvbXBvbmVudHMvYmxvY2stYmxvZy9ibG9jay1ibG9nJyApO1xucmVxdWlyZSggJy4uLy4uL2NvbXBvbmVudHMvYmxvY2stdGVzdGltb25pYWxzL2Jsb2NrLXRlc3RpbW9uaWFscycgKTtcbnJlcXVpcmUoICcuLi8uLi9jb21wb25lbnRzL2Jsb2NrLW1hcC9ibG9jay1tYXAnICk7XG5cbi8vIFBBR0UgQkxPR1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxucmVxdWlyZSggJy4uLy4uL2NvbXBvbmVudHMvcGFnZS1ibG9nL3BhZ2UtYmxvZycgKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9tYXJrdXAvc3RhdGljL2pzL21haW4uanNcbiAqKiBtb2R1bGUgaWQgPSAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBUT1BIRUFERVIgSElERSBBTkQgU0hPV1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xuICAgIHZhciB0b3BIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnI3RvcGhlYWRlcicgKTtcbiAgICB2YXIgdG9wT2Zmc2V0ID0gNTA7XG4gICAgdmFyIHNjcm9sbE9mZnNldCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXG4gICAgaWYgKCBzY3JvbGxPZmZzZXQgPiB0b3BPZmZzZXQgKSB7XG4gICAgICAgIHRvcEhlYWRlci5jbGFzc0xpc3QuYWRkKCAnaXMtaGlkZGVuJyApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRvcEhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCAnaXMtaGlkZGVuJyApO1xuICAgIH1cbn0sIGZhbHNlICk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbWFya3VwL2NvbXBvbmVudHMvYmxvY2stdG9waGVhZGVyL2Jsb2NrLXRvcGhlYWRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxuLy8gSEVBREVSIFNMSURFUlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnZhciBzd2lwZXIgPSByZXF1aXJlKCAnc3dpcGVyJyApO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgc3dpcGVyKCAnLmhlYWRlciAuc3dpcGVyLWNvbnRhaW5lcicsIHtcbiAgICAgICAgbmV4dEJ1dHRvbjogJy5oZWFkZXIgLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgICAgIHByZXZCdXR0b246ICcuaGVhZGVyIC5zd2lwZXItYnV0dG9uLXByZXYnLFxuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBicmVha3BvaW50czoge1xuICAgICAgICAgICAgNzY4OiB7XG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IDIwMDAsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDgwMCxcbiAgICAgICAgICAgICAgICBncmFiQ3Vyc29yOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNTAwOiB7XG4gICAgICAgICAgICAgICAgZWZmZWN0OiAnZmFkZScsXG4gICAgICAgICAgICAgICAgZ3JhYkN1cnNvcjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufSwgZmFsc2UgKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9tYXJrdXAvY29tcG9uZW50cy9ibG9jay1oZWFkZXIvYmxvY2staGVhZGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBTd2lwZXIgMy4zLjFcbiAqIE1vc3QgbW9kZXJuIG1vYmlsZSB0b3VjaCBzbGlkZXIgYW5kIGZyYW1ld29yayB3aXRoIGhhcmR3YXJlIGFjY2VsZXJhdGVkIHRyYW5zaXRpb25zXG4gKiBcbiAqIGh0dHA6Ly93d3cuaWRhbmdlcm8udXMvc3dpcGVyL1xuICogXG4gKiBDb3B5cmlnaHQgMjAxNiwgVmxhZGltaXIgS2hhcmxhbXBpZGlcbiAqIFRoZSBpRGFuZ2Vyby51c1xuICogaHR0cDovL3d3dy5pZGFuZ2Vyby51cy9cbiAqIFxuICogTGljZW5zZWQgdW5kZXIgTUlUXG4gKiBcbiAqIFJlbGVhc2VkIG9uOiBGZWJydWFyeSA3LCAyMDE2XG4gKi9cbihmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHZhciAkO1xuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgU3dpcGVyXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICB2YXIgU3dpcGVyID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgcGFyYW1zKSB7XG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBTd2lwZXIpKSByZXR1cm4gbmV3IFN3aXBlcihjb250YWluZXIsIHBhcmFtcyk7XG5cbiAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICAgICAgICB0b3VjaEV2ZW50c1RhcmdldDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICBpbml0aWFsU2xpZGU6IDAsXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgLy8gYXV0b3BsYXlcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgICAgIGF1dG9wbGF5RGlzYWJsZU9uSW50ZXJhY3Rpb246IHRydWUsXG4gICAgICAgICAgICBhdXRvcGxheVN0b3BPbkxhc3Q6IGZhbHNlLFxuICAgICAgICAgICAgLy8gVG8gc3VwcG9ydCBpT1MncyBzd2lwZS10by1nby1iYWNrIGdlc3R1cmUgKHdoZW4gYmVpbmcgdXNlZCBpbi1hcHAsIHdpdGggVUlXZWJWaWV3KS5cbiAgICAgICAgICAgIGlPU0VkZ2VTd2lwZURldGVjdGlvbjogZmFsc2UsXG4gICAgICAgICAgICBpT1NFZGdlU3dpcGVUaHJlc2hvbGQ6IDIwLFxuICAgICAgICAgICAgLy8gRnJlZSBtb2RlXG4gICAgICAgICAgICBmcmVlTW9kZTogZmFsc2UsXG4gICAgICAgICAgICBmcmVlTW9kZU1vbWVudHVtOiB0cnVlLFxuICAgICAgICAgICAgZnJlZU1vZGVNb21lbnR1bVJhdGlvOiAxLFxuICAgICAgICAgICAgZnJlZU1vZGVNb21lbnR1bUJvdW5jZTogdHJ1ZSxcbiAgICAgICAgICAgIGZyZWVNb2RlTW9tZW50dW1Cb3VuY2VSYXRpbzogMSxcbiAgICAgICAgICAgIGZyZWVNb2RlU3RpY2t5OiBmYWxzZSxcbiAgICAgICAgICAgIGZyZWVNb2RlTWluaW11bVZlbG9jaXR5OiAwLjAyLFxuICAgICAgICAgICAgLy8gQXV0b2hlaWdodFxuICAgICAgICAgICAgYXV0b0hlaWdodDogZmFsc2UsXG4gICAgICAgICAgICAvLyBTZXQgd3JhcHBlciB3aWR0aFxuICAgICAgICAgICAgc2V0V3JhcHBlclNpemU6IGZhbHNlLFxuICAgICAgICAgICAgLy8gVmlydHVhbCBUcmFuc2xhdGVcbiAgICAgICAgICAgIHZpcnR1YWxUcmFuc2xhdGU6IGZhbHNlLFxuICAgICAgICAgICAgLy8gRWZmZWN0c1xuICAgICAgICAgICAgZWZmZWN0OiAnc2xpZGUnLCAvLyAnc2xpZGUnIG9yICdmYWRlJyBvciAnY3ViZScgb3IgJ2NvdmVyZmxvdycgb3IgJ2ZsaXAnXG4gICAgICAgICAgICBjb3ZlcmZsb3c6IHtcbiAgICAgICAgICAgICAgICByb3RhdGU6IDUwLFxuICAgICAgICAgICAgICAgIHN0cmV0Y2g6IDAsXG4gICAgICAgICAgICAgICAgZGVwdGg6IDEwMCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogMSxcbiAgICAgICAgICAgICAgICBzbGlkZVNoYWRvd3MgOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmxpcDoge1xuICAgICAgICAgICAgICAgIHNsaWRlU2hhZG93cyA6IHRydWUsXG4gICAgICAgICAgICAgICAgbGltaXRSb3RhdGlvbjogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGN1YmU6IHtcbiAgICAgICAgICAgICAgICBzbGlkZVNoYWRvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgc2hhZG93OiB0cnVlLFxuICAgICAgICAgICAgICAgIHNoYWRvd09mZnNldDogMjAsXG4gICAgICAgICAgICAgICAgc2hhZG93U2NhbGU6IDAuOTRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmYWRlOiB7XG4gICAgICAgICAgICAgICAgY3Jvc3NGYWRlOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIFBhcmFsbGF4XG4gICAgICAgICAgICBwYXJhbGxheDogZmFsc2UsXG4gICAgICAgICAgICAvLyBTY3JvbGxiYXJcbiAgICAgICAgICAgIHNjcm9sbGJhcjogbnVsbCxcbiAgICAgICAgICAgIHNjcm9sbGJhckhpZGU6IHRydWUsXG4gICAgICAgICAgICBzY3JvbGxiYXJEcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgICAgICAgc2Nyb2xsYmFyU25hcE9uUmVsZWFzZTogZmFsc2UsXG4gICAgICAgICAgICAvLyBLZXlib2FyZCBNb3VzZXdoZWVsXG4gICAgICAgICAgICBrZXlib2FyZENvbnRyb2w6IGZhbHNlLFxuICAgICAgICAgICAgbW91c2V3aGVlbENvbnRyb2w6IGZhbHNlLFxuICAgICAgICAgICAgbW91c2V3aGVlbFJlbGVhc2VPbkVkZ2VzOiBmYWxzZSxcbiAgICAgICAgICAgIG1vdXNld2hlZWxJbnZlcnQ6IGZhbHNlLFxuICAgICAgICAgICAgbW91c2V3aGVlbEZvcmNlVG9BeGlzOiBmYWxzZSxcbiAgICAgICAgICAgIG1vdXNld2hlZWxTZW5zaXRpdml0eTogMSxcbiAgICAgICAgICAgIC8vIEhhc2ggTmF2aWdhdGlvblxuICAgICAgICAgICAgaGFzaG5hdjogZmFsc2UsXG4gICAgICAgICAgICAvLyBCcmVha3BvaW50c1xuICAgICAgICAgICAgYnJlYWtwb2ludHM6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIC8vIFNsaWRlcyBncmlkXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDAsXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICAgICAgc2xpZGVzUGVyQ29sdW1uOiAxLFxuICAgICAgICAgICAgc2xpZGVzUGVyQ29sdW1uRmlsbDogJ2NvbHVtbicsXG4gICAgICAgICAgICBzbGlkZXNQZXJHcm91cDogMSxcbiAgICAgICAgICAgIGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcbiAgICAgICAgICAgIHNsaWRlc09mZnNldEJlZm9yZTogMCwgLy8gaW4gcHhcbiAgICAgICAgICAgIHNsaWRlc09mZnNldEFmdGVyOiAwLCAvLyBpbiBweFxuICAgICAgICAgICAgLy8gUm91bmQgbGVuZ3RoXG4gICAgICAgICAgICByb3VuZExlbmd0aHM6IGZhbHNlLFxuICAgICAgICAgICAgLy8gVG91Y2hlc1xuICAgICAgICAgICAgdG91Y2hSYXRpbzogMSxcbiAgICAgICAgICAgIHRvdWNoQW5nbGU6IDQ1LFxuICAgICAgICAgICAgc2ltdWxhdGVUb3VjaDogdHJ1ZSxcbiAgICAgICAgICAgIHNob3J0U3dpcGVzOiB0cnVlLFxuICAgICAgICAgICAgbG9uZ1N3aXBlczogdHJ1ZSxcbiAgICAgICAgICAgIGxvbmdTd2lwZXNSYXRpbzogMC41LFxuICAgICAgICAgICAgbG9uZ1N3aXBlc01zOiAzMDAsXG4gICAgICAgICAgICBmb2xsb3dGaW5nZXI6IHRydWUsXG4gICAgICAgICAgICBvbmx5RXh0ZXJuYWw6IGZhbHNlLFxuICAgICAgICAgICAgdGhyZXNob2xkOiAwLFxuICAgICAgICAgICAgdG91Y2hNb3ZlU3RvcFByb3BhZ2F0aW9uOiB0cnVlLFxuICAgICAgICAgICAgLy8gVW5pcXVlIE5hdmlnYXRpb24gRWxlbWVudHNcbiAgICAgICAgICAgIHVuaXF1ZU5hdkVsZW1lbnRzOiB0cnVlLFxuICAgICAgICAgICAgLy8gUGFnaW5hdGlvblxuICAgICAgICAgICAgcGFnaW5hdGlvbjogbnVsbCxcbiAgICAgICAgICAgIHBhZ2luYXRpb25FbGVtZW50OiAnc3BhbicsXG4gICAgICAgICAgICBwYWdpbmF0aW9uQ2xpY2thYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHBhZ2luYXRpb25IaWRlOiBmYWxzZSxcbiAgICAgICAgICAgIHBhZ2luYXRpb25CdWxsZXRSZW5kZXI6IG51bGwsXG4gICAgICAgICAgICBwYWdpbmF0aW9uUHJvZ3Jlc3NSZW5kZXI6IG51bGwsXG4gICAgICAgICAgICBwYWdpbmF0aW9uRnJhY3Rpb25SZW5kZXI6IG51bGwsXG4gICAgICAgICAgICBwYWdpbmF0aW9uQ3VzdG9tUmVuZGVyOiBudWxsLFxuICAgICAgICAgICAgcGFnaW5hdGlvblR5cGU6ICdidWxsZXRzJywgLy8gJ2J1bGxldHMnIG9yICdwcm9ncmVzcycgb3IgJ2ZyYWN0aW9uJyBvciAnY3VzdG9tJ1xuICAgICAgICAgICAgLy8gUmVzaXN0YW5jZVxuICAgICAgICAgICAgcmVzaXN0YW5jZTogdHJ1ZSxcbiAgICAgICAgICAgIHJlc2lzdGFuY2VSYXRpbzogMC44NSxcbiAgICAgICAgICAgIC8vIE5leHQvcHJldiBidXR0b25zXG4gICAgICAgICAgICBuZXh0QnV0dG9uOiBudWxsLFxuICAgICAgICAgICAgcHJldkJ1dHRvbjogbnVsbCxcbiAgICAgICAgICAgIC8vIFByb2dyZXNzXG4gICAgICAgICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIHdhdGNoU2xpZGVzVmlzaWJpbGl0eTogZmFsc2UsXG4gICAgICAgICAgICAvLyBDdXJzb3JcbiAgICAgICAgICAgIGdyYWJDdXJzb3I6IGZhbHNlLFxuICAgICAgICAgICAgLy8gQ2xpY2tzXG4gICAgICAgICAgICBwcmV2ZW50Q2xpY2tzOiB0cnVlLFxuICAgICAgICAgICAgcHJldmVudENsaWNrc1Byb3BhZ2F0aW9uOiB0cnVlLFxuICAgICAgICAgICAgc2xpZGVUb0NsaWNrZWRTbGlkZTogZmFsc2UsXG4gICAgICAgICAgICAvLyBMYXp5IExvYWRpbmdcbiAgICAgICAgICAgIGxhenlMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGxhenlMb2FkaW5nSW5QcmV2TmV4dDogZmFsc2UsXG4gICAgICAgICAgICBsYXp5TG9hZGluZ0luUHJldk5leHRBbW91bnQ6IDEsXG4gICAgICAgICAgICBsYXp5TG9hZGluZ09uVHJhbnNpdGlvblN0YXJ0OiBmYWxzZSxcbiAgICAgICAgICAgIC8vIEltYWdlc1xuICAgICAgICAgICAgcHJlbG9hZEltYWdlczogdHJ1ZSxcbiAgICAgICAgICAgIHVwZGF0ZU9uSW1hZ2VzUmVhZHk6IHRydWUsXG4gICAgICAgICAgICAvLyBsb29wXG4gICAgICAgICAgICBsb29wOiBmYWxzZSxcbiAgICAgICAgICAgIGxvb3BBZGRpdGlvbmFsU2xpZGVzOiAwLFxuICAgICAgICAgICAgbG9vcGVkU2xpZGVzOiBudWxsLFxuICAgICAgICAgICAgLy8gQ29udHJvbFxuICAgICAgICAgICAgY29udHJvbDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgY29udHJvbEludmVyc2U6IGZhbHNlLFxuICAgICAgICAgICAgY29udHJvbEJ5OiAnc2xpZGUnLCAvL29yICdjb250YWluZXInXG4gICAgICAgICAgICAvLyBTd2lwaW5nL25vIHN3aXBpbmdcbiAgICAgICAgICAgIGFsbG93U3dpcGVUb1ByZXY6IHRydWUsXG4gICAgICAgICAgICBhbGxvd1N3aXBlVG9OZXh0OiB0cnVlLFxuICAgICAgICAgICAgc3dpcGVIYW5kbGVyOiBudWxsLCAvLycuc3dpcGUtaGFuZGxlcicsXG4gICAgICAgICAgICBub1N3aXBpbmc6IHRydWUsXG4gICAgICAgICAgICBub1N3aXBpbmdDbGFzczogJ3N3aXBlci1uby1zd2lwaW5nJyxcbiAgICAgICAgICAgIC8vIE5TXG4gICAgICAgICAgICBzbGlkZUNsYXNzOiAnc3dpcGVyLXNsaWRlJyxcbiAgICAgICAgICAgIHNsaWRlQWN0aXZlQ2xhc3M6ICdzd2lwZXItc2xpZGUtYWN0aXZlJyxcbiAgICAgICAgICAgIHNsaWRlVmlzaWJsZUNsYXNzOiAnc3dpcGVyLXNsaWRlLXZpc2libGUnLFxuICAgICAgICAgICAgc2xpZGVEdXBsaWNhdGVDbGFzczogJ3N3aXBlci1zbGlkZS1kdXBsaWNhdGUnLFxuICAgICAgICAgICAgc2xpZGVOZXh0Q2xhc3M6ICdzd2lwZXItc2xpZGUtbmV4dCcsXG4gICAgICAgICAgICBzbGlkZVByZXZDbGFzczogJ3N3aXBlci1zbGlkZS1wcmV2JyxcbiAgICAgICAgICAgIHdyYXBwZXJDbGFzczogJ3N3aXBlci13cmFwcGVyJyxcbiAgICAgICAgICAgIGJ1bGxldENsYXNzOiAnc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0JyxcbiAgICAgICAgICAgIGJ1bGxldEFjdGl2ZUNsYXNzOiAnc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZScsXG4gICAgICAgICAgICBidXR0b25EaXNhYmxlZENsYXNzOiAnc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCcsXG4gICAgICAgICAgICBwYWdpbmF0aW9uQ3VycmVudENsYXNzOiAnc3dpcGVyLXBhZ2luYXRpb24tY3VycmVudCcsXG4gICAgICAgICAgICBwYWdpbmF0aW9uVG90YWxDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLXRvdGFsJyxcbiAgICAgICAgICAgIHBhZ2luYXRpb25IaWRkZW5DbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLWhpZGRlbicsXG4gICAgICAgICAgICBwYWdpbmF0aW9uUHJvZ3Jlc3NiYXJDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyJyxcbiAgICAgICAgICAgIC8vIE9ic2VydmVyXG4gICAgICAgICAgICBvYnNlcnZlcjogZmFsc2UsXG4gICAgICAgICAgICBvYnNlcnZlUGFyZW50czogZmFsc2UsXG4gICAgICAgICAgICAvLyBBY2Nlc3NpYmlsaXR5XG4gICAgICAgICAgICBhMTF5OiBmYWxzZSxcbiAgICAgICAgICAgIHByZXZTbGlkZU1lc3NhZ2U6ICdQcmV2aW91cyBzbGlkZScsXG4gICAgICAgICAgICBuZXh0U2xpZGVNZXNzYWdlOiAnTmV4dCBzbGlkZScsXG4gICAgICAgICAgICBmaXJzdFNsaWRlTWVzc2FnZTogJ1RoaXMgaXMgdGhlIGZpcnN0IHNsaWRlJyxcbiAgICAgICAgICAgIGxhc3RTbGlkZU1lc3NhZ2U6ICdUaGlzIGlzIHRoZSBsYXN0IHNsaWRlJyxcbiAgICAgICAgICAgIHBhZ2luYXRpb25CdWxsZXRNZXNzYWdlOiAnR28gdG8gc2xpZGUge3tpbmRleH19JyxcbiAgICAgICAgICAgIC8vIENhbGxiYWNrc1xuICAgICAgICAgICAgcnVuQ2FsbGJhY2tzT25Jbml0OiB0cnVlXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgQ2FsbGJhY2tzOlxuICAgICAgICAgICAgb25Jbml0OiBmdW5jdGlvbiAoc3dpcGVyKVxuICAgICAgICAgICAgb25EZXN0cm95OiBmdW5jdGlvbiAoc3dpcGVyKVxuICAgICAgICAgICAgb25DbGljazogZnVuY3Rpb24gKHN3aXBlciwgZSlcbiAgICAgICAgICAgIG9uVGFwOiBmdW5jdGlvbiAoc3dpcGVyLCBlKVxuICAgICAgICAgICAgb25Eb3VibGVUYXA6IGZ1bmN0aW9uIChzd2lwZXIsIGUpXG4gICAgICAgICAgICBvblNsaWRlck1vdmU6IGZ1bmN0aW9uIChzd2lwZXIsIGUpXG4gICAgICAgICAgICBvblNsaWRlQ2hhbmdlU3RhcnQ6IGZ1bmN0aW9uIChzd2lwZXIpXG4gICAgICAgICAgICBvblNsaWRlQ2hhbmdlRW5kOiBmdW5jdGlvbiAoc3dpcGVyKVxuICAgICAgICAgICAgb25UcmFuc2l0aW9uU3RhcnQ6IGZ1bmN0aW9uIChzd2lwZXIpXG4gICAgICAgICAgICBvblRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uIChzd2lwZXIpXG4gICAgICAgICAgICBvbkltYWdlc1JlYWR5OiBmdW5jdGlvbiAoc3dpcGVyKVxuICAgICAgICAgICAgb25Qcm9ncmVzczogZnVuY3Rpb24gKHN3aXBlciwgcHJvZ3Jlc3MpXG4gICAgICAgICAgICBvblRvdWNoU3RhcnQ6IGZ1bmN0aW9uIChzd2lwZXIsIGUpXG4gICAgICAgICAgICBvblRvdWNoTW92ZTogZnVuY3Rpb24gKHN3aXBlciwgZSlcbiAgICAgICAgICAgIG9uVG91Y2hNb3ZlT3Bwb3NpdGU6IGZ1bmN0aW9uIChzd2lwZXIsIGUpXG4gICAgICAgICAgICBvblRvdWNoRW5kOiBmdW5jdGlvbiAoc3dpcGVyLCBlKVxuICAgICAgICAgICAgb25SZWFjaEJlZ2lubmluZzogZnVuY3Rpb24gKHN3aXBlcilcbiAgICAgICAgICAgIG9uUmVhY2hFbmQ6IGZ1bmN0aW9uIChzd2lwZXIpXG4gICAgICAgICAgICBvblNldFRyYW5zaXRpb246IGZ1bmN0aW9uIChzd2lwZXIsIGR1cmF0aW9uKVxuICAgICAgICAgICAgb25TZXRUcmFuc2xhdGU6IGZ1bmN0aW9uIChzd2lwZXIsIHRyYW5zbGF0ZSlcbiAgICAgICAgICAgIG9uQXV0b3BsYXlTdGFydDogZnVuY3Rpb24gKHN3aXBlcilcbiAgICAgICAgICAgIG9uQXV0b3BsYXlTdG9wOiBmdW5jdGlvbiAoc3dpcGVyKSxcbiAgICAgICAgICAgIG9uTGF6eUltYWdlTG9hZDogZnVuY3Rpb24gKHN3aXBlciwgc2xpZGUsIGltYWdlKVxuICAgICAgICAgICAgb25MYXp5SW1hZ2VSZWFkeTogZnVuY3Rpb24gKHN3aXBlciwgc2xpZGUsIGltYWdlKVxuICAgICAgICAgICAgKi9cbiAgICAgICAgXG4gICAgICAgIH07XG4gICAgICAgIHZhciBpbml0aWFsVmlydHVhbFRyYW5zbGF0ZSA9IHBhcmFtcyAmJiBwYXJhbXMudmlydHVhbFRyYW5zbGF0ZTtcbiAgICAgICAgXG4gICAgICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcbiAgICAgICAgdmFyIG9yaWdpbmFsUGFyYW1zID0ge307XG4gICAgICAgIGZvciAodmFyIHBhcmFtIGluIHBhcmFtcykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXNbcGFyYW1dID09PSAnb2JqZWN0JyAmJiBwYXJhbXNbcGFyYW1dICE9PSBudWxsICYmICEocGFyYW1zW3BhcmFtXS5ub2RlVHlwZSB8fCBwYXJhbXNbcGFyYW1dID09PSB3aW5kb3cgfHwgcGFyYW1zW3BhcmFtXSA9PT0gZG9jdW1lbnQgfHwgKHR5cGVvZiBEb203ICE9PSAndW5kZWZpbmVkJyAmJiBwYXJhbXNbcGFyYW1dIGluc3RhbmNlb2YgRG9tNykgfHwgKHR5cGVvZiBqUXVlcnkgIT09ICd1bmRlZmluZWQnICYmIHBhcmFtc1twYXJhbV0gaW5zdGFuY2VvZiBqUXVlcnkpKSkge1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsUGFyYW1zW3BhcmFtXSA9IHt9O1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGRlZXBQYXJhbSBpbiBwYXJhbXNbcGFyYW1dKSB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsUGFyYW1zW3BhcmFtXVtkZWVwUGFyYW1dID0gcGFyYW1zW3BhcmFtXVtkZWVwUGFyYW1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsUGFyYW1zW3BhcmFtXSA9IHBhcmFtc1twYXJhbV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgZGVmIGluIGRlZmF1bHRzKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHBhcmFtc1tkZWZdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHBhcmFtc1tkZWZdID0gZGVmYXVsdHNbZGVmXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBwYXJhbXNbZGVmXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBkZWVwRGVmIGluIGRlZmF1bHRzW2RlZl0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXNbZGVmXVtkZWVwRGVmXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtc1tkZWZdW2RlZXBEZWZdID0gZGVmYXVsdHNbZGVmXVtkZWVwRGVmXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gU3dpcGVyXG4gICAgICAgIHZhciBzID0gdGhpcztcbiAgICAgICAgXG4gICAgICAgIC8vIFBhcmFtc1xuICAgICAgICBzLnBhcmFtcyA9IHBhcmFtcztcbiAgICAgICAgcy5vcmlnaW5hbFBhcmFtcyA9IG9yaWdpbmFsUGFyYW1zO1xuICAgICAgICBcbiAgICAgICAgLy8gQ2xhc3NuYW1lXG4gICAgICAgIHMuY2xhc3NOYW1lcyA9IFtdO1xuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBEb20gTGlicmFyeSBhbmQgcGx1Z2luc1xuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIGlmICh0eXBlb2YgJCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIERvbTcgIT09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgICAgICQgPSBEb203O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgJCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgRG9tNyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAkID0gd2luZG93LkRvbTcgfHwgd2luZG93LlplcHRvIHx8IHdpbmRvdy5qUXVlcnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAkID0gRG9tNztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghJCkgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEV4cG9ydCBpdCB0byBTd2lwZXIgaW5zdGFuY2VcbiAgICAgICAgcy4kID0gJDtcbiAgICAgICAgXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIEJyZWFrcG9pbnRzXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcy5jdXJyZW50QnJlYWtwb2ludCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcy5nZXRBY3RpdmVCcmVha3BvaW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy9HZXQgYnJlYWtwb2ludCBmb3Igd2luZG93IHdpZHRoXG4gICAgICAgICAgICBpZiAoIXMucGFyYW1zLmJyZWFrcG9pbnRzKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB2YXIgYnJlYWtwb2ludCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIHBvaW50cyA9IFtdLCBwb2ludDtcbiAgICAgICAgICAgIGZvciAoIHBvaW50IGluIHMucGFyYW1zLmJyZWFrcG9pbnRzICkge1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5icmVha3BvaW50cy5oYXNPd25Qcm9wZXJ0eShwb2ludCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzLnB1c2gocG9pbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvaW50cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KGEsIDEwKSA+IHBhcnNlSW50KGIsIDEwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwb2ludCA9IHBvaW50c1tpXTtcbiAgICAgICAgICAgICAgICBpZiAocG9pbnQgPj0gd2luZG93LmlubmVyV2lkdGggJiYgIWJyZWFrcG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludCA9IHBvaW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBicmVha3BvaW50IHx8ICdtYXgnO1xuICAgICAgICB9O1xuICAgICAgICBzLnNldEJyZWFrcG9pbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvL1NldCBicmVha3BvaW50IGZvciB3aW5kb3cgd2lkdGggYW5kIHVwZGF0ZSBwYXJhbWV0ZXJzXG4gICAgICAgICAgICB2YXIgYnJlYWtwb2ludCA9IHMuZ2V0QWN0aXZlQnJlYWtwb2ludCgpO1xuICAgICAgICAgICAgaWYgKGJyZWFrcG9pbnQgJiYgcy5jdXJyZW50QnJlYWtwb2ludCAhPT0gYnJlYWtwb2ludCkge1xuICAgICAgICAgICAgICAgIHZhciBicmVha1BvaW50c1BhcmFtcyA9IGJyZWFrcG9pbnQgaW4gcy5wYXJhbXMuYnJlYWtwb2ludHMgPyBzLnBhcmFtcy5icmVha3BvaW50c1ticmVha3BvaW50XSA6IHMub3JpZ2luYWxQYXJhbXM7XG4gICAgICAgICAgICAgICAgdmFyIG5lZWRzUmVMb29wID0gcy5wYXJhbXMubG9vcCAmJiAoYnJlYWtQb2ludHNQYXJhbXMuc2xpZGVzUGVyVmlldyAhPT0gcy5wYXJhbXMuc2xpZGVzUGVyVmlldyk7XG4gICAgICAgICAgICAgICAgZm9yICggdmFyIHBhcmFtIGluIGJyZWFrUG9pbnRzUGFyYW1zICkge1xuICAgICAgICAgICAgICAgICAgICBzLnBhcmFtc1twYXJhbV0gPSBicmVha1BvaW50c1BhcmFtc1twYXJhbV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHMuY3VycmVudEJyZWFrcG9pbnQgPSBicmVha3BvaW50O1xuICAgICAgICAgICAgICAgIGlmKG5lZWRzUmVMb29wICYmIHMuZGVzdHJveUxvb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgcy5yZUxvb3AodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyBTZXQgYnJlYWtwb2ludCBvbiBsb2FkXG4gICAgICAgIGlmIChzLnBhcmFtcy5icmVha3BvaW50cykge1xuICAgICAgICAgICAgcy5zZXRCcmVha3BvaW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIFByZXBhcmF0aW9uIC0gRGVmaW5lIENvbnRhaW5lciwgV3JhcHBlciBhbmQgUGFnaW5hdGlvblxuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIHMuY29udGFpbmVyID0gJChjb250YWluZXIpO1xuICAgICAgICBpZiAocy5jb250YWluZXIubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgIGlmIChzLmNvbnRhaW5lci5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB2YXIgc3dpcGVycyA9IFtdO1xuICAgICAgICAgICAgcy5jb250YWluZXIuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXM7XG4gICAgICAgICAgICAgICAgc3dpcGVycy5wdXNoKG5ldyBTd2lwZXIodGhpcywgcGFyYW1zKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBzd2lwZXJzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBTYXZlIGluc3RhbmNlIGluIGNvbnRhaW5lciBIVE1MIEVsZW1lbnQgYW5kIGluIGRhdGFcbiAgICAgICAgcy5jb250YWluZXJbMF0uc3dpcGVyID0gcztcbiAgICAgICAgcy5jb250YWluZXIuZGF0YSgnc3dpcGVyJywgcyk7XG4gICAgICAgIFxuICAgICAgICBzLmNsYXNzTmFtZXMucHVzaCgnc3dpcGVyLWNvbnRhaW5lci0nICsgcy5wYXJhbXMuZGlyZWN0aW9uKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChzLnBhcmFtcy5mcmVlTW9kZSkge1xuICAgICAgICAgICAgcy5jbGFzc05hbWVzLnB1c2goJ3N3aXBlci1jb250YWluZXItZnJlZS1tb2RlJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzLnN1cHBvcnQuZmxleGJveCkge1xuICAgICAgICAgICAgcy5jbGFzc05hbWVzLnB1c2goJ3N3aXBlci1jb250YWluZXItbm8tZmxleGJveCcpO1xuICAgICAgICAgICAgcy5wYXJhbXMuc2xpZGVzUGVyQ29sdW1uID0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocy5wYXJhbXMuYXV0b0hlaWdodCkge1xuICAgICAgICAgICAgcy5jbGFzc05hbWVzLnB1c2goJ3N3aXBlci1jb250YWluZXItYXV0b2hlaWdodCcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEVuYWJsZSBzbGlkZXMgcHJvZ3Jlc3Mgd2hlbiByZXF1aXJlZFxuICAgICAgICBpZiAocy5wYXJhbXMucGFyYWxsYXggfHwgcy5wYXJhbXMud2F0Y2hTbGlkZXNWaXNpYmlsaXR5KSB7XG4gICAgICAgICAgICBzLnBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDb3ZlcmZsb3cgLyAzRFxuICAgICAgICBpZiAoWydjdWJlJywgJ2NvdmVyZmxvdycsICdmbGlwJ10uaW5kZXhPZihzLnBhcmFtcy5lZmZlY3QpID49IDApIHtcbiAgICAgICAgICAgIGlmIChzLnN1cHBvcnQudHJhbnNmb3JtczNkKSB7XG4gICAgICAgICAgICAgICAgcy5wYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgcy5jbGFzc05hbWVzLnB1c2goJ3N3aXBlci1jb250YWluZXItM2QnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHMucGFyYW1zLmVmZmVjdCA9ICdzbGlkZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHMucGFyYW1zLmVmZmVjdCAhPT0gJ3NsaWRlJykge1xuICAgICAgICAgICAgcy5jbGFzc05hbWVzLnB1c2goJ3N3aXBlci1jb250YWluZXItJyArIHMucGFyYW1zLmVmZmVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHMucGFyYW1zLmVmZmVjdCA9PT0gJ2N1YmUnKSB7XG4gICAgICAgICAgICBzLnBhcmFtcy5yZXNpc3RhbmNlUmF0aW8gPSAwO1xuICAgICAgICAgICAgcy5wYXJhbXMuc2xpZGVzUGVyVmlldyA9IDE7XG4gICAgICAgICAgICBzLnBhcmFtcy5zbGlkZXNQZXJDb2x1bW4gPSAxO1xuICAgICAgICAgICAgcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXAgPSAxO1xuICAgICAgICAgICAgcy5wYXJhbXMuY2VudGVyZWRTbGlkZXMgPSBmYWxzZTtcbiAgICAgICAgICAgIHMucGFyYW1zLnNwYWNlQmV0d2VlbiA9IDA7XG4gICAgICAgICAgICBzLnBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIHMucGFyYW1zLnNldFdyYXBwZXJTaXplID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHMucGFyYW1zLmVmZmVjdCA9PT0gJ2ZhZGUnIHx8IHMucGFyYW1zLmVmZmVjdCA9PT0gJ2ZsaXAnKSB7XG4gICAgICAgICAgICBzLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID0gMTtcbiAgICAgICAgICAgIHMucGFyYW1zLnNsaWRlc1BlckNvbHVtbiA9IDE7XG4gICAgICAgICAgICBzLnBhcmFtcy5zbGlkZXNQZXJHcm91cCA9IDE7XG4gICAgICAgICAgICBzLnBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzID0gdHJ1ZTtcbiAgICAgICAgICAgIHMucGFyYW1zLnNwYWNlQmV0d2VlbiA9IDA7XG4gICAgICAgICAgICBzLnBhcmFtcy5zZXRXcmFwcGVyU2l6ZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbml0aWFsVmlydHVhbFRyYW5zbGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBzLnBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gR3JhYiBDdXJzb3JcbiAgICAgICAgaWYgKHMucGFyYW1zLmdyYWJDdXJzb3IgJiYgcy5zdXBwb3J0LnRvdWNoKSB7XG4gICAgICAgICAgICBzLnBhcmFtcy5ncmFiQ3Vyc29yID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIFdyYXBwZXJcbiAgICAgICAgcy53cmFwcGVyID0gcy5jb250YWluZXIuY2hpbGRyZW4oJy4nICsgcy5wYXJhbXMud3JhcHBlckNsYXNzKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFBhZ2luYXRpb25cbiAgICAgICAgaWYgKHMucGFyYW1zLnBhZ2luYXRpb24pIHtcbiAgICAgICAgICAgIHMucGFnaW5hdGlvbkNvbnRhaW5lciA9ICQocy5wYXJhbXMucGFnaW5hdGlvbik7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMudW5pcXVlTmF2RWxlbWVudHMgJiYgdHlwZW9mIHMucGFyYW1zLnBhZ2luYXRpb24gPT09ICdzdHJpbmcnICYmIHMucGFnaW5hdGlvbkNvbnRhaW5lci5sZW5ndGggPiAxICYmIHMuY29udGFpbmVyLmZpbmQocy5wYXJhbXMucGFnaW5hdGlvbikubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcy5wYWdpbmF0aW9uQ29udGFpbmVyID0gcy5jb250YWluZXIuZmluZChzLnBhcmFtcy5wYWdpbmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMucGFnaW5hdGlvblR5cGUgPT09ICdidWxsZXRzJyAmJiBzLnBhcmFtcy5wYWdpbmF0aW9uQ2xpY2thYmxlKSB7XG4gICAgICAgICAgICAgICAgcy5wYWdpbmF0aW9uQ29udGFpbmVyLmFkZENsYXNzKCdzd2lwZXItcGFnaW5hdGlvbi1jbGlja2FibGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHMucGFyYW1zLnBhZ2luYXRpb25DbGlja2FibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHMucGFnaW5hdGlvbkNvbnRhaW5lci5hZGRDbGFzcygnc3dpcGVyLXBhZ2luYXRpb24tJyArIHMucGFyYW1zLnBhZ2luYXRpb25UeXBlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBOZXh0L1ByZXYgQnV0dG9uc1xuICAgICAgICBpZiAocy5wYXJhbXMubmV4dEJ1dHRvbiB8fCBzLnBhcmFtcy5wcmV2QnV0dG9uKSB7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubmV4dEJ1dHRvbikge1xuICAgICAgICAgICAgICAgIHMubmV4dEJ1dHRvbiA9ICQocy5wYXJhbXMubmV4dEJ1dHRvbik7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnVuaXF1ZU5hdkVsZW1lbnRzICYmIHR5cGVvZiBzLnBhcmFtcy5uZXh0QnV0dG9uID09PSAnc3RyaW5nJyAmJiBzLm5leHRCdXR0b24ubGVuZ3RoID4gMSAmJiBzLmNvbnRhaW5lci5maW5kKHMucGFyYW1zLm5leHRCdXR0b24pLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzLm5leHRCdXR0b24gPSBzLmNvbnRhaW5lci5maW5kKHMucGFyYW1zLm5leHRCdXR0b24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wcmV2QnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgcy5wcmV2QnV0dG9uID0gJChzLnBhcmFtcy5wcmV2QnV0dG9uKTtcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMudW5pcXVlTmF2RWxlbWVudHMgJiYgdHlwZW9mIHMucGFyYW1zLnByZXZCdXR0b24gPT09ICdzdHJpbmcnICYmIHMucHJldkJ1dHRvbi5sZW5ndGggPiAxICYmIHMuY29udGFpbmVyLmZpbmQocy5wYXJhbXMucHJldkJ1dHRvbikubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHMucHJldkJ1dHRvbiA9IHMuY29udGFpbmVyLmZpbmQocy5wYXJhbXMucHJldkJ1dHRvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBJcyBIb3Jpem9udGFsXG4gICAgICAgIHMuaXNIb3Jpem9udGFsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHMucGFyYW1zLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnO1xuICAgICAgICB9O1xuICAgICAgICAvLyBzLmlzSCA9IGlzSDtcbiAgICAgICAgXG4gICAgICAgIC8vIFJUTFxuICAgICAgICBzLnJ0bCA9IHMuaXNIb3Jpem9udGFsKCkgJiYgKHMuY29udGFpbmVyWzBdLmRpci50b0xvd2VyQ2FzZSgpID09PSAncnRsJyB8fCBzLmNvbnRhaW5lci5jc3MoJ2RpcmVjdGlvbicpID09PSAncnRsJyk7XG4gICAgICAgIGlmIChzLnJ0bCkge1xuICAgICAgICAgICAgcy5jbGFzc05hbWVzLnB1c2goJ3N3aXBlci1jb250YWluZXItcnRsJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIFdyb25nIFJUTCBzdXBwb3J0XG4gICAgICAgIGlmIChzLnJ0bCkge1xuICAgICAgICAgICAgcy53cm9uZ1JUTCA9IHMud3JhcHBlci5jc3MoJ2Rpc3BsYXknKSA9PT0gJy13ZWJraXQtYm94JztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gQ29sdW1uc1xuICAgICAgICBpZiAocy5wYXJhbXMuc2xpZGVzUGVyQ29sdW1uID4gMSkge1xuICAgICAgICAgICAgcy5jbGFzc05hbWVzLnB1c2goJ3N3aXBlci1jb250YWluZXItbXVsdGlyb3cnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gQ2hlY2sgZm9yIEFuZHJvaWRcbiAgICAgICAgaWYgKHMuZGV2aWNlLmFuZHJvaWQpIHtcbiAgICAgICAgICAgIHMuY2xhc3NOYW1lcy5wdXNoKCdzd2lwZXItY29udGFpbmVyLWFuZHJvaWQnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gQWRkIGNsYXNzZXNcbiAgICAgICAgcy5jb250YWluZXIuYWRkQ2xhc3Mocy5jbGFzc05hbWVzLmpvaW4oJyAnKSk7XG4gICAgICAgIFxuICAgICAgICAvLyBUcmFuc2xhdGVcbiAgICAgICAgcy50cmFuc2xhdGUgPSAwO1xuICAgICAgICBcbiAgICAgICAgLy8gUHJvZ3Jlc3NcbiAgICAgICAgcy5wcm9ncmVzcyA9IDA7XG4gICAgICAgIFxuICAgICAgICAvLyBWZWxvY2l0eVxuICAgICAgICBzLnZlbG9jaXR5ID0gMDtcbiAgICAgICAgXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIExvY2tzLCB1bmxvY2tzXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcy5sb2NrU3dpcGVUb05leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzLnBhcmFtcy5hbGxvd1N3aXBlVG9OZXh0ID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIHMubG9ja1N3aXBlVG9QcmV2ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcy5wYXJhbXMuYWxsb3dTd2lwZVRvUHJldiA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICBzLmxvY2tTd2lwZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzLnBhcmFtcy5hbGxvd1N3aXBlVG9OZXh0ID0gcy5wYXJhbXMuYWxsb3dTd2lwZVRvUHJldiA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICBzLnVubG9ja1N3aXBlVG9OZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcy5wYXJhbXMuYWxsb3dTd2lwZVRvTmV4dCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHMudW5sb2NrU3dpcGVUb1ByZXYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzLnBhcmFtcy5hbGxvd1N3aXBlVG9QcmV2ID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgcy51bmxvY2tTd2lwZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzLnBhcmFtcy5hbGxvd1N3aXBlVG9OZXh0ID0gcy5wYXJhbXMuYWxsb3dTd2lwZVRvUHJldiA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBSb3VuZCBoZWxwZXJcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBmdW5jdGlvbiByb3VuZChhKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihhKTtcbiAgICAgICAgfVxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBTZXQgZ3JhYiBjdXJzb3JcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBpZiAocy5wYXJhbXMuZ3JhYkN1cnNvcikge1xuICAgICAgICAgICAgcy5jb250YWluZXJbMF0uc3R5bGUuY3Vyc29yID0gJ21vdmUnO1xuICAgICAgICAgICAgcy5jb250YWluZXJbMF0uc3R5bGUuY3Vyc29yID0gJy13ZWJraXQtZ3JhYic7XG4gICAgICAgICAgICBzLmNvbnRhaW5lclswXS5zdHlsZS5jdXJzb3IgPSAnLW1vei1ncmFiJztcbiAgICAgICAgICAgIHMuY29udGFpbmVyWzBdLnN0eWxlLmN1cnNvciA9ICdncmFiJztcbiAgICAgICAgfVxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBVcGRhdGUgb24gSW1hZ2VzIFJlYWR5XG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcy5pbWFnZXNUb0xvYWQgPSBbXTtcbiAgICAgICAgcy5pbWFnZXNMb2FkZWQgPSAwO1xuICAgICAgICBcbiAgICAgICAgcy5sb2FkSW1hZ2UgPSBmdW5jdGlvbiAoaW1nRWxlbWVudCwgc3JjLCBzcmNzZXQsIGNoZWNrRm9yQ29tcGxldGUsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgaW1hZ2U7XG4gICAgICAgICAgICBmdW5jdGlvbiBvblJlYWR5ICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWltZ0VsZW1lbnQuY29tcGxldGUgfHwgIWNoZWNrRm9yQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlID0gbmV3IHdpbmRvdy5JbWFnZSgpO1xuICAgICAgICAgICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSBvblJlYWR5O1xuICAgICAgICAgICAgICAgICAgICBpbWFnZS5vbmVycm9yID0gb25SZWFkeTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNyY3NldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2Uuc3Jjc2V0ID0gc3Jjc2V0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzcmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IHNyYztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9uUmVhZHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIHsvL2ltYWdlIGFscmVhZHkgbG9hZGVkLi4uXG4gICAgICAgICAgICAgICAgb25SZWFkeSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBzLnByZWxvYWRJbWFnZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzLmltYWdlc1RvTG9hZCA9IHMuY29udGFpbmVyLmZpbmQoJ2ltZycpO1xuICAgICAgICAgICAgZnVuY3Rpb24gX29uUmVhZHkoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzID09PSAndW5kZWZpbmVkJyB8fCBzID09PSBudWxsKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKHMuaW1hZ2VzTG9hZGVkICE9PSB1bmRlZmluZWQpIHMuaW1hZ2VzTG9hZGVkKys7XG4gICAgICAgICAgICAgICAgaWYgKHMuaW1hZ2VzTG9hZGVkID09PSBzLmltYWdlc1RvTG9hZC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnVwZGF0ZU9uSW1hZ2VzUmVhZHkpIHMudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIHMuZW1pdCgnb25JbWFnZXNSZWFkeScsIHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcy5pbWFnZXNUb0xvYWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzLmxvYWRJbWFnZShzLmltYWdlc1RvTG9hZFtpXSwgKHMuaW1hZ2VzVG9Mb2FkW2ldLmN1cnJlbnRTcmMgfHwgcy5pbWFnZXNUb0xvYWRbaV0uZ2V0QXR0cmlidXRlKCdzcmMnKSksIChzLmltYWdlc1RvTG9hZFtpXS5zcmNzZXQgfHwgcy5pbWFnZXNUb0xvYWRbaV0uZ2V0QXR0cmlidXRlKCdzcmNzZXQnKSksIHRydWUsIF9vblJlYWR5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIEF1dG9wbGF5XG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcy5hdXRvcGxheVRpbWVvdXRJZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcy5hdXRvcGxheWluZyA9IGZhbHNlO1xuICAgICAgICBzLmF1dG9wbGF5UGF1c2VkID0gZmFsc2U7XG4gICAgICAgIGZ1bmN0aW9uIGF1dG9wbGF5KCkge1xuICAgICAgICAgICAgcy5hdXRvcGxheVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sb29wKSB7XG4gICAgICAgICAgICAgICAgICAgIHMuZml4TG9vcCgpO1xuICAgICAgICAgICAgICAgICAgICBzLl9zbGlkZU5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgcy5lbWl0KCdvbkF1dG9wbGF5Jywgcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXMuaXNFbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuX3NsaWRlTmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5lbWl0KCdvbkF1dG9wbGF5Jywgcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXBhcmFtcy5hdXRvcGxheVN0b3BPbkxhc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLl9zbGlkZVRvKDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuZW1pdCgnb25BdXRvcGxheScsIHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5zdG9wQXV0b3BsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHMucGFyYW1zLmF1dG9wbGF5KTtcbiAgICAgICAgfVxuICAgICAgICBzLnN0YXJ0QXV0b3BsYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHMuYXV0b3BsYXlUaW1lb3V0SWQgIT09ICd1bmRlZmluZWQnKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZiAoIXMucGFyYW1zLmF1dG9wbGF5KSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZiAocy5hdXRvcGxheWluZykgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgcy5hdXRvcGxheWluZyA9IHRydWU7XG4gICAgICAgICAgICBzLmVtaXQoJ29uQXV0b3BsYXlTdGFydCcsIHMpO1xuICAgICAgICAgICAgYXV0b3BsYXkoKTtcbiAgICAgICAgfTtcbiAgICAgICAgcy5zdG9wQXV0b3BsYXkgPSBmdW5jdGlvbiAoaW50ZXJuYWwpIHtcbiAgICAgICAgICAgIGlmICghcy5hdXRvcGxheVRpbWVvdXRJZCkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKHMuYXV0b3BsYXlUaW1lb3V0SWQpIGNsZWFyVGltZW91dChzLmF1dG9wbGF5VGltZW91dElkKTtcbiAgICAgICAgICAgIHMuYXV0b3BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHMuYXV0b3BsYXlUaW1lb3V0SWQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBzLmVtaXQoJ29uQXV0b3BsYXlTdG9wJywgcyk7XG4gICAgICAgIH07XG4gICAgICAgIHMucGF1c2VBdXRvcGxheSA9IGZ1bmN0aW9uIChzcGVlZCkge1xuICAgICAgICAgICAgaWYgKHMuYXV0b3BsYXlQYXVzZWQpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChzLmF1dG9wbGF5VGltZW91dElkKSBjbGVhclRpbWVvdXQocy5hdXRvcGxheVRpbWVvdXRJZCk7XG4gICAgICAgICAgICBzLmF1dG9wbGF5UGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChzcGVlZCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHMuYXV0b3BsYXlQYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBhdXRvcGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcy53cmFwcGVyLnRyYW5zaXRpb25FbmQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXMpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgcy5hdXRvcGxheVBhdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXMuYXV0b3BsYXlpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuc3RvcEF1dG9wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvcGxheSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIE1pbi9NYXggVHJhbnNsYXRlXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcy5taW5UcmFuc2xhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gKC1zLnNuYXBHcmlkWzBdKTtcbiAgICAgICAgfTtcbiAgICAgICAgcy5tYXhUcmFuc2xhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gKC1zLnNuYXBHcmlkW3Muc25hcEdyaWQubGVuZ3RoIC0gMV0pO1xuICAgICAgICB9O1xuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBTbGlkZXIvc2xpZGVzIHNpemVzXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcy51cGRhdGVBdXRvSGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gVXBkYXRlIEhlaWdodFxuICAgICAgICAgICAgdmFyIHNsaWRlID0gcy5zbGlkZXMuZXEocy5hY3RpdmVJbmRleClbMF07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHNsaWRlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHZhciBuZXdIZWlnaHQgPSBzbGlkZS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgaWYgKG5ld0hlaWdodCkgcy53cmFwcGVyLmNzcygnaGVpZ2h0JywgbmV3SGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHMudXBkYXRlQ29udGFpbmVyU2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB3aWR0aCwgaGVpZ2h0O1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzLnBhcmFtcy53aWR0aCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB3aWR0aCA9IHMucGFyYW1zLndpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgd2lkdGggPSBzLmNvbnRhaW5lclswXS5jbGllbnRXaWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygcy5wYXJhbXMuaGVpZ2h0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGhlaWdodCA9IHMucGFyYW1zLmhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGhlaWdodCA9IHMuY29udGFpbmVyWzBdLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh3aWR0aCA9PT0gMCAmJiBzLmlzSG9yaXpvbnRhbCgpIHx8IGhlaWdodCA9PT0gMCAmJiAhcy5pc0hvcml6b250YWwoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAvL1N1YnRyYWN0IHBhZGRpbmdzXG4gICAgICAgICAgICB3aWR0aCA9IHdpZHRoIC0gcGFyc2VJbnQocy5jb250YWluZXIuY3NzKCdwYWRkaW5nLWxlZnQnKSwgMTApIC0gcGFyc2VJbnQocy5jb250YWluZXIuY3NzKCdwYWRkaW5nLXJpZ2h0JyksIDEwKTtcbiAgICAgICAgICAgIGhlaWdodCA9IGhlaWdodCAtIHBhcnNlSW50KHMuY29udGFpbmVyLmNzcygncGFkZGluZy10b3AnKSwgMTApIC0gcGFyc2VJbnQocy5jb250YWluZXIuY3NzKCdwYWRkaW5nLWJvdHRvbScpLCAxMCk7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gU3RvcmUgdmFsdWVzXG4gICAgICAgICAgICBzLndpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICBzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgICAgIHMuc2l6ZSA9IHMuaXNIb3Jpem9udGFsKCkgPyBzLndpZHRoIDogcy5oZWlnaHQ7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBzLnVwZGF0ZVNsaWRlc1NpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzLnNsaWRlcyA9IHMud3JhcHBlci5jaGlsZHJlbignLicgKyBzLnBhcmFtcy5zbGlkZUNsYXNzKTtcbiAgICAgICAgICAgIHMuc25hcEdyaWQgPSBbXTtcbiAgICAgICAgICAgIHMuc2xpZGVzR3JpZCA9IFtdO1xuICAgICAgICAgICAgcy5zbGlkZXNTaXplc0dyaWQgPSBbXTtcbiAgICAgICAgXG4gICAgICAgICAgICB2YXIgc3BhY2VCZXR3ZWVuID0gcy5wYXJhbXMuc3BhY2VCZXR3ZWVuLFxuICAgICAgICAgICAgICAgIHNsaWRlUG9zaXRpb24gPSAtcy5wYXJhbXMuc2xpZGVzT2Zmc2V0QmVmb3JlLFxuICAgICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgICAgcHJldlNsaWRlU2l6ZSA9IDAsXG4gICAgICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzLnNpemUgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gICAgICAgICAgICBpZiAodHlwZW9mIHNwYWNlQmV0d2VlbiA9PT0gJ3N0cmluZycgJiYgc3BhY2VCZXR3ZWVuLmluZGV4T2YoJyUnKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuID0gcGFyc2VGbG9hdChzcGFjZUJldHdlZW4ucmVwbGFjZSgnJScsICcnKSkgLyAxMDAgKiBzLnNpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgcy52aXJ0dWFsU2l6ZSA9IC1zcGFjZUJldHdlZW47XG4gICAgICAgICAgICAvLyByZXNldCBtYXJnaW5zXG4gICAgICAgICAgICBpZiAocy5ydGwpIHMuc2xpZGVzLmNzcyh7bWFyZ2luTGVmdDogJycsIG1hcmdpblRvcDogJyd9KTtcbiAgICAgICAgICAgIGVsc2Ugcy5zbGlkZXMuY3NzKHttYXJnaW5SaWdodDogJycsIG1hcmdpbkJvdHRvbTogJyd9KTtcbiAgICAgICAgXG4gICAgICAgICAgICB2YXIgc2xpZGVzTnVtYmVyRXZlblRvUm93cztcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5zbGlkZXNQZXJDb2x1bW4gPiAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguZmxvb3Iocy5zbGlkZXMubGVuZ3RoIC8gcy5wYXJhbXMuc2xpZGVzUGVyQ29sdW1uKSA9PT0gcy5zbGlkZXMubGVuZ3RoIC8gcy5wYXJhbXMuc2xpZGVzUGVyQ29sdW1uKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc051bWJlckV2ZW5Ub1Jvd3MgPSBzLnNsaWRlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzID0gTWF0aC5jZWlsKHMuc2xpZGVzLmxlbmd0aCAvIHMucGFyYW1zLnNsaWRlc1BlckNvbHVtbikgKiBzLnBhcmFtcy5zbGlkZXNQZXJDb2x1bW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5zbGlkZXNQZXJWaWV3ICE9PSAnYXV0bycgJiYgcy5wYXJhbXMuc2xpZGVzUGVyQ29sdW1uRmlsbCA9PT0gJ3JvdycpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzTnVtYmVyRXZlblRvUm93cyA9IE1hdGgubWF4KHNsaWRlc051bWJlckV2ZW5Ub1Jvd3MsIHMucGFyYW1zLnNsaWRlc1BlclZpZXcgKiBzLnBhcmFtcy5zbGlkZXNQZXJDb2x1bW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAvLyBDYWxjIHNsaWRlc1xuICAgICAgICAgICAgdmFyIHNsaWRlU2l6ZTtcbiAgICAgICAgICAgIHZhciBzbGlkZXNQZXJDb2x1bW4gPSBzLnBhcmFtcy5zbGlkZXNQZXJDb2x1bW47XG4gICAgICAgICAgICB2YXIgc2xpZGVzUGVyUm93ID0gc2xpZGVzTnVtYmVyRXZlblRvUm93cyAvIHNsaWRlc1BlckNvbHVtbjtcbiAgICAgICAgICAgIHZhciBudW1GdWxsQ29sdW1ucyA9IHNsaWRlc1BlclJvdyAtIChzLnBhcmFtcy5zbGlkZXNQZXJDb2x1bW4gKiBzbGlkZXNQZXJSb3cgLSBzLnNsaWRlcy5sZW5ndGgpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHMuc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc2xpZGVTaXplID0gMDtcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGUgPSBzLnNsaWRlcy5lcShpKTtcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuc2xpZGVzUGVyQ29sdW1uID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTZXQgc2xpZGVzIG9yZGVyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdTbGlkZU9yZGVySW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb2x1bW4sIHJvdztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNsaWRlc1BlckNvbHVtbkZpbGwgPT09ICdjb2x1bW4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4gPSBNYXRoLmZsb29yKGkgLyBzbGlkZXNQZXJDb2x1bW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93ID0gaSAtIGNvbHVtbiAqIHNsaWRlc1BlckNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2x1bW4gPiBudW1GdWxsQ29sdW1ucyB8fCAoY29sdW1uID09PSBudW1GdWxsQ29sdW1ucyAmJiByb3cgPT09IHNsaWRlc1BlckNvbHVtbi0xKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgrK3JvdyA+PSBzbGlkZXNQZXJDb2x1bW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3U2xpZGVPcmRlckluZGV4ID0gY29sdW1uICsgcm93ICogc2xpZGVzTnVtYmVyRXZlblRvUm93cyAvIHNsaWRlc1BlckNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICctd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwJzogbmV3U2xpZGVPcmRlckluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLW1vei1ib3gtb3JkaW5hbC1ncm91cCc6IG5ld1NsaWRlT3JkZXJJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy1tcy1mbGV4LW9yZGVyJzogbmV3U2xpZGVPcmRlckluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLXdlYmtpdC1vcmRlcic6IG5ld1NsaWRlT3JkZXJJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ29yZGVyJzogbmV3U2xpZGVPcmRlckluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3cgPSBNYXRoLmZsb29yKGkgLyBzbGlkZXNQZXJSb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uID0gaSAtIHJvdyAqIHNsaWRlc1BlclJvdztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzbGlkZVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21hcmdpbi10b3AnOiAocm93ICE9PSAwICYmIHMucGFyYW1zLnNwYWNlQmV0d2VlbikgJiYgKHMucGFyYW1zLnNwYWNlQmV0d2VlbiArICdweCcpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc3dpcGVyLWNvbHVtbicsIGNvbHVtbilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXN3aXBlci1yb3cnLCByb3cpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlLmNzcygnZGlzcGxheScpID09PSAnbm9uZScpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVTaXplID0gcy5pc0hvcml6b250YWwoKSA/IHNsaWRlLm91dGVyV2lkdGgodHJ1ZSkgOiBzbGlkZS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnJvdW5kTGVuZ3Rocykgc2xpZGVTaXplID0gcm91bmQoc2xpZGVTaXplKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlU2l6ZSA9IChzLnNpemUgLSAocy5wYXJhbXMuc2xpZGVzUGVyVmlldyAtIDEpICogc3BhY2VCZXR3ZWVuKSAvIHMucGFyYW1zLnNsaWRlc1BlclZpZXc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5yb3VuZExlbmd0aHMpIHNsaWRlU2l6ZSA9IHJvdW5kKHNsaWRlU2l6ZSk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAocy5pc0hvcml6b250YWwoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGlkZXNbaV0uc3R5bGUud2lkdGggPSBzbGlkZVNpemUgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGlkZXNbaV0uc3R5bGUuaGVpZ2h0ID0gc2xpZGVTaXplICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzLnNsaWRlc1tpXS5zd2lwZXJTbGlkZVNpemUgPSBzbGlkZVNpemU7XG4gICAgICAgICAgICAgICAgcy5zbGlkZXNTaXplc0dyaWQucHVzaChzbGlkZVNpemUpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlUG9zaXRpb24gPSBzbGlkZVBvc2l0aW9uICsgc2xpZGVTaXplIC8gMiArIHByZXZTbGlkZVNpemUgLyAyICsgc3BhY2VCZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMCkgc2xpZGVQb3NpdGlvbiA9IHNsaWRlUG9zaXRpb24gLSBzLnNpemUgLyAyIC0gc3BhY2VCZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoc2xpZGVQb3NpdGlvbikgPCAxIC8gMTAwMCkgc2xpZGVQb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoaW5kZXgpICUgcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXAgPT09IDApIHMuc25hcEdyaWQucHVzaChzbGlkZVBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgcy5zbGlkZXNHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKGluZGV4KSAlIHMucGFyYW1zLnNsaWRlc1Blckdyb3VwID09PSAwKSBzLnNuYXBHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHMuc2xpZGVzR3JpZC5wdXNoKHNsaWRlUG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBzbGlkZVBvc2l0aW9uID0gc2xpZGVQb3NpdGlvbiArIHNsaWRlU2l6ZSArIHNwYWNlQmV0d2VlbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIHMudmlydHVhbFNpemUgKz0gc2xpZGVTaXplICsgc3BhY2VCZXR3ZWVuO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBwcmV2U2xpZGVTaXplID0gc2xpZGVTaXplO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBpbmRleCArKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHMudmlydHVhbFNpemUgPSBNYXRoLm1heChzLnZpcnR1YWxTaXplLCBzLnNpemUpICsgcy5wYXJhbXMuc2xpZGVzT2Zmc2V0QWZ0ZXI7XG4gICAgICAgICAgICB2YXIgbmV3U2xpZGVzR3JpZDtcbiAgICAgICAgXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgcy5ydGwgJiYgcy53cm9uZ1JUTCAmJiAocy5wYXJhbXMuZWZmZWN0ID09PSAnc2xpZGUnIHx8IHMucGFyYW1zLmVmZmVjdCA9PT0gJ2NvdmVyZmxvdycpKSB7XG4gICAgICAgICAgICAgICAgcy53cmFwcGVyLmNzcyh7d2lkdGg6IHMudmlydHVhbFNpemUgKyBzLnBhcmFtcy5zcGFjZUJldHdlZW4gKyAncHgnfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXMuc3VwcG9ydC5mbGV4Ym94IHx8IHMucGFyYW1zLnNldFdyYXBwZXJTaXplKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMuaXNIb3Jpem9udGFsKCkpIHMud3JhcHBlci5jc3Moe3dpZHRoOiBzLnZpcnR1YWxTaXplICsgcy5wYXJhbXMuc3BhY2VCZXR3ZWVuICsgJ3B4J30pO1xuICAgICAgICAgICAgICAgIGVsc2Ugcy53cmFwcGVyLmNzcyh7aGVpZ2h0OiBzLnZpcnR1YWxTaXplICsgcy5wYXJhbXMuc3BhY2VCZXR3ZWVuICsgJ3B4J30pO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5zbGlkZXNQZXJDb2x1bW4gPiAxKSB7XG4gICAgICAgICAgICAgICAgcy52aXJ0dWFsU2l6ZSA9IChzbGlkZVNpemUgKyBzLnBhcmFtcy5zcGFjZUJldHdlZW4pICogc2xpZGVzTnVtYmVyRXZlblRvUm93cztcbiAgICAgICAgICAgICAgICBzLnZpcnR1YWxTaXplID0gTWF0aC5jZWlsKHMudmlydHVhbFNpemUgLyBzLnBhcmFtcy5zbGlkZXNQZXJDb2x1bW4pIC0gcy5wYXJhbXMuc3BhY2VCZXR3ZWVuO1xuICAgICAgICAgICAgICAgIHMud3JhcHBlci5jc3Moe3dpZHRoOiBzLnZpcnR1YWxTaXplICsgcy5wYXJhbXMuc3BhY2VCZXR3ZWVuICsgJ3B4J30pO1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgICAgICAgICAgICAgICBuZXdTbGlkZXNHcmlkID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzLnNuYXBHcmlkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5zbmFwR3JpZFtpXSA8IHMudmlydHVhbFNpemUgKyBzLnNuYXBHcmlkWzBdKSBuZXdTbGlkZXNHcmlkLnB1c2gocy5zbmFwR3JpZFtpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcy5zbmFwR3JpZCA9IG5ld1NsaWRlc0dyaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC8vIFJlbW92ZSBsYXN0IGdyaWQgZWxlbWVudHMgZGVwZW5kaW5nIG9uIHdpZHRoXG4gICAgICAgICAgICBpZiAoIXMucGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICAgICAgICAgICAgbmV3U2xpZGVzR3JpZCA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzLnNuYXBHcmlkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnNuYXBHcmlkW2ldIDw9IHMudmlydHVhbFNpemUgLSBzLnNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1NsaWRlc0dyaWQucHVzaChzLnNuYXBHcmlkW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzLnNuYXBHcmlkID0gbmV3U2xpZGVzR3JpZDtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5mbG9vcihzLnZpcnR1YWxTaXplIC0gcy5zaXplKSAtIE1hdGguZmxvb3Iocy5zbmFwR3JpZFtzLnNuYXBHcmlkLmxlbmd0aCAtIDFdKSA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5zbmFwR3JpZC5wdXNoKHMudmlydHVhbFNpemUgLSBzLnNpemUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnNuYXBHcmlkLmxlbmd0aCA9PT0gMCkgcy5zbmFwR3JpZCA9IFswXTtcbiAgICAgICAgXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuc3BhY2VCZXR3ZWVuICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucnRsKSBzLnNsaWRlcy5jc3Moe21hcmdpbkxlZnQ6IHNwYWNlQmV0d2VlbiArICdweCd9KTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBzLnNsaWRlcy5jc3Moe21hcmdpblJpZ2h0OiBzcGFjZUJldHdlZW4gKyAncHgnfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Ugcy5zbGlkZXMuY3NzKHttYXJnaW5Cb3R0b206IHNwYWNlQmV0d2VlbiArICdweCd9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgcy51cGRhdGVTbGlkZXNPZmZzZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcy51cGRhdGVTbGlkZXNPZmZzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHMuc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcy5zbGlkZXNbaV0uc3dpcGVyU2xpZGVPZmZzZXQgPSBzLmlzSG9yaXpvbnRhbCgpID8gcy5zbGlkZXNbaV0ub2Zmc2V0TGVmdCA6IHMuc2xpZGVzW2ldLm9mZnNldFRvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIFNsaWRlci9zbGlkZXMgcHJvZ3Jlc3NcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBzLnVwZGF0ZVNsaWRlc1Byb2dyZXNzID0gZnVuY3Rpb24gKHRyYW5zbGF0ZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0cmFuc2xhdGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlID0gcy50cmFuc2xhdGUgfHwgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnNsaWRlcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygcy5zbGlkZXNbMF0uc3dpcGVyU2xpZGVPZmZzZXQgPT09ICd1bmRlZmluZWQnKSBzLnVwZGF0ZVNsaWRlc09mZnNldCgpO1xuICAgICAgICBcbiAgICAgICAgICAgIHZhciBvZmZzZXRDZW50ZXIgPSAtdHJhbnNsYXRlO1xuICAgICAgICAgICAgaWYgKHMucnRsKSBvZmZzZXRDZW50ZXIgPSB0cmFuc2xhdGU7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gVmlzaWJsZSBTbGlkZXNcbiAgICAgICAgICAgIHMuc2xpZGVzLnJlbW92ZUNsYXNzKHMucGFyYW1zLnNsaWRlVmlzaWJsZUNsYXNzKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcy5zbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGUgPSBzLnNsaWRlc1tpXTtcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGVQcm9ncmVzcyA9IChvZmZzZXRDZW50ZXIgLSBzbGlkZS5zd2lwZXJTbGlkZU9mZnNldCkgLyAoc2xpZGUuc3dpcGVyU2xpZGVTaXplICsgcy5wYXJhbXMuc3BhY2VCZXR3ZWVuKTtcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMud2F0Y2hTbGlkZXNWaXNpYmlsaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZUJlZm9yZSA9IC0ob2Zmc2V0Q2VudGVyIC0gc2xpZGUuc3dpcGVyU2xpZGVPZmZzZXQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGVBZnRlciA9IHNsaWRlQmVmb3JlICsgcy5zbGlkZXNTaXplc0dyaWRbaV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBpc1Zpc2libGUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgKHNsaWRlQmVmb3JlID49IDAgJiYgc2xpZGVCZWZvcmUgPCBzLnNpemUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAoc2xpZGVBZnRlciA+IDAgJiYgc2xpZGVBZnRlciA8PSBzLnNpemUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAoc2xpZGVCZWZvcmUgPD0gMCAmJiBzbGlkZUFmdGVyID49IHMuc2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpZGVzLmVxKGkpLmFkZENsYXNzKHMucGFyYW1zLnNsaWRlVmlzaWJsZUNsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzbGlkZS5wcm9ncmVzcyA9IHMucnRsID8gLXNsaWRlUHJvZ3Jlc3MgOiBzbGlkZVByb2dyZXNzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBzLnVwZGF0ZVByb2dyZXNzID0gZnVuY3Rpb24gKHRyYW5zbGF0ZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0cmFuc2xhdGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlID0gcy50cmFuc2xhdGUgfHwgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB0cmFuc2xhdGVzRGlmZiA9IHMubWF4VHJhbnNsYXRlKCkgLSBzLm1pblRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgdmFyIHdhc0JlZ2lubmluZyA9IHMuaXNCZWdpbm5pbmc7XG4gICAgICAgICAgICB2YXIgd2FzRW5kID0gcy5pc0VuZDtcbiAgICAgICAgICAgIGlmICh0cmFuc2xhdGVzRGlmZiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHMucHJvZ3Jlc3MgPSAwO1xuICAgICAgICAgICAgICAgIHMuaXNCZWdpbm5pbmcgPSBzLmlzRW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHMucHJvZ3Jlc3MgPSAodHJhbnNsYXRlIC0gcy5taW5UcmFuc2xhdGUoKSkgLyAodHJhbnNsYXRlc0RpZmYpO1xuICAgICAgICAgICAgICAgIHMuaXNCZWdpbm5pbmcgPSBzLnByb2dyZXNzIDw9IDA7XG4gICAgICAgICAgICAgICAgcy5pc0VuZCA9IHMucHJvZ3Jlc3MgPj0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLmlzQmVnaW5uaW5nICYmICF3YXNCZWdpbm5pbmcpIHMuZW1pdCgnb25SZWFjaEJlZ2lubmluZycsIHMpO1xuICAgICAgICAgICAgaWYgKHMuaXNFbmQgJiYgIXdhc0VuZCkgcy5lbWl0KCdvblJlYWNoRW5kJywgcyk7XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3MpIHMudXBkYXRlU2xpZGVzUHJvZ3Jlc3ModHJhbnNsYXRlKTtcbiAgICAgICAgICAgIHMuZW1pdCgnb25Qcm9ncmVzcycsIHMsIHMucHJvZ3Jlc3MpO1xuICAgICAgICB9O1xuICAgICAgICBzLnVwZGF0ZUFjdGl2ZUluZGV4ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHRyYW5zbGF0ZSA9IHMucnRsID8gcy50cmFuc2xhdGUgOiAtcy50cmFuc2xhdGU7XG4gICAgICAgICAgICB2YXIgbmV3QWN0aXZlSW5kZXgsIGksIHNuYXBJbmRleDtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzLnNsaWRlc0dyaWQubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzLnNsaWRlc0dyaWRbaSArIDFdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHJhbnNsYXRlID49IHMuc2xpZGVzR3JpZFtpXSAmJiB0cmFuc2xhdGUgPCBzLnNsaWRlc0dyaWRbaSArIDFdIC0gKHMuc2xpZGVzR3JpZFtpICsgMV0gLSBzLnNsaWRlc0dyaWRbaV0pIC8gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QWN0aXZlSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRyYW5zbGF0ZSA+PSBzLnNsaWRlc0dyaWRbaV0gJiYgdHJhbnNsYXRlIDwgcy5zbGlkZXNHcmlkW2kgKyAxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QWN0aXZlSW5kZXggPSBpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zbGF0ZSA+PSBzLnNsaWRlc0dyaWRbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0FjdGl2ZUluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE5vcm1hbGl6ZSBzbGlkZUluZGV4XG4gICAgICAgICAgICBpZiAobmV3QWN0aXZlSW5kZXggPCAwIHx8IHR5cGVvZiBuZXdBY3RpdmVJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIG5ld0FjdGl2ZUluZGV4ID0gMDtcbiAgICAgICAgICAgIC8vIGZvciAoaSA9IDA7IGkgPCBzLnNsaWRlc0dyaWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAvLyBpZiAoLSB0cmFuc2xhdGUgPj0gcy5zbGlkZXNHcmlkW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5ld0FjdGl2ZUluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBzbmFwSW5kZXggPSBNYXRoLmZsb29yKG5ld0FjdGl2ZUluZGV4IC8gcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuICAgICAgICAgICAgaWYgKHNuYXBJbmRleCA+PSBzLnNuYXBHcmlkLmxlbmd0aCkgc25hcEluZGV4ID0gcy5zbmFwR3JpZC5sZW5ndGggLSAxO1xuICAgICAgICBcbiAgICAgICAgICAgIGlmIChuZXdBY3RpdmVJbmRleCA9PT0gcy5hY3RpdmVJbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHMuc25hcEluZGV4ID0gc25hcEluZGV4O1xuICAgICAgICAgICAgcy5wcmV2aW91c0luZGV4ID0gcy5hY3RpdmVJbmRleDtcbiAgICAgICAgICAgIHMuYWN0aXZlSW5kZXggPSBuZXdBY3RpdmVJbmRleDtcbiAgICAgICAgICAgIHMudXBkYXRlQ2xhc3NlcygpO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgQ2xhc3Nlc1xuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIHMudXBkYXRlQ2xhc3NlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHMuc2xpZGVzLnJlbW92ZUNsYXNzKHMucGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3MgKyAnICcgKyBzLnBhcmFtcy5zbGlkZU5leHRDbGFzcyArICcgJyArIHMucGFyYW1zLnNsaWRlUHJldkNsYXNzKTtcbiAgICAgICAgICAgIHZhciBhY3RpdmVTbGlkZSA9IHMuc2xpZGVzLmVxKHMuYWN0aXZlSW5kZXgpO1xuICAgICAgICAgICAgLy8gQWN0aXZlIGNsYXNzZXNcbiAgICAgICAgICAgIGFjdGl2ZVNsaWRlLmFkZENsYXNzKHMucGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3MpO1xuICAgICAgICAgICAgLy8gTmV4dCBTbGlkZVxuICAgICAgICAgICAgdmFyIG5leHRTbGlkZSA9IGFjdGl2ZVNsaWRlLm5leHQoJy4nICsgcy5wYXJhbXMuc2xpZGVDbGFzcykuYWRkQ2xhc3Mocy5wYXJhbXMuc2xpZGVOZXh0Q2xhc3MpO1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxvb3AgJiYgbmV4dFNsaWRlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHMuc2xpZGVzLmVxKDApLmFkZENsYXNzKHMucGFyYW1zLnNsaWRlTmV4dENsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFByZXYgU2xpZGVcbiAgICAgICAgICAgIHZhciBwcmV2U2xpZGUgPSBhY3RpdmVTbGlkZS5wcmV2KCcuJyArIHMucGFyYW1zLnNsaWRlQ2xhc3MpLmFkZENsYXNzKHMucGFyYW1zLnNsaWRlUHJldkNsYXNzKTtcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sb29wICYmIHByZXZTbGlkZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBzLnNsaWRlcy5lcSgtMSkuYWRkQ2xhc3Mocy5wYXJhbXMuc2xpZGVQcmV2Q2xhc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC8vIFBhZ2luYXRpb25cbiAgICAgICAgICAgIGlmIChzLnBhZ2luYXRpb25Db250YWluZXIgJiYgcy5wYWdpbmF0aW9uQ29udGFpbmVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyBDdXJyZW50L1RvdGFsXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnQsXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsID0gcy5wYXJhbXMubG9vcCA/IE1hdGguY2VpbCgocy5zbGlkZXMubGVuZ3RoIC0gcy5sb29wZWRTbGlkZXMgKiAyKSAvIHMucGFyYW1zLnNsaWRlc1Blckdyb3VwKSA6IHMuc25hcEdyaWQubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sb29wKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBNYXRoLmNlaWwoKHMuYWN0aXZlSW5kZXggLSBzLmxvb3BlZFNsaWRlcykvcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudCA+IHMuc2xpZGVzLmxlbmd0aCAtIDEgLSBzLmxvb3BlZFNsaWRlcyAqIDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50IC0gKHMuc2xpZGVzLmxlbmd0aCAtIHMubG9vcGVkU2xpZGVzICogMik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgPiB0b3RhbCAtIDEpIGN1cnJlbnQgPSBjdXJyZW50IC0gdG90YWw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50IDwgMCAmJiBzLnBhcmFtcy5wYWdpbmF0aW9uVHlwZSAhPT0gJ2J1bGxldHMnKSBjdXJyZW50ID0gdG90YWwgKyBjdXJyZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzLnNuYXBJbmRleCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBzLnNuYXBJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBzLmFjdGl2ZUluZGV4IHx8IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVHlwZXNcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMucGFnaW5hdGlvblR5cGUgPT09ICdidWxsZXRzJyAmJiBzLmJ1bGxldHMgJiYgcy5idWxsZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcy5idWxsZXRzLnJlbW92ZUNsYXNzKHMucGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFnaW5hdGlvbkNvbnRhaW5lci5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLmJ1bGxldHMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaW5kZXgoKSA9PT0gY3VycmVudCkgJCh0aGlzKS5hZGRDbGFzcyhzLnBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuYnVsbGV0cy5lcShjdXJyZW50KS5hZGRDbGFzcyhzLnBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnBhZ2luYXRpb25UeXBlID09PSAnZnJhY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHMucGFnaW5hdGlvbkNvbnRhaW5lci5maW5kKCcuJyArIHMucGFyYW1zLnBhZ2luYXRpb25DdXJyZW50Q2xhc3MpLnRleHQoY3VycmVudCArIDEpO1xuICAgICAgICAgICAgICAgICAgICBzLnBhZ2luYXRpb25Db250YWluZXIuZmluZCgnLicgKyBzLnBhcmFtcy5wYWdpbmF0aW9uVG90YWxDbGFzcykudGV4dCh0b3RhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wYWdpbmF0aW9uVHlwZSA9PT0gJ3Byb2dyZXNzJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2NhbGUgPSAoY3VycmVudCArIDEpIC8gdG90YWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZVggPSBzY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlWSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcy5pc0hvcml6b250YWwoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVZID0gc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZVggPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHMucGFnaW5hdGlvbkNvbnRhaW5lci5maW5kKCcuJyArIHMucGFyYW1zLnBhZ2luYXRpb25Qcm9ncmVzc2JhckNsYXNzKS50cmFuc2Zvcm0oJ3RyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZVgoJyArIHNjYWxlWCArICcpIHNjYWxlWSgnICsgc2NhbGVZICsgJyknKS50cmFuc2l0aW9uKHMucGFyYW1zLnNwZWVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnBhZ2luYXRpb25UeXBlID09PSAnY3VzdG9tJyAmJiBzLnBhcmFtcy5wYWdpbmF0aW9uQ3VzdG9tUmVuZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHMucGFnaW5hdGlvbkNvbnRhaW5lci5odG1sKHMucGFyYW1zLnBhZ2luYXRpb25DdXN0b21SZW5kZXIocywgY3VycmVudCArIDEsIHRvdGFsKSk7XG4gICAgICAgICAgICAgICAgICAgIHMuZW1pdCgnb25QYWdpbmF0aW9uUmVuZGVyZWQnLCBzLCBzLnBhZ2luYXRpb25Db250YWluZXJbMF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAvLyBOZXh0L2FjdGl2ZSBidXR0b25zXG4gICAgICAgICAgICBpZiAoIXMucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMucHJldkJ1dHRvbiAmJiBzLnByZXZCdXR0b24gJiYgcy5wcmV2QnV0dG9uLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMuaXNCZWdpbm5pbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMucHJldkJ1dHRvbi5hZGRDbGFzcyhzLnBhcmFtcy5idXR0b25EaXNhYmxlZENsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5hMTF5ICYmIHMuYTExeSkgcy5hMTF5LmRpc2FibGUocy5wcmV2QnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMucHJldkJ1dHRvbi5yZW1vdmVDbGFzcyhzLnBhcmFtcy5idXR0b25EaXNhYmxlZENsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5hMTF5ICYmIHMuYTExeSkgcy5hMTF5LmVuYWJsZShzLnByZXZCdXR0b24pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5uZXh0QnV0dG9uICYmIHMubmV4dEJ1dHRvbiAmJiBzLm5leHRCdXR0b24ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5pc0VuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5uZXh0QnV0dG9uLmFkZENsYXNzKHMucGFyYW1zLmJ1dHRvbkRpc2FibGVkQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmExMXkgJiYgcy5hMTF5KSBzLmExMXkuZGlzYWJsZShzLm5leHRCdXR0b24pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5uZXh0QnV0dG9uLnJlbW92ZUNsYXNzKHMucGFyYW1zLmJ1dHRvbkRpc2FibGVkQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmExMXkgJiYgcy5hMTF5KSBzLmExMXkuZW5hYmxlKHMubmV4dEJ1dHRvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBQYWdpbmF0aW9uXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcy51cGRhdGVQYWdpbmF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy5wYWdpbmF0aW9uKSByZXR1cm47XG4gICAgICAgICAgICBpZiAocy5wYWdpbmF0aW9uQ29udGFpbmVyICYmIHMucGFnaW5hdGlvbkNvbnRhaW5lci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhZ2luYXRpb25IVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnBhZ2luYXRpb25UeXBlID09PSAnYnVsbGV0cycpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG51bWJlck9mQnVsbGV0cyA9IHMucGFyYW1zLmxvb3AgPyBNYXRoLmNlaWwoKHMuc2xpZGVzLmxlbmd0aCAtIHMubG9vcGVkU2xpZGVzICogMikgLyBzLnBhcmFtcy5zbGlkZXNQZXJHcm91cCkgOiBzLnNuYXBHcmlkLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXJPZkJ1bGxldHM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnBhZ2luYXRpb25CdWxsZXRSZW5kZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uSFRNTCArPSBzLnBhcmFtcy5wYWdpbmF0aW9uQnVsbGV0UmVuZGVyKGksIHMucGFyYW1zLmJ1bGxldENsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25IVE1MICs9ICc8JyArIHMucGFyYW1zLnBhZ2luYXRpb25FbGVtZW50KycgY2xhc3M9XCInICsgcy5wYXJhbXMuYnVsbGV0Q2xhc3MgKyAnXCI+PC8nICsgcy5wYXJhbXMucGFnaW5hdGlvbkVsZW1lbnQgKyAnPic7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcy5wYWdpbmF0aW9uQ29udGFpbmVyLmh0bWwocGFnaW5hdGlvbkhUTUwpO1xuICAgICAgICAgICAgICAgICAgICBzLmJ1bGxldHMgPSBzLnBhZ2luYXRpb25Db250YWluZXIuZmluZCgnLicgKyBzLnBhcmFtcy5idWxsZXRDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wYWdpbmF0aW9uQ2xpY2thYmxlICYmIHMucGFyYW1zLmExMXkgJiYgcy5hMTF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLmExMXkuaW5pdFBhZ2luYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMucGFnaW5hdGlvblR5cGUgPT09ICdmcmFjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnBhZ2luYXRpb25GcmFjdGlvblJlbmRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbkhUTUwgPSBzLnBhcmFtcy5wYWdpbmF0aW9uRnJhY3Rpb25SZW5kZXIocywgcy5wYXJhbXMucGFnaW5hdGlvbkN1cnJlbnRDbGFzcywgcy5wYXJhbXMucGFnaW5hdGlvblRvdGFsQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbkhUTUwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cIicgKyBzLnBhcmFtcy5wYWdpbmF0aW9uQ3VycmVudENsYXNzICsgJ1wiPjwvc3Bhbj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnIC8gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiJyArIHMucGFyYW1zLnBhZ2luYXRpb25Ub3RhbENsYXNzKydcIj48L3NwYW4+JztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzLnBhZ2luYXRpb25Db250YWluZXIuaHRtbChwYWdpbmF0aW9uSFRNTCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wYWdpbmF0aW9uVHlwZSA9PT0gJ3Byb2dyZXNzJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMucGFnaW5hdGlvblByb2dyZXNzUmVuZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uSFRNTCA9IHMucGFyYW1zLnBhZ2luYXRpb25Qcm9ncmVzc1JlbmRlcihzLCBzLnBhcmFtcy5wYWdpbmF0aW9uUHJvZ3Jlc3NiYXJDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uSFRNTCA9ICc8c3BhbiBjbGFzcz1cIicgKyBzLnBhcmFtcy5wYWdpbmF0aW9uUHJvZ3Jlc3NiYXJDbGFzcyArICdcIj48L3NwYW4+JztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzLnBhZ2luYXRpb25Db250YWluZXIuaHRtbChwYWdpbmF0aW9uSFRNTCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wYWdpbmF0aW9uVHlwZSAhPT0gJ2N1c3RvbScpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5lbWl0KCdvblBhZ2luYXRpb25SZW5kZXJlZCcsIHMsIHMucGFnaW5hdGlvbkNvbnRhaW5lclswXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBDb21tb24gdXBkYXRlIG1ldGhvZFxuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIHMudXBkYXRlID0gZnVuY3Rpb24gKHVwZGF0ZVRyYW5zbGF0ZSkge1xuICAgICAgICAgICAgcy51cGRhdGVDb250YWluZXJTaXplKCk7XG4gICAgICAgICAgICBzLnVwZGF0ZVNsaWRlc1NpemUoKTtcbiAgICAgICAgICAgIHMudXBkYXRlUHJvZ3Jlc3MoKTtcbiAgICAgICAgICAgIHMudXBkYXRlUGFnaW5hdGlvbigpO1xuICAgICAgICAgICAgcy51cGRhdGVDbGFzc2VzKCk7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuc2Nyb2xsYmFyICYmIHMuc2Nyb2xsYmFyKSB7XG4gICAgICAgICAgICAgICAgcy5zY3JvbGxiYXIuc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBmb3JjZVNldFRyYW5zbGF0ZSgpIHtcbiAgICAgICAgICAgICAgICBuZXdUcmFuc2xhdGUgPSBNYXRoLm1pbihNYXRoLm1heChzLnRyYW5zbGF0ZSwgcy5tYXhUcmFuc2xhdGUoKSksIHMubWluVHJhbnNsYXRlKCkpO1xuICAgICAgICAgICAgICAgIHMuc2V0V3JhcHBlclRyYW5zbGF0ZShuZXdUcmFuc2xhdGUpO1xuICAgICAgICAgICAgICAgIHMudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICAgICAgICAgICAgICBzLnVwZGF0ZUNsYXNzZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh1cGRhdGVUcmFuc2xhdGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdHJhbnNsYXRlZCwgbmV3VHJhbnNsYXRlO1xuICAgICAgICAgICAgICAgIGlmIChzLmNvbnRyb2xsZXIgJiYgcy5jb250cm9sbGVyLnNwbGluZSkge1xuICAgICAgICAgICAgICAgICAgICBzLmNvbnRyb2xsZXIuc3BsaW5lID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuZnJlZU1vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yY2VTZXRUcmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmF1dG9IZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMudXBkYXRlQXV0b0hlaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHMucGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyB8fCBzLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID4gMSkgJiYgcy5pc0VuZCAmJiAhcy5wYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZWQgPSBzLnNsaWRlVG8ocy5zbGlkZXMubGVuZ3RoIC0gMSwgMCwgZmFsc2UsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlZCA9IHMuc2xpZGVUbyhzLmFjdGl2ZUluZGV4LCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0cmFuc2xhdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JjZVNldFRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocy5wYXJhbXMuYXV0b0hlaWdodCkge1xuICAgICAgICAgICAgICAgIHMudXBkYXRlQXV0b0hlaWdodCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgUmVzaXplIEhhbmRsZXJcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBzLm9uUmVzaXplID0gZnVuY3Rpb24gKGZvcmNlVXBkYXRlUGFnaW5hdGlvbikge1xuICAgICAgICAgICAgLy9CcmVha3BvaW50c1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmJyZWFrcG9pbnRzKSB7XG4gICAgICAgICAgICAgICAgcy5zZXRCcmVha3BvaW50KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gRGlzYWJsZSBsb2NrcyBvbiByZXNpemVcbiAgICAgICAgICAgIHZhciBhbGxvd1N3aXBlVG9QcmV2ID0gcy5wYXJhbXMuYWxsb3dTd2lwZVRvUHJldjtcbiAgICAgICAgICAgIHZhciBhbGxvd1N3aXBlVG9OZXh0ID0gcy5wYXJhbXMuYWxsb3dTd2lwZVRvTmV4dDtcbiAgICAgICAgICAgIHMucGFyYW1zLmFsbG93U3dpcGVUb1ByZXYgPSBzLnBhcmFtcy5hbGxvd1N3aXBlVG9OZXh0ID0gdHJ1ZTtcbiAgICAgICAgXG4gICAgICAgICAgICBzLnVwZGF0ZUNvbnRhaW5lclNpemUoKTtcbiAgICAgICAgICAgIHMudXBkYXRlU2xpZGVzU2l6ZSgpO1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyB8fCBzLnBhcmFtcy5mcmVlTW9kZSB8fCBmb3JjZVVwZGF0ZVBhZ2luYXRpb24pIHMudXBkYXRlUGFnaW5hdGlvbigpO1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNjcm9sbGJhciAmJiBzLnNjcm9sbGJhcikge1xuICAgICAgICAgICAgICAgIHMuc2Nyb2xsYmFyLnNldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMuY29udHJvbGxlciAmJiBzLmNvbnRyb2xsZXIuc3BsaW5lKSB7XG4gICAgICAgICAgICAgICAgcy5jb250cm9sbGVyLnNwbGluZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzbGlkZUNoYW5nZWRCeVNsaWRlVG8gPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5mcmVlTW9kZSkge1xuICAgICAgICAgICAgICAgIHZhciBuZXdUcmFuc2xhdGUgPSBNYXRoLm1pbihNYXRoLm1heChzLnRyYW5zbGF0ZSwgcy5tYXhUcmFuc2xhdGUoKSksIHMubWluVHJhbnNsYXRlKCkpO1xuICAgICAgICAgICAgICAgIHMuc2V0V3JhcHBlclRyYW5zbGF0ZShuZXdUcmFuc2xhdGUpO1xuICAgICAgICAgICAgICAgIHMudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICAgICAgICAgICAgICBzLnVwZGF0ZUNsYXNzZXMoKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmF1dG9IZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcy51cGRhdGVBdXRvSGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcy51cGRhdGVDbGFzc2VzKCk7XG4gICAgICAgICAgICAgICAgaWYgKChzLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgfHwgcy5wYXJhbXMuc2xpZGVzUGVyVmlldyA+IDEpICYmIHMuaXNFbmQgJiYgIXMucGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlQ2hhbmdlZEJ5U2xpZGVUbyA9IHMuc2xpZGVUbyhzLnNsaWRlcy5sZW5ndGggLSAxLCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZUNoYW5nZWRCeVNsaWRlVG8gPSBzLnNsaWRlVG8ocy5hY3RpdmVJbmRleCwgMCwgZmFsc2UsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sYXp5TG9hZGluZyAmJiAhc2xpZGVDaGFuZ2VkQnlTbGlkZVRvICYmIHMubGF6eSkge1xuICAgICAgICAgICAgICAgIHMubGF6eS5sb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSZXR1cm4gbG9ja3MgYWZ0ZXIgcmVzaXplXG4gICAgICAgICAgICBzLnBhcmFtcy5hbGxvd1N3aXBlVG9QcmV2ID0gYWxsb3dTd2lwZVRvUHJldjtcbiAgICAgICAgICAgIHMucGFyYW1zLmFsbG93U3dpcGVUb05leHQgPSBhbGxvd1N3aXBlVG9OZXh0O1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgRXZlbnRzXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgXG4gICAgICAgIC8vRGVmaW5lIFRvdWNoIEV2ZW50c1xuICAgICAgICB2YXIgZGVza3RvcEV2ZW50cyA9IFsnbW91c2Vkb3duJywgJ21vdXNlbW92ZScsICdtb3VzZXVwJ107XG4gICAgICAgIGlmICh3aW5kb3cubmF2aWdhdG9yLnBvaW50ZXJFbmFibGVkKSBkZXNrdG9wRXZlbnRzID0gWydwb2ludGVyZG93bicsICdwb2ludGVybW92ZScsICdwb2ludGVydXAnXTtcbiAgICAgICAgZWxzZSBpZiAod2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkKSBkZXNrdG9wRXZlbnRzID0gWydNU1BvaW50ZXJEb3duJywgJ01TUG9pbnRlck1vdmUnLCAnTVNQb2ludGVyVXAnXTtcbiAgICAgICAgcy50b3VjaEV2ZW50cyA9IHtcbiAgICAgICAgICAgIHN0YXJ0IDogcy5zdXBwb3J0LnRvdWNoIHx8ICFzLnBhcmFtcy5zaW11bGF0ZVRvdWNoICA/ICd0b3VjaHN0YXJ0JyA6IGRlc2t0b3BFdmVudHNbMF0sXG4gICAgICAgICAgICBtb3ZlIDogcy5zdXBwb3J0LnRvdWNoIHx8ICFzLnBhcmFtcy5zaW11bGF0ZVRvdWNoID8gJ3RvdWNobW92ZScgOiBkZXNrdG9wRXZlbnRzWzFdLFxuICAgICAgICAgICAgZW5kIDogcy5zdXBwb3J0LnRvdWNoIHx8ICFzLnBhcmFtcy5zaW11bGF0ZVRvdWNoID8gJ3RvdWNoZW5kJyA6IGRlc2t0b3BFdmVudHNbMl1cbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAvLyBXUDggVG91Y2ggRXZlbnRzIEZpeFxuICAgICAgICBpZiAod2luZG93Lm5hdmlnYXRvci5wb2ludGVyRW5hYmxlZCB8fCB3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQpIHtcbiAgICAgICAgICAgIChzLnBhcmFtcy50b3VjaEV2ZW50c1RhcmdldCA9PT0gJ2NvbnRhaW5lcicgPyBzLmNvbnRhaW5lciA6IHMud3JhcHBlcikuYWRkQ2xhc3MoJ3N3aXBlci13cDgtJyArIHMucGFyYW1zLmRpcmVjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIEF0dGFjaC9kZXRhY2ggZXZlbnRzXG4gICAgICAgIHMuaW5pdEV2ZW50cyA9IGZ1bmN0aW9uIChkZXRhY2gpIHtcbiAgICAgICAgICAgIHZhciBhY3Rpb25Eb20gPSBkZXRhY2ggPyAnb2ZmJyA6ICdvbic7XG4gICAgICAgICAgICB2YXIgYWN0aW9uID0gZGV0YWNoID8gJ3JlbW92ZUV2ZW50TGlzdGVuZXInIDogJ2FkZEV2ZW50TGlzdGVuZXInO1xuICAgICAgICAgICAgdmFyIHRvdWNoRXZlbnRzVGFyZ2V0ID0gcy5wYXJhbXMudG91Y2hFdmVudHNUYXJnZXQgPT09ICdjb250YWluZXInID8gcy5jb250YWluZXJbMF0gOiBzLndyYXBwZXJbMF07XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gcy5zdXBwb3J0LnRvdWNoID8gdG91Y2hFdmVudHNUYXJnZXQgOiBkb2N1bWVudDtcbiAgICAgICAgXG4gICAgICAgICAgICB2YXIgbW92ZUNhcHR1cmUgPSBzLnBhcmFtcy5uZXN0ZWQgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIFxuICAgICAgICAgICAgLy9Ub3VjaCBFdmVudHNcbiAgICAgICAgICAgIGlmIChzLmJyb3dzZXIuaWUpIHtcbiAgICAgICAgICAgICAgICB0b3VjaEV2ZW50c1RhcmdldFthY3Rpb25dKHMudG91Y2hFdmVudHMuc3RhcnQsIHMub25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2FjdGlvbl0ocy50b3VjaEV2ZW50cy5tb3ZlLCBzLm9uVG91Y2hNb3ZlLCBtb3ZlQ2FwdHVyZSk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2FjdGlvbl0ocy50b3VjaEV2ZW50cy5lbmQsIHMub25Ub3VjaEVuZCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHMuc3VwcG9ydC50b3VjaCkge1xuICAgICAgICAgICAgICAgICAgICB0b3VjaEV2ZW50c1RhcmdldFthY3Rpb25dKHMudG91Y2hFdmVudHMuc3RhcnQsIHMub25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvdWNoRXZlbnRzVGFyZ2V0W2FjdGlvbl0ocy50b3VjaEV2ZW50cy5tb3ZlLCBzLm9uVG91Y2hNb3ZlLCBtb3ZlQ2FwdHVyZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvdWNoRXZlbnRzVGFyZ2V0W2FjdGlvbl0ocy50b3VjaEV2ZW50cy5lbmQsIHMub25Ub3VjaEVuZCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zLnNpbXVsYXRlVG91Y2ggJiYgIXMuZGV2aWNlLmlvcyAmJiAhcy5kZXZpY2UuYW5kcm9pZCkge1xuICAgICAgICAgICAgICAgICAgICB0b3VjaEV2ZW50c1RhcmdldFthY3Rpb25dKCdtb3VzZWRvd24nLCBzLm9uVG91Y2hTdGFydCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudFthY3Rpb25dKCdtb3VzZW1vdmUnLCBzLm9uVG91Y2hNb3ZlLCBtb3ZlQ2FwdHVyZSk7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50W2FjdGlvbl0oJ21vdXNldXAnLCBzLm9uVG91Y2hFbmQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3dbYWN0aW9uXSgncmVzaXplJywgcy5vblJlc2l6ZSk7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gTmV4dCwgUHJldiwgSW5kZXhcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5uZXh0QnV0dG9uICYmIHMubmV4dEJ1dHRvbiAmJiBzLm5leHRCdXR0b24ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHMubmV4dEJ1dHRvblthY3Rpb25Eb21dKCdjbGljaycsIHMub25DbGlja05leHQpO1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5hMTF5ICYmIHMuYTExeSkgcy5uZXh0QnV0dG9uW2FjdGlvbkRvbV0oJ2tleWRvd24nLCBzLmExMXkub25FbnRlcktleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMucHJldkJ1dHRvbiAmJiBzLnByZXZCdXR0b24gJiYgcy5wcmV2QnV0dG9uLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBzLnByZXZCdXR0b25bYWN0aW9uRG9tXSgnY2xpY2snLCBzLm9uQ2xpY2tQcmV2KTtcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuYTExeSAmJiBzLmExMXkpIHMucHJldkJ1dHRvblthY3Rpb25Eb21dKCdrZXlkb3duJywgcy5hMTF5Lm9uRW50ZXJLZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnBhZ2luYXRpb24gJiYgcy5wYXJhbXMucGFnaW5hdGlvbkNsaWNrYWJsZSkge1xuICAgICAgICAgICAgICAgIHMucGFnaW5hdGlvbkNvbnRhaW5lclthY3Rpb25Eb21dKCdjbGljaycsICcuJyArIHMucGFyYW1zLmJ1bGxldENsYXNzLCBzLm9uQ2xpY2tJbmRleCk7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmExMXkgJiYgcy5hMTF5KSBzLnBhZ2luYXRpb25Db250YWluZXJbYWN0aW9uRG9tXSgna2V5ZG93bicsICcuJyArIHMucGFyYW1zLmJ1bGxldENsYXNzLCBzLmExMXkub25FbnRlcktleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gUHJldmVudCBMaW5rcyBDbGlja3NcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wcmV2ZW50Q2xpY2tzIHx8IHMucGFyYW1zLnByZXZlbnRDbGlja3NQcm9wYWdhdGlvbikgdG91Y2hFdmVudHNUYXJnZXRbYWN0aW9uXSgnY2xpY2snLCBzLnByZXZlbnRDbGlja3MsIHRydWUpO1xuICAgICAgICB9O1xuICAgICAgICBzLmF0dGFjaEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHMuaW5pdEV2ZW50cygpO1xuICAgICAgICB9O1xuICAgICAgICBzLmRldGFjaEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHMuaW5pdEV2ZW50cyh0cnVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIEhhbmRsZSBDbGlja3NcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICAvLyBQcmV2ZW50IENsaWNrc1xuICAgICAgICBzLmFsbG93Q2xpY2sgPSB0cnVlO1xuICAgICAgICBzLnByZXZlbnRDbGlja3MgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKCFzLmFsbG93Q2xpY2spIHtcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMucHJldmVudENsaWNrcykgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wcmV2ZW50Q2xpY2tzUHJvcGFnYXRpb24gJiYgcy5hbmltYXRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIENsaWNrc1xuICAgICAgICBzLm9uQ2xpY2tOZXh0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChzLmlzRW5kICYmICFzLnBhcmFtcy5sb29wKSByZXR1cm47XG4gICAgICAgICAgICBzLnNsaWRlTmV4dCgpO1xuICAgICAgICB9O1xuICAgICAgICBzLm9uQ2xpY2tQcmV2ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChzLmlzQmVnaW5uaW5nICYmICFzLnBhcmFtcy5sb29wKSByZXR1cm47XG4gICAgICAgICAgICBzLnNsaWRlUHJldigpO1xuICAgICAgICB9O1xuICAgICAgICBzLm9uQ2xpY2tJbmRleCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSAkKHRoaXMpLmluZGV4KCkgKiBzLnBhcmFtcy5zbGlkZXNQZXJHcm91cDtcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sb29wKSBpbmRleCA9IGluZGV4ICsgcy5sb29wZWRTbGlkZXM7XG4gICAgICAgICAgICBzLnNsaWRlVG8oaW5kZXgpO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgSGFuZGxlIFRvdWNoZXNcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBmdW5jdGlvbiBmaW5kRWxlbWVudEluRXZlbnQoZSwgc2VsZWN0b3IpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQoZS50YXJnZXQpO1xuICAgICAgICAgICAgaWYgKCFlbC5pcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBlbCA9IGVsLnBhcmVudHMoc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzZWxlY3Rvci5ub2RlVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm91bmQ7XG4gICAgICAgICAgICAgICAgICAgIGVsLnBhcmVudHMoKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgX2VsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2VsID09PSBzZWxlY3RvcikgZm91bmQgPSBzZWxlY3RvcjtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZm91bmQpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIHNlbGVjdG9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVsWzBdO1xuICAgICAgICB9XG4gICAgICAgIHMudXBkYXRlQ2xpY2tlZFNsaWRlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBzbGlkZSA9IGZpbmRFbGVtZW50SW5FdmVudChlLCAnLicgKyBzLnBhcmFtcy5zbGlkZUNsYXNzKTtcbiAgICAgICAgICAgIHZhciBzbGlkZUZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoc2xpZGUpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHMuc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnNsaWRlc1tpXSA9PT0gc2xpZGUpIHNsaWRlRm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBpZiAoc2xpZGUgJiYgc2xpZGVGb3VuZCkge1xuICAgICAgICAgICAgICAgIHMuY2xpY2tlZFNsaWRlID0gc2xpZGU7XG4gICAgICAgICAgICAgICAgcy5jbGlja2VkSW5kZXggPSAkKHNsaWRlKS5pbmRleCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcy5jbGlja2VkU2xpZGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgcy5jbGlja2VkSW5kZXggPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNsaWRlVG9DbGlja2VkU2xpZGUgJiYgcy5jbGlja2VkSW5kZXggIT09IHVuZGVmaW5lZCAmJiBzLmNsaWNrZWRJbmRleCAhPT0gcy5hY3RpdmVJbmRleCkge1xuICAgICAgICAgICAgICAgIHZhciBzbGlkZVRvSW5kZXggPSBzLmNsaWNrZWRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgcmVhbEluZGV4LFxuICAgICAgICAgICAgICAgICAgICBkdXBsaWNhdGVkU2xpZGVzO1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sb29wKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmFuaW1hdGluZykgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICByZWFsSW5kZXggPSAkKHMuY2xpY2tlZFNsaWRlKS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoc2xpZGVUb0luZGV4IDwgcy5sb29wZWRTbGlkZXMgLSBzLnBhcmFtcy5zbGlkZXNQZXJWaWV3LzIpIHx8IChzbGlkZVRvSW5kZXggPiBzLnNsaWRlcy5sZW5ndGggLSBzLmxvb3BlZFNsaWRlcyArIHMucGFyYW1zLnNsaWRlc1BlclZpZXcvMikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmZpeExvb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZVRvSW5kZXggPSBzLndyYXBwZXIuY2hpbGRyZW4oJy4nICsgcy5wYXJhbXMuc2xpZGVDbGFzcyArICdbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCInICsgcmVhbEluZGV4ICsgJ1wiXTpub3QoLnN3aXBlci1zbGlkZS1kdXBsaWNhdGUpJykuZXEoMCkuaW5kZXgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGlkZVRvKHNsaWRlVG9JbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzbGlkZVRvSW5kZXggPiBzLnNsaWRlcy5sZW5ndGggLSBzLnBhcmFtcy5zbGlkZXNQZXJWaWV3KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5maXhMb29wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVUb0luZGV4ID0gcy53cmFwcGVyLmNoaWxkcmVuKCcuJyArIHMucGFyYW1zLnNsaWRlQ2xhc3MgKyAnW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJyArIHJlYWxJbmRleCArICdcIl06bm90KC5zd2lwZXItc2xpZGUtZHVwbGljYXRlKScpLmVxKDApLmluZGV4KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGlkZVRvKHNsaWRlVG9JbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHMuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIHZhciBpc1RvdWNoZWQsXG4gICAgICAgICAgICBpc01vdmVkLFxuICAgICAgICAgICAgYWxsb3dUb3VjaENhbGxiYWNrcyxcbiAgICAgICAgICAgIHRvdWNoU3RhcnRUaW1lLFxuICAgICAgICAgICAgaXNTY3JvbGxpbmcsXG4gICAgICAgICAgICBjdXJyZW50VHJhbnNsYXRlLFxuICAgICAgICAgICAgc3RhcnRUcmFuc2xhdGUsXG4gICAgICAgICAgICBhbGxvd1RocmVzaG9sZE1vdmUsXG4gICAgICAgICAgICAvLyBGb3JtIGVsZW1lbnRzIHRvIG1hdGNoXG4gICAgICAgICAgICBmb3JtRWxlbWVudHMgPSAnaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEsIGJ1dHRvbicsXG4gICAgICAgICAgICAvLyBMYXN0IGNsaWNrIHRpbWVcbiAgICAgICAgICAgIGxhc3RDbGlja1RpbWUgPSBEYXRlLm5vdygpLCBjbGlja1RpbWVvdXQsXG4gICAgICAgICAgICAvL1ZlbG9jaXRpZXNcbiAgICAgICAgICAgIHZlbG9jaXRpZXMgPSBbXSxcbiAgICAgICAgICAgIGFsbG93TW9tZW50dW1Cb3VuY2U7XG4gICAgICAgIFxuICAgICAgICAvLyBBbmltYXRpbmcgRmxhZ1xuICAgICAgICBzLmFuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgLy8gVG91Y2hlcyBpbmZvcm1hdGlvblxuICAgICAgICBzLnRvdWNoZXMgPSB7XG4gICAgICAgICAgICBzdGFydFg6IDAsXG4gICAgICAgICAgICBzdGFydFk6IDAsXG4gICAgICAgICAgICBjdXJyZW50WDogMCxcbiAgICAgICAgICAgIGN1cnJlbnRZOiAwLFxuICAgICAgICAgICAgZGlmZjogMFxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgLy8gVG91Y2ggaGFuZGxlcnNcbiAgICAgICAgdmFyIGlzVG91Y2hFdmVudCwgc3RhcnRNb3Zpbmc7XG4gICAgICAgIHMub25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChlLm9yaWdpbmFsRXZlbnQpIGUgPSBlLm9yaWdpbmFsRXZlbnQ7XG4gICAgICAgICAgICBpc1RvdWNoRXZlbnQgPSBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JztcbiAgICAgICAgICAgIGlmICghaXNUb3VjaEV2ZW50ICYmICd3aGljaCcgaW4gZSAmJiBlLndoaWNoID09PSAzKSByZXR1cm47XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubm9Td2lwaW5nICYmIGZpbmRFbGVtZW50SW5FdmVudChlLCAnLicgKyBzLnBhcmFtcy5ub1N3aXBpbmdDbGFzcykpIHtcbiAgICAgICAgICAgICAgICBzLmFsbG93Q2xpY2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5zd2lwZUhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWZpbmRFbGVtZW50SW5FdmVudChlLCBzLnBhcmFtcy5zd2lwZUhhbmRsZXIpKSByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgdmFyIHN0YXJ0WCA9IHMudG91Y2hlcy5jdXJyZW50WCA9IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYIDogZS5wYWdlWDtcbiAgICAgICAgICAgIHZhciBzdGFydFkgPSBzLnRvdWNoZXMuY3VycmVudFkgPSBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSA6IGUucGFnZVk7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gRG8gTk9UIHN0YXJ0IGlmIGlPUyBlZGdlIHN3aXBlIGlzIGRldGVjdGVkLiBPdGhlcndpc2UgaU9TIGFwcCAoVUlXZWJWaWV3KSBjYW5ub3Qgc3dpcGUtdG8tZ28tYmFjayBhbnltb3JlXG4gICAgICAgICAgICBpZihzLmRldmljZS5pb3MgJiYgcy5wYXJhbXMuaU9TRWRnZVN3aXBlRGV0ZWN0aW9uICYmIHN0YXJ0WCA8PSBzLnBhcmFtcy5pT1NFZGdlU3dpcGVUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgaXNUb3VjaGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlzTW92ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGFsbG93VG91Y2hDYWxsYmFja3MgPSB0cnVlO1xuICAgICAgICAgICAgaXNTY3JvbGxpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBzdGFydE1vdmluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHMudG91Y2hlcy5zdGFydFggPSBzdGFydFg7XG4gICAgICAgICAgICBzLnRvdWNoZXMuc3RhcnRZID0gc3RhcnRZO1xuICAgICAgICAgICAgdG91Y2hTdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgcy5hbGxvd0NsaWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIHMudXBkYXRlQ29udGFpbmVyU2l6ZSgpO1xuICAgICAgICAgICAgcy5zd2lwZURpcmVjdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy50aHJlc2hvbGQgPiAwKSBhbGxvd1RocmVzaG9sZE1vdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChlLnR5cGUgIT09ICd0b3VjaHN0YXJ0Jykge1xuICAgICAgICAgICAgICAgIHZhciBwcmV2ZW50RGVmYXVsdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKCQoZS50YXJnZXQpLmlzKGZvcm1FbGVtZW50cykpIHByZXZlbnREZWZhdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgJChkb2N1bWVudC5hY3RpdmVFbGVtZW50KS5pcyhmb3JtRWxlbWVudHMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHMuZW1pdCgnb25Ub3VjaFN0YXJ0JywgcywgZSk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBzLm9uVG91Y2hNb3ZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChlLm9yaWdpbmFsRXZlbnQpIGUgPSBlLm9yaWdpbmFsRXZlbnQ7XG4gICAgICAgICAgICBpZiAoaXNUb3VjaEV2ZW50ICYmIGUudHlwZSA9PT0gJ21vdXNlbW92ZScpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChlLnByZXZlbnRlZEJ5TmVzdGVkU3dpcGVyKSB7XG4gICAgICAgICAgICAgICAgcy50b3VjaGVzLnN0YXJ0WCA9IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVggOiBlLnBhZ2VYO1xuICAgICAgICAgICAgICAgIHMudG91Y2hlcy5zdGFydFkgPSBlLnR5cGUgPT09ICd0b3VjaG1vdmUnID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIDogZS5wYWdlWTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMub25seUV4dGVybmFsKSB7XG4gICAgICAgICAgICAgICAgLy8gaXNNb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcy5hbGxvd0NsaWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKGlzVG91Y2hlZCkge1xuICAgICAgICAgICAgICAgICAgICBzLnRvdWNoZXMuc3RhcnRYID0gcy50b3VjaGVzLmN1cnJlbnRYID0gZS50eXBlID09PSAndG91Y2htb3ZlJyA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCA6IGUucGFnZVg7XG4gICAgICAgICAgICAgICAgICAgIHMudG91Y2hlcy5zdGFydFkgPSBzLnRvdWNoZXMuY3VycmVudFkgPSBlLnR5cGUgPT09ICd0b3VjaG1vdmUnID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIDogZS5wYWdlWTtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hTdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNUb3VjaEV2ZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgJChlLnRhcmdldCkuaXMoZm9ybUVsZW1lbnRzKSkge1xuICAgICAgICAgICAgICAgICAgICBpc01vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcy5hbGxvd0NsaWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYWxsb3dUb3VjaENhbGxiYWNrcykge1xuICAgICAgICAgICAgICAgIHMuZW1pdCgnb25Ub3VjaE1vdmUnLCBzLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlLnRhcmdldFRvdWNoZXMgJiYgZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA+IDEpIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgICAgICBzLnRvdWNoZXMuY3VycmVudFggPSBlLnR5cGUgPT09ICd0b3VjaG1vdmUnID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYIDogZS5wYWdlWDtcbiAgICAgICAgICAgIHMudG91Y2hlcy5jdXJyZW50WSA9IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgOiBlLnBhZ2VZO1xuICAgICAgICBcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaXNTY3JvbGxpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRvdWNoQW5nbGUgPSBNYXRoLmF0YW4yKE1hdGguYWJzKHMudG91Y2hlcy5jdXJyZW50WSAtIHMudG91Y2hlcy5zdGFydFkpLCBNYXRoLmFicyhzLnRvdWNoZXMuY3VycmVudFggLSBzLnRvdWNoZXMuc3RhcnRYKSkgKiAxODAgLyBNYXRoLlBJO1xuICAgICAgICAgICAgICAgIGlzU2Nyb2xsaW5nID0gcy5pc0hvcml6b250YWwoKSA/IHRvdWNoQW5nbGUgPiBzLnBhcmFtcy50b3VjaEFuZ2xlIDogKDkwIC0gdG91Y2hBbmdsZSA+IHMucGFyYW1zLnRvdWNoQW5nbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzU2Nyb2xsaW5nKSB7XG4gICAgICAgICAgICAgICAgcy5lbWl0KCdvblRvdWNoTW92ZU9wcG9zaXRlJywgcywgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHN0YXJ0TW92aW5nID09PSAndW5kZWZpbmVkJyAmJiBzLmJyb3dzZXIuaWVUb3VjaCkge1xuICAgICAgICAgICAgICAgIGlmIChzLnRvdWNoZXMuY3VycmVudFggIT09IHMudG91Y2hlcy5zdGFydFggfHwgcy50b3VjaGVzLmN1cnJlbnRZICE9PSBzLnRvdWNoZXMuc3RhcnRZKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0TW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWlzVG91Y2hlZCkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGlzU2Nyb2xsaW5nKSAge1xuICAgICAgICAgICAgICAgIGlzVG91Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc3RhcnRNb3ZpbmcgJiYgcy5icm93c2VyLmllVG91Y2gpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzLmFsbG93Q2xpY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIHMuZW1pdCgnb25TbGlkZXJNb3ZlJywgcywgZSk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMudG91Y2hNb3ZlU3RvcFByb3BhZ2F0aW9uICYmICFzLnBhcmFtcy5uZXN0ZWQpIHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGlmICghaXNNb3ZlZCkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMubG9vcCkge1xuICAgICAgICAgICAgICAgICAgICBzLmZpeExvb3AoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3RhcnRUcmFuc2xhdGUgPSBzLmdldFdyYXBwZXJUcmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICBzLnNldFdyYXBwZXJUcmFuc2l0aW9uKDApO1xuICAgICAgICAgICAgICAgIGlmIChzLmFuaW1hdGluZykge1xuICAgICAgICAgICAgICAgICAgICBzLndyYXBwZXIudHJpZ2dlcignd2Via2l0VHJhbnNpdGlvbkVuZCB0cmFuc2l0aW9uZW5kIG9UcmFuc2l0aW9uRW5kIE1TVHJhbnNpdGlvbkVuZCBtc1RyYW5zaXRpb25FbmQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmF1dG9wbGF5ICYmIHMuYXV0b3BsYXlpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmF1dG9wbGF5RGlzYWJsZU9uSW50ZXJhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuc3RvcEF1dG9wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnBhdXNlQXV0b3BsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhbGxvd01vbWVudHVtQm91bmNlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy9HcmFiIEN1cnNvclxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5ncmFiQ3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgICAgIHMuY29udGFpbmVyWzBdLnN0eWxlLmN1cnNvciA9ICdtb3ZlJztcbiAgICAgICAgICAgICAgICAgICAgcy5jb250YWluZXJbMF0uc3R5bGUuY3Vyc29yID0gJy13ZWJraXQtZ3JhYmJpbmcnO1xuICAgICAgICAgICAgICAgICAgICBzLmNvbnRhaW5lclswXS5zdHlsZS5jdXJzb3IgPSAnLW1vei1ncmFiYmluJztcbiAgICAgICAgICAgICAgICAgICAgcy5jb250YWluZXJbMF0uc3R5bGUuY3Vyc29yID0gJ2dyYWJiaW5nJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpc01vdmVkID0gdHJ1ZTtcbiAgICAgICAgXG4gICAgICAgICAgICB2YXIgZGlmZiA9IHMudG91Y2hlcy5kaWZmID0gcy5pc0hvcml6b250YWwoKSA/IHMudG91Y2hlcy5jdXJyZW50WCAtIHMudG91Y2hlcy5zdGFydFggOiBzLnRvdWNoZXMuY3VycmVudFkgLSBzLnRvdWNoZXMuc3RhcnRZO1xuICAgICAgICBcbiAgICAgICAgICAgIGRpZmYgPSBkaWZmICogcy5wYXJhbXMudG91Y2hSYXRpbztcbiAgICAgICAgICAgIGlmIChzLnJ0bCkgZGlmZiA9IC1kaWZmO1xuICAgICAgICBcbiAgICAgICAgICAgIHMuc3dpcGVEaXJlY3Rpb24gPSBkaWZmID4gMCA/ICdwcmV2JyA6ICduZXh0JztcbiAgICAgICAgICAgIGN1cnJlbnRUcmFuc2xhdGUgPSBkaWZmICsgc3RhcnRUcmFuc2xhdGU7XG4gICAgICAgIFxuICAgICAgICAgICAgdmFyIGRpc2FibGVQYXJlbnRTd2lwZXIgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKChkaWZmID4gMCAmJiBjdXJyZW50VHJhbnNsYXRlID4gcy5taW5UcmFuc2xhdGUoKSkpIHtcbiAgICAgICAgICAgICAgICBkaXNhYmxlUGFyZW50U3dpcGVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnJlc2lzdGFuY2UpIGN1cnJlbnRUcmFuc2xhdGUgPSBzLm1pblRyYW5zbGF0ZSgpIC0gMSArIE1hdGgucG93KC1zLm1pblRyYW5zbGF0ZSgpICsgc3RhcnRUcmFuc2xhdGUgKyBkaWZmLCBzLnBhcmFtcy5yZXNpc3RhbmNlUmF0aW8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZGlmZiA8IDAgJiYgY3VycmVudFRyYW5zbGF0ZSA8IHMubWF4VHJhbnNsYXRlKCkpIHtcbiAgICAgICAgICAgICAgICBkaXNhYmxlUGFyZW50U3dpcGVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnJlc2lzdGFuY2UpIGN1cnJlbnRUcmFuc2xhdGUgPSBzLm1heFRyYW5zbGF0ZSgpICsgMSAtIE1hdGgucG93KHMubWF4VHJhbnNsYXRlKCkgLSBzdGFydFRyYW5zbGF0ZSAtIGRpZmYsIHMucGFyYW1zLnJlc2lzdGFuY2VSYXRpbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKGRpc2FibGVQYXJlbnRTd2lwZXIpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnRlZEJ5TmVzdGVkU3dpcGVyID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAvLyBEaXJlY3Rpb25zIGxvY2tzXG4gICAgICAgICAgICBpZiAoIXMucGFyYW1zLmFsbG93U3dpcGVUb05leHQgJiYgcy5zd2lwZURpcmVjdGlvbiA9PT0gJ25leHQnICYmIGN1cnJlbnRUcmFuc2xhdGUgPCBzdGFydFRyYW5zbGF0ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUcmFuc2xhdGUgPSBzdGFydFRyYW5zbGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcy5wYXJhbXMuYWxsb3dTd2lwZVRvUHJldiAmJiBzLnN3aXBlRGlyZWN0aW9uID09PSAncHJldicgJiYgY3VycmVudFRyYW5zbGF0ZSA+IHN0YXJ0VHJhbnNsYXRlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFRyYW5zbGF0ZSA9IHN0YXJ0VHJhbnNsYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGlmICghcy5wYXJhbXMuZm9sbG93RmluZ2VyKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gVGhyZXNob2xkXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMudGhyZXNob2xkID4gMCkge1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhkaWZmKSA+IHMucGFyYW1zLnRocmVzaG9sZCB8fCBhbGxvd1RocmVzaG9sZE1vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhbGxvd1RocmVzaG9sZE1vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93VGhyZXNob2xkTW92ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnRvdWNoZXMuc3RhcnRYID0gcy50b3VjaGVzLmN1cnJlbnRYO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy50b3VjaGVzLnN0YXJ0WSA9IHMudG91Y2hlcy5jdXJyZW50WTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUcmFuc2xhdGUgPSBzdGFydFRyYW5zbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMudG91Y2hlcy5kaWZmID0gcy5pc0hvcml6b250YWwoKSA/IHMudG91Y2hlcy5jdXJyZW50WCAtIHMudG91Y2hlcy5zdGFydFggOiBzLnRvdWNoZXMuY3VycmVudFkgLSBzLnRvdWNoZXMuc3RhcnRZO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VHJhbnNsYXRlID0gc3RhcnRUcmFuc2xhdGU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVcGRhdGUgYWN0aXZlIGluZGV4IGluIGZyZWUgbW9kZVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmZyZWVNb2RlIHx8IHMucGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICBzLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuZnJlZU1vZGUpIHtcbiAgICAgICAgICAgICAgICAvL1ZlbG9jaXR5XG4gICAgICAgICAgICAgICAgaWYgKHZlbG9jaXRpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZlbG9jaXRpZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcy50b3VjaGVzW3MuaXNIb3Jpem9udGFsKCkgPyAnc3RhcnRYJyA6ICdzdGFydFknXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IHRvdWNoU3RhcnRUaW1lXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2ZWxvY2l0aWVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcy50b3VjaGVzW3MuaXNIb3Jpem9udGFsKCkgPyAnY3VycmVudFgnIDogJ2N1cnJlbnRZJ10sXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6IChuZXcgd2luZG93LkRhdGUoKSkuZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVcGRhdGUgcHJvZ3Jlc3NcbiAgICAgICAgICAgIHMudXBkYXRlUHJvZ3Jlc3MoY3VycmVudFRyYW5zbGF0ZSk7XG4gICAgICAgICAgICAvLyBVcGRhdGUgdHJhbnNsYXRlXG4gICAgICAgICAgICBzLnNldFdyYXBwZXJUcmFuc2xhdGUoY3VycmVudFRyYW5zbGF0ZSk7XG4gICAgICAgIH07XG4gICAgICAgIHMub25Ub3VjaEVuZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoZS5vcmlnaW5hbEV2ZW50KSBlID0gZS5vcmlnaW5hbEV2ZW50O1xuICAgICAgICAgICAgaWYgKGFsbG93VG91Y2hDYWxsYmFja3MpIHtcbiAgICAgICAgICAgICAgICBzLmVtaXQoJ29uVG91Y2hFbmQnLCBzLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFsbG93VG91Y2hDYWxsYmFja3MgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICghaXNUb3VjaGVkKSByZXR1cm47XG4gICAgICAgICAgICAvL1JldHVybiBHcmFiIEN1cnNvclxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmdyYWJDdXJzb3IgJiYgaXNNb3ZlZCAmJiBpc1RvdWNoZWQpIHtcbiAgICAgICAgICAgICAgICBzLmNvbnRhaW5lclswXS5zdHlsZS5jdXJzb3IgPSAnbW92ZSc7XG4gICAgICAgICAgICAgICAgcy5jb250YWluZXJbMF0uc3R5bGUuY3Vyc29yID0gJy13ZWJraXQtZ3JhYic7XG4gICAgICAgICAgICAgICAgcy5jb250YWluZXJbMF0uc3R5bGUuY3Vyc29yID0gJy1tb3otZ3JhYic7XG4gICAgICAgICAgICAgICAgcy5jb250YWluZXJbMF0uc3R5bGUuY3Vyc29yID0gJ2dyYWInO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC8vIFRpbWUgZGlmZlxuICAgICAgICAgICAgdmFyIHRvdWNoRW5kVGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICB2YXIgdGltZURpZmYgPSB0b3VjaEVuZFRpbWUgLSB0b3VjaFN0YXJ0VGltZTtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyBUYXAsIGRvdWJsZVRhcCwgQ2xpY2tcbiAgICAgICAgICAgIGlmIChzLmFsbG93Q2xpY2spIHtcbiAgICAgICAgICAgICAgICBzLnVwZGF0ZUNsaWNrZWRTbGlkZShlKTtcbiAgICAgICAgICAgICAgICBzLmVtaXQoJ29uVGFwJywgcywgZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRpbWVEaWZmIDwgMzAwICYmICh0b3VjaEVuZFRpbWUgLSBsYXN0Q2xpY2tUaW1lKSA+IDMwMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2xpY2tUaW1lb3V0KSBjbGVhclRpbWVvdXQoY2xpY2tUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXMpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wYWdpbmF0aW9uSGlkZSAmJiBzLnBhZ2luYXRpb25Db250YWluZXIubGVuZ3RoID4gMCAmJiAhJChlLnRhcmdldCkuaGFzQ2xhc3Mocy5wYXJhbXMuYnVsbGV0Q2xhc3MpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5wYWdpbmF0aW9uQ29udGFpbmVyLnRvZ2dsZUNsYXNzKHMucGFyYW1zLnBhZ2luYXRpb25IaWRkZW5DbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzLmVtaXQoJ29uQ2xpY2snLCBzLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aW1lRGlmZiA8IDMwMCAmJiAodG91Y2hFbmRUaW1lIC0gbGFzdENsaWNrVGltZSkgPCAzMDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsaWNrVGltZW91dCkgY2xlYXJUaW1lb3V0KGNsaWNrVGltZW91dCk7XG4gICAgICAgICAgICAgICAgICAgIHMuZW1pdCgnb25Eb3VibGVUYXAnLCBzLCBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgbGFzdENsaWNrVGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAocykgcy5hbGxvd0NsaWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICBcbiAgICAgICAgICAgIGlmICghaXNUb3VjaGVkIHx8ICFpc01vdmVkIHx8ICFzLnN3aXBlRGlyZWN0aW9uIHx8IHMudG91Y2hlcy5kaWZmID09PSAwIHx8IGN1cnJlbnRUcmFuc2xhdGUgPT09IHN0YXJ0VHJhbnNsYXRlKSB7XG4gICAgICAgICAgICAgICAgaXNUb3VjaGVkID0gaXNNb3ZlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlzVG91Y2hlZCA9IGlzTW92ZWQgPSBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgICAgICB2YXIgY3VycmVudFBvcztcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5mb2xsb3dGaW5nZXIpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UG9zID0gcy5ydGwgPyBzLnRyYW5zbGF0ZSA6IC1zLnRyYW5zbGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQb3MgPSAtY3VycmVudFRyYW5zbGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5mcmVlTW9kZSkge1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UG9zIDwgLXMubWluVHJhbnNsYXRlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5zbGlkZVRvKHMuYWN0aXZlSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGN1cnJlbnRQb3MgPiAtcy5tYXhUcmFuc2xhdGUoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5zbGlkZXMubGVuZ3RoIDwgcy5zbmFwR3JpZC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpZGVUbyhzLnNuYXBHcmlkLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGlkZVRvKHMuc2xpZGVzLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5mcmVlTW9kZU1vbWVudHVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2ZWxvY2l0aWVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsYXN0TW92ZUV2ZW50ID0gdmVsb2NpdGllcy5wb3AoKSwgdmVsb2NpdHlFdmVudCA9IHZlbG9jaXRpZXMucG9wKCk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRpc3RhbmNlID0gbGFzdE1vdmVFdmVudC5wb3NpdGlvbiAtIHZlbG9jaXR5RXZlbnQucG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGltZSA9IGxhc3RNb3ZlRXZlbnQudGltZSAtIHZlbG9jaXR5RXZlbnQudGltZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMudmVsb2NpdHkgPSBkaXN0YW5jZSAvIHRpbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnZlbG9jaXR5ID0gcy52ZWxvY2l0eSAvIDI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMocy52ZWxvY2l0eSkgPCBzLnBhcmFtcy5mcmVlTW9kZU1pbmltdW1WZWxvY2l0eSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMudmVsb2NpdHkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBpbXBsaWVzIHRoYXQgdGhlIHVzZXIgc3RvcHBlZCBtb3ZpbmcgYSBmaW5nZXIgdGhlbiByZWxlYXNlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZXJlIHdvdWxkIGJlIG5vIGV2ZW50cyB3aXRoIGRpc3RhbmNlIHplcm8sIHNvIHRoZSBsYXN0IGV2ZW50IGlzIHN0YWxlLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWUgPiAxNTAgfHwgKG5ldyB3aW5kb3cuRGF0ZSgpLmdldFRpbWUoKSAtIGxhc3RNb3ZlRXZlbnQudGltZSkgPiAzMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnZlbG9jaXR5ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMudmVsb2NpdHkgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB2ZWxvY2l0aWVzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtb21lbnR1bUR1cmF0aW9uID0gMTAwMCAqIHMucGFyYW1zLmZyZWVNb2RlTW9tZW50dW1SYXRpbztcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1vbWVudHVtRGlzdGFuY2UgPSBzLnZlbG9jaXR5ICogbW9tZW50dW1EdXJhdGlvbjtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdQb3NpdGlvbiA9IHMudHJhbnNsYXRlICsgbW9tZW50dW1EaXN0YW5jZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucnRsKSBuZXdQb3NpdGlvbiA9IC0gbmV3UG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgIHZhciBkb0JvdW5jZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYWZ0ZXJCb3VuY2VQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJvdW5jZUFtb3VudCA9IE1hdGguYWJzKHMudmVsb2NpdHkpICogMjAgKiBzLnBhcmFtcy5mcmVlTW9kZU1vbWVudHVtQm91bmNlUmF0aW87XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdQb3NpdGlvbiA8IHMubWF4VHJhbnNsYXRlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5mcmVlTW9kZU1vbWVudHVtQm91bmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1Bvc2l0aW9uICsgcy5tYXhUcmFuc2xhdGUoKSA8IC1ib3VuY2VBbW91bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UG9zaXRpb24gPSBzLm1heFRyYW5zbGF0ZSgpIC0gYm91bmNlQW1vdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZnRlckJvdW5jZVBvc2l0aW9uID0gcy5tYXhUcmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb0JvdW5jZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dNb21lbnR1bUJvdW5jZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbiA9IHMubWF4VHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobmV3UG9zaXRpb24gPiBzLm1pblRyYW5zbGF0ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuZnJlZU1vZGVNb21lbnR1bUJvdW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdQb3NpdGlvbiAtIHMubWluVHJhbnNsYXRlKCkgPiBib3VuY2VBbW91bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UG9zaXRpb24gPSBzLm1pblRyYW5zbGF0ZSgpICsgYm91bmNlQW1vdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZnRlckJvdW5jZVBvc2l0aW9uID0gcy5taW5UcmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb0JvdW5jZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dNb21lbnR1bUJvdW5jZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbiA9IHMubWluVHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocy5wYXJhbXMuZnJlZU1vZGVTdGlja3kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBqID0gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0U2xpZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgcy5zbmFwR3JpZC5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLnNuYXBHcmlkW2pdID4gLW5ld1Bvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRTbGlkZSA9IGo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMocy5zbmFwR3JpZFtuZXh0U2xpZGVdIC0gbmV3UG9zaXRpb24pIDwgTWF0aC5hYnMocy5zbmFwR3JpZFtuZXh0U2xpZGUgLSAxXSAtIG5ld1Bvc2l0aW9uKSB8fCBzLnN3aXBlRGlyZWN0aW9uID09PSAnbmV4dCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbiA9IHMuc25hcEdyaWRbbmV4dFNsaWRlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UG9zaXRpb24gPSBzLnNuYXBHcmlkW25leHRTbGlkZSAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzLnJ0bCkgbmV3UG9zaXRpb24gPSAtIG5ld1Bvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vRml4IGR1cmF0aW9uXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnZlbG9jaXR5ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5ydGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb21lbnR1bUR1cmF0aW9uID0gTWF0aC5hYnMoKC1uZXdQb3NpdGlvbiAtIHMudHJhbnNsYXRlKSAvIHMudmVsb2NpdHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9tZW50dW1EdXJhdGlvbiA9IE1hdGguYWJzKChuZXdQb3NpdGlvbiAtIHMudHJhbnNsYXRlKSAvIHMudmVsb2NpdHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHMucGFyYW1zLmZyZWVNb2RlU3RpY2t5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnNsaWRlUmVzZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmZyZWVNb2RlTW9tZW50dW1Cb3VuY2UgJiYgZG9Cb3VuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMudXBkYXRlUHJvZ3Jlc3MoYWZ0ZXJCb3VuY2VQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnNldFdyYXBwZXJUcmFuc2l0aW9uKG1vbWVudHVtRHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5zZXRXcmFwcGVyVHJhbnNsYXRlKG5ld1Bvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMub25UcmFuc2l0aW9uU3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMud3JhcHBlci50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXMgfHwgIWFsbG93TW9tZW50dW1Cb3VuY2UpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmVtaXQoJ29uTW9tZW50dW1Cb3VuY2UnLCBzKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5zZXRXcmFwcGVyVHJhbnNpdGlvbihzLnBhcmFtcy5zcGVlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5zZXRXcmFwcGVyVHJhbnNsYXRlKGFmdGVyQm91bmNlUG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMud3JhcHBlci50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMub25UcmFuc2l0aW9uRW5kKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzLnZlbG9jaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnVwZGF0ZVByb2dyZXNzKG5ld1Bvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuc2V0V3JhcHBlclRyYW5zaXRpb24obW9tZW50dW1EdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnNldFdyYXBwZXJUcmFuc2xhdGUobmV3UG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5vblRyYW5zaXRpb25TdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzLmFuaW1hdGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLndyYXBwZXIudHJhbnNpdGlvbkVuZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcykgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLm9uVHJhbnNpdGlvbkVuZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMudXBkYXRlUHJvZ3Jlc3MobmV3UG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBzLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghcy5wYXJhbXMuZnJlZU1vZGVNb21lbnR1bSB8fCB0aW1lRGlmZiA+PSBzLnBhcmFtcy5sb25nU3dpcGVzTXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcy51cGRhdGVQcm9ncmVzcygpO1xuICAgICAgICAgICAgICAgICAgICBzLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAvLyBGaW5kIGN1cnJlbnQgc2xpZGVcbiAgICAgICAgICAgIHZhciBpLCBzdG9wSW5kZXggPSAwLCBncm91cFNpemUgPSBzLnNsaWRlc1NpemVzR3JpZFswXTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzLnNsaWRlc0dyaWQubGVuZ3RoOyBpICs9IHMucGFyYW1zLnNsaWRlc1Blckdyb3VwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzLnNsaWRlc0dyaWRbaSArIHMucGFyYW1zLnNsaWRlc1Blckdyb3VwXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQb3MgPj0gcy5zbGlkZXNHcmlkW2ldICYmIGN1cnJlbnRQb3MgPCBzLnNsaWRlc0dyaWRbaSArIHMucGFyYW1zLnNsaWRlc1Blckdyb3VwXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcEluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwU2l6ZSA9IHMuc2xpZGVzR3JpZFtpICsgcy5wYXJhbXMuc2xpZGVzUGVyR3JvdXBdIC0gcy5zbGlkZXNHcmlkW2ldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBvcyA+PSBzLnNsaWRlc0dyaWRbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cFNpemUgPSBzLnNsaWRlc0dyaWRbcy5zbGlkZXNHcmlkLmxlbmd0aCAtIDFdIC0gcy5zbGlkZXNHcmlkW3Muc2xpZGVzR3JpZC5sZW5ndGggLSAyXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAvLyBGaW5kIGN1cnJlbnQgc2xpZGUgc2l6ZVxuICAgICAgICAgICAgdmFyIHJhdGlvID0gKGN1cnJlbnRQb3MgLSBzLnNsaWRlc0dyaWRbc3RvcEluZGV4XSkgLyBncm91cFNpemU7XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKHRpbWVEaWZmID4gcy5wYXJhbXMubG9uZ1N3aXBlc01zKSB7XG4gICAgICAgICAgICAgICAgLy8gTG9uZyB0b3VjaGVzXG4gICAgICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy5sb25nU3dpcGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHMuc2xpZGVUbyhzLmFjdGl2ZUluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocy5zd2lwZURpcmVjdGlvbiA9PT0gJ25leHQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyYXRpbyA+PSBzLnBhcmFtcy5sb25nU3dpcGVzUmF0aW8pIHMuc2xpZGVUbyhzdG9wSW5kZXggKyBzLnBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2Ugcy5zbGlkZVRvKHN0b3BJbmRleCk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocy5zd2lwZURpcmVjdGlvbiA9PT0gJ3ByZXYnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyYXRpbyA+ICgxIC0gcy5wYXJhbXMubG9uZ1N3aXBlc1JhdGlvKSkgcy5zbGlkZVRvKHN0b3BJbmRleCArIHMucGFyYW1zLnNsaWRlc1Blckdyb3VwKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBzLnNsaWRlVG8oc3RvcEluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBTaG9ydCBzd2lwZXNcbiAgICAgICAgICAgICAgICBpZiAoIXMucGFyYW1zLnNob3J0U3dpcGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHMuc2xpZGVUbyhzLmFjdGl2ZUluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocy5zd2lwZURpcmVjdGlvbiA9PT0gJ25leHQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHMuc2xpZGVUbyhzdG9wSW5kZXggKyBzLnBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocy5zd2lwZURpcmVjdGlvbiA9PT0gJ3ByZXYnKSB7XG4gICAgICAgICAgICAgICAgICAgIHMuc2xpZGVUbyhzdG9wSW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgVHJhbnNpdGlvbnNcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBzLl9zbGlkZVRvID0gZnVuY3Rpb24gKHNsaWRlSW5kZXgsIHNwZWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcy5zbGlkZVRvKHNsaWRlSW5kZXgsIHNwZWVkLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgcy5zbGlkZVRvID0gZnVuY3Rpb24gKHNsaWRlSW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJ1bkNhbGxiYWNrcyA9PT0gJ3VuZGVmaW5lZCcpIHJ1bkNhbGxiYWNrcyA9IHRydWU7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHNsaWRlSW5kZXggPT09ICd1bmRlZmluZWQnKSBzbGlkZUluZGV4ID0gMDtcbiAgICAgICAgICAgIGlmIChzbGlkZUluZGV4IDwgMCkgc2xpZGVJbmRleCA9IDA7XG4gICAgICAgICAgICBzLnNuYXBJbmRleCA9IE1hdGguZmxvb3Ioc2xpZGVJbmRleCAvIHMucGFyYW1zLnNsaWRlc1Blckdyb3VwKTtcbiAgICAgICAgICAgIGlmIChzLnNuYXBJbmRleCA+PSBzLnNuYXBHcmlkLmxlbmd0aCkgcy5zbmFwSW5kZXggPSBzLnNuYXBHcmlkLmxlbmd0aCAtIDE7XG4gICAgICAgIFxuICAgICAgICAgICAgdmFyIHRyYW5zbGF0ZSA9IC0gcy5zbmFwR3JpZFtzLnNuYXBJbmRleF07XG4gICAgICAgICAgICAvLyBTdG9wIGF1dG9wbGF5XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuYXV0b3BsYXkgJiYgcy5hdXRvcGxheWluZykge1xuICAgICAgICAgICAgICAgIGlmIChpbnRlcm5hbCB8fCAhcy5wYXJhbXMuYXV0b3BsYXlEaXNhYmxlT25JbnRlcmFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBzLnBhdXNlQXV0b3BsYXkoc3BlZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcy5zdG9wQXV0b3BsYXkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVcGRhdGUgcHJvZ3Jlc3NcbiAgICAgICAgICAgIHMudXBkYXRlUHJvZ3Jlc3ModHJhbnNsYXRlKTtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyBOb3JtYWxpemUgc2xpZGVJbmRleFxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzLnNsaWRlc0dyaWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoLSBNYXRoLmZsb29yKHRyYW5zbGF0ZSAqIDEwMCkgPj0gTWF0aC5mbG9vcihzLnNsaWRlc0dyaWRbaV0gKiAxMDApKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAvLyBEaXJlY3Rpb25zIGxvY2tzXG4gICAgICAgICAgICBpZiAoIXMucGFyYW1zLmFsbG93U3dpcGVUb05leHQgJiYgdHJhbnNsYXRlIDwgcy50cmFuc2xhdGUgJiYgdHJhbnNsYXRlIDwgcy5taW5UcmFuc2xhdGUoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcy5wYXJhbXMuYWxsb3dTd2lwZVRvUHJldiAmJiB0cmFuc2xhdGUgPiBzLnRyYW5zbGF0ZSAmJiB0cmFuc2xhdGUgPiBzLm1heFRyYW5zbGF0ZSgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKChzLmFjdGl2ZUluZGV4IHx8IDApICE9PSBzbGlkZUluZGV4ICkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBJbmRleFxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzcGVlZCA9PT0gJ3VuZGVmaW5lZCcpIHNwZWVkID0gcy5wYXJhbXMuc3BlZWQ7XG4gICAgICAgICAgICBzLnByZXZpb3VzSW5kZXggPSBzLmFjdGl2ZUluZGV4IHx8IDA7XG4gICAgICAgICAgICBzLmFjdGl2ZUluZGV4ID0gc2xpZGVJbmRleDtcbiAgICAgICAgXG4gICAgICAgICAgICBpZiAoKHMucnRsICYmIC10cmFuc2xhdGUgPT09IHMudHJhbnNsYXRlKSB8fCAoIXMucnRsICYmIHRyYW5zbGF0ZSA9PT0gcy50cmFuc2xhdGUpKSB7XG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIEhlaWdodFxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5hdXRvSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHMudXBkYXRlQXV0b0hlaWdodCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzLnVwZGF0ZUNsYXNzZXMoKTtcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuZWZmZWN0ICE9PSAnc2xpZGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHMuc2V0V3JhcHBlclRyYW5zbGF0ZSh0cmFuc2xhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzLnVwZGF0ZUNsYXNzZXMoKTtcbiAgICAgICAgICAgIHMub25UcmFuc2l0aW9uU3RhcnQocnVuQ2FsbGJhY2tzKTtcbiAgICAgICAgXG4gICAgICAgICAgICBpZiAoc3BlZWQgPT09IDApIHtcbiAgICAgICAgICAgICAgICBzLnNldFdyYXBwZXJUcmFuc2xhdGUodHJhbnNsYXRlKTtcbiAgICAgICAgICAgICAgICBzLnNldFdyYXBwZXJUcmFuc2l0aW9uKDApO1xuICAgICAgICAgICAgICAgIHMub25UcmFuc2l0aW9uRW5kKHJ1bkNhbGxiYWNrcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzLnNldFdyYXBwZXJUcmFuc2xhdGUodHJhbnNsYXRlKTtcbiAgICAgICAgICAgICAgICBzLnNldFdyYXBwZXJUcmFuc2l0aW9uKHNwZWVkKTtcbiAgICAgICAgICAgICAgICBpZiAoIXMuYW5pbWF0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHMuYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcy53cmFwcGVyLnRyYW5zaXRpb25FbmQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICBzLm9uVHJhbnNpdGlvbkVuZChydW5DYWxsYmFja3MpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgcy5vblRyYW5zaXRpb25TdGFydCA9IGZ1bmN0aW9uIChydW5DYWxsYmFja3MpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcnVuQ2FsbGJhY2tzID09PSAndW5kZWZpbmVkJykgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5hdXRvSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgcy51cGRhdGVBdXRvSGVpZ2h0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5sYXp5KSBzLmxhenkub25UcmFuc2l0aW9uU3RhcnQoKTtcbiAgICAgICAgICAgIGlmIChydW5DYWxsYmFja3MpIHtcbiAgICAgICAgICAgICAgICBzLmVtaXQoJ29uVHJhbnNpdGlvblN0YXJ0Jywgcyk7XG4gICAgICAgICAgICAgICAgaWYgKHMuYWN0aXZlSW5kZXggIT09IHMucHJldmlvdXNJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBzLmVtaXQoJ29uU2xpZGVDaGFuZ2VTdGFydCcsIHMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5hY3RpdmVJbmRleCA+IHMucHJldmlvdXNJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5lbWl0KCdvblNsaWRlTmV4dFN0YXJ0Jywgcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLmVtaXQoJ29uU2xpZGVQcmV2U3RhcnQnLCBzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHMub25UcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gKHJ1bkNhbGxiYWNrcykge1xuICAgICAgICAgICAgcy5hbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHMuc2V0V3JhcHBlclRyYW5zaXRpb24oMCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJ1bkNhbGxiYWNrcyA9PT0gJ3VuZGVmaW5lZCcpIHJ1bkNhbGxiYWNrcyA9IHRydWU7XG4gICAgICAgICAgICBpZiAocy5sYXp5KSBzLmxhenkub25UcmFuc2l0aW9uRW5kKCk7XG4gICAgICAgICAgICBpZiAocnVuQ2FsbGJhY2tzKSB7XG4gICAgICAgICAgICAgICAgcy5lbWl0KCdvblRyYW5zaXRpb25FbmQnLCBzKTtcbiAgICAgICAgICAgICAgICBpZiAocy5hY3RpdmVJbmRleCAhPT0gcy5wcmV2aW91c0luZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHMuZW1pdCgnb25TbGlkZUNoYW5nZUVuZCcsIHMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5hY3RpdmVJbmRleCA+IHMucHJldmlvdXNJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5lbWl0KCdvblNsaWRlTmV4dEVuZCcsIHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5lbWl0KCdvblNsaWRlUHJldkVuZCcsIHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmhhc2huYXYgJiYgcy5oYXNobmF2KSB7XG4gICAgICAgICAgICAgICAgcy5oYXNobmF2LnNldEhhc2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIH07XG4gICAgICAgIHMuc2xpZGVOZXh0ID0gZnVuY3Rpb24gKHJ1bkNhbGxiYWNrcywgc3BlZWQsIGludGVybmFsKSB7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubG9vcCkge1xuICAgICAgICAgICAgICAgIGlmIChzLmFuaW1hdGluZykgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIHMuZml4TG9vcCgpO1xuICAgICAgICAgICAgICAgIHZhciBjbGllbnRMZWZ0ID0gcy5jb250YWluZXJbMF0uY2xpZW50TGVmdDtcbiAgICAgICAgICAgICAgICByZXR1cm4gcy5zbGlkZVRvKHMuYWN0aXZlSW5kZXggKyBzLnBhcmFtcy5zbGlkZXNQZXJHcm91cCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSByZXR1cm4gcy5zbGlkZVRvKHMuYWN0aXZlSW5kZXggKyBzLnBhcmFtcy5zbGlkZXNQZXJHcm91cCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xuICAgICAgICB9O1xuICAgICAgICBzLl9zbGlkZU5leHQgPSBmdW5jdGlvbiAoc3BlZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBzLnNsaWRlTmV4dCh0cnVlLCBzcGVlZCwgdHJ1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIHMuc2xpZGVQcmV2ID0gZnVuY3Rpb24gKHJ1bkNhbGxiYWNrcywgc3BlZWQsIGludGVybmFsKSB7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubG9vcCkge1xuICAgICAgICAgICAgICAgIGlmIChzLmFuaW1hdGluZykgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIHMuZml4TG9vcCgpO1xuICAgICAgICAgICAgICAgIHZhciBjbGllbnRMZWZ0ID0gcy5jb250YWluZXJbMF0uY2xpZW50TGVmdDtcbiAgICAgICAgICAgICAgICByZXR1cm4gcy5zbGlkZVRvKHMuYWN0aXZlSW5kZXggLSAxLCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHJldHVybiBzLnNsaWRlVG8ocy5hY3RpdmVJbmRleCAtIDEsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbiAgICAgICAgfTtcbiAgICAgICAgcy5fc2xpZGVQcmV2ID0gZnVuY3Rpb24gKHNwZWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcy5zbGlkZVByZXYodHJ1ZSwgc3BlZWQsIHRydWUpO1xuICAgICAgICB9O1xuICAgICAgICBzLnNsaWRlUmVzZXQgPSBmdW5jdGlvbiAocnVuQ2FsbGJhY2tzLCBzcGVlZCwgaW50ZXJuYWwpIHtcbiAgICAgICAgICAgIHJldHVybiBzLnNsaWRlVG8ocy5hY3RpdmVJbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcyk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBUcmFuc2xhdGUvdHJhbnNpdGlvbiBoZWxwZXJzXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcy5zZXRXcmFwcGVyVHJhbnNpdGlvbiA9IGZ1bmN0aW9uIChkdXJhdGlvbiwgYnlDb250cm9sbGVyKSB7XG4gICAgICAgICAgICBzLndyYXBwZXIudHJhbnNpdGlvbihkdXJhdGlvbik7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuZWZmZWN0ICE9PSAnc2xpZGUnICYmIHMuZWZmZWN0c1tzLnBhcmFtcy5lZmZlY3RdKSB7XG4gICAgICAgICAgICAgICAgcy5lZmZlY3RzW3MucGFyYW1zLmVmZmVjdF0uc2V0VHJhbnNpdGlvbihkdXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMucGFyYWxsYXggJiYgcy5wYXJhbGxheCkge1xuICAgICAgICAgICAgICAgIHMucGFyYWxsYXguc2V0VHJhbnNpdGlvbihkdXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuc2Nyb2xsYmFyICYmIHMuc2Nyb2xsYmFyKSB7XG4gICAgICAgICAgICAgICAgcy5zY3JvbGxiYXIuc2V0VHJhbnNpdGlvbihkdXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuY29udHJvbCAmJiBzLmNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgICAgICBzLmNvbnRyb2xsZXIuc2V0VHJhbnNpdGlvbihkdXJhdGlvbiwgYnlDb250cm9sbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHMuZW1pdCgnb25TZXRUcmFuc2l0aW9uJywgcywgZHVyYXRpb24pO1xuICAgICAgICB9O1xuICAgICAgICBzLnNldFdyYXBwZXJUcmFuc2xhdGUgPSBmdW5jdGlvbiAodHJhbnNsYXRlLCB1cGRhdGVBY3RpdmVJbmRleCwgYnlDb250cm9sbGVyKSB7XG4gICAgICAgICAgICB2YXIgeCA9IDAsIHkgPSAwLCB6ID0gMDtcbiAgICAgICAgICAgIGlmIChzLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgICAgICAgICAgeCA9IHMucnRsID8gLXRyYW5zbGF0ZSA6IHRyYW5zbGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHkgPSB0cmFuc2xhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnJvdW5kTGVuZ3Rocykge1xuICAgICAgICAgICAgICAgIHggPSByb3VuZCh4KTtcbiAgICAgICAgICAgICAgICB5ID0gcm91bmQoeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMuc3VwcG9ydC50cmFuc2Zvcm1zM2QpIHMud3JhcHBlci50cmFuc2Zvcm0oJ3RyYW5zbGF0ZTNkKCcgKyB4ICsgJ3B4LCAnICsgeSArICdweCwgJyArIHogKyAncHgpJyk7XG4gICAgICAgICAgICAgICAgZWxzZSBzLndyYXBwZXIudHJhbnNmb3JtKCd0cmFuc2xhdGUoJyArIHggKyAncHgsICcgKyB5ICsgJ3B4KScpO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIHMudHJhbnNsYXRlID0gcy5pc0hvcml6b250YWwoKSA/IHggOiB5O1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHdlIG5lZWQgdG8gdXBkYXRlIHByb2dyZXNzXG4gICAgICAgICAgICB2YXIgcHJvZ3Jlc3M7XG4gICAgICAgICAgICB2YXIgdHJhbnNsYXRlc0RpZmYgPSBzLm1heFRyYW5zbGF0ZSgpIC0gcy5taW5UcmFuc2xhdGUoKTtcbiAgICAgICAgICAgIGlmICh0cmFuc2xhdGVzRGlmZiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gKHRyYW5zbGF0ZSAtIHMubWluVHJhbnNsYXRlKCkpIC8gKHRyYW5zbGF0ZXNEaWZmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9ncmVzcyAhPT0gcy5wcm9ncmVzcykge1xuICAgICAgICAgICAgICAgIHMudXBkYXRlUHJvZ3Jlc3ModHJhbnNsYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBpZiAodXBkYXRlQWN0aXZlSW5kZXgpIHMudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5lZmZlY3QgIT09ICdzbGlkZScgJiYgcy5lZmZlY3RzW3MucGFyYW1zLmVmZmVjdF0pIHtcbiAgICAgICAgICAgICAgICBzLmVmZmVjdHNbcy5wYXJhbXMuZWZmZWN0XS5zZXRUcmFuc2xhdGUocy50cmFuc2xhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnBhcmFsbGF4ICYmIHMucGFyYWxsYXgpIHtcbiAgICAgICAgICAgICAgICBzLnBhcmFsbGF4LnNldFRyYW5zbGF0ZShzLnRyYW5zbGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuc2Nyb2xsYmFyICYmIHMuc2Nyb2xsYmFyKSB7XG4gICAgICAgICAgICAgICAgcy5zY3JvbGxiYXIuc2V0VHJhbnNsYXRlKHMudHJhbnNsYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5jb250cm9sICYmIHMuY29udHJvbGxlcikge1xuICAgICAgICAgICAgICAgIHMuY29udHJvbGxlci5zZXRUcmFuc2xhdGUocy50cmFuc2xhdGUsIGJ5Q29udHJvbGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzLmVtaXQoJ29uU2V0VHJhbnNsYXRlJywgcywgcy50cmFuc2xhdGUpO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgcy5nZXRUcmFuc2xhdGUgPSBmdW5jdGlvbiAoZWwsIGF4aXMpIHtcbiAgICAgICAgICAgIHZhciBtYXRyaXgsIGN1clRyYW5zZm9ybSwgY3VyU3R5bGUsIHRyYW5zZm9ybU1hdHJpeDtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyBhdXRvbWF0aWMgYXhpcyBkZXRlY3Rpb25cbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXhpcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBheGlzID0gJ3gnO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHMucnRsID8gLXMudHJhbnNsYXRlIDogcy50cmFuc2xhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgY3VyU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbCk7XG4gICAgICAgICAgICBpZiAod2luZG93LldlYktpdENTU01hdHJpeCkge1xuICAgICAgICAgICAgICAgIGN1clRyYW5zZm9ybSA9IGN1clN0eWxlLnRyYW5zZm9ybSB8fCBjdXJTdHlsZS53ZWJraXRUcmFuc2Zvcm07XG4gICAgICAgICAgICAgICAgaWYgKGN1clRyYW5zZm9ybS5zcGxpdCgnLCcpLmxlbmd0aCA+IDYpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VyVHJhbnNmb3JtID0gY3VyVHJhbnNmb3JtLnNwbGl0KCcsICcpLm1hcChmdW5jdGlvbihhKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnJlcGxhY2UoJywnLCcuJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pLmpvaW4oJywgJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFNvbWUgb2xkIHZlcnNpb25zIG9mIFdlYmtpdCBjaG9rZSB3aGVuICdub25lJyBpcyBwYXNzZWQ7IHBhc3NcbiAgICAgICAgICAgICAgICAvLyBlbXB0eSBzdHJpbmcgaW5zdGVhZCBpbiB0aGlzIGNhc2VcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1NYXRyaXggPSBuZXcgd2luZG93LldlYktpdENTU01hdHJpeChjdXJUcmFuc2Zvcm0gPT09ICdub25lJyA/ICcnIDogY3VyVHJhbnNmb3JtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybU1hdHJpeCA9IGN1clN0eWxlLk1velRyYW5zZm9ybSB8fCBjdXJTdHlsZS5PVHJhbnNmb3JtIHx8IGN1clN0eWxlLk1zVHJhbnNmb3JtIHx8IGN1clN0eWxlLm1zVHJhbnNmb3JtICB8fCBjdXJTdHlsZS50cmFuc2Zvcm0gfHwgY3VyU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgndHJhbnNmb3JtJykucmVwbGFjZSgndHJhbnNsYXRlKCcsICdtYXRyaXgoMSwgMCwgMCwgMSwnKTtcbiAgICAgICAgICAgICAgICBtYXRyaXggPSB0cmFuc2Zvcm1NYXRyaXgudG9TdHJpbmcoKS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGlmIChheGlzID09PSAneCcpIHtcbiAgICAgICAgICAgICAgICAvL0xhdGVzdCBDaHJvbWUgYW5kIHdlYmtpdHMgRml4XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5XZWJLaXRDU1NNYXRyaXgpXG4gICAgICAgICAgICAgICAgICAgIGN1clRyYW5zZm9ybSA9IHRyYW5zZm9ybU1hdHJpeC5tNDE7XG4gICAgICAgICAgICAgICAgLy9DcmF6eSBJRTEwIE1hdHJpeFxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1hdHJpeC5sZW5ndGggPT09IDE2KVxuICAgICAgICAgICAgICAgICAgICBjdXJUcmFuc2Zvcm0gPSBwYXJzZUZsb2F0KG1hdHJpeFsxMl0pO1xuICAgICAgICAgICAgICAgIC8vTm9ybWFsIEJyb3dzZXJzXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBjdXJUcmFuc2Zvcm0gPSBwYXJzZUZsb2F0KG1hdHJpeFs0XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYXhpcyA9PT0gJ3knKSB7XG4gICAgICAgICAgICAgICAgLy9MYXRlc3QgQ2hyb21lIGFuZCB3ZWJraXRzIEZpeFxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuV2ViS2l0Q1NTTWF0cml4KVxuICAgICAgICAgICAgICAgICAgICBjdXJUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1NYXRyaXgubTQyO1xuICAgICAgICAgICAgICAgIC8vQ3JhenkgSUUxMCBNYXRyaXhcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtYXRyaXgubGVuZ3RoID09PSAxNilcbiAgICAgICAgICAgICAgICAgICAgY3VyVHJhbnNmb3JtID0gcGFyc2VGbG9hdChtYXRyaXhbMTNdKTtcbiAgICAgICAgICAgICAgICAvL05vcm1hbCBCcm93c2Vyc1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgY3VyVHJhbnNmb3JtID0gcGFyc2VGbG9hdChtYXRyaXhbNV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucnRsICYmIGN1clRyYW5zZm9ybSkgY3VyVHJhbnNmb3JtID0gLWN1clRyYW5zZm9ybTtcbiAgICAgICAgICAgIHJldHVybiBjdXJUcmFuc2Zvcm0gfHwgMDtcbiAgICAgICAgfTtcbiAgICAgICAgcy5nZXRXcmFwcGVyVHJhbnNsYXRlID0gZnVuY3Rpb24gKGF4aXMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXhpcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBheGlzID0gcy5pc0hvcml6b250YWwoKSA/ICd4JyA6ICd5JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzLmdldFRyYW5zbGF0ZShzLndyYXBwZXJbMF0sIGF4aXMpO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgT2JzZXJ2ZXJcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBzLm9ic2VydmVycyA9IFtdO1xuICAgICAgICBmdW5jdGlvbiBpbml0T2JzZXJ2ZXIodGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhbiBvYnNlcnZlciBpbnN0YW5jZVxuICAgICAgICAgICAgdmFyIE9ic2VydmVyRnVuYyA9IHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyIHx8IHdpbmRvdy5XZWJraXRNdXRhdGlvbk9ic2VydmVyO1xuICAgICAgICAgICAgdmFyIG9ic2VydmVyID0gbmV3IE9ic2VydmVyRnVuYyhmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgbXV0YXRpb25zLmZvckVhY2goZnVuY3Rpb24gKG11dGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHMub25SZXNpemUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHMuZW1pdCgnb25PYnNlcnZlclVwZGF0ZScsIHMsIG11dGF0aW9uKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0LCB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogdHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcyA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogb3B0aW9ucy5hdHRyaWJ1dGVzLFxuICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHlwZW9mIG9wdGlvbnMuY2hpbGRMaXN0ID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBvcHRpb25zLmNoaWxkTGlzdCxcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJEYXRhOiB0eXBlb2Ygb3B0aW9ucy5jaGFyYWN0ZXJEYXRhID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBvcHRpb25zLmNoYXJhY3RlckRhdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgIHMub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xuICAgICAgICB9XG4gICAgICAgIHMuaW5pdE9ic2VydmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5vYnNlcnZlUGFyZW50cykge1xuICAgICAgICAgICAgICAgIHZhciBjb250YWluZXJQYXJlbnRzID0gcy5jb250YWluZXIucGFyZW50cygpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29udGFpbmVyUGFyZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpbml0T2JzZXJ2ZXIoY29udGFpbmVyUGFyZW50c1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC8vIE9ic2VydmUgY29udGFpbmVyXG4gICAgICAgICAgICBpbml0T2JzZXJ2ZXIocy5jb250YWluZXJbMF0sIHtjaGlsZExpc3Q6IGZhbHNlfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gT2JzZXJ2ZSB3cmFwcGVyXG4gICAgICAgICAgICBpbml0T2JzZXJ2ZXIocy53cmFwcGVyWzBdLCB7YXR0cmlidXRlczogZmFsc2V9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcy5kaXNjb25uZWN0T2JzZXJ2ZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzLm9ic2VydmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHMub2JzZXJ2ZXJzW2ldLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHMub2JzZXJ2ZXJzID0gW107XG4gICAgICAgIH07XG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIExvb3BcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICAvLyBDcmVhdGUgbG9vcGVkIHNsaWRlc1xuICAgICAgICBzLmNyZWF0ZUxvb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgZHVwbGljYXRlZCBzbGlkZXNcbiAgICAgICAgICAgIHMud3JhcHBlci5jaGlsZHJlbignLicgKyBzLnBhcmFtcy5zbGlkZUNsYXNzICsgJy4nICsgcy5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykucmVtb3ZlKCk7XG4gICAgICAgIFxuICAgICAgICAgICAgdmFyIHNsaWRlcyA9IHMud3JhcHBlci5jaGlsZHJlbignLicgKyBzLnBhcmFtcy5zbGlkZUNsYXNzKTtcbiAgICAgICAgXG4gICAgICAgICAgICBpZihzLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgJiYgIXMucGFyYW1zLmxvb3BlZFNsaWRlcykgcy5wYXJhbXMubG9vcGVkU2xpZGVzID0gc2xpZGVzLmxlbmd0aDtcbiAgICAgICAgXG4gICAgICAgICAgICBzLmxvb3BlZFNsaWRlcyA9IHBhcnNlSW50KHMucGFyYW1zLmxvb3BlZFNsaWRlcyB8fCBzLnBhcmFtcy5zbGlkZXNQZXJWaWV3LCAxMCk7XG4gICAgICAgICAgICBzLmxvb3BlZFNsaWRlcyA9IHMubG9vcGVkU2xpZGVzICsgcy5wYXJhbXMubG9vcEFkZGl0aW9uYWxTbGlkZXM7XG4gICAgICAgICAgICBpZiAocy5sb29wZWRTbGlkZXMgPiBzbGlkZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcy5sb29wZWRTbGlkZXMgPSBzbGlkZXMubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIHZhciBwcmVwZW5kU2xpZGVzID0gW10sIGFwcGVuZFNsaWRlcyA9IFtdLCBpO1xuICAgICAgICAgICAgc2xpZGVzLmVhY2goZnVuY3Rpb24gKGluZGV4LCBlbCkge1xuICAgICAgICAgICAgICAgIHZhciBzbGlkZSA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgcy5sb29wZWRTbGlkZXMpIGFwcGVuZFNsaWRlcy5wdXNoKGVsKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPCBzbGlkZXMubGVuZ3RoICYmIGluZGV4ID49IHNsaWRlcy5sZW5ndGggLSBzLmxvb3BlZFNsaWRlcykgcHJlcGVuZFNsaWRlcy5wdXNoKGVsKTtcbiAgICAgICAgICAgICAgICBzbGlkZS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcsIGluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGFwcGVuZFNsaWRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHMud3JhcHBlci5hcHBlbmQoJChhcHBlbmRTbGlkZXNbaV0uY2xvbmVOb2RlKHRydWUpKS5hZGRDbGFzcyhzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGkgPSBwcmVwZW5kU2xpZGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgcy53cmFwcGVyLnByZXBlbmQoJChwcmVwZW5kU2xpZGVzW2ldLmNsb25lTm9kZSh0cnVlKSkuYWRkQ2xhc3Mocy5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBzLmRlc3Ryb3lMb29wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcy53cmFwcGVyLmNoaWxkcmVuKCcuJyArIHMucGFyYW1zLnNsaWRlQ2xhc3MgKyAnLicgKyBzLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHMuc2xpZGVzLnJlbW92ZUF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4Jyk7XG4gICAgICAgIH07XG4gICAgICAgIHMucmVMb29wID0gZnVuY3Rpb24gKHVwZGF0ZVBvc2l0aW9uKSB7XG4gICAgICAgICAgICB2YXIgb2xkSW5kZXggPSBzLmFjdGl2ZUluZGV4IC0gcy5sb29wZWRTbGlkZXM7XG4gICAgICAgICAgICBzLmRlc3Ryb3lMb29wKCk7XG4gICAgICAgICAgICBzLmNyZWF0ZUxvb3AoKTtcbiAgICAgICAgICAgIHMudXBkYXRlU2xpZGVzU2l6ZSgpO1xuICAgICAgICAgICAgaWYgKHVwZGF0ZVBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgcy5zbGlkZVRvKG9sZEluZGV4ICsgcy5sb29wZWRTbGlkZXMsIDAsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIH07XG4gICAgICAgIHMuZml4TG9vcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBuZXdJbmRleDtcbiAgICAgICAgICAgIC8vRml4IEZvciBOZWdhdGl2ZSBPdmVyc2xpZGluZ1xuICAgICAgICAgICAgaWYgKHMuYWN0aXZlSW5kZXggPCBzLmxvb3BlZFNsaWRlcykge1xuICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gcy5zbGlkZXMubGVuZ3RoIC0gcy5sb29wZWRTbGlkZXMgKiAzICsgcy5hY3RpdmVJbmRleDtcbiAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgcy5sb29wZWRTbGlkZXM7XG4gICAgICAgICAgICAgICAgcy5zbGlkZVRvKG5ld0luZGV4LCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL0ZpeCBGb3IgUG9zaXRpdmUgT3ZlcnNsaWRpbmdcbiAgICAgICAgICAgIGVsc2UgaWYgKChzLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgJiYgcy5hY3RpdmVJbmRleCA+PSBzLmxvb3BlZFNsaWRlcyAqIDIpIHx8IChzLmFjdGl2ZUluZGV4ID4gcy5zbGlkZXMubGVuZ3RoIC0gcy5wYXJhbXMuc2xpZGVzUGVyVmlldyAqIDIpKSB7XG4gICAgICAgICAgICAgICAgbmV3SW5kZXggPSAtcy5zbGlkZXMubGVuZ3RoICsgcy5hY3RpdmVJbmRleCArIHMubG9vcGVkU2xpZGVzO1xuICAgICAgICAgICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyBzLmxvb3BlZFNsaWRlcztcbiAgICAgICAgICAgICAgICBzLnNsaWRlVG8obmV3SW5kZXgsIDAsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgQXBwZW5kL1ByZXBlbmQvUmVtb3ZlIFNsaWRlc1xuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIHMuYXBwZW5kU2xpZGUgPSBmdW5jdGlvbiAoc2xpZGVzKSB7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubG9vcCkge1xuICAgICAgICAgICAgICAgIHMuZGVzdHJveUxvb3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc2xpZGVzID09PSAnb2JqZWN0JyAmJiBzbGlkZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNsaWRlc1tpXSkgcy53cmFwcGVyLmFwcGVuZChzbGlkZXNbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHMud3JhcHBlci5hcHBlbmQoc2xpZGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sb29wKSB7XG4gICAgICAgICAgICAgICAgcy5jcmVhdGVMb29wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIShzLnBhcmFtcy5vYnNlcnZlciAmJiBzLnN1cHBvcnQub2JzZXJ2ZXIpKSB7XG4gICAgICAgICAgICAgICAgcy51cGRhdGUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHMucHJlcGVuZFNsaWRlID0gZnVuY3Rpb24gKHNsaWRlcykge1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgICAgICAgICBzLmRlc3Ryb3lMb29wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbmV3QWN0aXZlSW5kZXggPSBzLmFjdGl2ZUluZGV4ICsgMTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc2xpZGVzID09PSAnb2JqZWN0JyAmJiBzbGlkZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNsaWRlc1tpXSkgcy53cmFwcGVyLnByZXBlbmQoc2xpZGVzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV3QWN0aXZlSW5kZXggPSBzLmFjdGl2ZUluZGV4ICsgc2xpZGVzLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHMud3JhcHBlci5wcmVwZW5kKHNsaWRlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubG9vcCkge1xuICAgICAgICAgICAgICAgIHMuY3JlYXRlTG9vcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCEocy5wYXJhbXMub2JzZXJ2ZXIgJiYgcy5zdXBwb3J0Lm9ic2VydmVyKSkge1xuICAgICAgICAgICAgICAgIHMudXBkYXRlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcy5zbGlkZVRvKG5ld0FjdGl2ZUluZGV4LCAwLCBmYWxzZSk7XG4gICAgICAgIH07XG4gICAgICAgIHMucmVtb3ZlU2xpZGUgPSBmdW5jdGlvbiAoc2xpZGVzSW5kZXhlcykge1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgICAgICAgICBzLmRlc3Ryb3lMb29wKCk7XG4gICAgICAgICAgICAgICAgcy5zbGlkZXMgPSBzLndyYXBwZXIuY2hpbGRyZW4oJy4nICsgcy5wYXJhbXMuc2xpZGVDbGFzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbmV3QWN0aXZlSW5kZXggPSBzLmFjdGl2ZUluZGV4LFxuICAgICAgICAgICAgICAgIGluZGV4VG9SZW1vdmU7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHNsaWRlc0luZGV4ZXMgPT09ICdvYmplY3QnICYmIHNsaWRlc0luZGV4ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXNJbmRleGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4VG9SZW1vdmUgPSBzbGlkZXNJbmRleGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5zbGlkZXNbaW5kZXhUb1JlbW92ZV0pIHMuc2xpZGVzLmVxKGluZGV4VG9SZW1vdmUpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXhUb1JlbW92ZSA8IG5ld0FjdGl2ZUluZGV4KSBuZXdBY3RpdmVJbmRleC0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXdBY3RpdmVJbmRleCA9IE1hdGgubWF4KG5ld0FjdGl2ZUluZGV4LCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGluZGV4VG9SZW1vdmUgPSBzbGlkZXNJbmRleGVzO1xuICAgICAgICAgICAgICAgIGlmIChzLnNsaWRlc1tpbmRleFRvUmVtb3ZlXSkgcy5zbGlkZXMuZXEoaW5kZXhUb1JlbW92ZSkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4VG9SZW1vdmUgPCBuZXdBY3RpdmVJbmRleCkgbmV3QWN0aXZlSW5kZXgtLTtcbiAgICAgICAgICAgICAgICBuZXdBY3RpdmVJbmRleCA9IE1hdGgubWF4KG5ld0FjdGl2ZUluZGV4LCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubG9vcCkge1xuICAgICAgICAgICAgICAgIHMuY3JlYXRlTG9vcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGlmICghKHMucGFyYW1zLm9ic2VydmVyICYmIHMuc3VwcG9ydC5vYnNlcnZlcikpIHtcbiAgICAgICAgICAgICAgICBzLnVwZGF0ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sb29wKSB7XG4gICAgICAgICAgICAgICAgcy5zbGlkZVRvKG5ld0FjdGl2ZUluZGV4ICsgcy5sb29wZWRTbGlkZXMsIDAsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHMuc2xpZGVUbyhuZXdBY3RpdmVJbmRleCwgMCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgfTtcbiAgICAgICAgcy5yZW1vdmVBbGxTbGlkZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2xpZGVzSW5kZXhlcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzLnNsaWRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHNsaWRlc0luZGV4ZXMucHVzaChpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHMucmVtb3ZlU2xpZGUoc2xpZGVzSW5kZXhlcyk7XG4gICAgICAgIH07XG4gICAgICAgIFxuXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIEVmZmVjdHNcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBzLmVmZmVjdHMgPSB7XG4gICAgICAgICAgICBmYWRlOiB7XG4gICAgICAgICAgICAgICAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcy5zbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZSA9IHMuc2xpZGVzLmVxKGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9IHNsaWRlWzBdLnN3aXBlclNsaWRlT2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHR4ID0gLW9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcy5wYXJhbXMudmlydHVhbFRyYW5zbGF0ZSkgdHggPSB0eCAtIHMudHJhbnNsYXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHR5ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcy5pc0hvcml6b250YWwoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5ID0gdHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlT3BhY2l0eSA9IHMucGFyYW1zLmZhZGUuY3Jvc3NGYWRlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5tYXgoMSAtIE1hdGguYWJzKHNsaWRlWzBdLnByb2dyZXNzKSwgMCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxICsgTWF0aC5taW4oTWF0aC5tYXgoc2xpZGVbMF0ucHJvZ3Jlc3MsIC0xKSwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBzbGlkZU9wYWNpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50cmFuc2Zvcm0oJ3RyYW5zbGF0ZTNkKCcgKyB0eCArICdweCwgJyArIHR5ICsgJ3B4LCAwcHgpJyk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gKGR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHMuc2xpZGVzLnRyYW5zaXRpb24oZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMudmlydHVhbFRyYW5zbGF0ZSAmJiBkdXJhdGlvbiAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV2ZW50VHJpZ2dlcmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnNsaWRlcy50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnRUcmlnZ2VyZWQpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXMpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudFRyaWdnZXJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5hbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHJpZ2dlckV2ZW50cyA9IFsnd2Via2l0VHJhbnNpdGlvbkVuZCcsICd0cmFuc2l0aW9uZW5kJywgJ29UcmFuc2l0aW9uRW5kJywgJ01TVHJhbnNpdGlvbkVuZCcsICdtc1RyYW5zaXRpb25FbmQnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRyaWdnZXJFdmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy53cmFwcGVyLnRyaWdnZXIodHJpZ2dlckV2ZW50c1tpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmxpcDoge1xuICAgICAgICAgICAgICAgIHNldFRyYW5zbGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHMuc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGUgPSBzLnNsaWRlcy5lcShpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9ncmVzcyA9IHNsaWRlWzBdLnByb2dyZXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmZsaXAubGltaXRSb3RhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzID0gTWF0aC5tYXgoTWF0aC5taW4oc2xpZGVbMF0ucHJvZ3Jlc3MsIDEpLCAtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gc2xpZGVbMF0uc3dpcGVyU2xpZGVPZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcm90YXRlID0gLTE4MCAqIHByb2dyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZVkgPSByb3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlWCA9IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHggPSAtb2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcy5pc0hvcml6b250YWwoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5ID0gdHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZVggPSAtcm90YXRlWTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3RhdGVZID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHMucnRsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlWSA9IC1yb3RhdGVZO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlWzBdLnN0eWxlLnpJbmRleCA9IC1NYXRoLmFicyhNYXRoLnJvdW5kKHByb2dyZXNzKSkgKyBzLnNsaWRlcy5sZW5ndGg7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmZsaXAuc2xpZGVTaGFkb3dzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9TZXQgc2hhZG93c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzaGFkb3dCZWZvcmUgPSBzLmlzSG9yaXpvbnRhbCgpID8gc2xpZGUuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCcpIDogc2xpZGUuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNoYWRvd0FmdGVyID0gcy5pc0hvcml6b250YWwoKSA/IHNsaWRlLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0JykgOiBzbGlkZS5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hhZG93QmVmb3JlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFkb3dCZWZvcmUgPSAkKCc8ZGl2IGNsYXNzPVwic3dpcGVyLXNsaWRlLXNoYWRvdy0nICsgKHMuaXNIb3Jpem9udGFsKCkgPyAnbGVmdCcgOiAndG9wJykgKyAnXCI+PC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlLmFwcGVuZChzaGFkb3dCZWZvcmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hhZG93QWZ0ZXIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRvd0FmdGVyID0gJCgnPGRpdiBjbGFzcz1cInN3aXBlci1zbGlkZS1zaGFkb3ctJyArIChzLmlzSG9yaXpvbnRhbCgpID8gJ3JpZ2h0JyA6ICdib3R0b20nKSArICdcIj48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGUuYXBwZW5kKHNoYWRvd0FmdGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoYWRvd0JlZm9yZS5sZW5ndGgpIHNoYWRvd0JlZm9yZVswXS5zdHlsZS5vcGFjaXR5ID0gTWF0aC5tYXgoLXByb2dyZXNzLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hhZG93QWZ0ZXIubGVuZ3RoKSBzaGFkb3dBZnRlclswXS5zdHlsZS5vcGFjaXR5ID0gTWF0aC5tYXgocHJvZ3Jlc3MsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRyYW5zZm9ybSgndHJhbnNsYXRlM2QoJyArIHR4ICsgJ3B4LCAnICsgdHkgKyAncHgsIDBweCkgcm90YXRlWCgnICsgcm90YXRlWCArICdkZWcpIHJvdGF0ZVkoJyArIHJvdGF0ZVkgKyAnZGVnKScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXRUcmFuc2l0aW9uOiBmdW5jdGlvbiAoZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcy5zbGlkZXMudHJhbnNpdGlvbihkdXJhdGlvbikuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0JykudHJhbnNpdGlvbihkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlICYmIGR1cmF0aW9uICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXZlbnRUcmlnZ2VyZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpZGVzLmVxKHMuYWN0aXZlSW5kZXgpLnRyYW5zaXRpb25FbmQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudFRyaWdnZXJlZCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcykgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcyhzLnBhcmFtcy5zbGlkZUFjdGl2ZUNsYXNzKSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50VHJpZ2dlcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmFuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0cmlnZ2VyRXZlbnRzID0gWyd3ZWJraXRUcmFuc2l0aW9uRW5kJywgJ3RyYW5zaXRpb25lbmQnLCAnb1RyYW5zaXRpb25FbmQnLCAnTVNUcmFuc2l0aW9uRW5kJywgJ21zVHJhbnNpdGlvbkVuZCddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHJpZ2dlckV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLndyYXBwZXIudHJpZ2dlcih0cmlnZ2VyRXZlbnRzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjdWJlOiB7XG4gICAgICAgICAgICAgICAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB3cmFwcGVyUm90YXRlID0gMCwgY3ViZVNoYWRvdztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmN1YmUuc2hhZG93KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5pc0hvcml6b250YWwoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1YmVTaGFkb3cgPSBzLndyYXBwZXIuZmluZCgnLnN3aXBlci1jdWJlLXNoYWRvdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdWJlU2hhZG93Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdWJlU2hhZG93ID0gJCgnPGRpdiBjbGFzcz1cInN3aXBlci1jdWJlLXNoYWRvd1wiPjwvZGl2PicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLndyYXBwZXIuYXBwZW5kKGN1YmVTaGFkb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdWJlU2hhZG93LmNzcyh7aGVpZ2h0OiBzLndpZHRoICsgJ3B4J30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3ViZVNoYWRvdyA9IHMuY29udGFpbmVyLmZpbmQoJy5zd2lwZXItY3ViZS1zaGFkb3cnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3ViZVNoYWRvdy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3ViZVNoYWRvdyA9ICQoJzxkaXYgY2xhc3M9XCJzd2lwZXItY3ViZS1zaGFkb3dcIj48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5jb250YWluZXIuYXBwZW5kKGN1YmVTaGFkb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHMuc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGUgPSBzLnNsaWRlcy5lcShpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZUFuZ2xlID0gaSAqIDkwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJvdW5kID0gTWF0aC5mbG9vcihzbGlkZUFuZ2xlIC8gMzYwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLnJ0bCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlQW5nbGUgPSAtc2xpZGVBbmdsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZCA9IE1hdGguZmxvb3IoLXNsaWRlQW5nbGUgLyAzNjApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gTWF0aC5tYXgoTWF0aC5taW4oc2xpZGVbMF0ucHJvZ3Jlc3MsIDEpLCAtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHggPSAwLCB0eSA9IDAsIHR6ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpICUgNCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR4ID0gLSByb3VuZCAqIDQgKiBzLnNpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHogPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKGkgLSAxKSAlIDQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHogPSAtIHJvdW5kICogNCAqIHMuc2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKChpIC0gMikgJSA0ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHggPSBzLnNpemUgKyByb3VuZCAqIDQgKiBzLnNpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHogPSBzLnNpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgoaSAtIDMpICUgNCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR4ID0gLSBzLnNpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHogPSAzICogcy5zaXplICsgcy5zaXplICogNCAqIHJvdW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMucnRsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHggPSAtdHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHkgPSB0eDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRyYW5zZm9ybSA9ICdyb3RhdGVYKCcgKyAocy5pc0hvcml6b250YWwoKSA/IDAgOiAtc2xpZGVBbmdsZSkgKyAnZGVnKSByb3RhdGVZKCcgKyAocy5pc0hvcml6b250YWwoKSA/IHNsaWRlQW5nbGUgOiAwKSArICdkZWcpIHRyYW5zbGF0ZTNkKCcgKyB0eCArICdweCwgJyArIHR5ICsgJ3B4LCAnICsgdHogKyAncHgpJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcyA8PSAxICYmIHByb2dyZXNzID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyUm90YXRlID0gaSAqIDkwICsgcHJvZ3Jlc3MgKiA5MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5ydGwpIHdyYXBwZXJSb3RhdGUgPSAtaSAqIDkwIC0gcHJvZ3Jlc3MgKiA5MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlLnRyYW5zZm9ybSh0cmFuc2Zvcm0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmN1YmUuc2xpZGVTaGFkb3dzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9TZXQgc2hhZG93c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzaGFkb3dCZWZvcmUgPSBzLmlzSG9yaXpvbnRhbCgpID8gc2xpZGUuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCcpIDogc2xpZGUuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNoYWRvd0FmdGVyID0gcy5pc0hvcml6b250YWwoKSA/IHNsaWRlLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0JykgOiBzbGlkZS5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hhZG93QmVmb3JlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFkb3dCZWZvcmUgPSAkKCc8ZGl2IGNsYXNzPVwic3dpcGVyLXNsaWRlLXNoYWRvdy0nICsgKHMuaXNIb3Jpem9udGFsKCkgPyAnbGVmdCcgOiAndG9wJykgKyAnXCI+PC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlLmFwcGVuZChzaGFkb3dCZWZvcmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hhZG93QWZ0ZXIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRvd0FmdGVyID0gJCgnPGRpdiBjbGFzcz1cInN3aXBlci1zbGlkZS1zaGFkb3ctJyArIChzLmlzSG9yaXpvbnRhbCgpID8gJ3JpZ2h0JyA6ICdib3R0b20nKSArICdcIj48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGUuYXBwZW5kKHNoYWRvd0FmdGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoYWRvd0JlZm9yZS5sZW5ndGgpIHNoYWRvd0JlZm9yZVswXS5zdHlsZS5vcGFjaXR5ID0gTWF0aC5tYXgoLXByb2dyZXNzLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hhZG93QWZ0ZXIubGVuZ3RoKSBzaGFkb3dBZnRlclswXS5zdHlsZS5vcGFjaXR5ID0gTWF0aC5tYXgocHJvZ3Jlc3MsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHMud3JhcHBlci5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbic6ICc1MCUgNTAlIC0nICsgKHMuc2l6ZSAvIDIpICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICctbW96LXRyYW5zZm9ybS1vcmlnaW4nOiAnNTAlIDUwJSAtJyArIChzLnNpemUgLyAyKSArICdweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnLW1zLXRyYW5zZm9ybS1vcmlnaW4nOiAnNTAlIDUwJSAtJyArIChzLnNpemUgLyAyKSArICdweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6ICc1MCUgNTAlIC0nICsgKHMuc2l6ZSAvIDIpICsgJ3B4J1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5jdWJlLnNoYWRvdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdWJlU2hhZG93LnRyYW5zZm9ybSgndHJhbnNsYXRlM2QoMHB4LCAnICsgKHMud2lkdGggLyAyICsgcy5wYXJhbXMuY3ViZS5zaGFkb3dPZmZzZXQpICsgJ3B4LCAnICsgKC1zLndpZHRoIC8gMikgKyAncHgpIHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooMGRlZykgc2NhbGUoJyArIChzLnBhcmFtcy5jdWJlLnNoYWRvd1NjYWxlKSArICcpJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2hhZG93QW5nbGUgPSBNYXRoLmFicyh3cmFwcGVyUm90YXRlKSAtIE1hdGguZmxvb3IoTWF0aC5hYnMod3JhcHBlclJvdGF0ZSkgLyA5MCkgKiA5MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbXVsdGlwbGllciA9IDEuNSAtIChNYXRoLnNpbihzaGFkb3dBbmdsZSAqIDIgKiBNYXRoLlBJIC8gMzYwKSAvIDIgKyBNYXRoLmNvcyhzaGFkb3dBbmdsZSAqIDIgKiBNYXRoLlBJIC8gMzYwKSAvIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzY2FsZTEgPSBzLnBhcmFtcy5jdWJlLnNoYWRvd1NjYWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTIgPSBzLnBhcmFtcy5jdWJlLnNoYWRvd1NjYWxlIC8gbXVsdGlwbGllcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gcy5wYXJhbXMuY3ViZS5zaGFkb3dPZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3ViZVNoYWRvdy50cmFuc2Zvcm0oJ3NjYWxlM2QoJyArIHNjYWxlMSArICcsIDEsICcgKyBzY2FsZTIgKyAnKSB0cmFuc2xhdGUzZCgwcHgsICcgKyAocy5oZWlnaHQgLyAyICsgb2Zmc2V0KSArICdweCwgJyArICgtcy5oZWlnaHQgLyAyIC8gc2NhbGUyKSArICdweCkgcm90YXRlWCgtOTBkZWcpJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHpGYWN0b3IgPSAocy5pc1NhZmFyaSB8fCBzLmlzVWlXZWJWaWV3KSA/ICgtcy5zaXplIC8gMikgOiAwO1xuICAgICAgICAgICAgICAgICAgICBzLndyYXBwZXIudHJhbnNmb3JtKCd0cmFuc2xhdGUzZCgwcHgsMCwnICsgekZhY3RvciArICdweCkgcm90YXRlWCgnICsgKHMuaXNIb3Jpem9udGFsKCkgPyAwIDogd3JhcHBlclJvdGF0ZSkgKyAnZGVnKSByb3RhdGVZKCcgKyAocy5pc0hvcml6b250YWwoKSA/IC13cmFwcGVyUm90YXRlIDogMCkgKyAnZGVnKScpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gKGR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHMuc2xpZGVzLnRyYW5zaXRpb24oZHVyYXRpb24pLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCwgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCcpLnRyYW5zaXRpb24oZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuY3ViZS5zaGFkb3cgJiYgIXMuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuY29udGFpbmVyLmZpbmQoJy5zd2lwZXItY3ViZS1zaGFkb3cnKS50cmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb3ZlcmZsb3c6IHtcbiAgICAgICAgICAgICAgICBzZXRUcmFuc2xhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyYW5zZm9ybSA9IHMudHJhbnNsYXRlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2VudGVyID0gcy5pc0hvcml6b250YWwoKSA/IC10cmFuc2Zvcm0gKyBzLndpZHRoIC8gMiA6IC10cmFuc2Zvcm0gKyBzLmhlaWdodCAvIDI7XG4gICAgICAgICAgICAgICAgICAgIHZhciByb3RhdGUgPSBzLmlzSG9yaXpvbnRhbCgpID8gcy5wYXJhbXMuY292ZXJmbG93LnJvdGF0ZTogLXMucGFyYW1zLmNvdmVyZmxvdy5yb3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0cmFuc2xhdGUgPSBzLnBhcmFtcy5jb3ZlcmZsb3cuZGVwdGg7XG4gICAgICAgICAgICAgICAgICAgIC8vRWFjaCBzbGlkZSBvZmZzZXQgZnJvbSBjZW50ZXJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IHMuc2xpZGVzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGUgPSBzLnNsaWRlcy5lcShpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZVNpemUgPSBzLnNsaWRlc1NpemVzR3JpZFtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZU9mZnNldCA9IHNsaWRlWzBdLnN3aXBlclNsaWRlT2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9mZnNldE11bHRpcGxpZXIgPSAoY2VudGVyIC0gc2xpZGVPZmZzZXQgLSBzbGlkZVNpemUgLyAyKSAvIHNsaWRlU2l6ZSAqIHMucGFyYW1zLmNvdmVyZmxvdy5tb2RpZmllcjtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcm90YXRlWSA9IHMuaXNIb3Jpem9udGFsKCkgPyByb3RhdGUgKiBvZmZzZXRNdWx0aXBsaWVyIDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByb3RhdGVYID0gcy5pc0hvcml6b250YWwoKSA/IDAgOiByb3RhdGUgKiBvZmZzZXRNdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmFyIHJvdGF0ZVogPSAwXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHJhbnNsYXRlWiA9IC10cmFuc2xhdGUgKiBNYXRoLmFicyhvZmZzZXRNdWx0aXBsaWVyKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHJhbnNsYXRlWSA9IHMuaXNIb3Jpem9udGFsKCkgPyAwIDogcy5wYXJhbXMuY292ZXJmbG93LnN0cmV0Y2ggKiAob2Zmc2V0TXVsdGlwbGllcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHJhbnNsYXRlWCA9IHMuaXNIb3Jpem9udGFsKCkgPyBzLnBhcmFtcy5jb3ZlcmZsb3cuc3RyZXRjaCAqIChvZmZzZXRNdWx0aXBsaWVyKSA6IDA7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy9GaXggZm9yIHVsdHJhIHNtYWxsIHZhbHVlc1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRyYW5zbGF0ZVgpIDwgMC4wMDEpIHRyYW5zbGF0ZVggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRyYW5zbGF0ZVkpIDwgMC4wMDEpIHRyYW5zbGF0ZVkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRyYW5zbGF0ZVopIDwgMC4wMDEpIHRyYW5zbGF0ZVogPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHJvdGF0ZVkpIDwgMC4wMDEpIHJvdGF0ZVkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHJvdGF0ZVgpIDwgMC4wMDEpIHJvdGF0ZVggPSAwO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZVRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgnICsgdHJhbnNsYXRlWCArICdweCwnICsgdHJhbnNsYXRlWSArICdweCwnICsgdHJhbnNsYXRlWiArICdweCkgIHJvdGF0ZVgoJyArIHJvdGF0ZVggKyAnZGVnKSByb3RhdGVZKCcgKyByb3RhdGVZICsgJ2RlZyknO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlLnRyYW5zZm9ybShzbGlkZVRyYW5zZm9ybSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZVswXS5zdHlsZS56SW5kZXggPSAtTWF0aC5hYnMoTWF0aC5yb3VuZChvZmZzZXRNdWx0aXBsaWVyKSkgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmNvdmVyZmxvdy5zbGlkZVNoYWRvd3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1NldCBzaGFkb3dzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNoYWRvd0JlZm9yZSA9IHMuaXNIb3Jpem9udGFsKCkgPyBzbGlkZS5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0JykgOiBzbGlkZS5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2hhZG93QWZ0ZXIgPSBzLmlzSG9yaXpvbnRhbCgpID8gc2xpZGUuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQnKSA6IHNsaWRlLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGFkb3dCZWZvcmUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRvd0JlZm9yZSA9ICQoJzxkaXYgY2xhc3M9XCJzd2lwZXItc2xpZGUtc2hhZG93LScgKyAocy5pc0hvcml6b250YWwoKSA/ICdsZWZ0JyA6ICd0b3AnKSArICdcIj48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGUuYXBwZW5kKHNoYWRvd0JlZm9yZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGFkb3dBZnRlci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhZG93QWZ0ZXIgPSAkKCc8ZGl2IGNsYXNzPVwic3dpcGVyLXNsaWRlLXNoYWRvdy0nICsgKHMuaXNIb3Jpem9udGFsKCkgPyAncmlnaHQnIDogJ2JvdHRvbScpICsgJ1wiPjwvZGl2PicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZS5hcHBlbmQoc2hhZG93QWZ0ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hhZG93QmVmb3JlLmxlbmd0aCkgc2hhZG93QmVmb3JlWzBdLnN0eWxlLm9wYWNpdHkgPSBvZmZzZXRNdWx0aXBsaWVyID4gMCA/IG9mZnNldE11bHRpcGxpZXIgOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGFkb3dBZnRlci5sZW5ndGgpIHNoYWRvd0FmdGVyWzBdLnN0eWxlLm9wYWNpdHkgPSAoLW9mZnNldE11bHRpcGxpZXIpID4gMCA/IC1vZmZzZXRNdWx0aXBsaWVyIDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy9TZXQgY29ycmVjdCBwZXJzcGVjdGl2ZSBmb3IgSUUxMFxuICAgICAgICAgICAgICAgICAgICBpZiAocy5icm93c2VyLmllKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgd3MgPSBzLndyYXBwZXJbMF0uc3R5bGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3cy5wZXJzcGVjdGl2ZU9yaWdpbiA9IGNlbnRlciArICdweCA1MCUnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXRUcmFuc2l0aW9uOiBmdW5jdGlvbiAoZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcy5zbGlkZXMudHJhbnNpdGlvbihkdXJhdGlvbikuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0JykudHJhbnNpdGlvbihkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIEltYWdlcyBMYXp5IExvYWRpbmdcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBzLmxhenkgPSB7XG4gICAgICAgICAgICBpbml0aWFsSW1hZ2VMb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgbG9hZEltYWdlSW5TbGlkZTogZnVuY3Rpb24gKGluZGV4LCBsb2FkSW5EdXBsaWNhdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGluZGV4ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbG9hZEluRHVwbGljYXRlID09PSAndW5kZWZpbmVkJykgbG9hZEluRHVwbGljYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAocy5zbGlkZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciBzbGlkZSA9IHMuc2xpZGVzLmVxKGluZGV4KTtcbiAgICAgICAgICAgICAgICB2YXIgaW1nID0gc2xpZGUuZmluZCgnLnN3aXBlci1sYXp5Om5vdCguc3dpcGVyLWxhenktbG9hZGVkKTpub3QoLnN3aXBlci1sYXp5LWxvYWRpbmcpJyk7XG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlLmhhc0NsYXNzKCdzd2lwZXItbGF6eScpICYmICFzbGlkZS5oYXNDbGFzcygnc3dpcGVyLWxhenktbG9hZGVkJykgJiYgIXNsaWRlLmhhc0NsYXNzKCdzd2lwZXItbGF6eS1sb2FkaW5nJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1nID0gaW1nLmFkZChzbGlkZVswXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpbWcubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGltZy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9pbWcgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBfaW1nLmFkZENsYXNzKCdzd2lwZXItbGF6eS1sb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBiYWNrZ3JvdW5kID0gX2ltZy5hdHRyKCdkYXRhLWJhY2tncm91bmQnKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNyYyA9IF9pbWcuYXR0cignZGF0YS1zcmMnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyY3NldCA9IF9pbWcuYXR0cignZGF0YS1zcmNzZXQnKTtcbiAgICAgICAgICAgICAgICAgICAgcy5sb2FkSW1hZ2UoX2ltZ1swXSwgKHNyYyB8fCBiYWNrZ3JvdW5kKSwgc3Jjc2V0LCBmYWxzZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhY2tncm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaW1nLmNzcygnYmFja2dyb3VuZC1pbWFnZScsICd1cmwoXCInICsgYmFja2dyb3VuZCArICdcIiknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaW1nLnJlbW92ZUF0dHIoJ2RhdGEtYmFja2dyb3VuZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNyY3NldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaW1nLmF0dHIoJ3NyY3NldCcsIHNyY3NldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pbWcucmVtb3ZlQXR0cignZGF0YS1zcmNzZXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNyYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaW1nLmF0dHIoJ3NyYycsIHNyYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pbWcucmVtb3ZlQXR0cignZGF0YS1zcmMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIF9pbWcuYWRkQ2xhc3MoJ3N3aXBlci1sYXp5LWxvYWRlZCcpLnJlbW92ZUNsYXNzKCdzd2lwZXItbGF6eS1sb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZS5maW5kKCcuc3dpcGVyLWxhenktcHJlbG9hZGVyLCAucHJlbG9hZGVyJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMubG9vcCAmJiBsb2FkSW5EdXBsaWNhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGVPcmlnaW5hbEluZGV4ID0gc2xpZGUuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2xpZGUuaGFzQ2xhc3Mocy5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsU2xpZGUgPSBzLndyYXBwZXIuY2hpbGRyZW4oJ1tkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIicgKyBzbGlkZU9yaWdpbmFsSW5kZXggKyAnXCJdOm5vdCguJyArIHMucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MgKyAnKScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmxhenkubG9hZEltYWdlSW5TbGlkZShvcmlnaW5hbFNsaWRlLmluZGV4KCksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkdXBsaWNhdGVkU2xpZGUgPSBzLndyYXBwZXIuY2hpbGRyZW4oJy4nICsgcy5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcyArICdbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCInICsgc2xpZGVPcmlnaW5hbEluZGV4ICsgJ1wiXScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmxhenkubG9hZEltYWdlSW5TbGlkZShkdXBsaWNhdGVkU2xpZGUuaW5kZXgoKSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHMuZW1pdCgnb25MYXp5SW1hZ2VSZWFkeScsIHMsIHNsaWRlWzBdLCBfaW1nWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBzLmVtaXQoJ29uTGF6eUltYWdlTG9hZCcsIHMsIHNsaWRlWzBdLCBfaW1nWzBdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy53YXRjaFNsaWRlc1Zpc2liaWxpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgcy53cmFwcGVyLmNoaWxkcmVuKCcuJyArIHMucGFyYW1zLnNsaWRlVmlzaWJsZUNsYXNzKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMubGF6eS5sb2FkSW1hZ2VJblNsaWRlKCQodGhpcykuaW5kZXgoKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNsaWRlc1BlclZpZXcgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBzLmFjdGl2ZUluZGV4OyBpIDwgcy5hY3RpdmVJbmRleCArIHMucGFyYW1zLnNsaWRlc1BlclZpZXcgOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5zbGlkZXNbaV0pIHMubGF6eS5sb2FkSW1hZ2VJblNsaWRlKGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5sYXp5LmxvYWRJbWFnZUluU2xpZGUocy5hY3RpdmVJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxhenlMb2FkaW5nSW5QcmV2TmV4dCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuc2xpZGVzUGVyVmlldyA+IDEgfHwgKHMucGFyYW1zLmxhenlMb2FkaW5nSW5QcmV2TmV4dEFtb3VudCAmJiBzLnBhcmFtcy5sYXp5TG9hZGluZ0luUHJldk5leHRBbW91bnQgPiAxKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFtb3VudCA9IHMucGFyYW1zLmxhenlMb2FkaW5nSW5QcmV2TmV4dEFtb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzcHYgPSBzLnBhcmFtcy5zbGlkZXNQZXJWaWV3O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heEluZGV4ID0gTWF0aC5taW4ocy5hY3RpdmVJbmRleCArIHNwdiArIE1hdGgubWF4KGFtb3VudCwgc3B2KSwgcy5zbGlkZXMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW5JbmRleCA9IE1hdGgubWF4KHMuYWN0aXZlSW5kZXggLSBNYXRoLm1heChzcHYsIGFtb3VudCksIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTmV4dCBTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IHMuYWN0aXZlSW5kZXggKyBzLnBhcmFtcy5zbGlkZXNQZXJWaWV3OyBpIDwgbWF4SW5kZXg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLnNsaWRlc1tpXSkgcy5sYXp5LmxvYWRJbWFnZUluU2xpZGUoaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQcmV2IFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gbWluSW5kZXg7IGkgPCBzLmFjdGl2ZUluZGV4IDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMuc2xpZGVzW2ldKSBzLmxhenkubG9hZEltYWdlSW5TbGlkZShpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXh0U2xpZGUgPSBzLndyYXBwZXIuY2hpbGRyZW4oJy4nICsgcy5wYXJhbXMuc2xpZGVOZXh0Q2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRTbGlkZS5sZW5ndGggPiAwKSBzLmxhenkubG9hZEltYWdlSW5TbGlkZShuZXh0U2xpZGUuaW5kZXgoKSk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZTbGlkZSA9IHMud3JhcHBlci5jaGlsZHJlbignLicgKyBzLnBhcmFtcy5zbGlkZVByZXZDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJldlNsaWRlLmxlbmd0aCA+IDApIHMubGF6eS5sb2FkSW1hZ2VJblNsaWRlKHByZXZTbGlkZS5pbmRleCgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblRyYW5zaXRpb25TdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sYXp5TG9hZGluZykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMubGF6eUxvYWRpbmdPblRyYW5zaXRpb25TdGFydCB8fCAoIXMucGFyYW1zLmxhenlMb2FkaW5nT25UcmFuc2l0aW9uU3RhcnQgJiYgIXMubGF6eS5pbml0aWFsSW1hZ2VMb2FkZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLmxhenkubG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uVHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sYXp5TG9hZGluZyAmJiAhcy5wYXJhbXMubGF6eUxvYWRpbmdPblRyYW5zaXRpb25TdGFydCkge1xuICAgICAgICAgICAgICAgICAgICBzLmxhenkubG9hZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgXG5cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgU2Nyb2xsYmFyXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcy5zY3JvbGxiYXIgPSB7XG4gICAgICAgICAgICBpc1RvdWNoZWQ6IGZhbHNlLFxuICAgICAgICAgICAgc2V0RHJhZ1Bvc2l0aW9uOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHZhciBzYiA9IHMuc2Nyb2xsYmFyO1xuICAgICAgICAgICAgICAgIHZhciB4ID0gMCwgeSA9IDA7XG4gICAgICAgICAgICAgICAgdmFyIHRyYW5zbGF0ZTtcbiAgICAgICAgICAgICAgICB2YXIgcG9pbnRlclBvc2l0aW9uID0gcy5pc0hvcml6b250YWwoKSA/XG4gICAgICAgICAgICAgICAgICAgICgoZS50eXBlID09PSAndG91Y2hzdGFydCcgfHwgZS50eXBlID09PSAndG91Y2htb3ZlJykgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVggOiBlLnBhZ2VYIHx8IGUuY2xpZW50WCkgOlxuICAgICAgICAgICAgICAgICAgICAoKGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IGUudHlwZSA9PT0gJ3RvdWNobW92ZScpID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIDogZS5wYWdlWSB8fCBlLmNsaWVudFkpIDtcbiAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb24gPSAocG9pbnRlclBvc2l0aW9uKSAtIHNiLnRyYWNrLm9mZnNldCgpW3MuaXNIb3Jpem9udGFsKCkgPyAnbGVmdCcgOiAndG9wJ10gLSBzYi5kcmFnU2l6ZSAvIDI7XG4gICAgICAgICAgICAgICAgdmFyIHBvc2l0aW9uTWluID0gLXMubWluVHJhbnNsYXRlKCkgKiBzYi5tb3ZlRGl2aWRlcjtcbiAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb25NYXggPSAtcy5tYXhUcmFuc2xhdGUoKSAqIHNiLm1vdmVEaXZpZGVyO1xuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbiA8IHBvc2l0aW9uTWluKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gcG9zaXRpb25NaW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBvc2l0aW9uID4gcG9zaXRpb25NYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbk1heDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSAtcG9zaXRpb24gLyBzYi5tb3ZlRGl2aWRlcjtcbiAgICAgICAgICAgICAgICBzLnVwZGF0ZVByb2dyZXNzKHBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBzLnNldFdyYXBwZXJUcmFuc2xhdGUocG9zaXRpb24sIHRydWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRyYWdTdGFydDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2IgPSBzLnNjcm9sbGJhcjtcbiAgICAgICAgICAgICAgICBzYi5pc1RvdWNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBzYi5zZXREcmFnUG9zaXRpb24oZSk7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHNiLmRyYWdUaW1lb3V0KTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgc2IudHJhY2sudHJhbnNpdGlvbigwKTtcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuc2Nyb2xsYmFySGlkZSkge1xuICAgICAgICAgICAgICAgICAgICBzYi50cmFjay5jc3MoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcy53cmFwcGVyLnRyYW5zaXRpb24oMTAwKTtcbiAgICAgICAgICAgICAgICBzYi5kcmFnLnRyYW5zaXRpb24oMTAwKTtcbiAgICAgICAgICAgICAgICBzLmVtaXQoJ29uU2Nyb2xsYmFyRHJhZ1N0YXJ0Jywgcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZHJhZ01vdmU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNiID0gcy5zY3JvbGxiYXI7XG4gICAgICAgICAgICAgICAgaWYgKCFzYi5pc1RvdWNoZWQpIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGVsc2UgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNiLnNldERyYWdQb3NpdGlvbihlKTtcbiAgICAgICAgICAgICAgICBzLndyYXBwZXIudHJhbnNpdGlvbigwKTtcbiAgICAgICAgICAgICAgICBzYi50cmFjay50cmFuc2l0aW9uKDApO1xuICAgICAgICAgICAgICAgIHNiLmRyYWcudHJhbnNpdGlvbigwKTtcbiAgICAgICAgICAgICAgICBzLmVtaXQoJ29uU2Nyb2xsYmFyRHJhZ01vdmUnLCBzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkcmFnRW5kOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHZhciBzYiA9IHMuc2Nyb2xsYmFyO1xuICAgICAgICAgICAgICAgIGlmICghc2IuaXNUb3VjaGVkKSByZXR1cm47XG4gICAgICAgICAgICAgICAgc2IuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNjcm9sbGJhckhpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHNiLmRyYWdUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgc2IuZHJhZ1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNiLnRyYWNrLmNzcygnb3BhY2l0eScsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2IudHJhY2sudHJhbnNpdGlvbig0MDApO1xuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHMuZW1pdCgnb25TY3JvbGxiYXJEcmFnRW5kJywgcyk7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNjcm9sbGJhclNuYXBPblJlbGVhc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5zbGlkZVJlc2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVuYWJsZURyYWdnYWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBzYiA9IHMuc2Nyb2xsYmFyO1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBzLnN1cHBvcnQudG91Y2ggPyBzYi50cmFjayA6IGRvY3VtZW50O1xuICAgICAgICAgICAgICAgICQoc2IudHJhY2spLm9uKHMudG91Y2hFdmVudHMuc3RhcnQsIHNiLmRyYWdTdGFydCk7XG4gICAgICAgICAgICAgICAgJCh0YXJnZXQpLm9uKHMudG91Y2hFdmVudHMubW92ZSwgc2IuZHJhZ01vdmUpO1xuICAgICAgICAgICAgICAgICQodGFyZ2V0KS5vbihzLnRvdWNoRXZlbnRzLmVuZCwgc2IuZHJhZ0VuZCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGlzYWJsZURyYWdnYWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBzYiA9IHMuc2Nyb2xsYmFyO1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBzLnN1cHBvcnQudG91Y2ggPyBzYi50cmFjayA6IGRvY3VtZW50O1xuICAgICAgICAgICAgICAgICQoc2IudHJhY2spLm9mZihzLnRvdWNoRXZlbnRzLnN0YXJ0LCBzYi5kcmFnU3RhcnQpO1xuICAgICAgICAgICAgICAgICQodGFyZ2V0KS5vZmYocy50b3VjaEV2ZW50cy5tb3ZlLCBzYi5kcmFnTW92ZSk7XG4gICAgICAgICAgICAgICAgJCh0YXJnZXQpLm9mZihzLnRvdWNoRXZlbnRzLmVuZCwgc2IuZHJhZ0VuZCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy5zY3JvbGxiYXIpIHJldHVybjtcbiAgICAgICAgICAgICAgICB2YXIgc2IgPSBzLnNjcm9sbGJhcjtcbiAgICAgICAgICAgICAgICBzYi50cmFjayA9ICQocy5wYXJhbXMuc2Nyb2xsYmFyKTtcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMudW5pcXVlTmF2RWxlbWVudHMgJiYgdHlwZW9mIHMucGFyYW1zLnNjcm9sbGJhciA9PT0gJ3N0cmluZycgJiYgc2IudHJhY2subGVuZ3RoID4gMSAmJiBzLmNvbnRhaW5lci5maW5kKHMucGFyYW1zLnNjcm9sbGJhcikubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHNiLnRyYWNrID0gcy5jb250YWluZXIuZmluZChzLnBhcmFtcy5zY3JvbGxiYXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzYi5kcmFnID0gc2IudHJhY2suZmluZCgnLnN3aXBlci1zY3JvbGxiYXItZHJhZycpO1xuICAgICAgICAgICAgICAgIGlmIChzYi5kcmFnLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzYi5kcmFnID0gJCgnPGRpdiBjbGFzcz1cInN3aXBlci1zY3JvbGxiYXItZHJhZ1wiPjwvZGl2PicpO1xuICAgICAgICAgICAgICAgICAgICBzYi50cmFjay5hcHBlbmQoc2IuZHJhZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNiLmRyYWdbMF0uc3R5bGUud2lkdGggPSAnJztcbiAgICAgICAgICAgICAgICBzYi5kcmFnWzBdLnN0eWxlLmhlaWdodCA9ICcnO1xuICAgICAgICAgICAgICAgIHNiLnRyYWNrU2l6ZSA9IHMuaXNIb3Jpem9udGFsKCkgPyBzYi50cmFja1swXS5vZmZzZXRXaWR0aCA6IHNiLnRyYWNrWzBdLm9mZnNldEhlaWdodDtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgc2IuZGl2aWRlciA9IHMuc2l6ZSAvIHMudmlydHVhbFNpemU7XG4gICAgICAgICAgICAgICAgc2IubW92ZURpdmlkZXIgPSBzYi5kaXZpZGVyICogKHNiLnRyYWNrU2l6ZSAvIHMuc2l6ZSk7XG4gICAgICAgICAgICAgICAgc2IuZHJhZ1NpemUgPSBzYi50cmFja1NpemUgKiBzYi5kaXZpZGVyO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAocy5pc0hvcml6b250YWwoKSkge1xuICAgICAgICAgICAgICAgICAgICBzYi5kcmFnWzBdLnN0eWxlLndpZHRoID0gc2IuZHJhZ1NpemUgKyAncHgnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2IuZHJhZ1swXS5zdHlsZS5oZWlnaHQgPSBzYi5kcmFnU2l6ZSArICdweCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoc2IuZGl2aWRlciA+PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHNiLnRyYWNrWzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzYi50cmFja1swXS5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5zY3JvbGxiYXJIaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNiLnRyYWNrWzBdLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXRUcmFuc2xhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXMucGFyYW1zLnNjcm9sbGJhcikgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHZhciBkaWZmO1xuICAgICAgICAgICAgICAgIHZhciBzYiA9IHMuc2Nyb2xsYmFyO1xuICAgICAgICAgICAgICAgIHZhciB0cmFuc2xhdGUgPSBzLnRyYW5zbGF0ZSB8fCAwO1xuICAgICAgICAgICAgICAgIHZhciBuZXdQb3M7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciBuZXdTaXplID0gc2IuZHJhZ1NpemU7XG4gICAgICAgICAgICAgICAgbmV3UG9zID0gKHNiLnRyYWNrU2l6ZSAtIHNiLmRyYWdTaXplKSAqIHMucHJvZ3Jlc3M7XG4gICAgICAgICAgICAgICAgaWYgKHMucnRsICYmIHMuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3UG9zID0gLW5ld1BvcztcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1BvcyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1NpemUgPSBzYi5kcmFnU2l6ZSAtIG5ld1BvcztcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1BvcyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoLW5ld1BvcyArIHNiLmRyYWdTaXplID4gc2IudHJhY2tTaXplKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdTaXplID0gc2IudHJhY2tTaXplICsgbmV3UG9zO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV3UG9zIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3U2l6ZSA9IHNiLmRyYWdTaXplICsgbmV3UG9zO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UG9zID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChuZXdQb3MgKyBzYi5kcmFnU2l6ZSA+IHNiLnRyYWNrU2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3U2l6ZSA9IHNiLnRyYWNrU2l6ZSAtIG5ld1BvcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocy5pc0hvcml6b250YWwoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5zdXBwb3J0LnRyYW5zZm9ybXMzZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2IuZHJhZy50cmFuc2Zvcm0oJ3RyYW5zbGF0ZTNkKCcgKyAobmV3UG9zKSArICdweCwgMCwgMCknKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNiLmRyYWcudHJhbnNmb3JtKCd0cmFuc2xhdGVYKCcgKyAobmV3UG9zKSArICdweCknKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzYi5kcmFnWzBdLnN0eWxlLndpZHRoID0gbmV3U2l6ZSArICdweCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5zdXBwb3J0LnRyYW5zZm9ybXMzZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2IuZHJhZy50cmFuc2Zvcm0oJ3RyYW5zbGF0ZTNkKDBweCwgJyArIChuZXdQb3MpICsgJ3B4LCAwKScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2IuZHJhZy50cmFuc2Zvcm0oJ3RyYW5zbGF0ZVkoJyArIChuZXdQb3MpICsgJ3B4KScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNiLmRyYWdbMF0uc3R5bGUuaGVpZ2h0ID0gbmV3U2l6ZSArICdweCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5zY3JvbGxiYXJIaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChzYi50aW1lb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgc2IudHJhY2tbMF0uc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHNiLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNiLnRyYWNrWzBdLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2IudHJhY2sudHJhbnNpdGlvbig0MDApO1xuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gKGR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy5zY3JvbGxiYXIpIHJldHVybjtcbiAgICAgICAgICAgICAgICBzLnNjcm9sbGJhci5kcmFnLnRyYW5zaXRpb24oZHVyYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIENvbnRyb2xsZXJcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBzLmNvbnRyb2xsZXIgPSB7XG4gICAgICAgICAgICBMaW5lYXJTcGxpbmU6IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdEluZGV4ID0geC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIC8vIEdpdmVuIGFuIHggdmFsdWUgKHgyKSwgcmV0dXJuIHRoZSBleHBlY3RlZCB5MiB2YWx1ZTpcbiAgICAgICAgICAgICAgICAvLyAoeDEseTEpIGlzIHRoZSBrbm93biBwb2ludCBiZWZvcmUgZ2l2ZW4gdmFsdWUsXG4gICAgICAgICAgICAgICAgLy8gKHgzLHkzKSBpcyB0aGUga25vd24gcG9pbnQgYWZ0ZXIgZ2l2ZW4gdmFsdWUuXG4gICAgICAgICAgICAgICAgdmFyIGkxLCBpMztcbiAgICAgICAgICAgICAgICB2YXIgbCA9IHRoaXMueC5sZW5ndGg7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJwb2xhdGUgPSBmdW5jdGlvbiAoeDIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF4MikgcmV0dXJuIDA7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGluZGV4ZXMgb2YgeDEgYW5kIHgzICh0aGUgYXJyYXkgaW5kZXhlcyBiZWZvcmUgYW5kIGFmdGVyIGdpdmVuIHgyKTpcbiAgICAgICAgICAgICAgICAgICAgaTMgPSBiaW5hcnlTZWFyY2godGhpcy54LCB4Mik7XG4gICAgICAgICAgICAgICAgICAgIGkxID0gaTMgLSAxO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBvdXIgaW5kZXhlcyBpMSAmIGkzLCBzbyB3ZSBjYW4gY2FsY3VsYXRlIGFscmVhZHk6XG4gICAgICAgICAgICAgICAgICAgIC8vIHkyIDo9ICgoeDLiiJJ4MSkgw5cgKHkz4oiSeTEpKSDDtyAoeDPiiJJ4MSkgKyB5MVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCh4MiAtIHRoaXMueFtpMV0pICogKHRoaXMueVtpM10gLSB0aGlzLnlbaTFdKSkgLyAodGhpcy54W2kzXSAtIHRoaXMueFtpMV0pICsgdGhpcy55W2kxXTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgYmluYXJ5U2VhcmNoID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4SW5kZXgsIG1pbkluZGV4LCBndWVzcztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGFycmF5LCB2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbkluZGV4ID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhJbmRleCA9IGFycmF5Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChtYXhJbmRleCAtIG1pbkluZGV4ID4gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJyYXlbZ3Vlc3MgPSBtYXhJbmRleCArIG1pbkluZGV4ID4+IDFdIDw9IHZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5JbmRleCA9IGd1ZXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heEluZGV4ID0gZ3Vlc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1heEluZGV4O1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy94eHg6IGZvciBub3cgaSB3aWxsIGp1c3Qgc2F2ZSBvbmUgc3BsaW5lIGZ1bmN0aW9uIHRvIHRvXG4gICAgICAgICAgICBnZXRJbnRlcnBvbGF0ZUZ1bmN0aW9uOiBmdW5jdGlvbihjKXtcbiAgICAgICAgICAgICAgICBpZighcy5jb250cm9sbGVyLnNwbGluZSkgcy5jb250cm9sbGVyLnNwbGluZSA9IHMucGFyYW1zLmxvb3AgP1xuICAgICAgICAgICAgICAgICAgICBuZXcgcy5jb250cm9sbGVyLkxpbmVhclNwbGluZShzLnNsaWRlc0dyaWQsIGMuc2xpZGVzR3JpZCkgOlxuICAgICAgICAgICAgICAgICAgICBuZXcgcy5jb250cm9sbGVyLkxpbmVhclNwbGluZShzLnNuYXBHcmlkLCBjLnNuYXBHcmlkKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXRUcmFuc2xhdGU6IGZ1bmN0aW9uICh0cmFuc2xhdGUsIGJ5Q29udHJvbGxlcikge1xuICAgICAgICAgICAgICAgdmFyIGNvbnRyb2xsZWQgPSBzLnBhcmFtcy5jb250cm9sO1xuICAgICAgICAgICAgICAgdmFyIG11bHRpcGxpZXIsIGNvbnRyb2xsZWRUcmFuc2xhdGU7XG4gICAgICAgICAgICAgICBmdW5jdGlvbiBzZXRDb250cm9sbGVkVHJhbnNsYXRlKGMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3aWxsIGNyZWF0ZSBhbiBJbnRlcnBvbGF0ZSBmdW5jdGlvbiBiYXNlZCBvbiB0aGUgc25hcEdyaWRzXG4gICAgICAgICAgICAgICAgICAgIC8vIHggaXMgdGhlIEdyaWQgb2YgdGhlIHNjcm9sbGVkIHNjcm9sbGVyIGFuZCB5IHdpbGwgYmUgdGhlIGNvbnRyb2xsZWQgc2Nyb2xsZXJcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQgbWFrZXMgc2Vuc2UgdG8gY3JlYXRlIHRoaXMgb25seSBvbmNlIGFuZCByZWNhbGwgaXQgZm9yIHRoZSBpbnRlcnBvbGF0aW9uXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBmdW5jdGlvbiBkb2VzIGEgbG90IG9mIHZhbHVlIGNhY2hpbmcgZm9yIHBlcmZvcm1hbmNlXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSA9IGMucnRsICYmIGMucGFyYW1zLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnID8gLXMudHJhbnNsYXRlIDogcy50cmFuc2xhdGU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5jb250cm9sQnkgPT09ICdzbGlkZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuY29udHJvbGxlci5nZXRJbnRlcnBvbGF0ZUZ1bmN0aW9uKGMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaSBhbSBub3Qgc3VyZSB3aHkgdGhlIHZhbHVlcyBoYXZlIHRvIGJlIG11bHRpcGxpY2F0ZWQgdGhpcyB3YXksIHRyaWVkIHRvIGludmVydCB0aGUgc25hcEdyaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJ1dCBpdCBkaWQgbm90IHdvcmsgb3V0XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVkVHJhbnNsYXRlID0gLXMuY29udHJvbGxlci5zcGxpbmUuaW50ZXJwb2xhdGUoLXRyYW5zbGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKCFjb250cm9sbGVkVHJhbnNsYXRlIHx8IHMucGFyYW1zLmNvbnRyb2xCeSA9PT0gJ2NvbnRhaW5lcicpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGllciA9IChjLm1heFRyYW5zbGF0ZSgpIC0gYy5taW5UcmFuc2xhdGUoKSkgLyAocy5tYXhUcmFuc2xhdGUoKSAtIHMubWluVHJhbnNsYXRlKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlZFRyYW5zbGF0ZSA9ICh0cmFuc2xhdGUgLSBzLm1pblRyYW5zbGF0ZSgpKSAqIG11bHRpcGxpZXIgKyBjLm1pblRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMuY29udHJvbEludmVyc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZWRUcmFuc2xhdGUgPSBjLm1heFRyYW5zbGF0ZSgpIC0gY29udHJvbGxlZFRyYW5zbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjLnVwZGF0ZVByb2dyZXNzKGNvbnRyb2xsZWRUcmFuc2xhdGUpO1xuICAgICAgICAgICAgICAgICAgICBjLnNldFdyYXBwZXJUcmFuc2xhdGUoY29udHJvbGxlZFRyYW5zbGF0ZSwgZmFsc2UsIHMpO1xuICAgICAgICAgICAgICAgICAgICBjLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBpZiAocy5pc0FycmF5KGNvbnRyb2xsZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb250cm9sbGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250cm9sbGVkW2ldICE9PSBieUNvbnRyb2xsZXIgJiYgY29udHJvbGxlZFtpXSBpbnN0YW5jZW9mIFN3aXBlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29udHJvbGxlZFRyYW5zbGF0ZShjb250cm9sbGVkW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbnRyb2xsZWQgaW5zdGFuY2VvZiBTd2lwZXIgJiYgYnlDb250cm9sbGVyICE9PSBjb250cm9sbGVkKSB7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgIHNldENvbnRyb2xsZWRUcmFuc2xhdGUoY29udHJvbGxlZCk7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gKGR1cmF0aW9uLCBieUNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29udHJvbGxlZCA9IHMucGFyYW1zLmNvbnRyb2w7XG4gICAgICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc2V0Q29udHJvbGxlZFRyYW5zaXRpb24oYykge1xuICAgICAgICAgICAgICAgICAgICBjLnNldFdyYXBwZXJUcmFuc2l0aW9uKGR1cmF0aW9uLCBzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGR1cmF0aW9uICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLm9uVHJhbnNpdGlvblN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLndyYXBwZXIudHJhbnNpdGlvbkVuZChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29udHJvbGxlZCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjLnBhcmFtcy5sb29wICYmIHMucGFyYW1zLmNvbnRyb2xCeSA9PT0gJ3NsaWRlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLmZpeExvb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5vblRyYW5zaXRpb25FbmQoKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocy5pc0FycmF5KGNvbnRyb2xsZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb250cm9sbGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udHJvbGxlZFtpXSAhPT0gYnlDb250cm9sbGVyICYmIGNvbnRyb2xsZWRbaV0gaW5zdGFuY2VvZiBTd2lwZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDb250cm9sbGVkVHJhbnNpdGlvbihjb250cm9sbGVkW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjb250cm9sbGVkIGluc3RhbmNlb2YgU3dpcGVyICYmIGJ5Q29udHJvbGxlciAhPT0gY29udHJvbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRDb250cm9sbGVkVHJhbnNpdGlvbihjb250cm9sbGVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgSGFzaCBOYXZpZ2F0aW9uXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcy5oYXNobmF2ID0ge1xuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICghcy5wYXJhbXMuaGFzaG5hdikgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHMuaGFzaG5hdi5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdmFyIGhhc2ggPSBkb2N1bWVudC5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFoYXNoKSByZXR1cm47XG4gICAgICAgICAgICAgICAgdmFyIHNwZWVkID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gcy5zbGlkZXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlID0gcy5zbGlkZXMuZXEoaSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZUhhc2ggPSBzbGlkZS5hdHRyKCdkYXRhLWhhc2gnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNsaWRlSGFzaCA9PT0gaGFzaCAmJiAhc2xpZGUuaGFzQ2xhc3Mocy5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHNsaWRlLmluZGV4KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnNsaWRlVG8oaW5kZXgsIHNwZWVkLCBzLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldEhhc2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXMuaGFzaG5hdi5pbml0aWFsaXplZCB8fCAhcy5wYXJhbXMuaGFzaG5hdikgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhhc2ggPSBzLnNsaWRlcy5lcShzLmFjdGl2ZUluZGV4KS5hdHRyKCdkYXRhLWhhc2gnKSB8fCAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBLZXlib2FyZCBDb250cm9sXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlS2V5Ym9hcmQoZSkge1xuICAgICAgICAgICAgaWYgKGUub3JpZ2luYWxFdmVudCkgZSA9IGUub3JpZ2luYWxFdmVudDsgLy9qcXVlcnkgZml4XG4gICAgICAgICAgICB2YXIga2MgPSBlLmtleUNvZGUgfHwgZS5jaGFyQ29kZTtcbiAgICAgICAgICAgIC8vIERpcmVjdGlvbnMgbG9ja3NcbiAgICAgICAgICAgIGlmICghcy5wYXJhbXMuYWxsb3dTd2lwZVRvTmV4dCAmJiAocy5pc0hvcml6b250YWwoKSAmJiBrYyA9PT0gMzkgfHwgIXMuaXNIb3Jpem9udGFsKCkgJiYga2MgPT09IDQwKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcy5wYXJhbXMuYWxsb3dTd2lwZVRvUHJldiAmJiAocy5pc0hvcml6b250YWwoKSAmJiBrYyA9PT0gMzcgfHwgIXMuaXNIb3Jpem9udGFsKCkgJiYga2MgPT09IDM4KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlLnNoaWZ0S2V5IHx8IGUuYWx0S2V5IHx8IGUuY3RybEtleSB8fCBlLm1ldGFLZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50Lm5vZGVOYW1lICYmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCcgfHwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAndGV4dGFyZWEnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChrYyA9PT0gMzcgfHwga2MgPT09IDM5IHx8IGtjID09PSAzOCB8fCBrYyA9PT0gNDApIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5WaWV3ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy9DaGVjayB0aGF0IHN3aXBlciBzaG91bGQgYmUgaW5zaWRlIG9mIHZpc2libGUgYXJlYSBvZiB3aW5kb3dcbiAgICAgICAgICAgICAgICBpZiAocy5jb250YWluZXIucGFyZW50cygnLnN3aXBlci1zbGlkZScpLmxlbmd0aCA+IDAgJiYgcy5jb250YWluZXIucGFyZW50cygnLnN3aXBlci1zbGlkZS1hY3RpdmUnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgd2luZG93U2Nyb2xsID0ge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB3aW5kb3cucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB2YXIgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgICAgICB2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgICAgIHZhciBzd2lwZXJPZmZzZXQgPSBzLmNvbnRhaW5lci5vZmZzZXQoKTtcbiAgICAgICAgICAgICAgICBpZiAocy5ydGwpIHN3aXBlck9mZnNldC5sZWZ0ID0gc3dpcGVyT2Zmc2V0LmxlZnQgLSBzLmNvbnRhaW5lclswXS5zY3JvbGxMZWZ0O1xuICAgICAgICAgICAgICAgIHZhciBzd2lwZXJDb29yZCA9IFtcbiAgICAgICAgICAgICAgICAgICAgW3N3aXBlck9mZnNldC5sZWZ0LCBzd2lwZXJPZmZzZXQudG9wXSxcbiAgICAgICAgICAgICAgICAgICAgW3N3aXBlck9mZnNldC5sZWZ0ICsgcy53aWR0aCwgc3dpcGVyT2Zmc2V0LnRvcF0sXG4gICAgICAgICAgICAgICAgICAgIFtzd2lwZXJPZmZzZXQubGVmdCwgc3dpcGVyT2Zmc2V0LnRvcCArIHMuaGVpZ2h0XSxcbiAgICAgICAgICAgICAgICAgICAgW3N3aXBlck9mZnNldC5sZWZ0ICsgcy53aWR0aCwgc3dpcGVyT2Zmc2V0LnRvcCArIHMuaGVpZ2h0XVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzd2lwZXJDb29yZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcG9pbnQgPSBzd2lwZXJDb29yZFtpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRbMF0gPj0gd2luZG93U2Nyb2xsLmxlZnQgJiYgcG9pbnRbMF0gPD0gd2luZG93U2Nyb2xsLmxlZnQgKyB3aW5kb3dXaWR0aCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRbMV0gPj0gd2luZG93U2Nyb2xsLnRvcCAmJiBwb2ludFsxXSA8PSB3aW5kb3dTY3JvbGwudG9wICsgd2luZG93SGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5WaWV3ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFpblZpZXcpIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtjID09PSAzNyB8fCBrYyA9PT0gMzkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBlLnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoa2MgPT09IDM5ICYmICFzLnJ0bCkgfHwgKGtjID09PSAzNyAmJiBzLnJ0bCkpIHMuc2xpZGVOZXh0KCk7XG4gICAgICAgICAgICAgICAgaWYgKChrYyA9PT0gMzcgJiYgIXMucnRsKSB8fCAoa2MgPT09IDM5ICYmIHMucnRsKSkgcy5zbGlkZVByZXYoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChrYyA9PT0gMzggfHwga2MgPT09IDQwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoa2MgPT09IDQwKSBzLnNsaWRlTmV4dCgpO1xuICAgICAgICAgICAgICAgIGlmIChrYyA9PT0gMzgpIHMuc2xpZGVQcmV2KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcy5kaXNhYmxlS2V5Ym9hcmRDb250cm9sID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcy5wYXJhbXMua2V5Ym9hcmRDb250cm9sID0gZmFsc2U7XG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2tleWRvd24nLCBoYW5kbGVLZXlib2FyZCk7XG4gICAgICAgIH07XG4gICAgICAgIHMuZW5hYmxlS2V5Ym9hcmRDb250cm9sID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcy5wYXJhbXMua2V5Ym9hcmRDb250cm9sID0gdHJ1ZTtcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLm9uKCdrZXlkb3duJywgaGFuZGxlS2V5Ym9hcmQpO1xuICAgICAgICB9O1xuICAgICAgICBcblxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBNb3VzZXdoZWVsIENvbnRyb2xcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBzLm1vdXNld2hlZWwgPSB7XG4gICAgICAgICAgICBldmVudDogZmFsc2UsXG4gICAgICAgICAgICBsYXN0U2Nyb2xsVGltZTogKG5ldyB3aW5kb3cuRGF0ZSgpKS5nZXRUaW1lKClcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHMucGFyYW1zLm1vdXNld2hlZWxDb250cm9sKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIG5ldyB3aW5kb3cuV2hlZWxFdmVudCgnd2hlZWwnKTtcbiAgICAgICAgICAgICAgICBzLm1vdXNld2hlZWwuZXZlbnQgPSAnd2hlZWwnO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuV2hlZWxFdmVudCB8fCAocy5jb250YWluZXJbMF0gJiYgJ3doZWVsJyBpbiBzLmNvbnRhaW5lclswXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5tb3VzZXdoZWVsLmV2ZW50ID0gJ3doZWVsJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXMubW91c2V3aGVlbC5ldmVudCAmJiB3aW5kb3cuV2hlZWxFdmVudCkge1xuICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcy5tb3VzZXdoZWVsLmV2ZW50ICYmIGRvY3VtZW50Lm9ubW91c2V3aGVlbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcy5tb3VzZXdoZWVsLmV2ZW50ID0gJ21vdXNld2hlZWwnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzLm1vdXNld2hlZWwuZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBzLm1vdXNld2hlZWwuZXZlbnQgPSAnRE9NTW91c2VTY3JvbGwnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1vdXNld2hlZWwoZSkge1xuICAgICAgICAgICAgaWYgKGUub3JpZ2luYWxFdmVudCkgZSA9IGUub3JpZ2luYWxFdmVudDsgLy9qcXVlcnkgZml4XG4gICAgICAgICAgICB2YXIgd2UgPSBzLm1vdXNld2hlZWwuZXZlbnQ7XG4gICAgICAgICAgICB2YXIgZGVsdGEgPSAwO1xuICAgICAgICAgICAgdmFyIHJ0bEZhY3RvciA9IHMucnRsID8gLTEgOiAxO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vV2ViS2l0c1xuICAgICAgICAgICAgaWYgKHdlID09PSAnbW91c2V3aGVlbCcpIHtcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMubW91c2V3aGVlbEZvcmNlVG9BeGlzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoZS53aGVlbERlbHRhWCkgPiBNYXRoLmFicyhlLndoZWVsRGVsdGFZKSkgZGVsdGEgPSBlLndoZWVsRGVsdGFYICogcnRsRmFjdG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoZS53aGVlbERlbHRhWSkgPiBNYXRoLmFicyhlLndoZWVsRGVsdGFYKSkgZGVsdGEgPSBlLndoZWVsRGVsdGFZO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbHRhID0gTWF0aC5hYnMoZS53aGVlbERlbHRhWCkgPiBNYXRoLmFicyhlLndoZWVsRGVsdGFZKSA/IC0gZS53aGVlbERlbHRhWCAqIHJ0bEZhY3RvciA6IC0gZS53aGVlbERlbHRhWTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL09sZCBGaXJlRm94XG4gICAgICAgICAgICBlbHNlIGlmICh3ZSA9PT0gJ0RPTU1vdXNlU2Nyb2xsJykgZGVsdGEgPSAtZS5kZXRhaWw7XG4gICAgICAgICAgICAvL05ldyBGaXJlRm94XG4gICAgICAgICAgICBlbHNlIGlmICh3ZSA9PT0gJ3doZWVsJykge1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5tb3VzZXdoZWVsRm9yY2VUb0F4aXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhlLmRlbHRhWCkgPiBNYXRoLmFicyhlLmRlbHRhWSkpIGRlbHRhID0gLWUuZGVsdGFYICogcnRsRmFjdG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoZS5kZWx0YVkpID4gTWF0aC5hYnMoZS5kZWx0YVgpKSBkZWx0YSA9IC1lLmRlbHRhWTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZWx0YSA9IE1hdGguYWJzKGUuZGVsdGFYKSA+IE1hdGguYWJzKGUuZGVsdGFZKSA/IC0gZS5kZWx0YVggKiBydGxGYWN0b3IgOiAtIGUuZGVsdGFZO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkZWx0YSA9PT0gMCkgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5tb3VzZXdoZWVsSW52ZXJ0KSBkZWx0YSA9IC1kZWx0YTtcbiAgICAgICAgXG4gICAgICAgICAgICBpZiAoIXMucGFyYW1zLmZyZWVNb2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKChuZXcgd2luZG93LkRhdGUoKSkuZ2V0VGltZSgpIC0gcy5tb3VzZXdoZWVsLmxhc3RTY3JvbGxUaW1lID4gNjApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlbHRhIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCghcy5pc0VuZCB8fCBzLnBhcmFtcy5sb29wKSAmJiAhcy5hbmltYXRpbmcpIHMuc2xpZGVOZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzLnBhcmFtcy5tb3VzZXdoZWVsUmVsZWFzZU9uRWRnZXMpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCghcy5pc0JlZ2lubmluZyB8fCBzLnBhcmFtcy5sb29wKSAmJiAhcy5hbmltYXRpbmcpIHMuc2xpZGVQcmV2KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzLnBhcmFtcy5tb3VzZXdoZWVsUmVsZWFzZU9uRWRnZXMpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHMubW91c2V3aGVlbC5sYXN0U2Nyb2xsVGltZSA9IChuZXcgd2luZG93LkRhdGUoKSkuZ2V0VGltZSgpO1xuICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vRnJlZW1vZGUgb3Igc2Nyb2xsQ29udGFpbmVyOlxuICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IHMuZ2V0V3JhcHBlclRyYW5zbGF0ZSgpICsgZGVsdGEgKiBzLnBhcmFtcy5tb3VzZXdoZWVsU2Vuc2l0aXZpdHk7XG4gICAgICAgICAgICAgICAgdmFyIHdhc0JlZ2lubmluZyA9IHMuaXNCZWdpbm5pbmcsXG4gICAgICAgICAgICAgICAgICAgIHdhc0VuZCA9IHMuaXNFbmQ7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbiA+PSBzLm1pblRyYW5zbGF0ZSgpKSBwb3NpdGlvbiA9IHMubWluVHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uIDw9IHMubWF4VHJhbnNsYXRlKCkpIHBvc2l0aW9uID0gcy5tYXhUcmFuc2xhdGUoKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgcy5zZXRXcmFwcGVyVHJhbnNpdGlvbigwKTtcbiAgICAgICAgICAgICAgICBzLnNldFdyYXBwZXJUcmFuc2xhdGUocG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIHMudXBkYXRlUHJvZ3Jlc3MoKTtcbiAgICAgICAgICAgICAgICBzLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICghd2FzQmVnaW5uaW5nICYmIHMuaXNCZWdpbm5pbmcgfHwgIXdhc0VuZCAmJiBzLmlzRW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHMudXBkYXRlQ2xhc3NlcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmZyZWVNb2RlU3RpY2t5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChzLm1vdXNld2hlZWwudGltZW91dCk7XG4gICAgICAgICAgICAgICAgICAgIHMubW91c2V3aGVlbC50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnNsaWRlUmVzZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5sYXp5TG9hZGluZyAmJiBzLmxhenkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMubGF6eS5sb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIFJldHVybiBwYWdlIHNjcm9sbCBvbiBlZGdlIHBvc2l0aW9uc1xuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbiA9PT0gMCB8fCBwb3NpdGlvbiA9PT0gcy5tYXhUcmFuc2xhdGUoKSkgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmF1dG9wbGF5KSBzLnN0b3BBdXRvcGxheSgpO1xuICAgICAgICBcbiAgICAgICAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlbHNlIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBzLmRpc2FibGVNb3VzZXdoZWVsQ29udHJvbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghcy5tb3VzZXdoZWVsLmV2ZW50KSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBzLmNvbnRhaW5lci5vZmYocy5tb3VzZXdoZWVsLmV2ZW50LCBoYW5kbGVNb3VzZXdoZWVsKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgcy5lbmFibGVNb3VzZXdoZWVsQ29udHJvbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghcy5tb3VzZXdoZWVsLmV2ZW50KSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBzLmNvbnRhaW5lci5vbihzLm1vdXNld2hlZWwuZXZlbnQsIGhhbmRsZU1vdXNld2hlZWwpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIFxuXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIFBhcmFsbGF4XG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgZnVuY3Rpb24gc2V0UGFyYWxsYXhUcmFuc2Zvcm0oZWwsIHByb2dyZXNzKSB7XG4gICAgICAgICAgICBlbCA9ICQoZWwpO1xuICAgICAgICAgICAgdmFyIHAsIHBYLCBwWTtcbiAgICAgICAgICAgIHZhciBydGxGYWN0b3IgPSBzLnJ0bCA/IC0xIDogMTtcbiAgICAgICAgXG4gICAgICAgICAgICBwID0gZWwuYXR0cignZGF0YS1zd2lwZXItcGFyYWxsYXgnKSB8fCAnMCc7XG4gICAgICAgICAgICBwWCA9IGVsLmF0dHIoJ2RhdGEtc3dpcGVyLXBhcmFsbGF4LXgnKTtcbiAgICAgICAgICAgIHBZID0gZWwuYXR0cignZGF0YS1zd2lwZXItcGFyYWxsYXgteScpO1xuICAgICAgICAgICAgaWYgKHBYIHx8IHBZKSB7XG4gICAgICAgICAgICAgICAgcFggPSBwWCB8fCAnMCc7XG4gICAgICAgICAgICAgICAgcFkgPSBwWSB8fCAnMCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocy5pc0hvcml6b250YWwoKSkge1xuICAgICAgICAgICAgICAgICAgICBwWCA9IHA7XG4gICAgICAgICAgICAgICAgICAgIHBZID0gJzAnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcFkgPSBwO1xuICAgICAgICAgICAgICAgICAgICBwWCA9ICcwJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKChwWCkuaW5kZXhPZignJScpID49IDApIHtcbiAgICAgICAgICAgICAgICBwWCA9IHBhcnNlSW50KHBYLCAxMCkgKiBwcm9ncmVzcyAqIHJ0bEZhY3RvciArICclJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBYID0gcFggKiBwcm9ncmVzcyAqIHJ0bEZhY3RvciArICdweCcgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChwWSkuaW5kZXhPZignJScpID49IDApIHtcbiAgICAgICAgICAgICAgICBwWSA9IHBhcnNlSW50KHBZLCAxMCkgKiBwcm9ncmVzcyArICclJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBZID0gcFkgKiBwcm9ncmVzcyArICdweCcgO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGVsLnRyYW5zZm9ybSgndHJhbnNsYXRlM2QoJyArIHBYICsgJywgJyArIHBZICsgJywwcHgpJyk7XG4gICAgICAgIH1cbiAgICAgICAgcy5wYXJhbGxheCA9IHtcbiAgICAgICAgICAgIHNldFRyYW5zbGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHMuY29udGFpbmVyLmNoaWxkcmVuKCdbZGF0YS1zd2lwZXItcGFyYWxsYXhdLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgteF0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC15XScpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgc2V0UGFyYWxsYXhUcmFuc2Zvcm0odGhpcywgcy5wcm9ncmVzcyk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHMuc2xpZGVzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGUgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBzbGlkZS5maW5kKCdbZGF0YS1zd2lwZXItcGFyYWxsYXhdLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgteF0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC15XScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gTWF0aC5taW4oTWF0aC5tYXgoc2xpZGVbMF0ucHJvZ3Jlc3MsIC0xKSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQYXJhbGxheFRyYW5zZm9ybSh0aGlzLCBwcm9ncmVzcyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uIChkdXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZHVyYXRpb24gPT09ICd1bmRlZmluZWQnKSBkdXJhdGlvbiA9IHMucGFyYW1zLnNwZWVkO1xuICAgICAgICAgICAgICAgIHMuY29udGFpbmVyLmZpbmQoJ1tkYXRhLXN3aXBlci1wYXJhbGxheF0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC14XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LXldJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYWxsYXhEdXJhdGlvbiA9IHBhcnNlSW50KGVsLmF0dHIoJ2RhdGEtc3dpcGVyLXBhcmFsbGF4LWR1cmF0aW9uJyksIDEwKSB8fCBkdXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGR1cmF0aW9uID09PSAwKSBwYXJhbGxheER1cmF0aW9uID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZWwudHJhbnNpdGlvbihwYXJhbGxheER1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgXG5cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgUGx1Z2lucyBBUEkuIENvbGxlY3QgYWxsIGFuZCBpbml0IGFsbCBwbHVnaW5zXG4gICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcy5fcGx1Z2lucyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBwbHVnaW4gaW4gcy5wbHVnaW5zKSB7XG4gICAgICAgICAgICB2YXIgcCA9IHMucGx1Z2luc1twbHVnaW5dKHMsIHMucGFyYW1zW3BsdWdpbl0pO1xuICAgICAgICAgICAgaWYgKHApIHMuX3BsdWdpbnMucHVzaChwKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBNZXRob2QgdG8gY2FsbCBhbGwgcGx1Z2lucyBldmVudC9tZXRob2RcbiAgICAgICAgcy5jYWxsUGx1Z2lucyA9IGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcy5fcGx1Z2lucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChldmVudE5hbWUgaW4gcy5fcGx1Z2luc1tpXSkge1xuICAgICAgICAgICAgICAgICAgICBzLl9wbHVnaW5zW2ldW2V2ZW50TmFtZV0oYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0sIGFyZ3VtZW50c1szXSwgYXJndW1lbnRzWzRdLCBhcmd1bWVudHNbNV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBFdmVudHMvQ2FsbGJhY2tzL1BsdWdpbnMgRW1pdHRlclxuICAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZUV2ZW50TmFtZSAoZXZlbnROYW1lKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnROYW1lLmluZGV4T2YoJ29uJykgIT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnROYW1lWzBdICE9PSBldmVudE5hbWVbMF0udG9VcHBlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICBldmVudE5hbWUgPSAnb24nICsgZXZlbnROYW1lWzBdLnRvVXBwZXJDYXNlKCkgKyBldmVudE5hbWUuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnROYW1lID0gJ29uJyArIGV2ZW50TmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZXZlbnROYW1lO1xuICAgICAgICB9XG4gICAgICAgIHMuZW1pdHRlckV2ZW50TGlzdGVuZXJzID0ge1xuICAgICAgICBcbiAgICAgICAgfTtcbiAgICAgICAgcy5lbWl0ID0gZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgLy8gVHJpZ2dlciBjYWxsYmFja3NcbiAgICAgICAgICAgIGlmIChzLnBhcmFtc1tldmVudE5hbWVdKSB7XG4gICAgICAgICAgICAgICAgcy5wYXJhbXNbZXZlbnROYW1lXShhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSwgYXJndW1lbnRzWzNdLCBhcmd1bWVudHNbNF0sIGFyZ3VtZW50c1s1XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgIC8vIFRyaWdnZXIgZXZlbnRzXG4gICAgICAgICAgICBpZiAocy5lbWl0dGVyRXZlbnRMaXN0ZW5lcnNbZXZlbnROYW1lXSkge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzLmVtaXR0ZXJFdmVudExpc3RlbmVyc1tldmVudE5hbWVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHMuZW1pdHRlckV2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV1baV0oYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0sIGFyZ3VtZW50c1szXSwgYXJndW1lbnRzWzRdLCBhcmd1bWVudHNbNV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRyaWdnZXIgcGx1Z2luc1xuICAgICAgICAgICAgaWYgKHMuY2FsbFBsdWdpbnMpIHMuY2FsbFBsdWdpbnMoZXZlbnROYW1lLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSwgYXJndW1lbnRzWzNdLCBhcmd1bWVudHNbNF0sIGFyZ3VtZW50c1s1XSk7XG4gICAgICAgIH07XG4gICAgICAgIHMub24gPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICBldmVudE5hbWUgPSBub3JtYWxpemVFdmVudE5hbWUoZXZlbnROYW1lKTtcbiAgICAgICAgICAgIGlmICghcy5lbWl0dGVyRXZlbnRMaXN0ZW5lcnNbZXZlbnROYW1lXSkgcy5lbWl0dGVyRXZlbnRMaXN0ZW5lcnNbZXZlbnROYW1lXSA9IFtdO1xuICAgICAgICAgICAgcy5lbWl0dGVyRXZlbnRMaXN0ZW5lcnNbZXZlbnROYW1lXS5wdXNoKGhhbmRsZXIpO1xuICAgICAgICAgICAgcmV0dXJuIHM7XG4gICAgICAgIH07XG4gICAgICAgIHMub2ZmID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICBldmVudE5hbWUgPSBub3JtYWxpemVFdmVudE5hbWUoZXZlbnROYW1lKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgYWxsIGhhbmRsZXJzIGZvciBzdWNoIGV2ZW50XG4gICAgICAgICAgICAgICAgcy5lbWl0dGVyRXZlbnRMaXN0ZW5lcnNbZXZlbnROYW1lXSA9IFtdO1xuICAgICAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzLmVtaXR0ZXJFdmVudExpc3RlbmVyc1tldmVudE5hbWVdIHx8IHMuZW1pdHRlckV2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV0ubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcy5lbWl0dGVyRXZlbnRMaXN0ZW5lcnNbZXZlbnROYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKHMuZW1pdHRlckV2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV1baV0gPT09IGhhbmRsZXIpIHMuZW1pdHRlckV2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHM7XG4gICAgICAgIH07XG4gICAgICAgIHMub25jZSA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGV2ZW50TmFtZSA9IG5vcm1hbGl6ZUV2ZW50TmFtZShldmVudE5hbWUpO1xuICAgICAgICAgICAgdmFyIF9oYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSwgYXJndW1lbnRzWzNdLCBhcmd1bWVudHNbNF0pO1xuICAgICAgICAgICAgICAgIHMub2ZmKGV2ZW50TmFtZSwgX2hhbmRsZXIpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHMub24oZXZlbnROYW1lLCBfaGFuZGxlcik7XG4gICAgICAgICAgICByZXR1cm4gcztcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBBY2Nlc3NpYmlsaXR5IHRvb2xzXG4gICAgICAgIHMuYTExeSA9IHtcbiAgICAgICAgICAgIG1ha2VGb2N1c2FibGU6IGZ1bmN0aW9uICgkZWwpIHtcbiAgICAgICAgICAgICAgICAkZWwuYXR0cigndGFiSW5kZXgnLCAnMCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiAkZWw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWRkUm9sZTogZnVuY3Rpb24gKCRlbCwgcm9sZSkge1xuICAgICAgICAgICAgICAgICRlbC5hdHRyKCdyb2xlJywgcm9sZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICRlbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAgICAgYWRkTGFiZWw6IGZ1bmN0aW9uICgkZWwsIGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgJGVsLmF0dHIoJ2FyaWEtbGFiZWwnLCBsYWJlbCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICRlbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAgICAgZGlzYWJsZTogZnVuY3Rpb24gKCRlbCkge1xuICAgICAgICAgICAgICAgICRlbC5hdHRyKCdhcmlhLWRpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICRlbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAgICAgZW5hYmxlOiBmdW5jdGlvbiAoJGVsKSB7XG4gICAgICAgICAgICAgICAgJGVsLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICRlbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAgICAgb25FbnRlcktleTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgIT09IDEzKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKCQoZXZlbnQudGFyZ2V0KS5pcyhzLnBhcmFtcy5uZXh0QnV0dG9uKSkge1xuICAgICAgICAgICAgICAgICAgICBzLm9uQ2xpY2tOZXh0KGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMuaXNFbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuYTExeS5ub3RpZnkocy5wYXJhbXMubGFzdFNsaWRlTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLmExMXkubm90aWZ5KHMucGFyYW1zLm5leHRTbGlkZU1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCQoZXZlbnQudGFyZ2V0KS5pcyhzLnBhcmFtcy5wcmV2QnV0dG9uKSkge1xuICAgICAgICAgICAgICAgICAgICBzLm9uQ2xpY2tQcmV2KGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMuaXNCZWdpbm5pbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuYTExeS5ub3RpZnkocy5wYXJhbXMuZmlyc3RTbGlkZU1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5hMTF5Lm5vdGlmeShzLnBhcmFtcy5wcmV2U2xpZGVNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoJChldmVudC50YXJnZXQpLmlzKCcuJyArIHMucGFyYW1zLmJ1bGxldENsYXNzKSkge1xuICAgICAgICAgICAgICAgICAgICAkKGV2ZW50LnRhcmdldClbMF0uY2xpY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgICAgIGxpdmVSZWdpb246ICQoJzxzcGFuIGNsYXNzPVwic3dpcGVyLW5vdGlmaWNhdGlvblwiIGFyaWEtbGl2ZT1cImFzc2VydGl2ZVwiIGFyaWEtYXRvbWljPVwidHJ1ZVwiPjwvc3Bhbj4nKSxcbiAgICAgICAgXG4gICAgICAgICAgICBub3RpZnk6IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5vdGlmaWNhdGlvbiA9IHMuYTExeS5saXZlUmVnaW9uO1xuICAgICAgICAgICAgICAgIGlmIChub3RpZmljYXRpb24ubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uLmh0bWwoJycpO1xuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5odG1sKG1lc3NhZ2UpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBTZXR1cCBhY2Nlc3NpYmlsaXR5XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLm5leHRCdXR0b24gJiYgcy5uZXh0QnV0dG9uICYmIHMubmV4dEJ1dHRvbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHMuYTExeS5tYWtlRm9jdXNhYmxlKHMubmV4dEJ1dHRvbik7XG4gICAgICAgICAgICAgICAgICAgIHMuYTExeS5hZGRSb2xlKHMubmV4dEJ1dHRvbiwgJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBzLmExMXkuYWRkTGFiZWwocy5uZXh0QnV0dG9uLCBzLnBhcmFtcy5uZXh0U2xpZGVNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnByZXZCdXR0b24gJiYgcy5wcmV2QnV0dG9uICYmIHMucHJldkJ1dHRvbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHMuYTExeS5tYWtlRm9jdXNhYmxlKHMucHJldkJ1dHRvbik7XG4gICAgICAgICAgICAgICAgICAgIHMuYTExeS5hZGRSb2xlKHMucHJldkJ1dHRvbiwgJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBzLmExMXkuYWRkTGFiZWwocy5wcmV2QnV0dG9uLCBzLnBhcmFtcy5wcmV2U2xpZGVNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICQocy5jb250YWluZXIpLmFwcGVuZChzLmExMXkubGl2ZVJlZ2lvbik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5pdFBhZ2luYXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAocy5wYXJhbXMucGFnaW5hdGlvbiAmJiBzLnBhcmFtcy5wYWdpbmF0aW9uQ2xpY2thYmxlICYmIHMuYnVsbGV0cyAmJiBzLmJ1bGxldHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHMuYnVsbGV0cy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBidWxsZXQgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5hMTF5Lm1ha2VGb2N1c2FibGUoYnVsbGV0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuYTExeS5hZGRSb2xlKGJ1bGxldCwgJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5hMTF5LmFkZExhYmVsKGJ1bGxldCwgcy5wYXJhbXMucGFnaW5hdGlvbkJ1bGxldE1lc3NhZ2UucmVwbGFjZSgve3tpbmRleH19LywgYnVsbGV0LmluZGV4KCkgKyAxKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMuYTExeS5saXZlUmVnaW9uICYmIHMuYTExeS5saXZlUmVnaW9uLmxlbmd0aCA+IDApIHMuYTExeS5saXZlUmVnaW9uLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBcblxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICBJbml0L0Rlc3Ryb3lcbiAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBzLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubG9vcCkgcy5jcmVhdGVMb29wKCk7XG4gICAgICAgICAgICBzLnVwZGF0ZUNvbnRhaW5lclNpemUoKTtcbiAgICAgICAgICAgIHMudXBkYXRlU2xpZGVzU2l6ZSgpO1xuICAgICAgICAgICAgcy51cGRhdGVQYWdpbmF0aW9uKCk7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuc2Nyb2xsYmFyICYmIHMuc2Nyb2xsYmFyKSB7XG4gICAgICAgICAgICAgICAgcy5zY3JvbGxiYXIuc2V0KCk7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNjcm9sbGJhckRyYWdnYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICBzLnNjcm9sbGJhci5lbmFibGVEcmFnZ2FibGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMuZWZmZWN0ICE9PSAnc2xpZGUnICYmIHMuZWZmZWN0c1tzLnBhcmFtcy5lZmZlY3RdKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzLnBhcmFtcy5sb29wKSBzLnVwZGF0ZVByb2dyZXNzKCk7XG4gICAgICAgICAgICAgICAgcy5lZmZlY3RzW3MucGFyYW1zLmVmZmVjdF0uc2V0VHJhbnNsYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubG9vcCkge1xuICAgICAgICAgICAgICAgIHMuc2xpZGVUbyhzLnBhcmFtcy5pbml0aWFsU2xpZGUgKyBzLmxvb3BlZFNsaWRlcywgMCwgcy5wYXJhbXMucnVuQ2FsbGJhY2tzT25Jbml0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHMuc2xpZGVUbyhzLnBhcmFtcy5pbml0aWFsU2xpZGUsIDAsIHMucGFyYW1zLnJ1bkNhbGxiYWNrc09uSW5pdCk7XG4gICAgICAgICAgICAgICAgaWYgKHMucGFyYW1zLmluaXRpYWxTbGlkZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5wYXJhbGxheCAmJiBzLnBhcmFtcy5wYXJhbGxheCkgcy5wYXJhbGxheC5zZXRUcmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMubGF6eSAmJiBzLnBhcmFtcy5sYXp5TG9hZGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5sYXp5LmxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMubGF6eS5pbml0aWFsSW1hZ2VMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcy5hdHRhY2hFdmVudHMoKTtcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5vYnNlcnZlciAmJiBzLnN1cHBvcnQub2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICBzLmluaXRPYnNlcnZlcnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5wcmVsb2FkSW1hZ2VzICYmICFzLnBhcmFtcy5sYXp5TG9hZGluZykge1xuICAgICAgICAgICAgICAgIHMucHJlbG9hZEltYWdlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmF1dG9wbGF5KSB7XG4gICAgICAgICAgICAgICAgcy5zdGFydEF1dG9wbGF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMua2V5Ym9hcmRDb250cm9sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMuZW5hYmxlS2V5Ym9hcmRDb250cm9sKSBzLmVuYWJsZUtleWJvYXJkQ29udHJvbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLm1vdXNld2hlZWxDb250cm9sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMuZW5hYmxlTW91c2V3aGVlbENvbnRyb2wpIHMuZW5hYmxlTW91c2V3aGVlbENvbnRyb2woKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5oYXNobmF2KSB7XG4gICAgICAgICAgICAgICAgaWYgKHMuaGFzaG5hdikgcy5oYXNobmF2LmluaXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5hMTF5ICYmIHMuYTExeSkgcy5hMTF5LmluaXQoKTtcbiAgICAgICAgICAgIHMuZW1pdCgnb25Jbml0Jywgcyk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAvLyBDbGVhbnVwIGR5bmFtaWMgc3R5bGVzXG4gICAgICAgIHMuY2xlYW51cFN0eWxlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENvbnRhaW5lclxuICAgICAgICAgICAgcy5jb250YWluZXIucmVtb3ZlQ2xhc3Mocy5jbGFzc05hbWVzLmpvaW4oJyAnKSkucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyBXcmFwcGVyXG4gICAgICAgICAgICBzLndyYXBwZXIucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyBTbGlkZXNcbiAgICAgICAgICAgIGlmIChzLnNsaWRlcyAmJiBzLnNsaWRlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzLnNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoW1xuICAgICAgICAgICAgICAgICAgICAgIHMucGFyYW1zLnNsaWRlVmlzaWJsZUNsYXNzLFxuICAgICAgICAgICAgICAgICAgICAgIHMucGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3MsXG4gICAgICAgICAgICAgICAgICAgICAgcy5wYXJhbXMuc2xpZGVOZXh0Q2xhc3MsXG4gICAgICAgICAgICAgICAgICAgICAgcy5wYXJhbXMuc2xpZGVQcmV2Q2xhc3NcbiAgICAgICAgICAgICAgICAgICAgXS5qb2luKCcgJykpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdzdHlsZScpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLXN3aXBlci1jb2x1bW4nKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1zd2lwZXItcm93Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gUGFnaW5hdGlvbi9CdWxsZXRzXG4gICAgICAgICAgICBpZiAocy5wYWdpbmF0aW9uQ29udGFpbmVyICYmIHMucGFnaW5hdGlvbkNvbnRhaW5lci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzLnBhZ2luYXRpb25Db250YWluZXIucmVtb3ZlQ2xhc3Mocy5wYXJhbXMucGFnaW5hdGlvbkhpZGRlbkNsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLmJ1bGxldHMgJiYgcy5idWxsZXRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHMuYnVsbGV0cy5yZW1vdmVDbGFzcyhzLnBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gQnV0dG9uc1xuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnByZXZCdXR0b24pICQocy5wYXJhbXMucHJldkJ1dHRvbikucmVtb3ZlQ2xhc3Mocy5wYXJhbXMuYnV0dG9uRGlzYWJsZWRDbGFzcyk7XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubmV4dEJ1dHRvbikgJChzLnBhcmFtcy5uZXh0QnV0dG9uKS5yZW1vdmVDbGFzcyhzLnBhcmFtcy5idXR0b25EaXNhYmxlZENsYXNzKTtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyBTY3JvbGxiYXJcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5zY3JvbGxiYXIgJiYgcy5zY3JvbGxiYXIpIHtcbiAgICAgICAgICAgICAgICBpZiAocy5zY3JvbGxiYXIudHJhY2sgJiYgcy5zY3JvbGxiYXIudHJhY2subGVuZ3RoKSBzLnNjcm9sbGJhci50cmFjay5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgIGlmIChzLnNjcm9sbGJhci5kcmFnICYmIHMuc2Nyb2xsYmFyLmRyYWcubGVuZ3RoKSBzLnNjcm9sbGJhci5kcmFnLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAvLyBEZXN0cm95XG4gICAgICAgIHMuZGVzdHJveSA9IGZ1bmN0aW9uIChkZWxldGVJbnN0YW5jZSwgY2xlYW51cFN0eWxlcykge1xuICAgICAgICAgICAgLy8gRGV0YWNoIGV2ZWJ0c1xuICAgICAgICAgICAgcy5kZXRhY2hFdmVudHMoKTtcbiAgICAgICAgICAgIC8vIFN0b3AgYXV0b3BsYXlcbiAgICAgICAgICAgIHMuc3RvcEF1dG9wbGF5KCk7XG4gICAgICAgICAgICAvLyBEaXNhYmxlIGRyYWdnYWJsZVxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLnNjcm9sbGJhciAmJiBzLnNjcm9sbGJhcikge1xuICAgICAgICAgICAgICAgIGlmIChzLnBhcmFtcy5zY3JvbGxiYXJEcmFnZ2FibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5zY3JvbGxiYXIuZGlzYWJsZURyYWdnYWJsZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERlc3Ryb3kgbG9vcFxuICAgICAgICAgICAgaWYgKHMucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgICAgICAgICBzLmRlc3Ryb3lMb29wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDbGVhbnVwIHN0eWxlc1xuICAgICAgICAgICAgaWYgKGNsZWFudXBTdHlsZXMpIHtcbiAgICAgICAgICAgICAgICBzLmNsZWFudXBTdHlsZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERpc2Nvbm5lY3Qgb2JzZXJ2ZXJcbiAgICAgICAgICAgIHMuZGlzY29ubmVjdE9ic2VydmVycygpO1xuICAgICAgICAgICAgLy8gRGlzYWJsZSBrZXlib2FyZC9tb3VzZXdoZWVsXG4gICAgICAgICAgICBpZiAocy5wYXJhbXMua2V5Ym9hcmRDb250cm9sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMuZGlzYWJsZUtleWJvYXJkQ29udHJvbCkgcy5kaXNhYmxlS2V5Ym9hcmRDb250cm9sKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5wYXJhbXMubW91c2V3aGVlbENvbnRyb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocy5kaXNhYmxlTW91c2V3aGVlbENvbnRyb2wpIHMuZGlzYWJsZU1vdXNld2hlZWxDb250cm9sKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBEaXNhYmxlIGExMXlcbiAgICAgICAgICAgIGlmIChzLnBhcmFtcy5hMTF5ICYmIHMuYTExeSkgcy5hMTF5LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIC8vIERlc3Ryb3kgY2FsbGJhY2tcbiAgICAgICAgICAgIHMuZW1pdCgnb25EZXN0cm95Jyk7XG4gICAgICAgICAgICAvLyBEZWxldGUgaW5zdGFuY2VcbiAgICAgICAgICAgIGlmIChkZWxldGVJbnN0YW5jZSAhPT0gZmFsc2UpIHMgPSBudWxsO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgcy5pbml0KCk7XG4gICAgICAgIFxuXG4gICAgXG4gICAgICAgIC8vIFJldHVybiBzd2lwZXIgaW5zdGFuY2VcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfTtcbiAgICBcblxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgUHJvdG90eXBlXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgU3dpcGVyLnByb3RvdHlwZSA9IHtcbiAgICAgICAgaXNTYWZhcmk6IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gKHVhLmluZGV4T2YoJ3NhZmFyaScpID49IDAgJiYgdWEuaW5kZXhPZignY2hyb21lJykgPCAwICYmIHVhLmluZGV4T2YoJ2FuZHJvaWQnKSA8IDApO1xuICAgICAgICB9KSgpLFxuICAgICAgICBpc1VpV2ViVmlldzogLyhpUGhvbmV8aVBvZHxpUGFkKS4qQXBwbGVXZWJLaXQoPyEuKlNhZmFyaSkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLFxuICAgICAgICBpc0FycmF5OiBmdW5jdGlvbiAoYXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5hcHBseShhcnIpID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgICAgICB9LFxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIEJyb3dzZXJcbiAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIGJyb3dzZXI6IHtcbiAgICAgICAgICAgIGllOiB3aW5kb3cubmF2aWdhdG9yLnBvaW50ZXJFbmFibGVkIHx8IHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCxcbiAgICAgICAgICAgIGllVG91Y2g6ICh3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQgJiYgd2luZG93Lm5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzID4gMSkgfHwgKHdpbmRvdy5uYXZpZ2F0b3IucG9pbnRlckVuYWJsZWQgJiYgd2luZG93Lm5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDEpXG4gICAgICAgIH0sXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgRGV2aWNlc1xuICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgZGV2aWNlOiAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICAgICAgICAgIHZhciBhbmRyb2lkID0gdWEubWF0Y2goLyhBbmRyb2lkKTs/W1xcc1xcL10rKFtcXGQuXSspPy8pO1xuICAgICAgICAgICAgdmFyIGlwYWQgPSB1YS5tYXRjaCgvKGlQYWQpLipPU1xccyhbXFxkX10rKS8pO1xuICAgICAgICAgICAgdmFyIGlwb2QgPSB1YS5tYXRjaCgvKGlQb2QpKC4qT1NcXHMoW1xcZF9dKykpPy8pO1xuICAgICAgICAgICAgdmFyIGlwaG9uZSA9ICFpcGFkICYmIHVhLm1hdGNoKC8oaVBob25lXFxzT1MpXFxzKFtcXGRfXSspLyk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlvczogaXBhZCB8fCBpcGhvbmUgfHwgaXBvZCxcbiAgICAgICAgICAgICAgICBhbmRyb2lkOiBhbmRyb2lkXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KSgpLFxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIEZlYXR1cmUgRGV0ZWN0aW9uXG4gICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBzdXBwb3J0OiB7XG4gICAgICAgICAgICB0b3VjaCA6ICh3aW5kb3cuTW9kZXJuaXpyICYmIE1vZGVybml6ci50b3VjaCA9PT0gdHJ1ZSkgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gISEoKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykgfHwgd2luZG93LkRvY3VtZW50VG91Y2ggJiYgZG9jdW1lbnQgaW5zdGFuY2VvZiBEb2N1bWVudFRvdWNoKTtcbiAgICAgICAgICAgIH0pKCksXG4gICAgXG4gICAgICAgICAgICB0cmFuc2Zvcm1zM2QgOiAod2luZG93Lk1vZGVybml6ciAmJiBNb2Rlcm5penIuY3NzdHJhbnNmb3JtczNkID09PSB0cnVlKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKS5zdHlsZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCd3ZWJraXRQZXJzcGVjdGl2ZScgaW4gZGl2IHx8ICdNb3pQZXJzcGVjdGl2ZScgaW4gZGl2IHx8ICdPUGVyc3BlY3RpdmUnIGluIGRpdiB8fCAnTXNQZXJzcGVjdGl2ZScgaW4gZGl2IHx8ICdwZXJzcGVjdGl2ZScgaW4gZGl2KTtcbiAgICAgICAgICAgIH0pKCksXG4gICAgXG4gICAgICAgICAgICBmbGV4Ym94OiAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKS5zdHlsZTtcbiAgICAgICAgICAgICAgICB2YXIgc3R5bGVzID0gKCdhbGlnbkl0ZW1zIHdlYmtpdEFsaWduSXRlbXMgd2Via2l0Qm94QWxpZ24gbXNGbGV4QWxpZ24gbW96Qm94QWxpZ24gd2Via2l0RmxleERpcmVjdGlvbiBtc0ZsZXhEaXJlY3Rpb24gbW96Qm94RGlyZWN0aW9uIG1vekJveE9yaWVudCB3ZWJraXRCb3hEaXJlY3Rpb24gd2Via2l0Qm94T3JpZW50Jykuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVzW2ldIGluIGRpdikgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkoKSxcbiAgICBcbiAgICAgICAgICAgIG9ic2VydmVyOiAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoJ011dGF0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdyB8fCAnV2Via2l0TXV0YXRpb25PYnNlcnZlcicgaW4gd2luZG93KTtcbiAgICAgICAgICAgIH0pKClcbiAgICAgICAgfSxcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICBQbHVnaW5zXG4gICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBwbHVnaW5zOiB7fVxuICAgIH07XG4gICAgXG5cbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIERvbTcgTGlicmFyeVxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgdmFyIERvbTcgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgRG9tNyA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXMsIGkgPSAwO1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGFycmF5LWxpa2Ugb2JqZWN0XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgX3RoaXNbaV0gPSBhcnJbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5sZW5ndGggPSBhcnIubGVuZ3RoO1xuICAgICAgICAgICAgLy8gUmV0dXJuIGNvbGxlY3Rpb24gd2l0aCBtZXRob2RzXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcbiAgICAgICAgdmFyICQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGNvbnRleHQpIHtcbiAgICAgICAgICAgIHZhciBhcnIgPSBbXSwgaSA9IDA7XG4gICAgICAgICAgICBpZiAoc2VsZWN0b3IgJiYgIWNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBEb203KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICAvLyBTdHJpbmdcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxzLCB0ZW1wUGFyZW50LCBodG1sID0gc2VsZWN0b3IudHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaHRtbC5pbmRleE9mKCc8JykgPj0gMCAmJiBodG1sLmluZGV4T2YoJz4nKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG9DcmVhdGUgPSAnZGl2JztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChodG1sLmluZGV4T2YoJzxsaScpID09PSAwKSB0b0NyZWF0ZSA9ICd1bCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaHRtbC5pbmRleE9mKCc8dHInKSA9PT0gMCkgdG9DcmVhdGUgPSAndGJvZHknO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGh0bWwuaW5kZXhPZignPHRkJykgPT09IDAgfHwgaHRtbC5pbmRleE9mKCc8dGgnKSA9PT0gMCkgdG9DcmVhdGUgPSAndHInO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGh0bWwuaW5kZXhPZignPHRib2R5JykgPT09IDApIHRvQ3JlYXRlID0gJ3RhYmxlJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChodG1sLmluZGV4T2YoJzxvcHRpb24nKSA9PT0gMCkgdG9DcmVhdGUgPSAnc2VsZWN0JztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBQYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRvQ3JlYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBQYXJlbnQuaW5uZXJIVE1MID0gc2VsZWN0b3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGVtcFBhcmVudC5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2godGVtcFBhcmVudC5jaGlsZE5vZGVzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29udGV4dCAmJiBzZWxlY3RvclswXSA9PT0gJyMnICYmICFzZWxlY3Rvci5tYXRjaCgvWyAuPD46fl0vKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFB1cmUgSUQgc2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHMgPSBbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3Iuc3BsaXQoJyMnKVsxXSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXIgc2VsZWN0b3JzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzID0gKGNvbnRleHQgfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGVscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbHNbaV0pIGFyci5wdXNoKGVsc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTm9kZS9lbGVtZW50XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc2VsZWN0b3Iubm9kZVR5cGUgfHwgc2VsZWN0b3IgPT09IHdpbmRvdyB8fCBzZWxlY3RvciA9PT0gZG9jdW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL0FycmF5IG9mIGVsZW1lbnRzIG9yIGluc3RhbmNlIG9mIERvbVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlbGVjdG9yLmxlbmd0aCA+IDAgJiYgc2VsZWN0b3JbMF0ubm9kZVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNlbGVjdG9yLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChzZWxlY3RvcltpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IERvbTcoYXJyKTtcbiAgICAgICAgfTtcbiAgICAgICAgRG9tNy5wcm90b3R5cGUgPSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGFuZCBhdHRyaXV0ZXNcbiAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjbGFzc05hbWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgY2xhc3NlcyA9IGNsYXNzTmFtZS5zcGxpdCgnICcpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbal0uY2xhc3NMaXN0LmFkZChjbGFzc2VzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIHZhciBjbGFzc2VzID0gY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tqXS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzZXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhhc0NsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzWzBdKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gdGhpc1swXS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b2dnbGVDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIHZhciBjbGFzc2VzID0gY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tqXS5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzZXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF0dHI6IGZ1bmN0aW9uIChhdHRycywgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgYXR0cnMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCBhdHRyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzWzBdKSByZXR1cm4gdGhpc1swXS5nZXRBdHRyaWJ1dGUoYXR0cnMpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBTZXQgYXR0cnNcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0cmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbaV0uc2V0QXR0cmlidXRlKGF0dHJzLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBhdHRyTmFtZSBpbiBhdHRycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2ldW2F0dHJOYW1lXSA9IGF0dHJzW2F0dHJOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tpXS5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIGF0dHJzW2F0dHJOYW1lXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZW1vdmVBdHRyOiBmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLnJlbW92ZUF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhS2V5ID0gdGhpc1swXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YUtleSkgcmV0dXJuIGRhdGFLZXk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzWzBdLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2UgJiYgKGtleSBpbiB0aGlzWzBdLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2UpKSByZXR1cm4gdGhpc1swXS5kb203RWxlbWVudERhdGFTdG9yYWdlW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsID0gdGhpc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZSkgZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIFRyYW5zZm9ybXNcbiAgICAgICAgICAgIHRyYW5zZm9ybSA6IGZ1bmN0aW9uICh0cmFuc2Zvcm0pIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsU3R5bGUgPSB0aGlzW2ldLnN0eWxlO1xuICAgICAgICAgICAgICAgICAgICBlbFN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IGVsU3R5bGUuTXNUcmFuc2Zvcm0gPSBlbFN0eWxlLm1zVHJhbnNmb3JtID0gZWxTdHlsZS5Nb3pUcmFuc2Zvcm0gPSBlbFN0eWxlLk9UcmFuc2Zvcm0gPSBlbFN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogZnVuY3Rpb24gKGR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkdXJhdGlvbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb24gPSBkdXJhdGlvbiArICdtcyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxTdHlsZSA9IHRoaXNbaV0uc3R5bGU7XG4gICAgICAgICAgICAgICAgICAgIGVsU3R5bGUud2Via2l0VHJhbnNpdGlvbkR1cmF0aW9uID0gZWxTdHlsZS5Nc1RyYW5zaXRpb25EdXJhdGlvbiA9IGVsU3R5bGUubXNUcmFuc2l0aW9uRHVyYXRpb24gPSBlbFN0eWxlLk1velRyYW5zaXRpb25EdXJhdGlvbiA9IGVsU3R5bGUuT1RyYW5zaXRpb25EdXJhdGlvbiA9IGVsU3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vRXZlbnRzXG4gICAgICAgICAgICBvbjogZnVuY3Rpb24gKGV2ZW50TmFtZSwgdGFyZ2V0U2VsZWN0b3IsIGxpc3RlbmVyLCBjYXB0dXJlKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlTGl2ZUV2ZW50KGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICBpZiAoJCh0YXJnZXQpLmlzKHRhcmdldFNlbGVjdG9yKSkgbGlzdGVuZXIuY2FsbCh0YXJnZXQsIGUpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnRzID0gJCh0YXJnZXQpLnBhcmVudHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgcGFyZW50cy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKHBhcmVudHNba10pLmlzKHRhcmdldFNlbGVjdG9yKSkgbGlzdGVuZXIuY2FsbChwYXJlbnRzW2tdLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZXZlbnRzID0gZXZlbnROYW1lLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICAgICAgdmFyIGksIGo7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRTZWxlY3RvciA9PT0gJ2Z1bmN0aW9uJyB8fCB0YXJnZXRTZWxlY3RvciA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVzdWFsIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRTZWxlY3RvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmUgPSBhcmd1bWVudHNbMl0gfHwgZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgZXZlbnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tpXS5hZGRFdmVudExpc3RlbmVyKGV2ZW50c1tqXSwgbGlzdGVuZXIsIGNhcHR1cmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9MaXZlIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGV2ZW50cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpc1tpXS5kb203TGl2ZUxpc3RlbmVycykgdGhpc1tpXS5kb203TGl2ZUxpc3RlbmVycyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbaV0uZG9tN0xpdmVMaXN0ZW5lcnMucHVzaCh7bGlzdGVuZXI6IGxpc3RlbmVyLCBsaXZlTGlzdGVuZXI6IGhhbmRsZUxpdmVFdmVudH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbaV0uYWRkRXZlbnRMaXN0ZW5lcihldmVudHNbal0sIGhhbmRsZUxpdmVFdmVudCwgY2FwdHVyZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb2ZmOiBmdW5jdGlvbiAoZXZlbnROYW1lLCB0YXJnZXRTZWxlY3RvciwgbGlzdGVuZXIsIGNhcHR1cmUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnRzID0gZXZlbnROYW1lLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldFNlbGVjdG9yID09PSAnZnVuY3Rpb24nIHx8IHRhcmdldFNlbGVjdG9yID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVzdWFsIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0U2VsZWN0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIgPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmUgPSBhcmd1bWVudHNbMl0gfHwgZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbal0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudHNbaV0sIGxpc3RlbmVyLCBjYXB0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIExpdmUgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpc1tqXS5kb203TGl2ZUxpc3RlbmVycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXNbal0uZG9tN0xpdmVMaXN0ZW5lcnMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2pdLmRvbTdMaXZlTGlzdGVuZXJzW2tdLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbal0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudHNbaV0sIHRoaXNbal0uZG9tN0xpdmVMaXN0ZW5lcnNba10ubGl2ZUxpc3RlbmVyLCBjYXB0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbmNlOiBmdW5jdGlvbiAoZXZlbnROYW1lLCB0YXJnZXRTZWxlY3RvciwgbGlzdGVuZXIsIGNhcHR1cmUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZG9tID0gdGhpcztcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldFNlbGVjdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFNlbGVjdG9yID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgICAgICAgICBjYXB0dXJlID0gYXJndW1lbnRzWzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBwcm94eShlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyKGUpO1xuICAgICAgICAgICAgICAgICAgICBkb20ub2ZmKGV2ZW50TmFtZSwgdGFyZ2V0U2VsZWN0b3IsIHByb3h5LCBjYXB0dXJlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZG9tLm9uKGV2ZW50TmFtZSwgdGFyZ2V0U2VsZWN0b3IsIHByb3h5LCBjYXB0dXJlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0cmlnZ2VyOiBmdW5jdGlvbiAoZXZlbnROYW1lLCBldmVudERhdGEpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV2dDtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2dCA9IG5ldyB3aW5kb3cuQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCB7ZGV0YWlsOiBldmVudERhdGEsIGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWV9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBldnQuaW5pdEV2ZW50KGV2ZW50TmFtZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBldnQuZGV0YWlsID0gZXZlbnREYXRhO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbaV0uZGlzcGF0Y2hFdmVudChldnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0cmFuc2l0aW9uRW5kOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnRzID0gWyd3ZWJraXRUcmFuc2l0aW9uRW5kJywgJ3RyYW5zaXRpb25lbmQnLCAnb1RyYW5zaXRpb25FbmQnLCAnTVNUcmFuc2l0aW9uRW5kJywgJ21zVHJhbnNpdGlvbkVuZCddLFxuICAgICAgICAgICAgICAgICAgICBpLCBqLCBkb20gPSB0aGlzO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGZpcmVDYWxsQmFjayhlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldCAhPT0gdGhpcykgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMsIGUpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb20ub2ZmKGV2ZW50c1tpXSwgZmlyZUNhbGxCYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tLm9uKGV2ZW50c1tpXSwgZmlyZUNhbGxCYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBTaXppbmcvU3R5bGVzXG4gICAgICAgICAgICB3aWR0aDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzWzBdID09PSB3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodGhpcy5jc3MoJ3dpZHRoJykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3V0ZXJXaWR0aDogZnVuY3Rpb24gKGluY2x1ZGVNYXJnaW5zKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5jbHVkZU1hcmdpbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1swXS5vZmZzZXRXaWR0aCArIHBhcnNlRmxvYXQodGhpcy5jc3MoJ21hcmdpbi1yaWdodCcpKSArIHBhcnNlRmxvYXQodGhpcy5jc3MoJ21hcmdpbi1sZWZ0JykpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1swXS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoZWlnaHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpc1swXSA9PT0gd2luZG93KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh0aGlzLmNzcygnaGVpZ2h0JykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3V0ZXJIZWlnaHQ6IGZ1bmN0aW9uIChpbmNsdWRlTWFyZ2lucykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluY2x1ZGVNYXJnaW5zKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbMF0ub2Zmc2V0SGVpZ2h0ICsgcGFyc2VGbG9hdCh0aGlzLmNzcygnbWFyZ2luLXRvcCcpKSArIHBhcnNlRmxvYXQodGhpcy5jc3MoJ21hcmdpbi1ib3R0b20nKSk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzWzBdLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvZmZzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbCA9IHRoaXNbMF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBib3ggPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2xpZW50VG9wICA9IGVsLmNsaWVudFRvcCAgfHwgYm9keS5jbGllbnRUb3AgIHx8IDA7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjbGllbnRMZWZ0ID0gZWwuY2xpZW50TGVmdCB8fCBib2R5LmNsaWVudExlZnQgfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNjcm9sbFRvcCAgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZWwuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBlbC5zY3JvbGxMZWZ0O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBib3gudG9wICArIHNjcm9sbFRvcCAgLSBjbGllbnRUb3AsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBib3gubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3NzOiBmdW5jdGlvbiAocHJvcHMsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9wcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzWzBdKSByZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpc1swXSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShwcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tpXS5zdHlsZVtwcm9wXSA9IHByb3BzW3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyICYmIHR5cGVvZiBwcm9wcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbaV0uc3R5bGVbcHJvcHNdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSxcbiAgICBcbiAgICAgICAgICAgIC8vRG9tIG1hbmlwdWxhdGlvblxuICAgICAgICAgICAgZWFjaDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc1tpXSwgaSwgdGhpc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGh0bWw6IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBodG1sID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1swXSA/IHRoaXNbMF0uaW5uZXJIVE1MIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRleHQ6IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0ZXh0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpc1swXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbMF0udGV4dENvbnRlbnQudHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbaV0udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpczogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzWzBdKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgdmFyIGNvbXBhcmVXaXRoLCBpO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbCA9IHRoaXNbMF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbCA9PT0gZG9jdW1lbnQpIHJldHVybiBzZWxlY3RvciA9PT0gZG9jdW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbCA9PT0gd2luZG93KSByZXR1cm4gc2VsZWN0b3IgPT09IHdpbmRvdztcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsLm1hdGNoZXMpIHJldHVybiBlbC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZWwud2Via2l0TWF0Y2hlc1NlbGVjdG9yKSByZXR1cm4gZWwud2Via2l0TWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZWwubW96TWF0Y2hlc1NlbGVjdG9yKSByZXR1cm4gZWwubW96TWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZWwubXNNYXRjaGVzU2VsZWN0b3IpIHJldHVybiBlbC5tc01hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFyZVdpdGggPSAkKHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb21wYXJlV2l0aC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wYXJlV2l0aFtpXSA9PT0gdGhpc1swXSkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc2VsZWN0b3IgPT09IGRvY3VtZW50KSByZXR1cm4gdGhpc1swXSA9PT0gZG9jdW1lbnQ7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc2VsZWN0b3IgPT09IHdpbmRvdykgcmV0dXJuIHRoaXNbMF0gPT09IHdpbmRvdztcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdG9yLm5vZGVUeXBlIHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgRG9tNykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFyZVdpdGggPSBzZWxlY3Rvci5ub2RlVHlwZSA/IFtzZWxlY3Rvcl0gOiBzZWxlY3RvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb21wYXJlV2l0aC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wYXJlV2l0aFtpXSA9PT0gdGhpc1swXSkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmRleDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IHRoaXNbMF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKChjaGlsZCA9IGNoaWxkLnByZXZpb3VzU2libGluZykgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PT0gMSkgaSsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXE6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaW5kZXggPT09ICd1bmRlZmluZWQnKSByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdmFyIHJldHVybkluZGV4O1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IGxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEb203KFtdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5JbmRleCA9IGxlbmd0aCArIGluZGV4O1xuICAgICAgICAgICAgICAgICAgICBpZiAocmV0dXJuSW5kZXggPCAwKSByZXR1cm4gbmV3IERvbTcoW10pO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBuZXcgRG9tNyhbdGhpc1tyZXR1cm5JbmRleF1dKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEb203KFt0aGlzW2luZGV4XV0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFwcGVuZDogZnVuY3Rpb24gKG5ld0NoaWxkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGksIGo7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBuZXdDaGlsZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wRGl2LmlubmVySFRNTCA9IG5ld0NoaWxkO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHRlbXBEaXYuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbaV0uYXBwZW5kQ2hpbGQodGVtcERpdi5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChuZXdDaGlsZCBpbnN0YW5jZW9mIERvbTcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBuZXdDaGlsZC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbaV0uYXBwZW5kQ2hpbGQobmV3Q2hpbGRbal0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tpXS5hcHBlbmRDaGlsZChuZXdDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJlcGVuZDogZnVuY3Rpb24gKG5ld0NoaWxkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGksIGo7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBuZXdDaGlsZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wRGl2LmlubmVySFRNTCA9IG5ld0NoaWxkO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gdGVtcERpdi5jaGlsZE5vZGVzLmxlbmd0aCAtIDE7IGogPj0gMDsgai0tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tpXS5pbnNlcnRCZWZvcmUodGVtcERpdi5jaGlsZE5vZGVzW2pdLCB0aGlzW2ldLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpc1tpXS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBuZXdDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobmV3Q2hpbGQgaW5zdGFuY2VvZiBEb203KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbmV3Q2hpbGQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLmluc2VydEJlZm9yZShuZXdDaGlsZFtqXSwgdGhpc1tpXS5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbaV0uaW5zZXJ0QmVmb3JlKG5ld0NoaWxkLCB0aGlzW2ldLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluc2VydEJlZm9yZTogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJlZm9yZSA9ICQoc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmVmb3JlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVmb3JlWzBdLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXNbaV0sIGJlZm9yZVswXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYmVmb3JlLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYmVmb3JlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVmb3JlW2pdLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXNbaV0uY2xvbmVOb2RlKHRydWUpLCBiZWZvcmVbal0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluc2VydEFmdGVyOiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICB2YXIgYWZ0ZXIgPSAkKHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFmdGVyLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXJbMF0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpc1tpXSwgYWZ0ZXJbMF0ubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFmdGVyLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYWZ0ZXIubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZnRlcltqXS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzW2ldLmNsb25lTm9kZSh0cnVlKSwgYWZ0ZXJbal0ubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmcgJiYgJCh0aGlzWzBdLm5leHRFbGVtZW50U2libGluZykuaXMoc2VsZWN0b3IpKSByZXR1cm4gbmV3IERvbTcoW3RoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBuZXcgRG9tNyhbXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmcpIHJldHVybiBuZXcgRG9tNyhbdGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmddKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIG5ldyBEb203KFtdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBuZXcgRG9tNyhbXSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmV4dEFsbDogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5leHRFbHMgPSBbXTtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSB0aGlzWzBdO1xuICAgICAgICAgICAgICAgIGlmICghZWwpIHJldHVybiBuZXcgRG9tNyhbXSk7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGVsLm5leHRFbGVtZW50U2libGluZykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV4dCA9IGVsLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZigkKG5leHQpLmlzKHNlbGVjdG9yKSkgbmV4dEVscy5wdXNoKG5leHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgbmV4dEVscy5wdXNoKG5leHQpO1xuICAgICAgICAgICAgICAgICAgICBlbCA9IG5leHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRG9tNyhuZXh0RWxzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmV2OiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbMF0ucHJldmlvdXNFbGVtZW50U2libGluZyAmJiAkKHRoaXNbMF0ucHJldmlvdXNFbGVtZW50U2libGluZykuaXMoc2VsZWN0b3IpKSByZXR1cm4gbmV3IERvbTcoW3RoaXNbMF0ucHJldmlvdXNFbGVtZW50U2libGluZ10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gbmV3IERvbTcoW10pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbMF0ucHJldmlvdXNFbGVtZW50U2libGluZykgcmV0dXJuIG5ldyBEb203KFt0aGlzWzBdLnByZXZpb3VzRWxlbWVudFNpYmxpbmddKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIG5ldyBEb203KFtdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBuZXcgRG9tNyhbXSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJldkFsbDogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByZXZFbHMgPSBbXTtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSB0aGlzWzBdO1xuICAgICAgICAgICAgICAgIGlmICghZWwpIHJldHVybiBuZXcgRG9tNyhbXSk7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXYgPSBlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCQocHJldikuaXMoc2VsZWN0b3IpKSBwcmV2RWxzLnB1c2gocHJldik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBwcmV2RWxzLnB1c2gocHJldik7XG4gICAgICAgICAgICAgICAgICAgIGVsID0gcHJldjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEb203KHByZXZFbHMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhcmVudDogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudHMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzW2ldLnBhcmVudE5vZGUpLmlzKHNlbGVjdG9yKSkgcGFyZW50cy5wdXNoKHRoaXNbaV0ucGFyZW50Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLnB1c2godGhpc1tpXS5wYXJlbnROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gJCgkLnVuaXF1ZShwYXJlbnRzKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFyZW50czogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudHMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IHRoaXNbaV0ucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQocGFyZW50KS5pcyhzZWxlY3RvcikpIHBhcmVudHMucHVzaChwYXJlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5wdXNoKHBhcmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gJCgkLnVuaXF1ZShwYXJlbnRzKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmluZCA6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIHZhciBmb3VuZEVsZW1lbnRzID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmb3VuZCA9IHRoaXNbaV0ucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZm91bmQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kRWxlbWVudHMucHVzaChmb3VuZFtqXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEb203KGZvdW5kRWxlbWVudHMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkTm9kZXMgPSB0aGlzW2ldLmNoaWxkTm9kZXM7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY2hpbGROb2Rlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZE5vZGVzW2pdLm5vZGVUeXBlID09PSAxKSBjaGlsZHJlbi5wdXNoKGNoaWxkTm9kZXNbal0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkTm9kZXNbal0ubm9kZVR5cGUgPT09IDEgJiYgJChjaGlsZE5vZGVzW2pdKS5pcyhzZWxlY3RvcikpIGNoaWxkcmVuLnB1c2goY2hpbGROb2Rlc1tqXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEb203KCQudW5pcXVlKGNoaWxkcmVuKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2ldLnBhcmVudE5vZGUpIHRoaXNbaV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWRkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRvbSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdmFyIGksIGo7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG9BZGQgPSAkKGFyZ3VtZW50c1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCB0b0FkZC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tW2RvbS5sZW5ndGhdID0gdG9BZGRbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBkb20ubGVuZ3RoKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgJC5mbiA9IERvbTcucHJvdG90eXBlO1xuICAgICAgICAkLnVuaXF1ZSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgICAgICAgICAgIHZhciB1bmlxdWUgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHVuaXF1ZS5pbmRleE9mKGFycltpXSkgPT09IC0xKSB1bmlxdWUucHVzaChhcnJbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHVuaXF1ZTtcbiAgICAgICAgfTtcbiAgICBcbiAgICAgICAgcmV0dXJuICQ7XG4gICAgfSkoKTtcbiAgICBcblxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgIEdldCBEb20gbGlicmFyaWVzXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgdmFyIHN3aXBlckRvbVBsdWdpbnMgPSBbJ2pRdWVyeScsICdaZXB0bycsICdEb203J107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzd2lwZXJEb21QbHVnaW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgXHRpZiAod2luZG93W3N3aXBlckRvbVBsdWdpbnNbaV1dKSB7XG4gICAgXHRcdGFkZExpYnJhcnlQbHVnaW4od2luZG93W3N3aXBlckRvbVBsdWdpbnNbaV1dKTtcbiAgICBcdH1cbiAgICB9XG4gICAgLy8gUmVxdWlyZWQgRE9NIFBsdWdpbnNcbiAgICB2YXIgZG9tTGliO1xuICAgIGlmICh0eXBlb2YgRG9tNyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBcdGRvbUxpYiA9IHdpbmRvdy5Eb203IHx8IHdpbmRvdy5aZXB0byB8fCB3aW5kb3cualF1ZXJ5O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICBcdGRvbUxpYiA9IERvbTc7XG4gICAgfVxuXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBBZGQgLnN3aXBlciBwbHVnaW4gZnJvbSBEb20gbGlicmFyaWVzXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICBmdW5jdGlvbiBhZGRMaWJyYXJ5UGx1Z2luKGxpYikge1xuICAgICAgICBsaWIuZm4uc3dpcGVyID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICAgICAgdmFyIGZpcnN0SW5zdGFuY2U7XG4gICAgICAgICAgICBsaWIodGhpcykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHMgPSBuZXcgU3dpcGVyKHRoaXMsIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgaWYgKCFmaXJzdEluc3RhbmNlKSBmaXJzdEluc3RhbmNlID0gcztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGZpcnN0SW5zdGFuY2U7XG4gICAgICAgIH07XG4gICAgfVxuICAgIFxuICAgIGlmIChkb21MaWIpIHtcbiAgICAgICAgaWYgKCEoJ3RyYW5zaXRpb25FbmQnIGluIGRvbUxpYi5mbikpIHtcbiAgICAgICAgICAgIGRvbUxpYi5mbi50cmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50cyA9IFsnd2Via2l0VHJhbnNpdGlvbkVuZCcsICd0cmFuc2l0aW9uZW5kJywgJ29UcmFuc2l0aW9uRW5kJywgJ01TVHJhbnNpdGlvbkVuZCcsICdtc1RyYW5zaXRpb25FbmQnXSxcbiAgICAgICAgICAgICAgICAgICAgaSwgaiwgZG9tID0gdGhpcztcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBmaXJlQ2FsbEJhY2soZSkge1xuICAgICAgICAgICAgICAgICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQgIT09IHRoaXMpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tLm9mZihldmVudHNbaV0sIGZpcmVDYWxsQmFjayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbS5vbihldmVudHNbaV0sIGZpcmVDYWxsQmFjayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICghKCd0cmFuc2Zvcm0nIGluIGRvbUxpYi5mbikpIHtcbiAgICAgICAgICAgIGRvbUxpYi5mbi50cmFuc2Zvcm0gPSBmdW5jdGlvbiAodHJhbnNmb3JtKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbFN0eWxlID0gdGhpc1tpXS5zdHlsZTtcbiAgICAgICAgICAgICAgICAgICAgZWxTdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSBlbFN0eWxlLk1zVHJhbnNmb3JtID0gZWxTdHlsZS5tc1RyYW5zZm9ybSA9IGVsU3R5bGUuTW96VHJhbnNmb3JtID0gZWxTdHlsZS5PVHJhbnNmb3JtID0gZWxTdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoISgndHJhbnNpdGlvbicgaW4gZG9tTGliLmZuKSkge1xuICAgICAgICAgICAgZG9tTGliLmZuLnRyYW5zaXRpb24gPSBmdW5jdGlvbiAoZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGR1cmF0aW9uICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IGR1cmF0aW9uICsgJ21zJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbFN0eWxlID0gdGhpc1tpXS5zdHlsZTtcbiAgICAgICAgICAgICAgICAgICAgZWxTdHlsZS53ZWJraXRUcmFuc2l0aW9uRHVyYXRpb24gPSBlbFN0eWxlLk1zVHJhbnNpdGlvbkR1cmF0aW9uID0gZWxTdHlsZS5tc1RyYW5zaXRpb25EdXJhdGlvbiA9IGVsU3R5bGUuTW96VHJhbnNpdGlvbkR1cmF0aW9uID0gZWxTdHlsZS5PVHJhbnNpdGlvbkR1cmF0aW9uID0gZWxTdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgd2luZG93LlN3aXBlciA9IFN3aXBlcjtcbn0pKCk7XG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PVxuU3dpcGVyIEFNRCBFeHBvcnRcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5pZiAodHlwZW9mKG1vZHVsZSkgIT09ICd1bmRlZmluZWQnKVxue1xuICAgIG1vZHVsZS5leHBvcnRzID0gd2luZG93LlN3aXBlcjtcbn1cbmVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG4gICAgICAgIHJldHVybiB3aW5kb3cuU3dpcGVyO1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFwcy9zd2lwZXIuanMubWFwXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zd2lwZXIvZGlzdC9qcy9zd2lwZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBQT1JURk9MSU9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG52YXIgaW1hZ2VzbG9hZCA9IHJlcXVpcmUoICdpbWFnZXNsb2FkZWQnICk7XG52YXIgSXNvdG9wZSA9IHJlcXVpcmUoICdpc290b3BlLWxheW91dCcgKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgZnVuY3Rpb24gKCkge1xuXG4gICAgLy8gUE9SVEZPTElPIFZBUklBQkxFU1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHZhciBwb3J0Zm9saW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnBvcnRmb2xpb19fZ3JpZCcgKTtcbiAgICB2YXIgcG9ydGZvbGlvSXRlbSA9ICcucG9ydGZvbGlvX19pdGVtJztcbiAgICB2YXIgcG9ydGZvbGlvU2l6ZXIgPSAnLnBvcnRmb2xpb19fc2l6ZXInO1xuICAgIHZhciBwb3J0Zm9saW9Db250cm9sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5wb3J0Zm9saW9fX2NvbnRyb2xzJyApO1xuICAgIHZhciBpc287XG5cbiAgICAvLyBQT1JURk9MSU8gTEFZT1VUXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBpbWFnZXNsb2FkKCBwb3J0Zm9saW8sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaXNvID0gbmV3IElzb3RvcGUoIHBvcnRmb2xpbywge1xuICAgICAgICAgICAgaXRlbVNlbGVjdG9yOiBwb3J0Zm9saW9JdGVtLFxuICAgICAgICAgICAgcGVyY2VudFBvc2l0aW9uOiB0cnVlLFxuICAgICAgICAgICAgbWFzb25yeToge1xuICAgICAgICAgICAgICAgIGNvbHVtbldpZHRoOiBwb3J0Zm9saW9TaXplclxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIFBPUlRGT0xJTyBGSUxURVJJTkdcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIHBvcnRmb2xpb0NvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgZnVuY3Rpb24gKCBldmVudCApIHtcbiAgICAgICAgaXNvLmFycmFuZ2UoeyBmaWx0ZXI6IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoICdkYXRhLWZpbHRlcicgKSB9KTtcbiAgICB9KTtcbn0sIGZhbHNlICk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbWFya3VwL2NvbXBvbmVudHMvYmxvY2stcG9ydGZvbGlvL2Jsb2NrLXBvcnRmb2xpby5qc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qIVxuICogaW1hZ2VzTG9hZGVkIHY0LjEuMFxuICogSmF2YVNjcmlwdCBpcyBhbGwgbGlrZSBcIllvdSBpbWFnZXMgYXJlIGRvbmUgeWV0IG9yIHdoYXQ/XCJcbiAqIE1JVCBMaWNlbnNlXG4gKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkgeyAndXNlIHN0cmljdCc7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuXG4gIC8qZ2xvYmFsIGRlZmluZTogZmFsc2UsIG1vZHVsZTogZmFsc2UsIHJlcXVpcmU6IGZhbHNlICovXG5cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIFtcbiAgICAgICdldi1lbWl0dGVyL2V2LWVtaXR0ZXInXG4gICAgXSwgZnVuY3Rpb24oIEV2RW1pdHRlciApIHtcbiAgICAgIHJldHVybiBmYWN0b3J5KCB3aW5kb3csIEV2RW1pdHRlciApO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgcmVxdWlyZSgnZXYtZW1pdHRlcicpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5pbWFnZXNMb2FkZWQgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgd2luZG93LkV2RW1pdHRlclxuICAgICk7XG4gIH1cblxufSkoIHdpbmRvdyxcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIGZhY3RvcnkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBFdkVtaXR0ZXIgKSB7XG5cbid1c2Ugc3RyaWN0JztcblxudmFyICQgPSB3aW5kb3cualF1ZXJ5O1xudmFyIGNvbnNvbGUgPSB3aW5kb3cuY29uc29sZTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaGVscGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBleHRlbmQgb2JqZWN0c1xuZnVuY3Rpb24gZXh0ZW5kKCBhLCBiICkge1xuICBmb3IgKCB2YXIgcHJvcCBpbiBiICkge1xuICAgIGFbIHByb3AgXSA9IGJbIHByb3AgXTtcbiAgfVxuICByZXR1cm4gYTtcbn1cblxuLy8gdHVybiBlbGVtZW50IG9yIG5vZGVMaXN0IGludG8gYW4gYXJyYXlcbmZ1bmN0aW9uIG1ha2VBcnJheSggb2JqICkge1xuICB2YXIgYXJ5ID0gW107XG4gIGlmICggQXJyYXkuaXNBcnJheSggb2JqICkgKSB7XG4gICAgLy8gdXNlIG9iamVjdCBpZiBhbHJlYWR5IGFuIGFycmF5XG4gICAgYXJ5ID0gb2JqO1xuICB9IGVsc2UgaWYgKCB0eXBlb2Ygb2JqLmxlbmd0aCA9PSAnbnVtYmVyJyApIHtcbiAgICAvLyBjb252ZXJ0IG5vZGVMaXN0IHRvIGFycmF5XG4gICAgZm9yICggdmFyIGk9MDsgaSA8IG9iai5sZW5ndGg7IGkrKyApIHtcbiAgICAgIGFyeS5wdXNoKCBvYmpbaV0gKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gYXJyYXkgb2Ygc2luZ2xlIGluZGV4XG4gICAgYXJ5LnB1c2goIG9iaiApO1xuICB9XG4gIHJldHVybiBhcnk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGltYWdlc0xvYWRlZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXksIEVsZW1lbnQsIE5vZGVMaXN0LCBTdHJpbmd9IGVsZW1cbiAqIEBwYXJhbSB7T2JqZWN0IG9yIEZ1bmN0aW9ufSBvcHRpb25zIC0gaWYgZnVuY3Rpb24sIHVzZSBhcyBjYWxsYmFja1xuICogQHBhcmFtIHtGdW5jdGlvbn0gb25BbHdheXMgLSBjYWxsYmFjayBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBJbWFnZXNMb2FkZWQoIGVsZW0sIG9wdGlvbnMsIG9uQWx3YXlzICkge1xuICAvLyBjb2VyY2UgSW1hZ2VzTG9hZGVkKCkgd2l0aG91dCBuZXcsIHRvIGJlIG5ldyBJbWFnZXNMb2FkZWQoKVxuICBpZiAoICEoIHRoaXMgaW5zdGFuY2VvZiBJbWFnZXNMb2FkZWQgKSApIHtcbiAgICByZXR1cm4gbmV3IEltYWdlc0xvYWRlZCggZWxlbSwgb3B0aW9ucywgb25BbHdheXMgKTtcbiAgfVxuICAvLyB1c2UgZWxlbSBhcyBzZWxlY3RvciBzdHJpbmdcbiAgaWYgKCB0eXBlb2YgZWxlbSA9PSAnc3RyaW5nJyApIHtcbiAgICBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggZWxlbSApO1xuICB9XG5cbiAgdGhpcy5lbGVtZW50cyA9IG1ha2VBcnJheSggZWxlbSApO1xuICB0aGlzLm9wdGlvbnMgPSBleHRlbmQoIHt9LCB0aGlzLm9wdGlvbnMgKTtcblxuICBpZiAoIHR5cGVvZiBvcHRpb25zID09ICdmdW5jdGlvbicgKSB7XG4gICAgb25BbHdheXMgPSBvcHRpb25zO1xuICB9IGVsc2Uge1xuICAgIGV4dGVuZCggdGhpcy5vcHRpb25zLCBvcHRpb25zICk7XG4gIH1cblxuICBpZiAoIG9uQWx3YXlzICkge1xuICAgIHRoaXMub24oICdhbHdheXMnLCBvbkFsd2F5cyApO1xuICB9XG5cbiAgdGhpcy5nZXRJbWFnZXMoKTtcblxuICBpZiAoICQgKSB7XG4gICAgLy8gYWRkIGpRdWVyeSBEZWZlcnJlZCBvYmplY3RcbiAgICB0aGlzLmpxRGVmZXJyZWQgPSBuZXcgJC5EZWZlcnJlZCgpO1xuICB9XG5cbiAgLy8gSEFDSyBjaGVjayBhc3luYyB0byBhbGxvdyB0aW1lIHRvIGJpbmQgbGlzdGVuZXJzXG4gIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuY2hlY2soKTtcbiAgfS5iaW5kKCB0aGlzICkpO1xufVxuXG5JbWFnZXNMb2FkZWQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRXZFbWl0dGVyLnByb3RvdHlwZSApO1xuXG5JbWFnZXNMb2FkZWQucHJvdG90eXBlLm9wdGlvbnMgPSB7fTtcblxuSW1hZ2VzTG9hZGVkLnByb3RvdHlwZS5nZXRJbWFnZXMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5pbWFnZXMgPSBbXTtcblxuICAvLyBmaWx0ZXIgJiBmaW5kIGl0ZW1zIGlmIHdlIGhhdmUgYW4gaXRlbSBzZWxlY3RvclxuICB0aGlzLmVsZW1lbnRzLmZvckVhY2goIHRoaXMuYWRkRWxlbWVudEltYWdlcywgdGhpcyApO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge05vZGV9IGVsZW1lbnRcbiAqL1xuSW1hZ2VzTG9hZGVkLnByb3RvdHlwZS5hZGRFbGVtZW50SW1hZ2VzID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIC8vIGZpbHRlciBzaWJsaW5nc1xuICBpZiAoIGVsZW0ubm9kZU5hbWUgPT0gJ0lNRycgKSB7XG4gICAgdGhpcy5hZGRJbWFnZSggZWxlbSApO1xuICB9XG4gIC8vIGdldCBiYWNrZ3JvdW5kIGltYWdlIG9uIGVsZW1lbnRcbiAgaWYgKCB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZCA9PT0gdHJ1ZSApIHtcbiAgICB0aGlzLmFkZEVsZW1lbnRCYWNrZ3JvdW5kSW1hZ2VzKCBlbGVtICk7XG4gIH1cblxuICAvLyBmaW5kIGNoaWxkcmVuXG4gIC8vIG5vIG5vbi1lbGVtZW50IG5vZGVzLCAjMTQzXG4gIHZhciBub2RlVHlwZSA9IGVsZW0ubm9kZVR5cGU7XG4gIGlmICggIW5vZGVUeXBlIHx8ICFlbGVtZW50Tm9kZVR5cGVzWyBub2RlVHlwZSBdICkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgY2hpbGRJbWdzID0gZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKTtcbiAgLy8gY29uY2F0IGNoaWxkRWxlbXMgdG8gZmlsdGVyRm91bmQgYXJyYXlcbiAgZm9yICggdmFyIGk9MDsgaSA8IGNoaWxkSW1ncy5sZW5ndGg7IGkrKyApIHtcbiAgICB2YXIgaW1nID0gY2hpbGRJbWdzW2ldO1xuICAgIHRoaXMuYWRkSW1hZ2UoIGltZyApO1xuICB9XG5cbiAgLy8gZ2V0IGNoaWxkIGJhY2tncm91bmQgaW1hZ2VzXG4gIGlmICggdHlwZW9mIHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kID09ICdzdHJpbmcnICkge1xuICAgIHZhciBjaGlsZHJlbiA9IGVsZW0ucXVlcnlTZWxlY3RvckFsbCggdGhpcy5vcHRpb25zLmJhY2tncm91bmQgKTtcbiAgICBmb3IgKCBpPTA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKyApIHtcbiAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgdGhpcy5hZGRFbGVtZW50QmFja2dyb3VuZEltYWdlcyggY2hpbGQgKTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBlbGVtZW50Tm9kZVR5cGVzID0ge1xuICAxOiB0cnVlLFxuICA5OiB0cnVlLFxuICAxMTogdHJ1ZVxufTtcblxuSW1hZ2VzTG9hZGVkLnByb3RvdHlwZS5hZGRFbGVtZW50QmFja2dyb3VuZEltYWdlcyA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICB2YXIgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKCBlbGVtICk7XG4gIGlmICggIXN0eWxlICkge1xuICAgIC8vIEZpcmVmb3ggcmV0dXJucyBudWxsIGlmIGluIGEgaGlkZGVuIGlmcmFtZSBodHRwczovL2J1Z3ppbC5sYS81NDgzOTdcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gZ2V0IHVybCBpbnNpZGUgdXJsKFwiLi4uXCIpXG4gIHZhciByZVVSTCA9IC91cmxcXCgoWydcIl0pPyguKj8pXFwxXFwpL2dpO1xuICB2YXIgbWF0Y2hlcyA9IHJlVVJMLmV4ZWMoIHN0eWxlLmJhY2tncm91bmRJbWFnZSApO1xuICB3aGlsZSAoIG1hdGNoZXMgIT09IG51bGwgKSB7XG4gICAgdmFyIHVybCA9IG1hdGNoZXMgJiYgbWF0Y2hlc1syXTtcbiAgICBpZiAoIHVybCApIHtcbiAgICAgIHRoaXMuYWRkQmFja2dyb3VuZCggdXJsLCBlbGVtICk7XG4gICAgfVxuICAgIG1hdGNoZXMgPSByZVVSTC5leGVjKCBzdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge0ltYWdlfSBpbWdcbiAqL1xuSW1hZ2VzTG9hZGVkLnByb3RvdHlwZS5hZGRJbWFnZSA9IGZ1bmN0aW9uKCBpbWcgKSB7XG4gIHZhciBsb2FkaW5nSW1hZ2UgPSBuZXcgTG9hZGluZ0ltYWdlKCBpbWcgKTtcbiAgdGhpcy5pbWFnZXMucHVzaCggbG9hZGluZ0ltYWdlICk7XG59O1xuXG5JbWFnZXNMb2FkZWQucHJvdG90eXBlLmFkZEJhY2tncm91bmQgPSBmdW5jdGlvbiggdXJsLCBlbGVtICkge1xuICB2YXIgYmFja2dyb3VuZCA9IG5ldyBCYWNrZ3JvdW5kKCB1cmwsIGVsZW0gKTtcbiAgdGhpcy5pbWFnZXMucHVzaCggYmFja2dyb3VuZCApO1xufTtcblxuSW1hZ2VzTG9hZGVkLnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuICB0aGlzLnByb2dyZXNzZWRDb3VudCA9IDA7XG4gIHRoaXMuaGFzQW55QnJva2VuID0gZmFsc2U7XG4gIC8vIGNvbXBsZXRlIGlmIG5vIGltYWdlc1xuICBpZiAoICF0aGlzLmltYWdlcy5sZW5ndGggKSB7XG4gICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUHJvZ3Jlc3MoIGltYWdlLCBlbGVtLCBtZXNzYWdlICkge1xuICAgIC8vIEhBQ0sgLSBDaHJvbWUgdHJpZ2dlcnMgZXZlbnQgYmVmb3JlIG9iamVjdCBwcm9wZXJ0aWVzIGhhdmUgY2hhbmdlZC4gIzgzXG4gICAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICBfdGhpcy5wcm9ncmVzcyggaW1hZ2UsIGVsZW0sIG1lc3NhZ2UgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHRoaXMuaW1hZ2VzLmZvckVhY2goIGZ1bmN0aW9uKCBsb2FkaW5nSW1hZ2UgKSB7XG4gICAgbG9hZGluZ0ltYWdlLm9uY2UoICdwcm9ncmVzcycsIG9uUHJvZ3Jlc3MgKTtcbiAgICBsb2FkaW5nSW1hZ2UuY2hlY2soKTtcbiAgfSk7XG59O1xuXG5JbWFnZXNMb2FkZWQucHJvdG90eXBlLnByb2dyZXNzID0gZnVuY3Rpb24oIGltYWdlLCBlbGVtLCBtZXNzYWdlICkge1xuICB0aGlzLnByb2dyZXNzZWRDb3VudCsrO1xuICB0aGlzLmhhc0FueUJyb2tlbiA9IHRoaXMuaGFzQW55QnJva2VuIHx8ICFpbWFnZS5pc0xvYWRlZDtcbiAgLy8gcHJvZ3Jlc3MgZXZlbnRcbiAgdGhpcy5lbWl0RXZlbnQoICdwcm9ncmVzcycsIFsgdGhpcywgaW1hZ2UsIGVsZW0gXSApO1xuICBpZiAoIHRoaXMuanFEZWZlcnJlZCAmJiB0aGlzLmpxRGVmZXJyZWQubm90aWZ5ICkge1xuICAgIHRoaXMuanFEZWZlcnJlZC5ub3RpZnkoIHRoaXMsIGltYWdlICk7XG4gIH1cbiAgLy8gY2hlY2sgaWYgY29tcGxldGVkXG4gIGlmICggdGhpcy5wcm9ncmVzc2VkQ291bnQgPT0gdGhpcy5pbWFnZXMubGVuZ3RoICkge1xuICAgIHRoaXMuY29tcGxldGUoKTtcbiAgfVxuXG4gIGlmICggdGhpcy5vcHRpb25zLmRlYnVnICYmIGNvbnNvbGUgKSB7XG4gICAgY29uc29sZS5sb2coICdwcm9ncmVzczogJyArIG1lc3NhZ2UsIGltYWdlLCBlbGVtICk7XG4gIH1cbn07XG5cbkltYWdlc0xvYWRlZC5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGV2ZW50TmFtZSA9IHRoaXMuaGFzQW55QnJva2VuID8gJ2ZhaWwnIDogJ2RvbmUnO1xuICB0aGlzLmlzQ29tcGxldGUgPSB0cnVlO1xuICB0aGlzLmVtaXRFdmVudCggZXZlbnROYW1lLCBbIHRoaXMgXSApO1xuICB0aGlzLmVtaXRFdmVudCggJ2Fsd2F5cycsIFsgdGhpcyBdICk7XG4gIGlmICggdGhpcy5qcURlZmVycmVkICkge1xuICAgIHZhciBqcU1ldGhvZCA9IHRoaXMuaGFzQW55QnJva2VuID8gJ3JlamVjdCcgOiAncmVzb2x2ZSc7XG4gICAgdGhpcy5qcURlZmVycmVkWyBqcU1ldGhvZCBdKCB0aGlzICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5mdW5jdGlvbiBMb2FkaW5nSW1hZ2UoIGltZyApIHtcbiAgdGhpcy5pbWcgPSBpbWc7XG59XG5cbkxvYWRpbmdJbWFnZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBFdkVtaXR0ZXIucHJvdG90eXBlICk7XG5cbkxvYWRpbmdJbWFnZS5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbigpIHtcbiAgLy8gSWYgY29tcGxldGUgaXMgdHJ1ZSBhbmQgYnJvd3NlciBzdXBwb3J0cyBuYXR1cmFsIHNpemVzLFxuICAvLyB0cnkgdG8gY2hlY2sgZm9yIGltYWdlIHN0YXR1cyBtYW51YWxseS5cbiAgdmFyIGlzQ29tcGxldGUgPSB0aGlzLmdldElzSW1hZ2VDb21wbGV0ZSgpO1xuICBpZiAoIGlzQ29tcGxldGUgKSB7XG4gICAgLy8gcmVwb3J0IGJhc2VkIG9uIG5hdHVyYWxXaWR0aFxuICAgIHRoaXMuY29uZmlybSggdGhpcy5pbWcubmF0dXJhbFdpZHRoICE9PSAwLCAnbmF0dXJhbFdpZHRoJyApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIElmIG5vbmUgb2YgdGhlIGNoZWNrcyBhYm92ZSBtYXRjaGVkLCBzaW11bGF0ZSBsb2FkaW5nIG9uIGRldGFjaGVkIGVsZW1lbnQuXG4gIHRoaXMucHJveHlJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICB0aGlzLnByb3h5SW1hZ2UuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCB0aGlzICk7XG4gIHRoaXMucHJveHlJbWFnZS5hZGRFdmVudExpc3RlbmVyKCAnZXJyb3InLCB0aGlzICk7XG4gIC8vIGJpbmQgdG8gaW1hZ2UgYXMgd2VsbCBmb3IgRmlyZWZveC4gIzE5MVxuICB0aGlzLmltZy5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIHRoaXMgKTtcbiAgdGhpcy5pbWcuYWRkRXZlbnRMaXN0ZW5lciggJ2Vycm9yJywgdGhpcyApO1xuICB0aGlzLnByb3h5SW1hZ2Uuc3JjID0gdGhpcy5pbWcuc3JjO1xufTtcblxuTG9hZGluZ0ltYWdlLnByb3RvdHlwZS5nZXRJc0ltYWdlQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuaW1nLmNvbXBsZXRlICYmIHRoaXMuaW1nLm5hdHVyYWxXaWR0aCAhPT0gdW5kZWZpbmVkO1xufTtcblxuTG9hZGluZ0ltYWdlLnByb3RvdHlwZS5jb25maXJtID0gZnVuY3Rpb24oIGlzTG9hZGVkLCBtZXNzYWdlICkge1xuICB0aGlzLmlzTG9hZGVkID0gaXNMb2FkZWQ7XG4gIHRoaXMuZW1pdEV2ZW50KCAncHJvZ3Jlc3MnLCBbIHRoaXMsIHRoaXMuaW1nLCBtZXNzYWdlIF0gKTtcbn07XG5cbi8vIC0tLS0tIGV2ZW50cyAtLS0tLSAvL1xuXG4vLyB0cmlnZ2VyIHNwZWNpZmllZCBoYW5kbGVyIGZvciBldmVudCB0eXBlXG5Mb2FkaW5nSW1hZ2UucHJvdG90eXBlLmhhbmRsZUV2ZW50ID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICB2YXIgbWV0aG9kID0gJ29uJyArIGV2ZW50LnR5cGU7XG4gIGlmICggdGhpc1sgbWV0aG9kIF0gKSB7XG4gICAgdGhpc1sgbWV0aG9kIF0oIGV2ZW50ICk7XG4gIH1cbn07XG5cbkxvYWRpbmdJbWFnZS5wcm90b3R5cGUub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuY29uZmlybSggdHJ1ZSwgJ29ubG9hZCcgKTtcbiAgdGhpcy51bmJpbmRFdmVudHMoKTtcbn07XG5cbkxvYWRpbmdJbWFnZS5wcm90b3R5cGUub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmNvbmZpcm0oIGZhbHNlLCAnb25lcnJvcicgKTtcbiAgdGhpcy51bmJpbmRFdmVudHMoKTtcbn07XG5cbkxvYWRpbmdJbWFnZS5wcm90b3R5cGUudW5iaW5kRXZlbnRzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucHJveHlJbWFnZS5yZW1vdmVFdmVudExpc3RlbmVyKCAnbG9hZCcsIHRoaXMgKTtcbiAgdGhpcy5wcm94eUltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdlcnJvcicsIHRoaXMgKTtcbiAgdGhpcy5pbWcucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCB0aGlzICk7XG4gIHRoaXMuaW1nLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdlcnJvcicsIHRoaXMgKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEJhY2tncm91bmQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuZnVuY3Rpb24gQmFja2dyb3VuZCggdXJsLCBlbGVtZW50ICkge1xuICB0aGlzLnVybCA9IHVybDtcbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcbn1cblxuLy8gaW5oZXJpdCBMb2FkaW5nSW1hZ2UgcHJvdG90eXBlXG5CYWNrZ3JvdW5kLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIExvYWRpbmdJbWFnZS5wcm90b3R5cGUgKTtcblxuQmFja2dyb3VuZC5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5pbWcuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCB0aGlzICk7XG4gIHRoaXMuaW1nLmFkZEV2ZW50TGlzdGVuZXIoICdlcnJvcicsIHRoaXMgKTtcbiAgdGhpcy5pbWcuc3JjID0gdGhpcy51cmw7XG4gIC8vIGNoZWNrIGlmIGltYWdlIGlzIGFscmVhZHkgY29tcGxldGVcbiAgdmFyIGlzQ29tcGxldGUgPSB0aGlzLmdldElzSW1hZ2VDb21wbGV0ZSgpO1xuICBpZiAoIGlzQ29tcGxldGUgKSB7XG4gICAgdGhpcy5jb25maXJtKCB0aGlzLmltZy5uYXR1cmFsV2lkdGggIT09IDAsICduYXR1cmFsV2lkdGgnICk7XG4gICAgdGhpcy51bmJpbmRFdmVudHMoKTtcbiAgfVxufTtcblxuQmFja2dyb3VuZC5wcm90b3R5cGUudW5iaW5kRXZlbnRzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuaW1nLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdsb2FkJywgdGhpcyApO1xuICB0aGlzLmltZy5yZW1vdmVFdmVudExpc3RlbmVyKCAnZXJyb3InLCB0aGlzICk7XG59O1xuXG5CYWNrZ3JvdW5kLnByb3RvdHlwZS5jb25maXJtID0gZnVuY3Rpb24oIGlzTG9hZGVkLCBtZXNzYWdlICkge1xuICB0aGlzLmlzTG9hZGVkID0gaXNMb2FkZWQ7XG4gIHRoaXMuZW1pdEV2ZW50KCAncHJvZ3Jlc3MnLCBbIHRoaXMsIHRoaXMuZWxlbWVudCwgbWVzc2FnZSBdICk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBqUXVlcnkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuSW1hZ2VzTG9hZGVkLm1ha2VKUXVlcnlQbHVnaW4gPSBmdW5jdGlvbiggalF1ZXJ5ICkge1xuICBqUXVlcnkgPSBqUXVlcnkgfHwgd2luZG93LmpRdWVyeTtcbiAgaWYgKCAhalF1ZXJ5ICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBzZXQgbG9jYWwgdmFyaWFibGVcbiAgJCA9IGpRdWVyeTtcbiAgLy8gJCgpLmltYWdlc0xvYWRlZCgpXG4gICQuZm4uaW1hZ2VzTG9hZGVkID0gZnVuY3Rpb24oIG9wdGlvbnMsIGNhbGxiYWNrICkge1xuICAgIHZhciBpbnN0YW5jZSA9IG5ldyBJbWFnZXNMb2FkZWQoIHRoaXMsIG9wdGlvbnMsIGNhbGxiYWNrICk7XG4gICAgcmV0dXJuIGluc3RhbmNlLmpxRGVmZXJyZWQucHJvbWlzZSggJCh0aGlzKSApO1xuICB9O1xufTtcbi8vIHRyeSBtYWtpbmcgcGx1Z2luXG5JbWFnZXNMb2FkZWQubWFrZUpRdWVyeVBsdWdpbigpO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxucmV0dXJuIEltYWdlc0xvYWRlZDtcblxufSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9pbWFnZXNsb2FkZWQvaW1hZ2VzbG9hZGVkLmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBFdkVtaXR0ZXIgdjEuMC4zXG4gKiBMaWwnIGV2ZW50IGVtaXR0ZXJcbiAqIE1JVCBMaWNlbnNlXG4gKi9cblxuLyoganNoaW50IHVudXNlZDogdHJ1ZSwgdW5kZWY6IHRydWUsIHN0cmljdDogdHJ1ZSAqL1xuXG4oIGZ1bmN0aW9uKCBnbG9iYWwsIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqLyAvKiBnbG9iYWxzIGRlZmluZSwgbW9kdWxlLCB3aW5kb3cgKi9cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTUQgLSBSZXF1aXJlSlNcbiAgICBkZWZpbmUoIGZhY3RvcnkgKTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KUyAtIEJyb3dzZXJpZnksIFdlYnBhY2tcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBCcm93c2VyIGdsb2JhbHNcbiAgICBnbG9iYWwuRXZFbWl0dGVyID0gZmFjdG9yeSgpO1xuICB9XG5cbn0oIHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0aGlzLCBmdW5jdGlvbigpIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIEV2RW1pdHRlcigpIHt9XG5cbnZhciBwcm90byA9IEV2RW1pdHRlci5wcm90b3R5cGU7XG5cbnByb3RvLm9uID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKSB7XG4gIGlmICggIWV2ZW50TmFtZSB8fCAhbGlzdGVuZXIgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIHNldCBldmVudHMgaGFzaFxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuICAvLyBzZXQgbGlzdGVuZXJzIGFycmF5XG4gIHZhciBsaXN0ZW5lcnMgPSBldmVudHNbIGV2ZW50TmFtZSBdID0gZXZlbnRzWyBldmVudE5hbWUgXSB8fCBbXTtcbiAgLy8gb25seSBhZGQgb25jZVxuICBpZiAoIGxpc3RlbmVycy5pbmRleE9mKCBsaXN0ZW5lciApID09IC0xICkge1xuICAgIGxpc3RlbmVycy5wdXNoKCBsaXN0ZW5lciApO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5wcm90by5vbmNlID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKSB7XG4gIGlmICggIWV2ZW50TmFtZSB8fCAhbGlzdGVuZXIgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGFkZCBldmVudFxuICB0aGlzLm9uKCBldmVudE5hbWUsIGxpc3RlbmVyICk7XG4gIC8vIHNldCBvbmNlIGZsYWdcbiAgLy8gc2V0IG9uY2VFdmVudHMgaGFzaFxuICB2YXIgb25jZUV2ZW50cyA9IHRoaXMuX29uY2VFdmVudHMgPSB0aGlzLl9vbmNlRXZlbnRzIHx8IHt9O1xuICAvLyBzZXQgb25jZUxpc3RlbmVycyBvYmplY3RcbiAgdmFyIG9uY2VMaXN0ZW5lcnMgPSBvbmNlRXZlbnRzWyBldmVudE5hbWUgXSA9IG9uY2VFdmVudHNbIGV2ZW50TmFtZSBdIHx8IHt9O1xuICAvLyBzZXQgZmxhZ1xuICBvbmNlTGlzdGVuZXJzWyBsaXN0ZW5lciBdID0gdHJ1ZTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLm9mZiA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGxpc3RlbmVyICkge1xuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzICYmIHRoaXMuX2V2ZW50c1sgZXZlbnROYW1lIF07XG4gIGlmICggIWxpc3RlbmVycyB8fCAhbGlzdGVuZXJzLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIGluZGV4ID0gbGlzdGVuZXJzLmluZGV4T2YoIGxpc3RlbmVyICk7XG4gIGlmICggaW5kZXggIT0gLTEgKSB7XG4gICAgbGlzdGVuZXJzLnNwbGljZSggaW5kZXgsIDEgKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8uZW1pdEV2ZW50ID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgYXJncyApIHtcbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50cyAmJiB0aGlzLl9ldmVudHNbIGV2ZW50TmFtZSBdO1xuICBpZiAoICFsaXN0ZW5lcnMgfHwgIWxpc3RlbmVycy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBpID0gMDtcbiAgdmFyIGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xuICBhcmdzID0gYXJncyB8fCBbXTtcbiAgLy8gb25jZSBzdHVmZlxuICB2YXIgb25jZUxpc3RlbmVycyA9IHRoaXMuX29uY2VFdmVudHMgJiYgdGhpcy5fb25jZUV2ZW50c1sgZXZlbnROYW1lIF07XG5cbiAgd2hpbGUgKCBsaXN0ZW5lciApIHtcbiAgICB2YXIgaXNPbmNlID0gb25jZUxpc3RlbmVycyAmJiBvbmNlTGlzdGVuZXJzWyBsaXN0ZW5lciBdO1xuICAgIGlmICggaXNPbmNlICkge1xuICAgICAgLy8gcmVtb3ZlIGxpc3RlbmVyXG4gICAgICAvLyByZW1vdmUgYmVmb3JlIHRyaWdnZXIgdG8gcHJldmVudCByZWN1cnNpb25cbiAgICAgIHRoaXMub2ZmKCBldmVudE5hbWUsIGxpc3RlbmVyICk7XG4gICAgICAvLyB1bnNldCBvbmNlIGZsYWdcbiAgICAgIGRlbGV0ZSBvbmNlTGlzdGVuZXJzWyBsaXN0ZW5lciBdO1xuICAgIH1cbiAgICAvLyB0cmlnZ2VyIGxpc3RlbmVyXG4gICAgbGlzdGVuZXIuYXBwbHkoIHRoaXMsIGFyZ3MgKTtcbiAgICAvLyBnZXQgbmV4dCBsaXN0ZW5lclxuICAgIGkgKz0gaXNPbmNlID8gMCA6IDE7XG4gICAgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV07XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbnJldHVybiBFdkVtaXR0ZXI7XG5cbn0pKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2V2LWVtaXR0ZXIvZXYtZW1pdHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qIVxuICogSXNvdG9wZSB2My4wLjFcbiAqXG4gKiBMaWNlbnNlZCBHUEx2MyBmb3Igb3BlbiBzb3VyY2UgdXNlXG4gKiBvciBJc290b3BlIENvbW1lcmNpYWwgTGljZW5zZSBmb3IgY29tbWVyY2lhbCB1c2VcbiAqXG4gKiBodHRwOi8vaXNvdG9wZS5tZXRhZml6enkuY29cbiAqIENvcHlyaWdodCAyMDE2IE1ldGFmaXp6eVxuICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgcmVxdWlyZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgICAnb3V0bGF5ZXIvb3V0bGF5ZXInLFxuICAgICAgICAnZ2V0LXNpemUvZ2V0LXNpemUnLFxuICAgICAgICAnZGVzYW5kcm8tbWF0Y2hlcy1zZWxlY3Rvci9tYXRjaGVzLXNlbGVjdG9yJyxcbiAgICAgICAgJ2Zpenp5LXVpLXV0aWxzL3V0aWxzJyxcbiAgICAgICAgJy4vaXRlbScsXG4gICAgICAgICcuL2xheW91dC1tb2RlJyxcbiAgICAgICAgLy8gaW5jbHVkZSBkZWZhdWx0IGxheW91dCBtb2Rlc1xuICAgICAgICAnLi9sYXlvdXQtbW9kZXMvbWFzb25yeScsXG4gICAgICAgICcuL2xheW91dC1tb2Rlcy9maXQtcm93cycsXG4gICAgICAgICcuL2xheW91dC1tb2Rlcy92ZXJ0aWNhbCdcbiAgICAgIF0sXG4gICAgICBmdW5jdGlvbiggT3V0bGF5ZXIsIGdldFNpemUsIG1hdGNoZXNTZWxlY3RvciwgdXRpbHMsIEl0ZW0sIExheW91dE1vZGUgKSB7XG4gICAgICAgIHJldHVybiBmYWN0b3J5KCB3aW5kb3csIE91dGxheWVyLCBnZXRTaXplLCBtYXRjaGVzU2VsZWN0b3IsIHV0aWxzLCBJdGVtLCBMYXlvdXRNb2RlICk7XG4gICAgICB9KTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHJlcXVpcmUoJ291dGxheWVyJyksXG4gICAgICByZXF1aXJlKCdnZXQtc2l6ZScpLFxuICAgICAgcmVxdWlyZSgnZGVzYW5kcm8tbWF0Y2hlcy1zZWxlY3RvcicpLFxuICAgICAgcmVxdWlyZSgnZml6enktdWktdXRpbHMnKSxcbiAgICAgIHJlcXVpcmUoJy4vaXRlbScpLFxuICAgICAgcmVxdWlyZSgnLi9sYXlvdXQtbW9kZScpLFxuICAgICAgLy8gaW5jbHVkZSBkZWZhdWx0IGxheW91dCBtb2Rlc1xuICAgICAgcmVxdWlyZSgnLi9sYXlvdXQtbW9kZXMvbWFzb25yeScpLFxuICAgICAgcmVxdWlyZSgnLi9sYXlvdXQtbW9kZXMvZml0LXJvd3MnKSxcbiAgICAgIHJlcXVpcmUoJy4vbGF5b3V0LW1vZGVzL3ZlcnRpY2FsJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93Lklzb3RvcGUgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgd2luZG93Lk91dGxheWVyLFxuICAgICAgd2luZG93LmdldFNpemUsXG4gICAgICB3aW5kb3cubWF0Y2hlc1NlbGVjdG9yLFxuICAgICAgd2luZG93LmZpenp5VUlVdGlscyxcbiAgICAgIHdpbmRvdy5Jc290b3BlLkl0ZW0sXG4gICAgICB3aW5kb3cuSXNvdG9wZS5MYXlvdXRNb2RlXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgT3V0bGF5ZXIsIGdldFNpemUsIG1hdGNoZXNTZWxlY3RvciwgdXRpbHMsXG4gIEl0ZW0sIExheW91dE1vZGUgKSB7XG5cbid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdmFycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG52YXIgalF1ZXJ5ID0gd2luZG93LmpRdWVyeTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaGVscGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG52YXIgdHJpbSA9IFN0cmluZy5wcm90b3R5cGUudHJpbSA/XG4gIGZ1bmN0aW9uKCBzdHIgKSB7XG4gICAgcmV0dXJuIHN0ci50cmltKCk7XG4gIH0gOlxuICBmdW5jdGlvbiggc3RyICkge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSggL15cXHMrfFxccyskL2csICcnICk7XG4gIH07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGlzb3RvcGVEZWZpbml0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbiAgLy8gY3JlYXRlIGFuIE91dGxheWVyIGxheW91dCBjbGFzc1xuICB2YXIgSXNvdG9wZSA9IE91dGxheWVyLmNyZWF0ZSggJ2lzb3RvcGUnLCB7XG4gICAgbGF5b3V0TW9kZTogJ21hc29ucnknLFxuICAgIGlzSlF1ZXJ5RmlsdGVyaW5nOiB0cnVlLFxuICAgIHNvcnRBc2NlbmRpbmc6IHRydWVcbiAgfSk7XG5cbiAgSXNvdG9wZS5JdGVtID0gSXRlbTtcbiAgSXNvdG9wZS5MYXlvdXRNb2RlID0gTGF5b3V0TW9kZTtcblxuICB2YXIgcHJvdG8gPSBJc290b3BlLnByb3RvdHlwZTtcblxuICBwcm90by5fY3JlYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pdGVtR1VJRCA9IDA7XG4gICAgLy8gZnVuY3Rpb25zIHRoYXQgc29ydCBpdGVtc1xuICAgIHRoaXMuX3NvcnRlcnMgPSB7fTtcbiAgICB0aGlzLl9nZXRTb3J0ZXJzKCk7XG4gICAgLy8gY2FsbCBzdXBlclxuICAgIE91dGxheWVyLnByb3RvdHlwZS5fY3JlYXRlLmNhbGwoIHRoaXMgKTtcblxuICAgIC8vIGNyZWF0ZSBsYXlvdXQgbW9kZXNcbiAgICB0aGlzLm1vZGVzID0ge307XG4gICAgLy8gc3RhcnQgZmlsdGVyZWRJdGVtcyB3aXRoIGFsbCBpdGVtc1xuICAgIHRoaXMuZmlsdGVyZWRJdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgLy8ga2VlcCBvZiB0cmFjayBvZiBzb3J0QnlzXG4gICAgdGhpcy5zb3J0SGlzdG9yeSA9IFsgJ29yaWdpbmFsLW9yZGVyJyBdO1xuICAgIC8vIGNyZWF0ZSBmcm9tIHJlZ2lzdGVyZWQgbGF5b3V0IG1vZGVzXG4gICAgZm9yICggdmFyIG5hbWUgaW4gTGF5b3V0TW9kZS5tb2RlcyApIHtcbiAgICAgIHRoaXMuX2luaXRMYXlvdXRNb2RlKCBuYW1lICk7XG4gICAgfVxuICB9O1xuXG4gIHByb3RvLnJlbG9hZEl0ZW1zID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gcmVzZXQgaXRlbSBJRCBjb3VudGVyXG4gICAgdGhpcy5pdGVtR1VJRCA9IDA7XG4gICAgLy8gY2FsbCBzdXBlclxuICAgIE91dGxheWVyLnByb3RvdHlwZS5yZWxvYWRJdGVtcy5jYWxsKCB0aGlzICk7XG4gIH07XG5cbiAgcHJvdG8uX2l0ZW1pemUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBPdXRsYXllci5wcm90b3R5cGUuX2l0ZW1pemUuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuICAgIC8vIGFzc2lnbiBJRCBmb3Igb3JpZ2luYWwtb3JkZXJcbiAgICBmb3IgKCB2YXIgaT0wOyBpIDwgaXRlbXMubGVuZ3RoOyBpKysgKSB7XG4gICAgICB2YXIgaXRlbSA9IGl0ZW1zW2ldO1xuICAgICAgaXRlbS5pZCA9IHRoaXMuaXRlbUdVSUQrKztcbiAgICB9XG4gICAgdGhpcy5fdXBkYXRlSXRlbXNTb3J0RGF0YSggaXRlbXMgKTtcbiAgICByZXR1cm4gaXRlbXM7XG4gIH07XG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBsYXlvdXQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICBwcm90by5faW5pdExheW91dE1vZGUgPSBmdW5jdGlvbiggbmFtZSApIHtcbiAgICB2YXIgTW9kZSA9IExheW91dE1vZGUubW9kZXNbIG5hbWUgXTtcbiAgICAvLyBzZXQgbW9kZSBvcHRpb25zXG4gICAgLy8gSEFDSyBleHRlbmQgaW5pdGlhbCBvcHRpb25zLCBiYWNrLWZpbGwgaW4gZGVmYXVsdCBvcHRpb25zXG4gICAgdmFyIGluaXRpYWxPcHRzID0gdGhpcy5vcHRpb25zWyBuYW1lIF0gfHwge307XG4gICAgdGhpcy5vcHRpb25zWyBuYW1lIF0gPSBNb2RlLm9wdGlvbnMgP1xuICAgICAgdXRpbHMuZXh0ZW5kKCBNb2RlLm9wdGlvbnMsIGluaXRpYWxPcHRzICkgOiBpbml0aWFsT3B0cztcbiAgICAvLyBpbml0IGxheW91dCBtb2RlIGluc3RhbmNlXG4gICAgdGhpcy5tb2Rlc1sgbmFtZSBdID0gbmV3IE1vZGUoIHRoaXMgKTtcbiAgfTtcblxuXG4gIHByb3RvLmxheW91dCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIGlmIGZpcnN0IHRpbWUgZG9pbmcgbGF5b3V0LCBkbyBhbGwgbWFnaWNcbiAgICBpZiAoICF0aGlzLl9pc0xheW91dEluaXRlZCAmJiB0aGlzLl9nZXRPcHRpb24oJ2luaXRMYXlvdXQnKSApIHtcbiAgICAgIHRoaXMuYXJyYW5nZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9sYXlvdXQoKTtcbiAgfTtcblxuICAvLyBwcml2YXRlIG1ldGhvZCB0byBiZSB1c2VkIGluIGxheW91dCgpICYgbWFnaWMoKVxuICBwcm90by5fbGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gZG9uJ3QgYW5pbWF0ZSBmaXJzdCBsYXlvdXRcbiAgICB2YXIgaXNJbnN0YW50ID0gdGhpcy5fZ2V0SXNJbnN0YW50KCk7XG4gICAgLy8gbGF5b3V0IGZsb3dcbiAgICB0aGlzLl9yZXNldExheW91dCgpO1xuICAgIHRoaXMuX21hbmFnZVN0YW1wcygpO1xuICAgIHRoaXMubGF5b3V0SXRlbXMoIHRoaXMuZmlsdGVyZWRJdGVtcywgaXNJbnN0YW50ICk7XG5cbiAgICAvLyBmbGFnIGZvciBpbml0YWxpemVkXG4gICAgdGhpcy5faXNMYXlvdXRJbml0ZWQgPSB0cnVlO1xuICB9O1xuXG4gIC8vIGZpbHRlciArIHNvcnQgKyBsYXlvdXRcbiAgcHJvdG8uYXJyYW5nZSA9IGZ1bmN0aW9uKCBvcHRzICkge1xuICAgIC8vIHNldCBhbnkgb3B0aW9ucyBwYXNzXG4gICAgdGhpcy5vcHRpb24oIG9wdHMgKTtcbiAgICB0aGlzLl9nZXRJc0luc3RhbnQoKTtcbiAgICAvLyBmaWx0ZXIsIHNvcnQsIGFuZCBsYXlvdXRcblxuICAgIC8vIGZpbHRlclxuICAgIHZhciBmaWx0ZXJlZCA9IHRoaXMuX2ZpbHRlciggdGhpcy5pdGVtcyApO1xuICAgIHRoaXMuZmlsdGVyZWRJdGVtcyA9IGZpbHRlcmVkLm1hdGNoZXM7XG5cbiAgICB0aGlzLl9iaW5kQXJyYW5nZUNvbXBsZXRlKCk7XG5cbiAgICBpZiAoIHRoaXMuX2lzSW5zdGFudCApIHtcbiAgICAgIHRoaXMuX25vVHJhbnNpdGlvbiggdGhpcy5faGlkZVJldmVhbCwgWyBmaWx0ZXJlZCBdICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hpZGVSZXZlYWwoIGZpbHRlcmVkICk7XG4gICAgfVxuXG4gICAgdGhpcy5fc29ydCgpO1xuICAgIHRoaXMuX2xheW91dCgpO1xuICB9O1xuICAvLyBhbGlhcyB0byBfaW5pdCBmb3IgbWFpbiBwbHVnaW4gbWV0aG9kXG4gIHByb3RvLl9pbml0ID0gcHJvdG8uYXJyYW5nZTtcblxuICBwcm90by5faGlkZVJldmVhbCA9IGZ1bmN0aW9uKCBmaWx0ZXJlZCApIHtcbiAgICB0aGlzLnJldmVhbCggZmlsdGVyZWQubmVlZFJldmVhbCApO1xuICAgIHRoaXMuaGlkZSggZmlsdGVyZWQubmVlZEhpZGUgKTtcbiAgfTtcblxuICAvLyBIQUNLXG4gIC8vIERvbid0IGFuaW1hdGUvdHJhbnNpdGlvbiBmaXJzdCBsYXlvdXRcbiAgLy8gT3IgZG9uJ3QgYW5pbWF0ZS90cmFuc2l0aW9uIG90aGVyIGxheW91dHNcbiAgcHJvdG8uX2dldElzSW5zdGFudCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpc0xheW91dEluc3RhbnQgPSB0aGlzLl9nZXRPcHRpb24oJ2xheW91dEluc3RhbnQnKTtcbiAgICB2YXIgaXNJbnN0YW50ID0gaXNMYXlvdXRJbnN0YW50ICE9PSB1bmRlZmluZWQgPyBpc0xheW91dEluc3RhbnQgOlxuICAgICAgIXRoaXMuX2lzTGF5b3V0SW5pdGVkO1xuICAgIHRoaXMuX2lzSW5zdGFudCA9IGlzSW5zdGFudDtcbiAgICByZXR1cm4gaXNJbnN0YW50O1xuICB9O1xuXG4gIC8vIGxpc3RlbiBmb3IgbGF5b3V0Q29tcGxldGUsIGhpZGVDb21wbGV0ZSBhbmQgcmV2ZWFsQ29tcGxldGVcbiAgLy8gdG8gdHJpZ2dlciBhcnJhbmdlQ29tcGxldGVcbiAgcHJvdG8uX2JpbmRBcnJhbmdlQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBsaXN0ZW4gZm9yIDMgZXZlbnRzIHRvIHRyaWdnZXIgYXJyYW5nZUNvbXBsZXRlXG4gICAgdmFyIGlzTGF5b3V0Q29tcGxldGUsIGlzSGlkZUNvbXBsZXRlLCBpc1JldmVhbENvbXBsZXRlO1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgZnVuY3Rpb24gYXJyYW5nZVBhcmFsbGVsQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoIGlzTGF5b3V0Q29tcGxldGUgJiYgaXNIaWRlQ29tcGxldGUgJiYgaXNSZXZlYWxDb21wbGV0ZSApIHtcbiAgICAgICAgX3RoaXMuZGlzcGF0Y2hFdmVudCggJ2FycmFuZ2VDb21wbGV0ZScsIG51bGwsIFsgX3RoaXMuZmlsdGVyZWRJdGVtcyBdICk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMub25jZSggJ2xheW91dENvbXBsZXRlJywgZnVuY3Rpb24oKSB7XG4gICAgICBpc0xheW91dENvbXBsZXRlID0gdHJ1ZTtcbiAgICAgIGFycmFuZ2VQYXJhbGxlbENhbGxiYWNrKCk7XG4gICAgfSk7XG4gICAgdGhpcy5vbmNlKCAnaGlkZUNvbXBsZXRlJywgZnVuY3Rpb24oKSB7XG4gICAgICBpc0hpZGVDb21wbGV0ZSA9IHRydWU7XG4gICAgICBhcnJhbmdlUGFyYWxsZWxDYWxsYmFjaygpO1xuICAgIH0pO1xuICAgIHRoaXMub25jZSggJ3JldmVhbENvbXBsZXRlJywgZnVuY3Rpb24oKSB7XG4gICAgICBpc1JldmVhbENvbXBsZXRlID0gdHJ1ZTtcbiAgICAgIGFycmFuZ2VQYXJhbGxlbENhbGxiYWNrKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZmlsdGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbiAgcHJvdG8uX2ZpbHRlciA9IGZ1bmN0aW9uKCBpdGVtcyApIHtcbiAgICB2YXIgZmlsdGVyID0gdGhpcy5vcHRpb25zLmZpbHRlcjtcbiAgICBmaWx0ZXIgPSBmaWx0ZXIgfHwgJyonO1xuICAgIHZhciBtYXRjaGVzID0gW107XG4gICAgdmFyIGhpZGRlbk1hdGNoZWQgPSBbXTtcbiAgICB2YXIgdmlzaWJsZVVubWF0Y2hlZCA9IFtdO1xuXG4gICAgdmFyIHRlc3QgPSB0aGlzLl9nZXRGaWx0ZXJUZXN0KCBmaWx0ZXIgKTtcblxuICAgIC8vIHRlc3QgZWFjaCBpdGVtXG4gICAgZm9yICggdmFyIGk9MDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrICkge1xuICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tpXTtcbiAgICAgIGlmICggaXRlbS5pc0lnbm9yZWQgKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgLy8gYWRkIGl0ZW0gdG8gZWl0aGVyIG1hdGNoZWQgb3IgdW5tYXRjaGVkIGdyb3VwXG4gICAgICB2YXIgaXNNYXRjaGVkID0gdGVzdCggaXRlbSApO1xuICAgICAgLy8gaXRlbS5pc0ZpbHRlck1hdGNoZWQgPSBpc01hdGNoZWQ7XG4gICAgICAvLyBhZGQgdG8gbWF0Y2hlcyBpZiBpdHMgYSBtYXRjaFxuICAgICAgaWYgKCBpc01hdGNoZWQgKSB7XG4gICAgICAgIG1hdGNoZXMucHVzaCggaXRlbSApO1xuICAgICAgfVxuICAgICAgLy8gYWRkIHRvIGFkZGl0aW9uYWwgZ3JvdXAgaWYgaXRlbSBuZWVkcyB0byBiZSBoaWRkZW4gb3IgcmV2ZWFsZWRcbiAgICAgIGlmICggaXNNYXRjaGVkICYmIGl0ZW0uaXNIaWRkZW4gKSB7XG4gICAgICAgIGhpZGRlbk1hdGNoZWQucHVzaCggaXRlbSApO1xuICAgICAgfSBlbHNlIGlmICggIWlzTWF0Y2hlZCAmJiAhaXRlbS5pc0hpZGRlbiApIHtcbiAgICAgICAgdmlzaWJsZVVubWF0Y2hlZC5wdXNoKCBpdGVtICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIGNvbGxlY3Rpb25zIG9mIGl0ZW1zIHRvIGJlIG1hbmlwdWxhdGVkXG4gICAgcmV0dXJuIHtcbiAgICAgIG1hdGNoZXM6IG1hdGNoZXMsXG4gICAgICBuZWVkUmV2ZWFsOiBoaWRkZW5NYXRjaGVkLFxuICAgICAgbmVlZEhpZGU6IHZpc2libGVVbm1hdGNoZWRcbiAgICB9O1xuICB9O1xuXG4gIC8vIGdldCBhIGpRdWVyeSwgZnVuY3Rpb24sIG9yIGEgbWF0Y2hlc1NlbGVjdG9yIHRlc3QgZ2l2ZW4gdGhlIGZpbHRlclxuICBwcm90by5fZ2V0RmlsdGVyVGVzdCA9IGZ1bmN0aW9uKCBmaWx0ZXIgKSB7XG4gICAgaWYgKCBqUXVlcnkgJiYgdGhpcy5vcHRpb25zLmlzSlF1ZXJ5RmlsdGVyaW5nICkge1xuICAgICAgLy8gdXNlIGpRdWVyeVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCBpdGVtICkge1xuICAgICAgICByZXR1cm4galF1ZXJ5KCBpdGVtLmVsZW1lbnQgKS5pcyggZmlsdGVyICk7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoIHR5cGVvZiBmaWx0ZXIgPT0gJ2Z1bmN0aW9uJyApIHtcbiAgICAgIC8vIHVzZSBmaWx0ZXIgYXMgZnVuY3Rpb25cbiAgICAgIHJldHVybiBmdW5jdGlvbiggaXRlbSApIHtcbiAgICAgICAgcmV0dXJuIGZpbHRlciggaXRlbS5lbGVtZW50ICk7XG4gICAgICB9O1xuICAgIH1cbiAgICAvLyBkZWZhdWx0LCB1c2UgZmlsdGVyIGFzIHNlbGVjdG9yIHN0cmluZ1xuICAgIHJldHVybiBmdW5jdGlvbiggaXRlbSApIHtcbiAgICAgIHJldHVybiBtYXRjaGVzU2VsZWN0b3IoIGl0ZW0uZWxlbWVudCwgZmlsdGVyICk7XG4gICAgfTtcbiAgfTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBzb3J0aW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbiAgLyoqXG4gICAqIEBwYXJhbXMge0FycmF5fSBlbGVtc1xuICAgKiBAcHVibGljXG4gICAqL1xuICBwcm90by51cGRhdGVTb3J0RGF0YSA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgICAvLyBnZXQgaXRlbXNcbiAgICB2YXIgaXRlbXM7XG4gICAgaWYgKCBlbGVtcyApIHtcbiAgICAgIGVsZW1zID0gdXRpbHMubWFrZUFycmF5KCBlbGVtcyApO1xuICAgICAgaXRlbXMgPSB0aGlzLmdldEl0ZW1zKCBlbGVtcyApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB1cGRhdGUgYWxsIGl0ZW1zIGlmIG5vIGVsZW1zIHByb3ZpZGVkXG4gICAgICBpdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgfVxuXG4gICAgdGhpcy5fZ2V0U29ydGVycygpO1xuICAgIHRoaXMuX3VwZGF0ZUl0ZW1zU29ydERhdGEoIGl0ZW1zICk7XG4gIH07XG5cbiAgcHJvdG8uX2dldFNvcnRlcnMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZ2V0U29ydERhdGEgPSB0aGlzLm9wdGlvbnMuZ2V0U29ydERhdGE7XG4gICAgZm9yICggdmFyIGtleSBpbiBnZXRTb3J0RGF0YSApIHtcbiAgICAgIHZhciBzb3J0ZXIgPSBnZXRTb3J0RGF0YVsga2V5IF07XG4gICAgICB0aGlzLl9zb3J0ZXJzWyBrZXkgXSA9IG11bmdlU29ydGVyKCBzb3J0ZXIgKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbXMge0FycmF5fSBpdGVtcyAtIG9mIElzb3RvcGUuSXRlbXNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByb3RvLl91cGRhdGVJdGVtc1NvcnREYXRhID0gZnVuY3Rpb24oIGl0ZW1zICkge1xuICAgIC8vIGRvIG5vdCB1cGRhdGUgaWYgbm8gaXRlbXNcbiAgICB2YXIgbGVuID0gaXRlbXMgJiYgaXRlbXMubGVuZ3RoO1xuXG4gICAgZm9yICggdmFyIGk9MDsgbGVuICYmIGkgPCBsZW47IGkrKyApIHtcbiAgICAgIHZhciBpdGVtID0gaXRlbXNbaV07XG4gICAgICBpdGVtLnVwZGF0ZVNvcnREYXRhKCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIC0tLS0tIG11bmdlIHNvcnRlciAtLS0tLSAvL1xuXG4gIC8vIGVuY2Fwc3VsYXRlIHRoaXMsIGFzIHdlIGp1c3QgbmVlZCBtdW5nZVNvcnRlclxuICAvLyBvdGhlciBmdW5jdGlvbnMgaW4gaGVyZSBhcmUganVzdCBmb3IgbXVuZ2luZ1xuICB2YXIgbXVuZ2VTb3J0ZXIgPSAoIGZ1bmN0aW9uKCkge1xuICAgIC8vIGFkZCBhIG1hZ2ljIGxheWVyIHRvIHNvcnRlcnMgZm9yIGNvbnZpZW5lbnQgc2hvcnRoYW5kc1xuICAgIC8vIGAuZm9vLWJhcmAgd2lsbCB1c2UgdGhlIHRleHQgb2YgLmZvby1iYXIgcXVlcnlTZWxlY3RvclxuICAgIC8vIGBbZm9vLWJhcl1gIHdpbGwgdXNlIGF0dHJpYnV0ZVxuICAgIC8vIHlvdSBjYW4gYWxzbyBhZGQgcGFyc2VyXG4gICAgLy8gYC5mb28tYmFyIHBhcnNlSW50YCB3aWxsIHBhcnNlIHRoYXQgYXMgYSBudW1iZXJcbiAgICBmdW5jdGlvbiBtdW5nZVNvcnRlciggc29ydGVyICkge1xuICAgICAgLy8gaWYgbm90IGEgc3RyaW5nLCByZXR1cm4gZnVuY3Rpb24gb3Igd2hhdGV2ZXIgaXQgaXNcbiAgICAgIGlmICggdHlwZW9mIHNvcnRlciAhPSAnc3RyaW5nJyApIHtcbiAgICAgICAgcmV0dXJuIHNvcnRlcjtcbiAgICAgIH1cbiAgICAgIC8vIHBhcnNlIHRoZSBzb3J0ZXIgc3RyaW5nXG4gICAgICB2YXIgYXJncyA9IHRyaW0oIHNvcnRlciApLnNwbGl0KCcgJyk7XG4gICAgICB2YXIgcXVlcnkgPSBhcmdzWzBdO1xuICAgICAgLy8gY2hlY2sgaWYgcXVlcnkgbG9va3MgbGlrZSBbYW4tYXR0cmlidXRlXVxuICAgICAgdmFyIGF0dHJNYXRjaCA9IHF1ZXJ5Lm1hdGNoKCAvXlxcWyguKylcXF0kLyApO1xuICAgICAgdmFyIGF0dHIgPSBhdHRyTWF0Y2ggJiYgYXR0ck1hdGNoWzFdO1xuICAgICAgdmFyIGdldFZhbHVlID0gZ2V0VmFsdWVHZXR0ZXIoIGF0dHIsIHF1ZXJ5ICk7XG4gICAgICAvLyB1c2Ugc2Vjb25kIGFyZ3VtZW50IGFzIGEgcGFyc2VyXG4gICAgICB2YXIgcGFyc2VyID0gSXNvdG9wZS5zb3J0RGF0YVBhcnNlcnNbIGFyZ3NbMV0gXTtcbiAgICAgIC8vIHBhcnNlIHRoZSB2YWx1ZSwgaWYgdGhlcmUgd2FzIGEgcGFyc2VyXG4gICAgICBzb3J0ZXIgPSBwYXJzZXIgPyBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAgICAgcmV0dXJuIGVsZW0gJiYgcGFyc2VyKCBnZXRWYWx1ZSggZWxlbSApICk7XG4gICAgICB9IDpcbiAgICAgIC8vIG90aGVyd2lzZSBqdXN0IHJldHVybiB2YWx1ZVxuICAgICAgZnVuY3Rpb24oIGVsZW0gKSB7XG4gICAgICAgIHJldHVybiBlbGVtICYmIGdldFZhbHVlKCBlbGVtICk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gc29ydGVyO1xuICAgIH1cblxuICAgIC8vIGdldCBhbiBhdHRyaWJ1dGUgZ2V0dGVyLCBvciBnZXQgdGV4dCBvZiB0aGUgcXVlcnlTZWxlY3RvclxuICAgIGZ1bmN0aW9uIGdldFZhbHVlR2V0dGVyKCBhdHRyLCBxdWVyeSApIHtcbiAgICAgIC8vIGlmIHF1ZXJ5IGxvb2tzIGxpa2UgW2Zvby1iYXJdLCBnZXQgYXR0cmlidXRlXG4gICAgICBpZiAoIGF0dHIgKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBnZXRBdHRyaWJ1dGUoIGVsZW0gKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW0uZ2V0QXR0cmlidXRlKCBhdHRyICk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8vIG90aGVyd2lzZSwgYXNzdW1lIGl0cyBhIHF1ZXJ5U2VsZWN0b3IsIGFuZCBnZXQgaXRzIHRleHRcbiAgICAgIHJldHVybiBmdW5jdGlvbiBnZXRDaGlsZFRleHQoIGVsZW0gKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IGVsZW0ucXVlcnlTZWxlY3RvciggcXVlcnkgKTtcbiAgICAgICAgcmV0dXJuIGNoaWxkICYmIGNoaWxkLnRleHRDb250ZW50O1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gbXVuZ2VTb3J0ZXI7XG4gIH0pKCk7XG5cbiAgLy8gcGFyc2VycyB1c2VkIGluIGdldFNvcnREYXRhIHNob3J0Y3V0IHN0cmluZ3NcbiAgSXNvdG9wZS5zb3J0RGF0YVBhcnNlcnMgPSB7XG4gICAgJ3BhcnNlSW50JzogZnVuY3Rpb24oIHZhbCApIHtcbiAgICAgIHJldHVybiBwYXJzZUludCggdmFsLCAxMCApO1xuICAgIH0sXG4gICAgJ3BhcnNlRmxvYXQnOiBmdW5jdGlvbiggdmFsICkge1xuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoIHZhbCApO1xuICAgIH1cbiAgfTtcblxuICAvLyAtLS0tLSBzb3J0IG1ldGhvZCAtLS0tLSAvL1xuXG4gIC8vIHNvcnQgZmlsdGVyZWRJdGVtIG9yZGVyXG4gIHByb3RvLl9zb3J0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNvcnRCeU9wdCA9IHRoaXMub3B0aW9ucy5zb3J0Qnk7XG4gICAgaWYgKCAhc29ydEJ5T3B0ICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBjb25jYXQgYWxsIHNvcnRCeSBhbmQgc29ydEhpc3RvcnlcbiAgICB2YXIgc29ydEJ5cyA9IFtdLmNvbmNhdC5hcHBseSggc29ydEJ5T3B0LCB0aGlzLnNvcnRIaXN0b3J5ICk7XG4gICAgLy8gc29ydCBtYWdpY1xuICAgIHZhciBpdGVtU29ydGVyID0gZ2V0SXRlbVNvcnRlciggc29ydEJ5cywgdGhpcy5vcHRpb25zLnNvcnRBc2NlbmRpbmcgKTtcbiAgICB0aGlzLmZpbHRlcmVkSXRlbXMuc29ydCggaXRlbVNvcnRlciApO1xuICAgIC8vIGtlZXAgdHJhY2sgb2Ygc29ydEJ5IEhpc3RvcnlcbiAgICBpZiAoIHNvcnRCeU9wdCAhPSB0aGlzLnNvcnRIaXN0b3J5WzBdICkge1xuICAgICAgLy8gYWRkIHRvIGZyb250LCBvbGRlc3QgZ29lcyBpbiBsYXN0XG4gICAgICB0aGlzLnNvcnRIaXN0b3J5LnVuc2hpZnQoIHNvcnRCeU9wdCApO1xuICAgIH1cbiAgfTtcblxuICAvLyByZXR1cm5zIGEgZnVuY3Rpb24gdXNlZCBmb3Igc29ydGluZ1xuICBmdW5jdGlvbiBnZXRJdGVtU29ydGVyKCBzb3J0QnlzLCBzb3J0QXNjICkge1xuICAgIHJldHVybiBmdW5jdGlvbiBzb3J0ZXIoIGl0ZW1BLCBpdGVtQiApIHtcbiAgICAgIC8vIGN5Y2xlIHRocm91Z2ggYWxsIHNvcnRLZXlzXG4gICAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBzb3J0QnlzLmxlbmd0aDsgaSsrICkge1xuICAgICAgICB2YXIgc29ydEJ5ID0gc29ydEJ5c1tpXTtcbiAgICAgICAgdmFyIGEgPSBpdGVtQS5zb3J0RGF0YVsgc29ydEJ5IF07XG4gICAgICAgIHZhciBiID0gaXRlbUIuc29ydERhdGFbIHNvcnRCeSBdO1xuICAgICAgICBpZiAoIGEgPiBiIHx8IGEgPCBiICkge1xuICAgICAgICAgIC8vIGlmIHNvcnRBc2MgaXMgYW4gb2JqZWN0LCB1c2UgdGhlIHZhbHVlIGdpdmVuIHRoZSBzb3J0Qnkga2V5XG4gICAgICAgICAgdmFyIGlzQXNjZW5kaW5nID0gc29ydEFzY1sgc29ydEJ5IF0gIT09IHVuZGVmaW5lZCA/IHNvcnRBc2NbIHNvcnRCeSBdIDogc29ydEFzYztcbiAgICAgICAgICB2YXIgZGlyZWN0aW9uID0gaXNBc2NlbmRpbmcgPyAxIDogLTE7XG4gICAgICAgICAgcmV0dXJuICggYSA+IGIgPyAxIDogLTEgKSAqIGRpcmVjdGlvbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1ldGhvZHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICAvLyBnZXQgbGF5b3V0IG1vZGVcbiAgcHJvdG8uX21vZGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbGF5b3V0TW9kZSA9IHRoaXMub3B0aW9ucy5sYXlvdXRNb2RlO1xuICAgIHZhciBtb2RlID0gdGhpcy5tb2Rlc1sgbGF5b3V0TW9kZSBdO1xuICAgIGlmICggIW1vZGUgKSB7XG4gICAgICAvLyBUT0RPIGNvbnNvbGUuZXJyb3JcbiAgICAgIHRocm93IG5ldyBFcnJvciggJ05vIGxheW91dCBtb2RlOiAnICsgbGF5b3V0TW9kZSApO1xuICAgIH1cbiAgICAvLyBIQUNLIHN5bmMgbW9kZSdzIG9wdGlvbnNcbiAgICAvLyBhbnkgb3B0aW9ucyBzZXQgYWZ0ZXIgaW5pdCBmb3IgbGF5b3V0IG1vZGUgbmVlZCB0byBiZSBzeW5jZWRcbiAgICBtb2RlLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnNbIGxheW91dE1vZGUgXTtcbiAgICByZXR1cm4gbW9kZTtcbiAgfTtcblxuICBwcm90by5fcmVzZXRMYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAvLyB0cmlnZ2VyIG9yaWdpbmFsIHJlc2V0IGxheW91dFxuICAgIE91dGxheWVyLnByb3RvdHlwZS5fcmVzZXRMYXlvdXQuY2FsbCggdGhpcyApO1xuICAgIHRoaXMuX21vZGUoKS5fcmVzZXRMYXlvdXQoKTtcbiAgfTtcblxuICBwcm90by5fZ2V0SXRlbUxheW91dFBvc2l0aW9uID0gZnVuY3Rpb24oIGl0ZW0gICkge1xuICAgIHJldHVybiB0aGlzLl9tb2RlKCkuX2dldEl0ZW1MYXlvdXRQb3NpdGlvbiggaXRlbSApO1xuICB9O1xuXG4gIHByb3RvLl9tYW5hZ2VTdGFtcCA9IGZ1bmN0aW9uKCBzdGFtcCApIHtcbiAgICB0aGlzLl9tb2RlKCkuX21hbmFnZVN0YW1wKCBzdGFtcCApO1xuICB9O1xuXG4gIHByb3RvLl9nZXRDb250YWluZXJTaXplID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGUoKS5fZ2V0Q29udGFpbmVyU2l6ZSgpO1xuICB9O1xuXG4gIHByb3RvLm5lZWRzUmVzaXplTGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGUoKS5uZWVkc1Jlc2l6ZUxheW91dCgpO1xuICB9O1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGFkZGluZyAmIHJlbW92aW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbiAgLy8gSEVBRFMgVVAgb3ZlcndyaXRlcyBkZWZhdWx0IE91dGxheWVyIGFwcGVuZGVkXG4gIHByb3RvLmFwcGVuZGVkID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICAgIHZhciBpdGVtcyA9IHRoaXMuYWRkSXRlbXMoIGVsZW1zICk7XG4gICAgaWYgKCAhaXRlbXMubGVuZ3RoICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBmaWx0ZXIsIGxheW91dCwgcmV2ZWFsIG5ldyBpdGVtc1xuICAgIHZhciBmaWx0ZXJlZEl0ZW1zID0gdGhpcy5fZmlsdGVyUmV2ZWFsQWRkZWQoIGl0ZW1zICk7XG4gICAgLy8gYWRkIHRvIGZpbHRlcmVkSXRlbXNcbiAgICB0aGlzLmZpbHRlcmVkSXRlbXMgPSB0aGlzLmZpbHRlcmVkSXRlbXMuY29uY2F0KCBmaWx0ZXJlZEl0ZW1zICk7XG4gIH07XG5cbiAgLy8gSEVBRFMgVVAgb3ZlcndyaXRlcyBkZWZhdWx0IE91dGxheWVyIHByZXBlbmRlZFxuICBwcm90by5wcmVwZW5kZWQgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gICAgdmFyIGl0ZW1zID0gdGhpcy5faXRlbWl6ZSggZWxlbXMgKTtcbiAgICBpZiAoICFpdGVtcy5sZW5ndGggKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIHN0YXJ0IG5ldyBsYXlvdXRcbiAgICB0aGlzLl9yZXNldExheW91dCgpO1xuICAgIHRoaXMuX21hbmFnZVN0YW1wcygpO1xuICAgIC8vIGZpbHRlciwgbGF5b3V0LCByZXZlYWwgbmV3IGl0ZW1zXG4gICAgdmFyIGZpbHRlcmVkSXRlbXMgPSB0aGlzLl9maWx0ZXJSZXZlYWxBZGRlZCggaXRlbXMgKTtcbiAgICAvLyBsYXlvdXQgcHJldmlvdXMgaXRlbXNcbiAgICB0aGlzLmxheW91dEl0ZW1zKCB0aGlzLmZpbHRlcmVkSXRlbXMgKTtcbiAgICAvLyBhZGQgdG8gaXRlbXMgYW5kIGZpbHRlcmVkSXRlbXNcbiAgICB0aGlzLmZpbHRlcmVkSXRlbXMgPSBmaWx0ZXJlZEl0ZW1zLmNvbmNhdCggdGhpcy5maWx0ZXJlZEl0ZW1zICk7XG4gICAgdGhpcy5pdGVtcyA9IGl0ZW1zLmNvbmNhdCggdGhpcy5pdGVtcyApO1xuICB9O1xuXG4gIHByb3RvLl9maWx0ZXJSZXZlYWxBZGRlZCA9IGZ1bmN0aW9uKCBpdGVtcyApIHtcbiAgICB2YXIgZmlsdGVyZWQgPSB0aGlzLl9maWx0ZXIoIGl0ZW1zICk7XG4gICAgdGhpcy5oaWRlKCBmaWx0ZXJlZC5uZWVkSGlkZSApO1xuICAgIC8vIHJldmVhbCBhbGwgbmV3IGl0ZW1zXG4gICAgdGhpcy5yZXZlYWwoIGZpbHRlcmVkLm1hdGNoZXMgKTtcbiAgICAvLyBsYXlvdXQgbmV3IGl0ZW1zLCBubyB0cmFuc2l0aW9uXG4gICAgdGhpcy5sYXlvdXRJdGVtcyggZmlsdGVyZWQubWF0Y2hlcywgdHJ1ZSApO1xuICAgIHJldHVybiBmaWx0ZXJlZC5tYXRjaGVzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGaWx0ZXIsIHNvcnQsIGFuZCBsYXlvdXQgbmV3bHktYXBwZW5kZWQgaXRlbSBlbGVtZW50c1xuICAgKiBAcGFyYW0ge0FycmF5IG9yIE5vZGVMaXN0IG9yIEVsZW1lbnR9IGVsZW1zXG4gICAqL1xuICBwcm90by5pbnNlcnQgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gICAgdmFyIGl0ZW1zID0gdGhpcy5hZGRJdGVtcyggZWxlbXMgKTtcbiAgICBpZiAoICFpdGVtcy5sZW5ndGggKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGFwcGVuZCBpdGVtIGVsZW1lbnRzXG4gICAgdmFyIGksIGl0ZW07XG4gICAgdmFyIGxlbiA9IGl0ZW1zLmxlbmd0aDtcbiAgICBmb3IgKCBpPTA7IGkgPCBsZW47IGkrKyApIHtcbiAgICAgIGl0ZW0gPSBpdGVtc1tpXTtcbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCggaXRlbS5lbGVtZW50ICk7XG4gICAgfVxuICAgIC8vIGZpbHRlciBuZXcgc3R1ZmZcbiAgICB2YXIgZmlsdGVyZWRJbnNlcnRJdGVtcyA9IHRoaXMuX2ZpbHRlciggaXRlbXMgKS5tYXRjaGVzO1xuICAgIC8vIHNldCBmbGFnXG4gICAgZm9yICggaT0wOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgICBpdGVtc1tpXS5pc0xheW91dEluc3RhbnQgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLmFycmFuZ2UoKTtcbiAgICAvLyByZXNldCBmbGFnXG4gICAgZm9yICggaT0wOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgICBkZWxldGUgaXRlbXNbaV0uaXNMYXlvdXRJbnN0YW50O1xuICAgIH1cbiAgICB0aGlzLnJldmVhbCggZmlsdGVyZWRJbnNlcnRJdGVtcyApO1xuICB9O1xuXG4gIHZhciBfcmVtb3ZlID0gcHJvdG8ucmVtb3ZlO1xuICBwcm90by5yZW1vdmUgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gICAgZWxlbXMgPSB1dGlscy5tYWtlQXJyYXkoIGVsZW1zICk7XG4gICAgdmFyIHJlbW92ZUl0ZW1zID0gdGhpcy5nZXRJdGVtcyggZWxlbXMgKTtcbiAgICAvLyBkbyByZWd1bGFyIHRoaW5nXG4gICAgX3JlbW92ZS5jYWxsKCB0aGlzLCBlbGVtcyApO1xuICAgIC8vIGJhaWwgaWYgbm8gaXRlbXMgdG8gcmVtb3ZlXG4gICAgdmFyIGxlbiA9IHJlbW92ZUl0ZW1zICYmIHJlbW92ZUl0ZW1zLmxlbmd0aDtcbiAgICAvLyByZW1vdmUgZWxlbXMgZnJvbSBmaWx0ZXJlZEl0ZW1zXG4gICAgZm9yICggdmFyIGk9MDsgbGVuICYmIGkgPCBsZW47IGkrKyApIHtcbiAgICAgIHZhciBpdGVtID0gcmVtb3ZlSXRlbXNbaV07XG4gICAgICAvLyByZW1vdmUgaXRlbSBmcm9tIGNvbGxlY3Rpb25cbiAgICAgIHV0aWxzLnJlbW92ZUZyb20oIHRoaXMuZmlsdGVyZWRJdGVtcywgaXRlbSApO1xuICAgIH1cbiAgfTtcblxuICBwcm90by5zaHVmZmxlID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gdXBkYXRlIHJhbmRvbSBzb3J0RGF0YVxuICAgIGZvciAoIHZhciBpPTA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrICkge1xuICAgICAgdmFyIGl0ZW0gPSB0aGlzLml0ZW1zW2ldO1xuICAgICAgaXRlbS5zb3J0RGF0YS5yYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xuICAgIH1cbiAgICB0aGlzLm9wdGlvbnMuc29ydEJ5ID0gJ3JhbmRvbSc7XG4gICAgdGhpcy5fc29ydCgpO1xuICAgIHRoaXMuX2xheW91dCgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiB0cmlnZ2VyIGZuIHdpdGhvdXQgdHJhbnNpdGlvblxuICAgKiBraW5kIG9mIGhhY2t5IHRvIGhhdmUgdGhpcyBpbiB0aGUgZmlyc3QgcGxhY2VcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAgICogQHBhcmFtIHtBcnJheX0gYXJnc1xuICAgKiBAcmV0dXJucyByZXRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByb3RvLl9ub1RyYW5zaXRpb24gPSBmdW5jdGlvbiggZm4sIGFyZ3MgKSB7XG4gICAgLy8gc2F2ZSB0cmFuc2l0aW9uRHVyYXRpb24gYmVmb3JlIGRpc2FibGluZ1xuICAgIHZhciB0cmFuc2l0aW9uRHVyYXRpb24gPSB0aGlzLm9wdGlvbnMudHJhbnNpdGlvbkR1cmF0aW9uO1xuICAgIC8vIGRpc2FibGUgdHJhbnNpdGlvblxuICAgIHRoaXMub3B0aW9ucy50cmFuc2l0aW9uRHVyYXRpb24gPSAwO1xuICAgIC8vIGRvIGl0XG4gICAgdmFyIHJldHVyblZhbHVlID0gZm4uYXBwbHkoIHRoaXMsIGFyZ3MgKTtcbiAgICAvLyByZS1lbmFibGUgdHJhbnNpdGlvbiBmb3IgcmV2ZWFsXG4gICAgdGhpcy5vcHRpb25zLnRyYW5zaXRpb25EdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvbjtcbiAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gIH07XG5cbiAgLy8gLS0tLS0gaGVscGVyIG1ldGhvZHMgLS0tLS0gLy9cblxuICAvKipcbiAgICogZ2V0dGVyIG1ldGhvZCBmb3IgZ2V0dGluZyBmaWx0ZXJlZCBpdGVtIGVsZW1lbnRzXG4gICAqIEByZXR1cm5zIHtBcnJheX0gZWxlbXMgLSBjb2xsZWN0aW9uIG9mIGl0ZW0gZWxlbWVudHNcbiAgICovXG4gIHByb3RvLmdldEZpbHRlcmVkSXRlbUVsZW1lbnRzID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyZWRJdGVtcy5tYXAoIGZ1bmN0aW9uKCBpdGVtICkge1xuICAgICAgcmV0dXJuIGl0ZW0uZWxlbWVudDtcbiAgICB9KTtcbiAgfTtcblxuICAvLyAtLS0tLSAgLS0tLS0gLy9cblxuICByZXR1cm4gSXNvdG9wZTtcblxufSkpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaXNvdG9wZS1sYXlvdXQvanMvaXNvdG9wZS5qc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qIVxuICogZ2V0U2l6ZSB2Mi4wLjJcbiAqIG1lYXN1cmUgc2l6ZSBvZiBlbGVtZW50c1xuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCBzdHJpY3Q6IHRydWUsIHVuZGVmOiB0cnVlLCB1bnVzZWQ6IHRydWUgKi9cbi8qZ2xvYmFsIGRlZmluZTogZmFsc2UsIG1vZHVsZTogZmFsc2UsIGNvbnNvbGU6IGZhbHNlICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmYWN0b3J5KCk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5nZXRTaXplID0gZmFjdG9yeSgpO1xuICB9XG5cbn0pKCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGhlbHBlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLy8gZ2V0IGEgbnVtYmVyIGZyb20gYSBzdHJpbmcsIG5vdCBhIHBlcmNlbnRhZ2VcbmZ1bmN0aW9uIGdldFN0eWxlU2l6ZSggdmFsdWUgKSB7XG4gIHZhciBudW0gPSBwYXJzZUZsb2F0KCB2YWx1ZSApO1xuICAvLyBub3QgYSBwZXJjZW50IGxpa2UgJzEwMCUnLCBhbmQgYSBudW1iZXJcbiAgdmFyIGlzVmFsaWQgPSB2YWx1ZS5pbmRleE9mKCclJykgPT0gLTEgJiYgIWlzTmFOKCBudW0gKTtcbiAgcmV0dXJuIGlzVmFsaWQgJiYgbnVtO1xufVxuXG5mdW5jdGlvbiBub29wKCkge31cblxudmFyIGxvZ0Vycm9yID0gdHlwZW9mIGNvbnNvbGUgPT0gJ3VuZGVmaW5lZCcgPyBub29wIDpcbiAgZnVuY3Rpb24oIG1lc3NhZ2UgKSB7XG4gICAgY29uc29sZS5lcnJvciggbWVzc2FnZSApO1xuICB9O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtZWFzdXJlbWVudHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxudmFyIG1lYXN1cmVtZW50cyA9IFtcbiAgJ3BhZGRpbmdMZWZ0JyxcbiAgJ3BhZGRpbmdSaWdodCcsXG4gICdwYWRkaW5nVG9wJyxcbiAgJ3BhZGRpbmdCb3R0b20nLFxuICAnbWFyZ2luTGVmdCcsXG4gICdtYXJnaW5SaWdodCcsXG4gICdtYXJnaW5Ub3AnLFxuICAnbWFyZ2luQm90dG9tJyxcbiAgJ2JvcmRlckxlZnRXaWR0aCcsXG4gICdib3JkZXJSaWdodFdpZHRoJyxcbiAgJ2JvcmRlclRvcFdpZHRoJyxcbiAgJ2JvcmRlckJvdHRvbVdpZHRoJ1xuXTtcblxudmFyIG1lYXN1cmVtZW50c0xlbmd0aCA9IG1lYXN1cmVtZW50cy5sZW5ndGg7XG5cbmZ1bmN0aW9uIGdldFplcm9TaXplKCkge1xuICB2YXIgc2l6ZSA9IHtcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgaW5uZXJXaWR0aDogMCxcbiAgICBpbm5lckhlaWdodDogMCxcbiAgICBvdXRlcldpZHRoOiAwLFxuICAgIG91dGVySGVpZ2h0OiAwXG4gIH07XG4gIGZvciAoIHZhciBpPTA7IGkgPCBtZWFzdXJlbWVudHNMZW5ndGg7IGkrKyApIHtcbiAgICB2YXIgbWVhc3VyZW1lbnQgPSBtZWFzdXJlbWVudHNbaV07XG4gICAgc2l6ZVsgbWVhc3VyZW1lbnQgXSA9IDA7XG4gIH1cbiAgcmV0dXJuIHNpemU7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdldFN0eWxlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8qKlxuICogZ2V0U3R5bGUsIGdldCBzdHlsZSBvZiBlbGVtZW50LCBjaGVjayBmb3IgRmlyZWZveCBidWdcbiAqIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTU0ODM5N1xuICovXG5mdW5jdGlvbiBnZXRTdHlsZSggZWxlbSApIHtcbiAgdmFyIHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSggZWxlbSApO1xuICBpZiAoICFzdHlsZSApIHtcbiAgICBsb2dFcnJvciggJ1N0eWxlIHJldHVybmVkICcgKyBzdHlsZSArXG4gICAgICAnLiBBcmUgeW91IHJ1bm5pbmcgdGhpcyBjb2RlIGluIGEgaGlkZGVuIGlmcmFtZSBvbiBGaXJlZm94PyAnICtcbiAgICAgICdTZWUgaHR0cDovL2JpdC5seS9nZXRzaXplYnVnMScgKTtcbiAgfVxuICByZXR1cm4gc3R5bGU7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHNldHVwIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnZhciBpc1NldHVwID0gZmFsc2U7XG5cbnZhciBpc0JveFNpemVPdXRlcjtcblxuLyoqXG4gKiBzZXR1cFxuICogY2hlY2sgaXNCb3hTaXplck91dGVyXG4gKiBkbyBvbiBmaXJzdCBnZXRTaXplKCkgcmF0aGVyIHRoYW4gb24gcGFnZSBsb2FkIGZvciBGaXJlZm94IGJ1Z1xuICovXG5mdW5jdGlvbiBzZXR1cCgpIHtcbiAgLy8gc2V0dXAgb25jZVxuICBpZiAoIGlzU2V0dXAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlzU2V0dXAgPSB0cnVlO1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGJveCBzaXppbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICAvKipcbiAgICogV2ViS2l0IG1lYXN1cmVzIHRoZSBvdXRlci13aWR0aCBvbiBzdHlsZS53aWR0aCBvbiBib3JkZXItYm94IGVsZW1zXG4gICAqIElFICYgRmlyZWZveDwyOSBtZWFzdXJlcyB0aGUgaW5uZXItd2lkdGhcbiAgICovXG4gIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LnN0eWxlLndpZHRoID0gJzIwMHB4JztcbiAgZGl2LnN0eWxlLnBhZGRpbmcgPSAnMXB4IDJweCAzcHggNHB4JztcbiAgZGl2LnN0eWxlLmJvcmRlclN0eWxlID0gJ3NvbGlkJztcbiAgZGl2LnN0eWxlLmJvcmRlcldpZHRoID0gJzFweCAycHggM3B4IDRweCc7XG4gIGRpdi5zdHlsZS5ib3hTaXppbmcgPSAnYm9yZGVyLWJveCc7XG5cbiAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgYm9keS5hcHBlbmRDaGlsZCggZGl2ICk7XG4gIHZhciBzdHlsZSA9IGdldFN0eWxlKCBkaXYgKTtcblxuICBnZXRTaXplLmlzQm94U2l6ZU91dGVyID0gaXNCb3hTaXplT3V0ZXIgPSBnZXRTdHlsZVNpemUoIHN0eWxlLndpZHRoICkgPT0gMjAwO1xuICBib2R5LnJlbW92ZUNoaWxkKCBkaXYgKTtcblxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnZXRTaXplIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbmZ1bmN0aW9uIGdldFNpemUoIGVsZW0gKSB7XG4gIHNldHVwKCk7XG5cbiAgLy8gdXNlIHF1ZXJ5U2VsZXRvciBpZiBlbGVtIGlzIHN0cmluZ1xuICBpZiAoIHR5cGVvZiBlbGVtID09ICdzdHJpbmcnICkge1xuICAgIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBlbGVtICk7XG4gIH1cblxuICAvLyBkbyBub3QgcHJvY2VlZCBvbiBub24tb2JqZWN0c1xuICBpZiAoICFlbGVtIHx8IHR5cGVvZiBlbGVtICE9ICdvYmplY3QnIHx8ICFlbGVtLm5vZGVUeXBlICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBzdHlsZSA9IGdldFN0eWxlKCBlbGVtICk7XG5cbiAgLy8gaWYgaGlkZGVuLCBldmVyeXRoaW5nIGlzIDBcbiAgaWYgKCBzdHlsZS5kaXNwbGF5ID09ICdub25lJyApIHtcbiAgICByZXR1cm4gZ2V0WmVyb1NpemUoKTtcbiAgfVxuXG4gIHZhciBzaXplID0ge307XG4gIHNpemUud2lkdGggPSBlbGVtLm9mZnNldFdpZHRoO1xuICBzaXplLmhlaWdodCA9IGVsZW0ub2Zmc2V0SGVpZ2h0O1xuXG4gIHZhciBpc0JvcmRlckJveCA9IHNpemUuaXNCb3JkZXJCb3ggPSBzdHlsZS5ib3hTaXppbmcgPT0gJ2JvcmRlci1ib3gnO1xuXG4gIC8vIGdldCBhbGwgbWVhc3VyZW1lbnRzXG4gIGZvciAoIHZhciBpPTA7IGkgPCBtZWFzdXJlbWVudHNMZW5ndGg7IGkrKyApIHtcbiAgICB2YXIgbWVhc3VyZW1lbnQgPSBtZWFzdXJlbWVudHNbaV07XG4gICAgdmFyIHZhbHVlID0gc3R5bGVbIG1lYXN1cmVtZW50IF07XG4gICAgdmFyIG51bSA9IHBhcnNlRmxvYXQoIHZhbHVlICk7XG4gICAgLy8gYW55ICdhdXRvJywgJ21lZGl1bScgdmFsdWUgd2lsbCBiZSAwXG4gICAgc2l6ZVsgbWVhc3VyZW1lbnQgXSA9ICFpc05hTiggbnVtICkgPyBudW0gOiAwO1xuICB9XG5cbiAgdmFyIHBhZGRpbmdXaWR0aCA9IHNpemUucGFkZGluZ0xlZnQgKyBzaXplLnBhZGRpbmdSaWdodDtcbiAgdmFyIHBhZGRpbmdIZWlnaHQgPSBzaXplLnBhZGRpbmdUb3AgKyBzaXplLnBhZGRpbmdCb3R0b207XG4gIHZhciBtYXJnaW5XaWR0aCA9IHNpemUubWFyZ2luTGVmdCArIHNpemUubWFyZ2luUmlnaHQ7XG4gIHZhciBtYXJnaW5IZWlnaHQgPSBzaXplLm1hcmdpblRvcCArIHNpemUubWFyZ2luQm90dG9tO1xuICB2YXIgYm9yZGVyV2lkdGggPSBzaXplLmJvcmRlckxlZnRXaWR0aCArIHNpemUuYm9yZGVyUmlnaHRXaWR0aDtcbiAgdmFyIGJvcmRlckhlaWdodCA9IHNpemUuYm9yZGVyVG9wV2lkdGggKyBzaXplLmJvcmRlckJvdHRvbVdpZHRoO1xuXG4gIHZhciBpc0JvcmRlckJveFNpemVPdXRlciA9IGlzQm9yZGVyQm94ICYmIGlzQm94U2l6ZU91dGVyO1xuXG4gIC8vIG92ZXJ3cml0ZSB3aWR0aCBhbmQgaGVpZ2h0IGlmIHdlIGNhbiBnZXQgaXQgZnJvbSBzdHlsZVxuICB2YXIgc3R5bGVXaWR0aCA9IGdldFN0eWxlU2l6ZSggc3R5bGUud2lkdGggKTtcbiAgaWYgKCBzdHlsZVdpZHRoICE9PSBmYWxzZSApIHtcbiAgICBzaXplLndpZHRoID0gc3R5bGVXaWR0aCArXG4gICAgICAvLyBhZGQgcGFkZGluZyBhbmQgYm9yZGVyIHVubGVzcyBpdCdzIGFscmVhZHkgaW5jbHVkaW5nIGl0XG4gICAgICAoIGlzQm9yZGVyQm94U2l6ZU91dGVyID8gMCA6IHBhZGRpbmdXaWR0aCArIGJvcmRlcldpZHRoICk7XG4gIH1cblxuICB2YXIgc3R5bGVIZWlnaHQgPSBnZXRTdHlsZVNpemUoIHN0eWxlLmhlaWdodCApO1xuICBpZiAoIHN0eWxlSGVpZ2h0ICE9PSBmYWxzZSApIHtcbiAgICBzaXplLmhlaWdodCA9IHN0eWxlSGVpZ2h0ICtcbiAgICAgIC8vIGFkZCBwYWRkaW5nIGFuZCBib3JkZXIgdW5sZXNzIGl0J3MgYWxyZWFkeSBpbmNsdWRpbmcgaXRcbiAgICAgICggaXNCb3JkZXJCb3hTaXplT3V0ZXIgPyAwIDogcGFkZGluZ0hlaWdodCArIGJvcmRlckhlaWdodCApO1xuICB9XG5cbiAgc2l6ZS5pbm5lcldpZHRoID0gc2l6ZS53aWR0aCAtICggcGFkZGluZ1dpZHRoICsgYm9yZGVyV2lkdGggKTtcbiAgc2l6ZS5pbm5lckhlaWdodCA9IHNpemUuaGVpZ2h0IC0gKCBwYWRkaW5nSGVpZ2h0ICsgYm9yZGVySGVpZ2h0ICk7XG5cbiAgc2l6ZS5vdXRlcldpZHRoID0gc2l6ZS53aWR0aCArIG1hcmdpbldpZHRoO1xuICBzaXplLm91dGVySGVpZ2h0ID0gc2l6ZS5oZWlnaHQgKyBtYXJnaW5IZWlnaHQ7XG5cbiAgcmV0dXJuIHNpemU7XG59XG5cbnJldHVybiBnZXRTaXplO1xuXG59KTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2dldC1zaXplL2dldC1zaXplLmpzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBtYXRjaGVzU2VsZWN0b3IgdjIuMC4xXG4gKiBtYXRjaGVzU2VsZWN0b3IoIGVsZW1lbnQsICcuc2VsZWN0b3InIClcbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgc3RyaWN0OiB0cnVlLCB1bmRlZjogdHJ1ZSwgdW51c2VkOiB0cnVlICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLypnbG9iYWwgZGVmaW5lOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuICAndXNlIHN0cmljdCc7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggZmFjdG9yeSApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cubWF0Y2hlc1NlbGVjdG9yID0gZmFjdG9yeSgpO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBtYXRjaGVzTWV0aG9kID0gKCBmdW5jdGlvbigpIHtcbiAgICB2YXIgRWxlbVByb3RvID0gRWxlbWVudC5wcm90b3R5cGU7XG4gICAgLy8gY2hlY2sgZm9yIHRoZSBzdGFuZGFyZCBtZXRob2QgbmFtZSBmaXJzdFxuICAgIGlmICggRWxlbVByb3RvLm1hdGNoZXMgKSB7XG4gICAgICByZXR1cm4gJ21hdGNoZXMnO1xuICAgIH1cbiAgICAvLyBjaGVjayB1bi1wcmVmaXhlZFxuICAgIGlmICggRWxlbVByb3RvLm1hdGNoZXNTZWxlY3RvciApIHtcbiAgICAgIHJldHVybiAnbWF0Y2hlc1NlbGVjdG9yJztcbiAgICB9XG4gICAgLy8gY2hlY2sgdmVuZG9yIHByZWZpeGVzXG4gICAgdmFyIHByZWZpeGVzID0gWyAnd2Via2l0JywgJ21veicsICdtcycsICdvJyBdO1xuXG4gICAgZm9yICggdmFyIGk9MDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSsrICkge1xuICAgICAgdmFyIHByZWZpeCA9IHByZWZpeGVzW2ldO1xuICAgICAgdmFyIG1ldGhvZCA9IHByZWZpeCArICdNYXRjaGVzU2VsZWN0b3InO1xuICAgICAgaWYgKCBFbGVtUHJvdG9bIG1ldGhvZCBdICkge1xuICAgICAgICByZXR1cm4gbWV0aG9kO1xuICAgICAgfVxuICAgIH1cbiAgfSkoKTtcblxuICByZXR1cm4gZnVuY3Rpb24gbWF0Y2hlc1NlbGVjdG9yKCBlbGVtLCBzZWxlY3RvciApIHtcbiAgICByZXR1cm4gZWxlbVsgbWF0Y2hlc01ldGhvZCBdKCBzZWxlY3RvciApO1xuICB9O1xuXG59KSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kZXNhbmRyby1tYXRjaGVzLXNlbGVjdG9yL21hdGNoZXMtc2VsZWN0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEZpenp5IFVJIHV0aWxzIHYyLjAuMlxuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCB1bmRlZjogdHJ1ZSwgdW51c2VkOiB0cnVlLCBzdHJpY3Q6IHRydWUgKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLypqc2hpbnQgc3RyaWN0OiBmYWxzZSAqLyAvKmdsb2JhbHMgZGVmaW5lLCBtb2R1bGUsIHJlcXVpcmUgKi9cblxuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgJ2Rlc2FuZHJvLW1hdGNoZXMtc2VsZWN0b3IvbWF0Y2hlcy1zZWxlY3RvcidcbiAgICBdLCBmdW5jdGlvbiggbWF0Y2hlc1NlbGVjdG9yICkge1xuICAgICAgcmV0dXJuIGZhY3RvcnkoIHdpbmRvdywgbWF0Y2hlc1NlbGVjdG9yICk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICByZXF1aXJlKCdkZXNhbmRyby1tYXRjaGVzLXNlbGVjdG9yJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93LmZpenp5VUlVdGlscyA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICB3aW5kb3cubWF0Y2hlc1NlbGVjdG9yXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgbWF0Y2hlc1NlbGVjdG9yICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHt9O1xuXG4vLyAtLS0tLSBleHRlbmQgLS0tLS0gLy9cblxuLy8gZXh0ZW5kcyBvYmplY3RzXG51dGlscy5leHRlbmQgPSBmdW5jdGlvbiggYSwgYiApIHtcbiAgZm9yICggdmFyIHByb3AgaW4gYiApIHtcbiAgICBhWyBwcm9wIF0gPSBiWyBwcm9wIF07XG4gIH1cbiAgcmV0dXJuIGE7XG59O1xuXG4vLyAtLS0tLSBtb2R1bG8gLS0tLS0gLy9cblxudXRpbHMubW9kdWxvID0gZnVuY3Rpb24oIG51bSwgZGl2ICkge1xuICByZXR1cm4gKCAoIG51bSAlIGRpdiApICsgZGl2ICkgJSBkaXY7XG59O1xuXG4vLyAtLS0tLSBtYWtlQXJyYXkgLS0tLS0gLy9cblxuLy8gdHVybiBlbGVtZW50IG9yIG5vZGVMaXN0IGludG8gYW4gYXJyYXlcbnV0aWxzLm1ha2VBcnJheSA9IGZ1bmN0aW9uKCBvYmogKSB7XG4gIHZhciBhcnkgPSBbXTtcbiAgaWYgKCBBcnJheS5pc0FycmF5KCBvYmogKSApIHtcbiAgICAvLyB1c2Ugb2JqZWN0IGlmIGFscmVhZHkgYW4gYXJyYXlcbiAgICBhcnkgPSBvYmo7XG4gIH0gZWxzZSBpZiAoIG9iaiAmJiB0eXBlb2Ygb2JqLmxlbmd0aCA9PSAnbnVtYmVyJyApIHtcbiAgICAvLyBjb252ZXJ0IG5vZGVMaXN0IHRvIGFycmF5XG4gICAgZm9yICggdmFyIGk9MDsgaSA8IG9iai5sZW5ndGg7IGkrKyApIHtcbiAgICAgIGFyeS5wdXNoKCBvYmpbaV0gKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gYXJyYXkgb2Ygc2luZ2xlIGluZGV4XG4gICAgYXJ5LnB1c2goIG9iaiApO1xuICB9XG4gIHJldHVybiBhcnk7XG59O1xuXG4vLyAtLS0tLSByZW1vdmVGcm9tIC0tLS0tIC8vXG5cbnV0aWxzLnJlbW92ZUZyb20gPSBmdW5jdGlvbiggYXJ5LCBvYmogKSB7XG4gIHZhciBpbmRleCA9IGFyeS5pbmRleE9mKCBvYmogKTtcbiAgaWYgKCBpbmRleCAhPSAtMSApIHtcbiAgICBhcnkuc3BsaWNlKCBpbmRleCwgMSApO1xuICB9XG59O1xuXG4vLyAtLS0tLSBnZXRQYXJlbnQgLS0tLS0gLy9cblxudXRpbHMuZ2V0UGFyZW50ID0gZnVuY3Rpb24oIGVsZW0sIHNlbGVjdG9yICkge1xuICB3aGlsZSAoIGVsZW0gIT0gZG9jdW1lbnQuYm9keSApIHtcbiAgICBlbGVtID0gZWxlbS5wYXJlbnROb2RlO1xuICAgIGlmICggbWF0Y2hlc1NlbGVjdG9yKCBlbGVtLCBzZWxlY3RvciApICkge1xuICAgICAgcmV0dXJuIGVsZW07XG4gICAgfVxuICB9XG59O1xuXG4vLyAtLS0tLSBnZXRRdWVyeUVsZW1lbnQgLS0tLS0gLy9cblxuLy8gdXNlIGVsZW1lbnQgYXMgc2VsZWN0b3Igc3RyaW5nXG51dGlscy5nZXRRdWVyeUVsZW1lbnQgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgaWYgKCB0eXBlb2YgZWxlbSA9PSAnc3RyaW5nJyApIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggZWxlbSApO1xuICB9XG4gIHJldHVybiBlbGVtO1xufTtcblxuLy8gLS0tLS0gaGFuZGxlRXZlbnQgLS0tLS0gLy9cblxuLy8gZW5hYmxlIC5vbnR5cGUgdG8gdHJpZ2dlciBmcm9tIC5hZGRFdmVudExpc3RlbmVyKCBlbGVtLCAndHlwZScgKVxudXRpbHMuaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHZhciBtZXRob2QgPSAnb24nICsgZXZlbnQudHlwZTtcbiAgaWYgKCB0aGlzWyBtZXRob2QgXSApIHtcbiAgICB0aGlzWyBtZXRob2QgXSggZXZlbnQgKTtcbiAgfVxufTtcblxuLy8gLS0tLS0gZmlsdGVyRmluZEVsZW1lbnRzIC0tLS0tIC8vXG5cbnV0aWxzLmZpbHRlckZpbmRFbGVtZW50cyA9IGZ1bmN0aW9uKCBlbGVtcywgc2VsZWN0b3IgKSB7XG4gIC8vIG1ha2UgYXJyYXkgb2YgZWxlbXNcbiAgZWxlbXMgPSB1dGlscy5tYWtlQXJyYXkoIGVsZW1zICk7XG4gIHZhciBmZkVsZW1zID0gW107XG5cbiAgZWxlbXMuZm9yRWFjaCggZnVuY3Rpb24oIGVsZW0gKSB7XG4gICAgLy8gY2hlY2sgdGhhdCBlbGVtIGlzIGFuIGFjdHVhbCBlbGVtZW50XG4gICAgaWYgKCAhKCBlbGVtIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgKSApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gYWRkIGVsZW0gaWYgbm8gc2VsZWN0b3JcbiAgICBpZiAoICFzZWxlY3RvciApIHtcbiAgICAgIGZmRWxlbXMucHVzaCggZWxlbSApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBmaWx0ZXIgJiBmaW5kIGl0ZW1zIGlmIHdlIGhhdmUgYSBzZWxlY3RvclxuICAgIC8vIGZpbHRlclxuICAgIGlmICggbWF0Y2hlc1NlbGVjdG9yKCBlbGVtLCBzZWxlY3RvciApICkge1xuICAgICAgZmZFbGVtcy5wdXNoKCBlbGVtICk7XG4gICAgfVxuICAgIC8vIGZpbmQgY2hpbGRyZW5cbiAgICB2YXIgY2hpbGRFbGVtcyA9IGVsZW0ucXVlcnlTZWxlY3RvckFsbCggc2VsZWN0b3IgKTtcbiAgICAvLyBjb25jYXQgY2hpbGRFbGVtcyB0byBmaWx0ZXJGb3VuZCBhcnJheVxuICAgIGZvciAoIHZhciBpPTA7IGkgPCBjaGlsZEVsZW1zLmxlbmd0aDsgaSsrICkge1xuICAgICAgZmZFbGVtcy5wdXNoKCBjaGlsZEVsZW1zW2ldICk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZmZFbGVtcztcbn07XG5cbi8vIC0tLS0tIGRlYm91bmNlTWV0aG9kIC0tLS0tIC8vXG5cbnV0aWxzLmRlYm91bmNlTWV0aG9kID0gZnVuY3Rpb24oIF9jbGFzcywgbWV0aG9kTmFtZSwgdGhyZXNob2xkICkge1xuICAvLyBvcmlnaW5hbCBtZXRob2RcbiAgdmFyIG1ldGhvZCA9IF9jbGFzcy5wcm90b3R5cGVbIG1ldGhvZE5hbWUgXTtcbiAgdmFyIHRpbWVvdXROYW1lID0gbWV0aG9kTmFtZSArICdUaW1lb3V0JztcblxuICBfY2xhc3MucHJvdG90eXBlWyBtZXRob2ROYW1lIF0gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdGltZW91dCA9IHRoaXNbIHRpbWVvdXROYW1lIF07XG4gICAgaWYgKCB0aW1lb3V0ICkge1xuICAgICAgY2xlYXJUaW1lb3V0KCB0aW1lb3V0ICk7XG4gICAgfVxuICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuXG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB0aGlzWyB0aW1lb3V0TmFtZSBdID0gc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICBtZXRob2QuYXBwbHkoIF90aGlzLCBhcmdzICk7XG4gICAgICBkZWxldGUgX3RoaXNbIHRpbWVvdXROYW1lIF07XG4gICAgfSwgdGhyZXNob2xkIHx8IDEwMCApO1xuICB9O1xufTtcblxuLy8gLS0tLS0gZG9jUmVhZHkgLS0tLS0gLy9cblxudXRpbHMuZG9jUmVhZHkgPSBmdW5jdGlvbiggY2FsbGJhY2sgKSB7XG4gIHZhciByZWFkeVN0YXRlID0gZG9jdW1lbnQucmVhZHlTdGF0ZTtcbiAgaWYgKCByZWFkeVN0YXRlID09ICdjb21wbGV0ZScgfHwgcmVhZHlTdGF0ZSA9PSAnaW50ZXJhY3RpdmUnICkge1xuICAgIGNhbGxiYWNrKCk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ0RPTUNvbnRlbnRMb2FkZWQnLCBjYWxsYmFjayApO1xuICB9XG59O1xuXG4vLyAtLS0tLSBodG1sSW5pdCAtLS0tLSAvL1xuXG4vLyBodHRwOi8vamFtZXNyb2JlcnRzLm5hbWUvYmxvZy8yMDEwLzAyLzIyL3N0cmluZy1mdW5jdGlvbnMtZm9yLWphdmFzY3JpcHQtdHJpbS10by1jYW1lbC1jYXNlLXRvLWRhc2hlZC1hbmQtdG8tdW5kZXJzY29yZS9cbnV0aWxzLnRvRGFzaGVkID0gZnVuY3Rpb24oIHN0ciApIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKCAvKC4pKFtBLVpdKS9nLCBmdW5jdGlvbiggbWF0Y2gsICQxLCAkMiApIHtcbiAgICByZXR1cm4gJDEgKyAnLScgKyAkMjtcbiAgfSkudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBjb25zb2xlID0gd2luZG93LmNvbnNvbGU7XG4vKipcbiAqIGFsbG93IHVzZXIgdG8gaW5pdGlhbGl6ZSBjbGFzc2VzIHZpYSBbZGF0YS1uYW1lc3BhY2VdIG9yIC5qcy1uYW1lc3BhY2UgY2xhc3NcbiAqIGh0bWxJbml0KCBXaWRnZXQsICd3aWRnZXROYW1lJyApXG4gKiBvcHRpb25zIGFyZSBwYXJzZWQgZnJvbSBkYXRhLW5hbWVzcGFjZS1vcHRpb25zXG4gKi9cbnV0aWxzLmh0bWxJbml0ID0gZnVuY3Rpb24oIFdpZGdldENsYXNzLCBuYW1lc3BhY2UgKSB7XG4gIHV0aWxzLmRvY1JlYWR5KCBmdW5jdGlvbigpIHtcbiAgICB2YXIgZGFzaGVkTmFtZXNwYWNlID0gdXRpbHMudG9EYXNoZWQoIG5hbWVzcGFjZSApO1xuICAgIHZhciBkYXRhQXR0ciA9ICdkYXRhLScgKyBkYXNoZWROYW1lc3BhY2U7XG4gICAgdmFyIGRhdGFBdHRyRWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnWycgKyBkYXRhQXR0ciArICddJyApO1xuICAgIHZhciBqc0Rhc2hFbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcuanMtJyArIGRhc2hlZE5hbWVzcGFjZSApO1xuICAgIHZhciBlbGVtcyA9IHV0aWxzLm1ha2VBcnJheSggZGF0YUF0dHJFbGVtcyApXG4gICAgICAuY29uY2F0KCB1dGlscy5tYWtlQXJyYXkoIGpzRGFzaEVsZW1zICkgKTtcbiAgICB2YXIgZGF0YU9wdGlvbnNBdHRyID0gZGF0YUF0dHIgKyAnLW9wdGlvbnMnO1xuICAgIHZhciBqUXVlcnkgPSB3aW5kb3cualF1ZXJ5O1xuXG4gICAgZWxlbXMuZm9yRWFjaCggZnVuY3Rpb24oIGVsZW0gKSB7XG4gICAgICB2YXIgYXR0ciA9IGVsZW0uZ2V0QXR0cmlidXRlKCBkYXRhQXR0ciApIHx8XG4gICAgICAgIGVsZW0uZ2V0QXR0cmlidXRlKCBkYXRhT3B0aW9uc0F0dHIgKTtcbiAgICAgIHZhciBvcHRpb25zO1xuICAgICAgdHJ5IHtcbiAgICAgICAgb3B0aW9ucyA9IGF0dHIgJiYgSlNPTi5wYXJzZSggYXR0ciApO1xuICAgICAgfSBjYXRjaCAoIGVycm9yICkge1xuICAgICAgICAvLyBsb2cgZXJyb3IsIGRvIG5vdCBpbml0aWFsaXplXG4gICAgICAgIGlmICggY29uc29sZSApIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCAnRXJyb3IgcGFyc2luZyAnICsgZGF0YUF0dHIgKyAnIG9uICcgKyBlbGVtLmNsYXNzTmFtZSArXG4gICAgICAgICAgJzogJyArIGVycm9yICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gaW5pdGlhbGl6ZVxuICAgICAgdmFyIGluc3RhbmNlID0gbmV3IFdpZGdldENsYXNzKCBlbGVtLCBvcHRpb25zICk7XG4gICAgICAvLyBtYWtlIGF2YWlsYWJsZSB2aWEgJCgpLmRhdGEoJ2xheW91dG5hbWUnKVxuICAgICAgaWYgKCBqUXVlcnkgKSB7XG4gICAgICAgIGpRdWVyeS5kYXRhKCBlbGVtLCBuYW1lc3BhY2UsIGluc3RhbmNlICk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgfSk7XG59O1xuXG4vLyAtLS0tLSAgLS0tLS0gLy9cblxucmV0dXJuIHV0aWxzO1xuXG59KSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9maXp6eS11aS11dGlscy91dGlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiFcbiAqIE91dGxheWVyIHYyLjEuMFxuICogdGhlIGJyYWlucyBhbmQgZ3V0cyBvZiBhIGxheW91dCBsaWJyYXJ5XG4gKiBNSVQgbGljZW5zZVxuICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi8gLyogZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgcmVxdWlyZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRCAtIFJlcXVpcmVKU1xuICAgIGRlZmluZSggW1xuICAgICAgICAnZXYtZW1pdHRlci9ldi1lbWl0dGVyJyxcbiAgICAgICAgJ2dldC1zaXplL2dldC1zaXplJyxcbiAgICAgICAgJ2Zpenp5LXVpLXV0aWxzL3V0aWxzJyxcbiAgICAgICAgJy4vaXRlbSdcbiAgICAgIF0sXG4gICAgICBmdW5jdGlvbiggRXZFbWl0dGVyLCBnZXRTaXplLCB1dGlscywgSXRlbSApIHtcbiAgICAgICAgcmV0dXJuIGZhY3RvcnkoIHdpbmRvdywgRXZFbWl0dGVyLCBnZXRTaXplLCB1dGlscywgSXRlbSk7XG4gICAgICB9XG4gICAgKTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KUyAtIEJyb3dzZXJpZnksIFdlYnBhY2tcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICByZXF1aXJlKCdldi1lbWl0dGVyJyksXG4gICAgICByZXF1aXJlKCdnZXQtc2l6ZScpLFxuICAgICAgcmVxdWlyZSgnZml6enktdWktdXRpbHMnKSxcbiAgICAgIHJlcXVpcmUoJy4vaXRlbScpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5PdXRsYXllciA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICB3aW5kb3cuRXZFbWl0dGVyLFxuICAgICAgd2luZG93LmdldFNpemUsXG4gICAgICB3aW5kb3cuZml6enlVSVV0aWxzLFxuICAgICAgd2luZG93Lk91dGxheWVyLkl0ZW1cbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBFdkVtaXR0ZXIsIGdldFNpemUsIHV0aWxzLCBJdGVtICkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLSB2YXJzIC0tLS0tIC8vXG5cbnZhciBjb25zb2xlID0gd2luZG93LmNvbnNvbGU7XG52YXIgalF1ZXJ5ID0gd2luZG93LmpRdWVyeTtcbnZhciBub29wID0gZnVuY3Rpb24oKSB7fTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gT3V0bGF5ZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLy8gZ2xvYmFsbHkgdW5pcXVlIGlkZW50aWZpZXJzXG52YXIgR1VJRCA9IDA7XG4vLyBpbnRlcm5hbCBzdG9yZSBvZiBhbGwgT3V0bGF5ZXIgaW50YW5jZXNcbnZhciBpbnN0YW5jZXMgPSB7fTtcblxuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudCwgU3RyaW5nfSBlbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIE91dGxheWVyKCBlbGVtZW50LCBvcHRpb25zICkge1xuICB2YXIgcXVlcnlFbGVtZW50ID0gdXRpbHMuZ2V0UXVlcnlFbGVtZW50KCBlbGVtZW50ICk7XG4gIGlmICggIXF1ZXJ5RWxlbWVudCApIHtcbiAgICBpZiAoIGNvbnNvbGUgKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCAnQmFkIGVsZW1lbnQgZm9yICcgKyB0aGlzLmNvbnN0cnVjdG9yLm5hbWVzcGFjZSArXG4gICAgICAgICc6ICcgKyAoIHF1ZXJ5RWxlbWVudCB8fCBlbGVtZW50ICkgKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuZWxlbWVudCA9IHF1ZXJ5RWxlbWVudDtcbiAgLy8gYWRkIGpRdWVyeVxuICBpZiAoIGpRdWVyeSApIHtcbiAgICB0aGlzLiRlbGVtZW50ID0galF1ZXJ5KCB0aGlzLmVsZW1lbnQgKTtcbiAgfVxuXG4gIC8vIG9wdGlvbnNcbiAgdGhpcy5vcHRpb25zID0gdXRpbHMuZXh0ZW5kKCB7fSwgdGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0cyApO1xuICB0aGlzLm9wdGlvbiggb3B0aW9ucyApO1xuXG4gIC8vIGFkZCBpZCBmb3IgT3V0bGF5ZXIuZ2V0RnJvbUVsZW1lbnRcbiAgdmFyIGlkID0gKytHVUlEO1xuICB0aGlzLmVsZW1lbnQub3V0bGF5ZXJHVUlEID0gaWQ7IC8vIGV4cGFuZG9cbiAgaW5zdGFuY2VzWyBpZCBdID0gdGhpczsgLy8gYXNzb2NpYXRlIHZpYSBpZFxuXG4gIC8vIGtpY2sgaXQgb2ZmXG4gIHRoaXMuX2NyZWF0ZSgpO1xuXG4gIHZhciBpc0luaXRMYXlvdXQgPSB0aGlzLl9nZXRPcHRpb24oJ2luaXRMYXlvdXQnKTtcbiAgaWYgKCBpc0luaXRMYXlvdXQgKSB7XG4gICAgdGhpcy5sYXlvdXQoKTtcbiAgfVxufVxuXG4vLyBzZXR0aW5ncyBhcmUgZm9yIGludGVybmFsIHVzZSBvbmx5XG5PdXRsYXllci5uYW1lc3BhY2UgPSAnb3V0bGF5ZXInO1xuT3V0bGF5ZXIuSXRlbSA9IEl0ZW07XG5cbi8vIGRlZmF1bHQgb3B0aW9uc1xuT3V0bGF5ZXIuZGVmYXVsdHMgPSB7XG4gIGNvbnRhaW5lclN0eWxlOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfSxcbiAgaW5pdExheW91dDogdHJ1ZSxcbiAgb3JpZ2luTGVmdDogdHJ1ZSxcbiAgb3JpZ2luVG9wOiB0cnVlLFxuICByZXNpemU6IHRydWUsXG4gIHJlc2l6ZUNvbnRhaW5lcjogdHJ1ZSxcbiAgLy8gaXRlbSBvcHRpb25zXG4gIHRyYW5zaXRpb25EdXJhdGlvbjogJzAuNHMnLFxuICBoaWRkZW5TdHlsZToge1xuICAgIG9wYWNpdHk6IDAsXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMC4wMDEpJ1xuICB9LFxuICB2aXNpYmxlU3R5bGU6IHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ1xuICB9XG59O1xuXG52YXIgcHJvdG8gPSBPdXRsYXllci5wcm90b3R5cGU7XG4vLyBpbmhlcml0IEV2RW1pdHRlclxudXRpbHMuZXh0ZW5kKCBwcm90bywgRXZFbWl0dGVyLnByb3RvdHlwZSApO1xuXG4vKipcbiAqIHNldCBvcHRpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICovXG5wcm90by5vcHRpb24gPSBmdW5jdGlvbiggb3B0cyApIHtcbiAgdXRpbHMuZXh0ZW5kKCB0aGlzLm9wdGlvbnMsIG9wdHMgKTtcbn07XG5cbi8qKlxuICogZ2V0IGJhY2t3YXJkcyBjb21wYXRpYmxlIG9wdGlvbiB2YWx1ZSwgY2hlY2sgb2xkIG5hbWVcbiAqL1xucHJvdG8uX2dldE9wdGlvbiA9IGZ1bmN0aW9uKCBvcHRpb24gKSB7XG4gIHZhciBvbGRPcHRpb24gPSB0aGlzLmNvbnN0cnVjdG9yLmNvbXBhdE9wdGlvbnNbIG9wdGlvbiBdO1xuICByZXR1cm4gb2xkT3B0aW9uICYmIHRoaXMub3B0aW9uc1sgb2xkT3B0aW9uIF0gIT09IHVuZGVmaW5lZCA/XG4gICAgdGhpcy5vcHRpb25zWyBvbGRPcHRpb24gXSA6IHRoaXMub3B0aW9uc1sgb3B0aW9uIF07XG59O1xuXG5PdXRsYXllci5jb21wYXRPcHRpb25zID0ge1xuICAvLyBjdXJyZW50TmFtZTogb2xkTmFtZVxuICBpbml0TGF5b3V0OiAnaXNJbml0TGF5b3V0JyxcbiAgaG9yaXpvbnRhbDogJ2lzSG9yaXpvbnRhbCcsXG4gIGxheW91dEluc3RhbnQ6ICdpc0xheW91dEluc3RhbnQnLFxuICBvcmlnaW5MZWZ0OiAnaXNPcmlnaW5MZWZ0JyxcbiAgb3JpZ2luVG9wOiAnaXNPcmlnaW5Ub3AnLFxuICByZXNpemU6ICdpc1Jlc2l6ZUJvdW5kJyxcbiAgcmVzaXplQ29udGFpbmVyOiAnaXNSZXNpemluZ0NvbnRhaW5lcidcbn07XG5cbnByb3RvLl9jcmVhdGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gZ2V0IGl0ZW1zIGZyb20gY2hpbGRyZW5cbiAgdGhpcy5yZWxvYWRJdGVtcygpO1xuICAvLyBlbGVtZW50cyB0aGF0IGFmZmVjdCBsYXlvdXQsIGJ1dCBhcmUgbm90IGxhaWQgb3V0XG4gIHRoaXMuc3RhbXBzID0gW107XG4gIHRoaXMuc3RhbXAoIHRoaXMub3B0aW9ucy5zdGFtcCApO1xuICAvLyBzZXQgY29udGFpbmVyIHN0eWxlXG4gIHV0aWxzLmV4dGVuZCggdGhpcy5lbGVtZW50LnN0eWxlLCB0aGlzLm9wdGlvbnMuY29udGFpbmVyU3R5bGUgKTtcblxuICAvLyBiaW5kIHJlc2l6ZSBtZXRob2RcbiAgdmFyIGNhbkJpbmRSZXNpemUgPSB0aGlzLl9nZXRPcHRpb24oJ3Jlc2l6ZScpO1xuICBpZiAoIGNhbkJpbmRSZXNpemUgKSB7XG4gICAgdGhpcy5iaW5kUmVzaXplKCk7XG4gIH1cbn07XG5cbi8vIGdvZXMgdGhyb3VnaCBhbGwgY2hpbGRyZW4gYWdhaW4gYW5kIGdldHMgYnJpY2tzIGluIHByb3BlciBvcmRlclxucHJvdG8ucmVsb2FkSXRlbXMgPSBmdW5jdGlvbigpIHtcbiAgLy8gY29sbGVjdGlvbiBvZiBpdGVtIGVsZW1lbnRzXG4gIHRoaXMuaXRlbXMgPSB0aGlzLl9pdGVtaXplKCB0aGlzLmVsZW1lbnQuY2hpbGRyZW4gKTtcbn07XG5cblxuLyoqXG4gKiB0dXJuIGVsZW1lbnRzIGludG8gT3V0bGF5ZXIuSXRlbXMgdG8gYmUgdXNlZCBpbiBsYXlvdXRcbiAqIEBwYXJhbSB7QXJyYXkgb3IgTm9kZUxpc3Qgb3IgSFRNTEVsZW1lbnR9IGVsZW1zXG4gKiBAcmV0dXJucyB7QXJyYXl9IGl0ZW1zIC0gY29sbGVjdGlvbiBvZiBuZXcgT3V0bGF5ZXIgSXRlbXNcbiAqL1xucHJvdG8uX2l0ZW1pemUgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG5cbiAgdmFyIGl0ZW1FbGVtcyA9IHRoaXMuX2ZpbHRlckZpbmRJdGVtRWxlbWVudHMoIGVsZW1zICk7XG4gIHZhciBJdGVtID0gdGhpcy5jb25zdHJ1Y3Rvci5JdGVtO1xuXG4gIC8vIGNyZWF0ZSBuZXcgT3V0bGF5ZXIgSXRlbXMgZm9yIGNvbGxlY3Rpb25cbiAgdmFyIGl0ZW1zID0gW107XG4gIGZvciAoIHZhciBpPTA7IGkgPCBpdGVtRWxlbXMubGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIGVsZW0gPSBpdGVtRWxlbXNbaV07XG4gICAgdmFyIGl0ZW0gPSBuZXcgSXRlbSggZWxlbSwgdGhpcyApO1xuICAgIGl0ZW1zLnB1c2goIGl0ZW0gKTtcbiAgfVxuXG4gIHJldHVybiBpdGVtcztcbn07XG5cbi8qKlxuICogZ2V0IGl0ZW0gZWxlbWVudHMgdG8gYmUgdXNlZCBpbiBsYXlvdXRcbiAqIEBwYXJhbSB7QXJyYXkgb3IgTm9kZUxpc3Qgb3IgSFRNTEVsZW1lbnR9IGVsZW1zXG4gKiBAcmV0dXJucyB7QXJyYXl9IGl0ZW1zIC0gaXRlbSBlbGVtZW50c1xuICovXG5wcm90by5fZmlsdGVyRmluZEl0ZW1FbGVtZW50cyA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgcmV0dXJuIHV0aWxzLmZpbHRlckZpbmRFbGVtZW50cyggZWxlbXMsIHRoaXMub3B0aW9ucy5pdGVtU2VsZWN0b3IgKTtcbn07XG5cbi8qKlxuICogZ2V0dGVyIG1ldGhvZCBmb3IgZ2V0dGluZyBpdGVtIGVsZW1lbnRzXG4gKiBAcmV0dXJucyB7QXJyYXl9IGVsZW1zIC0gY29sbGVjdGlvbiBvZiBpdGVtIGVsZW1lbnRzXG4gKi9cbnByb3RvLmdldEl0ZW1FbGVtZW50cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5pdGVtcy5tYXAoIGZ1bmN0aW9uKCBpdGVtICkge1xuICAgIHJldHVybiBpdGVtLmVsZW1lbnQ7XG4gIH0pO1xufTtcblxuLy8gLS0tLS0gaW5pdCAmIGxheW91dCAtLS0tLSAvL1xuXG4vKipcbiAqIGxheXMgb3V0IGFsbCBpdGVtc1xuICovXG5wcm90by5sYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fcmVzZXRMYXlvdXQoKTtcbiAgdGhpcy5fbWFuYWdlU3RhbXBzKCk7XG5cbiAgLy8gZG9uJ3QgYW5pbWF0ZSBmaXJzdCBsYXlvdXRcbiAgdmFyIGxheW91dEluc3RhbnQgPSB0aGlzLl9nZXRPcHRpb24oJ2xheW91dEluc3RhbnQnKTtcbiAgdmFyIGlzSW5zdGFudCA9IGxheW91dEluc3RhbnQgIT09IHVuZGVmaW5lZCA/XG4gICAgbGF5b3V0SW5zdGFudCA6ICF0aGlzLl9pc0xheW91dEluaXRlZDtcbiAgdGhpcy5sYXlvdXRJdGVtcyggdGhpcy5pdGVtcywgaXNJbnN0YW50ICk7XG5cbiAgLy8gZmxhZyBmb3IgaW5pdGFsaXplZFxuICB0aGlzLl9pc0xheW91dEluaXRlZCA9IHRydWU7XG59O1xuXG4vLyBfaW5pdCBpcyBhbGlhcyBmb3IgbGF5b3V0XG5wcm90by5faW5pdCA9IHByb3RvLmxheW91dDtcblxuLyoqXG4gKiBsb2dpYyBiZWZvcmUgYW55IG5ldyBsYXlvdXRcbiAqL1xucHJvdG8uX3Jlc2V0TGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZ2V0U2l6ZSgpO1xufTtcblxuXG5wcm90by5nZXRTaXplID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2l6ZSA9IGdldFNpemUoIHRoaXMuZWxlbWVudCApO1xufTtcblxuLyoqXG4gKiBnZXQgbWVhc3VyZW1lbnQgZnJvbSBvcHRpb24sIGZvciBjb2x1bW5XaWR0aCwgcm93SGVpZ2h0LCBndXR0ZXJcbiAqIGlmIG9wdGlvbiBpcyBTdHJpbmcgLT4gZ2V0IGVsZW1lbnQgZnJvbSBzZWxlY3RvciBzdHJpbmcsICYgZ2V0IHNpemUgb2YgZWxlbWVudFxuICogaWYgb3B0aW9uIGlzIEVsZW1lbnQgLT4gZ2V0IHNpemUgb2YgZWxlbWVudFxuICogZWxzZSB1c2Ugb3B0aW9uIGFzIGEgbnVtYmVyXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1lYXN1cmVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc2l6ZSAtIHdpZHRoIG9yIGhlaWdodFxuICogQHByaXZhdGVcbiAqL1xucHJvdG8uX2dldE1lYXN1cmVtZW50ID0gZnVuY3Rpb24oIG1lYXN1cmVtZW50LCBzaXplICkge1xuICB2YXIgb3B0aW9uID0gdGhpcy5vcHRpb25zWyBtZWFzdXJlbWVudCBdO1xuICB2YXIgZWxlbTtcbiAgaWYgKCAhb3B0aW9uICkge1xuICAgIC8vIGRlZmF1bHQgdG8gMFxuICAgIHRoaXNbIG1lYXN1cmVtZW50IF0gPSAwO1xuICB9IGVsc2Uge1xuICAgIC8vIHVzZSBvcHRpb24gYXMgYW4gZWxlbWVudFxuICAgIGlmICggdHlwZW9mIG9wdGlvbiA9PSAnc3RyaW5nJyApIHtcbiAgICAgIGVsZW0gPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3Rvciggb3B0aW9uICk7XG4gICAgfSBlbHNlIGlmICggb3B0aW9uIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgKSB7XG4gICAgICBlbGVtID0gb3B0aW9uO1xuICAgIH1cbiAgICAvLyB1c2Ugc2l6ZSBvZiBlbGVtZW50LCBpZiBlbGVtZW50XG4gICAgdGhpc1sgbWVhc3VyZW1lbnQgXSA9IGVsZW0gPyBnZXRTaXplKCBlbGVtIClbIHNpemUgXSA6IG9wdGlvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBsYXlvdXQgYSBjb2xsZWN0aW9uIG9mIGl0ZW0gZWxlbWVudHNcbiAqIEBhcGkgcHVibGljXG4gKi9cbnByb3RvLmxheW91dEl0ZW1zID0gZnVuY3Rpb24oIGl0ZW1zLCBpc0luc3RhbnQgKSB7XG4gIGl0ZW1zID0gdGhpcy5fZ2V0SXRlbXNGb3JMYXlvdXQoIGl0ZW1zICk7XG5cbiAgdGhpcy5fbGF5b3V0SXRlbXMoIGl0ZW1zLCBpc0luc3RhbnQgKTtcblxuICB0aGlzLl9wb3N0TGF5b3V0KCk7XG59O1xuXG4vKipcbiAqIGdldCB0aGUgaXRlbXMgdG8gYmUgbGFpZCBvdXRcbiAqIHlvdSBtYXkgd2FudCB0byBza2lwIG92ZXIgc29tZSBpdGVtc1xuICogQHBhcmFtIHtBcnJheX0gaXRlbXNcbiAqIEByZXR1cm5zIHtBcnJheX0gaXRlbXNcbiAqL1xucHJvdG8uX2dldEl0ZW1zRm9yTGF5b3V0ID0gZnVuY3Rpb24oIGl0ZW1zICkge1xuICByZXR1cm4gaXRlbXMuZmlsdGVyKCBmdW5jdGlvbiggaXRlbSApIHtcbiAgICByZXR1cm4gIWl0ZW0uaXNJZ25vcmVkO1xuICB9KTtcbn07XG5cbi8qKlxuICogbGF5b3V0IGl0ZW1zXG4gKiBAcGFyYW0ge0FycmF5fSBpdGVtc1xuICogQHBhcmFtIHtCb29sZWFufSBpc0luc3RhbnRcbiAqL1xucHJvdG8uX2xheW91dEl0ZW1zID0gZnVuY3Rpb24oIGl0ZW1zLCBpc0luc3RhbnQgKSB7XG4gIHRoaXMuX2VtaXRDb21wbGV0ZU9uSXRlbXMoICdsYXlvdXQnLCBpdGVtcyApO1xuXG4gIGlmICggIWl0ZW1zIHx8ICFpdGVtcy5sZW5ndGggKSB7XG4gICAgLy8gbm8gaXRlbXMsIGVtaXQgZXZlbnQgd2l0aCBlbXB0eSBhcnJheVxuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBxdWV1ZSA9IFtdO1xuXG4gIGl0ZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBpdGVtICkge1xuICAgIC8vIGdldCB4L3kgb2JqZWN0IGZyb20gbWV0aG9kXG4gICAgdmFyIHBvc2l0aW9uID0gdGhpcy5fZ2V0SXRlbUxheW91dFBvc2l0aW9uKCBpdGVtICk7XG4gICAgLy8gZW5xdWV1ZVxuICAgIHBvc2l0aW9uLml0ZW0gPSBpdGVtO1xuICAgIHBvc2l0aW9uLmlzSW5zdGFudCA9IGlzSW5zdGFudCB8fCBpdGVtLmlzTGF5b3V0SW5zdGFudDtcbiAgICBxdWV1ZS5wdXNoKCBwb3NpdGlvbiApO1xuICB9LCB0aGlzICk7XG5cbiAgdGhpcy5fcHJvY2Vzc0xheW91dFF1ZXVlKCBxdWV1ZSApO1xufTtcblxuLyoqXG4gKiBnZXQgaXRlbSBsYXlvdXQgcG9zaXRpb25cbiAqIEBwYXJhbSB7T3V0bGF5ZXIuSXRlbX0gaXRlbVxuICogQHJldHVybnMge09iamVjdH0geCBhbmQgeSBwb3NpdGlvblxuICovXG5wcm90by5fZ2V0SXRlbUxheW91dFBvc2l0aW9uID0gZnVuY3Rpb24oIC8qIGl0ZW0gKi8gKSB7XG4gIHJldHVybiB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG59O1xuXG4vKipcbiAqIGl0ZXJhdGUgb3ZlciBhcnJheSBhbmQgcG9zaXRpb24gZWFjaCBpdGVtXG4gKiBSZWFzb24gYmVpbmcgLSBzZXBhcmF0aW5nIHRoaXMgbG9naWMgcHJldmVudHMgJ2xheW91dCBpbnZhbGlkYXRpb24nXG4gKiB0aHggQHBhdWxfaXJpc2hcbiAqIEBwYXJhbSB7QXJyYXl9IHF1ZXVlXG4gKi9cbnByb3RvLl9wcm9jZXNzTGF5b3V0UXVldWUgPSBmdW5jdGlvbiggcXVldWUgKSB7XG4gIHRoaXMudXBkYXRlU3RhZ2dlcigpO1xuICBxdWV1ZS5mb3JFYWNoKCBmdW5jdGlvbiggb2JqLCBpICkge1xuICAgIHRoaXMuX3Bvc2l0aW9uSXRlbSggb2JqLml0ZW0sIG9iai54LCBvYmoueSwgb2JqLmlzSW5zdGFudCwgaSApO1xuICB9LCB0aGlzICk7XG59O1xuXG4vLyBzZXQgc3RhZ2dlciBmcm9tIG9wdGlvbiBpbiBtaWxsaXNlY29uZHMgbnVtYmVyXG5wcm90by51cGRhdGVTdGFnZ2VyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzdGFnZ2VyID0gdGhpcy5vcHRpb25zLnN0YWdnZXI7XG4gIGlmICggc3RhZ2dlciA9PT0gbnVsbCB8fCBzdGFnZ2VyID09PSB1bmRlZmluZWQgKSB7XG4gICAgdGhpcy5zdGFnZ2VyID0gMDtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5zdGFnZ2VyID0gZ2V0TWlsbGlzZWNvbmRzKCBzdGFnZ2VyICk7XG4gIHJldHVybiB0aGlzLnN0YWdnZXI7XG59O1xuXG4vKipcbiAqIFNldHMgcG9zaXRpb24gb2YgaXRlbSBpbiBET01cbiAqIEBwYXJhbSB7T3V0bGF5ZXIuSXRlbX0gaXRlbVxuICogQHBhcmFtIHtOdW1iZXJ9IHggLSBob3Jpem9udGFsIHBvc2l0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0geSAtIHZlcnRpY2FsIHBvc2l0aW9uXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzSW5zdGFudCAtIGRpc2FibGVzIHRyYW5zaXRpb25zXG4gKi9cbnByb3RvLl9wb3NpdGlvbkl0ZW0gPSBmdW5jdGlvbiggaXRlbSwgeCwgeSwgaXNJbnN0YW50LCBpICkge1xuICBpZiAoIGlzSW5zdGFudCApIHtcbiAgICAvLyBpZiBub3QgdHJhbnNpdGlvbiwganVzdCBzZXQgQ1NTXG4gICAgaXRlbS5nb1RvKCB4LCB5ICk7XG4gIH0gZWxzZSB7XG4gICAgaXRlbS5zdGFnZ2VyKCBpICogdGhpcy5zdGFnZ2VyICk7XG4gICAgaXRlbS5tb3ZlVG8oIHgsIHkgKTtcbiAgfVxufTtcblxuLyoqXG4gKiBBbnkgbG9naWMgeW91IHdhbnQgdG8gZG8gYWZ0ZXIgZWFjaCBsYXlvdXQsXG4gKiBpLmUuIHNpemUgdGhlIGNvbnRhaW5lclxuICovXG5wcm90by5fcG9zdExheW91dCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnJlc2l6ZUNvbnRhaW5lcigpO1xufTtcblxucHJvdG8ucmVzaXplQ29udGFpbmVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBpc1Jlc2l6aW5nQ29udGFpbmVyID0gdGhpcy5fZ2V0T3B0aW9uKCdyZXNpemVDb250YWluZXInKTtcbiAgaWYgKCAhaXNSZXNpemluZ0NvbnRhaW5lciApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIHNpemUgPSB0aGlzLl9nZXRDb250YWluZXJTaXplKCk7XG4gIGlmICggc2l6ZSApIHtcbiAgICB0aGlzLl9zZXRDb250YWluZXJNZWFzdXJlKCBzaXplLndpZHRoLCB0cnVlICk7XG4gICAgdGhpcy5fc2V0Q29udGFpbmVyTWVhc3VyZSggc2l6ZS5oZWlnaHQsIGZhbHNlICk7XG4gIH1cbn07XG5cbi8qKlxuICogU2V0cyB3aWR0aCBvciBoZWlnaHQgb2YgY29udGFpbmVyIGlmIHJldHVybmVkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBzaXplXG4gKiAgIEBwYXJhbSB7TnVtYmVyfSB3aWR0aFxuICogICBAcGFyYW0ge051bWJlcn0gaGVpZ2h0XG4gKi9cbnByb3RvLl9nZXRDb250YWluZXJTaXplID0gbm9vcDtcblxuLyoqXG4gKiBAcGFyYW0ge051bWJlcn0gbWVhc3VyZSAtIHNpemUgb2Ygd2lkdGggb3IgaGVpZ2h0XG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzV2lkdGhcbiAqL1xucHJvdG8uX3NldENvbnRhaW5lck1lYXN1cmUgPSBmdW5jdGlvbiggbWVhc3VyZSwgaXNXaWR0aCApIHtcbiAgaWYgKCBtZWFzdXJlID09PSB1bmRlZmluZWQgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGVsZW1TaXplID0gdGhpcy5zaXplO1xuICAvLyBhZGQgcGFkZGluZyBhbmQgYm9yZGVyIHdpZHRoIGlmIGJvcmRlciBib3hcbiAgaWYgKCBlbGVtU2l6ZS5pc0JvcmRlckJveCApIHtcbiAgICBtZWFzdXJlICs9IGlzV2lkdGggPyBlbGVtU2l6ZS5wYWRkaW5nTGVmdCArIGVsZW1TaXplLnBhZGRpbmdSaWdodCArXG4gICAgICBlbGVtU2l6ZS5ib3JkZXJMZWZ0V2lkdGggKyBlbGVtU2l6ZS5ib3JkZXJSaWdodFdpZHRoIDpcbiAgICAgIGVsZW1TaXplLnBhZGRpbmdCb3R0b20gKyBlbGVtU2l6ZS5wYWRkaW5nVG9wICtcbiAgICAgIGVsZW1TaXplLmJvcmRlclRvcFdpZHRoICsgZWxlbVNpemUuYm9yZGVyQm90dG9tV2lkdGg7XG4gIH1cblxuICBtZWFzdXJlID0gTWF0aC5tYXgoIG1lYXN1cmUsIDAgKTtcbiAgdGhpcy5lbGVtZW50LnN0eWxlWyBpc1dpZHRoID8gJ3dpZHRoJyA6ICdoZWlnaHQnIF0gPSBtZWFzdXJlICsgJ3B4Jztcbn07XG5cbi8qKlxuICogZW1pdCBldmVudENvbXBsZXRlIG9uIGEgY29sbGVjdGlvbiBvZiBpdGVtcyBldmVudHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWVcbiAqIEBwYXJhbSB7QXJyYXl9IGl0ZW1zIC0gT3V0bGF5ZXIuSXRlbXNcbiAqL1xucHJvdG8uX2VtaXRDb21wbGV0ZU9uSXRlbXMgPSBmdW5jdGlvbiggZXZlbnROYW1lLCBpdGVtcyApIHtcbiAgdmFyIF90aGlzID0gdGhpcztcbiAgZnVuY3Rpb24gb25Db21wbGV0ZSgpIHtcbiAgICBfdGhpcy5kaXNwYXRjaEV2ZW50KCBldmVudE5hbWUgKyAnQ29tcGxldGUnLCBudWxsLCBbIGl0ZW1zIF0gKTtcbiAgfVxuXG4gIHZhciBjb3VudCA9IGl0ZW1zLmxlbmd0aDtcbiAgaWYgKCAhaXRlbXMgfHwgIWNvdW50ICkge1xuICAgIG9uQ29tcGxldGUoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZG9uZUNvdW50ID0gMDtcbiAgZnVuY3Rpb24gdGljaygpIHtcbiAgICBkb25lQ291bnQrKztcbiAgICBpZiAoIGRvbmVDb3VudCA9PSBjb3VudCApIHtcbiAgICAgIG9uQ29tcGxldGUoKTtcbiAgICB9XG4gIH1cblxuICAvLyBiaW5kIGNhbGxiYWNrXG4gIGl0ZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBpdGVtICkge1xuICAgIGl0ZW0ub25jZSggZXZlbnROYW1lLCB0aWNrICk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBlbWl0cyBldmVudHMgdmlhIEV2RW1pdHRlciBhbmQgalF1ZXJ5IGV2ZW50c1xuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgLSBuYW1lIG9mIGV2ZW50XG4gKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIG9yaWdpbmFsIGV2ZW50XG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIC0gZXh0cmEgYXJndW1lbnRzXG4gKi9cbnByb3RvLmRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiggdHlwZSwgZXZlbnQsIGFyZ3MgKSB7XG4gIC8vIGFkZCBvcmlnaW5hbCBldmVudCB0byBhcmd1bWVudHNcbiAgdmFyIGVtaXRBcmdzID0gZXZlbnQgPyBbIGV2ZW50IF0uY29uY2F0KCBhcmdzICkgOiBhcmdzO1xuICB0aGlzLmVtaXRFdmVudCggdHlwZSwgZW1pdEFyZ3MgKTtcblxuICBpZiAoIGpRdWVyeSApIHtcbiAgICAvLyBzZXQgdGhpcy4kZWxlbWVudFxuICAgIHRoaXMuJGVsZW1lbnQgPSB0aGlzLiRlbGVtZW50IHx8IGpRdWVyeSggdGhpcy5lbGVtZW50ICk7XG4gICAgaWYgKCBldmVudCApIHtcbiAgICAgIC8vIGNyZWF0ZSBqUXVlcnkgZXZlbnRcbiAgICAgIHZhciAkZXZlbnQgPSBqUXVlcnkuRXZlbnQoIGV2ZW50ICk7XG4gICAgICAkZXZlbnQudHlwZSA9IHR5cGU7XG4gICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoICRldmVudCwgYXJncyApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBqdXN0IHRyaWdnZXIgd2l0aCB0eXBlIGlmIG5vIGV2ZW50IGF2YWlsYWJsZVxuICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCB0eXBlLCBhcmdzICk7XG4gICAgfVxuICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBpZ25vcmUgJiBzdGFtcHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXG4vKipcbiAqIGtlZXAgaXRlbSBpbiBjb2xsZWN0aW9uLCBidXQgZG8gbm90IGxheSBpdCBvdXRcbiAqIGlnbm9yZWQgaXRlbXMgZG8gbm90IGdldCBza2lwcGVkIGluIGxheW91dFxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtXG4gKi9cbnByb3RvLmlnbm9yZSA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICB2YXIgaXRlbSA9IHRoaXMuZ2V0SXRlbSggZWxlbSApO1xuICBpZiAoIGl0ZW0gKSB7XG4gICAgaXRlbS5pc0lnbm9yZWQgPSB0cnVlO1xuICB9XG59O1xuXG4vKipcbiAqIHJldHVybiBpdGVtIHRvIGxheW91dCBjb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1cbiAqL1xucHJvdG8udW5pZ25vcmUgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgdmFyIGl0ZW0gPSB0aGlzLmdldEl0ZW0oIGVsZW0gKTtcbiAgaWYgKCBpdGVtICkge1xuICAgIGRlbGV0ZSBpdGVtLmlzSWdub3JlZDtcbiAgfVxufTtcblxuLyoqXG4gKiBhZGRzIGVsZW1lbnRzIHRvIHN0YW1wc1xuICogQHBhcmFtIHtOb2RlTGlzdCwgQXJyYXksIEVsZW1lbnQsIG9yIFN0cmluZ30gZWxlbXNcbiAqL1xucHJvdG8uc3RhbXAgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIGVsZW1zID0gdGhpcy5fZmluZCggZWxlbXMgKTtcbiAgaWYgKCAhZWxlbXMgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5zdGFtcHMgPSB0aGlzLnN0YW1wcy5jb25jYXQoIGVsZW1zICk7XG4gIC8vIGlnbm9yZVxuICBlbGVtcy5mb3JFYWNoKCB0aGlzLmlnbm9yZSwgdGhpcyApO1xufTtcblxuLyoqXG4gKiByZW1vdmVzIGVsZW1lbnRzIHRvIHN0YW1wc1xuICogQHBhcmFtIHtOb2RlTGlzdCwgQXJyYXksIG9yIEVsZW1lbnR9IGVsZW1zXG4gKi9cbnByb3RvLnVuc3RhbXAgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIGVsZW1zID0gdGhpcy5fZmluZCggZWxlbXMgKTtcbiAgaWYgKCAhZWxlbXMgKXtcbiAgICByZXR1cm47XG4gIH1cblxuICBlbGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAvLyBmaWx0ZXIgb3V0IHJlbW92ZWQgc3RhbXAgZWxlbWVudHNcbiAgICB1dGlscy5yZW1vdmVGcm9tKCB0aGlzLnN0YW1wcywgZWxlbSApO1xuICAgIHRoaXMudW5pZ25vcmUoIGVsZW0gKTtcbiAgfSwgdGhpcyApO1xufTtcblxuLyoqXG4gKiBmaW5kcyBjaGlsZCBlbGVtZW50c1xuICogQHBhcmFtIHtOb2RlTGlzdCwgQXJyYXksIEVsZW1lbnQsIG9yIFN0cmluZ30gZWxlbXNcbiAqIEByZXR1cm5zIHtBcnJheX0gZWxlbXNcbiAqL1xucHJvdG8uX2ZpbmQgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIGlmICggIWVsZW1zICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBpZiBzdHJpbmcsIHVzZSBhcmd1bWVudCBhcyBzZWxlY3RvciBzdHJpbmdcbiAgaWYgKCB0eXBlb2YgZWxlbXMgPT0gJ3N0cmluZycgKSB7XG4gICAgZWxlbXMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCggZWxlbXMgKTtcbiAgfVxuICBlbGVtcyA9IHV0aWxzLm1ha2VBcnJheSggZWxlbXMgKTtcbiAgcmV0dXJuIGVsZW1zO1xufTtcblxucHJvdG8uX21hbmFnZVN0YW1wcyA9IGZ1bmN0aW9uKCkge1xuICBpZiAoICF0aGlzLnN0YW1wcyB8fCAhdGhpcy5zdGFtcHMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuX2dldEJvdW5kaW5nUmVjdCgpO1xuXG4gIHRoaXMuc3RhbXBzLmZvckVhY2goIHRoaXMuX21hbmFnZVN0YW1wLCB0aGlzICk7XG59O1xuXG4vLyB1cGRhdGUgYm91bmRpbmdMZWZ0IC8gVG9wXG5wcm90by5fZ2V0Qm91bmRpbmdSZWN0ID0gZnVuY3Rpb24oKSB7XG4gIC8vIGdldCBib3VuZGluZyByZWN0IGZvciBjb250YWluZXIgZWxlbWVudFxuICB2YXIgYm91bmRpbmdSZWN0ID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgc2l6ZSA9IHRoaXMuc2l6ZTtcbiAgdGhpcy5fYm91bmRpbmdSZWN0ID0ge1xuICAgIGxlZnQ6IGJvdW5kaW5nUmVjdC5sZWZ0ICsgc2l6ZS5wYWRkaW5nTGVmdCArIHNpemUuYm9yZGVyTGVmdFdpZHRoLFxuICAgIHRvcDogYm91bmRpbmdSZWN0LnRvcCArIHNpemUucGFkZGluZ1RvcCArIHNpemUuYm9yZGVyVG9wV2lkdGgsXG4gICAgcmlnaHQ6IGJvdW5kaW5nUmVjdC5yaWdodCAtICggc2l6ZS5wYWRkaW5nUmlnaHQgKyBzaXplLmJvcmRlclJpZ2h0V2lkdGggKSxcbiAgICBib3R0b206IGJvdW5kaW5nUmVjdC5ib3R0b20gLSAoIHNpemUucGFkZGluZ0JvdHRvbSArIHNpemUuYm9yZGVyQm90dG9tV2lkdGggKVxuICB9O1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHN0YW1wXG4qKi9cbnByb3RvLl9tYW5hZ2VTdGFtcCA9IG5vb3A7XG5cbi8qKlxuICogZ2V0IHgveSBwb3NpdGlvbiBvZiBlbGVtZW50IHJlbGF0aXZlIHRvIGNvbnRhaW5lciBlbGVtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1cbiAqIEByZXR1cm5zIHtPYmplY3R9IG9mZnNldCAtIGhhcyBsZWZ0LCB0b3AsIHJpZ2h0LCBib3R0b21cbiAqL1xucHJvdG8uX2dldEVsZW1lbnRPZmZzZXQgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgdmFyIGJvdW5kaW5nUmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciB0aGlzUmVjdCA9IHRoaXMuX2JvdW5kaW5nUmVjdDtcbiAgdmFyIHNpemUgPSBnZXRTaXplKCBlbGVtICk7XG4gIHZhciBvZmZzZXQgPSB7XG4gICAgbGVmdDogYm91bmRpbmdSZWN0LmxlZnQgLSB0aGlzUmVjdC5sZWZ0IC0gc2l6ZS5tYXJnaW5MZWZ0LFxuICAgIHRvcDogYm91bmRpbmdSZWN0LnRvcCAtIHRoaXNSZWN0LnRvcCAtIHNpemUubWFyZ2luVG9wLFxuICAgIHJpZ2h0OiB0aGlzUmVjdC5yaWdodCAtIGJvdW5kaW5nUmVjdC5yaWdodCAtIHNpemUubWFyZ2luUmlnaHQsXG4gICAgYm90dG9tOiB0aGlzUmVjdC5ib3R0b20gLSBib3VuZGluZ1JlY3QuYm90dG9tIC0gc2l6ZS5tYXJnaW5Cb3R0b21cbiAgfTtcbiAgcmV0dXJuIG9mZnNldDtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHJlc2l6ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBlbmFibGUgZXZlbnQgaGFuZGxlcnMgZm9yIGxpc3RlbmVyc1xuLy8gaS5lLiByZXNpemUgLT4gb25yZXNpemVcbnByb3RvLmhhbmRsZUV2ZW50ID0gdXRpbHMuaGFuZGxlRXZlbnQ7XG5cbi8qKlxuICogQmluZCBsYXlvdXQgdG8gd2luZG93IHJlc2l6aW5nXG4gKi9cbnByb3RvLmJpbmRSZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdyZXNpemUnLCB0aGlzICk7XG4gIHRoaXMuaXNSZXNpemVCb3VuZCA9IHRydWU7XG59O1xuXG4vKipcbiAqIFVuYmluZCBsYXlvdXQgdG8gd2luZG93IHJlc2l6aW5nXG4gKi9cbnByb3RvLnVuYmluZFJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIHRoaXMgKTtcbiAgdGhpcy5pc1Jlc2l6ZUJvdW5kID0gZmFsc2U7XG59O1xuXG5wcm90by5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnJlc2l6ZSgpO1xufTtcblxudXRpbHMuZGVib3VuY2VNZXRob2QoIE91dGxheWVyLCAnb25yZXNpemUnLCAxMDAgKTtcblxucHJvdG8ucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gIC8vIGRvbid0IHRyaWdnZXIgaWYgc2l6ZSBkaWQgbm90IGNoYW5nZVxuICAvLyBvciBpZiByZXNpemUgd2FzIHVuYm91bmQuIFNlZSAjOVxuICBpZiAoICF0aGlzLmlzUmVzaXplQm91bmQgfHwgIXRoaXMubmVlZHNSZXNpemVMYXlvdXQoKSApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLmxheW91dCgpO1xufTtcblxuLyoqXG4gKiBjaGVjayBpZiBsYXlvdXQgaXMgbmVlZGVkIHBvc3QgbGF5b3V0XG4gKiBAcmV0dXJucyBCb29sZWFuXG4gKi9cbnByb3RvLm5lZWRzUmVzaXplTGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzaXplID0gZ2V0U2l6ZSggdGhpcy5lbGVtZW50ICk7XG4gIC8vIGNoZWNrIHRoYXQgdGhpcy5zaXplIGFuZCBzaXplIGFyZSB0aGVyZVxuICAvLyBJRTggdHJpZ2dlcnMgcmVzaXplIG9uIGJvZHkgc2l6ZSBjaGFuZ2UsIHNvIHRoZXkgbWlnaHQgbm90IGJlXG4gIHZhciBoYXNTaXplcyA9IHRoaXMuc2l6ZSAmJiBzaXplO1xuICByZXR1cm4gaGFzU2l6ZXMgJiYgc2l6ZS5pbm5lcldpZHRoICE9PSB0aGlzLnNpemUuaW5uZXJXaWR0aDtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1ldGhvZHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLyoqXG4gKiBhZGQgaXRlbXMgdG8gT3V0bGF5ZXIgaW5zdGFuY2VcbiAqIEBwYXJhbSB7QXJyYXkgb3IgTm9kZUxpc3Qgb3IgRWxlbWVudH0gZWxlbXNcbiAqIEByZXR1cm5zIHtBcnJheX0gaXRlbXMgLSBPdXRsYXllci5JdGVtc1xuKiovXG5wcm90by5hZGRJdGVtcyA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgdmFyIGl0ZW1zID0gdGhpcy5faXRlbWl6ZSggZWxlbXMgKTtcbiAgLy8gYWRkIGl0ZW1zIHRvIGNvbGxlY3Rpb25cbiAgaWYgKCBpdGVtcy5sZW5ndGggKSB7XG4gICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbXMuY29uY2F0KCBpdGVtcyApO1xuICB9XG4gIHJldHVybiBpdGVtcztcbn07XG5cbi8qKlxuICogTGF5b3V0IG5ld2x5LWFwcGVuZGVkIGl0ZW0gZWxlbWVudHNcbiAqIEBwYXJhbSB7QXJyYXkgb3IgTm9kZUxpc3Qgb3IgRWxlbWVudH0gZWxlbXNcbiAqL1xucHJvdG8uYXBwZW5kZWQgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIHZhciBpdGVtcyA9IHRoaXMuYWRkSXRlbXMoIGVsZW1zICk7XG4gIGlmICggIWl0ZW1zLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gbGF5b3V0IGFuZCByZXZlYWwganVzdCB0aGUgbmV3IGl0ZW1zXG4gIHRoaXMubGF5b3V0SXRlbXMoIGl0ZW1zLCB0cnVlICk7XG4gIHRoaXMucmV2ZWFsKCBpdGVtcyApO1xufTtcblxuLyoqXG4gKiBMYXlvdXQgcHJlcGVuZGVkIGVsZW1lbnRzXG4gKiBAcGFyYW0ge0FycmF5IG9yIE5vZGVMaXN0IG9yIEVsZW1lbnR9IGVsZW1zXG4gKi9cbnByb3RvLnByZXBlbmRlZCA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgdmFyIGl0ZW1zID0gdGhpcy5faXRlbWl6ZSggZWxlbXMgKTtcbiAgaWYgKCAhaXRlbXMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBhZGQgaXRlbXMgdG8gYmVnaW5uaW5nIG9mIGNvbGxlY3Rpb25cbiAgdmFyIHByZXZpb3VzSXRlbXMgPSB0aGlzLml0ZW1zLnNsaWNlKDApO1xuICB0aGlzLml0ZW1zID0gaXRlbXMuY29uY2F0KCBwcmV2aW91c0l0ZW1zICk7XG4gIC8vIHN0YXJ0IG5ldyBsYXlvdXRcbiAgdGhpcy5fcmVzZXRMYXlvdXQoKTtcbiAgdGhpcy5fbWFuYWdlU3RhbXBzKCk7XG4gIC8vIGxheW91dCBuZXcgc3R1ZmYgd2l0aG91dCB0cmFuc2l0aW9uXG4gIHRoaXMubGF5b3V0SXRlbXMoIGl0ZW1zLCB0cnVlICk7XG4gIHRoaXMucmV2ZWFsKCBpdGVtcyApO1xuICAvLyBsYXlvdXQgcHJldmlvdXMgaXRlbXNcbiAgdGhpcy5sYXlvdXRJdGVtcyggcHJldmlvdXNJdGVtcyApO1xufTtcblxuLyoqXG4gKiByZXZlYWwgYSBjb2xsZWN0aW9uIG9mIGl0ZW1zXG4gKiBAcGFyYW0ge0FycmF5IG9mIE91dGxheWVyLkl0ZW1zfSBpdGVtc1xuICovXG5wcm90by5yZXZlYWwgPSBmdW5jdGlvbiggaXRlbXMgKSB7XG4gIHRoaXMuX2VtaXRDb21wbGV0ZU9uSXRlbXMoICdyZXZlYWwnLCBpdGVtcyApO1xuICBpZiAoICFpdGVtcyB8fCAhaXRlbXMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgc3RhZ2dlciA9IHRoaXMudXBkYXRlU3RhZ2dlcigpO1xuICBpdGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggaXRlbSwgaSApIHtcbiAgICBpdGVtLnN0YWdnZXIoIGkgKiBzdGFnZ2VyICk7XG4gICAgaXRlbS5yZXZlYWwoKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIGhpZGUgYSBjb2xsZWN0aW9uIG9mIGl0ZW1zXG4gKiBAcGFyYW0ge0FycmF5IG9mIE91dGxheWVyLkl0ZW1zfSBpdGVtc1xuICovXG5wcm90by5oaWRlID0gZnVuY3Rpb24oIGl0ZW1zICkge1xuICB0aGlzLl9lbWl0Q29tcGxldGVPbkl0ZW1zKCAnaGlkZScsIGl0ZW1zICk7XG4gIGlmICggIWl0ZW1zIHx8ICFpdGVtcy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBzdGFnZ2VyID0gdGhpcy51cGRhdGVTdGFnZ2VyKCk7XG4gIGl0ZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBpdGVtLCBpICkge1xuICAgIGl0ZW0uc3RhZ2dlciggaSAqIHN0YWdnZXIgKTtcbiAgICBpdGVtLmhpZGUoKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIHJldmVhbCBpdGVtIGVsZW1lbnRzXG4gKiBAcGFyYW0ge0FycmF5fSwge0VsZW1lbnR9LCB7Tm9kZUxpc3R9IGl0ZW1zXG4gKi9cbnByb3RvLnJldmVhbEl0ZW1FbGVtZW50cyA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgdmFyIGl0ZW1zID0gdGhpcy5nZXRJdGVtcyggZWxlbXMgKTtcbiAgdGhpcy5yZXZlYWwoIGl0ZW1zICk7XG59O1xuXG4vKipcbiAqIGhpZGUgaXRlbSBlbGVtZW50c1xuICogQHBhcmFtIHtBcnJheX0sIHtFbGVtZW50fSwge05vZGVMaXN0fSBpdGVtc1xuICovXG5wcm90by5oaWRlSXRlbUVsZW1lbnRzID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICB2YXIgaXRlbXMgPSB0aGlzLmdldEl0ZW1zKCBlbGVtcyApO1xuICB0aGlzLmhpZGUoIGl0ZW1zICk7XG59O1xuXG4vKipcbiAqIGdldCBPdXRsYXllci5JdGVtLCBnaXZlbiBhbiBFbGVtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7T3V0bGF5ZXIuSXRlbX0gaXRlbVxuICovXG5wcm90by5nZXRJdGVtID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIC8vIGxvb3AgdGhyb3VnaCBpdGVtcyB0byBnZXQgdGhlIG9uZSB0aGF0IG1hdGNoZXNcbiAgZm9yICggdmFyIGk9MDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLml0ZW1zW2ldO1xuICAgIGlmICggaXRlbS5lbGVtZW50ID09IGVsZW0gKSB7XG4gICAgICAvLyByZXR1cm4gaXRlbVxuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIGdldCBjb2xsZWN0aW9uIG9mIE91dGxheWVyLkl0ZW1zLCBnaXZlbiBFbGVtZW50c1xuICogQHBhcmFtIHtBcnJheX0gZWxlbXNcbiAqIEByZXR1cm5zIHtBcnJheX0gaXRlbXMgLSBPdXRsYXllci5JdGVtc1xuICovXG5wcm90by5nZXRJdGVtcyA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgZWxlbXMgPSB1dGlscy5tYWtlQXJyYXkoIGVsZW1zICk7XG4gIHZhciBpdGVtcyA9IFtdO1xuICBlbGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggZWxlbSApIHtcbiAgICB2YXIgaXRlbSA9IHRoaXMuZ2V0SXRlbSggZWxlbSApO1xuICAgIGlmICggaXRlbSApIHtcbiAgICAgIGl0ZW1zLnB1c2goIGl0ZW0gKTtcbiAgICB9XG4gIH0sIHRoaXMgKTtcblxuICByZXR1cm4gaXRlbXM7XG59O1xuXG4vKipcbiAqIHJlbW92ZSBlbGVtZW50KHMpIGZyb20gaW5zdGFuY2UgYW5kIERPTVxuICogQHBhcmFtIHtBcnJheSBvciBOb2RlTGlzdCBvciBFbGVtZW50fSBlbGVtc1xuICovXG5wcm90by5yZW1vdmUgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIHZhciByZW1vdmVJdGVtcyA9IHRoaXMuZ2V0SXRlbXMoIGVsZW1zICk7XG5cbiAgdGhpcy5fZW1pdENvbXBsZXRlT25JdGVtcyggJ3JlbW92ZScsIHJlbW92ZUl0ZW1zICk7XG5cbiAgLy8gYmFpbCBpZiBubyBpdGVtcyB0byByZW1vdmVcbiAgaWYgKCAhcmVtb3ZlSXRlbXMgfHwgIXJlbW92ZUl0ZW1zLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZW1vdmVJdGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggaXRlbSApIHtcbiAgICBpdGVtLnJlbW92ZSgpO1xuICAgIC8vIHJlbW92ZSBpdGVtIGZyb20gY29sbGVjdGlvblxuICAgIHV0aWxzLnJlbW92ZUZyb20oIHRoaXMuaXRlbXMsIGl0ZW0gKTtcbiAgfSwgdGhpcyApO1xufTtcblxuLy8gLS0tLS0gZGVzdHJveSAtLS0tLSAvL1xuXG4vLyByZW1vdmUgYW5kIGRpc2FibGUgT3V0bGF5ZXIgaW5zdGFuY2VcbnByb3RvLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgLy8gY2xlYW4gdXAgZHluYW1pYyBzdHlsZXNcbiAgdmFyIHN0eWxlID0gdGhpcy5lbGVtZW50LnN0eWxlO1xuICBzdHlsZS5oZWlnaHQgPSAnJztcbiAgc3R5bGUucG9zaXRpb24gPSAnJztcbiAgc3R5bGUud2lkdGggPSAnJztcbiAgLy8gZGVzdHJveSBpdGVtc1xuICB0aGlzLml0ZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBpdGVtICkge1xuICAgIGl0ZW0uZGVzdHJveSgpO1xuICB9KTtcblxuICB0aGlzLnVuYmluZFJlc2l6ZSgpO1xuXG4gIHZhciBpZCA9IHRoaXMuZWxlbWVudC5vdXRsYXllckdVSUQ7XG4gIGRlbGV0ZSBpbnN0YW5jZXNbIGlkIF07IC8vIHJlbW92ZSByZWZlcmVuY2UgdG8gaW5zdGFuY2UgYnkgaWRcbiAgZGVsZXRlIHRoaXMuZWxlbWVudC5vdXRsYXllckdVSUQ7XG4gIC8vIHJlbW92ZSBkYXRhIGZvciBqUXVlcnlcbiAgaWYgKCBqUXVlcnkgKSB7XG4gICAgalF1ZXJ5LnJlbW92ZURhdGEoIHRoaXMuZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lc3BhY2UgKTtcbiAgfVxuXG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkYXRhIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8qKlxuICogZ2V0IE91dGxheWVyIGluc3RhbmNlIGZyb20gZWxlbWVudFxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtXG4gKiBAcmV0dXJucyB7T3V0bGF5ZXJ9XG4gKi9cbk91dGxheWVyLmRhdGEgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgZWxlbSA9IHV0aWxzLmdldFF1ZXJ5RWxlbWVudCggZWxlbSApO1xuICB2YXIgaWQgPSBlbGVtICYmIGVsZW0ub3V0bGF5ZXJHVUlEO1xuICByZXR1cm4gaWQgJiYgaW5zdGFuY2VzWyBpZCBdO1xufTtcblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjcmVhdGUgT3V0bGF5ZXIgY2xhc3MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLyoqXG4gKiBjcmVhdGUgYSBsYXlvdXQgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VcbiAqL1xuT3V0bGF5ZXIuY3JlYXRlID0gZnVuY3Rpb24oIG5hbWVzcGFjZSwgb3B0aW9ucyApIHtcbiAgLy8gc3ViLWNsYXNzIE91dGxheWVyXG4gIHZhciBMYXlvdXQgPSBzdWJjbGFzcyggT3V0bGF5ZXIgKTtcbiAgLy8gYXBwbHkgbmV3IG9wdGlvbnMgYW5kIGNvbXBhdE9wdGlvbnNcbiAgTGF5b3V0LmRlZmF1bHRzID0gdXRpbHMuZXh0ZW5kKCB7fSwgT3V0bGF5ZXIuZGVmYXVsdHMgKTtcbiAgdXRpbHMuZXh0ZW5kKCBMYXlvdXQuZGVmYXVsdHMsIG9wdGlvbnMgKTtcbiAgTGF5b3V0LmNvbXBhdE9wdGlvbnMgPSB1dGlscy5leHRlbmQoIHt9LCBPdXRsYXllci5jb21wYXRPcHRpb25zICApO1xuXG4gIExheW91dC5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG5cbiAgTGF5b3V0LmRhdGEgPSBPdXRsYXllci5kYXRhO1xuXG4gIC8vIHN1Yi1jbGFzcyBJdGVtXG4gIExheW91dC5JdGVtID0gc3ViY2xhc3MoIEl0ZW0gKTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkZWNsYXJhdGl2ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4gIHV0aWxzLmh0bWxJbml0KCBMYXlvdXQsIG5hbWVzcGFjZSApO1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGpRdWVyeSBicmlkZ2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICAvLyBtYWtlIGludG8galF1ZXJ5IHBsdWdpblxuICBpZiAoIGpRdWVyeSAmJiBqUXVlcnkuYnJpZGdldCApIHtcbiAgICBqUXVlcnkuYnJpZGdldCggbmFtZXNwYWNlLCBMYXlvdXQgKTtcbiAgfVxuXG4gIHJldHVybiBMYXlvdXQ7XG59O1xuXG5mdW5jdGlvbiBzdWJjbGFzcyggUGFyZW50ICkge1xuICBmdW5jdGlvbiBTdWJDbGFzcygpIHtcbiAgICBQYXJlbnQuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuICB9XG5cbiAgU3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggUGFyZW50LnByb3RvdHlwZSApO1xuICBTdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTdWJDbGFzcztcblxuICByZXR1cm4gU3ViQ2xhc3M7XG59XG5cbi8vIC0tLS0tIGhlbHBlcnMgLS0tLS0gLy9cblxuLy8gaG93IG1hbnkgbWlsbGlzZWNvbmRzIGFyZSBpbiBlYWNoIHVuaXRcbnZhciBtc1VuaXRzID0ge1xuICBtczogMSxcbiAgczogMTAwMFxufTtcblxuLy8gbXVuZ2UgdGltZS1saWtlIHBhcmFtZXRlciBpbnRvIG1pbGxpc2Vjb25kIG51bWJlclxuLy8gJzAuNHMnIC0+IDQwXG5mdW5jdGlvbiBnZXRNaWxsaXNlY29uZHMoIHRpbWUgKSB7XG4gIGlmICggdHlwZW9mIHRpbWUgPT0gJ251bWJlcicgKSB7XG4gICAgcmV0dXJuIHRpbWU7XG4gIH1cbiAgdmFyIG1hdGNoZXMgPSB0aW1lLm1hdGNoKCAvKF5cXGQqXFwuP1xcZCopKFxcdyopLyApO1xuICB2YXIgbnVtID0gbWF0Y2hlcyAmJiBtYXRjaGVzWzFdO1xuICB2YXIgdW5pdCA9IG1hdGNoZXMgJiYgbWF0Y2hlc1syXTtcbiAgaWYgKCAhbnVtLmxlbmd0aCApIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBudW0gPSBwYXJzZUZsb2F0KCBudW0gKTtcbiAgdmFyIG11bHQgPSBtc1VuaXRzWyB1bml0IF0gfHwgMTtcbiAgcmV0dXJuIG51bSAqIG11bHQ7XG59XG5cbi8vIC0tLS0tIGZpbiAtLS0tLSAvL1xuXG4vLyBiYWNrIGluIGdsb2JhbFxuT3V0bGF5ZXIuSXRlbSA9IEl0ZW07XG5cbnJldHVybiBPdXRsYXllcjtcblxufSkpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vb3V0bGF5ZXIvb3V0bGF5ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBPdXRsYXllciBJdGVtXG4gKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi8gLyogZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgcmVxdWlyZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRCAtIFJlcXVpcmVKU1xuICAgIGRlZmluZSggW1xuICAgICAgICAnZXYtZW1pdHRlci9ldi1lbWl0dGVyJyxcbiAgICAgICAgJ2dldC1zaXplL2dldC1zaXplJ1xuICAgICAgXSxcbiAgICAgIGZhY3RvcnlcbiAgICApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTIC0gQnJvd3NlcmlmeSwgV2VicGFja1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHJlcXVpcmUoJ2V2LWVtaXR0ZXInKSxcbiAgICAgIHJlcXVpcmUoJ2dldC1zaXplJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93Lk91dGxheWVyID0ge307XG4gICAgd2luZG93Lk91dGxheWVyLkl0ZW0gPSBmYWN0b3J5KFxuICAgICAgd2luZG93LkV2RW1pdHRlcixcbiAgICAgIHdpbmRvdy5nZXRTaXplXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIEV2RW1pdHRlciwgZ2V0U2l6ZSApIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0gaGVscGVycyAtLS0tLSAvL1xuXG5mdW5jdGlvbiBpc0VtcHR5T2JqKCBvYmogKSB7XG4gIGZvciAoIHZhciBwcm9wIGluIG9iaiApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcHJvcCA9IG51bGw7XG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBDU1MzIHN1cHBvcnQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXG52YXIgZG9jRWxlbVN0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuXG52YXIgdHJhbnNpdGlvblByb3BlcnR5ID0gdHlwZW9mIGRvY0VsZW1TdHlsZS50cmFuc2l0aW9uID09ICdzdHJpbmcnID9cbiAgJ3RyYW5zaXRpb24nIDogJ1dlYmtpdFRyYW5zaXRpb24nO1xudmFyIHRyYW5zZm9ybVByb3BlcnR5ID0gdHlwZW9mIGRvY0VsZW1TdHlsZS50cmFuc2Zvcm0gPT0gJ3N0cmluZycgP1xuICAndHJhbnNmb3JtJyA6ICdXZWJraXRUcmFuc2Zvcm0nO1xuXG52YXIgdHJhbnNpdGlvbkVuZEV2ZW50ID0ge1xuICBXZWJraXRUcmFuc2l0aW9uOiAnd2Via2l0VHJhbnNpdGlvbkVuZCcsXG4gIHRyYW5zaXRpb246ICd0cmFuc2l0aW9uZW5kJ1xufVsgdHJhbnNpdGlvblByb3BlcnR5IF07XG5cbi8vIGNhY2hlIGFsbCB2ZW5kb3IgcHJvcGVydGllcyB0aGF0IGNvdWxkIGhhdmUgdmVuZG9yIHByZWZpeFxudmFyIHZlbmRvclByb3BlcnRpZXMgPSB7XG4gIHRyYW5zZm9ybTogdHJhbnNmb3JtUHJvcGVydHksXG4gIHRyYW5zaXRpb246IHRyYW5zaXRpb25Qcm9wZXJ0eSxcbiAgdHJhbnNpdGlvbkR1cmF0aW9uOiB0cmFuc2l0aW9uUHJvcGVydHkgKyAnRHVyYXRpb24nLFxuICB0cmFuc2l0aW9uUHJvcGVydHk6IHRyYW5zaXRpb25Qcm9wZXJ0eSArICdQcm9wZXJ0eScsXG4gIHRyYW5zaXRpb25EZWxheTogdHJhbnNpdGlvblByb3BlcnR5ICsgJ0RlbGF5J1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSXRlbSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5mdW5jdGlvbiBJdGVtKCBlbGVtZW50LCBsYXlvdXQgKSB7XG4gIGlmICggIWVsZW1lbnQgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgLy8gcGFyZW50IGxheW91dCBjbGFzcywgaS5lLiBNYXNvbnJ5LCBJc290b3BlLCBvciBQYWNrZXJ5XG4gIHRoaXMubGF5b3V0ID0gbGF5b3V0O1xuICB0aGlzLnBvc2l0aW9uID0ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xuXG4gIHRoaXMuX2NyZWF0ZSgpO1xufVxuXG4vLyBpbmhlcml0IEV2RW1pdHRlclxudmFyIHByb3RvID0gSXRlbS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBFdkVtaXR0ZXIucHJvdG90eXBlICk7XG5wcm90by5jb25zdHJ1Y3RvciA9IEl0ZW07XG5cbnByb3RvLl9jcmVhdGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gdHJhbnNpdGlvbiBvYmplY3RzXG4gIHRoaXMuX3RyYW5zbiA9IHtcbiAgICBpbmdQcm9wZXJ0aWVzOiB7fSxcbiAgICBjbGVhbjoge30sXG4gICAgb25FbmQ6IHt9XG4gIH07XG5cbiAgdGhpcy5jc3Moe1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gIH0pO1xufTtcblxuLy8gdHJpZ2dlciBzcGVjaWZpZWQgaGFuZGxlciBmb3IgZXZlbnQgdHlwZVxucHJvdG8uaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHZhciBtZXRob2QgPSAnb24nICsgZXZlbnQudHlwZTtcbiAgaWYgKCB0aGlzWyBtZXRob2QgXSApIHtcbiAgICB0aGlzWyBtZXRob2QgXSggZXZlbnQgKTtcbiAgfVxufTtcblxucHJvdG8uZ2V0U2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNpemUgPSBnZXRTaXplKCB0aGlzLmVsZW1lbnQgKTtcbn07XG5cbi8qKlxuICogYXBwbHkgQ1NTIHN0eWxlcyB0byBlbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gc3R5bGVcbiAqL1xucHJvdG8uY3NzID0gZnVuY3Rpb24oIHN0eWxlICkge1xuICB2YXIgZWxlbVN0eWxlID0gdGhpcy5lbGVtZW50LnN0eWxlO1xuXG4gIGZvciAoIHZhciBwcm9wIGluIHN0eWxlICkge1xuICAgIC8vIHVzZSB2ZW5kb3IgcHJvcGVydHkgaWYgYXZhaWxhYmxlXG4gICAgdmFyIHN1cHBvcnRlZFByb3AgPSB2ZW5kb3JQcm9wZXJ0aWVzWyBwcm9wIF0gfHwgcHJvcDtcbiAgICBlbGVtU3R5bGVbIHN1cHBvcnRlZFByb3AgXSA9IHN0eWxlWyBwcm9wIF07XG4gIH1cbn07XG5cbiAvLyBtZWFzdXJlIHBvc2l0aW9uLCBhbmQgc2V0cyBpdFxucHJvdG8uZ2V0UG9zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSggdGhpcy5lbGVtZW50ICk7XG4gIHZhciBpc09yaWdpbkxlZnQgPSB0aGlzLmxheW91dC5fZ2V0T3B0aW9uKCdvcmlnaW5MZWZ0Jyk7XG4gIHZhciBpc09yaWdpblRvcCA9IHRoaXMubGF5b3V0Ll9nZXRPcHRpb24oJ29yaWdpblRvcCcpO1xuICB2YXIgeFZhbHVlID0gc3R5bGVbIGlzT3JpZ2luTGVmdCA/ICdsZWZ0JyA6ICdyaWdodCcgXTtcbiAgdmFyIHlWYWx1ZSA9IHN0eWxlWyBpc09yaWdpblRvcCA/ICd0b3AnIDogJ2JvdHRvbScgXTtcbiAgLy8gY29udmVydCBwZXJjZW50IHRvIHBpeGVsc1xuICB2YXIgbGF5b3V0U2l6ZSA9IHRoaXMubGF5b3V0LnNpemU7XG4gIHZhciB4ID0geFZhbHVlLmluZGV4T2YoJyUnKSAhPSAtMSA/XG4gICAgKCBwYXJzZUZsb2F0KCB4VmFsdWUgKSAvIDEwMCApICogbGF5b3V0U2l6ZS53aWR0aCA6IHBhcnNlSW50KCB4VmFsdWUsIDEwICk7XG4gIHZhciB5ID0geVZhbHVlLmluZGV4T2YoJyUnKSAhPSAtMSA/XG4gICAgKCBwYXJzZUZsb2F0KCB5VmFsdWUgKSAvIDEwMCApICogbGF5b3V0U2l6ZS5oZWlnaHQgOiBwYXJzZUludCggeVZhbHVlLCAxMCApO1xuXG4gIC8vIGNsZWFuIHVwICdhdXRvJyBvciBvdGhlciBub24taW50ZWdlciB2YWx1ZXNcbiAgeCA9IGlzTmFOKCB4ICkgPyAwIDogeDtcbiAgeSA9IGlzTmFOKCB5ICkgPyAwIDogeTtcbiAgLy8gcmVtb3ZlIHBhZGRpbmcgZnJvbSBtZWFzdXJlbWVudFxuICB4IC09IGlzT3JpZ2luTGVmdCA/IGxheW91dFNpemUucGFkZGluZ0xlZnQgOiBsYXlvdXRTaXplLnBhZGRpbmdSaWdodDtcbiAgeSAtPSBpc09yaWdpblRvcCA/IGxheW91dFNpemUucGFkZGluZ1RvcCA6IGxheW91dFNpemUucGFkZGluZ0JvdHRvbTtcblxuICB0aGlzLnBvc2l0aW9uLnggPSB4O1xuICB0aGlzLnBvc2l0aW9uLnkgPSB5O1xufTtcblxuLy8gc2V0IHNldHRsZWQgcG9zaXRpb24sIGFwcGx5IHBhZGRpbmdcbnByb3RvLmxheW91dFBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gIHZhciBsYXlvdXRTaXplID0gdGhpcy5sYXlvdXQuc2l6ZTtcbiAgdmFyIHN0eWxlID0ge307XG4gIHZhciBpc09yaWdpbkxlZnQgPSB0aGlzLmxheW91dC5fZ2V0T3B0aW9uKCdvcmlnaW5MZWZ0Jyk7XG4gIHZhciBpc09yaWdpblRvcCA9IHRoaXMubGF5b3V0Ll9nZXRPcHRpb24oJ29yaWdpblRvcCcpO1xuXG4gIC8vIHhcbiAgdmFyIHhQYWRkaW5nID0gaXNPcmlnaW5MZWZ0ID8gJ3BhZGRpbmdMZWZ0JyA6ICdwYWRkaW5nUmlnaHQnO1xuICB2YXIgeFByb3BlcnR5ID0gaXNPcmlnaW5MZWZ0ID8gJ2xlZnQnIDogJ3JpZ2h0JztcbiAgdmFyIHhSZXNldFByb3BlcnR5ID0gaXNPcmlnaW5MZWZ0ID8gJ3JpZ2h0JyA6ICdsZWZ0JztcblxuICB2YXIgeCA9IHRoaXMucG9zaXRpb24ueCArIGxheW91dFNpemVbIHhQYWRkaW5nIF07XG4gIC8vIHNldCBpbiBwZXJjZW50YWdlIG9yIHBpeGVsc1xuICBzdHlsZVsgeFByb3BlcnR5IF0gPSB0aGlzLmdldFhWYWx1ZSggeCApO1xuICAvLyByZXNldCBvdGhlciBwcm9wZXJ0eVxuICBzdHlsZVsgeFJlc2V0UHJvcGVydHkgXSA9ICcnO1xuXG4gIC8vIHlcbiAgdmFyIHlQYWRkaW5nID0gaXNPcmlnaW5Ub3AgPyAncGFkZGluZ1RvcCcgOiAncGFkZGluZ0JvdHRvbSc7XG4gIHZhciB5UHJvcGVydHkgPSBpc09yaWdpblRvcCA/ICd0b3AnIDogJ2JvdHRvbSc7XG4gIHZhciB5UmVzZXRQcm9wZXJ0eSA9IGlzT3JpZ2luVG9wID8gJ2JvdHRvbScgOiAndG9wJztcblxuICB2YXIgeSA9IHRoaXMucG9zaXRpb24ueSArIGxheW91dFNpemVbIHlQYWRkaW5nIF07XG4gIC8vIHNldCBpbiBwZXJjZW50YWdlIG9yIHBpeGVsc1xuICBzdHlsZVsgeVByb3BlcnR5IF0gPSB0aGlzLmdldFlWYWx1ZSggeSApO1xuICAvLyByZXNldCBvdGhlciBwcm9wZXJ0eVxuICBzdHlsZVsgeVJlc2V0UHJvcGVydHkgXSA9ICcnO1xuXG4gIHRoaXMuY3NzKCBzdHlsZSApO1xuICB0aGlzLmVtaXRFdmVudCggJ2xheW91dCcsIFsgdGhpcyBdICk7XG59O1xuXG5wcm90by5nZXRYVmFsdWUgPSBmdW5jdGlvbiggeCApIHtcbiAgdmFyIGlzSG9yaXpvbnRhbCA9IHRoaXMubGF5b3V0Ll9nZXRPcHRpb24oJ2hvcml6b250YWwnKTtcbiAgcmV0dXJuIHRoaXMubGF5b3V0Lm9wdGlvbnMucGVyY2VudFBvc2l0aW9uICYmICFpc0hvcml6b250YWwgP1xuICAgICggKCB4IC8gdGhpcy5sYXlvdXQuc2l6ZS53aWR0aCApICogMTAwICkgKyAnJScgOiB4ICsgJ3B4Jztcbn07XG5cbnByb3RvLmdldFlWYWx1ZSA9IGZ1bmN0aW9uKCB5ICkge1xuICB2YXIgaXNIb3Jpem9udGFsID0gdGhpcy5sYXlvdXQuX2dldE9wdGlvbignaG9yaXpvbnRhbCcpO1xuICByZXR1cm4gdGhpcy5sYXlvdXQub3B0aW9ucy5wZXJjZW50UG9zaXRpb24gJiYgaXNIb3Jpem9udGFsID9cbiAgICAoICggeSAvIHRoaXMubGF5b3V0LnNpemUuaGVpZ2h0ICkgKiAxMDAgKSArICclJyA6IHkgKyAncHgnO1xufTtcblxucHJvdG8uX3RyYW5zaXRpb25UbyA9IGZ1bmN0aW9uKCB4LCB5ICkge1xuICB0aGlzLmdldFBvc2l0aW9uKCk7XG4gIC8vIGdldCBjdXJyZW50IHggJiB5IGZyb20gdG9wL2xlZnRcbiAgdmFyIGN1clggPSB0aGlzLnBvc2l0aW9uLng7XG4gIHZhciBjdXJZID0gdGhpcy5wb3NpdGlvbi55O1xuXG4gIHZhciBjb21wYXJlWCA9IHBhcnNlSW50KCB4LCAxMCApO1xuICB2YXIgY29tcGFyZVkgPSBwYXJzZUludCggeSwgMTAgKTtcbiAgdmFyIGRpZE5vdE1vdmUgPSBjb21wYXJlWCA9PT0gdGhpcy5wb3NpdGlvbi54ICYmIGNvbXBhcmVZID09PSB0aGlzLnBvc2l0aW9uLnk7XG5cbiAgLy8gc2F2ZSBlbmQgcG9zaXRpb25cbiAgdGhpcy5zZXRQb3NpdGlvbiggeCwgeSApO1xuXG4gIC8vIGlmIGRpZCBub3QgbW92ZSBhbmQgbm90IHRyYW5zaXRpb25pbmcsIGp1c3QgZ28gdG8gbGF5b3V0XG4gIGlmICggZGlkTm90TW92ZSAmJiAhdGhpcy5pc1RyYW5zaXRpb25pbmcgKSB7XG4gICAgdGhpcy5sYXlvdXRQb3NpdGlvbigpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB0cmFuc1ggPSB4IC0gY3VyWDtcbiAgdmFyIHRyYW5zWSA9IHkgLSBjdXJZO1xuICB2YXIgdHJhbnNpdGlvblN0eWxlID0ge307XG4gIHRyYW5zaXRpb25TdHlsZS50cmFuc2Zvcm0gPSB0aGlzLmdldFRyYW5zbGF0ZSggdHJhbnNYLCB0cmFuc1kgKTtcblxuICB0aGlzLnRyYW5zaXRpb24oe1xuICAgIHRvOiB0cmFuc2l0aW9uU3R5bGUsXG4gICAgb25UcmFuc2l0aW9uRW5kOiB7XG4gICAgICB0cmFuc2Zvcm06IHRoaXMubGF5b3V0UG9zaXRpb25cbiAgICB9LFxuICAgIGlzQ2xlYW5pbmc6IHRydWVcbiAgfSk7XG59O1xuXG5wcm90by5nZXRUcmFuc2xhdGUgPSBmdW5jdGlvbiggeCwgeSApIHtcbiAgLy8gZmxpcCBjb29yaWRpbmF0ZXMgaWYgb3JpZ2luIG9uIHJpZ2h0IG9yIGJvdHRvbVxuICB2YXIgaXNPcmlnaW5MZWZ0ID0gdGhpcy5sYXlvdXQuX2dldE9wdGlvbignb3JpZ2luTGVmdCcpO1xuICB2YXIgaXNPcmlnaW5Ub3AgPSB0aGlzLmxheW91dC5fZ2V0T3B0aW9uKCdvcmlnaW5Ub3AnKTtcbiAgeCA9IGlzT3JpZ2luTGVmdCA/IHggOiAteDtcbiAgeSA9IGlzT3JpZ2luVG9wID8geSA6IC15O1xuICByZXR1cm4gJ3RyYW5zbGF0ZTNkKCcgKyB4ICsgJ3B4LCAnICsgeSArICdweCwgMCknO1xufTtcblxuLy8gbm9uIHRyYW5zaXRpb24gKyB0cmFuc2Zvcm0gc3VwcG9ydFxucHJvdG8uZ29UbyA9IGZ1bmN0aW9uKCB4LCB5ICkge1xuICB0aGlzLnNldFBvc2l0aW9uKCB4LCB5ICk7XG4gIHRoaXMubGF5b3V0UG9zaXRpb24oKTtcbn07XG5cbnByb3RvLm1vdmVUbyA9IHByb3RvLl90cmFuc2l0aW9uVG87XG5cbnByb3RvLnNldFBvc2l0aW9uID0gZnVuY3Rpb24oIHgsIHkgKSB7XG4gIHRoaXMucG9zaXRpb24ueCA9IHBhcnNlSW50KCB4LCAxMCApO1xuICB0aGlzLnBvc2l0aW9uLnkgPSBwYXJzZUludCggeSwgMTAgKTtcbn07XG5cbi8vIC0tLS0tIHRyYW5zaXRpb24gLS0tLS0gLy9cblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gc3R5bGUgLSBDU1NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9uVHJhbnNpdGlvbkVuZFxuICovXG5cbi8vIG5vbiB0cmFuc2l0aW9uLCBqdXN0IHRyaWdnZXIgY2FsbGJhY2tcbnByb3RvLl9ub25UcmFuc2l0aW9uID0gZnVuY3Rpb24oIGFyZ3MgKSB7XG4gIHRoaXMuY3NzKCBhcmdzLnRvICk7XG4gIGlmICggYXJncy5pc0NsZWFuaW5nICkge1xuICAgIHRoaXMuX3JlbW92ZVN0eWxlcyggYXJncy50byApO1xuICB9XG4gIGZvciAoIHZhciBwcm9wIGluIGFyZ3Mub25UcmFuc2l0aW9uRW5kICkge1xuICAgIGFyZ3Mub25UcmFuc2l0aW9uRW5kWyBwcm9wIF0uY2FsbCggdGhpcyApO1xuICB9XG59O1xuXG4vKipcbiAqIHByb3BlciB0cmFuc2l0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gYXJncyAtIGFyZ3VtZW50c1xuICogICBAcGFyYW0ge09iamVjdH0gdG8gLSBzdHlsZSB0byB0cmFuc2l0aW9uIHRvXG4gKiAgIEBwYXJhbSB7T2JqZWN0fSBmcm9tIC0gc3R5bGUgdG8gc3RhcnQgdHJhbnNpdGlvbiBmcm9tXG4gKiAgIEBwYXJhbSB7Qm9vbGVhbn0gaXNDbGVhbmluZyAtIHJlbW92ZXMgdHJhbnNpdGlvbiBzdHlsZXMgYWZ0ZXIgdHJhbnNpdGlvblxuICogICBAcGFyYW0ge0Z1bmN0aW9ufSBvblRyYW5zaXRpb25FbmQgLSBjYWxsYmFja1xuICovXG5wcm90by50cmFuc2l0aW9uID0gZnVuY3Rpb24oIGFyZ3MgKSB7XG4gIC8vIHJlZGlyZWN0IHRvIG5vblRyYW5zaXRpb24gaWYgbm8gdHJhbnNpdGlvbiBkdXJhdGlvblxuICBpZiAoICFwYXJzZUZsb2F0KCB0aGlzLmxheW91dC5vcHRpb25zLnRyYW5zaXRpb25EdXJhdGlvbiApICkge1xuICAgIHRoaXMuX25vblRyYW5zaXRpb24oIGFyZ3MgKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgX3RyYW5zaXRpb24gPSB0aGlzLl90cmFuc247XG4gIC8vIGtlZXAgdHJhY2sgb2Ygb25UcmFuc2l0aW9uRW5kIGNhbGxiYWNrIGJ5IGNzcyBwcm9wZXJ0eVxuICBmb3IgKCB2YXIgcHJvcCBpbiBhcmdzLm9uVHJhbnNpdGlvbkVuZCApIHtcbiAgICBfdHJhbnNpdGlvbi5vbkVuZFsgcHJvcCBdID0gYXJncy5vblRyYW5zaXRpb25FbmRbIHByb3AgXTtcbiAgfVxuICAvLyBrZWVwIHRyYWNrIG9mIHByb3BlcnRpZXMgdGhhdCBhcmUgdHJhbnNpdGlvbmluZ1xuICBmb3IgKCBwcm9wIGluIGFyZ3MudG8gKSB7XG4gICAgX3RyYW5zaXRpb24uaW5nUHJvcGVydGllc1sgcHJvcCBdID0gdHJ1ZTtcbiAgICAvLyBrZWVwIHRyYWNrIG9mIHByb3BlcnRpZXMgdG8gY2xlYW4gdXAgd2hlbiB0cmFuc2l0aW9uIGlzIGRvbmVcbiAgICBpZiAoIGFyZ3MuaXNDbGVhbmluZyApIHtcbiAgICAgIF90cmFuc2l0aW9uLmNsZWFuWyBwcm9wIF0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIHNldCBmcm9tIHN0eWxlc1xuICBpZiAoIGFyZ3MuZnJvbSApIHtcbiAgICB0aGlzLmNzcyggYXJncy5mcm9tICk7XG4gICAgLy8gZm9yY2UgcmVkcmF3LiBodHRwOi8vYmxvZy5hbGV4bWFjY2F3LmNvbS9jc3MtdHJhbnNpdGlvbnNcbiAgICB2YXIgaCA9IHRoaXMuZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgLy8gaGFjayBmb3IgSlNIaW50IHRvIGh1c2ggYWJvdXQgdW51c2VkIHZhclxuICAgIGggPSBudWxsO1xuICB9XG4gIC8vIGVuYWJsZSB0cmFuc2l0aW9uXG4gIHRoaXMuZW5hYmxlVHJhbnNpdGlvbiggYXJncy50byApO1xuICAvLyBzZXQgc3R5bGVzIHRoYXQgYXJlIHRyYW5zaXRpb25pbmdcbiAgdGhpcy5jc3MoIGFyZ3MudG8gKTtcblxuICB0aGlzLmlzVHJhbnNpdGlvbmluZyA9IHRydWU7XG5cbn07XG5cbi8vIGRhc2ggYmVmb3JlIGFsbCBjYXAgbGV0dGVycywgaW5jbHVkaW5nIGZpcnN0IGZvclxuLy8gV2Via2l0VHJhbnNmb3JtID0+IC13ZWJraXQtdHJhbnNmb3JtXG5mdW5jdGlvbiB0b0Rhc2hlZEFsbCggc3RyICkge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoIC8oW0EtWl0pL2csIGZ1bmN0aW9uKCAkMSApIHtcbiAgICByZXR1cm4gJy0nICsgJDEudG9Mb3dlckNhc2UoKTtcbiAgfSk7XG59XG5cbnZhciB0cmFuc2l0aW9uUHJvcHMgPSAnb3BhY2l0eSwnICsgdG9EYXNoZWRBbGwoIHRyYW5zZm9ybVByb3BlcnR5ICk7XG5cbnByb3RvLmVuYWJsZVRyYW5zaXRpb24gPSBmdW5jdGlvbigvKiBzdHlsZSAqLykge1xuICAvLyBIQUNLIGNoYW5naW5nIHRyYW5zaXRpb25Qcm9wZXJ0eSBkdXJpbmcgYSB0cmFuc2l0aW9uXG4gIC8vIHdpbGwgY2F1c2UgdHJhbnNpdGlvbiB0byBqdW1wXG4gIGlmICggdGhpcy5pc1RyYW5zaXRpb25pbmcgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gbWFrZSBgdHJhbnNpdGlvbjogZm9vLCBiYXIsIGJhemAgZnJvbSBzdHlsZSBvYmplY3RcbiAgLy8gSEFDSyB1bi1jb21tZW50IHRoaXMgd2hlbiBlbmFibGVUcmFuc2l0aW9uIGNhbiB3b3JrXG4gIC8vIHdoaWxlIGEgdHJhbnNpdGlvbiBpcyBoYXBwZW5pbmdcbiAgLy8gdmFyIHRyYW5zaXRpb25WYWx1ZXMgPSBbXTtcbiAgLy8gZm9yICggdmFyIHByb3AgaW4gc3R5bGUgKSB7XG4gIC8vICAgLy8gZGFzaC1pZnkgY2FtZWxDYXNlZCBwcm9wZXJ0aWVzIGxpa2UgV2Via2l0VHJhbnNpdGlvblxuICAvLyAgIHByb3AgPSB2ZW5kb3JQcm9wZXJ0aWVzWyBwcm9wIF0gfHwgcHJvcDtcbiAgLy8gICB0cmFuc2l0aW9uVmFsdWVzLnB1c2goIHRvRGFzaGVkQWxsKCBwcm9wICkgKTtcbiAgLy8gfVxuICAvLyBtdW5nZSBudW1iZXIgdG8gbWlsbGlzZWNvbmQsIHRvIG1hdGNoIHN0YWdnZXJcbiAgdmFyIGR1cmF0aW9uID0gdGhpcy5sYXlvdXQub3B0aW9ucy50cmFuc2l0aW9uRHVyYXRpb247XG4gIGR1cmF0aW9uID0gdHlwZW9mIGR1cmF0aW9uID09ICdudW1iZXInID8gZHVyYXRpb24gKyAnbXMnIDogZHVyYXRpb247XG4gIC8vIGVuYWJsZSB0cmFuc2l0aW9uIHN0eWxlc1xuICB0aGlzLmNzcyh7XG4gICAgdHJhbnNpdGlvblByb3BlcnR5OiB0cmFuc2l0aW9uUHJvcHMsXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICB0cmFuc2l0aW9uRGVsYXk6IHRoaXMuc3RhZ2dlckRlbGF5IHx8IDBcbiAgfSk7XG4gIC8vIGxpc3RlbiBmb3IgdHJhbnNpdGlvbiBlbmQgZXZlbnRcbiAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoIHRyYW5zaXRpb25FbmRFdmVudCwgdGhpcywgZmFsc2UgKTtcbn07XG5cbi8vIC0tLS0tIGV2ZW50cyAtLS0tLSAvL1xuXG5wcm90by5vbndlYmtpdFRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHRoaXMub250cmFuc2l0aW9uZW5kKCBldmVudCApO1xufTtcblxucHJvdG8ub25vdHJhbnNpdGlvbmVuZCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgdGhpcy5vbnRyYW5zaXRpb25lbmQoIGV2ZW50ICk7XG59O1xuXG4vLyBwcm9wZXJ0aWVzIHRoYXQgSSBtdW5nZSB0byBtYWtlIG15IGxpZmUgZWFzaWVyXG52YXIgZGFzaGVkVmVuZG9yUHJvcGVydGllcyA9IHtcbiAgJy13ZWJraXQtdHJhbnNmb3JtJzogJ3RyYW5zZm9ybSdcbn07XG5cbnByb3RvLm9udHJhbnNpdGlvbmVuZCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgLy8gZGlzcmVnYXJkIGJ1YmJsZWQgZXZlbnRzIGZyb20gY2hpbGRyZW5cbiAgaWYgKCBldmVudC50YXJnZXQgIT09IHRoaXMuZWxlbWVudCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIF90cmFuc2l0aW9uID0gdGhpcy5fdHJhbnNuO1xuICAvLyBnZXQgcHJvcGVydHkgbmFtZSBvZiB0cmFuc2l0aW9uZWQgcHJvcGVydHksIGNvbnZlcnQgdG8gcHJlZml4LWZyZWVcbiAgdmFyIHByb3BlcnR5TmFtZSA9IGRhc2hlZFZlbmRvclByb3BlcnRpZXNbIGV2ZW50LnByb3BlcnR5TmFtZSBdIHx8IGV2ZW50LnByb3BlcnR5TmFtZTtcblxuICAvLyByZW1vdmUgcHJvcGVydHkgdGhhdCBoYXMgY29tcGxldGVkIHRyYW5zaXRpb25pbmdcbiAgZGVsZXRlIF90cmFuc2l0aW9uLmluZ1Byb3BlcnRpZXNbIHByb3BlcnR5TmFtZSBdO1xuICAvLyBjaGVjayBpZiBhbnkgcHJvcGVydGllcyBhcmUgc3RpbGwgdHJhbnNpdGlvbmluZ1xuICBpZiAoIGlzRW1wdHlPYmooIF90cmFuc2l0aW9uLmluZ1Byb3BlcnRpZXMgKSApIHtcbiAgICAvLyBhbGwgcHJvcGVydGllcyBoYXZlIGNvbXBsZXRlZCB0cmFuc2l0aW9uaW5nXG4gICAgdGhpcy5kaXNhYmxlVHJhbnNpdGlvbigpO1xuICB9XG4gIC8vIGNsZWFuIHN0eWxlXG4gIGlmICggcHJvcGVydHlOYW1lIGluIF90cmFuc2l0aW9uLmNsZWFuICkge1xuICAgIC8vIGNsZWFuIHVwIHN0eWxlXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlWyBldmVudC5wcm9wZXJ0eU5hbWUgXSA9ICcnO1xuICAgIGRlbGV0ZSBfdHJhbnNpdGlvbi5jbGVhblsgcHJvcGVydHlOYW1lIF07XG4gIH1cbiAgLy8gdHJpZ2dlciBvblRyYW5zaXRpb25FbmQgY2FsbGJhY2tcbiAgaWYgKCBwcm9wZXJ0eU5hbWUgaW4gX3RyYW5zaXRpb24ub25FbmQgKSB7XG4gICAgdmFyIG9uVHJhbnNpdGlvbkVuZCA9IF90cmFuc2l0aW9uLm9uRW5kWyBwcm9wZXJ0eU5hbWUgXTtcbiAgICBvblRyYW5zaXRpb25FbmQuY2FsbCggdGhpcyApO1xuICAgIGRlbGV0ZSBfdHJhbnNpdGlvbi5vbkVuZFsgcHJvcGVydHlOYW1lIF07XG4gIH1cblxuICB0aGlzLmVtaXRFdmVudCggJ3RyYW5zaXRpb25FbmQnLCBbIHRoaXMgXSApO1xufTtcblxucHJvdG8uZGlzYWJsZVRyYW5zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5yZW1vdmVUcmFuc2l0aW9uU3R5bGVzKCk7XG4gIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCB0cmFuc2l0aW9uRW5kRXZlbnQsIHRoaXMsIGZhbHNlICk7XG4gIHRoaXMuaXNUcmFuc2l0aW9uaW5nID0gZmFsc2U7XG59O1xuXG4vKipcbiAqIHJlbW92ZXMgc3R5bGUgcHJvcGVydHkgZnJvbSBlbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gc3R5bGVcbioqL1xucHJvdG8uX3JlbW92ZVN0eWxlcyA9IGZ1bmN0aW9uKCBzdHlsZSApIHtcbiAgLy8gY2xlYW4gdXAgdHJhbnNpdGlvbiBzdHlsZXNcbiAgdmFyIGNsZWFuU3R5bGUgPSB7fTtcbiAgZm9yICggdmFyIHByb3AgaW4gc3R5bGUgKSB7XG4gICAgY2xlYW5TdHlsZVsgcHJvcCBdID0gJyc7XG4gIH1cbiAgdGhpcy5jc3MoIGNsZWFuU3R5bGUgKTtcbn07XG5cbnZhciBjbGVhblRyYW5zaXRpb25TdHlsZSA9IHtcbiAgdHJhbnNpdGlvblByb3BlcnR5OiAnJyxcbiAgdHJhbnNpdGlvbkR1cmF0aW9uOiAnJyxcbiAgdHJhbnNpdGlvbkRlbGF5OiAnJ1xufTtcblxucHJvdG8ucmVtb3ZlVHJhbnNpdGlvblN0eWxlcyA9IGZ1bmN0aW9uKCkge1xuICAvLyByZW1vdmUgdHJhbnNpdGlvblxuICB0aGlzLmNzcyggY2xlYW5UcmFuc2l0aW9uU3R5bGUgKTtcbn07XG5cbi8vIC0tLS0tIHN0YWdnZXIgLS0tLS0gLy9cblxucHJvdG8uc3RhZ2dlciA9IGZ1bmN0aW9uKCBkZWxheSApIHtcbiAgZGVsYXkgPSBpc05hTiggZGVsYXkgKSA/IDAgOiBkZWxheTtcbiAgdGhpcy5zdGFnZ2VyRGVsYXkgPSBkZWxheSArICdtcyc7XG59O1xuXG4vLyAtLS0tLSBzaG93L2hpZGUvcmVtb3ZlIC0tLS0tIC8vXG5cbi8vIHJlbW92ZSBlbGVtZW50IGZyb20gRE9NXG5wcm90by5yZW1vdmVFbGVtID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCB0aGlzLmVsZW1lbnQgKTtcbiAgLy8gcmVtb3ZlIGRpc3BsYXk6IG5vbmVcbiAgdGhpcy5jc3MoeyBkaXNwbGF5OiAnJyB9KTtcbiAgdGhpcy5lbWl0RXZlbnQoICdyZW1vdmUnLCBbIHRoaXMgXSApO1xufTtcblxucHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gIC8vIGp1c3QgcmVtb3ZlIGVsZW1lbnQgaWYgbm8gdHJhbnNpdGlvbiBzdXBwb3J0IG9yIG5vIHRyYW5zaXRpb25cbiAgaWYgKCAhdHJhbnNpdGlvblByb3BlcnR5IHx8ICFwYXJzZUZsb2F0KCB0aGlzLmxheW91dC5vcHRpb25zLnRyYW5zaXRpb25EdXJhdGlvbiApICkge1xuICAgIHRoaXMucmVtb3ZlRWxlbSgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIHN0YXJ0IHRyYW5zaXRpb25cbiAgdGhpcy5vbmNlKCAndHJhbnNpdGlvbkVuZCcsIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucmVtb3ZlRWxlbSgpO1xuICB9KTtcbiAgdGhpcy5oaWRlKCk7XG59O1xuXG5wcm90by5yZXZlYWwgPSBmdW5jdGlvbigpIHtcbiAgZGVsZXRlIHRoaXMuaXNIaWRkZW47XG4gIC8vIHJlbW92ZSBkaXNwbGF5OiBub25lXG4gIHRoaXMuY3NzKHsgZGlzcGxheTogJycgfSk7XG5cbiAgdmFyIG9wdGlvbnMgPSB0aGlzLmxheW91dC5vcHRpb25zO1xuXG4gIHZhciBvblRyYW5zaXRpb25FbmQgPSB7fTtcbiAgdmFyIHRyYW5zaXRpb25FbmRQcm9wZXJ0eSA9IHRoaXMuZ2V0SGlkZVJldmVhbFRyYW5zaXRpb25FbmRQcm9wZXJ0eSgndmlzaWJsZVN0eWxlJyk7XG4gIG9uVHJhbnNpdGlvbkVuZFsgdHJhbnNpdGlvbkVuZFByb3BlcnR5IF0gPSB0aGlzLm9uUmV2ZWFsVHJhbnNpdGlvbkVuZDtcblxuICB0aGlzLnRyYW5zaXRpb24oe1xuICAgIGZyb206IG9wdGlvbnMuaGlkZGVuU3R5bGUsXG4gICAgdG86IG9wdGlvbnMudmlzaWJsZVN0eWxlLFxuICAgIGlzQ2xlYW5pbmc6IHRydWUsXG4gICAgb25UcmFuc2l0aW9uRW5kOiBvblRyYW5zaXRpb25FbmRcbiAgfSk7XG59O1xuXG5wcm90by5vblJldmVhbFRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbigpIHtcbiAgLy8gY2hlY2sgaWYgc3RpbGwgdmlzaWJsZVxuICAvLyBkdXJpbmcgdHJhbnNpdGlvbiwgaXRlbSBtYXkgaGF2ZSBiZWVuIGhpZGRlblxuICBpZiAoICF0aGlzLmlzSGlkZGVuICkge1xuICAgIHRoaXMuZW1pdEV2ZW50KCdyZXZlYWwnKTtcbiAgfVxufTtcblxuLyoqXG4gKiBnZXQgc3R5bGUgcHJvcGVydHkgdXNlIGZvciBoaWRlL3JldmVhbCB0cmFuc2l0aW9uIGVuZFxuICogQHBhcmFtIHtTdHJpbmd9IHN0eWxlUHJvcGVydHkgLSBoaWRkZW5TdHlsZS92aXNpYmxlU3R5bGVcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbnByb3RvLmdldEhpZGVSZXZlYWxUcmFuc2l0aW9uRW5kUHJvcGVydHkgPSBmdW5jdGlvbiggc3R5bGVQcm9wZXJ0eSApIHtcbiAgdmFyIG9wdGlvblN0eWxlID0gdGhpcy5sYXlvdXQub3B0aW9uc1sgc3R5bGVQcm9wZXJ0eSBdO1xuICAvLyB1c2Ugb3BhY2l0eVxuICBpZiAoIG9wdGlvblN0eWxlLm9wYWNpdHkgKSB7XG4gICAgcmV0dXJuICdvcGFjaXR5JztcbiAgfVxuICAvLyBnZXQgZmlyc3QgcHJvcGVydHlcbiAgZm9yICggdmFyIHByb3AgaW4gb3B0aW9uU3R5bGUgKSB7XG4gICAgcmV0dXJuIHByb3A7XG4gIH1cbn07XG5cbnByb3RvLmhpZGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gc2V0IGZsYWdcbiAgdGhpcy5pc0hpZGRlbiA9IHRydWU7XG4gIC8vIHJlbW92ZSBkaXNwbGF5OiBub25lXG4gIHRoaXMuY3NzKHsgZGlzcGxheTogJycgfSk7XG5cbiAgdmFyIG9wdGlvbnMgPSB0aGlzLmxheW91dC5vcHRpb25zO1xuXG4gIHZhciBvblRyYW5zaXRpb25FbmQgPSB7fTtcbiAgdmFyIHRyYW5zaXRpb25FbmRQcm9wZXJ0eSA9IHRoaXMuZ2V0SGlkZVJldmVhbFRyYW5zaXRpb25FbmRQcm9wZXJ0eSgnaGlkZGVuU3R5bGUnKTtcbiAgb25UcmFuc2l0aW9uRW5kWyB0cmFuc2l0aW9uRW5kUHJvcGVydHkgXSA9IHRoaXMub25IaWRlVHJhbnNpdGlvbkVuZDtcblxuICB0aGlzLnRyYW5zaXRpb24oe1xuICAgIGZyb206IG9wdGlvbnMudmlzaWJsZVN0eWxlLFxuICAgIHRvOiBvcHRpb25zLmhpZGRlblN0eWxlLFxuICAgIC8vIGtlZXAgaGlkZGVuIHN0dWZmIGhpZGRlblxuICAgIGlzQ2xlYW5pbmc6IHRydWUsXG4gICAgb25UcmFuc2l0aW9uRW5kOiBvblRyYW5zaXRpb25FbmRcbiAgfSk7XG59O1xuXG5wcm90by5vbkhpZGVUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24oKSB7XG4gIC8vIGNoZWNrIGlmIHN0aWxsIGhpZGRlblxuICAvLyBkdXJpbmcgdHJhbnNpdGlvbiwgaXRlbSBtYXkgaGF2ZSBiZWVuIHVuLWhpZGRlblxuICBpZiAoIHRoaXMuaXNIaWRkZW4gKSB7XG4gICAgdGhpcy5jc3MoeyBkaXNwbGF5OiAnbm9uZScgfSk7XG4gICAgdGhpcy5lbWl0RXZlbnQoJ2hpZGUnKTtcbiAgfVxufTtcblxucHJvdG8uZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmNzcyh7XG4gICAgcG9zaXRpb246ICcnLFxuICAgIGxlZnQ6ICcnLFxuICAgIHJpZ2h0OiAnJyxcbiAgICB0b3A6ICcnLFxuICAgIGJvdHRvbTogJycsXG4gICAgdHJhbnNpdGlvbjogJycsXG4gICAgdHJhbnNmb3JtOiAnJ1xuICB9KTtcbn07XG5cbnJldHVybiBJdGVtO1xuXG59KSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9vdXRsYXllci9pdGVtLmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogSXNvdG9wZSBMYXlvdXRNb2RlXG4gKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi8gLypnbG9iYWxzIGRlZmluZSwgbW9kdWxlLCByZXF1aXJlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAgICdnZXQtc2l6ZS9nZXQtc2l6ZScsXG4gICAgICAgICdvdXRsYXllci9vdXRsYXllcidcbiAgICAgIF0sXG4gICAgICBmYWN0b3J5ICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICByZXF1aXJlKCdnZXQtc2l6ZScpLFxuICAgICAgcmVxdWlyZSgnb3V0bGF5ZXInKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuSXNvdG9wZSA9IHdpbmRvdy5Jc290b3BlIHx8IHt9O1xuICAgIHdpbmRvdy5Jc290b3BlLkxheW91dE1vZGUgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LmdldFNpemUsXG4gICAgICB3aW5kb3cuT3V0bGF5ZXJcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggZ2V0U2l6ZSwgT3V0bGF5ZXIgKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBsYXlvdXQgbW9kZSBjbGFzc1xuICBmdW5jdGlvbiBMYXlvdXRNb2RlKCBpc290b3BlICkge1xuICAgIHRoaXMuaXNvdG9wZSA9IGlzb3RvcGU7XG4gICAgLy8gbGluayBwcm9wZXJ0aWVzXG4gICAgaWYgKCBpc290b3BlICkge1xuICAgICAgdGhpcy5vcHRpb25zID0gaXNvdG9wZS5vcHRpb25zWyB0aGlzLm5hbWVzcGFjZSBdO1xuICAgICAgdGhpcy5lbGVtZW50ID0gaXNvdG9wZS5lbGVtZW50O1xuICAgICAgdGhpcy5pdGVtcyA9IGlzb3RvcGUuZmlsdGVyZWRJdGVtcztcbiAgICAgIHRoaXMuc2l6ZSA9IGlzb3RvcGUuc2l6ZTtcbiAgICB9XG4gIH1cblxuICB2YXIgcHJvdG8gPSBMYXlvdXRNb2RlLnByb3RvdHlwZTtcblxuICAvKipcbiAgICogc29tZSBtZXRob2RzIHNob3VsZCBqdXN0IGRlZmVyIHRvIGRlZmF1bHQgT3V0bGF5ZXIgbWV0aG9kXG4gICAqIGFuZCByZWZlcmVuY2UgdGhlIElzb3RvcGUgaW5zdGFuY2UgYXMgYHRoaXNgXG4gICoqL1xuICB2YXIgZmFjYWRlTWV0aG9kcyA9IFtcbiAgICAnX3Jlc2V0TGF5b3V0JyxcbiAgICAnX2dldEl0ZW1MYXlvdXRQb3NpdGlvbicsXG4gICAgJ19tYW5hZ2VTdGFtcCcsXG4gICAgJ19nZXRDb250YWluZXJTaXplJyxcbiAgICAnX2dldEVsZW1lbnRPZmZzZXQnLFxuICAgICduZWVkc1Jlc2l6ZUxheW91dCcsXG4gICAgJ19nZXRPcHRpb24nXG4gIF07XG5cbiAgZmFjYWRlTWV0aG9kcy5mb3JFYWNoKCBmdW5jdGlvbiggbWV0aG9kTmFtZSApIHtcbiAgICBwcm90b1sgbWV0aG9kTmFtZSBdID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gT3V0bGF5ZXIucHJvdG90eXBlWyBtZXRob2ROYW1lIF0uYXBwbHkoIHRoaXMuaXNvdG9wZSwgYXJndW1lbnRzICk7XG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gLS0tLS0gIC0tLS0tIC8vXG5cbiAgLy8gZm9yIGhvcml6b250YWwgbGF5b3V0IG1vZGVzLCBjaGVjayB2ZXJ0aWNhbCBzaXplXG4gIHByb3RvLm5lZWRzVmVydGljYWxSZXNpemVMYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBkb24ndCB0cmlnZ2VyIGlmIHNpemUgZGlkIG5vdCBjaGFuZ2VcbiAgICB2YXIgc2l6ZSA9IGdldFNpemUoIHRoaXMuaXNvdG9wZS5lbGVtZW50ICk7XG4gICAgLy8gY2hlY2sgdGhhdCB0aGlzLnNpemUgYW5kIHNpemUgYXJlIHRoZXJlXG4gICAgLy8gSUU4IHRyaWdnZXJzIHJlc2l6ZSBvbiBib2R5IHNpemUgY2hhbmdlLCBzbyB0aGV5IG1pZ2h0IG5vdCBiZVxuICAgIHZhciBoYXNTaXplcyA9IHRoaXMuaXNvdG9wZS5zaXplICYmIHNpemU7XG4gICAgcmV0dXJuIGhhc1NpemVzICYmIHNpemUuaW5uZXJIZWlnaHQgIT0gdGhpcy5pc290b3BlLnNpemUuaW5uZXJIZWlnaHQ7XG4gIH07XG5cbiAgLy8gLS0tLS0gbWVhc3VyZW1lbnRzIC0tLS0tIC8vXG5cbiAgcHJvdG8uX2dldE1lYXN1cmVtZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pc290b3BlLl9nZXRNZWFzdXJlbWVudC5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG4gIH07XG5cbiAgcHJvdG8uZ2V0Q29sdW1uV2lkdGggPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmdldFNlZ21lbnRTaXplKCAnY29sdW1uJywgJ1dpZHRoJyApO1xuICB9O1xuXG4gIHByb3RvLmdldFJvd0hlaWdodCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZ2V0U2VnbWVudFNpemUoICdyb3cnLCAnSGVpZ2h0JyApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBnZXQgY29sdW1uV2lkdGggb3Igcm93SGVpZ2h0XG4gICAqIHNlZ21lbnQ6ICdjb2x1bW4nIG9yICdyb3cnXG4gICAqIHNpemUgJ1dpZHRoJyBvciAnSGVpZ2h0J1xuICAqKi9cbiAgcHJvdG8uZ2V0U2VnbWVudFNpemUgPSBmdW5jdGlvbiggc2VnbWVudCwgc2l6ZSApIHtcbiAgICB2YXIgc2VnbWVudE5hbWUgPSBzZWdtZW50ICsgc2l6ZTtcbiAgICB2YXIgb3V0ZXJTaXplID0gJ291dGVyJyArIHNpemU7XG4gICAgLy8gY29sdW1uV2lkdGggLyBvdXRlcldpZHRoIC8vIHJvd0hlaWdodCAvIG91dGVySGVpZ2h0XG4gICAgdGhpcy5fZ2V0TWVhc3VyZW1lbnQoIHNlZ21lbnROYW1lLCBvdXRlclNpemUgKTtcbiAgICAvLyBnb3Qgcm93SGVpZ2h0IG9yIGNvbHVtbldpZHRoLCB3ZSBjYW4gY2hpbGxcbiAgICBpZiAoIHRoaXNbIHNlZ21lbnROYW1lIF0gKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGZhbGwgYmFjayB0byBpdGVtIG9mIGZpcnN0IGVsZW1lbnRcbiAgICB2YXIgZmlyc3RJdGVtU2l6ZSA9IHRoaXMuZ2V0Rmlyc3RJdGVtU2l6ZSgpO1xuICAgIHRoaXNbIHNlZ21lbnROYW1lIF0gPSBmaXJzdEl0ZW1TaXplICYmIGZpcnN0SXRlbVNpemVbIG91dGVyU2l6ZSBdIHx8XG4gICAgICAvLyBvciBzaXplIG9mIGNvbnRhaW5lclxuICAgICAgdGhpcy5pc290b3BlLnNpemVbICdpbm5lcicgKyBzaXplIF07XG4gIH07XG5cbiAgcHJvdG8uZ2V0Rmlyc3RJdGVtU2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBmaXJzdEl0ZW0gPSB0aGlzLmlzb3RvcGUuZmlsdGVyZWRJdGVtc1swXTtcbiAgICByZXR1cm4gZmlyc3RJdGVtICYmIGZpcnN0SXRlbS5lbGVtZW50ICYmIGdldFNpemUoIGZpcnN0SXRlbS5lbGVtZW50ICk7XG4gIH07XG5cbiAgLy8gLS0tLS0gbWV0aG9kcyB0aGF0IHNob3VsZCByZWZlcmVuY2UgaXNvdG9wZSAtLS0tLSAvL1xuXG4gIHByb3RvLmxheW91dCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaXNvdG9wZS5sYXlvdXQuYXBwbHkoIHRoaXMuaXNvdG9wZSwgYXJndW1lbnRzICk7XG4gIH07XG5cbiAgcHJvdG8uZ2V0U2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaXNvdG9wZS5nZXRTaXplKCk7XG4gICAgdGhpcy5zaXplID0gdGhpcy5pc290b3BlLnNpemU7XG4gIH07XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gY3JlYXRlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbiAgTGF5b3V0TW9kZS5tb2RlcyA9IHt9O1xuXG4gIExheW91dE1vZGUuY3JlYXRlID0gZnVuY3Rpb24oIG5hbWVzcGFjZSwgb3B0aW9ucyApIHtcblxuICAgIGZ1bmN0aW9uIE1vZGUoKSB7XG4gICAgICBMYXlvdXRNb2RlLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcbiAgICB9XG5cbiAgICBNb2RlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIHByb3RvICk7XG4gICAgTW9kZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNb2RlO1xuXG4gICAgLy8gZGVmYXVsdCBvcHRpb25zXG4gICAgaWYgKCBvcHRpb25zICkge1xuICAgICAgTW9kZS5vcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG5cbiAgICBNb2RlLnByb3RvdHlwZS5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG4gICAgLy8gcmVnaXN0ZXIgaW4gSXNvdG9wZVxuICAgIExheW91dE1vZGUubW9kZXNbIG5hbWVzcGFjZSBdID0gTW9kZTtcblxuICAgIHJldHVybiBNb2RlO1xuICB9O1xuXG4gIHJldHVybiBMYXlvdXRNb2RlO1xuXG59KSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9pc290b3BlLWxheW91dC9qcy9sYXlvdXQtbW9kZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiFcbiAqIE1hc29ucnkgbGF5b3V0IG1vZGVcbiAqIHN1Yi1jbGFzc2VzIE1hc29ucnlcbiAqIGh0dHA6Ly9tYXNvbnJ5LmRlc2FuZHJvLmNvbVxuICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgcmVxdWlyZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgICAnLi4vbGF5b3V0LW1vZGUnLFxuICAgICAgICAnbWFzb25yeS9tYXNvbnJ5J1xuICAgICAgXSxcbiAgICAgIGZhY3RvcnkgKTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHJlcXVpcmUoJy4uL2xheW91dC1tb2RlJyksXG4gICAgICByZXF1aXJlKCdtYXNvbnJ5LWxheW91dCcpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIGZhY3RvcnkoXG4gICAgICB3aW5kb3cuSXNvdG9wZS5MYXlvdXRNb2RlLFxuICAgICAgd2luZG93Lk1hc29ucnlcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggTGF5b3V0TW9kZSwgTWFzb25yeSApIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWFzb25yeURlZmluaXRpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICAvLyBjcmVhdGUgYW4gT3V0bGF5ZXIgbGF5b3V0IGNsYXNzXG4gIHZhciBNYXNvbnJ5TW9kZSA9IExheW91dE1vZGUuY3JlYXRlKCdtYXNvbnJ5Jyk7XG5cbiAgdmFyIHByb3RvID0gTWFzb25yeU1vZGUucHJvdG90eXBlO1xuXG4gIHZhciBrZWVwTW9kZU1ldGhvZHMgPSB7XG4gICAgX2dldEVsZW1lbnRPZmZzZXQ6IHRydWUsXG4gICAgbGF5b3V0OiB0cnVlLFxuICAgIF9nZXRNZWFzdXJlbWVudDogdHJ1ZVxuICB9O1xuXG4gIC8vIGluaGVyaXQgTWFzb25yeSBwcm90b3R5cGVcbiAgZm9yICggdmFyIG1ldGhvZCBpbiBNYXNvbnJ5LnByb3RvdHlwZSApIHtcbiAgICAvLyBkbyBub3QgaW5oZXJpdCBtb2RlIG1ldGhvZHNcbiAgICBpZiAoICFrZWVwTW9kZU1ldGhvZHNbIG1ldGhvZCBdICkge1xuICAgICAgcHJvdG9bIG1ldGhvZCBdID0gTWFzb25yeS5wcm90b3R5cGVbIG1ldGhvZCBdO1xuICAgIH1cbiAgfVxuXG4gIHZhciBtZWFzdXJlQ29sdW1ucyA9IHByb3RvLm1lYXN1cmVDb2x1bW5zO1xuICBwcm90by5tZWFzdXJlQ29sdW1ucyA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIHNldCBpdGVtcywgdXNlZCBpZiBtZWFzdXJpbmcgZmlyc3QgaXRlbVxuICAgIHRoaXMuaXRlbXMgPSB0aGlzLmlzb3RvcGUuZmlsdGVyZWRJdGVtcztcbiAgICBtZWFzdXJlQ29sdW1ucy5jYWxsKCB0aGlzICk7XG4gIH07XG5cbiAgLy8gcG9pbnQgdG8gbW9kZSBvcHRpb25zIGZvciBmaXRXaWR0aFxuICB2YXIgX2dldE9wdGlvbiA9IHByb3RvLl9nZXRPcHRpb247XG4gIHByb3RvLl9nZXRPcHRpb24gPSBmdW5jdGlvbiggb3B0aW9uICkge1xuICAgIGlmICggb3B0aW9uID09ICdmaXRXaWR0aCcgKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmlzRml0V2lkdGggIT09IHVuZGVmaW5lZCA/XG4gICAgICAgIHRoaXMub3B0aW9ucy5pc0ZpdFdpZHRoIDogdGhpcy5vcHRpb25zLmZpdFdpZHRoO1xuICAgIH1cbiAgICByZXR1cm4gX2dldE9wdGlvbi5hcHBseSggdGhpcy5pc290b3BlLCBhcmd1bWVudHMgKTtcbiAgfTtcblxuICByZXR1cm4gTWFzb25yeU1vZGU7XG5cbn0pKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2lzb3RvcGUtbGF5b3V0L2pzL2xheW91dC1tb2Rlcy9tYXNvbnJ5LmpzXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qIVxuICogTWFzb25yeSB2NC4xLjBcbiAqIENhc2NhZGluZyBncmlkIGxheW91dCBsaWJyYXJ5XG4gKiBodHRwOi8vbWFzb25yeS5kZXNhbmRyby5jb21cbiAqIE1JVCBMaWNlbnNlXG4gKiBieSBEYXZpZCBEZVNhbmRyb1xuICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgcmVxdWlyZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgICAnb3V0bGF5ZXIvb3V0bGF5ZXInLFxuICAgICAgICAnZ2V0LXNpemUvZ2V0LXNpemUnXG4gICAgICBdLFxuICAgICAgZmFjdG9yeSApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgcmVxdWlyZSgnb3V0bGF5ZXInKSxcbiAgICAgIHJlcXVpcmUoJ2dldC1zaXplJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93Lk1hc29ucnkgPSBmYWN0b3J5KFxuICAgICAgd2luZG93Lk91dGxheWVyLFxuICAgICAgd2luZG93LmdldFNpemVcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggT3V0bGF5ZXIsIGdldFNpemUgKSB7XG5cbid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWFzb25yeURlZmluaXRpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICAvLyBjcmVhdGUgYW4gT3V0bGF5ZXIgbGF5b3V0IGNsYXNzXG4gIHZhciBNYXNvbnJ5ID0gT3V0bGF5ZXIuY3JlYXRlKCdtYXNvbnJ5Jyk7XG4gIC8vIGlzRml0V2lkdGggLT4gZml0V2lkdGhcbiAgTWFzb25yeS5jb21wYXRPcHRpb25zLmZpdFdpZHRoID0gJ2lzRml0V2lkdGgnO1xuXG4gIE1hc29ucnkucHJvdG90eXBlLl9yZXNldExheW91dCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZ2V0U2l6ZSgpO1xuICAgIHRoaXMuX2dldE1lYXN1cmVtZW50KCAnY29sdW1uV2lkdGgnLCAnb3V0ZXJXaWR0aCcgKTtcbiAgICB0aGlzLl9nZXRNZWFzdXJlbWVudCggJ2d1dHRlcicsICdvdXRlcldpZHRoJyApO1xuICAgIHRoaXMubWVhc3VyZUNvbHVtbnMoKTtcblxuICAgIC8vIHJlc2V0IGNvbHVtbiBZXG4gICAgdGhpcy5jb2xZcyA9IFtdO1xuICAgIGZvciAoIHZhciBpPTA7IGkgPCB0aGlzLmNvbHM7IGkrKyApIHtcbiAgICAgIHRoaXMuY29sWXMucHVzaCggMCApO1xuICAgIH1cblxuICAgIHRoaXMubWF4WSA9IDA7XG4gIH07XG5cbiAgTWFzb25yeS5wcm90b3R5cGUubWVhc3VyZUNvbHVtbnMgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmdldENvbnRhaW5lcldpZHRoKCk7XG4gICAgLy8gaWYgY29sdW1uV2lkdGggaXMgMCwgZGVmYXVsdCB0byBvdXRlcldpZHRoIG9mIGZpcnN0IGl0ZW1cbiAgICBpZiAoICF0aGlzLmNvbHVtbldpZHRoICkge1xuICAgICAgdmFyIGZpcnN0SXRlbSA9IHRoaXMuaXRlbXNbMF07XG4gICAgICB2YXIgZmlyc3RJdGVtRWxlbSA9IGZpcnN0SXRlbSAmJiBmaXJzdEl0ZW0uZWxlbWVudDtcbiAgICAgIC8vIGNvbHVtbldpZHRoIGZhbGwgYmFjayB0byBpdGVtIG9mIGZpcnN0IGVsZW1lbnRcbiAgICAgIHRoaXMuY29sdW1uV2lkdGggPSBmaXJzdEl0ZW1FbGVtICYmIGdldFNpemUoIGZpcnN0SXRlbUVsZW0gKS5vdXRlcldpZHRoIHx8XG4gICAgICAgIC8vIGlmIGZpcnN0IGVsZW0gaGFzIG5vIHdpZHRoLCBkZWZhdWx0IHRvIHNpemUgb2YgY29udGFpbmVyXG4gICAgICAgIHRoaXMuY29udGFpbmVyV2lkdGg7XG4gICAgfVxuXG4gICAgdmFyIGNvbHVtbldpZHRoID0gdGhpcy5jb2x1bW5XaWR0aCArPSB0aGlzLmd1dHRlcjtcblxuICAgIC8vIGNhbGN1bGF0ZSBjb2x1bW5zXG4gICAgdmFyIGNvbnRhaW5lcldpZHRoID0gdGhpcy5jb250YWluZXJXaWR0aCArIHRoaXMuZ3V0dGVyO1xuICAgIHZhciBjb2xzID0gY29udGFpbmVyV2lkdGggLyBjb2x1bW5XaWR0aDtcbiAgICAvLyBmaXggcm91bmRpbmcgZXJyb3JzLCB0eXBpY2FsbHkgd2l0aCBndXR0ZXJzXG4gICAgdmFyIGV4Y2VzcyA9IGNvbHVtbldpZHRoIC0gY29udGFpbmVyV2lkdGggJSBjb2x1bW5XaWR0aDtcbiAgICAvLyBpZiBvdmVyc2hvb3QgaXMgbGVzcyB0aGFuIGEgcGl4ZWwsIHJvdW5kIHVwLCBvdGhlcndpc2UgZmxvb3IgaXRcbiAgICB2YXIgbWF0aE1ldGhvZCA9IGV4Y2VzcyAmJiBleGNlc3MgPCAxID8gJ3JvdW5kJyA6ICdmbG9vcic7XG4gICAgY29scyA9IE1hdGhbIG1hdGhNZXRob2QgXSggY29scyApO1xuICAgIHRoaXMuY29scyA9IE1hdGgubWF4KCBjb2xzLCAxICk7XG4gIH07XG5cbiAgTWFzb25yeS5wcm90b3R5cGUuZ2V0Q29udGFpbmVyV2lkdGggPSBmdW5jdGlvbigpIHtcbiAgICAvLyBjb250YWluZXIgaXMgcGFyZW50IGlmIGZpdCB3aWR0aFxuICAgIHZhciBpc0ZpdFdpZHRoID0gdGhpcy5fZ2V0T3B0aW9uKCdmaXRXaWR0aCcpO1xuICAgIHZhciBjb250YWluZXIgPSBpc0ZpdFdpZHRoID8gdGhpcy5lbGVtZW50LnBhcmVudE5vZGUgOiB0aGlzLmVsZW1lbnQ7XG4gICAgLy8gY2hlY2sgdGhhdCB0aGlzLnNpemUgYW5kIHNpemUgYXJlIHRoZXJlXG4gICAgLy8gSUU4IHRyaWdnZXJzIHJlc2l6ZSBvbiBib2R5IHNpemUgY2hhbmdlLCBzbyB0aGV5IG1pZ2h0IG5vdCBiZVxuICAgIHZhciBzaXplID0gZ2V0U2l6ZSggY29udGFpbmVyICk7XG4gICAgdGhpcy5jb250YWluZXJXaWR0aCA9IHNpemUgJiYgc2l6ZS5pbm5lcldpZHRoO1xuICB9O1xuXG4gIE1hc29ucnkucHJvdG90eXBlLl9nZXRJdGVtTGF5b3V0UG9zaXRpb24gPSBmdW5jdGlvbiggaXRlbSApIHtcbiAgICBpdGVtLmdldFNpemUoKTtcbiAgICAvLyBob3cgbWFueSBjb2x1bW5zIGRvZXMgdGhpcyBicmljayBzcGFuXG4gICAgdmFyIHJlbWFpbmRlciA9IGl0ZW0uc2l6ZS5vdXRlcldpZHRoICUgdGhpcy5jb2x1bW5XaWR0aDtcbiAgICB2YXIgbWF0aE1ldGhvZCA9IHJlbWFpbmRlciAmJiByZW1haW5kZXIgPCAxID8gJ3JvdW5kJyA6ICdjZWlsJztcbiAgICAvLyByb3VuZCBpZiBvZmYgYnkgMSBwaXhlbCwgb3RoZXJ3aXNlIHVzZSBjZWlsXG4gICAgdmFyIGNvbFNwYW4gPSBNYXRoWyBtYXRoTWV0aG9kIF0oIGl0ZW0uc2l6ZS5vdXRlcldpZHRoIC8gdGhpcy5jb2x1bW5XaWR0aCApO1xuICAgIGNvbFNwYW4gPSBNYXRoLm1pbiggY29sU3BhbiwgdGhpcy5jb2xzICk7XG5cbiAgICB2YXIgY29sR3JvdXAgPSB0aGlzLl9nZXRDb2xHcm91cCggY29sU3BhbiApO1xuICAgIC8vIGdldCB0aGUgbWluaW11bSBZIHZhbHVlIGZyb20gdGhlIGNvbHVtbnNcbiAgICB2YXIgbWluaW11bVkgPSBNYXRoLm1pbi5hcHBseSggTWF0aCwgY29sR3JvdXAgKTtcbiAgICB2YXIgc2hvcnRDb2xJbmRleCA9IGNvbEdyb3VwLmluZGV4T2YoIG1pbmltdW1ZICk7XG5cbiAgICAvLyBwb3NpdGlvbiB0aGUgYnJpY2tcbiAgICB2YXIgcG9zaXRpb24gPSB7XG4gICAgICB4OiB0aGlzLmNvbHVtbldpZHRoICogc2hvcnRDb2xJbmRleCxcbiAgICAgIHk6IG1pbmltdW1ZXG4gICAgfTtcblxuICAgIC8vIGFwcGx5IHNldEhlaWdodCB0byBuZWNlc3NhcnkgY29sdW1uc1xuICAgIHZhciBzZXRIZWlnaHQgPSBtaW5pbXVtWSArIGl0ZW0uc2l6ZS5vdXRlckhlaWdodDtcbiAgICB2YXIgc2V0U3BhbiA9IHRoaXMuY29scyArIDEgLSBjb2xHcm91cC5sZW5ndGg7XG4gICAgZm9yICggdmFyIGkgPSAwOyBpIDwgc2V0U3BhbjsgaSsrICkge1xuICAgICAgdGhpcy5jb2xZc1sgc2hvcnRDb2xJbmRleCArIGkgXSA9IHNldEhlaWdodDtcbiAgICB9XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2xTcGFuIC0gbnVtYmVyIG9mIGNvbHVtbnMgdGhlIGVsZW1lbnQgc3BhbnNcbiAgICogQHJldHVybnMge0FycmF5fSBjb2xHcm91cFxuICAgKi9cbiAgTWFzb25yeS5wcm90b3R5cGUuX2dldENvbEdyb3VwID0gZnVuY3Rpb24oIGNvbFNwYW4gKSB7XG4gICAgaWYgKCBjb2xTcGFuIDwgMiApIHtcbiAgICAgIC8vIGlmIGJyaWNrIHNwYW5zIG9ubHkgb25lIGNvbHVtbiwgdXNlIGFsbCB0aGUgY29sdW1uIFlzXG4gICAgICByZXR1cm4gdGhpcy5jb2xZcztcbiAgICB9XG5cbiAgICB2YXIgY29sR3JvdXAgPSBbXTtcbiAgICAvLyBob3cgbWFueSBkaWZmZXJlbnQgcGxhY2VzIGNvdWxkIHRoaXMgYnJpY2sgZml0IGhvcml6b250YWxseVxuICAgIHZhciBncm91cENvdW50ID0gdGhpcy5jb2xzICsgMSAtIGNvbFNwYW47XG4gICAgLy8gZm9yIGVhY2ggZ3JvdXAgcG90ZW50aWFsIGhvcml6b250YWwgcG9zaXRpb25cbiAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBncm91cENvdW50OyBpKysgKSB7XG4gICAgICAvLyBtYWtlIGFuIGFycmF5IG9mIGNvbFkgdmFsdWVzIGZvciB0aGF0IG9uZSBncm91cFxuICAgICAgdmFyIGdyb3VwQ29sWXMgPSB0aGlzLmNvbFlzLnNsaWNlKCBpLCBpICsgY29sU3BhbiApO1xuICAgICAgLy8gYW5kIGdldCB0aGUgbWF4IHZhbHVlIG9mIHRoZSBhcnJheVxuICAgICAgY29sR3JvdXBbaV0gPSBNYXRoLm1heC5hcHBseSggTWF0aCwgZ3JvdXBDb2xZcyApO1xuICAgIH1cbiAgICByZXR1cm4gY29sR3JvdXA7XG4gIH07XG5cbiAgTWFzb25yeS5wcm90b3R5cGUuX21hbmFnZVN0YW1wID0gZnVuY3Rpb24oIHN0YW1wICkge1xuICAgIHZhciBzdGFtcFNpemUgPSBnZXRTaXplKCBzdGFtcCApO1xuICAgIHZhciBvZmZzZXQgPSB0aGlzLl9nZXRFbGVtZW50T2Zmc2V0KCBzdGFtcCApO1xuICAgIC8vIGdldCB0aGUgY29sdW1ucyB0aGF0IHRoaXMgc3RhbXAgYWZmZWN0c1xuICAgIHZhciBpc09yaWdpbkxlZnQgPSB0aGlzLl9nZXRPcHRpb24oJ29yaWdpbkxlZnQnKTtcbiAgICB2YXIgZmlyc3RYID0gaXNPcmlnaW5MZWZ0ID8gb2Zmc2V0LmxlZnQgOiBvZmZzZXQucmlnaHQ7XG4gICAgdmFyIGxhc3RYID0gZmlyc3RYICsgc3RhbXBTaXplLm91dGVyV2lkdGg7XG4gICAgdmFyIGZpcnN0Q29sID0gTWF0aC5mbG9vciggZmlyc3RYIC8gdGhpcy5jb2x1bW5XaWR0aCApO1xuICAgIGZpcnN0Q29sID0gTWF0aC5tYXgoIDAsIGZpcnN0Q29sICk7XG4gICAgdmFyIGxhc3RDb2wgPSBNYXRoLmZsb29yKCBsYXN0WCAvIHRoaXMuY29sdW1uV2lkdGggKTtcbiAgICAvLyBsYXN0Q29sIHNob3VsZCBub3QgZ28gb3ZlciBpZiBtdWx0aXBsZSBvZiBjb2x1bW5XaWR0aCAjNDI1XG4gICAgbGFzdENvbCAtPSBsYXN0WCAlIHRoaXMuY29sdW1uV2lkdGggPyAwIDogMTtcbiAgICBsYXN0Q29sID0gTWF0aC5taW4oIHRoaXMuY29scyAtIDEsIGxhc3RDb2wgKTtcbiAgICAvLyBzZXQgY29sWXMgdG8gYm90dG9tIG9mIHRoZSBzdGFtcFxuXG4gICAgdmFyIGlzT3JpZ2luVG9wID0gdGhpcy5fZ2V0T3B0aW9uKCdvcmlnaW5Ub3AnKTtcbiAgICB2YXIgc3RhbXBNYXhZID0gKCBpc09yaWdpblRvcCA/IG9mZnNldC50b3AgOiBvZmZzZXQuYm90dG9tICkgK1xuICAgICAgc3RhbXBTaXplLm91dGVySGVpZ2h0O1xuICAgIGZvciAoIHZhciBpID0gZmlyc3RDb2w7IGkgPD0gbGFzdENvbDsgaSsrICkge1xuICAgICAgdGhpcy5jb2xZc1tpXSA9IE1hdGgubWF4KCBzdGFtcE1heFksIHRoaXMuY29sWXNbaV0gKTtcbiAgICB9XG4gIH07XG5cbiAgTWFzb25yeS5wcm90b3R5cGUuX2dldENvbnRhaW5lclNpemUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLm1heFkgPSBNYXRoLm1heC5hcHBseSggTWF0aCwgdGhpcy5jb2xZcyApO1xuICAgIHZhciBzaXplID0ge1xuICAgICAgaGVpZ2h0OiB0aGlzLm1heFlcbiAgICB9O1xuXG4gICAgaWYgKCB0aGlzLl9nZXRPcHRpb24oJ2ZpdFdpZHRoJykgKSB7XG4gICAgICBzaXplLndpZHRoID0gdGhpcy5fZ2V0Q29udGFpbmVyRml0V2lkdGgoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2l6ZTtcbiAgfTtcblxuICBNYXNvbnJ5LnByb3RvdHlwZS5fZ2V0Q29udGFpbmVyRml0V2lkdGggPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdW51c2VkQ29scyA9IDA7XG4gICAgLy8gY291bnQgdW51c2VkIGNvbHVtbnNcbiAgICB2YXIgaSA9IHRoaXMuY29scztcbiAgICB3aGlsZSAoIC0taSApIHtcbiAgICAgIGlmICggdGhpcy5jb2xZc1tpXSAhPT0gMCApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB1bnVzZWRDb2xzKys7XG4gICAgfVxuICAgIC8vIGZpdCBjb250YWluZXIgdG8gY29sdW1ucyB0aGF0IGhhdmUgYmVlbiB1c2VkXG4gICAgcmV0dXJuICggdGhpcy5jb2xzIC0gdW51c2VkQ29scyApICogdGhpcy5jb2x1bW5XaWR0aCAtIHRoaXMuZ3V0dGVyO1xuICB9O1xuXG4gIE1hc29ucnkucHJvdG90eXBlLm5lZWRzUmVzaXplTGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHByZXZpb3VzV2lkdGggPSB0aGlzLmNvbnRhaW5lcldpZHRoO1xuICAgIHRoaXMuZ2V0Q29udGFpbmVyV2lkdGgoKTtcbiAgICByZXR1cm4gcHJldmlvdXNXaWR0aCAhPSB0aGlzLmNvbnRhaW5lcldpZHRoO1xuICB9O1xuXG4gIHJldHVybiBNYXNvbnJ5O1xuXG59KSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9tYXNvbnJ5LWxheW91dC9tYXNvbnJ5LmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogZml0Um93cyBsYXlvdXQgbW9kZVxuICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgcmVxdWlyZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgICAnLi4vbGF5b3V0LW1vZGUnXG4gICAgICBdLFxuICAgICAgZmFjdG9yeSApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHJlcXVpcmUoJy4uL2xheW91dC1tb2RlJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgZmFjdG9yeShcbiAgICAgIHdpbmRvdy5Jc290b3BlLkxheW91dE1vZGVcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggTGF5b3V0TW9kZSApIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIEZpdFJvd3MgPSBMYXlvdXRNb2RlLmNyZWF0ZSgnZml0Um93cycpO1xuXG52YXIgcHJvdG8gPSBGaXRSb3dzLnByb3RvdHlwZTtcblxucHJvdG8uX3Jlc2V0TGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMueCA9IDA7XG4gIHRoaXMueSA9IDA7XG4gIHRoaXMubWF4WSA9IDA7XG4gIHRoaXMuX2dldE1lYXN1cmVtZW50KCAnZ3V0dGVyJywgJ291dGVyV2lkdGgnICk7XG59O1xuXG5wcm90by5fZ2V0SXRlbUxheW91dFBvc2l0aW9uID0gZnVuY3Rpb24oIGl0ZW0gKSB7XG4gIGl0ZW0uZ2V0U2l6ZSgpO1xuXG4gIHZhciBpdGVtV2lkdGggPSBpdGVtLnNpemUub3V0ZXJXaWR0aCArIHRoaXMuZ3V0dGVyO1xuICAvLyBpZiB0aGlzIGVsZW1lbnQgY2Fubm90IGZpdCBpbiB0aGUgY3VycmVudCByb3dcbiAgdmFyIGNvbnRhaW5lcldpZHRoID0gdGhpcy5pc290b3BlLnNpemUuaW5uZXJXaWR0aCArIHRoaXMuZ3V0dGVyO1xuICBpZiAoIHRoaXMueCAhPT0gMCAmJiBpdGVtV2lkdGggKyB0aGlzLnggPiBjb250YWluZXJXaWR0aCApIHtcbiAgICB0aGlzLnggPSAwO1xuICAgIHRoaXMueSA9IHRoaXMubWF4WTtcbiAgfVxuXG4gIHZhciBwb3NpdGlvbiA9IHtcbiAgICB4OiB0aGlzLngsXG4gICAgeTogdGhpcy55XG4gIH07XG5cbiAgdGhpcy5tYXhZID0gTWF0aC5tYXgoIHRoaXMubWF4WSwgdGhpcy55ICsgaXRlbS5zaXplLm91dGVySGVpZ2h0ICk7XG4gIHRoaXMueCArPSBpdGVtV2lkdGg7XG5cbiAgcmV0dXJuIHBvc2l0aW9uO1xufTtcblxucHJvdG8uX2dldENvbnRhaW5lclNpemUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHsgaGVpZ2h0OiB0aGlzLm1heFkgfTtcbn07XG5cbnJldHVybiBGaXRSb3dzO1xuXG59KSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9pc290b3BlLWxheW91dC9qcy9sYXlvdXQtbW9kZXMvZml0LXJvd3MuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiB2ZXJ0aWNhbCBsYXlvdXQgbW9kZVxuICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgcmVxdWlyZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgICAnLi4vbGF5b3V0LW1vZGUnXG4gICAgICBdLFxuICAgICAgZmFjdG9yeSApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgcmVxdWlyZSgnLi4vbGF5b3V0LW1vZGUnKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICBmYWN0b3J5KFxuICAgICAgd2luZG93Lklzb3RvcGUuTGF5b3V0TW9kZVxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCBMYXlvdXRNb2RlICkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgVmVydGljYWwgPSBMYXlvdXRNb2RlLmNyZWF0ZSggJ3ZlcnRpY2FsJywge1xuICBob3Jpem9udGFsQWxpZ25tZW50OiAwXG59KTtcblxudmFyIHByb3RvID0gVmVydGljYWwucHJvdG90eXBlO1xuXG5wcm90by5fcmVzZXRMYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy55ID0gMDtcbn07XG5cbnByb3RvLl9nZXRJdGVtTGF5b3V0UG9zaXRpb24gPSBmdW5jdGlvbiggaXRlbSApIHtcbiAgaXRlbS5nZXRTaXplKCk7XG4gIHZhciB4ID0gKCB0aGlzLmlzb3RvcGUuc2l6ZS5pbm5lcldpZHRoIC0gaXRlbS5zaXplLm91dGVyV2lkdGggKSAqXG4gICAgdGhpcy5vcHRpb25zLmhvcml6b250YWxBbGlnbm1lbnQ7XG4gIHZhciB5ID0gdGhpcy55O1xuICB0aGlzLnkgKz0gaXRlbS5zaXplLm91dGVySGVpZ2h0O1xuICByZXR1cm4geyB4OiB4LCB5OiB5IH07XG59O1xuXG5wcm90by5fZ2V0Q29udGFpbmVyU2l6ZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4geyBoZWlnaHQ6IHRoaXMueSB9O1xufTtcblxucmV0dXJuIFZlcnRpY2FsO1xuXG59KSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9pc290b3BlLWxheW91dC9qcy9sYXlvdXQtbW9kZXMvdmVydGljYWwuanNcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBJc290b3BlIEl0ZW1cbioqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqLyAvKmdsb2JhbHMgZGVmaW5lLCBtb2R1bGUsIHJlcXVpcmUgKi9cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIFtcbiAgICAgICAgJ291dGxheWVyL291dGxheWVyJ1xuICAgICAgXSxcbiAgICAgIGZhY3RvcnkgKTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHJlcXVpcmUoJ291dGxheWVyJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93Lklzb3RvcGUgPSB3aW5kb3cuSXNvdG9wZSB8fCB7fTtcbiAgICB3aW5kb3cuSXNvdG9wZS5JdGVtID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdy5PdXRsYXllclxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCBPdXRsYXllciApIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSXRlbSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBzdWItY2xhc3MgT3V0bGF5ZXIgSXRlbVxuZnVuY3Rpb24gSXRlbSgpIHtcbiAgT3V0bGF5ZXIuSXRlbS5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG59XG5cbnZhciBwcm90byA9IEl0ZW0ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggT3V0bGF5ZXIuSXRlbS5wcm90b3R5cGUgKTtcblxudmFyIF9jcmVhdGUgPSBwcm90by5fY3JlYXRlO1xucHJvdG8uX2NyZWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAvLyBhc3NpZ24gaWQsIHVzZWQgZm9yIG9yaWdpbmFsLW9yZGVyIHNvcnRpbmdcbiAgdGhpcy5pZCA9IHRoaXMubGF5b3V0Lml0ZW1HVUlEKys7XG4gIF9jcmVhdGUuY2FsbCggdGhpcyApO1xuICB0aGlzLnNvcnREYXRhID0ge307XG59O1xuXG5wcm90by51cGRhdGVTb3J0RGF0YSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMuaXNJZ25vcmVkICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBkZWZhdWx0IHNvcnRlcnNcbiAgdGhpcy5zb3J0RGF0YS5pZCA9IHRoaXMuaWQ7XG4gIC8vIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG4gIHRoaXMuc29ydERhdGFbJ29yaWdpbmFsLW9yZGVyJ10gPSB0aGlzLmlkO1xuICB0aGlzLnNvcnREYXRhLnJhbmRvbSA9IE1hdGgucmFuZG9tKCk7XG4gIC8vIGdvIHRocnUgZ2V0U29ydERhdGEgb2JqIGFuZCBhcHBseSB0aGUgc29ydGVyc1xuICB2YXIgZ2V0U29ydERhdGEgPSB0aGlzLmxheW91dC5vcHRpb25zLmdldFNvcnREYXRhO1xuICB2YXIgc29ydGVycyA9IHRoaXMubGF5b3V0Ll9zb3J0ZXJzO1xuICBmb3IgKCB2YXIga2V5IGluIGdldFNvcnREYXRhICkge1xuICAgIHZhciBzb3J0ZXIgPSBzb3J0ZXJzWyBrZXkgXTtcbiAgICB0aGlzLnNvcnREYXRhWyBrZXkgXSA9IHNvcnRlciggdGhpcy5lbGVtZW50LCB0aGlzICk7XG4gIH1cbn07XG5cbnZhciBfZGVzdHJveSA9IHByb3RvLmRlc3Ryb3k7XG5wcm90by5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gIC8vIGNhbGwgc3VwZXJcbiAgX2Rlc3Ryb3kuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuICAvLyByZXNldCBkaXNwbGF5LCAjNzQxXG4gIHRoaXMuY3NzKHtcbiAgICBkaXNwbGF5OiAnJ1xuICB9KTtcbn07XG5cbnJldHVybiBJdGVtO1xuXG59KSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9pc290b3BlLWxheW91dC9qcy9pdGVtLmpzXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxuXG4vLyBCTE9HIEdSSURcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBlcXVhbEhlaWdodCggaXRlbXMgKSB7XG5cbiAgICAvLyBNQVggSEVJR0hUIFZBTFVFXG4gICAgdmFyIG1heEhlaWdodCA9IDA7XG5cbiAgICAvLyBHRVQgQUxMIExJU1QgSVRFTVNcbiAgICB2YXIgbGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggaXRlbXMgKTtcblxuICAgIC8vIEdFVCBUQUxMRVNUIExJU1QgSVRFTSBWQUxVRVxuICAgIGZvciAoIHZhciBpID0gMDsgaSA8IGxpc3RJdGVtcy5sZW5ndGg7IGkrKyApIHtcbiAgICAgICAgbGlzdEl0ZW1zW2ldLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcbiAgICAgICAgdmFyIGxpc3RJdGVtSGVpZ2h0ID0gbGlzdEl0ZW1zW2ldLm9mZnNldEhlaWdodDtcbiAgICAgICAgbWF4SGVpZ2h0ID0gbWF4SGVpZ2h0IDwgbGlzdEl0ZW1IZWlnaHQgPyBsaXN0SXRlbUhlaWdodCA6IG1heEhlaWdodDtcbiAgICB9XG5cbiAgICAvLyBTRVQgSEVJR0hUIEZPUiBBTEwgTElTVCBJVEVNU1xuICAgIGZvciAoIHZhciBqID0gMDsgaiA8IGxpc3RJdGVtcy5sZW5ndGg7IGorKyApIHtcbiAgICAgICAgbGlzdEl0ZW1zW2pdLnN0eWxlLmhlaWdodCA9IG1heEhlaWdodCArICdweCc7XG4gICAgfVxuXG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBlcXVhbEhlaWdodCggJy5ibG9nX19pdGVtJyApO1xufSwgZmFsc2UgKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XG4gICAgZXF1YWxIZWlnaHQoICcuYmxvZ19faXRlbScgKTtcbn0sIGZhbHNlICk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbWFya3VwL2NvbXBvbmVudHMvYmxvY2stYmxvZy9ibG9jay1ibG9nLmpzXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIFRFU1RJTU9OSUFMUyBTTElERVJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG52YXIgc3dpcGVyID0gcmVxdWlyZSggJ3N3aXBlcicgKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgIHN3aXBlciggJy50ZXN0aW1vbmlhbHMgLnN3aXBlci1jb250YWluZXInLCB7XG4gICAgICAgIHBhZ2luYXRpb246ICcudGVzdGltb25pYWxzIC5zd2lwZXItcGFnaW5hdGlvbicsXG4gICAgICAgIHBhZ2luYXRpb25DbGlja2FibGU6IHRydWUsXG4gICAgICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgICAgICA1MDA6IHtcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogMjAwMCxcbiAgICAgICAgICAgICAgICBzcGVlZDogMTAwMCxcbiAgICAgICAgICAgICAgICBncmFiQ3Vyc29yOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn0sIGZhbHNlICk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbWFya3VwL2NvbXBvbmVudHMvYmxvY2stdGVzdGltb25pYWxzL2Jsb2NrLXRlc3RpbW9uaWFscy5qc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbi8vIEdPT0dMRSBNQVBTXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxudmFyIEdvb2dsZU1hcHNMb2FkZXIgPSByZXF1aXJlKCAnZ29vZ2xlLW1hcHMnICk7XG5cbkdvb2dsZU1hcHNMb2FkZXIuTEFOR1VBR0UgPSAnZW4nO1xuR29vZ2xlTWFwc0xvYWRlci5LRVkgPSAnQUl6YVN5QVFUUTNneDU4dWxobXA2ektPelR3QWx6djJ6aGJhcmk4JztcblxuR29vZ2xlTWFwc0xvYWRlci5sb2FkKCBmdW5jdGlvbiAoIGdvb2dsZSApIHtcblxuICAgIHZhciBicmFtcHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcjbWFwJyApO1xuICAgIHZhciBicmFtcHRvbkNvb3JkcyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoIDUxLjUyMjA1MzUsIDAuMDQxOTI4OSApO1xuICAgIHZhciB6b29tVmFsdWUgPSAxNTtcbiAgICB2YXIgbWFya2VyUGF0aCA9ICdzdGF0aWMvaW1nL2Fzc2V0cy9ibG9jay1tYXAvbG9jYXRpb24taWNvbi5wbmcnO1xuXG4gICAgdmFyIGJyYW1wdG9uTWFwU3R5bGVzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3dhdGVyJyxcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLFxuICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyNlOWU5ZTknfSwge2xpZ2h0bmVzczogMTd9XVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogJ2xhbmRzY2FwZScsXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5JyxcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjZjVmNWY1J30sIHtsaWdodG5lc3M6IDIwfV1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdyb2FkLmhpZ2h3YXknLFxuICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeS5maWxsJyxcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjZmZmZmZmJ30sIHtsaWdodG5lc3M6IDE3fV1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdyb2FkLmhpZ2h3YXknLFxuICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeS5zdHJva2UnLFxuICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyNmZmZmZmYnfSwge2xpZ2h0bmVzczogMjl9LCB7d2VpZ2h0OiAwLjJ9XVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3JvYWQuYXJ0ZXJpYWwnLFxuICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsXG4gICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnI2ZmZmZmZid9LCB7bGlnaHRuZXNzOiAxOH1dXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncm9hZC5sb2NhbCcsXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5JyxcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjZmZmZmZmJ30sIHtsaWdodG5lc3M6IDE2fV1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdwb2knLFxuICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsXG4gICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnI2Y1ZjVmNSd9LCB7bGlnaHRuZXNzOiAyMX1dXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncG9pLnBhcmsnLFxuICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsXG4gICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnI2RlZGVkZSd9LCB7bGlnaHRuZXNzOiAyMX1dXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuc3Ryb2tlJyxcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7dmlzaWJpbGl0eTogJ29uJ30sIHtjb2xvcjogJyNmZmZmZmYnfSwge2xpZ2h0bmVzczogMTZ9XVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLFxuICAgICAgICAgICAgc3R5bGVyczogW3tzYXR1cmF0aW9uOiAzNn0sIHtjb2xvcjogJyMzMzMzMzMnfSwge2xpZ2h0bmVzczogNDB9XVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy5pY29uJyxcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7dmlzaWJpbGl0eTogJ29mZid9XVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3RyYW5zaXQnLFxuICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsXG4gICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogJyNmMmYyZjInIH0sIHsgbGlnaHRuZXNzOiAxOSB9XVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogJ2FkbWluaXN0cmF0aXZlJyxcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnkuZmlsbCcsXG4gICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogJyNmZWZlZmUnIH0sIHsgbGlnaHRuZXNzOiAyMCB9XVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBmZWF0dXJlVHlwZTogJ2FkbWluaXN0cmF0aXZlJyxcbiAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnkuc3Ryb2tlJyxcbiAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiAnI2ZlZmVmZScgfSwgeyBsaWdodG5lc3M6IDE3IH0sIHsgd2VpZ2h0OiAxLjIgfV1cbiAgICAgICAgfVxuICAgIF07XG5cbiAgICB2YXIgYnJhbXB0b25Qcm9wZXJ0aWVzID0ge1xuICAgICAgICBjZW50ZXI6IGJyYW1wdG9uQ29vcmRzLFxuICAgICAgICB6b29tOiB6b29tVmFsdWUsXG4gICAgICAgIG1hcFR5cGVJZDogZ29vZ2xlLm1hcHMuTWFwVHlwZUlkLlJPQURNQVAsXG4gICAgICAgIHBhbkNvbnRyb2w6IGZhbHNlLFxuICAgICAgICB6b29tQ29udHJvbDogZmFsc2UsXG4gICAgICAgIG1hcFR5cGVDb250cm9sOiBmYWxzZSxcbiAgICAgICAgc3RyZWV0Vmlld0NvbnRyb2w6IGZhbHNlLFxuICAgICAgICBzY3JvbGx3aGVlbDogZmFsc2UsXG4gICAgICAgIGRpc2FibGVEb3VibGVDbGlja1pvb206IHRydWUsXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgdmVydmlld01hcENvbnRyb2w6IHRydWUsXG4gICAgICAgIG92ZXJ2aWV3TWFwQ29udHJvbE9wdGlvbnM6IHtcbiAgICAgICAgICAgIG9wZW5lZDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGVzOiBicmFtcHRvbk1hcFN0eWxlc1xuICAgIH07XG5cbiAgICB2YXIgYnJhbXB0b25NYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKCBicmFtcHRvbiwgYnJhbXB0b25Qcm9wZXJ0aWVzICk7XG5cbiAgICB2YXIgYnJhbXB0b25NYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgICAgcG9zaXRpb246IGJyYW1wdG9uQ29vcmRzLFxuICAgICAgICBtYXA6IGJyYW1wdG9uTWFwLFxuICAgICAgICBpY29uOiBtYXJrZXJQYXRoLFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICBhbmltYXRpb246IGdvb2dsZS5tYXBzLkFuaW1hdGlvbi5EUk9QXG4gICAgfSk7XG5cbiAgICB2YXIgYnJhbXB0b25JbmZvID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe1xuICAgICAgICBjb250ZW50OiAnQnJhbXB0b24gTWFub3IgQWNhZGVteSdcbiAgICB9KTtcblxuICAgIGJyYW1wdG9uTWFya2VyLmFkZExpc3RlbmVyKCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJyYW1wdG9uSW5mby5vcGVuKCBicmFtcHRvbk1hcCwgYnJhbXB0b25NYXJrZXIgKTtcbiAgICB9KTtcblxuICAgIC8vIE1BS0UgR09PR0xFIE1BUCBSRVNQT05TSVZFXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIHZhciBicmFtcHRvbk1hcENlbnRlciA9IGJyYW1wdG9uTWFwLmdldENlbnRlcigpOyAvLyByZXR1cm5zIHRoZSBwb3NpdGlvbiBkaXNwbGF5ZWQgYXQgdGhlIGNlbnRlciBvZiB0aGUgbWFwXG5cbiAgICAvLyBDRU5URVIgR09PR0xFIE1BUFMgT04gQlJPV1NFUiBSRVNJWkUgKFJFU1BPTlNJVkUpXG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIoIHdpbmRvdywgJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYnJhbXB0b25NYXAuc2V0Q2VudGVyKCBicmFtcHRvbk1hcENlbnRlciApO1xuICAgIH0pO1xuXG4gICAgLy8gUkVUVVJOIENFTlRFUiBPRiBNQVAgVE8gVEhFIENFTlRFUiBPRiBXSU5ET1cgSUYgTUFQIFdBUyBNT1ZFRCBCWSBVU0VSXG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIoIGJyYW1wdG9uTWFwLCAnY2VudGVyX2NoYW5nZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBicmFtcHRvbk1hcC5zZXRDZW50ZXIoIGJyYW1wdG9uTWFwQ2VudGVyICk7XG4gICAgICAgIH0sIDMwMDAgKTtcbiAgICB9KTtcblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbWFya3VwL2NvbXBvbmVudHMvYmxvY2stbWFwL2Jsb2NrLW1hcC5qc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIoZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuXG5cdGlmIChyb290ID09PSBudWxsKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdHb29nbGUtbWFwcyBwYWNrYWdlIGNhbiBiZSB1c2VkIG9ubHkgaW4gYnJvd3NlcicpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZShmYWN0b3J5KTtcblx0fSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0fSBlbHNlIHtcblx0XHRyb290Lkdvb2dsZU1hcHNMb2FkZXIgPSBmYWN0b3J5KCk7XG5cdH1cblxufSkodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBudWxsLCBmdW5jdGlvbigpIHtcblxuXG5cdCd1c2Ugc3RyaWN0JztcblxuXG5cdHZhciBnb29nbGVWZXJzaW9uID0gJzMuMTgnO1xuXG5cdHZhciBzY3JpcHQgPSBudWxsO1xuXG5cdHZhciBnb29nbGUgPSBudWxsO1xuXG5cdHZhciBsb2FkaW5nID0gZmFsc2U7XG5cblx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuXG5cdHZhciBvbkxvYWRFdmVudHMgPSBbXTtcblxuXHR2YXIgb3JpZ2luYWxDcmVhdGVMb2FkZXJNZXRob2QgPSBudWxsO1xuXG5cblx0dmFyIEdvb2dsZU1hcHNMb2FkZXIgPSB7fTtcblxuXG5cdEdvb2dsZU1hcHNMb2FkZXIuVVJMID0gJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcyc7XG5cblx0R29vZ2xlTWFwc0xvYWRlci5LRVkgPSBudWxsO1xuXG5cdEdvb2dsZU1hcHNMb2FkZXIuTElCUkFSSUVTID0gW107XG5cblx0R29vZ2xlTWFwc0xvYWRlci5DTElFTlQgPSBudWxsO1xuXG5cdEdvb2dsZU1hcHNMb2FkZXIuQ0hBTk5FTCA9IG51bGw7XG5cblx0R29vZ2xlTWFwc0xvYWRlci5MQU5HVUFHRSA9IG51bGw7XG5cblx0R29vZ2xlTWFwc0xvYWRlci5SRUdJT04gPSBudWxsO1xuXG5cdEdvb2dsZU1hcHNMb2FkZXIuVkVSU0lPTiA9IGdvb2dsZVZlcnNpb247XG5cblx0R29vZ2xlTWFwc0xvYWRlci5XSU5ET1dfQ0FMTEJBQ0tfTkFNRSA9ICdfX2dvb2dsZV9tYXBzX2FwaV9wcm92aWRlcl9pbml0aWFsaXphdG9yX18nO1xuXG5cblx0R29vZ2xlTWFwc0xvYWRlci5fZ29vZ2xlTW9ja0FwaU9iamVjdCA9IHt9O1xuXG5cblx0R29vZ2xlTWFwc0xvYWRlci5sb2FkID0gZnVuY3Rpb24oZm4pIHtcblx0XHRpZiAoZ29vZ2xlID09PSBudWxsKSB7XG5cdFx0XHRpZiAobG9hZGluZyA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRpZiAoZm4pIHtcblx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChmbik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxvYWRpbmcgPSB0cnVlO1xuXG5cdFx0XHRcdHdpbmRvd1tHb29nbGVNYXBzTG9hZGVyLldJTkRPV19DQUxMQkFDS19OQU1FXSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJlYWR5KGZuKTtcblx0XHRcdFx0fTtcblxuXHRcdFx0XHRHb29nbGVNYXBzTG9hZGVyLmNyZWF0ZUxvYWRlcigpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoZm4pIHtcblx0XHRcdGZuKGdvb2dsZSk7XG5cdFx0fVxuXHR9O1xuXG5cblx0R29vZ2xlTWFwc0xvYWRlci5jcmVhdGVMb2FkZXIgPSBmdW5jdGlvbigpIHtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblx0XHRzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuXHRcdHNjcmlwdC5zcmMgPSBHb29nbGVNYXBzTG9hZGVyLmNyZWF0ZVVybCgpO1xuXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXHR9O1xuXG5cblx0R29vZ2xlTWFwc0xvYWRlci5pc0xvYWRlZCA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBnb29nbGUgIT09IG51bGw7XG5cdH07XG5cblxuXHRHb29nbGVNYXBzTG9hZGVyLmNyZWF0ZVVybCA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciB1cmwgPSBHb29nbGVNYXBzTG9hZGVyLlVSTDtcblxuXHRcdHVybCArPSAnP2NhbGxiYWNrPScgKyBHb29nbGVNYXBzTG9hZGVyLldJTkRPV19DQUxMQkFDS19OQU1FO1xuXG5cdFx0aWYgKEdvb2dsZU1hcHNMb2FkZXIuS0VZKSB7XG5cdFx0XHR1cmwgKz0gJyZrZXk9JyArIEdvb2dsZU1hcHNMb2FkZXIuS0VZO1xuXHRcdH1cblxuXHRcdGlmIChHb29nbGVNYXBzTG9hZGVyLkxJQlJBUklFUy5sZW5ndGggPiAwKSB7XG5cdFx0XHR1cmwgKz0gJyZsaWJyYXJpZXM9JyArIEdvb2dsZU1hcHNMb2FkZXIuTElCUkFSSUVTLmpvaW4oJywnKTtcblx0XHR9XG5cblx0XHRpZiAoR29vZ2xlTWFwc0xvYWRlci5DTElFTlQpIHtcblx0XHRcdHVybCArPSAnJmNsaWVudD0nICsgR29vZ2xlTWFwc0xvYWRlci5DTElFTlQgKyAnJnY9JyArIEdvb2dsZU1hcHNMb2FkZXIuVkVSU0lPTjtcblx0XHR9XG5cblx0XHRpZiAoR29vZ2xlTWFwc0xvYWRlci5DSEFOTkVMKSB7XG5cdFx0XHR1cmwgKz0gJyZjaGFubmVsPScgKyBHb29nbGVNYXBzTG9hZGVyLkNIQU5ORUw7XG5cdFx0fVxuXG5cdFx0aWYgKEdvb2dsZU1hcHNMb2FkZXIuTEFOR1VBR0UpIHtcblx0XHRcdHVybCArPSAnJmxhbmd1YWdlPScgKyBHb29nbGVNYXBzTG9hZGVyLkxBTkdVQUdFO1xuXHRcdH1cblxuXHRcdGlmIChHb29nbGVNYXBzTG9hZGVyLlJFR0lPTikge1xuXHRcdFx0dXJsICs9ICcmcmVnaW9uPScgKyBHb29nbGVNYXBzTG9hZGVyLlJFR0lPTjtcblx0XHR9XG5cblx0XHRyZXR1cm4gdXJsO1xuXHR9O1xuXG5cblx0R29vZ2xlTWFwc0xvYWRlci5yZWxlYXNlID0gZnVuY3Rpb24oZm4pIHtcblx0XHR2YXIgcmVsZWFzZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0R29vZ2xlTWFwc0xvYWRlci5LRVkgPSBudWxsO1xuXHRcdFx0R29vZ2xlTWFwc0xvYWRlci5MSUJSQVJJRVMgPSBbXTtcblx0XHRcdEdvb2dsZU1hcHNMb2FkZXIuQ0xJRU5UID0gbnVsbDtcblx0XHRcdEdvb2dsZU1hcHNMb2FkZXIuQ0hBTk5FTCA9IG51bGw7XG5cdFx0XHRHb29nbGVNYXBzTG9hZGVyLkxBTkdVQUdFID0gbnVsbDtcblx0XHRcdEdvb2dsZU1hcHNMb2FkZXIuUkVHSU9OID0gbnVsbDtcblx0XHRcdEdvb2dsZU1hcHNMb2FkZXIuVkVSU0lPTiA9IGdvb2dsZVZlcnNpb247XG5cblx0XHRcdGdvb2dsZSA9IG51bGw7XG5cdFx0XHRsb2FkaW5nID0gZmFsc2U7XG5cdFx0XHRjYWxsYmFja3MgPSBbXTtcblx0XHRcdG9uTG9hZEV2ZW50cyA9IFtdO1xuXG5cdFx0XHRpZiAodHlwZW9mIHdpbmRvdy5nb29nbGUgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdGRlbGV0ZSB3aW5kb3cuZ29vZ2xlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHlwZW9mIHdpbmRvd1tHb29nbGVNYXBzTG9hZGVyLldJTkRPV19DQUxMQkFDS19OQU1FXSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0ZGVsZXRlIHdpbmRvd1tHb29nbGVNYXBzTG9hZGVyLldJTkRPV19DQUxMQkFDS19OQU1FXTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG9yaWdpbmFsQ3JlYXRlTG9hZGVyTWV0aG9kICE9PSBudWxsKSB7XG5cdFx0XHRcdEdvb2dsZU1hcHNMb2FkZXIuY3JlYXRlTG9hZGVyID0gb3JpZ2luYWxDcmVhdGVMb2FkZXJNZXRob2Q7XG5cdFx0XHRcdG9yaWdpbmFsQ3JlYXRlTG9hZGVyTWV0aG9kID0gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHNjcmlwdCAhPT0gbnVsbCkge1xuXHRcdFx0XHRzY3JpcHQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdFx0XHRzY3JpcHQgPSBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZm4pIHtcblx0XHRcdFx0Zm4oKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0aWYgKGxvYWRpbmcpIHtcblx0XHRcdEdvb2dsZU1hcHNMb2FkZXIubG9hZChmdW5jdGlvbigpIHtcblx0XHRcdFx0cmVsZWFzZSgpO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbGVhc2UoKTtcblx0XHR9XG5cdH07XG5cblxuXHRHb29nbGVNYXBzTG9hZGVyLm9uTG9hZCA9IGZ1bmN0aW9uKGZuKSB7XG5cdFx0b25Mb2FkRXZlbnRzLnB1c2goZm4pO1xuXHR9O1xuXG5cblx0R29vZ2xlTWFwc0xvYWRlci5tYWtlTW9jayA9IGZ1bmN0aW9uKCkge1xuXHRcdG9yaWdpbmFsQ3JlYXRlTG9hZGVyTWV0aG9kID0gR29vZ2xlTWFwc0xvYWRlci5jcmVhdGVMb2FkZXI7XG5cblx0XHRHb29nbGVNYXBzTG9hZGVyLmNyZWF0ZUxvYWRlciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0d2luZG93Lmdvb2dsZSA9IEdvb2dsZU1hcHNMb2FkZXIuX2dvb2dsZU1vY2tBcGlPYmplY3Q7XG5cdFx0XHR3aW5kb3dbR29vZ2xlTWFwc0xvYWRlci5XSU5ET1dfQ0FMTEJBQ0tfTkFNRV0oKTtcblx0XHR9O1xuXHR9O1xuXG5cblx0dmFyIHJlYWR5ID0gZnVuY3Rpb24oZm4pIHtcblx0XHR2YXIgaTtcblxuXHRcdGxvYWRpbmcgPSBmYWxzZTtcblxuXHRcdGlmIChnb29nbGUgPT09IG51bGwpIHtcblx0XHRcdGdvb2dsZSA9IHdpbmRvdy5nb29nbGU7XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMDsgaSA8IG9uTG9hZEV2ZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0b25Mb2FkRXZlbnRzW2ldKGdvb2dsZSk7XG5cdFx0fVxuXG5cdFx0aWYgKGZuKSB7XG5cdFx0XHRmbihnb29nbGUpO1xuXHRcdH1cblxuXHRcdGZvciAoaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNhbGxiYWNrc1tpXShnb29nbGUpO1xuXHRcdH1cblxuXHRcdGNhbGxiYWNrcyA9IFtdO1xuXHR9O1xuXG5cblx0cmV0dXJuIEdvb2dsZU1hcHNMb2FkZXI7XG5cbn0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZ29vZ2xlLW1hcHMvbGliL0dvb2dsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbi8vIFBBR0UgQkxPRyBHUklEXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG52YXIgaW1hZ2VzTG9hZGVkID0gcmVxdWlyZSggJ2ltYWdlc2xvYWRlZCcgKTtcbnZhciBJc290b3BlQmxvZyA9IHJlcXVpcmUoICdpc290b3BlLWxheW91dCcgKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBibG9nR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucGFnZS1ibG9nX19tYWluIC5ibG9nLWdyaWQnICk7XG4gICAgdmFyIGJsb2dHcmlkU2l6ZXIgPSAnLmJsb2ctZ3JpZF9fc2l6ZXInO1xuICAgIHZhciBibG9nR3JpZEl0ZW0gPSAnLmJsb2ctZ3JpZF9faXRlbSc7XG4gICAgdmFyIGJsb2dMYXlvdXQ7XG5cbiAgICBpbWFnZXNMb2FkZWQoIGJsb2dHcmlkLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJsb2dMYXlvdXQgPSBuZXcgSXNvdG9wZUJsb2coIGJsb2dHcmlkLCB7XG4gICAgICAgICAgICBpdGVtU2VsZWN0b3I6IGJsb2dHcmlkSXRlbSxcbiAgICAgICAgICAgIHBlcmNlbnRQb3NpdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgIG1hc29ucnk6IHtcbiAgICAgICAgICAgICAgICBjb2x1bW5XaWR0aDogYmxvZ0dyaWRTaXplclxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL21hcmt1cC9jb21wb25lbnRzL3BhZ2UtYmxvZy9wYWdlLWJsb2cuanNcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==