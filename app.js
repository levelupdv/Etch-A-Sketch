const container = document.querySelector('#container');
const gridNums = [16, 24, 48, 64, 80, 100]

let gridSize = gridNums[0] * gridNums[0]
let boxSize = Math.sqrt((400 * 400) / (parseInt(gridSize)));

for (let i = 0; i < gridSize; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${boxSize}px`;
    square.style.height = `${boxSize}px`;
    square.style.borderLeft = '1px rgb(210, 210, 210) solid';
    square.style.borderBottom = '1px rgb(210, 210, 210) solid';
    container.append(square);
}

const topSquares = document.querySelectorAll(`.square:nth-child(-n + ${gridNums[0]})`);
const rightSquares = document.querySelectorAll(`.square:nth-child(${gridNums[0]}n)`);

topSquares.forEach(topSquare => {
    topSquare.style.borderTop = '1px rgb(210, 210, 210) solid'
});

rightSquares.forEach(rightSquare => {
    rightSquare.style.borderRight = '1px rgb(210, 210, 210) solid'
});

let gridBox = document.querySelectorAll('.square');

gridBox.forEach((box) => box.addEventListener('mouseover', function (e) {
    box.style.backgroundColor = 'black';
}));