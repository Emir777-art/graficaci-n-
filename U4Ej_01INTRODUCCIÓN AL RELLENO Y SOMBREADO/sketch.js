/*function setup() {
  createCanvas(500, 400, WEBGL);
}

function draw() {
  background(230);
  rotateY(frameCount * 0.01);
  fill(180, 80, 220);
  box(120);
}*/

/*
function setup() {
  createCanvas(600, 400, WEBGL);
}

function draw() {
  background(30);
  orbitControl();                     // Permite mover la cámara
  ambientLight(60);                  // Luz ambiental suave
  directionalLight(255, 255, 255, 1, 1, -1); // Luz direccional
  noStroke();
  ambientMaterial(100, 180, 240);    // Material que reacciona a la luz
  sphere(100);
} */

  function setup() {
  createCanvas(800, 500, WEBGL);
}

function draw() {
  background(20);
  orbitControl();

  ambientLight(50);
  pointLight(255, 255, 255, 0, -150, 250);

  // Cubo con fill() (color homogéneo + iluminación básica)
  push();
  translate(-250, 0, 0);
  rotateY(frameCount * 0.01);
  fill(220, 100, 100);
  box(120);
  pop();

  // Esfera con material ambiental (mate)
  push();
  translate(0, 0, 0);
  ambientMaterial(100, 180, 240);
  sphere(90);
  pop();

  // Toroide con material especular (brillante)
  push();
  translate(250, 0, 0);
  rotateY(frameCount * 0.01);
  specularMaterial(230);
  shininess(80);
  torus(70, 20);
  pop();
}