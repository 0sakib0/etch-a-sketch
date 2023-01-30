document.addEventListener('DOMContentLoaded', () => {
    makeBoard(64);
})
let board = document.querySelector(".board");
const eraseButton = document.querySelector('.erase');

function makeBoard(size) {
    
    console.log(board);
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let divCount = size * size;
    for (let i = 0; i < divCount; i++) {
       let boardDivs = document.createElement('div');
       boardDivs.addEventListener('mouseover',() => {
        boardDivs.style.background = "black"
       })
       board.appendChild(boardDivs).className = "grids"
        console.log();
    }
   
    
}

