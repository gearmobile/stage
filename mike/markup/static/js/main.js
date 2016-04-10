'use strict';

const $ = require('jquery');

var heroLogo = $('.hero__logo');

heroLogo.on('mouseenter', function () {
    $(this).addClass('is-active');
});

heroLogo.on('mouseleave', function () {
    $(this).removeClass('is-active');
});

