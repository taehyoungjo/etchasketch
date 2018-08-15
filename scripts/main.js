
// Button to set color Y

// input for width (# of columns/rows)
const container = document.querySelector("#container");
const color = document.querySelector('#chooseColor');
const reset = document.querySelector('#reset');
const widthInput = document.querySelector('#setWidth');

let width = 32;

grid();
setWidth();

reset.addEventListener('click', function (e) {
  for (i=0; i<width*width; i++) {
    container.removeChild(container.firstChild);
  } 
  grid();
})

widthInput.addEventListener('click', function (e) {
  let widthString = prompt("Set the width");
  if (widthString != null) {
    for (i=0; i<width*width; i++) {
      container.removeChild(container.firstChild);
    }
    width = parseInt(widthString, 10);
  }
  setWidth();
  grid();
})

function setWidth() {
  let gTemp = 'repeat(' + width + ', ' + 640/width + 'px)/repeat(' + width + ', ' + 640/width + 'px)';
  container.style.gridTemplate =  gTemp;
  console.log("set width");
}

function grid() {

for (i=0; i<width*width; i++) {
  let cell = document.createElement("div");
  cell.addEventListener('click', function (e) {
    this.style.background = color.value;
  })
  cell.addEventListener('mousemove', function (e) {
    if (e.buttons == 1) {
      this.style.background = color.value;
    }
  })
  cell.style.cssText = 'border: black 1px solid';
  container.appendChild(cell);
}

}
