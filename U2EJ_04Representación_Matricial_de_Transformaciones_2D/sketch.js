
/*
// DESAFÍO 1 - Orden importa: translate vs rotate

let angulo = PI/4;  // 45 grados
let tx = 100;
let ty = 50;

function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);
  textSize(14);
}

function draw() {
  background(240);
  
  // Títulos
  fill(0);
  text("ORDEN A: translate → rotate", 200, 40);
  text("ORDEN B: rotate → translate", 600, 40);
  
  // Dibujar ejes de referencia
  stroke(200);
  line(200, 80, 200, 350);
  line(50, 200, 350, 200);
  line(600, 80, 600, 350);
  line(450, 200, 750, 200);
  
  // Puntos origen
  fill(0);
  noStroke();
  circle(200, 200, 6);
  circle(600, 200, 6);
  text("origen", 170, 180);
  text("origen", 570, 180);
  
  // ORDEN A: translate → rotate
  push();
  translate(200, 200);   // Primero traslada al origen
  rotate(angulo);         // Luego rota
  
  // Dibujar rectángulo
  fill(255, 100, 100, 180);
  stroke(100, 0, 0);
  strokeWeight(2);
  rect(tx, ty, 100, 60);
  
  // Punto de referencia
  fill(0, 255, 0);
  circle(tx, ty, 8);
  pop();
  
  // ORDEN B: rotate → translate
  push();
  rotate(angulo);         // Primero rota
  translate(600, 200);    // Luego traslada al origen
  
  // Dibujar rectángulo
  fill(100, 255, 100, 180);
  stroke(0, 100, 0);
  strokeWeight(2);
  rect(tx, ty, 100, 60);
  
  // Punto de referencia
  fill(0, 255, 0);
  circle(tx, ty, 8);
  pop();
  
  // Explicación matemática
  fill(0);
  text("M_A = T(200,200) · R(45°)", 100, 370);
  text("M_B = R(45°) · T(600,200)", 500, 370);
  
  // Descripción visual
  fill(50);
  text("✓ En A: la traslación ocurre ANTES de rotar", 50, 400);
  text("✓ En B: la traslación ocurre DESPUÉS de rotar", 450, 400);
  
  // Mostrar parámetros
  text("Parámetros: tx=" + tx + ", ty=" + ty + ", ángulo=" + nf(degrees(angulo), 1, 0) + "°", 250, 430);
}*/








/*
// DESAFÍO 2 - Matriz de escalamiento manual

// Matriz de escalamiento S = [2,0,0; 0,2,0; 0,0,1]
let S = [
  [2, 0, 0],
  [0, 2, 0],
  [0, 0, 1]
];

// Puntos del cuadrado original (esquina superior izquierda)
let cuadradoOriginal = [
  {x: 100, y: 150},  // P0: esquina superior izquierda
  {x: 200, y: 150},  // P1: esquina superior derecha
  {x: 200, y: 250},  // P2: esquina inferior derecha
  {x: 100, y: 250}   // P3: esquina inferior izquierda
];

function setup() {
  createCanvas(600, 400);
  textSize(14);
}

function draw() {
  background(240);
  
  // Aplicar matriz a cada punto
  let cuadradoTransformado = [];
  for (let p of cuadradoOriginal) {
    cuadradoTransformado.push(aplicarM(S, p));
  }
  
  // Dibujar cuadrado original
  fill(100, 150, 255, 100);
  stroke(50);
  strokeWeight(2);
  beginShape();
  for (let p of cuadradoOriginal) {
    vertex(p.x, p.y);
  }
  endShape(CLOSE);
  
  // Dibujar puntos del original
  fill(0, 0, 255);
  noStroke();
  for (let p of cuadradoOriginal) {
    circle(p.x, p.y, 6);
  }
  
  // Dibujar cuadrado transformado (escalado)
  fill(255, 100, 100, 150);
  stroke(255, 0, 0);
  strokeWeight(2);
  beginShape();
  for (let p of cuadradoTransformado) {
    vertex(p.x, p.y);
  }
  endShape(CLOSE);
  
  // Dibujar puntos transformados
  fill(255, 0, 0);
  for (let p of cuadradoTransformado) {
    circle(p.x, p.y, 6);
  }
  
  // Mostrar información
  fill(0);
  text("CUADRADO ORIGINAL (azul)", 20, 30);
  text("CUADRADO ESCALADO (rojo)", 20, 50);
  text("Matriz S = [2,0,0; 0,2,0; 0,0,1]", 20, 80);
  
  // Mostrar coordenadas
  let o = cuadradoOriginal[0];
  let t = cuadradoTransformado[0];
  text("P0 original: (" + o.x + ", " + o.y + ")", 20, 110);
  text("P0 transformado: (" + t.x + ", " + t.y + ")", 20, 130);
  
  // Explicación
  fill(50);
  text("✓ El cuadrado escaló al doble desde el origen (0,0)", 20, 170);
  text("✓ Observa que también se MOVIÓ porque no está centrado", 20, 190);
}

// Función para aplicar matriz 3x3 a un punto (x,y,1)
function aplicarM(M, p) {
  // Convertir a coordenadas homogéneas (x, y, 1)
  let x = p.x;
  let y = p.y;
  let w = 1;
  
  // Multiplicar matriz por vector
  let x2 = M[0][0] * x + M[0][1] * y + M[0][2] * w;
  let y2 = M[1][0] * x + M[1][1] * y + M[1][2] * w;
  // w2 = M[2][0]*x + M[2][1]*y + M[2][2]*w (debería ser 1)
  
  return {x: x2, y: y2};
}*/






