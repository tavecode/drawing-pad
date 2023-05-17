// add 16x16 square divs to container in a grid shape (borders/margins/padding?)
// hover/drag effect



function fillBoard(dimensions) {
    let container = document.querySelector('.container')
    let squares = container.querySelectorAll('div')
    squares.forEach((div) => div.remove());
    container.style.gridTemplateColumns = `repeat(${dimensions} , 1fr)`; //change '16' to variable
    container.style.gridTemplateRows = `repeat(${dimensions} , 1fr)`;
    
    let amount = dimensions * dimensions;
    for (let i = 0; i<amount; i++) {
        let square = document.createElement('div')
          square.style.backgroundColor = 'blue'
        container.insertAdjacentElement('beforeend', square);
    }
}



fillBoard(16)

function changeSize(userInput) {
    if((userInput >= 2) && (userInput <= 100)) {
    fillBoard(userInput)
    }
    else {
        console.log('ERROR, invalid size input')
        alert('ERROR, choose a valid size: 2 - 100')
    }
}



//size() {
//    grid = 16;
//    prompt('Enter grid width (max: 16)') //change to text input box
//    return grid
//}

//document.querySelector(gridSize).textContent = `${grid} x ${grid}`

