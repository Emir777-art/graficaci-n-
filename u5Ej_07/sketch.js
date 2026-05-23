/* let anguloHombro = 0;
let anguloCodo = 0;
let dirHombro = 0.02;
let dirCodo = 0.03;

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(30);
  translate(400, 250); // origen en el hombro
  
  // Hombro
  anguloHombro += dirHombro;
  if (anguloHombro > 0.8 || anguloHombro < -0.8) dirHombro *= -1;
  rotate(anguloHombro);
  stroke(255);
  strokeWeight(12);
  line(0, 0, 150, 0);
  
  // Codo (dependiente del hombro)
  translate(150, 0);
  anguloCodo += dirCodo;
  if (anguloCodo > 1.2 || anguloCodo < -0.2) dirCodo *= -1;
  rotate(anguloCodo);
  line(0, 0, 130, 0);
  
  // Dibujar articulaciones
  fill(255, 100, 100);
  noStroke();
  circle(0, 0, 15);
  circle(150, 0, 12);
}*/


/*
let tiempo = 0;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(20);
  translate(400, 300);
  tiempo += 0.05;
  
  // Cuerpo (tronco)
  fill(100, 200, 255);
  rectMode(CENTER);
  rect(0, 0, 60, 100);
  
  // Brazo izquierdo (oscila)
  push();
  translate(-35, -30);
  rotate(sin(tiempo) * 0.6);
  fill(100, 200, 255);
  rect(0, 0, 20, 60);
  pop();
  
  // Brazo derecho (oscila opuesto)
  push();
  translate(35, -30);
  rotate(-sin(tiempo) * 0.6);
  rect(0, 0, 20, 60);
  pop();
  
  // Pierna izquierda
  push();
  translate(-20, 55);
  rotate(sin(tiempo + 1.5) * 0.4);
  rect(0, 0, 25, 70);
  pop();
  
  // Pierna derecha
  push();
  translate(20, 55);
  rotate(-sin(tiempo + 1.5) * 0.4);
  rect(0, 0, 25, 70);
  pop();
  
  // Cabeza
  fill(255, 220, 150);
  circle(0, -70, 50);
} */ 


/*
let anguloHombro = 0;
let anguloCodo = 0;
let dirHombro = 0.02;
let dirCodo = 0.03;
let moverBrazo = true;

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(30);
  translate(400, 250);
  
  // Control de ángulos (el antebrazo depende del brazo)
  if (moverBrazo) {
    anguloHombro += dirHombro;
    if (anguloHombro > 0.7 || anguloHombro < -0.7) dirHombro *= -1;
    
    anguloCodo += dirCodo;
    if (anguloCodo > 1.0 || anguloCodo < -0.3) dirCodo *= -1;
  }
  
  // --- Brazo (segmento padre) ---
  rotate(anguloHombro);
  stroke(255);
  strokeWeight(14);
  line(0, 0, 140, 0);
  
  // --- Antebrazo (segmento hijo) ---
  translate(140, 0);
  rotate(anguloCodo);
  line(0, 0, 120, 0);
  
  // Marcadores de articulaciones
  fill(255, 80, 80);
  noStroke();
  circle(0, 0, 18);
  circle(140, 0, 14);
  
  // Instrucciones
  push();
  resetMatrix();
  fill(255);
  textSize(16);
  text("Presiona ESPACIO para pausar/reanudar movimiento", 20, 40);
  pop();
}

function keyPressed() {
  if (key === ' ') {
    moverBrazo = !moverBrazo;
  }
} */


  