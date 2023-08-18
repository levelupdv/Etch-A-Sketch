const container = document.querySelector('#container');
const resetButton = document.querySelector('#reset');
const gridValue = document.querySelector('#gridValue');
const slider = document.querySelector('#slider');
const blackButton = document.querySelector('#blackColor');
const colorButton = document.querySelector('#randomColor');
const shadingButton = document.querySelector('#shading');


let gridSize = parseInt(slider.value * slider.value);
let penColor = "black";

slider.addEventListener('input', function () {
    gridValue.innerText = `${slider.value} x ${slider.value}`;
    gridSize = parseInt(slider.value * slider.value);
    reset();
});

gridValue.textContent = `${slider.value} x ${slider.value}`;

function makeGrid() {
    let boxSize = Math.sqrt((400 * 400) / (gridSize));
    for (let i = 0; i < gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${boxSize}px`;
        square.style.height = `${boxSize}px`;
        square.style.borderLeft = '1px rgb(210, 210, 210) solid';
        square.style.borderBottom = '1px rgb(210, 210, 210) solid';
        square.style.backgroundColor = 'rgb(255, 255, 255)';
        container.append(square);
    }
    const topSquares = document.querySelectorAll(`.square:nth-child(-n + ${slider.value})`);
    const rightSquares = document.querySelectorAll(`.square:nth-child(${slider.value}n)`);
    topSquares.forEach(topSquare => {
        topSquare.style.borderTop = '1px rgb(210, 210, 210) solid'
    });
    rightSquares.forEach(rightSquare => {
        rightSquare.style.borderRight = '1px rgb(210, 210, 210) solid'
    });
    
    if (penColor === "black") {
        drawBlack();
    } else if (penColor === "rainbow") {
        drawRandomColor();
    } else if (penColor === "shading") {
         shadingColor();
    }
}


function drawBlack() {
    const gridBox = document.querySelectorAll('.square');
    gridBox.forEach((box) => box.addEventListener('mouseenter', function () {
        box.style.backgroundColor = 'rgb(0, 0, 0)';
    }));
}

function getRandomColor(random) {
    random = Math.floor(Math.random() * 256);
    return random;
}

function drawRandomColor() {
    const gridBox = document.querySelectorAll('.square');
    gridBox.forEach((box) => box.addEventListener('mouseenter', function () {
        box.style.backgroundColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
    }));
}

function shadingColor() {
    const gridBox = document.querySelectorAll('.square');
    gridBox.forEach((box) => box.addEventListener('mouseenter', function () {
        // const toRGBArray = rgbStr => rgbStr.match(/\d+/g).map(Number);
        // let rgbArray = toRGBArray(box.style.backgroundColor);
        // console.log((255 - rgbArray[0]) / 10 + rgbArray[0]);
        // box.style.backgroundColor = 
        // `rgb(
        // ${parseInt(((255 - rgbArray[0]) / 10) + rgbArray[0])}, 
        // ${parseInt(((255 - rgbArray[1]) / 10) + rgbArray[1])},
        // ${parseInt(((255 - rgbArray[2]) / 10) + rgbArray[2])}
        // )`;
        // box.style.backgroundColor = `blue`;
        console.log(box.style.backgroundColor);

    }));
}

blackButton.addEventListener('click', function () {
    drawBlack();
    penColor = "black";
});
colorButton.addEventListener('click', function () {
    drawRandomColor();
    penColor = "rainbow";
});
shadingButton.addEventListener('click', function () {
    shadingColor();
    penColor = "shading"
});

function reset() {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild)
    }
    makeGrid();

}
resetButton.addEventListener('click', reset);

makeGrid();
