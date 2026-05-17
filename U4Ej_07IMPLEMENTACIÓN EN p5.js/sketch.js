/*function setup() {
  createCanvas(600, 400, WEBGL);
}

function draw() {
  background(30);
  orbitControl();                      // mover la cámara
  
  // Luces
  ambientLight(60);                    // iluminación base
  pointLight(255, 255, 255, 0, 0, 200); // luz puntual fija en (0,0,200)
  
  noStroke();
  fill(200, 100, 150);
  sphere(100);
}*/

/*
function setup() {
  createCanvas(700, 400, WEBGL);
}

function draw() {
  background(20);
  orbitControl();
  
  // Iluminación necesaria para ambos materiales
  ambientLight(50);
  directionalLight(255, 255, 255, 1, 1, -1);
  pointLight(200, 150, 150, 0, -100, 200);
  
  // Objeto izquierdo: material mate (ambientMaterial)
  push();
  translate(-180, 0, 0);
  rotateY(frameCount * 0.01);
  ambientMaterial(100, 180, 240);
  sphere(80);
  pop();
  
  // Objeto derecho: material brillante (specularMaterial)
  push();
  translate(180, 0, 0);
  rotateY(frameCount * 0.01);
  specularMaterial(255);
  shininess(80);
  sphere(80);
  pop();
} */ 

/*
  function setup() {
  createCanvas(800, 500, WEBGL);
}

function draw() {
  background(20);
  orbitControl();                       // control de cámara
  
  // ----- LUCES -----
  ambientLight(40);                     // luz ambiental tenue
  directionalLight(255, 255, 255, 1, 1, -1); // luz direccional (sol)
  pointLight(255, 200, 200, 0, -150, 250);   // luz puntual frontal superior
  
  // ----- OBJETO 1: cubo con fill() (color + iluminación básica) -----
  push();
  translate(-250, 0, 0);
  rotateY(frameCount * 0.01);
  fill(220, 100, 100);
  box(120);
  pop();
  
  // ----- OBJETO 2: esfera con material mate (ambientMaterial) -----
  push();
  translate(0, 0, 0);
  rotateX(frameCount * 0.01);
  ambientMaterial(100, 180, 240);
  sphere(90);
  pop();
  
  // ----- OBJETO 3: toroide con material especular (brillante) -----
  push();
  translate(250, 0, 0);
  rotateY(frameCount * 0.01);
  specularMaterial(255);
  shininess(100);
  torus(70, 20);
  pop();
}*/