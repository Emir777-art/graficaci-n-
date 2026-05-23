/*function setup() {
  createCanvas(800, 600, WEBGL);
}

function draw() {
  background(30);
  
  // Iluminación básica
  ambientLight(60);
  directionalLight(255, 255, 255, 1, 1, -1);
  
  // Esfera (centro)
  push();
  translate(-200, 0, 0);
  specularMaterial(100, 200, 255);
  sphere(70);
  pop();
  
  // Cubo (derecha)
  push();
  translate(200, 0, 0);
  ambientMaterial(255, 100, 100);
  rotateY(frameCount * 0.02);
  box(100);
  pop();
  
  // Cono (arriba)
  push();
  translate(0, -150, 0);
  normalMaterial();
  rotateX(frameCount * 0.01);
  cone(60, 120);
  pop();
} */


/*
let rotacionCubo = 0;
let escalaEsfera = 1;
let direccionEscala = 0.01;

function setup() {
  createCanvas(900, 600, WEBGL);
}

function draw() {
  background(20);
  
  // Cámara interactiva
  orbitControl();
  
  // Iluminación: luz puntual que sigue al mouse
  ambientLight(40);
  pointLight(255, 200, 150, mouseX - width/2, mouseY - height/2, 300);
  directionalLight(100, 100, 150, 1, 1, -1);
  
  // --- Esfera (control con teclado: flecha arriba/abajo cambia escala) ---
  push();
  translate(-250, 0, 0);
  if (keyIsDown(UP_ARROW)) {
    escalaEsfera += 0.02;
  }
  if (keyIsDown(DOWN_ARROW)) {
    escalaEsfera -= 0.02;
  }
  escalaEsfera = constrain(escalaEsfera, 0.3, 1.8);
  scale(escalaEsfera);
  specularMaterial(100, 200, 255);
  sphere(60);
  pop();
  
  // --- Cubo (control con teclado: izquierda/derecha cambia rotación) ---
  push();
  translate(250, 0, 0);
  if (keyIsDown(LEFT_ARROW)) {
    rotacionCubo -= 0.03;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    rotacionCubo += 0.03;
  }
  rotateY(rotacionCubo);
  ambientMaterial(255, 150, 100);
  box(100);
  pop();
  
  // --- Cono animado automáticamente ---
  push();
  translate(0, -180, -100);
  rotateX(frameCount * 0.02);
  normalMaterial();
  cone(70, 140);
  pop();
  
  // Instrucciones
  push();
  resetMatrix();
  fill(255);
  textSize(14);
  text("Luz sigue al mouse", -400, -280);
  text("Flechas ↑/↓ → escala de la esfera", -400, -250);
  text("Flechas ←/→ → rotación del cubo", -400, -220);
  pop();
} */



/*
  let angulo = 0;
let colorR = 100;
let moverLuz = true;
let velocidadRotacion = 0.02;

function setup() {
  createCanvas(1000, 700, WEBGL);
}

function draw() {
  background(15);
  
  // Cámara interactiva
  orbitControl();
  
  // Iluminación dinámica
  ambientLight(40);
  directionalLight(200, 200, 200, 1, 1, -1);
  
  if (moverLuz) {
    // Luz que se mueve con el mouse
    pointLight(255, 200, 150, mouseX - width/2, mouseY - height/2, 400);
  } else {
    pointLight(255, 200, 150, 0, 0, 300);
  }
  
  angulo += velocidadRotacion;
  
  // --- Objeto 1: Esfera con movimiento orbital y cambio de color ---
  push();
  let x = sin(angulo) * 300;
  let z = cos(angulo * 0.8) * 200;
  translate(x, 0, z);
  specularMaterial(colorR, 100, 255 - colorR);
  shininess(80);
  sphere(70);
  pop();
  
  // --- Objeto 2: Cubo rotatorio con material ambiental ---
  push();
  translate(-250, -80, -150);
  rotateX(angulo);
  rotateY(angulo * 1.5);
  ambientMaterial(255, 120, 100);
  box(120);
  pop();
  
  // --- Objeto 3: Toroide con material normal ---
  push();
  translate(250, 100, 0);
  rotateZ(angulo * 2);
  normalMaterial();
  torus(90, 25);
  pop();
  
  // --- Objeto 4: Cilindro que se mueve verticalmente ---
  push();
  translate(0, sin(angulo * 1.2) * 150, -200);
  ambientMaterial(100, 200, 255);
  cylinder(50, 130);
  pop();
  
  // --- Piso semitransparente de referencia ---
  push();
  rotateX(-HALF_PI);
  translate(0, 0, -250);
  fill(80, 80, 100, 60);
  plane(1000, 1000);
  pop();
  
  // --- Interacción con teclado ---
  // Espacio: pausar movimiento de la luz
  if (keyIsDown(32)) {
    moverLuz = !moverLuz;
    delay(200); // pequeño retraso para evitar múltiples toggles
  }
  // Tecla C: cambiar color de la esfera
  if (keyIsDown(67)) {
    colorR = (colorR + 5) % 255;
  }
  // Tecla R: aumentar velocidad de rotación
  if (keyIsDown(82)) {
    velocidadRotacion += 0.001;
  }
  // Tecla F: disminuir velocidad
  if (keyIsDown(70)) {
    velocidadRotacion -= 0.001;
    velocidadRotacion = constrain(velocidadRotacion, 0.005, 0.05);
  }
  
  // Instrucciones en pantalla
  push();
  resetMatrix();
  fill(255);
  textSize(14);
  text("ESCENA 3D COMPLETA", -450, -320);
  text("Cámara: arrastrar con mouse", -450, -290);
  text("ESPACIO: pausar luz dinámica", -450, -260);
  text("C: cambiar color de la esfera", -450, -230);
  text("R: acelerar rotación | F: frenar rotación", -450, -200);
  pop();
}

// Función auxiliar para evitar rebote de tecla
let ultimoTiempo = 0;
function keyPressed() {
  if (key === 'D') {
    moverLuz = !moverLuz;
  }
}*/