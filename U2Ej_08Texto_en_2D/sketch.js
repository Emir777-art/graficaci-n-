/*   // DESAFÍO 1 - Texto rotando alrededor del centro

let angulo = 0;
let velocidadRotacion = 0.02;

function setup() {
  createCanvas(600, 400);
  textSize(32);
  textAlign(CENTER, CENTER);  // IMPORTANTE: Centrar el texto
  fill(50);
}

function draw() {
  background(240);
  
  // Incrementar ángulo para rotación continua
  angulo += velocidadRotacion;
  
  // Guardar estado
  push();
  
  // Mover al centro del canvas
  translate(width/2, height/2);
  
  // Aplicar rotación
  rotate(angulo);
  
  // Dibujar texto
  text("ROTACIÓN", 0, 0);
  
  // Restaurar estado
  pop();
  
  // Dibujar punto de referencia (centro)
  stroke(255, 0, 0);
  strokeWeight(4);
  point(width/2, height/2);
  
  // Información
  fill(0);
  textSize(14);
  text("DESAFÍO 1 - Texto rotando", 130, 30);
  text("Ángulo: " + nf(angulo, 1, 2) + " rad", 120, 50);
  text("Velocidad: " + velocidadRotacion + " rad/frame", 120, 70);
  
  // Respuesta a la pregunta
  fill(50);
  text("¿Dónde debe estar el origen?", 110, 110);
  text("✓ El origen debe estar en el CENTRO del texto", 130, 130);
  text("✓ Usamos textAlign(CENTER, CENTER)", 150, 150);
  text("✓ Y translate() al punto deseado", 170, 170);
}

function keyPressed() {
  // Control de velocidad con teclas
  if (keyCode == UP_ARROW) velocidadRotacion += 0.01;
  if (keyCode == DOWN_ARROW) velocidadRotacion -= 0.01;
  if (key == ' ') angulo = 0;  // Reiniciar
}  */



  



/*  // DESAFÍO 2 - Palabra interactiva
// Cada letra crece/encoge según distancia al mouse

let palabra = "INTERACTIVO";
let letras = [];
let tamanos = [];

function setup() {
  createCanvas(900, 400);
  textSize(40);
  textAlign(CENTER, CENTER);
  textFont('Arial');
  
  // Inicializar posiciones de las letras
  let separacion = 50;
  let inicioX = width/2 - (palabra.length * separacion)/2;
  
  for (let i = 0; i < palabra.length; i++) {
    letras.push({
      char: palabra.charAt(i),
      x: inicioX + i * separacion,
      y: height/2,
      baseSize: 40
    });
    tamanos.push(40);
  }
}

function draw() {
  background(240);
  
  // Dibujar cada letra
  for (let i = 0; i < letras.length; i++) {
    let l = letras[i];
    
    // Calcular distancia al mouse
    let d = dist(mouseX, mouseY, l.x, l.y);
    
    // Calcular tamaño basado en distancia
    // s = f(distancia) - función inversa
    let tamano = map(d, 0, 300, 80, 20);
    tamano = constrain(tamano, 20, 80);
    
    // Guardar para mostrar
    tamanos[i] = tamano;
    
    push();
    translate(l.x, l.y);
    
    // Color según cercanía
    let rojo = map(d, 0, 300, 255, 100);
    let azul = map(d, 0, 300, 100, 255);
    fill(rojo, 100, azul);
    
    // Aplicar escala
    scale(tamano / 40);  // 40 es el tamaño base
    
    // Dibujar letra
    text(l.char, 0, 0);
    pop();
  }
  
  // Información
  fill(0);
  textSize(14);
  text("DESAFÍO 2 - Palabra interactiva", 50, 30);
  text("Las letras cambian de tamaño según distancia al mouse", 250, 50);
  
  // Mostrar función
  fill(50);
  text("s = f(d) = map(d, 0, 300, 80, 20)", 80, 80);
  text("A menor distancia → mayor tamaño", 100, 100);
  
  // Dibujar líneas de conexión (opcional)
  stroke(200, 100, 100, 50);
  for (let i = 0; i < letras.length; i++) {
    line(mouseX, mouseY, letras[i].x, letras[i].y);
  }
  
  // Mostrar tamaños
  for (let i = 0; i < letras.length; i++) {
    fill(0);
    textSize(10);
    text(nf(tamanos[i], 1, 0) + "px", letras[i].x - 15, letras[i].y - 30);
  }
}

function mouseMoved() {
  // Redibujar continuamente
  redraw();
} */







  // DESAFÍO 3 - Palabra geométrica "ARTE"
// Construida con líneas, rectángulos y curvas Bézier

function setup() {
  createCanvas(900, 400);
  rectMode(CENTER);
  textSize(14);
  noFill();
}

function draw() {
  background(240);
  
  // Título
  fill(0);
  text("DESAFÍO 3 - Palabra 'ARTE' con primitivas geométricas", 20, 30);
  text("Líneas + Rectángulos + Curvas Bézier", 20, 50);
  
  // Dibujar la palabra completa
  push();
  translate(100, 200);
  
  // LETRA A (posición x=0)
  push();
  // Triángulo de la A
  stroke(255, 0, 0);
  strokeWeight(3);
  line(0, 0, 40, -80);     // Lado izquierdo
  line(40, -80, 80, 0);     // Lado derecho
  line(20, -40, 60, -40);   // Travesaño horizontal
  // Puntos decorativos
  strokeWeight(5);
  point(40, -80);  // Vértice superior
  pop();
  
  // LETRA R (posición x=120)
  push();
  translate(120, 0);
  stroke(0, 255, 0);
  strokeWeight(3);
  // Línea vertical
  line(0, 0, 0, -80);
  // Arco superior (curva Bézier)
  noFill();
  bezier(0, -80, 20, -80, 20, -40, 0, -40);
  // Diagonal
  line(0, -40, 20, 0);
  pop();
  
  // LETRA T (posición x=220)
  push();
  translate(220, 0);
  stroke(0, 0, 255);
  strokeWeight(3);
  // Línea vertical
  line(20, 0, 20, -80);
  // Línea horizontal superior
  line(0, -80, 40, -80);
  pop();
  
  // LETRA E (posición x=320)
  push();
  translate(320, 0);
  stroke(255, 255, 0);
  strokeWeight(3);
  // Línea vertical
  line(0, 0, 0, -80);
  // Líneas horizontales
  line(0, 0, 30, 0);       // Base
  line(0, -40, 25, -40);   // Media
  line(0, -80, 30, -80);   // Superior
  pop();
  
  pop();
  
  // Explicación de cada letra
  fill(0);
  text("A: Líneas (triángulo + travesaño)", 50, 300);
  text("R: Línea vertical + Bézier + diagonal", 50, 320);
  text("T: Línea vertical + horizontal", 50, 340);
  text("E: Línea vertical + 3 horizontales", 50, 360);
  
  // Mostrar estructura de la R con Bézier
  push();
  translate(550, 150);
  stroke(0, 255, 0, 100);
  strokeWeight(1);
  // Dibujar puntos de control de la Bézier de la R
  fill(0, 255, 0);
  circle(0, -80, 6);   // P0
  circle(20, -80, 6);  // P1
  circle(20, -40, 6);  // P2
  circle(0, -40, 6);   // P3
  noFill();
  bezier(0, -80, 20, -80, 20, -40, 0, -40);
  fill(0);
  text("P0", 5, -85);
  text("P1", 25, -85);
  text("P2", 25, -35);
  text("P3", 5, -35);
  pop();
}