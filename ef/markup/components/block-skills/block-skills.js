var Chart = require('chart.js');
// -------------------------------------------------
// variables
// -------------------------------------------------
var color1 = '#0cf';
var color2 = '#eaeaea';
var colorStroke = '#f00';
var wpValue = 58;
var htmlValue = 75;
var cssValue = 80;
var ptValue = 90;
var cutoutValue = 82;
// -------------------------------------------------
window.addEventListener( 'DOMContentLoaded', function () {
    // -------------------------------------------------
    var wpElement = document.querySelector( '#wordpress' );
    var htmlElement = document.querySelector( '#html' );
    var cssElement = document.querySelector( '#css' );
    var ptElement = document.querySelector( '#photoshop' );
    // -------------------------------------------------
    if ( wpElement && wpElement.getContext ) {
        var wpContext = wpElement.getContext('2d');
    } else {
        return false;
    }
    // -------------------------------------------------
    if ( htmlElement && htmlElement.getContext ) {
        var htmlContext = htmlElement.getContext('2d');
    } else {
        return false;
    }
    // -------------------------------------------------
    if ( cssElement && cssElement.getContext ) {
        var cssContext = cssElement.getContext('2d');
    } else {
        return false;
    }
    // -------------------------------------------------
    if ( ptElement && ptElement.getContext ) {
        var ptContext = ptElement.getContext('2d');
    } else {
        return false;
    }
    // -------------------------------------------------
    // CHARTS GLOBAL CONFIG  ---------------------------
    // -------------------------------------------------
    Chart.defaults.global.showTooltips = false;
    Chart.defaults.global.legend.display = false;
    Chart.defaults.global.title.display = false;
    Chart.defaults.global.animation.duration = 1000;
    Chart.defaults.global.animation.easing = 'easeOutQuart';
    // -------------------------------------------------
    // CHARTS DATA  ------------------------------------
    // -------------------------------------------------
    var wpData = {
        labels: [ 'Blue', 'White' ],
        datasets: [
            {
                data: [ wpValue, 100 - wpValue ],
                backgroundColor: [ color1, color2 ],
                hoverBackgroundColor: [ color1, color2 ]
            }
        ]
    };
    var htmlData = {
        labels: [ 'Blue', 'White' ],
        datasets: [
            {
                data: [ htmlValue, 100 - htmlValue ],
                backgroundColor: [ color1, color2 ],
                hoverBackgroundColor: [ color1, color2 ]
            }
        ]
    };
    var cssData = {
        labels: [ 'Blue', 'White' ],
        datasets: [
            {
                data: [ cssValue, 100 - cssValue ],
                backgroundColor: [ color1, color2 ],
                hoverBackgroundColor: [ color1, color2 ]
            }
        ]
    };
    var ptData = {
        labels: [ 'Blue', 'White' ],
        datasets: [
            {
                data: [ ptValue, 100 - ptValue ],
                backgroundColor: [ color1, color2 ],
                hoverBackgroundColor: [ color1, color2 ]
            }
        ]
    };
    // -------------------------------------------------
    // CHARTS OPTIONS
    // -------------------------------------------------
    var wpOptions = {
        cutoutPercentage: cutoutValue,
        borderWidth: 3,
        borderColor: colorStroke,
        responsive: true,
        animation: {
            animateScale: true,
            animateRotate: true,
            onCompvare: function () {
                wpContext.fillStyle = '#333';
                wpContext.font = '3rem Lato, sans-serif';
                wpContext.textAlign = 'center';
                wpContext.textBaseline = 'middle';
                wpContext.fillText( wpData.datasets[0].data[0] + '%', wpElement.width / 2, wpElement.height / 2 );
            }
        }
    };
    var htmlOptions = {
        cutoutPercentage: cutoutValue,
        borderWidth: 3,
        borderColor: colorStroke,
        responsive: true,
        animation: {
            animateScale: true,
            animateRotate: true,
            onCompvare: function () {
                htmlContext.fillStyle = '#333';
                htmlContext.font = '3rem Lato, sans-serif';
                htmlContext.textAlign = 'center';
                htmlContext.textBaseline = 'middle';
                htmlContext.fillText( htmlData.datasets[0].data[0] + '%', htmlElement.width / 2, htmlElement.height / 2 );
            }
        }
    };
    var cssOptions = {
        cutoutPercentage: cutoutValue,
        borderWidth: 3,
        borderColor: colorStroke,
        responsive: true,
        animation: {
            animateScale: true,
            animateRotate: true,
            onCompvare: function () {
                cssContext.fillStyle = '#333';
                cssContext.font = '3rem Lato, sans-serif';
                cssContext.textAlign = 'center';
                cssContext.textBaseline = 'middle';
                cssContext.fillText( cssData.datasets[0].data[0] + '%', cssElement.width / 2, cssElement.height / 2 );
            }
        }
    };
    var ptOptions = {
        cutoutPercentage: cutoutValue,
        borderWidth: 3,
        borderColor: colorStroke,
        responsive: true,
        animation: {
            animateScale: true,
            animateRotate: true,
            onCompvare: function () {
                ptContext.fillStyle = '#333';
                ptContext.font = '3rem Lato, sans-serif';
                ptContext.textAlign = 'center';
                ptContext.textBaseline = 'middle';
                ptContext.fillText( ptData.datasets[0].data[0] + '%', ptElement.width / 2, ptElement.height / 2 );
            }
        }
    };
    // -------------------------------------------------
    // CHARTS  -----------------------------------------
    // -------------------------------------------------
    var wpChart = new Chart( wpContext, {
        type: 'doughnut',
        data: wpData,
        options: wpOptions
    });

    var htmlChart = new Chart( htmlContext, {
        type: 'doughnut',
        data: htmlData,
        options: htmlOptions
    });

    var cssChart = new Chart( cssContext, {
        type: 'doughnut',
        data: cssData,
        options: cssOptions
    });

    var ptChart = new Chart( ptContext, {
        type: 'doughnut',
        data: ptData,
        options: ptOptions
    });
    // -------------------------------------------------
}, false );















