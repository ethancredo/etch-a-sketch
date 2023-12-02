let defaultCanvasSize = 16;
let canvasSize = 0;
let colorSketch = '#000000';
canvasSize = defaultCanvasSize;

// create canvas on load
setCanvas();

// remove old canvas
function removeOldCanvas() {
    let sketchContainer = document.querySelector('.sketch-container');
    sketchContainer.remove();
}

// get canvas size from user then replace canvas
let btnCanvas = document.querySelector('.btnCanvas');
btnCanvas.addEventListener('click', function() {
    canvasSize = prompt('set size');
    removeOldCanvas();
    setCanvas();
});

// let sketchContainer = document.querySelector('.sketch-container');
function setCanvas() {
    let container = document.querySelector('.container');
    let sketchContainer = document.createElement('div');
    sketchContainer.setAttribute('class', 'sketch-container');
    container.appendChild(sketchContainer);

    for(let i = 1; i <= canvasSize; i++) {
        let sketchRow = document.createElement('div');
        sketchContainer.appendChild(sketchRow);
        sketchRow.setAttribute('class', 'sketch-row');
    
        for(let d = 1; d <= canvasSize; d++) {
            let sketchGrid = document.createElement('div');
            sketchRow.appendChild(sketchGrid);
            sketchGrid.setAttribute('class', 'grid-item');
            console.log(d);
        }
    }

    // change div color on mouse enter/hover
    // user querySelectorAll to select all grid-item class
    let sketchGrid = document.querySelectorAll('.grid-item');
    for(let i = 0; i < sketchGrid.length; i++) {
        sketchGrid[i].addEventListener('mouseenter', function() {
            sketchGrid[i].setAttribute('style', `background-color: ${colorSketch}`);
            console.log(i);
        });
    }
}

// set slider inside the menu
let menu = document.querySelector('.menu');
let sliderCanvasSize = document.querySelector('.sliderCanvasSize');
sliderCanvasSize.setAttribute('value', '16');
// change canvas value 
let canvasValue = document.querySelector('.canvasValue');
canvasValue.textContent = sliderCanvasSize.value;
sliderCanvasSize.oninput = function() {
    canvasValue.textContent = this.value;
    canvasSize = this.value;
}
// replace the canvas based on the slide value
sliderCanvasSize.addEventListener('mouseup', function() {
    removeOldCanvas();
    setCanvas();
});

// change sketch color on input and value on label
let colorValue = document.querySelector('.colorValue');
let colorPicker = document.querySelector('.colorPicker');
colorPicker.oninput = function() {
    colorValue.textContent = this.value;
    colorSketch = this.value;
}

// reset canvas
let btnReset = document.querySelector('.btnReset');
btnReset.addEventListener('click', function() {
    canvasSize = defaultCanvasSize;
    sliderCanvasSize.value = canvasSize;
    canvasValue.textContent = canvasSize;
    removeOldCanvas();
    setCanvas();
});


