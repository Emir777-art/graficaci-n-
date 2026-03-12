
/*
// DESAFÍO 1 - Punto de control móvil
// Arrastra P1 con el mouse

// Puntos de control
let P0, P1, P2, P3;
let arrastrando = false;
let puntoSeleccionado = null;

function setup() {
  createCanvas(700, 500);
  
  // Inicializar puntos
  P0 = createVector(100, 400);
  P1 = createVector(200, 150);
  P2 = createVector(500, 150);
  P3 = createVector(600, 400);
  
  textSize(14);
}

function draw() {
  background(240);
  
  // Dibujar polígono de control (líneas guía)
  stroke(150, 150, 150, 150);
  strokeWeight(1);
  line(P0.x, P0.y, P1.x, P1.y);
  line(P1.x, P1.y, P2.x, P2.y);
  line(P2.x, P2.y, P3.x, P3.y);
  
  // Dibujar curva Bézier
  stroke(0, 0, 255);
  strokeWeight(3);
  noFill();
  bezier(P0.x, P0.y, P1.x, P1.y, P2.x, P2.y, P3.x, P3.y);
  
  // Dibujar puntos de control
  // P0 (inicio) - rojo
  fill(255, 0, 0);
  noStroke();
  circle(P0.x, P0.y, 12);
  text("P0", P0.x + 15, P0.y - 10);
  
  // P1 (control 1) - verde (móvil)
  fill(0, 255, 0);
  circle(P1.x, P1.y, 16);
  text("P1 (móvil)", P1.x + 15, P1.y - 10);
  
  // P2 (control 2) - azul
  fill(0, 0, 255);
  circle(P2.x, P2.y, 12);
  text("P2", P2.x + 15, P2.y - 10);
  
  // P3 (final) - rojo
  fill(255, 0, 0);
  circle(P3.x, P3.y, 12);
  text("P3", P3.x + 15, P3.y - 10);
  
  // Información
  fill(0);
  text("DESAFÍO 1 - Punto de control móvil", 20, 30);
  text("Arrastra P1 (punto verde) con el mouse", 20, 50);
  
  // Mostrar coordenadas
  text("P0: (" + floor(P0.x) + ", " + floor(P0.y) + ")", 20, 80);
  text("P1: (" + floor(P1.x) + ", " + floor(P1.y) + ")", 20, 100);
  text("P2: (" + floor(P2.x) + ", " + floor(P2.y) + ")", 20, 120);
  text("P3: (" + floor(P3.x) + ", " + floor(P3.y) + ")", 20, 140);
  
  // Explicación
  fill(50);
  text("¿Por qué mover P1 afecta principalmente la parte inicial?", 20, 180);
  text(" P1 controla la tangente de salida desde P0", 20, 200);
  text("En t=0, la derivada es 3(P1-P0)", 20, 220);
  text("La influencia de P1 es máxima al inicio", 20, 240);
  
  // Dibujar tangente en P0
  stroke(255, 0, 0, 100);
  strokeWeight(2);
  line(P0.x, P0.y, P0.x + 3*(P1.x - P0.x), P0.y + 3*(P1.y - P0.y));
}

function mousePressed() {
  // Verificar si el mouse está sobre P1
  let d = dist(mouseX, mouseY, P1.x, P1.y);
  if (d < 20) {
    arrastrando = true;
    puntoSeleccionado = "P1";
  }
}

function mouseDragged() {
  if (arrastrando && puntoSeleccionado == "P1") {
    P1.x = mouseX;
    P1.y = mouseY;
  }
}

function mouseReleased() {
  arrastrando = false;
  puntoSeleccionado = null;
} */




  /*
  // DESAFÍO 2 - Dos curvas Bézier conectadas suavemente
// Continuidad C¹: P3(1) = P0(2) y P2(1), P1(2) alineados

// Primera curva
let P0_1, P1_1, P2_1, P3_1;

// Segunda curva
let P0_2, P1_2, P2_2, P3_2;

function setup() {
  createCanvas(800, 500);
  
  // Inicializar primera curva
  P0_1 = createVector(100, 300);
  P1_1 = createVector(200, 150);
  P2_1 = createVector(300, 150);
  P3_1 = createVector(400, 300);
  
  // Inicializar segunda curva (conectada)
  P0_2 = createVector(400, 300);  // = P3_1
  P1_2 = createVector(500, 450);  // Inicialmente no alineado
  P2_2 = createVector(600, 450);
  P3_2 = createVector(700, 300);
  
  textSize(14);
}

function draw() {
  background(240);
  
  // Asegurar continuidad C¹ (P2_1, P3_1/P0_2, P1_2 alineados)
  // Vector de dirección desde P2_1 a P3_1
  let dirX = P3_1.x - P2_1.x;
  let dirY = P3_1.y - P2_1.y;
  
  // Para continuidad suave, P1_2 debe estar en la misma dirección
  // desde P0_2 (que es P3_1)
  
  // DIBUJAR PRIMERA CURVA
  stroke(255, 0, 0);
  strokeWeight(3);
  noFill();
  bezier(P0_1.x, P0_1.y, P1_1.x, P1_1.y, P2_1.x, P2_1.y, P3_1.x, P3_1.y);
  
  // DIBUJAR SEGUNDA CURVA
  stroke(0, 0, 255);
  bezier(P0_2.x, P0_2.y, P1_2.x, P1_2.y, P2_2.x, P2_2.y, P3_2.x, P3_2.y);
  
  // DIBUJAR PUNTOS DE CONTROL
  // Primera curva (rojos)
  fill(255, 100, 100);
  noStroke();
  circle(P0_1.x, P0_1.y, 10);
  circle(P1_1.x, P1_1.y, 8);
  circle(P2_1.x, P2_1.y, 8);
  circle(P3_1.x, P3_1.y, 12);  // Punto de conexión
  
  // Segunda curva (azules)
  fill(100, 100, 255);
  circle(P0_2.x, P0_2.y, 12);  // Punto de conexión
  circle(P1_2.x, P1_2.y, 8);
  circle(P2_2.x, P2_2.y, 8);
  circle(P3_2.x, P3_2.y, 10);
  
  // Etiquetas
  fill(0);
  text("P0₁", P0_1.x - 30, P0_1.y - 10);
  text("P1₁", P1_1.x + 10, P1_1.y - 10);
  text("P2₁", P2_1.x + 10, P2_1.y - 10);
  text("P3₁ = P0₂", P3_1.x + 10, P3_1.y - 20);
  text("P1₂", P1_2.x + 10, P1_2.y + 15);
  text("P2₂", P2_2.x + 10, P2_2.y + 15);
  text("P3₂", P3_2.x + 10, P3_2.y - 10);
  
  // Dibujar línea de continuidad
  stroke(0, 255, 0);
  strokeWeight(2);
  line(P2_1.x, P2_1.y, P1_2.x, P1_2.y);
  
  // Información
  fill(0);
  text("DESAFÍO 2 - Curvas conectadas suavemente", 20, 30);
  text("Continuidad C¹: P3₁ = P0₂ y P2₁, P3₁, P1₂ alineados", 20, 50);
  
  // Mostrar condición matemática
  fill(50);
  text("Condición de continuidad suave:", 20, 80);
  text("P1₂ = P0₂ + k·(P0₂ - P2₁) con k>0", 20, 100);
  
  // Verificar continuidad
  let vectorSalida = createVector(P3_1.x - P2_1.x, P3_1.y - P2_1.y);
  let vectorEntrada = createVector(P1_2.x - P0_2.x, P1_2.y - P0_2.y);
  
  // Normalizar para comparar dirección
  vectorSalida.normalize();
  vectorEntrada.normalize();
  
  let dot = vectorSalida.dot(vectorEntrada);
  
  if (abs(dot - 1) < 0.01) {
    fill(0, 150, 0);
    text("✓ Continuidad C¹: Pendientes iguales", 20, 130);
  } else {
    fill(150, 0, 0);
    text("✗ No hay continuidad C¹ (arrastra P1₂)", 20, 130);
  }
  
  // Instrucciones
  fill(100);
  text("Arrastra P1₂ para alinearlo con la dirección de salida", 20, 170);
}

function mouseDragged() {
  // Permitir mover P1₂
  let d = dist(mouseX, mouseY, P1_2.x, P1_2.y);
  if (d < 20) {
    P1_2.x = mouseX;
    P1_2.y = mouseY;
  }
}*/ 




