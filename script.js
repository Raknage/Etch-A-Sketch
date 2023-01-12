const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
  const grid = document.createElement("div");
  grid.classList.add("grid");
  for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.classList.add("square");
    grid.append(row);
  }
  container.append(grid);
}
