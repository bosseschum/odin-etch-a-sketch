const page = document.querySelector(".container");
const body = document.querySelector("body");

const grid = new Array(16);
for (let i = 0; i < 16; i++) {
  grid[i] = new Array(16);

  for (let j = 0; j < 16; j++) {
    let div = document.createElement("div");
    div.style.width = "25px";
    div.style.height = "25px";
    div.style.border = "1px solid black";
    div.style.boxSizing = "borderBox";
    div.addEventListener("mouseover", (event) => {
      div.style.backgroundColor = "black";
    });
    page.appendChild(div);
  }
}

page.style.display = "flex";
page.style.flexWrap = "wrap";
page.style.width = "450px";
