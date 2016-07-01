'use strict';

var Chart = require('chart.js');

window.addEventListener('DOMContentLoaded', function () {

    // CHART.JS
// ------------------------------------

    const color1 = '#0cf';
    const color2 = '#eaeaea';

    const wp = document.querySelector('#wordpress');
    const html = document.querySelector('#html');
    const css = document.querySelector('#css');
    const pt = document.querySelector('#photoshop');

    const wpContext = wp.getContext('2d');
    const htmlContext = html.getContext('2d');
    const cssContext = css.getContext('2d');
    const ptContext = pt.getContext('2d');

    const wpData = [
        {
            value: 58,
            color: color1
        },
        {
            value: 100 - 58,
            color: color2
        }
    ];

    const htmlData = [
        {
            value: 75,
            color: color1
        },
        {
            value: 100 - 75,
            color: color2
        }
    ];

    const cssData = [
        {
            value: 80,
            color: color1
        },
        {
            value: 100 - 80,
            color: color2
        }
    ];

    const ptData = [
        {
            value: 95,
            color: color1
        },
        {
            value: 100 - 95,
            color: color2
        }
    ];

    Chart.defaults.global.showTooltips = false;

    Chart( wpContext ).Doughnut( wpData, {
        percentageInnerCutout: 82,
        segmentStrokeWidth: 3,
        segmentStrokeColor: '#f7f7f7',
        onAnimationComplete: function () {
            wpContext.fillStyle = '#333';
            //wpContext.font = '3rem Lato, sans-serif';
            wpContext.textAlign = 'center';
            wpContext.textBaseline = 'middle';
            wpContext.fillText( wpData[0].value + '%', wp.width / 2, wp.height / 2 );
        }
    });

    Chart( htmlContext ).Doughnut( htmlData, {
        percentageInnerCutout: 82,
        segmentStrokeWidth: 3,
        segmentStrokeColor: '#f7f7f7',
        onAnimationComplete: function () {
            htmlContext.fillStyle = '#333';
            //htmlContext.font = '3rem Lato, sans-serif';
            htmlContext.textAlign = 'center';
            htmlContext.textBaseline = 'middle';
            htmlContext.fillText( htmlData[0].value + '%', html.width / 2, html.height / 2 );
        }
    });

    Chart( cssContext ).Doughnut( cssData, {
        percentageInnerCutout: 82,
        segmentStrokeWidth: 3,
        segmentStrokeColor: '#f7f7f7',
        onAnimationComplete: function () {
            cssContext.fillStyle = '#333';
            //cssContext.font = '3rem Lato, sans-serif';
            cssContext.textAlign = 'center';
            cssContext.textBaseline = 'middle';
            cssContext.fillText( cssData[0].value + '%', css.width / 2, css.height / 2 );
        }
    });

    Chart( ptContext ).Doughnut( ptData, {
        percentageInnerCutout: 82,
        segmentStrokeWidth: 3,
        segmentStrokeColor: '#f7f7f7',
        onAnimationComplete: function () {
            ptContext.fillStyle = '#333';
            //ptContext.font = '3rem Lato, sans-serif';
            ptContext.textAlign = 'center';
            ptContext.textBaseline = 'middle';
            ptContext.fillText( ptData[0].value + '%', pt.width / 2, pt.height / 2 );
        }
    });

}, false );






