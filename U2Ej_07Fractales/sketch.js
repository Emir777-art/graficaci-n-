// VERSIÓN INTERACTIVA - Árbol con 3 ramas ajustables

let angulo1, angulo2, angulo3;
let factor = 0.6;
let profundidad = 6;

// Sliders
let sliderA1, sliderA2, sliderA3, sliderFactor, sliderProf;

function setup() {
  createCanvas(900, 600);
  
  // Crear sliders
  sliderA1 = createSlider(0, 90, 45);
  sliderA1.position(20, 70);
  sliderA1.style('width', '150px');
  
  sliderA2 = createSlider(0, 90, 15);
  sliderA2.position(20, 110);
  sliderA2.style('width', '150px');
  
  sliderA3 = createSlider(-90, 0, -45);
  sliderA3.position(20, 150);
  sliderA3.style('width', '150px');
  
  sliderFactor = createSlider(30, 80, 60);
  sliderFactor.position(20, 190);
  sliderFactor.style('width', '150px');
  
  sliderProf = createSlider(3, 8, 6);
  sliderProf.position(20, 230);
  sliderProf.style('width', '150px');
  
  textSize(14);
}

function draw() {
  background(240);
  
  // Leer valores
  angulo1 = radians(sliderA1.value());
  angulo2 = radians(sliderA2.value());
  angulo3 = radians(sliderA3.value());
  factor = sliderFactor.value() / 100;
  profundidad = sliderProf.value();
  
  // Dibujar árbol
  push();
  translate(width/2, height - 50);
  dibujarArbol(100, 0);
  pop();
  
  // Mostrar valores
  fill(0);
  text("Ángulo 1: " + sliderA1.value() + "°", 200, 85);
  text("Ángulo 2: " + sliderA2.value() + "°", 200, 125);
  text("Ángulo 3: " + sliderA3.value() + "°", 200, 165);
  text("Factor: " + nf(factor, 1, 2), 200, 205);
  text("Profundidad: " + profundidad, 200, 245);
  
  // Título
  textSize(18);
  text("🌳 ÁRBOL FRACTAL CON 3 RAMAS", 400, 40);
  textSize(14);
  
  // Mostrar crecimiento
  let total = (pow(3, profundidad + 1) - 1) / 2 - 1;
  text("Total de ramas: " + floor(total), 400, 70);
}

function dibujarArbol(longitud, nivel) {
  if (longitud < 3 || nivel > profundidad) return;
  
  // Color y grosor
  strokeWeight(map(longitud, 3, 100, 1, 8));
  let verde = map(nivel, 0, profundidad, 139, 34);
  stroke(34, verde, 34);
  
  // Dibujar rama
  line(0, 0, 0, -longitud);
  translate(0, -longitud);
  
  // Crear 3 ramas en el siguiente nivel
  push();
  rotate(angulo1);
  dibujarArbol(longitud * factor, nivel + 1);
  pop();
  
  push();
  rotate(angulo2);
  dibujarArbol(longitud * factor, nivel + 1);
  pop();
  
  push();
  rotate(angulo3);
  dibujarArbol(longitud * factor, nivel + 1);
  pop();
}