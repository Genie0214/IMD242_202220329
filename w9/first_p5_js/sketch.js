let tileNumX;
let tileNumY;

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(220);
  noStroke();
  fill('red');
  // for (let colume = 0; colume < width; colume += 40) {
  //   for (let row = 0; row < width; row += 40) {
  //     let x = 20 + colume;
  //     let y = 20 + row;
  //     let diameter = 30;
  //     circle(x, y, diameter);
  //   }
  // }
  for (let row = 0; row < tileNumY; row++) {
    for (let colume = 0; row < tileNumX; colume++) {
      let tileW = width / tileNumX;
      let tileH = height / tileNumY;
      let x = tileW * 0.5 + colume * tileW;
      let y = tileH * 0.5 + row * tileH;
      ellipse(x, y, tileW, tileH);
    }
  }
}
