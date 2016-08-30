
    // ----------------------------------------------
    // VARIABLES
    // ----------------------------------------------
    const primaryColor = '#fff';
    let width;
    let height;
    const aspectRatio = 0.074;
    // ----------------------------------------------
    // SECTION INFORMATION ELEMENTS
    // ----------------------------------------------
    const blockInformation = document.querySelector( '.information__main' );
    const blockInformationCanvas = document.querySelector( '.information__canvas' );
    const blockInformationCanvasContext = blockInformationCanvas.getContext( '2d' );
    // ----------------------------------------------
    // DRAW TRIANGLE TOP
    // ----------------------------------------------
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
    // ----------------------------------------------
    // GET WIDTH && HEIGHT OF CANVAS
    // ----------------------------------------------
    function variablesValues() {
        width = Math.floor( window.innerWidth );
        height = Math.floor( width * aspectRatio );
    }
    // ----------------------------------------------
    // STYLING CANVAS
    // ----------------------------------------------
    function stylingTop( blockTopCanvas ) {
        blockTopCanvas.style.position = 'absolute';
        blockTopCanvas.style.left = 0;
        blockTopCanvas.style.top = 0;
        blockTopCanvas.width = width;
        blockTopCanvas.height = height;
    }

    window.addEventListener( 'load', function () {
        variablesValues();
        stylingTop( blockInformationCanvas );
        drawTriangleTop( blockInformationCanvasContext, primaryColor );
    }, false );

    window.addEventListener( 'resize', function () {
        variablesValues();
        stylingTop( blockInformationCanvas, blockInformationCanvasContext );
        drawTriangleTop( blockInformationCanvasContext, primaryColor );
    }, false );
