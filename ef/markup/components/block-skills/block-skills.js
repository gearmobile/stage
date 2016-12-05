const Chartist = require( 'chartist' );

// VARIABLES
// -------------------------------------------------

// DONUT SKILLS VALUES
// -----------------------------------------------------
const donutUnoSkill = 58;
const donutDuoSkill = 75;
const donutTreSkill = 80;
const donutQuattroSkill = 90;

// DONUT ELEMENTS
// -----------------------------------------------------
const donutUno = document.querySelector( '#donutUno' );
const donutDuo = document.querySelector( '#donutDuo' );
const donutTre = document.querySelector( '#donutTre' );
const donutQuattro = document.querySelector( '#donutQuattro' );

// DONUT DATAS
// -----------------------------------------------------
const donutUnoData = {
    labels: [ 'Skill', 'No skill' ],
    series: [ donutUnoSkill, 100 - donutUnoSkill ]
};
const donutDuoData = {
    labels: [ 'Skill', 'No skill' ],
    series: [ donutDuoSkill, 100 - donutDuoSkill ]
};
const donutTreData = {
    labels: [ 'Skill', 'No skill' ],
    series: [ donutTreSkill, 100 - donutTreSkill ]
};
const donutQuattroData = {
    labels: [ 'Skill', 'No skill' ],
    series: [ donutQuattroSkill, 100 - donutQuattroSkill ]
};

// DONUT OPTIONS
// -----------------------------------------------------
const donutOptions = {
    donut: true,
    showLabel: false,
    donutWidth: 20
};

window.addEventListener( 'load', function () {

    // DRAW DONUT CHARTS
    // -----------------------------------------------------
    new Chartist.Pie( donutUno, donutUnoData, donutOptions );
    new Chartist.Pie( donutDuo, donutDuoData, donutOptions );
    new Chartist.Pie( donutTre, donutTreData, donutOptions );
    new Chartist.Pie( donutQuattro, donutQuattroData, donutOptions );

    // ADD DONUT VALUES
    // -----------------------------------------------------
    const chartUnoValue = document.createElement( 'div' );
    chartUnoValue.classList.add( 'holder-value' );
    chartUnoValue.innerHTML = donutUnoData.series[0] + '%';
    donutUno.appendChild( chartUnoValue );
    // -----------------------------------------------------
    const chartDuoValue = document.createElement( 'div' );
    chartDuoValue.classList.add( 'holder-value' );
    chartDuoValue.innerHTML = donutDuoData.series[0] + '%';
    donutDuo.appendChild( chartDuoValue );
    // -----------------------------------------------------
    const chartTreValue = document.createElement( 'div' );
    chartTreValue.classList.add( 'holder-value' );
    chartTreValue.innerHTML = donutTreData.series[0] + '%';
    donutTre.appendChild( chartTreValue );
    // -----------------------------------------------------
    const chartQuattroValue = document.createElement( 'div' );
    chartQuattroValue.classList.add( 'holder-value' );
    chartQuattroValue.innerHTML = donutQuattroData.series[0] + '%';
    donutQuattro.appendChild( chartQuattroValue );

}, false );
