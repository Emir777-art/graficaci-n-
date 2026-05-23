/*let t = 0;
let direccion = 0.01;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(30);
  
  // t oscila entre 0 y 1 de forma continua
  t += direccion;
  if (t > 1 || t < 0) {
    direccion *= -1;
  }
  
  // Posición interpolada entre x=100 y x=500
  let x = lerp(100, 500, t);
  
  fill(100, 200, 255);
  circle(x, height / 2, 60);
}*/
/*
let t = 0;
let direccion = 0.01;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  t += direccion;
  if (t > 1 || t < 0) direccion *= -1;
  
  // Interpolar entre rojo (255,0,0) y azul (0,0,255)
  let r = lerp(255, 0, t);
  let g = lerp(0, 0, t);
  let b = lerp(0, 255, t);
  
  background(30);
  fill(r, g, b);
  circle(width / 2, height / 2, 200);
}*/
/*
let t = 0;
let direccion = 0.01;

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(20);
  
  t += direccion;
  if (t > 1 || t < 0) direccion *= -1;
  
  // Posición: de (100, 100) a (700, 400)
  let x = lerp(100, 700, t);
  let y = lerp(100, 400, t);
  
  // Tamaño: de 50 a 200
  let tamanio = lerp(50, 200, t);
  
  // Color: de rojo a verde
  let r = lerp(255, 0, t);
  let g = lerp(0, 255, t);
  let b = lerp(0, 0, t);
  
  // Rotación: de 0 a TWO_PI
  let rotacion = lerp(0, TWO_PI, t);
  
  push();
  translate(x, y);
  rotate(rotacion);
  fill(r, g, b);
  noStroke();
  rectMode(CENTER);
  rect(0, 0, tamanio, tamanio);
  pop();
} */