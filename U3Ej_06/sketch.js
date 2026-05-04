/* //Cámara figa

function setup() {
  createCanvas(700, 500, WEBGL);
}

function draw() {
  background(230);
  camera(0, 0, 300, 0, 0, 0, 0, 1, 0);
  box(100);
} */ 
 

 /*//Cámara giratoria alrededor del objeto
  let angulo = 0;

function setup() {
  createCanvas(700, 500, WEBGL);
}

function draw() {
  background(240);
  let camX = 300 * cos(angulo);
  let camZ = 300 * sin(angulo);
  camera(camX, 0, camZ, 0, 0, 0, 0, 1, 0);
  angulo += 0.01;
  box(100);
} */

/*  //Uso de orbitControl
  function setup() {
  createCanvas(700, 500, WEBGL);
}

function draw() {
  background(250);
  orbitControl();
  box(100);
}*/

// Escena completa con orbitControl
/*
function setup() {
  createCanvas(800, 500, WEBGL);
}

function draw() {
  background(240);
  orbitControl();

  push();
  translate(-200, 0, 0);
  box(80);
  pop();

  push();
  translate(0, 0, -200);
  sphere(60);
  pop();

  push();
  translate(200, 0, 100);
  cone(50, 120);
  pop();
}*/

