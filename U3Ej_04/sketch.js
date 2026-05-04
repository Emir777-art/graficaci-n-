
 /* //Cambio entre ortho y perspectiva con tecla
let modo = true;

function setup() {
  createCanvas(700, 500, WEBGL);
}

function draw() {
  background(230);
  orbitControl();

  if (modo) {
    perspective();
  } else {
    ortho();
  }

  // Cubo cerca
  push();
  translate(-150, 0, 0);
  box(80);
  pop();

  // Cubo lejos
  push();
  translate(150, 0, -300);
  box(80);
  pop();
}

function keyPressed() {
  modo = !modo;
} */



/*   //Control del campo de visión (FOV) con teclado
  let fov = PI / 3;

function setup() {
  createCanvas(700, 500, WEBGL);
}

function draw() {
  background(240);
  orbitControl();
  perspective(fov, width/height, 0.1, 1000);

  push();
  translate(0, 0, -200);
  box(100);
  pop();
}

function keyPressed() {
  if (key === 'A') fov -= 0.1;
  if (key === 'D') fov += 0.1;
} */

  