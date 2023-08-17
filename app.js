const container = document.querySelector('#container');
const resetButton = document.querySelector('#reset');
const gridValue = document.querySelector('#gridValue');
const slider = document.querySelector('#slider');

let gridSize = parseInt(slider.value * slider.value);

gridValue.textContent = `${slider.value} x ${slider.value}`;

slider.addEventListener('change', function () {
    gridValue.innerText = `${slider.value} x ${slider.value}`;
    gridSize = parseInt(slider.value * slider.value);
    reset();
});

function makeGrid() {
    let boxSize = Math.sqrt((400 * 400) / (gridSize));
    for (let i = 0; i < gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${boxSize}px`;
        square.style.height = `${boxSize}px`;
        square.style.borderLeft = '1px rgb(210, 210, 210) solid';
        square.style.borderBottom = '1px rgb(210, 210, 210) solid';
        container.append(square);
        const topSquares = document.querySelectorAll(`.square:nth-child(-n + ${slider.value})`);
        const rightSquares = document.querySelectorAll(`.square:nth-child(${slider.value}n)`);

        topSquares.forEach(topSquare => {
            topSquare.style.borderTop = '1px rgb(210, 210, 210) solid'
        });

        rightSquares.forEach(rightSquare => {
            rightSquare.style.borderRight = '1px rgb(210, 210, 210) solid'
        });

    }
    drawBlack();
}
makeGrid();

function drawBlack() {
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
}






resetButton.addEventListener('click', reset);

// keys.forEach(key => key.addEventListener('transitionend', removeTransition));