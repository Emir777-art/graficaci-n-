/**
 * MÉTODOS NUMÉRICOS - Unidad 1
 * CAPÍTULO 4: Colores y Estilos en p5.js
 * 
 * Dr. Juan Gabriel Loaiza
 * Febrero 2026
 * 
 * EJERCICIOS PROGRESIVOS (4.9)
 * Nivel 1, 2 y 3 - Todos en un solo programa
 */

// ============================================================
// CONFIGURACIÓN INICIAL
// ============================================================

// Variable para controlar qué ejercicio se muestra
// 1-3: Nivel 1 | 4-5: Nivel 2 | 6: Nivel 3
let ejercicioActual = 1;

function setup() {
  createCanvas(600, 400);
  textSize(14);
  textAlign(CENTER, TOP);
  
  // Para el ejercicio 6, usaremos modo HSB
  if (ejercicioActual === 6) {
    colorMode(HSB, 360, 100, 100);
  }
}

function draw() {
  // Limpiar según el ejercicio
  if (ejercicioActual !== 4) { // El ejercicio 4 no usa background
    background(240);
  }
  
  mostrarTitulo();
  mostrarInstrucciones();
  
  // Seleccionar y ejecutar el ejercicio correspondiente
  if (ejercicioActual === 1) ejercicioNivel1_1();
  else if (ejercicioActual === 2) ejercicioNivel1_2();
  else if (ejercicioActual === 3) ejercicioNivel1_3();
  else if (ejercicioActual === 4) ejercicioNivel2_4();
  else if (ejercicioActual === 5) ejercicioNivel2_5();
  else if (ejercicioActual === 6) ejercicioNivel3_6();
}

// ============================================================
// NIVEL 1 — Comprensión básica
// ============================================================

/**
 * Ejercicio 1: Dibujar tres círculos de diferentes colores
 */
function ejercicioNivel1_1() {
  // Primer círculo - Rojo
  fill(255, 0, 0);
  stroke(0);
  strokeWeight(2);
  circle(150, 200, 100);
  
  // Segundo círculo - Verde
  fill(0, 255, 0);
  circle(300, 200, 100);
  
  // Tercer círculo - Azul
  fill(0, 0, 255);
  circle(450, 200, 100);
  
  // Etiquetas con valores RGB
  fill(0);
  noStroke();
  text("RGB(255,0,0)", 150, 270);
  text("RGB(0,255,0)", 300, 270);
  text("RGB(0,0,255)", 450, 270);
}

/**
 * Ejercicio 2: Cambiar el grosor del borde
 */
function ejercicioNivel1_2() {
  // Círculo 1 - Borde delgado
  fill(255, 200, 200);
  stroke(255, 0, 0);
  strokeWeight(1);
  circle(150, 200, 80);
  text("Grosor 1", 150, 270);
  
  // Círculo 2 - Borde medio
  strokeWeight(5);
  circle(300, 200, 80);
  text("Grosor 5", 300, 270);
  
  // Círculo 3 - Borde grueso
  strokeWeight(10);
  circle(450, 200, 80);
  text("Grosor 10", 450, 270);
}

/**
 * Ejercicio 3: Dibujar una figura sin relleno
 */
function ejercicioNivel1_3() {
  // Figura con relleno (izquierda)
  fill(100, 150, 200);
  stroke(0);
  strokeWeight(3);
  rect(100, 150, 120, 120);
  text("Con relleno", 160, 290);
  
  // Figura sin relleno (derecha)
  noFill();
  rect(380, 150, 120, 120);
  text("Sin relleno", 440, 290);
  
  // Triángulo sin relleno (abajo)
  triangle(280, 300, 320, 250, 360, 300);
  text("Triángulo sin relleno", 320, 340);
}

// ============================================================
// NIVEL 2 — Razonamiento matemático
// ============================================================

/**
 * Ejercicio 4: Crear un degradado usando un ciclo
 * Color(x) = (x/width) * 255
 * 
 * NOTA: Este ejercicio NO usa background() en draw
 * para que el degradado se acumule verticalmente
 */
function ejercicioNivel2_4() {
  strokeWeight(2);
  
  // Dibujar líneas verticales con degradado horizontal
  for (let x = 0; x < width; x += 2) {
    // El color depende de la posición x
    let rojo = (x / width) * 255;
    let verde = 100; // Valor fijo
    let azul = 255 - rojo; // Inverso del rojo
    
    stroke(rojo, verde, azul);
    line(x, 0, x, height);
  }
  
  // Explicación matemática
  fill(0);
  noStroke();
  text("Degradado: Color(R) = (x/width) × 255", width/2, 30);
  text("En x=0 → R=0 | En x=" + width + " → R=255", width/2, 50);
}

/**
 * Ejercicio 5: Crear un degradado vertical
 * (Variante del ejercicio 4)
 */
function ejercicioNivel2_5() {
  background(240);
  strokeWeight(2);
  
  // Dibujar líneas horizontales con degradado vertical
  for (let y = 0; y < height; y += 2) {
    // El color depende de la posición y
    let verde = (y / height) * 255;
    
    stroke(50, verde, 150);
    line(0, y, width, y);
  }
  
  // Agregar un círculo para mostrar contraste
  noStroke();
  fill(255, 100);
  circle(width/2, height/2, 100);
  
  // Explicación
  fill(0);
  text("Degradado vertical: Color(G) = (y/height) × 255", width/2, 30);
}

