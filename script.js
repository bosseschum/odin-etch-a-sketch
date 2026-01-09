const page = document.querySelector(".container");
const body = document.querySelector("body");

function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

const newGridButton = document.createElement("button");
newGridButton.textContent = "New Grid";
newGridButton.style.padding = "1em";

newGridButton.addEventListener("click", () => {
  let input = prompt("How many squares per side?");
  createGrid(input);
});

body.insertBefore(newGridButton, page);
createGrid(16);

function createGrid(x) {
  if (x <= 100) {
    page.textContent = "";
    page.style.width = `${x * 25}px`;

    const grid = new Array(x);
    for (let i = 0; i < x; i++) {
      grid[i] = new Array(x);

      for (let j = 0; j < x; j++) {
        let div = document.createElement("div");
        div.style.width = "25px";
        div.style.height = "25px";
        div.style.border = "1px solid black";
        div.style.boxSizing = "border-box";
        div.addEventListener("mouseover", (event) => {
          div.style.backgroundColor = getRandomColor();
        });
        page.appendChild(div);
      }
    }
  } else {
    alert("Under 100, please!");
  }
}

page.style.display = "flex";
page.style.flexWrap = "wrap";
