'use strict';

const $ = require('jquery');

const heroLogo = $('.hero__logo');

heroLogo.on('mouseenter', function () {
    heroLogo.addClass('is-active');
});

heroLogo.on('mouseleave', function () {
    heroLogo.removeClass('is-active');
});
