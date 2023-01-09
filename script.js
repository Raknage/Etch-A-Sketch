const container = document.querySelector(".container");
const grid = document.createElement("div");

for (let i = 0; i < 16; i++) {
  for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    grid.append(row);
  }
}

container.append(grid);
