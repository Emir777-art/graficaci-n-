/*let t = 0;
let direccion = 0.01;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(30);
  translate(width / 2, height / 2);
  
  t += direccion;
  if (t > 1 || t < 0) direccion *= -1;
  
  let numPuntos = 40;
  beginShape();
  for (let i = 0; i < numPuntos; i++) {
    let angulo = map(i, 0, numPuntos, 0, TWO_PI);
    
    // Punto del círculo (radio = 150)
    let cx = cos(angulo) * 150;
    let cy = sin(angulo) * 150;
    
    // Punto del cuadrado (radio variable según el ángulo)
    let rx = 150 / max(abs(cos(angulo)), abs(sin(angulo)));
    let sx = cos(angulo) * rx;
    let sy = sin(angulo) * rx;
    
    // Interpolación
    let x = lerp(cx, sx, t);
    let y = lerp(cy, sy, t);
    
    vertex(x, y);
  }
  endShape(CLOSE);
}*/ 


/*
let t = 0;
let direccion = 0.01;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  t += direccion;
  if (t > 1 || t < 0) direccion *= -1;
  
  // Interpolación de color: de azul (0,0,255) a rojo (255,0,0)
  let r = lerp(0, 255, t);
  let g = lerp(0, 0, t);
  let b = lerp(255, 0, t);
  
  background(20);
  fill(r, g, b);
  noStroke();
  
  translate(width / 2, height / 2);
  
  let numPuntos = 40;
  beginShape();
  for (let i = 0; i < numPuntos; i++) {
    let angulo = map(i, 0, numPuntos, 0, TWO_PI);
    
    let cx = cos(angulo) * 150;
    let cy = sin(angulo) * 150;
    
    let rx = 150 / max(abs(cos(angulo)), abs(sin(angulo)));
    let sx = cos(angulo) * rx;
    let sy = sin(angulo) * rx;
    
    let x = lerp(cx, sx, t);
    let y = lerp(cy, sy, t);
    
    vertex(x, y);
  }
  endShape(CLOSE);
} */

/*
let t = 0;
let direccion = 0.005;

function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(20);
  translate(width / 2, height / 2);
  
  t += direccion;
  if (t > 1 || t < 0) direccion *= -1;
  
  let numPuntos = 60;
  beginShape();
  for (let i = 0; i < numPuntos; i++) {
    let angulo = map(i, 0, numPuntos, 0, TWO_PI);
    
    // Figura A: estrella de 5 puntas
    let rEstrella = 180;
    let k = 5; // número de puntas
    let ra = rEstrella * cos(atan2(sin(k * angulo), cos(k * angulo))); // alternativa: radio variable
    // Mejor: radio estrella clásica
    let radioA = 360;
    let radioInterno = 180;
    let radioActual = (angulo % (TWO_PI / k) < PI / k) ? radioA : radioInterno;
    let ax = cos(angulo) * radioActual;
    let ay = sin(angulo) * radioActual;
    
    // Figura B: flor (pétalos suaves)
    let radioB = 180 + 60 * sin(angulo * 9);
    let bx = cos(angulo) * radioB;
    let by = sin(angulo) * radioB;
    
    // Interpolación
    let x = lerp(ax, bx, t);
    let y = lerp(ay, by, t);
    
    vertex(x, y);
  }
  endShape(CLOSE);
  
  // Información
  fill(255);
  textSize(16);
  text("Morphing: Estrella → Flor", -width/2 + 20, -height/2 + 30);
  text("t = " + nf(t, 1, 2), -width/2 + 20, -height/2 + 60);
}*/


