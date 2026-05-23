/*let historial = [];
let maxHistorial = 20;
let x, y;

function setup() {
  createCanvas(700, 500);
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(30);
  
  // Movimiento: seguir al mouse con suavizado
  x = lerp(x, mouseX, 0.05);
  y = lerp(y, mouseY, 0.05);
  
  // Guardar posición actual en el historial
  historial.push({ x: x, y: y });
  if (historial.length > maxHistorial) {
    historial.shift();
  }
  
  // Dibujar fantasmas (frames anteriores)
  for (let i = 0; i < historial.length; i++) {
    let alpha = map(i, 0, historial.length, 50, 255);
    fill(100, 200, 255, alpha);
    noStroke();
    circle(historial[i].x, historial[i].y, 40);
  }
  
  // Dibujar figura actual (más opaca y grande)
  fill(100, 200, 255, 255);
  circle(x, y, 50);
}*/

/*
let trail = [];
let maxTrail = 50;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  // Fondo con opacidad baja para crear estela desvaneciente
  background(0, 20);
  
  // Guardar posición actual del mouse
  trail.push({ x: mouseX, y: mouseY });
  if (trail.length > maxTrail) {
    trail.shift();
  }
  
  // Dibujar estela con tamaño y transparencia variables
  for (let i = 0; i < trail.length; i++) {
    let edad = i / trail.length; // 0 = más viejo, 1 = más nuevo
    let tamanio = map(edad, 0, 1, 10, 60);
    let alpha = map(edad, 0, 1, 50, 255);
    fill(255, 100, 150, alpha);
    noStroke();
    circle(trail[i].x, trail[i].y, tamanio);
  }
}*/

/*
let frames = [];
let numFrames = 15;
let angulo = 0;
let interpolar = true;
let t = 0;
let direccion = 0.01;

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(20);
  
  // Actualizar ángulo para movimiento circular continuo
  angulo += 0.02;
  let xActual = width / 2 + sin(angulo) * 250;
  let yActual = height / 2 + cos(angulo * 0.7) * 150;
  
  // Guardar frame actual
  frames.push({ x: xActual, y: yActual, frameActual: frameCount });
  if (frames.length > numFrames) {
    frames.shift();
  }
  
  // Mostrar onion skinning: frames anteriores con transparencia
  for (let i = 0; i < frames.length; i++) {
    let opacity = map(i, 0, frames.length, 30, 255);
    fill(100, 200, 255, opacity);
    noStroke();
    circle(frames[i].x, frames[i].y, 35);
  }
  
  // Interpolación de movimiento (mostrar frame intermedio entre el último y el penúltimo)
  if (interpolar && frames.length >= 2) {
    let ultimo = frames[frames.length - 1];
    let penultimo = frames[frames.length - 2];
    
    // t oscila para mostrar interpolación
    t += direccion;
    if (t > 1 || t < 0) direccion *= -1;
    
    let xInterp = lerp(penultimo.x, ultimo.x, t);
    let yInterp = lerp(penultimo.y, ultimo.y, t);
    
    fill(255, 100, 100, 200);
    circle(xInterp, yInterp, 45);
  }
  
  // Figura actual (más destacada)
  fill(255, 255, 0);
  circle(xActual, yActual, 50);
  
  // Instrucciones
  fill(255);
  textSize(14);
  text("Onion Skinning + Interpolación", 20, 30);
  text("Presiona 'I' para activar/desactivar interpolación", 20, 50);
}

function keyPressed() {
  if (key === 'i' || key === 'I') {
    interpolar = !interpolar;
  }
}  */ 



  