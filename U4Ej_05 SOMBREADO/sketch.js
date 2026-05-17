/* function setup() {
  createCanvas(600, 400, WEBGL);
}

function draw() {
  background(30);
  orbitControl();                     // permite mover la cámara
  
  // Iluminación
  ambientLight(50);
  directionalLight(255, 255, 255, 1, 1, -1);
  
  // Cubo
  push();
  translate(-120, 0, 0);
  rotateY(frameCount * 0.01);
  fill(200, 100, 100);
  box(80);
  pop();
  
  // Esfera
  push();
  translate(120, 0, 0);
  rotateX(frameCount * 0.01);
  fill(100, 150, 200);
  sphere(70);
  pop();
} */
/*
  function setup() {
  createCanvas(800, 500, WEBGL);
}

function draw() {
  background(20);
  orbitControl();
  
  // Luces: ambiental + direccional + puntual para mayor realismo
  ambientLight(40);
  directionalLight(255, 255, 255, 1, 1, -1);
  pointLight(255, 200, 200, 0, -150, 200);
  
  // Cubo a la izquierda
  push();
  translate(-180, 0, 0);
  rotateY(frameCount * 0.01);
  noStroke();
  fill(220, 120, 80);
  box(100);
  pop();
  
  // Esfera a la derecha
  push();
  translate(180, 0, 0);
  rotateX(frameCount * 0.01);
  noStroke();
  fill(80, 150, 220);
  sphere(90);
  pop();
} */ 

/*

  function setup() {
  createCanvas(600, 400, WEBGL);
}

function draw() {
  background(20);
  orbitControl();
  
  // Iluminación necesaria para ver el brillo especular
  ambientLight(40);
  directionalLight(255, 255, 255, 1, 1, -1);
  
  // Material especular blanco
  specularMaterial(255);
  
  // El brillo varía con la posición horizontal del mouse
  let brillo = map(mouseX, 0, width, 5, 200);
  shininess(brillo);
  
  // Esfera que muestra el brillo
  sphere(100);
  
  // Mostrar valor actual en pantalla (en 2D)
  push();
  resetMatrix();
  fill(255);
  textSize(16);
  text(`Shininess: ${int(brillo)}`, -width/2 + 20, -height/2 + 30);
  pop();
} */ 

  