// ============================================================
// NIVEL 3 — Espacio de color
// ============================================================

/**
 * Ejercicio 6: Cambiar a HSB y crear un arco iris
 * colorMode(HSB);
 * stroke(i % 360, 100, 100);
 */
function ejercicioNivel3_6() {
  // Aseguramos modo HSB
  colorMode(HSB, 360, 100, 100);
  
  strokeWeight(3);
  
  // Dibujar líneas verticales con tono variable
  for (let i = 0; i < width; i += 2) {
    // El tono (Hue) varía de 0 a 360 a lo largo del ancho
    let hue = (i / width) * 360;
    stroke(hue, 100, 100);
    line(i, 0, i, height);
  }
  
  // Explicación del modelo HSB
  fill(0);
  noStroke();
  text("Modelo HSB (Hue, Saturation, Brightness)", width/2, 30);
  text("Hue = (x/width) × 360°", width/2, 50);
  text("Sat = 100% | Bri = 100%", width/2, 70);
  
  // Mostrar círculo cromático simplificado
  noFill();
  strokeWeight(3);
  let radio = 60;
  for (let ang = 0; ang < 360; ang += 30) {
    let hue = ang;
    stroke(hue, 100, 100);
    
    let x = width - 100 + radio * cos(radians(ang));
    let y = 100 + radio * sin(radians(ang));
    
    point(x, y);
    circle(x, y, 15);
  }
  
  // Texto explicativo del círculo
  fill(0);
  text("Círculo cromático", width-100, 170);
}

// ============================================================
// EJERCICIO EXTRA: Combinando todo
// ============================================================

/**
 * Ejercicio Extra (no numerado) - Demostración completa
 * Presiona 'E' para verlo
 */
function ejercicioExtra() {
  colorMode(RGB);
  background(50);
  
  // Fondo con degradado radial
  for (let r = 0; r < 200; r += 5) {
    let gris = map(r, 0, 200, 255, 0);
    noFill();
    stroke(gris);
    circle(width/2, height/2, r*2);
  }
  
  // Figuras con diferentes estilos
  strokeWeight(4);
  
  // Círculo con borde degradado
  for (let i = 0; i < 360; i += 10) {
    let hue = i;
    stroke(hue, 100, 100);
    let x = width/4 + 50 * cos(radians(i));
    let y = height/2 + 50 * sin(radians(i));
    line(width/4, height/2, x, y);
  }
  
  // Rectángulo con transparencia
  fill(255, 0, 0, 100);
  stroke(255, 255, 0);
  rect(width/2, height/3, 100, 80);
  
  // Texto
  fill(255);
  text("Demostración completa de colores y estilos", width/2, 30);
}

// ============================================================
// FUNCIONES AUXILIARES
// ============================================================

function mostrarTitulo() {
  fill(50);
  noStroke();
  textSize(16);
  
  let nivel = "";
  if (ejercicioActual <= 3) nivel = "Nivel 1 - Básico";
  else if (ejercicioActual <= 5) nivel = "Nivel 2 - Matemático";
  else nivel = "Nivel 3 - HSB";
  
  text("Capítulo 4: Colores y Estilos | " + nivel + " | Ej." + ejercicioActual, width/2, 20);
  textSize(14);
}

function mostrarInstrucciones() {
  fill(100);
  textSize(12);
  text("Presiona números 1-6 para cambiar ejercicio | 'E' para extra", width/2, height-20);
  textSize(14);
}

// ============================================================
// INTERACCIÓN - Cambiar entre ejercicios
// ============================================================

function keyPressed() {
  if (key === '1') {
    ejercicioActual = 1;
    colorMode(RGB);
  }
  if (key === '2') {
    ejercicioActual = 2;
    colorMode(RGB);
  }
  if (key === '3') {
    ejercicioActual = 3;
    colorMode(RGB);
  }
  if (key === '4') {
    ejercicioActual = 4;
    colorMode(RGB);
  }
  if (key === '5') {
    ejercicioActual = 5;
    colorMode(RGB);
  }
  if (key === '6') {
    ejercicioActual = 6;
    colorMode(HSB, 360, 100, 100);
  }
  if (key === 'E' || key === 'e') {
    ejercicioActual = 7; // Extra
    colorMode(HSB, 360, 100, 100);
  }
  
  // Para ejercicio 4, no queremos background en draw
  if (ejercicioActual !== 4) {
    background(240);
  }
  
  console.log("Ejercicio " + ejercicioActual + " seleccionado");
}

// ============================================================
// DESCRIPCIÓN DE LOS EJERCICIOS (4.9)
// ============================================================

/*
NIVEL 1 — Comprensión básica
────────────────────────────
Ejercicio 1: Tres círculos de colores (rojo, verde, azul)
Ejercicio 2: Mismo color con diferentes grosores de borde (1, 5, 10)
Ejercicio 3: Figura con relleno vs sin relleno

NIVEL 2 — Razonamiento matemático
────────────────────────────────
Ejercicio 4: Degradado horizontal usando la fórmula Color(x) = (x/width) * 255
Ejercicio 5: Degradado vertical (variante)

NIVEL 3 — Espacio de color
─────────────────────────
Ejercicio 6: Arco iris usando modelo HSB
            stroke(i % 360, 100, 100) con i variando en x

EXTRA: Demostración completa combinando todos los conceptos
*/