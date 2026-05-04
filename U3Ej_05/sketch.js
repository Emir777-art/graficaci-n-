
 /* //Esfera paramétrica (construcción manual)
function setup() {
  createCanvas(600, 400, WEBGL);
}

function draw() {
  background(250);
  orbitControl();
  let r = 80;
  stroke(0);
  noFill();

  


  for (let theta = 0; theta < PI; theta += 0.1) {
    beginShape();
    for (let phi = 0; phi < TWO_PI; phi += 0.2) {
      let x = r * sin(theta) * cos(phi);
      let y = r * sin(theta) * sin(phi);
      let z = r * cos(theta);
      vertex(x, y, z);
    }
    endShape(CLOSE);
  }
} */ 



/* //Escena con múltiples figuras
function setup() {
  createCanvas(800, 500, WEBGL);
}

function draw() {
  background(230);
  orbitControl();

  push();
  translate(-200, 0, 0);
  rotateY(frameCount * 0.02);
  box(80);
  pop();

  push();
  translate(0, 0, 0);
  sphere(60);
  pop();

  push();
  translate(200, 0, 0);
  rotateX(frameCount * 0.02);
  cylinder(40, 120);
  pop();
} */ 


  function setup() {
  createCanvas(800, 500, WEBGL);
}

function draw() {
  background(240);
  orbitControl();

  push();
  translate(-250, 0, 0);
  rotateY(frameCount * 0.02);
  box(80);
  pop();

  push();
  translate(0, 0, 0);
  rotateX(frameCount * 0.02);
  cylinder(50, 120);
  pop();

  push();
  translate(250, 0, 0);
  rotateZ(frameCount * 0.02);
  cone(50, 120);
  pop();
}