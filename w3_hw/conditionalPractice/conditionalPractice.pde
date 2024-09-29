void setup() {
  size(640, 360);
}

void draw() {
  background(0);
  stroke(255);
  fill(175);
  rectMode(CENTER);
  
  if (mouseX > 400) {
    square(300, 180, 100);
  } else if (mouseX > 200) {
    circle(300, 180, 100);
  } else {
    line (250, 130, 350, 220);
  }
  
  stroke(127);
  strokeWeight(4);
  line(200, 0, 200, height);
  line(400, 0, 400, height);
}
