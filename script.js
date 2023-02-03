console.log("mango");

const grid = document.querySelector(".grid-container");


function createGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
  for (let i = 0; i < size ** 2; i++) {
    const div = document.createElement("div");
    div.classList.add('grid-cell')
    div.style.backgroundColor = 'white';
    grid.appendChild(div);
  }
}


grid.addEventListener("pointermove", (e) => {
  if (e.target.nodeName === "DIV") {
    e.target.style.backgroundColor = "black";
  }
});

const clearButton = document.querySelector(".clear-button");

clearButton.addEventListener("click", () => {
  const cells = document.querySelectorAll(".grid-cell");
  cells.forEach((cells) => {
    cells.style.backgroundColor = "white";
  });
});

createGrid(32);