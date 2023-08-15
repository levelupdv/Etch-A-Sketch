const container = document.querySelector('#container');


let gridSize = 256;


for (let i = 0; i < gridSize; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.append(square);
}


let gridBox = document.querySelectorAll('.square');


gridBox.forEach((box) => box.addEventListener('mouseenter', function(hover) {
    console.log(hover);
}));