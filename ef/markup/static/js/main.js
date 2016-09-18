'use strict';

// PAGE INDEX
// ----------------------------------------------------------
require( '../../components/block-topheader/block-topheader' );
require( '../../components/block-skills/block-skills' );
require( '../../components/block-follow/block-follow' );
require( '../../components/block-citation/block-citation' );
require( '../../components/block-testimonials/block-testimonials' );
require( '../../components/block-recent/block-recent' );
require( '../../components/block-map/block-map' );
require( '../../components/module-button/module-button' );


// var Isotope = require('isotope-layout');
// var imagesload = require('imagesloaded');
// var swiper = require('swiper');
var smoothScroll = require('smooth-scroll');



// TRIANGLES
// -------------------------------------------------------

var primaryColor = '#fff';
var secondaryColor = '#0cf';
var tertiaryColor = '#f7f7f7';

var delta = 0.12;
var delta1 = 0.08;
var delta2 = 0.041;
var delta3 = 0.66;

var width, height, width1, height1, height2;

// SECTION HERO ------------------------------------------
var hero = document.querySelector( '.hero' );

var heroBottom = document.querySelector( '.hero__bottom' );
var heroBottomCanvas = document.querySelector( '#heroBottomCanvas' );
var heroBottomCanvasContext = heroBottomCanvas.getContext( '2d' );

// SECTION FOLLOW -----------------------------------------
var follow = document.querySelector( '.follow' );

var followTop = document.querySelector( '.follow__top' );
var followTopCanvas = document.querySelector( '#followTopCanvas' );
var followTopCanvasContext = followTopCanvas.getContext( '2d' );

var followBottom = document.querySelector( '.follow__bottom' );
var followBottomCanvas = document.querySelector( '#followBottomCanvas' );
var followBottomCanvasContext = followBottomCanvas.getContext( '2d' );

// SECTION CITATION -----------------------------------------
var citation = document.querySelector( '.citation' );

var citationTop = document.querySelector( '.citation__top' );
var citationTopCanvas = document.querySelector( '#citationTopCanvas' );
var citationTopCanvasContext = citationTopCanvas.getContext( '2d' );

var citationBottom = document.querySelector( '.citation__bottom' );
var citationBottomCanvas = document.querySelector( '#citationBottomCanvas' );
var citationBottomCanvasContext = citationBottomCanvas.getContext( '2d' );

// SECTION TEAM -----------------------------------------
var team = document.querySelector( '.team' );

var teamTop = document.querySelector( '.team__top' );
var teamTopCanvas = document.querySelector( '#teamTopCanvas' );
var teamTopCanvasContext = teamTopCanvas.getContext( '2d' );

var teamBottom = document.querySelector( '.team__bottom' );
var teamBottomCanvas = document.querySelector( '#teamBottomCanvas' );
var teamBottomCanvasContext = teamBottomCanvas.getContext( '2d' );

// DRAW TRIANGLE TOP
// -------------------------------------------------
function drawTriangleTop( topCanvasContext, color ) {
    topCanvasContext.lineWidth = 1;
    topCanvasContext.strokeStyle = color;
    topCanvasContext.fillStyle = color;
    topCanvasContext.beginPath();
    topCanvasContext.moveTo( 0, 0 );
    topCanvasContext.lineTo( width, 0 );
    topCanvasContext.lineTo( 0, height );
    topCanvasContext.stroke();
    topCanvasContext.fill();
    topCanvasContext.closePath();
}

// DRAW TRIANGLE BOTTOM
// -------------------------------------------------
function drawTriangleBottom( bottomCanvasContext, color1, color2 ) {
    bottomCanvasContext.lineWidth = 1;

    // draw large triangle
    bottomCanvasContext.strokeStyle = color1;
    bottomCanvasContext.fillStyle = color1;
    bottomCanvasContext.beginPath();
    bottomCanvasContext.moveTo( width, 0 );
    bottomCanvasContext.lineTo( width, height );
    bottomCanvasContext.lineTo( 0, height );
    bottomCanvasContext.stroke();
    bottomCanvasContext.fill();
    bottomCanvasContext.closePath();

    // draw small triangle
    bottomCanvasContext.beginPath();
    bottomCanvasContext.strokeStyle = color2;
    bottomCanvasContext.fillStyle = color2;
    bottomCanvasContext.moveTo( width, 0 );
    bottomCanvasContext.lineTo( width, height1 );
    bottomCanvasContext.lineTo( width1, height2 );
    bottomCanvasContext.stroke();
    bottomCanvasContext.fill();
    bottomCanvasContext.closePath();
}

