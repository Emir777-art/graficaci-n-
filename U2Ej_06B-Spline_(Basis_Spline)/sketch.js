/*// DESAFÍO 1 - Editor interactivo de B-Spline
// Arrastra los puntos para ver cómo cambia la curva localmente

let puntos = [];
let arrastrando = false;
let puntoSeleccionado = -1;
let numPuntos = 6;

function setup() {
  createCanvas(800, 500);
  
  // Inicializar puntos de control
  for (let i = 0; i < numPuntos; i++) {
    let x = map(i, 0, numPuntos-1, 100, 700);
    let y = random(200, 400);
    puntos.push(createVector(x, y));
  }
  
  textSize(14);
}

function draw() {
  background(240);
  
  // Dibujar polígono de control
  stroke(150, 150, 150, 150);
  strokeWeight(1);
  for (let i = 0; i < puntos.length - 1; i++) {
    line(puntos[i].x, puntos[i].y, puntos[i+1].x, puntos[i+1].y);
  }
  
  // Dibujar B-Spline (Catmull-Rom en p5.js)
  stroke(0, 0, 255);
  strokeWeight(3);
  noFill();
  
  // Dibujar curvas entre cada grupo de 4 puntos consecutivos
  for (let i = 0; i < puntos.length - 3; i++) {
    curve(
      puntos[i].x, puntos[i].y,
      puntos[i+1].x, puntos[i+1].y,
      puntos[i+2].x, puntos[i+2].y,
      puntos[i+3].x, puntos[i+3].y
    );
  }
  
  // Dibujar puntos de control
  for (let i = 0; i < puntos.length; i++) {
    // Color diferente para cada sección
    if (i >= 1 && i <= puntos.length - 2) {
      fill(255, 200, 0);  // Puntos interiores afectan más secciones
    } else {
      fill(255, 0, 0);    // Puntos extremos (solo afectan una sección)
    }
    
    noStroke();
    circle(puntos[i].x, puntos[i].y, 16);
    
    // Número del punto
    fill(0);
    text(i, puntos[i].x - 5, puntos[i].y - 15);
  }
  
  // Resaltar secciones afectadas por el punto seleccionado
  if (puntoSeleccionado >= 0) {
    fill(255, 255, 0, 50);
    noStroke();
    
    // Mostrar qué secciones afecta este punto
    let inicio = max(0, puntoSeleccionado - 3);
    let fin = min(puntos.length - 4, puntoSeleccionado);
    
    for (let i = inicio; i <= fin; i++) {
      // Calcular rectángulo aproximado de la sección
      let x1 = min(puntos[i].x, puntos[i+1].x, puntos[i+2].x, puntos[i+3].x);
      let x2 = max(puntos[i].x, puntos[i+1].x, puntos[i+2].x, puntos[i+3].x);
      let y1 = min(puntos[i].y, puntos[i+1].y, puntos[i+2].y, puntos[i+3].y);
      let y2 = max(puntos[i].y, puntos[i+1].y, puntos[i+2].y, puntos[i+3].y);
      
      rect(x1 - 10, y1 - 10, x2 - x1 + 20, y2 - y1 + 20);
    }
  }
  
  // Información
  fill(0);
  text("DESAFÍO 1 - Editor B-Spline interactivo", 20, 30);
  text("Arrastra los puntos amarillos con el mouse", 20, 50);
  
  // Explicación
  fill(50);
  text("¿Por qué solo cambia una sección cuando mueves un punto?", 20, 90);
  text("Las B-Splines tienen SOPORTE LOCAL", 20, 110);
  text(" Cada punto afecta solo a las curvas en las que participa", 20, 130);
  text(" Un punto Pᵢ afecta las curvas entre Pᵢ₋₃ y Pᵢ₊₁", 20, 150);
  
  if (puntoSeleccionado >= 0) {
    fill(255, 0, 0);
    text("Punto " + puntoSeleccionado + " seleccionado", 20, 180);
    text("Afecta secciones: " + max(0, puntoSeleccionado - 3) + " a " + min(puntos.length - 4, puntoSeleccionado), 20, 200);
  }
}

function mousePressed() {
  // Buscar punto cercano al mouse
  for (let i = 0; i < puntos.length; i++) {
    let d = dist(mouseX, mouseY, puntos[i].x, puntos[i].y);
    if (d < 20) {
      arrastrando = true;
      puntoSeleccionado = i;
      break;
    }
  }
}

function mouseDragged() {
  if (arrastrando && puntoSeleccionado >= 0) {
    puntos[puntoSeleccionado].x = mouseX;
    puntos[puntoSeleccionado].y = mouseY;
  }
}

function mouseReleased() {
  arrastrando = false;
  puntoSeleccionado = -1;
} */







  /*

  // DESAFÍO 2 - Comparación Bézier vs B-Spline
// Mismos puntos de control, comportamientos diferentes

let puntos = [];
let numPuntos = 5;

function setup() {
  createCanvas(1000, 900);
  
  // Inicializar puntos de control
  puntos = [
    createVector(100, 300),
    createVector(250, 150),
    createVector(400, 400),
    createVector(550, 150),
    createVector(700, 300)
  ];
  
  textSize(14);
}

function draw() {
  background(240);
  
  // Dibujar título
  fill(0);
  textSize(18);
  text("COMPARACIÓN: Bézier vs B-Spline", 300, 40);
  textSize(14);
  
  // Dibujar polígono de control (líneas grises)
  stroke(150, 150, 150, 150);
  strokeWeight(1);
  for (let i = 0; i < puntos.length - 1; i++) {
    line(puntos[i].x, puntos[i].y, puntos[i+1].x, puntos[i+1].y);
  }
  
  // ===== B-SPLINE (Catmull-Rom) =====
  stroke(0, 0, 255);
  strokeWeight(4);
  noFill();
  
  // Dibujar curvas entre cada grupo de 4 puntos
  for (let i = 0; i < puntos.length - 3; i++) {
    curve(
      puntos[i].x, puntos[i].y,
      puntos[i+1].x, puntos[i+1].y,
      puntos[i+2].x, puntos[i+2].y,
      puntos[i+3].x, puntos[i+3].y
    );
  }
  
  // Etiqueta B-Spline
  fill(0, 0, 250);
  text("B-Spline (azul) - Pasa cerca pero no por los puntos", 500, 70);
  
  // ===== BÉZIER (múltiples curvas) =====
  stroke(255, 0, 0);
  strokeWeight(2);
  
  // Para Bézier, necesitamos crear curvas separadas
  // Usaremos grupos de 4 puntos con solapamiento
  for (let i = 0; i < puntos.length - 3; i++) {
    // Para que sea comparable, usamos los mismos grupos
    // Pero Bézier NO tiene continuidad automática
    bezier(
      puntos[i].x, puntos[i].y,
      puntos[i+1].x, puntos[i+1].y,
      puntos[i+2].x, puntos[i+2].y,
      puntos[i+3].x, puntos[i+3].y
    );
  }
  
  // Etiqueta Bézier
  fill(255, 0, 0);
  text("Bézier (rojo) - Múltiples curvas sin continuidad", 500, 90);
  
  // Dibujar puntos de control
  for (let i = 0; i < puntos.length; i++) {
    fill(0, 255, 0);
    noStroke();
    circle(puntos[i].x, puntos[i].y, 12);
    
    // Número del punto
    fill(0);
    text("P" + i, puntos[i].x + 15, puntos[i].y - 10);
  }
  
  // TABLA COMPARATIVA
  fill(50);
  rect(20, 350, 400, 130, 5);
  fill(255);
  text("CARACTERÍSTICA", 30, 370);
  text("BÉZIER", 180, 370);
  text("B-SPLINE", 300, 370);
  
  stroke(255);
  line(20, 380, 420, 380);
  line(150, 350, 150, 480);
  line(260, 350, 260, 480);
  
  noStroke();
  fill(255);
  text("Control local", 30, 400);
  fill(255, 0, 0);
  text(" No", 180, 400);
  fill(0, 0, 255);
  text(" Sí", 300, 400);
  
  fill(255);
  text("Pasa por puntos", 30, 420);
  fill(255, 0, 0);
  text(" Solo extremos", 180, 420);
  fill(0, 0, 255);
  text(" No necesariamente", 300, 420);
  
  fill(255);
  text("Continuidad C²", 30, 440);
  fill(255, 0, 0);
  text(" No automática", 180, 440);
  fill(0, 0, 255);
  text(" Sí", 300, 440);
  
  fill(255);
  text("Número de puntos", 30, 460);
  fill(255, 0, 0);
  text("4 por curva", 180, 460);
  fill(0, 0, 255);
  text("Cualquiera", 300, 460);
}

function mouseDragged() {
  // Permitir mover puntos para comparar en tiempo real
  for (let i = 0; i < puntos.length; i++) {
    let d = dist(mouseX, mouseY, puntos[i].x, puntos[i].y);
    if (d < 20) {
      puntos[i].x = mouseX;
      puntos[i].y = mouseY;
      break;
    }
  }
}*/



