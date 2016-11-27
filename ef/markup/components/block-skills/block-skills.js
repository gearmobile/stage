const Chart = require('chart.js');
// -------------------------------------------------
// VARIABLES
// -------------------------------------------------
const color1 = '#0cf';
const color2 = '#eaeaea';
const colorStroke = '#f00';
const wpValue = 58;
const htmlValue = 75;
const cssValue = 80;
const ptValue = 90;
const cutoutValue = 82;
// -------------------------------------------------
window.addEventListener( 'DOMContentLoaded', function () {
    // -------------------------------------------------
    const wpElement = document.querySelector( '#wordpress' );
    const htmlElement = document.querySelector( '#html' );
    const cssElement = document.querySelector( '#css' );
    const ptElement = document.querySelector( '#photoshop' );
    // -------------------------------------------------
    const wpContext = wpElement.getContext( '2d' );
    const htmlContext = htmlElement.getContext( '2d' );
    const cssContext = cssElement.getContext( '2d' );
    const ptContext = ptElement.getContext( '2d' );

    // -------------------------------------------------
    // CHARTS GLOBAL CONFIG  ---------------------------
    // -------------------------------------------------
    Chart.defaults.global.showTooltips = false;
    Chart.defaults.global.legend.display = false;
    Chart.defaults.global.title.display = false;
    Chart.defaults.global.animation.easing = 'easeOutQuart';
    // -------------------------------------------------
    // CHARTS DATA  ------------------------------------
    // -------------------------------------------------
    const wpData = {
        labels: [ 'Skill', 'No Skill' ],
        datasets: [
            {
                data: [ wpValue, 100 - wpValue ],
                backgroundColor: [ color1, color2 ]
            }
        ]
    };
    const htmlData = {
        labels: [ 'Skill', 'No Skill' ],
        datasets: [
            {
                data: [ htmlValue, 100 - htmlValue ],
                backgroundColor: [ color1, color2 ]
            }
        ]
    };
    const cssData = {
        labels: [ 'Skill', 'No Skill' ],
        datasets: [
            {
                data: [ cssValue, 100 - cssValue ],
                backgroundColor: [ color1, color2 ]
            }
        ]
    };
    const ptData = {
        labels: [ 'Skill', 'No Skill' ],
        datasets: [
            {
                data: [ ptValue, 100 - ptValue ],
                backgroundColor: [ color1, color2 ]
            }
        ]
    };
    // -------------------------------------------------
    // CHARTS OPTIONS
    // -------------------------------------------------
    const wpOptions = {
        cutoutPercentage: cutoutValue,
        borderWidth: 3,
        borderColor: colorStroke,
        responsive: true,
        animation: {
            onComplete: function () {
                wpContext.fillStyle = '#333';
                wpContext.font = '3rem Lato, sans-serif';
                wpContext.textBaseline = 'middle';
                wpContext.textAlign = 'center';
                wpContext.fillText( wpData.datasets[0].data[0] + '%', wpElement.width / 2, wpElement.height / 2 );
            }
        }
    };
    const htmlOptions = {
        cutoutPercentage: cutoutValue,
        borderWidth: 3,
        borderColor: colorStroke,
        responsive: true,
        animation: {
            onComplete: function () {
                htmlContext.fillStyle = '#333';
                htmlContext.font = '3rem Lato, sans-serif';
                htmlContext.textBaseline = 'middle';
                htmlContext.textAlign = 'center';
                htmlContext.fillText( htmlData.datasets[0].data[0] + '%', htmlElement.width / 2, htmlElement.height / 2 );
            }
        }
    };
    const cssOptions = {
        cutoutPercentage: cutoutValue,
        borderWidth: 3,
        borderColor: colorStroke,
        responsive: true,
        animation: {
            onComplete: function () {
                cssContext.fillStyle = '#333';
                cssContext.font = '3rem Lato, sans-serif';
                cssContext.textAlign = 'center';
                cssContext.textBaseline = 'middle';
                cssContext.fillText( cssData.datasets[0].data[0] + '%', cssElement.width / 2, cssElement.height / 2 );
            }
        }
    };
    const ptOptions = {
        cutoutPercentage: cutoutValue,
        borderWidth: 3,
        borderColor: colorStroke,
        responsive: true,
        animation: {
            onComplete: function () {
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















