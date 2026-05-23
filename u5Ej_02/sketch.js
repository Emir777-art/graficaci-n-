/*let x = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(30);
  fill(100, 200, 255);
  circle(x, height / 2, 60);
  
  x += 4;
  
  if (x > width + 30) {
    x = -30;
  }
}*/ 
/*
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(30);
  
  let t = frameCount * 0.03;
  let escala = map(sin(t), -1, 1, 0.5, 2.0);
  
  push();
  translate(width / 2, height / 2);
  scale(escala);
  fill(255, 150, 100);
  rectMode(CENTER);
  rect(0, 0, 100, 100);
  pop();
}*/
/*
function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(20);
  
  // Parámetro de tiempo
  let t = frameCount * 0.02;
  
  // Posición horizontal oscilante
  let x = width / 2 + sin(t) * 250;
  let y = height / 2;
  
  // Escala oscilante
  let escala = map(sin(t * 1.3), -1, 1, 0.3, 1.5);
  
  // Rotación continua
  let rotacion = frameCount * 0.03;
  
  push();
  translate(x, y);
  rotate(rotacion);
  scale(escala);
  fill(100, 200, 255);
  rectMode(CENTER);
  rect(0, 0, 120, 120);
  pop();
}*/