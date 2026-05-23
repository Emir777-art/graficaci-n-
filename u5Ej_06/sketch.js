/*let x = -300;
let velocidad = 3;

function setup() {
  createCanvas(800, 500, WEBGL);
}

function draw() {
  background(30);
  
  // Iluminación básica para ver la profundidad
  ambientLight(80);
  pointLight(255, 255, 255, 0, 0, 300);
  
  push();
  translate(x, 0, 0);
  fill(100, 200, 255);
  sphere(60);
  pop();
  
  x += velocidad;
  if (x > 300) {
    x = -300;
  }
}


*/

/*
function setup() {
  createCanvas(800, 500, WEBGL);
}

function draw() {
  background(20);
  
  // Iluminación
  ambientLight(60);
  directionalLight(255, 255, 255, 1, 1, -1);
  
  // Rotaciones sobre los tres ejes
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.02);
  rotateZ(frameCount * 0.015);
  
  // Material con brillo
  specularMaterial(255, 100, 100);
  shininess(50);
  box(150);
}*/ 

/*
let angulo = 0;

function setup() {
  createCanvas(1000, 600, WEBGL);
}

function draw() {
  background(15);
  
  // Cámara interactiva (permite rotar, acercar/alejar)
  orbitControl();
  
  // Iluminación
  ambientLight(40);
  directionalLight(200, 200, 200, 1, 1, -1);
  pointLight(255, 150, 150, 200, 100, 300);
  pointLight(150, 150, 255, -200, -100, 300);
  
  angulo += 0.02;
  
  // --- Esfera animada (movimiento circular) ---
  push();
  let x = sin(angulo) * 300;
  let z = cos(angulo * 0.8) * 200;
  translate(x, 0, z);
  specularMaterial(255, 200, 100);
  sphere(70);
  pop();
  
  // --- Cubo rotatorio ---
  push();
  translate(-250, -100, -150);
  rotateX(angulo);
  rotateY(angulo * 1.5);
  ambientMaterial(100, 200, 255);
  box(120);
  pop();
  
  // --- Toroide giratorio ---
  push();
  translate(250, 80, 0);
  rotateZ(angulo * 2);
  normalMaterial(); // colores arcoíris automáticos
  torus(80, 25);
  pop();
  
  // --- Cilindro que se mueve en Y ---
  push();
  translate(0, sin(angulo * 1.2) * 150, -200);
  ambientMaterial(255, 100, 150);
  cylinder(50, 120);
  pop();
  
  // --- Piso semitransparente (referencia) ---
  push();
  rotateX(-HALF_PI);
  translate(0, 0, -200);
  fill(100, 100, 100, 50);
  plane(800, 800);
  pop();
  
  // Instrucciones en pantalla (coordenadas 2D)
  push();
  resetMatrix();
  fill(255);
  textSize(16);
  text("Escena 3D interactiva - Usa el mouse para orbitar", -480, -280);
  text("Objetos: esfera, cubo, toroide, cilindro", -480, -250);
  pop();
} */