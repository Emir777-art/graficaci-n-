
/*
// DESAFÍO 1 - Rotación controlada por mouse
// θ = map(mouseX, 0, width, 0, TWO_PI)

function setup() {
  createCanvas(600, 400);
  rectMode(CENTER);
  textSize(16);
}

function draw() {
  background(240);
  
  // Ángulo de rotación basado en posición X del mouse
  let theta = map(mouseX, 0, width, 0, TWO_PI);
  
  // Dibujar objeto rotado
  push();
  translate(width/2, height/2);
  rotate(theta);
  
  // Objeto (rectángulo con círculo para ver orientación)
  fill(100, 150, 255);
  stroke(50);
  strokeWeight(2);
  rect(0, 0, 120, 80);
  
  fill(255, 100, 100);
  circle(40, 0, 20);  // Círculo en el lado derecho para ver rotación
  pop();
  
  // Mostrar información
  fill(0);
  text("Mouse X: " + mouseX, 20, 30);
  text("Ángulo: " + nf(theta, 1, 2) + " rad", 20, 50);
  text("Grados: " + nf(degrees(theta), 1, 0) + "°", 20, 70);
  
  // Dibujar indicador de mouse
  stroke(255, 0, 0);
  line(mouseX, 0, mouseX, height);
  
  // Respuesta a la pregunta
  fill(50);
  text("▶ ¿Qué ocurre cuando el mouse está a la mitad?", 20, 120);
  
  let mitad = width/2;
  let thetaMitad = map(mitad, 0, width, 0, TWO_PI);
  
  if (abs(mouseX - mitad) < 10) {
    fill(255, 0, 0);
    text("⚡ MITAD: θ = " + nf(thetaMitad, 1, 2) + " rad = " + nf(degrees(thetaMitad), 1, 0) + "°", 20, 140);
    text("⚡ El objeto está a 180° (media vuelta)", 20, 160);
  }
}
  */






/*
// DESAFÍO 2 - Rotación alrededor del mouse
// El mouse es el punto pivote

let angulo = 0;

function setup() {
  createCanvas(600, 400);
  rectMode(CENTER);
  textSize(16);
}

function draw() {
  background(240);
  
  // Ángulo que aumenta con el tiempo
  angulo += 0.02;
  
  // Dibujar punto pivote (mouse)
  fill(255, 0, 0);
  noStroke();
  circle(mouseX, mouseY, 12);
  
  // Texto "PIVOTE"
  fill(0);
  text("PIVOTE", mouseX - 30, mouseY - 15);
  
  // Aplicar transformaciones
  push();
  translate(mouseX, mouseY);  // El pivote es el mouse
  rotate(angulo);
  
  // Dibujar objeto (un cuadrado con un círculo excéntrico)
  fill(100, 150, 255, 200);
  stroke(50);
  strokeWeight(2);
  rect(0, 0, 100, 60);
  
  fill(255, 200, 100);
  circle(40, 0, 20);  // Este círculo ayuda a ver la rotación
  
  // Línea que conecta con el pivote
  stroke(255, 0, 0, 100);
  line(0, 0, 40, 0);
  pop();
  
  // Información
  fill(0);
  text("Rotación alrededor del mouse", 20, 30);
  text("Ángulo: " + nf(angulo, 1, 2) + " rad", 20, 50);
  text("(" + nf(degrees(angulo), 1, 0) + "°)", 20, 70);
  text("Pivote: (" + mouseX + ", " + mouseY + ")", 20, 90);
  
  // Explicación
  fill(50);
  text("✓ El objeto rota manteniendo su distancia al mouse", 20, 130);
  text("✓ El mouse es el centro de rotación", 20, 150);
}*/









// DESAFÍO 3 - Composición: ¿Importa el orden?
// Comparación de diferentes órdenes de transformaciones

let escala = 1.3;
let angulo = PI/6;  // 30 grados
let traslacionX = 80;
let traslacionY = 40;

function setup() {
  createCanvas(900, 500);
  rectMode(CENTER);
  textSize(14);
}

function draw() {
  background(240);
  
  // Mostrar los 3 órdenes diferentes
  let spacing = 300;
  
  // Títulos
  fill(0);
  text("ORDEN 1: T → R → S", 150, 40);
  text("ORDEN 2: R → S → T", 450, 40);
  text("ORDEN 3: S → T → R", 750, 40);
  
  // Dibujar ejes de referencia
  stroke(200);
  for (let x = 150; x <= 750; x += 300) {
    line(x, 80, x, 450);
    line(x - 150, 250, x + 150, 250);
    fill(0);
    noStroke();
    circle(x, 250, 5);
    text("origen", x - 25, 230);
  }
  
  // ORDEN 1: Traslación → Rotación → Escala
  push();
  translate(150, 250);
  rotate(angulo);
  scale(escala);
  
  fill(255, 100, 100, 200);
  stroke(100, 0, 0);
  strokeWeight(2);
  rect(traslacionX, traslacionY, 80, 50);
  
  // Punto de referencia
  fill(0, 255, 0);
  circle(traslacionX, traslacionY, 6);
  pop();
  
  // ORDEN 2: Rotación → Escala → Traslación
  push();
  rotate(angulo);
  scale(escala);
  translate(450, 250);
  
  fill(100, 255, 100, 200);
  stroke(0, 100, 0);
  strokeWeight(2);
  rect(traslacionX, traslacionY, 80, 50);
  
  fill(0, 255, 0);
  circle(traslacionX, traslacionY, 6);
  pop();
  
  // ORDEN 3: Escala → Traslación → Rotación
  push();
  scale(escala);
  translate(750, 250);
  rotate(angulo);
  
  fill(100, 100, 255, 200);
  stroke(0, 0, 100);
  strokeWeight(2);
  rect(traslacionX, traslacionY, 80, 50);
  
  fill(0, 255, 0);
  circle(traslacionX, traslacionY, 6);
  pop();
  
  // Explicación matemática
  fill(0);
  text("Parámetros:", 20, 470);
  text("Traslación: (" + traslacionX + ", " + traslacionY + ")", 20, 490);
  text("Rotación: " + nf(degrees(angulo), 1, 0) + "°", 20, 510);
  text("Escala: " + escala, 20, 530);
  
  // Ecuaciones
  fill(100, 0, 0);
  text("M₁ = T·R·S", 100, 450);
  fill(0, 100, 0);
  text("M₂ = R·S·T", 400, 450);
  fill(0, 0, 100);
  text("M₃ = S·T·R", 700, 450);
  
  fill(0);
  text(" Punto verde = (80,40) después de transformaciones", 20, 550);
  text("Cada orden produce una posición final DIFERENTE", 20, 570);
}