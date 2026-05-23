/*let particulas = [];

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(20);
  
  // Crear nuevas partículas en la posición del mouse
  for (let i = 0; i < 3; i++) {
    particulas.push({
      x: mouseX + random(-5, 5),
      y: mouseY + random(-5, 5),
      vx: random(-2, 2),
      vy: random(-2, 2),
      vida: 255,
      tamanio: random(5, 15)
    });
  }
  
  // Actualizar y dibujar partículas
  for (let i = particulas.length - 1; i >= 0; i--) {
    let p = particulas[i];
    p.x += p.vx;
    p.y += p.vy;
    p.vida -= 3;
    p.tamanio *= 1 - 0.02; // Reducir tamaño con el tiempo
    
    fill(255, 100, 150, p.vida);
    noStroke();
    circle(p.x, p.y, p.tamanio);
    
    if (p.vida <= 0 || p.tamanio < 1) {
      particulas.splice(i, 1);
    }
  }
  
  // Mostrar cantidad
  fill(255);
  textSize(16);
  text("Partículas: " + particulas.length, 20, 30);
}*/ 

/*
let agentes = [];
let numAgentes = 50;

function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < numAgentes; i++) {
    agentes.push({
      x: random(width),
      y: random(height),
      vx: random(-2, 2),
      vy: random(-2, 2),
      tamanio: random(5, 12)
    });
  }
}

function draw() {
  background(30);
  
  for (let a of agentes) {
    // Movimiento
    a.x += a.vx;
    a.y += a.vy;
    
    // Rebote en bordes
    if (a.x < 0 || a.x > width) a.vx *= -1;
    if (a.y < 0 || a.y > height) a.vy *= -1;
    
    // Dibujar
    fill(100, 200, 255);
    noStroke();
    circle(a.x, a.y, a.tamanio);
  }
} */



  /*
let boids = [];
let numBoids = 40;

function setup() {
  createCanvas(900, 600);
  for (let i = 0; i < numBoids; i++) {
    boids.push({
      pos: createVector(random(width), random(height)),
      vel: p5.Vector.random2D().mult(random(1, 3)),
      tamanio: 6
    });
  }
}

function draw() {
  background(20);
  
  for (let b of boids) {
    let separacion = separar(b, boids, 40);
    let alineacion = alinear(b, boids, 60);
    let cohesion = cohesionar(b, boids, 60);
    
    separacion.mult(1.2);
    alineacion.mult(0.8);
    cohesion.mult(0.6);
    
    b.vel.add(separacion);
    b.vel.add(alineacion);
    b.vel.add(cohesion);
    
    // Limitar velocidad
    b.vel.limit(4);
    b.pos.add(b.vel);
    
    // Bordes (teletransporte)
    if (b.pos.x < 0) b.pos.x = width;
    if (b.pos.x > width) b.pos.x = 0;
    if (b.pos.y < 0) b.pos.y = height;
    if (b.pos.y > height) b.pos.y = 0;
    
    // Dibujar boid
    fill(255, 150, 100);
    noStroke();
    circle(b.pos.x, b.pos.y, b.tamanio);
    
    // Dibujar dirección (opcional)
    push();
    translate(b.pos.x, b.pos.y);
    rotate(b.vel.heading());
    stroke(255, 200, 100);
    line(0, 0, b.tamanio * 1.5, 0);
    pop();
  }
}

// Separación: evitar vecinos cercanos
function separar(b, lista, distanciaMin) {
  let steer = createVector(0, 0);
  let count = 0;
  for (let otro of lista) {
    let d = p5.Vector.dist(b.pos, otro.pos);
    if (otro !== b && d < distanciaMin) {
      let diff = p5.Vector.sub(b.pos, otro.pos);
      diff.div(d);
      steer.add(diff);
      count++;
    }
  }
  if (count > 0) {
    steer.div(count);
    steer.setMag(1.5);
    steer.sub(b.vel);
    steer.limit(0.5);
  }
  return steer;
}

// Alineación: igualar dirección con vecinos
function alinear(b, lista, radio) {
  let steer = createVector(0, 0);
  let count = 0;
  for (let otro of lista) {
    let d = p5.Vector.dist(b.pos, otro.pos);
    if (otro !== b && d < radio) {
      steer.add(otro.vel);
      count++;
    }
  }
  if (count > 0) {
    steer.div(count);
    steer.setMag(1.5);
    steer.sub(b.vel);
    steer.limit(0.3);
  }
  return steer;
}

// Cohesión: moverse hacia el centro del grupo
function cohesionar(b, lista, radio) {
  let steer = createVector(0, 0);
  let count = 0;
  for (let otro of lista) {
    let d = p5.Vector.dist(b.pos, otro.pos);
    if (otro !== b && d < radio) {
      steer.add(otro.pos);
      count++;
    }
  }
  if (count > 0) {
    steer.div(count);
    steer.sub(b.pos);
    steer.setMag(1);
    steer.sub(b.vel);
    steer.limit(0.2);
  }
  return steer;
}  */


  