// Nivel 1 - Comprensión básica
function setup() {
  createCanvas(600, 300);
}

function draw() {
  background(240);
  
  // 1. Tres círculos de diferentes colores
  // Rojo
  fill(255, 0, 0);
  circle(150, 150, 80);
  
  // Verde
  fill(0, 255, 0);
  circle(300, 150, 80);
  
  // Azul
  fill(0, 0, 255);
  circle(450, 150, 80);
  
  // 2. Cambiar grosor del borde
  strokeWeight(5);
  
  // 3. Figura sin relleno
  noFill();
  stroke(0, 0, 255);
  rect(200, 200, 200, 50);
}

// Nivel 2 - Razonamiento matemático
function setup() {
  createCanvas(400, 200);
  noStroke();
}

function draw() {
  // 4. Degradado usando un ciclo
  for (let i = 0; i < width; i++) {
    let intensidad = map(i, 0, width, 0, 255);
    fill(intensidad);
    rect(i, 0, 1, height);
  }
}

// Nivel 3 - Espacio de color
function setup() {
  createCanvas(400, 200);
  colorMode(HSB, 360, 100, 100);
  noStroke();
}

function draw() {
  // 5. Arco iris
  for (let i = 0; i < width; i++) {
    let hue = map(i, 0, width, 0, 360);
    fill(hue, 100, 100);
    rect(i, 0, 1, height);
  }
}