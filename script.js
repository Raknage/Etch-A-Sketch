const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
  const grid = document.createElement("div");
  grid.classList.add("grid");
  for (let i = 0; i < 16; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    grid.append(square);
  }
  container.append(grid);
}

