function setup() {
  createCanvas(800, 500, WEBGL);
}

function draw() {
  background(240);
  orbitControl();

  push();
  translate(-200, 0, 0);
  rotateY(frameCount * 0.02);
  fill(255, 100, 100);
  box(80);
  pop();

  push();
  translate(0, 0, 0);
  fill(100, 200, 255);
  sphere(60);
  pop();

  push();
  translate(200, 0, 0);
  fill(200, 255, 100);
  cone(50, 120);
  pop();
}