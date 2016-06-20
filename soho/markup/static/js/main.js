'use strict';

var swiper = require('swiper');
var Slideout = require('slideout');
var Isotope = require('isotope-layout');
var imagesLoaded = require('imagesLoaded');


window.addEventListener('load', function () {

    // SLIDEOUT
    // --------------------------------------------------
    var sidebar = document.querySelector('#sidebar');
    var navbar = document.querySelector('#navbar');
    var main = document.querySelector('#main');
    var blockFixed = document.querySelector('.fixed');
    var sidebarWidth = 400;
    var navbarWidth = 400;
    var btnSidebar = document.querySelector('.button-sidebar');
    var closeSidebar = document.querySelector('.sidebar-close');
    var btnNavbar = document.querySelector('.button-navbar');
    var closeNavbar = document.querySelector('.navbar-button');


    var leftSlideout = new Slideout({
        'panel': main,
        'menu': sidebar,
        'padding': sidebarWidth,
        'tolerance': 70
    });


    var rightSlideout = new Slideout({
        'panel': main,
        'menu': navbar,
        'padding': navbarWidth,
        'tolerance': 70,
        'side': 'right'
    });


    btnSidebar.addEventListener('click', function () {

        leftSlideout.toggle();
        sidebar.style.zIndex = '0';

        leftSlideout.on('close', function () {
            sidebar.style.zIndex = '-1';
        });

    });

    closeSidebar.addEventListener('click', function () {
        leftSlideout.close();
    });


    leftSlideout.on('beforeopen', function () {
        blockFixed.classList.add('fixed-open-left');
    });

    leftSlideout.on('beforeclose', function () {
        blockFixed.classList.remove('fixed-open-left');
    });


    btnNavbar.addEventListener('click', function () {

        rightSlideout.toggle();
        navbar.style.zIndex = '0';

        rightSlideout.on('close', function () {
            navbar.style.zIndex = '-1';
        });

    });

    closeNavbar.addEventListener('click', function () {
        rightSlideout.close();
    });

    rightSlideout.on('beforeopen', function () {
        blockFixed.classList.add('fixed-open-right');
    });

    rightSlideout.on('beforeclose', function () {
        blockFixed.classList.remove('fixed-open-right');
    });



    // SWIPER SLIDER
    // --------------------------------------------------
    swiper('.main .swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
        // autoplay: 3500
    });


    // ISOTOPE
    // --------------------------------------------------
    var grid = document.querySelector('.gallery-content');
    var filtersElem = document.querySelector('.gallery-control');
    var iso;
    imagesLoaded( grid, function () {
        iso = new Isotope( grid, {
            itemSelector: '.gallery-content__item',
            percentPosition: true,
            masonry: {
                columnWidth: '.gallery-content__sizer'
            }
        });
    });

    // BIND FILTER BUTTON CLICK ----------------------------------
    filtersElem.addEventListener( 'click', function ( event ) {
        iso.arrange({ filter: event.target.getAttribute('data-filter') });
    });


}, false);
