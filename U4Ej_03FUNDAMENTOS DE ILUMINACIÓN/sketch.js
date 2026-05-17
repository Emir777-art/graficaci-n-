/*function setup() {
  createCanvas(600, 400, WEBGL);
}

function draw() {
  background(30);
  orbitControl();               // permite mover la cámara
  ambientLight(190);            // solo luz ambiental (intensidad 190)
  noStroke();
  fill(200, 100, 100);          // color base del objeto
  sphere(100);
} */

  /*
  function setup() {
  createCanvas(600, 400, WEBGL);
}

function draw() {
  background(30);
  orbitControl();
  
  // Luz ambiental suave + luz direccional
  ambientLight(40);
  directionalLight(255, 255, 255, 1, 1, -1); // dirección (x,y,z) = (1,1,-1)
  
  noStroke();
  fill(100, 180, 240);
  sphere(100);
}  */

  /*
  function setup() {
  createCanvas(600, 400, WEBGL);
}

function draw() {
  background(30);
  orbitControl();               // permite mover la vista
  
  // Luz ambiental suave como base
  ambientLight(30);
  
  // Luz puntual que sigue al mouse
  // Se resta width/2 y height/2 porque WEBGL centra el origen
  pointLight(255, 255, 255, mouseX - width/2, mouseY - height/2, 200);
  
  noStroke();
  fill(150, 200, 100);
  sphere(100);
} */