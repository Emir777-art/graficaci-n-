
let ejercicioActual = 0;

function setup() {
  createCanvas(600, 400);
  textSize(14);
  textAlign(CENTER, TOP);
}

function draw() {
  background(240);
  
  mostrarTitulo();
  
  if (ejercicioActual === 0) {
    ejercicioEjesCentrales();
  } else if (ejercicioActual === 1) {
    ejercicioPuntoCentral();
  } else if (ejercicioActual === 2) {
    ejercicioCirculosEsquinas();
  } else if (ejercicioActual === 3) {
    ejercicioRectanguloCentrado();
  } else if (ejercicioActual === 4) {
    ejercicioCuadrantes();
  } else if (ejercicioActual === 5) {
    ejercicioDiagonal();
  }
  
  // Mostrar instrucciones
  mostrarInstrucciones();
}

// ============================================================
// EJERCICIO PRINCIPAL (Ejemplo del capítulo)
// ============================================================

function ejercicioEjesCentrales() {
  // Dibujar líneas centrales (ejes)
  stroke(0); // Negro
  strokeWeight(2);
  
  // Línea vertical: x = width/2
  line(width/2, 0, width/2, height);
  
  // Línea horizontal: y = height/2
  line(0, height/2, width, height/2);
  
  // Marcar el centro con un punto rojo
  stroke(255, 0, 0);
  strokeWeight(8);
  point(width/2, height/2);
  
  // Explicación matemática
  fill(0);
  noStroke();
  text("Ecuaciones:", 100, 50);
  text("x = " + (width/2) + " (vertical)", 100, 70);
  text("y = " + (height/2) + " (horizontal)", 100, 90);
}

// ============================================================
// NIVEL 1 - Ejercicios básicos
// ============================================================

function ejercicioPuntoCentral() {
  // Ejercicio 1: Dibujar un punto en el centro
  stroke(0, 0, 255); // Azul
  strokeWeight(10);
  point(width/2, height/2);
  
  // Mostrar coordenadas
  fill(0);
  noStroke();
  text("Centro: (" + (width/2) + ", " + (height/2) + ")", width/2, 50);
}

function ejercicioCirculosEsquinas() {
  // Ejercicio 2: Dibujar un círculo en cada esquina
  noStroke();
  
  // Esquina superior izquierda (0,0)
  fill(255, 0, 0); // Rojo
  circle(15, 15, 30); // Desplazado para verse completo
  
  // Esquina superior derecha (width, 0)
  fill(0, 255, 0); // Verde
  circle(width-15, 15, 30);
  
  // Esquina inferior izquierda (0, height)
  fill(0, 0, 255); // Azul
  circle(15, height-15, 30);
  
  // Esquina inferior derecha (width, height)
  fill(255, 255, 0); // Amarillo
  circle(width-15, height-15, 30);
  
  // Mostrar coordenadas
  fill(0);
  text("(0,0)", 15, 5);
  text("(" + width + ",0)", width-50, 5);
  text("(0," + height + ")", 15, height-20);
  text("(" + width + "," + height + ")", width-70, height-20);
}

function ejercicioRectanguloCentrado() {
  // Ejercicio 3: Rectángulo centrado de 100x50
  let ancho = 100;
  let alto = 50;
  
  // Calcular esquina superior izquierda para que quede centrado
  let x = width/2 - ancho/2;
  let y = height/2 - alto/2;
  
  // Dibujar rectángulo
  fill(100, 150, 200, 150); // Azul semitransparente
  stroke(0);
  strokeWeight(2);
  rect(x, y, ancho, alto);
  
  // Marcar el centro
  stroke(255, 0, 0);
  strokeWeight(5);
  point(width/2, height/2);
  
  // Explicación
  fill(0);
  noStroke();
  text("Rectángulo: (" + x + ", " + y + ") a (" + (x+ancho) + ", " + (y+alto) + ")", width/2, 50);
}

// ============================================================
// NIVEL 2 - Cuadrantes
// ============================================================

function ejercicioCuadrantes() {
  // Primero dibujar los ejes (división en cuadrantes)
  stroke(150);
  strokeWeight(1);
  line(width/2, 0, width/2, height);
  line(0, height/2, width, height/2);
  
  // Ejercicio 5: Círculos en el centro de cada cuadrante
  noStroke();
  
  // Centro de cada cuadrante
  let cx1 = width/4;
  let cy1 = height/4;
  let cx2 = 3*width/4;
  let cy2 = height/4;
  let cx3 = width/4;
  let cy3 = 3*height/4;
  let cx4 = 3*width/4;
  let cy4 = 3*height/4;
  
  // Círculo superior izquierdo
  fill(255, 200, 200);
  circle(cx1, cy1, 40);
  fill(0);
  text("Q1", cx1, cy1-15);
  
  // Círculo superior derecho
  fill(200, 255, 200);
  circle(cx2, cy2, 40);
  fill(0);
  text("Q2", cx2, cy2-15);
  
  // Círculo inferior izquierdo
  fill(200, 200, 255);
  circle(cx3, cy3, 40);
  fill(0);
  text("Q3", cx3, cy3-15);
  
  // Círculo inferior derecho
  fill(255, 255, 200);
  circle(cx4, cy4, 40);
  fill(0);
  text("Q4", cx4, cy4-15);
  
  // Mostrar coordenadas de los centros
  fill(0);
  text("(" + cx1 + "," + cy1 + ")", cx1, cy1+25);
  text("(" + cx2 + "," + cy2 + ")", cx2-30, cy2+25);
  text("(" + cx3 + "," + cy3 + ")", cx3, cy3+25);
  text("(" + cx4 + "," + cy4 + ")", cx4-30, cy4+25);
}

// ============================================================
// NIVEL 3 - Diagonal
// ============================================================

function ejercicioDiagonal() {
  // Ejercicio 6: Diagonal principal
  stroke(255, 0, 0);
  strokeWeight(3);
  line(0, 0, width, height);
  
  // Mostrar puntos extremos
  stroke(0);
  strokeWeight(8);
  point(0, 0);
  point(width, height);
  
  // Ecuación de la recta
  let pendiente = height/width;
  fill(0);
  noStroke();
  text("Ecuación: y = (" + pendiente.toFixed(3) + ")x", width/2, 50);
  text("Puntos: (0,0) → (" + width + "," + height + ")", width/2, 70);
  
  // Mostrar algunos puntos discretos de la recta
  stroke(0, 100, 255);
  strokeWeight(5);
  for (let x = 0; x <= width; x += 50) {
    let y = (height/width) * x;
    if (y <= height) {
      point(x, y);
    }
  }
}

// ============================================================
// FUNCIONES AUXILIARES
// ============================================================

function mostrarTitulo() {
  fill(50);
  noStroke();
  textSize(16);
  text("Capítulo 3: Sistema de Coordenadas", width/2, 20);
  textSize(14);
}

function mostrarInstrucciones() {
  fill(100);
  textSize(12);
  text("Presiona números 0-5 para cambiar de ejercicio", width/2, height-20);
  textSize(14);
}

// ============================================================
// INTERACCIÓN - Cambiar entre ejercicios
// ============================================================

function keyPressed() {
  if (key === '0') ejercicioActual = 0;
  if (key === '1') ejercicioActual = 1;
  if (key === '2') ejercicioActual = 2;
  if (key === '3') ejercicioActual = 3;
  if (key === '4') ejercicioActual = 4;
  if (key === '5') ejercicioActual = 5;
  
  // Mostrar qué ejercicio se está viendo
  console.log("Ejercicio " + ejercicioActual + " seleccionado");
}

