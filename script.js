const grid = document.querySelector(".grid-container");
const eraseButton = document.querySelector(".color-button")
const clearButton = document.querySelector(".clear-button");
const blackButton = document.querySelector(".color-button");
const sizeSlider = document.getElementById("size-slider");
const sizeValue = document.getElementById("size-value");
rainbowButton = document.querySelector("#rainbow-btn");


// cell amount slider
sizeValue.textContent = sizeSlider.value;
createGrid(sizeSlider.value);

sizeSlider.addEventListener("input", (e) => {
  sizeValue.textContent = e.target.value;
  grid.innerHTML = '';
  createGrid(e.target.value);
});
// board cell creator function //
function createGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  grid.innerHTML = "";
  for (let i = 0; i < size ** 2; i++) {
    const div = document.createElement("div");
    div.classList.add('grid-cell')
    div.style.backgroundColor = 'white';
    grid.appendChild(div);
  }
}


// color and erase button functionality //
const colorButtons = document.querySelectorAll(".color-button");
let color = "";

colorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    color = e.target.dataset.color;
  });
});

grid.addEventListener("mousedown", (e) => {
  grid.addEventListener("mouseover", paintCell);
});

grid.addEventListener("mouseup", () => {
  grid.removeEventListener("mouseover", paintCell);
});

function paintCell(e) {
  if (e.target.nodeName === "DIV") {
    if (color === 'rainbow') {
      e.target.style.backgroundColor = getRandomColor();
    } else {
      e.target.style.backgroundColor = color;
    }
  }
}

 // random color generator
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


// clear button function //
clearButton.addEventListener("click", () => {
  isDrawing = false;
  const cells = document.querySelectorAll(".grid-cell");
  cells.forEach((cells) => {
    cells.style.backgroundColor = "white";
  });
});

// functions to run //
createGrid(16);





