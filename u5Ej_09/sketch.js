/* let x, y;
let velocidad = 5;

function setup() {
  createCanvas(700, 500);
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(30);
  
  // Movimiento con teclado (flechas)
  if (keyIsDown(LEFT_ARROW)) {
    x -= velocidad;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x += velocidad;
  }
  if (keyIsDown(UP_ARROW)) {
    y -= velocidad;
  }
  if (keyIsDown(DOWN_ARROW)) {
    y += velocidad;
  }
  
  // Limitar bordes
  let radio = 30;
  x = constrain(x, radio, width - radio);
  y = constrain(y, radio, height - radio);
  
  // Dibujar figura
  fill(100, 200, 255);
  noStroke();
  circle(x, y, radio * 2);
  
  // Instrucciones
  fill(255);
  textSize(16);
  text("Usa las flechas para mover el círculo", 20, 40);
} */

/*
  function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(20);
  
  // Seguir al mouse
  let x = mouseX;
  let y = mouseY;
  
  // Tamaño dinámico según distancia al centro
  let distanciaAlCentro = dist(x, y, width / 2, height / 2);
  let tamanio = map(distanciaAlCentro, 0, 400, 30, 150);
  
  // Color dinámico según posición del mouse
  let r = map(mouseX, 0, width, 50, 255);
  let g = map(mouseY, 0, height, 50, 200);
  let b = 150;
  
  fill(r, g, b);
  noStroke();
  circle(x, y, tamanio);
  
  // Instrucciones
  fill(255);
  textSize(16);
  text("El círculo sigue al mouse", 20, 40);
  text("Tamaño y color cambian con la posición", 20, 65);
} */





  /*
  let jugador = { x: 400, y: 300, radio: 25 };
let objetos = [];
let puntuacion = 0;

function setup() {
  createCanvas(800, 600);
  // Crear objetos recolectables
  for (let i = 0; i < 10; i++) {
    objetos.push({
      x: random(50, width - 50),
      y: random(50, height - 50),
      radio: 12,
      activo: true
    });
  }
}

function draw() {
  background(30);
  
  // --- Movimiento con teclado (WASD o flechas) ---
  let velocidad = 5;
  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) { // A
    jugador.x -= velocidad;
  }
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) { // D
    jugador.x += velocidad;
  }
  if (keyIsDown(UP_ARROW) || keyIsDown(87)) { // W
    jugador.y -= velocidad;
  }
  if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) { // S
    jugador.y += velocidad;
  }
  
  // Limitar jugador a bordes
  jugador.x = constrain(jugador.x, jugador.radio, width - jugador.radio);
  jugador.y = constrain(jugador.y, jugador.radio, height - jugador.radio);
  
  // --- Animación: objetos orbitan o se mueven suavemente ---
  for (let i = 0; i < objetos.length; i++) {
    if (objetos[i].activo) {
      // Movimiento circular para darles animación
      let angulo = frameCount * 0.03 + i;
      let offsetX = sin(angulo) * 30;
      let offsetY = cos(angulo * 0.7) * 20;
      objetos[i].xBase = objetos[i].xBase || objetos[i].x;
      objetos[i].yBase = objetos[i].yBase || objetos[i].y;
      let xObj = objetos[i].xBase + offsetX;
      let yObj = objetos[i].yBase + offsetY;
      objetos[i].currentX = xObj;
      objetos[i].currentY = yObj;
      
      // Dibujar objeto
      fill(255, 200, 100);
      noStroke();
      circle(xObj, yObj, objetos[i].radio * 2);
      
      // --- Colisión con el jugador ---
      let d = dist(jugador.x, jugador.y, xObj, yObj);
      if (d < jugador.radio + objetos[i].radio) {
        objetos[i].activo = false;
        puntuacion++;
      }
    }
  }
  
  // --- Interacción con mouse: al hacer clic, cambia color del jugador ---
  if (mouseIsPressed) {
    fill(255, 100, 100);
  } else {
    fill(100, 200, 255);
  }
  
  // Dibujar jugador
  noStroke();
  circle(jugador.x, jugador.y, jugador.radio * 2);
  
  // Mostrar puntuación
  fill(255);
  textSize(20);
  text("Puntuación: " + puntuacion + " / " + objetos.length, 20, 40);
  
  // Instrucciones
  textSize(14);
  text("Movimiento: flechas o WASD", 20, 70);
  text("Clic sostenido: cambia color del jugador", 20, 90);
  
  // Reiniciar escena si se recolectaron todos
  if (puntuacion === objetos.length) {
    fill(255, 255, 0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("¡Ganaste!", width / 2, height / 2);
    textAlign(LEFT, BASELINE);
  }
}

// Opcional: clic para efectos adicionales
function mousePressed() {
  // Pequeña explosión de partículas (efecto visual)
  for (let i = 0; i < 10; i++) {
    fill(255, 200, 100);
    circle(mouseX + random(-10, 10), mouseY + random(-10, 10), random(3, 8));
  }
} */ 