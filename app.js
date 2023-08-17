const container = document.querySelector('#container');
const resetButton = document.querySelector('#reset');
const gridValue = document.querySelector('#gridValue');
const slider = document.querySelector('#slider');
const gridNums = [16, 24, 48, 64, 80, 100]

let gridSize = gridNums[0] * gridNums[0]
let boxSize = Math.sqrt((400 * 400) / (parseInt(gridSize)));

// slider.addEventListener('change', function () {
//     gridValue.textContent = slider.value;
// });

function makeGrid() {
    for (let i = 0; i < gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${boxSize}px`;
        square.style.height = `${boxSize}px`;
        square.style.borderLeft = '1px rgb(210, 210, 210) solid';
        square.style.borderBottom = '1px rgb(210, 210, 210) solid';
        container.append(square);
        const topSquares = document.querySelectorAll(`.square:nth-child(-n + ${gridNums[0]})`);
        const rightSquares = document.querySelectorAll(`.square:nth-child(${gridNums[0]}n)`);
    
        topSquares.forEach(topSquare => {
            topSquare.style.borderTop = '1px rgb(210, 210, 210) solid'
        });
    
        rightSquares.forEach(rightSquare => {
            rightSquare.style.borderRight = '1px rgb(210, 210, 210) solid'
        });
    
    }
    draw();
}
makeGrid();

function draw () {
    let gridBox = document.querySelectorAll('.square');
    gridBox.forEach((box) => box.addEventListener('mouseover', function (e) {
        box.style.backgroundColor = 'black';
    }));
}

function reset() {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild)
    }
      makeGrid(); 
      draw();
    }

   




resetButton.addEventListener('click', reset);

// keys.forEach(key => key.addEventListener('transitionend', removeTransition));