/*

// DESAFÍO 3 - Firma tipo script con curvas Bézier
// Construyendo la palabra "HOLA"

let curvas = [];
let mostrarPuntos = true;
let mostrarGuia = true;

function setup() {
  createCanvas(800, 400);
  
  // Definir curvas para formar "HOLA"
  // Cada curva es un arreglo [P0, P1, P2, P3]
  
  // Letra H (dos trazos verticales y uno horizontal)
  curvas.push({
    puntos: [
      createVector(100, 150),  // P0
      createVector(100, 100),  // P1
      createVector(100, 200),  // P2
      createVector(100, 250)   // P3
    ],
    color: color(255, 0, 0)
  });
  
  curvas.push({
    puntos: [
      createVector(150, 150),  // P0
      createVector(150, 100),  // P1
      createVector(150, 200),  // P2
      createVector(150, 250)   // P3
    ],
    color: color(255, 0, 0)
  });
  
  curvas.push({
    puntos: [
      createVector(100, 200),  // P0
      createVector(125, 200),  // P1
      createVector(125, 200),  // P2
      createVector(150, 200)   // P3
    ],
    color: color(255, 0, 0)
  });
  
  // Letra O (un círculo hecho con 4 curvas)
  let oX = 300;
  let oY = 200;
  let oR = 40;
  
  // Curva superior derecha
  curvas.push({
    puntos: [
      createVector(oX, oY - oR),        // P0
      createVector(oX + oR*0.55, oY - oR), // P1
      createVector(oX + oR, oY - oR*0.55), // P2
      createVector(oX + oR, oY)          // P3
    ],
    color: color(0, 255, 0)
  });
  
  // Curva inferior derecha
  curvas.push({
    puntos: [
      createVector(oX + oR, oY),        // P0
      createVector(oX + oR, oY + oR*0.55), // P1
      createVector(oX + oR*0.55, oY + oR), // P2
      createVector(oX, oY + oR)          // P3
    ],
    color: color(0, 255, 0)
  });
  
  // Curva inferior izquierda
  curvas.push({
    puntos: [
      createVector(oX, oY + oR),        // P0
      createVector(oX - oR*0.55, oY + oR), // P1
      createVector(oX - oR, oY + oR*0.55), // P2
      createVector(oX - oR, oY)          // P3
    ],
    color: color(0, 255, 0)
  });
  
  // Curva superior izquierda
  curvas.push({
    puntos: [
      createVector(oX - oR, oY),        // P0
      createVector(oX - oR, oY - oR*0.55), // P1
      createVector(oX - oR*0.55, oY - oR), // P2
      createVector(oX, oY - oR)          // P3
    ],
    color: color(0, 255, 0)
  });
  
  // Letra L
  curvas.push({
    puntos: [
      createVector(450, 150),  // P0
      createVector(450, 130),  // P1
      createVector(450, 200),  // P2
      createVector(450, 250)   // P3
    ],
    color: color(0, 0, 255)
  });
  
  curvas.push({
    puntos: [
      createVector(450, 250),  // P0
      createVector(470, 250),  // P1
      createVector(490, 250),  // P2
      createVector(500, 250)   // P3
    ],
    color: color(0, 0, 255)
  });
  
  // Letra A
  let aX = 600;
  let aY = 200;
  
  curvas.push({
    puntos: [
      createVector(aX - 30, aY + 50),  // P0 base izq
      createVector(aX - 20, aY + 20),  // P1
      createVector(aX - 10, aY - 20),  // P2
      createVector(aX, aY - 50)        // P3 punta
    ],
    color: color(255, 255, 0)
  });
  
  curvas.push({
    puntos: [
      createVector(aX, aY - 50),       // P0 punta
      createVector(aX + 10, aY - 20),  // P1
      createVector(aX + 20, aY + 20),  // P2
      createVector(aX + 30, aY + 50)   // P3 base der
    ],
    color: color(255, 255, 0)
  });
  
  curvas.push({
    puntos: [
      createVector(aX - 15, aY),       // P0
      createVector(aX - 5, aY),        // P1
      createVector(aX + 5, aY),        // P2
      createVector(aX + 15, aY)        // P3
    ],
    color: color(255, 255, 0)
  });
  
  textSize(14);
}

function draw() {
  background(240);
  
  // Dibujar todas las curvas
  for (let i = 0; i < curvas.length; i++) {
    let c = curvas[i];
    let pts = c.puntos;
    
    // Dibujar curva
    stroke(c.color);
    strokeWeight(3);
    noFill();
    bezier(pts[0].x, pts[0].y, pts[1].x, pts[1].y, pts[2].x, pts[2].y, pts[3].x, pts[3].y);
    
    // Dibujar puntos de control si está activado
    if (mostrarPuntos) {
      for (let j = 0; j < pts.length; j++) {
        if (j == 0 || j == 3) {
          fill(255, 0, 0);  // Puntos extremos rojos
        } else {
          fill(0, 255, 0);  // Puntos de control verdes
        }
        noStroke();
        circle(pts[j].x, pts[j].y, (j == 0 || j == 3) ? 6 : 4);
      }
    }
  }
  
  // Dibujar líneas guía
  if (mostrarGuia) {
    stroke(150, 150, 150, 100);
    strokeWeight(1);
    for (let c of curvas) {
      let pts = c.puntos;
      line(pts[0].x, pts[0].y, pts[1].x, pts[1].y);
      line(pts[1].x, pts[1].y, pts[2].x, pts[2].y);
      line(pts[2].x, pts[2].y, pts[3].x, pts[3].y);
    }
  }
  
  // Título
  fill(0);
  textSize(24);
  text("H O L A", 250, 70);
  
  textSize(14);
  text("DESAFÍO 3 - Firma con curvas Bézier", 20, 30);
  text("Presiona 'P' para mostrar/ocultar puntos", 20, 350);
  text("Presiona 'G' para mostrar/ocultar guías", 20, 370);
  
  // Número de curvas
  text("Curvas: " + curvas.length, 700, 350);
}

function keyPressed() {
  if (key == 'p' || key == 'P') {
    mostrarPuntos = !mostrarPuntos;
  }
  if (key == 'g' || key == 'G') {
    mostrarGuia = !mostrarGuia;
  }
}   */