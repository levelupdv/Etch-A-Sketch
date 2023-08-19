const container = document.querySelector('#container');
const resetButton = document.querySelector('#reset');
const gridValue = document.querySelector('#gridValue');
const slider = document.querySelector('#slider');
const blackButton = document.querySelector('#blackColor');
const colorButton = document.querySelector('#randomColor');
const shadingButton = document.querySelector('#shading');

let gridSize = parseInt(slider.value * slider.value);
let color = "black";

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

    penColor();
}

let hslValue = [];

function rgbToHsl(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if (max == min) {
        h = s = 0;
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    hslValue = [Math.floor(h * 360), Math.floor(s * 100), Math.floor(l * 100)];
}

function penColor() {
    const gridBox = document.querySelectorAll('.square');
    gridBox.forEach((box) => box.addEventListener('mouseover', function () {

        if (color === "black") {
            this.style.backgroundColor = 'hsl(0,0%,0%)';
        } else if (color === "rainbow") {
            this.style.backgroundColor = `hsl(
                ${Math.floor(Math.random() * 361)},100%,50%)`;
        } else if (color === "shading") {
            const toRGBArray = rgbStr => rgbStr.match(/\d+/g).map(Number);
            const rgbArray = toRGBArray(this.style.backgroundColor);

            rgbToHsl(rgbArray[0], rgbArray[1], rgbArray[2]);

            if (hslValue[1] === 100) {
                this.style.backgroundColor =
                    `hsl(${hslValue[0]},${hslValue[1]}%,${hslValue[2] - 5}%)`;
            } else if (hslValue[1] === 0 && hslValue[2] != 0) {
                this.style.backgroundColor =
                    `hsl(${hslValue[0]},${hslValue[1]}%,${hslValue[2] - 10}%)`;
            }
        }
    }));
}

blackButton.addEventListener('click', function () {
    color = "black";
});
colorButton.addEventListener('click', function () {
    color = "rainbow";
});
shadingButton.addEventListener('click', function () {
    color = "shading";
});

function reset() {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild)
    }
    makeGrid();
}

resetButton.addEventListener('click', reset);

makeGrid();
