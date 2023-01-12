const container = document.querySelector(".container");
const randomColor = () => ((Math.random() * 0xffffff) << 0).toString(16);

for (let i = 0; i < 16; i++) {
  const grid = document.createElement("div");
  grid.classList.add("grid");
  for (let i = 0; i < 16; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "#" + randomColor();
    });
    grid.append(square);
  }
  container.append(grid);
}
