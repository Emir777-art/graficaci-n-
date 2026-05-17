/*  function setup() {
  createCanvas(600, 400, WEBGL);
}

function draw() {
  background(30);
  orbitControl(); // permite mover la vista

  // Cubo rojo
  push();
  translate(-180, 0, 0);
  rotateY(frameCount * 0.01);
  fill(255, 50, 50);
  box(80);
  pop();

  // Esfera verde
  push();
  translate(0, 0, 0);
  rotateX(frameCount * 0.01);
  fill(50, 255, 50);
  sphere(70);
  pop();

  // Cilindro azul
  push();
  translate(180, 0, 0);
  rotateZ(frameCount * 0.01);
  fill(50, 50, 255);
  cylinder(50, 100);
  pop();
}  */


  
function setup() {
  createCanvas(500, 400);
  noLoop();
}

function draw() {
  for (let y = 0; y < height; y++) {
    let t = y / height;
    let r = lerp(255, 0, t);
    let g = lerp(0, 255, t);
    let b = lerp(0, 255, t);
    stroke(r, g, b);
    line(0, y, width, y);
  }

} 

  let textura;

function preload() {
  // Carga una imagen de prueba desde internet (o usa una local)
  textura = loadImage('img/memes.jpg');
}

function setup() {
  createCanvas(600, 400, WEBGL);
}

function draw() {
  background(30);
  orbitControl();          // permite explorar
  rotateY(frameCount * 0.01); // rotación automática

  texture(textura);        // aplica la textura
  box(150);                // cubo texturizado
}

