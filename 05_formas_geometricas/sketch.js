/*
 * CAPÍTULO 5: Figuras Geométricas en p5.js
 * Conceptos cubiertos:
 * - Líneas (line)
 * - Rectángulos (rect) y cuadrados (square)
 * - Círculos (circle) y elipses (ellipse)
 * - Triángulos (triangle)
 * - Cuadriláteros (quad)
 * - Arcos (arc)
 * - Modos de interpretación (rectMode, ellipseMode)
 * 
 */

function setup() {
  createCanvas(1200, 800); // Canvas más grande: 1200x800
}

function draw() {
  background(240);
  
  // Título visual
  fill(0);
  noStroke();
  textSize(20);
  text("CAPÍTULO 5: Figuras Geométricas en p5.js", 20, 30);
  textSize(14);
  text("Canvas: 1200 x 800 píxeles", 20, 50);
  
  // ===========================================
  // SECCIÓN 1: Líneas (line)
  // ===========================================
  stroke(0);
  strokeWeight(2);
  
  // Línea horizontal
  line(50, 120, 250, 120);
  
  // Línea vertical
  line(150, 80, 150, 160);
  
  // Línea diagonal con pendiente
  line(50, 200, 250, 140);
  
  // Texto explicativo
  fill(0);
  noStroke();
  text("line(): P1 → P2", 50, 240);
  
  // ===========================================
  // SECCIÓN 2: Rectángulos (rect) y cuadrados (square)
  // ===========================================
  // Rectángulo modo CORNER (default)
  fill(200, 100, 100, 150); // Rojo semitransparente
  stroke(100, 0, 0);
  strokeWeight(2);
  rect(300, 80, 180, 100);
  
  // Cuadrado
  fill(100, 200, 100, 150); // Verde semitransparente
  square(500, 80, 100);
  
  // Rectángulo modo CENTER
  rectMode(CENTER);
  fill(100, 100, 200, 150); // Azul semitransparente
  rect(700, 130, 150, 80);
  rectMode(CORNER); // Restauramos modo por defecto
  
  // Texto
  fill(0);
  noStroke();
  text("rect() y square()", 300, 220);
  
  // ===========================================
  // SECCIÓN 3: Círculos (circle) y elipses (ellipse)
  // ===========================================
  // Círculo
  fill(255, 200, 0, 180);
  stroke(150, 100, 0);
  circle(100, 350, 80);
  
  // Elipse (horizontal - ancha)
  fill(200, 0, 255, 150);
  ellipse(250, 350, 130, 60);
  
  // Elipse (vertical - alta)
  fill(0, 200, 255, 150);
  ellipse(400, 350, 60, 130);
  
  // Elipse modo CORNER
  ellipseMode(CORNER);
  fill(255, 150, 0, 150);
  ellipse(500, 300, 100, 130);
  ellipseMode(CENTER); // Restauramos
  
  text("circle() y ellipse()", 50, 430);
  
  // ===========================================
  // SECCIÓN 4: Triángulos (triangle)
  // ===========================================
  // Triángulo rectángulo
  fill(150, 0, 150, 180);
  triangle(50, 500, 180, 500, 50, 620);
  
  // Triángulo isósceles
  fill(0, 150, 150, 180);
  triangle(280, 500, 430, 500, 355, 380);
  
  // Triángulo equilátero (aproximado)
  fill(150, 150, 0, 180);
  triangle(500, 500, 650, 500, 575, 370);
  
  text("triangle()", 50, 670);
  
  // ===========================================
  // SECCIÓN 5: Cuadriláteros (quad)
  // ===========================================
  // Trapecio
  fill(100, 150, 200, 180);
  quad(750, 450, 950, 450, 880, 570, 820, 570);
  
  // Romboide
  fill(200, 150, 100, 180);
  quad(720, 620, 920, 620, 990, 720, 790, 720);
  
  text("quad()", 820, 760);
  
  // ===========================================
  // SECCIÓN 6: Arcos (arc)
  // ===========================================
  // Arco de 0 a PI (semicírculo superior)
  fill(255, 100, 100, 150);
  arc(150, 700, 120, 120, 0, PI);
  
  // Arco de PI a TWO_PI (semicírculo inferior)
  fill(100, 255, 100, 150);
  arc(330, 700, 120, 120, PI, TWO_PI);
  
  // Arco de 0 a HALF_PI (cuarto de círculo)
  fill(100, 100, 255, 150);
  arc(510, 700, 120, 120, 0, HALF_PI);
  
  // Arco como parte de una elipse
  fill(255, 255, 100, 150);
  arc(690, 700, 180, 100, 0, PI + HALF_PI);
  
  text("arc() y ángulos", 150, 780);
  
  // ===========================================
  // EJEMPLO INTEGRADOR: Casa (esquina superior izquierda)
  // ===========================================
  push(); // Aislamos estilos
  
  // Base
  fill(200, 150, 100);
  stroke(100, 75, 50);
  strokeWeight(2);
  rect(900, 80, 250, 180);
  
  // Techo
  fill(150, 50, 50);
  triangle(900, 80, 1025, -20, 1150, 80);
  
  // Puerta
  fill(100, 50, 20);
  rect(1000, 160, 50, 100);
  
  // Ventana
  fill(200, 220, 255);
  square(930, 120, 40);
  
  // Sol
  fill(255, 200, 0);
  noStroke();
  circle(1100, 30, 60);
  
  pop(); // Restauramos estilos
  
  // Título de la casa
  fill(0);
  text("Ejemplo: Casa", 900, 280);
  
  // ===========================================
  // EJEMPLO: Círculos concéntricos (objetivo)
  // ===========================================
  push();
  translate(1050, 350); // Movemos el origen
  
  noFill();
  strokeWeight(2);
  stroke(0);
  circle(0, 0, 120);
  circle(0, 0, 90);
  circle(0, 0, 60);
  circle(0, 0, 30);
  
  fill(255, 0, 0);
  noStroke();
  circle(0, 0, 15);
  
  pop();
  
  text("Objetivo (círculos concéntricos)", 970, 310);
  
  // ===========================================
  // SECCIÓN ADICIONAL: Polígono regular (trigonometría)
  // ===========================================
  push();
  
  let cx = 1050;
  let cy = 550;
  let r = 100;
  let n = 6; // Hexágono
  
  fill(200, 100, 200, 150);
  stroke(100, 0, 100);
  strokeWeight(2);
  
  beginShape();
  for (let i = 0; i < n; i++) {
    let ang = TWO_PI * i / n;
    let x = cx + r * cos(ang);
    let y = cy + r * sin(ang);
    vertex(x, y);
  }
  endShape(CLOSE);
  
  // Puntos en el círculo (mostrar la trigonometría)
  stroke(255, 0, 0);
  strokeWeight(4);
  for (let i = 0; i < n; i++) {
    let ang = TWO_PI * i / n;
    let x = cx + r * cos(ang);
    let y = cy + r * sin(ang);
    point(x, y);
  }
  
  pop();
  
  text("Polígono regular (trigonometría):", 970, 470);
  text("x = cx + r·cos(θ), y = cy + r·sin(θ)", 970, 490);
  
 
}