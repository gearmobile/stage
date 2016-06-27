'use strict';

var menuCurrency = document.querySelector( '#header-currency' );
var menuCurrencyList = document.querySelector( '#header-currency-list' );
var menuLanguage = document.querySelector( '#header-language' );
var menuLanguageList = document.querySelector( '#header-language-list' );


// OPEN LANGUAGE MENU
// ----------------------------------------------------------
menuLanguage.addEventListener( 'click', function ( event ) {
    event.preventDefault();
    menuLanguageList.classList.add('is-visible');
}, false );

// OPEN CURRENCY MENU
// ----------------------------------------------------------
menuCurrency.addEventListener( 'click', function ( event ) {
    event.preventDefault();
    menuCurrencyList.classList.add('is-visible');
    //var className = menuCurrencyList.className;
    //console.log(className);
}, false );

document.addEventListener( 'click', function ( event ) {
    if ( event.target.id !== menuCurrencyList.id ) {
        //console.log(menuCurrencyList.id);
        menuCurrencyList.classList.remove('is-visible');
    }
});

//console.log(menuCurrencyList.className);