/*

// DESAFÍO 3 - Animación sobre B-Spline
// Un personaje sigue la curva con velocidad constante

let puntos = [];
let t = 0;  // Parámetro de la curva (0-1)
let velocidad = 0.002;
let personajeX, personajeY;

function setup() {
  createCanvas(800, 500);
  
  // Crear un camino con varios puntos
  puntos = [
    createVector(100, 400),
    createVector(200, 200),
    createVector(350, 100),
    createVector(500, 150),
    createVector(650, 300),
    createVector(700, 400)
  ];
  
  textSize(14);
}

function draw() {
  background(240);
  
  // Dibujar polígono de control
  stroke(150, 150, 150, 150);
  strokeWeight(1);
  for (let i = 0; i < puntos.length - 1; i++) {
    line(puntos[i].x, puntos[i].y, puntos[i+1].x, puntos[i+1].y);
  }
  
  // Dibujar la spline completa
  stroke(0, 0, 255);
  strokeWeight(3);
  noFill();
  
  for (let i = 0; i < puntos.length - 3; i++) {
    curve(
      puntos[i].x, puntos[i].y,
      puntos[i+1].x, puntos[i+1].y,
      puntos[i+2].x, puntos[i+2].y,
      puntos[i+3].x, puntos[i+3].y
    );
  }
  
  // Dibujar puntos de control
  for (let i = 0; i < puntos.length; i++) {
    fill(255, 200, 0);
    noStroke();
    circle(puntos[i].x, puntos[i].y, 12);
    
    fill(0);
    text("P" + i, puntos[i].x + 15, puntos[i].y - 10);
  }
  
  // ACTUALIZAR POSICIÓN DEL PERSONAJE
  t += velocidad;
  
  // Hacer que t siempre esté entre 0 y 1
  if (t > 1) {
    t = 0;  // Reiniciar ciclo
  }
  
  // Calcular posición en la spline
  calcularPosicionSpline(t);
  
  // DIBUJAR PERSONAJE en la posición calculada
  dibujarPersonaje(personajeX, personajeY);
  
  // Barra de progreso
  fill(100);
  rect(100, 50, 600, 20);
  fill(0, 255, 0);
  rect(100, 50, 600 * t, 20);
  
  fill(0);
  text("Progreso: " + nf(t * 100, 1, 0) + "%", 100, 45);
  
  // Información
  fill(0);
  text("DESAFÍO 3 - Personaje siguiendo B-Spline", 20, 30);
  text("Velocidad constante: t incrementa uniformemente", 20, 90);
  text("t = " + nf(t, 1, 3), 20, 110);
  
  // Explicación
  fill(50);
  text("✓ La spline completa es una concatenación de segmentos", 20, 450);
  text("✓ Mapeamos t (0-1) al segmento correspondiente", 20, 470);
}

function calcularPosicionSpline(t) {
  // t está entre 0 y 1 para toda la curva
  // Necesitamos mapearlo al segmento correcto
  
  let numSegmentos = puntos.length - 3;
  
  // Determinar qué segmento usar
  let segmento = floor(t * numSegmentos);
  segmento = constrain(segmento, 0, numSegmentos - 1);
  
  // t local dentro del segmento (0-1)
  let tLocal = (t * numSegmentos) - segmento;
  
  // Obtener puntos del segmento
  let p0 = puntos[segmento];
  let p1 = puntos[segmento + 1];
  let p2 = puntos[segmento + 2];
  let p3 = puntos[segmento + 3];
  
  // Calcular punto en la curva Catmull-Rom
  // Usando la función curvePoint() de p5.js
  personajeX = curvePoint(p0.x, p1.x, p2.x, p3.x, tLocal);
  personajeY = curvePoint(p0.y, p1.y, p2.y, p3.y, tLocal);
}

function dibujarPersonaje(x, y) {
  push();
  translate(x, y);
  
  // Calcular dirección para orientar el personaje
  let epsilon = 0.01;
  calcularPosicionSpline(min(t + epsilon, 1));
  let xSig = personajeX;
  let ySig = personajeY;
  calcularPosicionSpline(t);
  
  let angulo = atan2(ySig - y, xSig - x);
  
  // Rotar personaje en dirección del movimiento
  rotate(angulo);
  
  // Dibujar personaje (un carrito/avión)
  fill(255, 100, 100);
  stroke(50);
  strokeWeight(2);
  
  // Cuerpo
  rect(0, 0, 40, 20);
  
  // Cabina
  fill(200, 200, 255);
  rect(10, -8, 15, 8);
  
  // Alas/Ruedas
  fill(100);
  rect(-5, -10, 5, 10);
  rect(30, -10, 5, 10);
  
  pop();
  
  // Dibujar estela del camino recorrido
  stroke(255, 0, 0, 100);
  strokeWeight(2);
  point(x, y);
}

function mouseDragged() {
  // Permitir mover puntos para cambiar el camino
  for (let i = 0; i < puntos.length; i++) {
    let d = dist(mouseX, mouseY, puntos[i].x, puntos[i].y);
    if (d < 20) {
      puntos[i].x = mouseX;
      puntos[i].y = mouseY;
      break;
    }
  }
}

function keyPressed() {
  // Control de velocidad
  if (keyCode == UP_ARROW) {
    velocidad += 0.001;
  }
  if (keyCode == DOWN_ARROW) {
    velocidad -= 0.001;
    velocidad = max(0.0001, velocidad);
  }
  
  // Reiniciar con espacio
  if (key == ' ') {
    t = 0;
  }
  
  // Mostrar velocidad
  print("Velocidad: " + velocidad);
} */ 