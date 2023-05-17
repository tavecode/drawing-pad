// add 16x16 square divs to container in a grid shape (borders/margins/padding?)
// hover/drag effect



function fillBoard(dimensions) {
    let container = document.querySelector('.container')
    container.style.gridTemplateColumns = `repeat(${dimensions} , 1fr)`; //change '16' to variable
    container.style.gridTemplateRows = `repeat(${dimensions} , 1fr)`;
    
    for (let i = 0; i<256; i++) {
        let square = document.createElement('div')
//          square.style.backgroundColor = 'blue'
        container.insertAdjacentElement('beforeend', square);
    }
}



fillBoard(16)



//size() {
//    grid = 16;
//    prompt('Enter grid width (max: 16)') //change to text input box
//    return grid
//}

//document.querySelector(gridSize).textContent = `${grid} x ${grid}`

