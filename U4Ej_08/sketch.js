/**
 * Proyecto Integrador - Unidad 4
 * Escena 3D interactiva con iluminación, materiales y sombreado
 * 
 * CONTROLES:
 * - Arrastrar mouse: orbitar cámara
 * - Tecla L: activar/desactivar luz puntual siguiendo al mouse
 * - Tecla C: cambiar color de fondo
 * - Tecla 1: cambiar material de la esfera (specular / ambient)
 * - Tecla 2: cambiar material del cubo (ambient / fill)
 * - Tecla 3: cambiar material del toroide (normal / fill)
 */

let luzSigueMouse = true;     // ¿La luz puntual sigue al mouse?
let colorFondo = 20;          // Fondo inicial
let modoEsfera = 0;           // 0 = specular, 1 = ambient
let modoCubo = 0;             // 0 = ambient, 1 = fill
let modoToroide = 0;          // 0 = normal, 1 = fill

// Ángulos de rotación independientes
let angEsfera = 0;
let angCubo = 0;
let angToro = 0;
let angCilindro = 0;

function setup() {
  createCanvas(800, 500, WEBGL);
  // Mejora la calidad visual
  setAttributes('antialias', true);
}

function draw() {
  background(colorFondo);
  
  // --- Cámara interactiva ---
  orbitControl(1, 1, 0.5);
  
  // --- ILUMINACIÓN ---
  // Luz ambiental (constante, sin dirección)
  ambientLight(60);
  
  // Luz direccional (simula el sol)
  directionalLight(255, 255, 255, 1, 1, -1);
  
  // Luz puntual (sigue al mouse si está activa)
  if (luzSigueMouse) {
    let luzX = mouseX - width / 2;
    let luzY = mouseY - height / 2;
    pointLight(255, 200, 150, luzX, luzY, 200);
  } else {
    pointLight(255, 200, 150, 0, -150, 250);
  }
  
  // --- OBJETOS 3D con diferentes materiales y animación ---
  
  // 1. Esfera (derecha)
  push();
  translate(-220, 0, 0);
  rotateY(angEsfera);
  rotateX(angEsfera * 0.5);
  if (modoEsfera === 0) {
    specularMaterial(200, 100, 100); // rojo brillante
    shininess(60);
  } else {
    ambientMaterial(200, 100, 100);  // rojo mate
  }
  sphere(80);
  pop();
  
  // 2. Cubo (centro)
  push();
  translate(0, 0, 0);
  rotateY(angCubo);
  rotateX(angCubo * 0.3);
  if (modoCubo === 0) {
    ambientMaterial(0, 150, 200);    // azul mate
  } else {
    fill(0, 150, 200);               // azul sólido (sin efecto de luz)
  }
  box(110);
  pop();
  
  // 3. Toroide (izquierda)
  push();
  translate(220, 0, 0);
  rotateY(angToro);
  rotateZ(angToro * 0.7);
  if (modoToroide === 0) {
    normalMaterial();                // colorea según normales
  } else {
    fill(100, 200, 100);             // verde sólido
  }
  torus(70, 25);
  pop();
  
  // 4. Cilindro (abajo, como base decorativa)
  push();
  translate(0, -160, 0);
  rotateX(HALF_PI);
  rotateZ(angCilindro * 0.5);
  fill(150, 100, 200);               // morado sólido con color fill()
  cylinder(60, 90);
  pop();
  
  // Actualizar ángulos de animación
  angEsfera += 0.012;
  angCubo += 0.008;
  angToro += 0.01;
  angCilindro += 0.006;
  
  // --- TEXTO EN PANTALLA (instrucciones) ---
  push();
  resetMatrix();      // salir del modo 3D para dibujar texto en 2D
  camera();           // restaurar proyección ortográfica
  fill(255);
  noStroke();
  textSize(16);
  text("PROYECTO INTEGRADOR - UNIDAD 4", 20, 30);
  textSize(12);
  text("Mouse arrastrar: orbitar cámara", 20, 55);
  text("Tecla L: luz puntual sigue al mouse = " + (luzSigueMouse ? "ACTIVA" : "FIJA"), 20, 75);
  text("Tecla C: cambiar fondo", 20, 95);
  text("Tecla 1: esfera (specular/ambient)", 20, 115);
  text("Tecla 2: cubo (ambient/fill)", 20, 135);
  text("Tecla 3: toroide (normal/fill)", 20, 155);
  pop();
}

// --- INTERACCIÓN POR TECLADO ---
function keyPressed() {
  // Tecla L: activar/desactivar luz siguiendo al mouse
  if (key === 'L' || key === 'l') {
    luzSigueMouse = !luzSigueMouse;
  }
  // Tecla C: cambiar color de fondo (ciclo de 4 colores)
  if (key === 'C' || key === 'c') {
    if (colorFondo === 20) colorFondo = 10;
    else if (colorFondo === 10) colorFondo = 30;
    else if (colorFondo === 30) colorFondo = 15;
    else colorFondo = 20;
  }
  // Tecla 1: cambiar material de la esfera
  if (key === '1') {
    modoEsfera = (modoEsfera + 1) % 2;
  }
  // Tecla 2: cambiar material del cubo
  if (key === '2') {
    modoCubo = (modoCubo + 1) % 2;
  }
  // Tecla 3: cambiar material del toroide
  if (key === '3') {
    modoToroide = (modoToroide + 1) % 2;
  }
}