function variablesValues() {
    width = Math.floor( window.innerWidth );
    height = Math.floor( width * delta );
    width1 = Math.floor( width * delta3 );
    height1 = Math.floor( width * delta1 );
    height2 = Math.floor( width * delta2 );
}

function stylingTop( block, blockTop, blockTopCanvas ) {
    block.style.paddingTop = height + 'px';
    blockTop.style.height = height + 'px';
    blockTop.style.width = width;
    blockTop.style.position = 'absolute';
    blockTop.style.left = 0;
    blockTop.style.top = 0;
    blockTopCanvas.width = width;
    blockTopCanvas.height = height;
}

function stylingBottom( block, blockBottom, blockBottomCanvas ) {
    block.style.paddingBottom = height + 'px';
    blockBottom.style.height = height + 'px';
    blockBottom.style.width = width;
    blockBottom.style.position = 'absolute';
    blockBottom.style.left = 0;
    blockBottom.style.bottom = 0;
    blockBottomCanvas.width = width;
    blockBottomCanvas.height = height;
}


window.addEventListener( 'DOMContentLoaded', function () {
    variablesValues();

    // SECTION HERO -----------------------------------------
    stylingBottom( hero, heroBottom, heroBottomCanvas );
    drawTriangleBottom( heroBottomCanvasContext, primaryColor, secondaryColor );

    // SECTION TEAM -----------------------------------------
    stylingTop( team, teamTop, teamTopCanvas );
    stylingBottom( team, teamBottom, teamBottomCanvas );
    drawTriangleTop( teamTopCanvasContext, tertiaryColor );
    drawTriangleBottom( teamBottomCanvasContext, primaryColor, secondaryColor );

    // SECTION FOLLOW -----------------------------------------
    stylingTop( follow, followTop, followTopCanvas );
    stylingBottom( follow, followBottom, followBottomCanvas );
    drawTriangleTop( followTopCanvasContext, tertiaryColor );
    drawTriangleBottom( followBottomCanvasContext, primaryColor, secondaryColor );

    // SECTION CITATION -----------------------------------------
    stylingTop( citation, citationTop, citationTopCanvas );
    stylingBottom( citation, citationBottom, citationBottomCanvas );
    drawTriangleTop( citationTopCanvasContext, tertiaryColor );
    drawTriangleBottom( citationBottomCanvasContext, primaryColor, secondaryColor );

}, false );

window.addEventListener( 'resize', function () {
    variablesValues();

    // SECTION BLOCK HERO -----------------------------------------
    stylingBottom( hero, heroBottom, heroBottomCanvas );
    drawTriangleBottom( heroBottomCanvasContext, primaryColor, secondaryColor );

    // SECTION TEAM -----------------------------------------
    stylingTop( team, teamTop, teamTopCanvas );
    stylingBottom( team, teamBottom, teamBottomCanvas );
    drawTriangleTop( teamTopCanvasContext, tertiaryColor );
    drawTriangleBottom( teamBottomCanvasContext, primaryColor, secondaryColor );

    // SECTION FOLLOW -----------------------------------------
    stylingTop( follow, followTop, followTopCanvas );
    stylingBottom( follow, followBottom, followBottomCanvas );
    drawTriangleTop( followTopCanvasContext, tertiaryColor );
    drawTriangleBottom( followBottomCanvasContext, primaryColor, secondaryColor );

    // SECTION CITATION -----------------------------------------
    stylingTop( citation, citationTop, citationTopCanvas );
    stylingBottom( citation, citationBottom, citationBottomCanvas );
    drawTriangleTop( citationTopCanvasContext, tertiaryColor );
    drawTriangleBottom( citationBottomCanvasContext, primaryColor, secondaryColor );

}, false );

