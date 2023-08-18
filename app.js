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
        square.style.backgroundColor = 'white';
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
    } else { shadingColor();}
}


function drawBlack() {
    let gridBox = document.querySelectorAll('.square');
    gridBox.forEach((box) => box.addEventListener('mouseover', function () {
        box.style.backgroundColor = 'black';
    }));
}

function getRandomColor(random) {
    random = Math.floor(Math.random() * 256);
    return random;
}

function drawRandomColor() {
    let gridBox = document.querySelectorAll('.square');
    gridBox.forEach((box) => box.addEventListener('mouseover', function () {
        box.style.backgroundColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
    }));
}

function shadingColor() {
    let gridBox = document.querySelectorAll('.square');
    gridBox.forEach((box) => box.addEventListener('mouseover', function () {
        // const div = document.querySelector('.square')
        // const toRGBArray = rgbStr => rgbStr.match(/\d+/g).map(Number);
        // let rgb = toRGBArray(div.style.backgroundColor);
        // console.log(rgb);
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