/*
// DESAFÍO 3 - Rotación alrededor de un punto sin usar rotate()
// Usando matrices: T(p) · R(θ) · T(-p)

let angulo = 0;
let pivote = {x: 300, y: 200};  // Punto alrededor del cual rotar
let puntos = [];  // Puntos del cuadrado

function setup() {
  createCanvas(900, 900);
  rectMode(CENTER);
  textSize(14);
  
  // Definir cuadrado centrado en (0,0) para facilitar
  puntos = [
    {x: -50, y: -30},  // Esquina superior izquierda
    {x: 50, y: -30},   // Esquina superior derecha
    {x: 50, y: 30},    // Esquina inferior derecha
    {x: -50, y: 30}    // Esquina inferior izquierda
  ];
}

function draw() {
  background(240);
  
  // Incrementar ángulo
  angulo += 0.02;
  
  // 1. Matriz de traslación al origen T(-pivote)
  let T_neg = [
    [1, 0, -pivote.x],
    [0, 1, -pivote.y],
    [0, 0, 1]
  ];
  
  // 2. Matriz de rotación R(θ)
  let R = [
    [cos(angulo), -sin(angulo), 0],
    [sin(angulo), cos(angulo), 0],
    [0, 0, 1]
  ];
  
  // 3. Matriz de traslación de vuelta T(pivote)
  let T_pos = [
    [1, 0, pivote.x],
    [0, 1, pivote.y],
    [0, 0, 1]
  ];
  
  // Matriz compuesta: M = T_pos · R · T_neg
  let M = multiplicarMatrices(T_pos, multiplicarMatrices(R, T_neg));
  
  // Aplicar matriz a cada punto
  let puntosRotados = [];
  for (let p of puntos) {
    puntosRotados.push(aplicarM(M, p));
  }
  
  // Dibujar pivote
  fill(255, 0, 0);
  noStroke();
  circle(pivote.x, pivote.y, 12);
  text("PIVOTE", pivote.x - 30, pivote.y - 15);
  
  // Dibujar cuadrado original (en gris claro)
  push();
  translate(pivote.x, pivote.y);
  fill(200, 200, 200, 100);
  stroke(150);
  strokeWeight(1);
  rect(0, 0, 100, 60);
  pop();
  
  // Dibujar cuadrado rotado
  fill(100, 150, 255, 180);
  stroke(50);
  strokeWeight(2);
  beginShape();
  for (let p of puntosRotados) {
    vertex(p.x, p.y);
  }
  endShape(CLOSE);
  
  // Dibujar puntos rotados
  fill(0, 0, 255);
  for (let p of puntosRotados) {
    circle(p.x, p.y, 6);
  }
  
  // Mostrar información
  fill(0);
  text("ROTACIÓN MANUAL (sin rotate())", 20, 30);
  text("Ángulo: " + nf(angulo, 1, 2) + " rad = " + nf(degrees(angulo), 1, 0) + "°", 20, 50);
  
  // Mostrar matriz compuesta
  text("Matriz M = T(p)·R(θ)·T(-p)", 20, 80);
  text("M[0][0]: " + nf(M[0][0], 1, 2), 20, 100);
  text("M[0][1]: " + nf(M[0][1], 1, 2), 20, 120);
  text("M[1][0]: " + nf(M[1][0], 1, 2), 20, 140);
  text("M[1][1]: " + nf(M[1][1], 1, 2), 20, 160);
}

// Función para multiplicar dos matrices 3x3
function multiplicarMatrices(A, B) {
  let C = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        C[i][j] += A[i][k] * B[k][j];
      }
    }
  }
  
  return C;
}

// Función para aplicar matriz 3x3 a un punto
function aplicarM(M, p) {
  let x = p.x;
  let y = p.y;
  let w = 1;
  
  let x2 = M[0][0] * x + M[0][1] * y + M[0][2] * w;
  let y2 = M[1][0] * x + M[1][1] * y + M[1][2] * w;
  
  return {x: x2, y: y2};
}*/