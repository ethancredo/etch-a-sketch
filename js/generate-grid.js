let sketchContainer = document.querySelector('.sketch-container');

for(let i = 1; i <= 16; i++) {
    let sketchRow = document.createElement('div');
    sketchContainer.appendChild(sketchRow);
    sketchRow.setAttribute('class', 'sketch-row');

    for(let d = 1; d <= 16; d++) {
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
    sketchGrid[i].addEventListener('mousedown', function() {
        sketchGrid[i].setAttribute('style', 'background-color: black');
        console.log('asd');
    });
    
}
