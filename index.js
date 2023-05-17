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
          square.style.backgroundColor = 'lightgray'
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = `${colour}`
        })
       // square.addEventListener('mouseover', draw)
        container.insertAdjacentElement('beforeend', square);
    }
    document.querySelector('#gridSize').textContent = `${dimensions} x ${dimensions} | ${amount}`
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


//colours
const black = document.querySelector('#black');
black.onclick = () => colour = 'black';

const navy = document.querySelector('#navy');
navy.onclick = () => colour = 'navy';

const blue = document.querySelector('#blue');
blue.onclick = () => colour = 'blue';

const grey = document.querySelector('#grey');
grey.onclick = () => colour = 'grey';

const lb = document.querySelector('#lb');
lb.onclick = () => colour = 'lightskyblue';

const eraser = document.querySelector('#eraser');
eraser.onclick = () => colour = 'lightgray';

//let mouseDown = false
//document.body.onmousedown = () => (mouseDown = true)
//document.body.onmouseup = () => (mouseDown = false)

//draw(e) {
//    if (e.type === 'mouseover' && !mouseDown) return
//    else {
//    e.target.style.backgroundColor = colour
//   }
//}

const rainbow = document.querySelector('#rainbow');
rainbow.onclick = () => colour = '';

const reset = document.querySelector('#reset');
reset.onclick = () => square.style.backgroundColor = 'lightgray';





//size() {
//    grid = 16;
//    prompt('Enter grid width (max: 16)') //change to text input box
//    return grid
//}

//document.querySelector(gridSize).textContent = `${grid} x ${grid}`

