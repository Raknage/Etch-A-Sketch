const container = document.querySelector(".container");
const randomColor = () => ((Math.random() * 0xffffff) << 0).toString(16);
const newBtn = document.getElementById("newBtn");
let squareSize = 16;

newBtn.addEventListener("click", () => {
  while (container.hasChildNodes()) container.removeChild(container.firstChild);
  let newSize = null;
  do {
    newSize = prompt("New grid size? (Max 100)", 16);
  } while (newSize > 100);
  initGrid(newSize);
});

function initGrid(squareSize) {
  for (let i = 0; i < squareSize; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    for (let i = 0; i < squareSize; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "#" + randomColor();
      });
      grid.append(square);
    }
    container.append(grid);
  }
}

initGrid(squareSize);
