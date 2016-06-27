'use strict';

var swiper = require('swiper');

window.addEventListener( 'DOMContentLoaded', function () {


    var menuLanguage = document.querySelector('#header-language');
    var menuLanguageList = document.querySelector('#header-language-list');

    var menuCurrency = document.querySelector('#header-currency');
    var menuCurrencyList = document.querySelector( '#header-currency-list');


    // OPEN LANGUAGE MENU
    // ----------------------------------------------------------
    menuLanguage.addEventListener( 'click', function () {
        menuLanguageList.classList.add('is-active');
    }, false );

    // CLOSE LANGUAGE MENU
    // ----------------------------------------------------------
    document.addEventListener( 'click', function ( event ) {
        if ( event.target.id !== menuLanguage.id && event.target.id !== menuLanguageList.id && menuLanguageList.classList.contains('is-active') ) {
            menuLanguageList.classList.remove('is-active');
        }
    }, false );


    // OPEN CURRENCY MENU
    // ----------------------------------------------------------
    menuCurrency.addEventListener( 'click', function () {
        menuCurrencyList.classList.add('is-active');
    }, false );


    // CLOSE CURRENCY MENU
    // ----------------------------------------------------------
    document.addEventListener( 'click', function ( event ) {
        if ( event.target.id !== menuCurrency.id && event.target.id !== menuCurrencyList.id && menuCurrencyList.classList.contains('is-active') ) {
            menuCurrencyList.classList.remove('is-active');
        }
    }, false );


    // SWIPER SLIDER
    // ----------------------------------------------------------
    swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        breakpoints: {
            900: {
                nextButton: null,
                prevButton: null
            }
        }
    });



}, false );
