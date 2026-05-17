/* function setup() {
  createCanvas(600, 400, WEBGL);
}

function draw() {
  background(30);
  orbitControl();
  
  // Solo luz ambiental (intensidad 100)
  ambientLight(100);
  
  noStroke();
  fill(150, 100, 200);
  sphere(100);
} */ 

  /*
  function setup() {
  createCanvas(600, 400, WEBGL);
}

function draw() {
  background(30);
  orbitControl();
  
  // Luz ambiental baja + luz direccional desde (1,1,-1)
  ambientLight(30);
  directionalLight(255, 255, 255, 1, 1, -1);
  
  noStroke();
  fill(150, 100, 200);
  sphere(100);
} */

  function setup() {
  createCanvas(600, 400, WEBGL);
}

function draw() {
  background(30);
  orbitControl();
  
  // Luces necesarias para ver el especular
  ambientLight(40);
  directionalLight(255, 255, 255, 1, 1, -1);
  
  // Material especular (blanco brillante)
  specularMaterial(255);
  
  // Cambia shininess con el mouseX (valores entre 10 y 200)
  let brillo = map(mouseX, 0, width, 10, 200);
  shininess(brillo);
  
  sphere(100);
  
  // Mostrar el valor actual en pantalla (en 2D)
  push();
  resetMatrix();
  fill(255);
  textSize(16);
  text(`Shininess: ${int(brillo)}`, -width/2 + 20, -height/2 + 30);
  pop();
}