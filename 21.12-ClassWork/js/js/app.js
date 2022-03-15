let countElem = document.getElementById("count");

let counter = 0;
let colors = ["red", "blue", "green", "yellow"];

let colorPicker = document.querySelectorAll(".smallDiv");
// console.log(colorPicker);

function addNum() {
  if (counter > 3) {
    counter = 0;
    countElem.innerHTML = counter;
  } else {
    counter++;
    countElem.innerHTML = counter;
  }
}

function subNum() {
  if (counter > 0) {
    counter--;
    countElem.innerHTML = counter;
  }
}

function changeColor() {
  colorPicker[counter].style.backgroundColor = colors[counter];
}
let pos = document.getElementById("innerDiv");
function changePos() {
  let direction = pos.style.flexDirection === "column" ? "row" : "column";
  pos.style.flexDirection = direction;
}

window.addEventListener("resize", () => {
  if (window.innerWidth < 1000) {
    pos.style.flexDirection = "column";
  } else {
    pos.style.flexDirection = "row";
  }
});
