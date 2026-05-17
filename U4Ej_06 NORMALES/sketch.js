/* function setup() {
  createCanvas(600, 400, WEBGL);
}

function draw() {
  background(30);
  orbitControl();                   // permite mover la cámara
  
  // Material que colorea según la dirección de la normal
  normalMaterial();
  
  // Esfera (normales suaves y continuas)
  push();
  translate(-140, 0, 0);
  rotateY(frameCount * 0.01);
  sphere(80);
  pop();
  
  // Cubo (normales constantes por cara)
  push();
  translate(140, 0, 0);
  rotateY(frameCount * 0.01);
  box(100);
  pop();
}*/ 
/*
function setup() {
  createCanvas(600, 400, WEBGL);
}

function draw() {
  background(20);
  orbitControl();
  
  // Iluminación básica
  ambientLight(40);
  directionalLight(255, 255, 255, 1, 1, -1);
  pointLight(200, 150, 150, 0, -100, 200);
  
  // Esfera (sombreado suave)
  push();
  translate(-140, 0, 0);
  noStroke();
  fill(100, 180, 240);
  sphere(80);
  pop();
  
  // Cubo (sombreado plano por caras)
  push();
  translate(140, 0, 0);
  noStroke();
  fill(240, 120, 100);
  box(100);
  pop();
}*/
/*
function setup() {
  createCanvas(600, 400, WEBGL);
}

function draw() {
  background(20);
  orbitControl();                       // mover la cámara
  
  // Luz ambiental tenue
  ambientLight(30);
  
  // Luz puntual que sigue al mouse (en coordenadas 3D)
  // Se resta width/2 y height/2 porque WEBGL centra el origen
  pointLight(255, 255, 255, mouseX - width/2, mouseY - height/2, 200);
  
  // Objeto para ver el efecto (puede ser esfera o cubo)
  noStroke();
  fill(180, 140, 200);
  sphere(100);   // Cambia por box(100) para ver la diferencia
  
  // Instrucciones en pantalla
  push();
  resetMatrix();
  fill(255);
  textSize(14);
  text("Mueve el mouse → la luz se desplaza", -width/2 + 20, -height/2 + 30);
  pop();
}*/