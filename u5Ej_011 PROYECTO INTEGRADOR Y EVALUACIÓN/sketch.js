// ============================================================
// PROYECTO INTEGRADOR - SUPER MARIO BROS (1985)
// Primeros 5 niveles (Mundo 1-1, 1-2, 1-3, 1-4, 2-1)
// ============================================================
// Controles:
// → (derecha)  - mover
// ← (izquierda) - mover
// ↑ o espacio  - saltar
// R            - reiniciar nivel
// N            - siguiente nivel (para pruebas)
// ============================================================

let nivelActual = 0;
let niveles = [];
let mario;
let bloques = [];
let enemigos = [];
let monedas = [];
let camX = 0;
let juegoActivo = true;
let tiempoInvencible = 0;
let puntuacion = 0;
let vidas = 3;
let tamañoBloque = 40;

// Configuración de niveles (ancho en bloques)
const nivelesData = [
  { // Nivel 0: Mundo 1-1
    ancho: 40,
    fondo: [135, 206, 235], // cielo
    suelo: [
      "########################################",
      "#                                      #",
      "#                                      #",
      "#                                      #",
      "#                                      #",
      "#         ?   ?                        #",
      "#                      ###             #",
      "#    ###                               #",
      "#                                      #",
      "########################################"
    ],
    enemigos: [[10, 7], [20, 7], [30, 7]],
    monedas: [[12, 5], [13, 5], [14, 5], [25, 5], [26, 5], [27, 5]]
  },
  { // Nivel 1: Mundo 1-2 (subterráneo)
    ancho: 50,
    fondo: [50, 50, 80], // oscuro
    suelo: [
      "##################################################",
      "#                                                #",
      "#                                                #",
      "#     ?         ?                               #",
      "#                    ####                       #",
      "#                                                #",
      "#   ####                                         #",
      "#                                                #",
      "#                                                #",
      "##################################################"
    ],
    enemigos: [[15, 7], [30, 7], [40, 7]],
    monedas: [[20, 4], [21, 4], [22, 4], [35, 5], [36, 5]]
  },
  { // Nivel 2: Mundo 1-3 (plataformas aéreas)
    ancho: 45,
    fondo: [135, 206, 235],
    suelo: [
      "#############################################",
      "#                                           #",
      "#     ###            ###                   #",
      "#                     ###                  #",
      "#                          ###              #",
      "#                                           #",
      "#    ###                                    #",
      "#                                           #",
      "#                                           #",
      "#############################################"
    ],
    enemigos: [[10, 6], [25, 5], [35, 6]],
    monedas: [[12, 4], [13, 4], [14, 4], [28, 4], [29, 4], [30, 4]]
  },
  { // Nivel 3: Mundo 1-4 (castillo con lava)
    ancho: 35,
    fondo: [80, 40, 40],
    suelo: [
      "###################################",
      "#                                 #",
      "#                                 #",
      "#    ?                            #",
      "#                                 #",
      "#                                 #",
      "#                                 #",
      "#                                 #",
      "#                                 #",
      "###################################"
    ],
    enemigos: [[10, 7], [20, 7], [28, 7]],
    monedas: [[15, 5], [16, 5], [17, 5], [30, 5]]
  },
  { // Nivel 4: Mundo 2-1 (desierto)
    ancho: 48,
    fondo: [255, 200, 100],
    suelo: [
      "################################################",
      "#                                              #",
      "#                                              #",
      "#       ?         ?                           #",
      "#                     ###                      #",
      "#                                              #",
      "#   ###                                        #",
      "#                                              #",
      "#                                              #",
      "################################################"
    ],
    enemigos: [[12, 7], [22, 7], [32, 7], [42, 7]],
    monedas: [[18, 5], [19, 5], [28, 5], [29, 5], [38, 5]]
  }
];

// Clase Mario
class Mario {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.ancho = 30;
    this.alto = 30;
    this.enSuelo = true;
    this.direccion = 1; // 1 derecha, -1 izquierda
    this.grande = false;
  }
  
  actualizar() {
    if (!juegoActivo) return;
    
    // Movimiento horizontal
    let aceleracion = 0;
    if (keyIsDown(RIGHT_ARROW)) {
      aceleracion = 0.5;
      this.direccion = 1;
    }
    if (keyIsDown(LEFT_ARROW)) {
      aceleracion = -0.5;
      this.direccion = -1;
    }
    this.vx = this.vx * 0.9 + aceleracion;
    this.vx = constrain(this.vx, -5, 5);
    this.x += this.vx;
    
    // Salto
    if ((keyIsDown(UP_ARROW) || keyIsDown(32)) && this.enSuelo) {
      this.vy = -10;
      this.enSuelo = false;
    }
    
    // Gravedad
    this.vy += 0.5;
    this.y += this.vy;
    
    // Colisión con el suelo (bloques)
    this.enSuelo = false;
    for (let bloque of bloques) {
      if (this.colisionConBloque(bloque)) {
        if (this.vy > 0 && this.y + this.alto - this.vy <= bloque.y) {
          this.y = bloque.y - this.alto;
          this.vy = 0;
          this.enSuelo = true;
        } else if (this.vy < 0 && this.y >= bloque.y + bloque.alto) {
          this.y = bloque.y + bloque.alto;
          this.vy = 0;
        } else if (this.vx > 0) {
          this.x = bloque.x - this.ancho;
        } else if (this.vx < 0) {
          this.x = bloque.x + bloque.ancho;
        }
      }
    }
    
    // Límites del nivel
    let limiteIzq = camX + 100;
    let limiteDer = camX + width - 100;
    if (this.x < limiteIzq && camX > 0) {
      this.x = limiteIzq;
    }
    if (this.x > limiteDer && camX < (niveles[nivelActual].ancho * tamañoBloque - width)) {
      this.x = limiteDer;
    }
    if (this.x < 0) this.x = 0;
    if (this.x > niveles[nivelActual].ancho * tamañoBloque - this.ancho) {
      // Fin del nivel
      cambiarNivel(1);
    }
    
    // Caída al vacío
    if (this.y > height) {
      perderVida();
    }
  }
  
  colisionConBloque(b) {
    return (this.x < b.x + b.ancho && this.x + this.ancho > b.x &&
            this.y < b.y + b.alto && this.y + this.alto > b.y);
  }
  
  dibujar() {
    push();
    translate(this.x + this.ancho/2, this.y + this.alto/2);
    if (this.direccion === -1) scale(-1, 1);
    fill(this.grande ? 255 : 255, 0, 0);
    rect(-this.ancho/2, -this.alto/2, this.ancho, this.alto);
    fill(0);
    ellipse(-this.ancho/4, -this.alto/4, 6, 6);
    ellipse(this.ancho/4, -this.alto/4, 6, 6);
    fill(139, 69, 19);
    rect(-this.ancho/2, this.alto/2 - 5, this.ancho, 10);
    pop();
  }
}

// Clase Bloque
class Bloque {
  constructor(x, y, tipo) {
    this.x = x;
    this.y = y;
    this.ancho = tamañoBloque;
    this.alto = tamañoBloque;
    this.tipo = tipo; // 'suelo', '?' , 'ladrillo'
    this.activo = true;
  }
  
  dibujar() {
    if (!this.activo) return;
    fill(150, 100, 50);
    if (this.tipo === '?') fill(255, 255, 0);
    if (this.tipo === 'ladrillo') fill(200, 100, 50);
    rect(this.x, this.y, this.ancho-1, this.alto-1);
  }
}

// Clase Enemigo (Goomba)
class Enemigo {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ancho = 30;
    this.alto = 30;
    this.vx = -0.8;
    this.vida = true;
  }
  
  actualizar() {
    if (!this.vida) return;
    this.x += this.vx;
    // Rebote simple en bordes
    if (this.x < 0 || this.x > niveles[nivelActual].ancho * tamañoBloque - this.ancho) {
      this.vx *= -1;
    }
    // Caída
    if (this.y < height - this.alto) this.y += 2;
  }
  
  dibujar() {
    if (!this.vida) return;
    fill(139, 69, 19);
    ellipse(this.x + this.ancho/2, this.y + this.alto/2, this.ancho, this.alto);
    fill(0);
    ellipse(this.x + this.ancho*0.3, this.y + this.alto*0.4, 5, 5);
    ellipse(this.x + this.ancho*0.7, this.y + this.alto*0.4, 5, 5);
    fill(0);
    ellipse(this.x + this.ancho/2, this.y + this.alto*0.7, 8, 5);
  }
  
  colisionConMario(mario) {
    return (this.x < mario.x + mario.ancho && this.x + this.ancho > mario.x &&
            this.y < mario.y + mario.alto && this.y + this.alto > mario.y);
  }
}

// Moneda
class Moneda {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ancho = 20;
    this.alto = 20;
    this.coleccionada = false;
  }
  
  dibujar() {
    if (this.coleccionada) return;
    fill(255, 215, 0);
    ellipse(this.x + this.ancho/2, this.y + this.alto/2, this.ancho, this.alto);
    fill(255, 100, 0);
    ellipse(this.x + this.ancho/2, this.y + this.alto/2, this.ancho*0.6, this.alto*0.6);
  }
}

// ============================================================
// FUNCIONES PRINCIPALES
// ============================================================

function setup() {
  createCanvas(800, 400);
  cargarNivel(nivelActual);
}

function cargarNivel(indice) {
  let datos = nivelesData[indice];
  bloques = [];
  enemigos = [];
  monedas = [];
  
  // Crear bloques a partir de la matriz de suelo
  for (let fila = 0; fila < datos.suelo.length; fila++) {
    let linea = datos.suelo[fila];
    for (let col = 0; col < linea.length; col++) {
      let caracter = linea[col];
      let x = col * tamañoBloque;
      let y = fila * tamañoBloque;
      if (caracter === '#') {
        bloques.push(new Bloque(x, y, 'suelo'));
      } else if (caracter === '?') {
        bloques.push(new Bloque(x, y, '?'));
      }
    }
  }
  
  // Agregar enemigos
  for (let e of datos.enemigos) {
    enemigos.push(new Enemigo(e[0] * tamañoBloque, e[1] * tamañoBloque));
  }
  
  // Agregar monedas
  for (let m of datos.monedas) {
    monedas.push(new Moneda(m[0] * tamañoBloque, m[1] * tamañoBloque));
  }
  
  // Crear Mario
  mario = new Mario(100, 300);
  camX = 0;
  juegoActivo = true;
}

function cambiarNivel(delta) {
  nivelActual += delta;
  if (nivelActual >= nivelesData.length) {
    // Ganaste
    textSize(40);
    fill(255, 255, 0);
    text("¡FELICIDADES! COMPLETASTE 5 MUNDOS", width/2, height/2);
    juegoActivo = false;
    return;
  }
  cargarNivel(nivelActual);
}

function perderVida() {
  vidas--;
  if (vidas <= 0) {
    textSize(40);
    fill(255, 0, 0);
    text("GAME OVER", width/2, height/2);
    juegoActivo = false;
  } else {
    // Reiniciar nivel
    cargarNivel(nivelActual);
  }
}

function draw() {
  if (!juegoActivo) {
    background(0);
    textAlign(CENTER);
    textSize(30);
    fill(255);
    text("Presiona R para reiniciar", width/2, height/2 + 50);
    return;
  }
  
  // Fondo según nivel
  let bg = nivelesData[nivelActual].fondo;
  background(bg[0], bg[1], bg[2]);
  
  // Actualizar cámara
  camX = constrain(mario.x + mario.ancho/2 - width/2, 0, niveles[nivelActual].ancho * tamañoBloque - width);
  translate(-camX, 0);
  
  // Dibujar bloques
  for (let bloque of bloques) bloque.dibujar();
  
  // Actualizar y dibujar monedas
  for (let i = monedas.length-1; i >= 0; i--) {
    let moneda = monedas[i];
    moneda.dibujar();
    if (!moneda.coleccionada && mario.x + mario.ancho > moneda.x && mario.x < moneda.x + moneda.ancho &&
        mario.y + mario.alto > moneda.y && mario.y < moneda.y + moneda.alto) {
      moneda.coleccionada = true;
      puntuacion += 100;
    }
  }
  
  // Actualizar y dibujar enemigos
  for (let i = enemigos.length-1; i >= 0; i--) {
    let e = enemigos[i];
    e.actualizar();
    e.dibujar();
    if (e.colisionConMario(mario)) {
      if (mario.vy > 0 && mario.y + mario.alto - mario.vy <= e.y + 10) {
        // Mario aplasta al enemigo
        enemigos.splice(i,1);
        mario.vy = -6;
        puntuacion += 200;
      } else {
        perderVida();
      }
    }
  }
  
  // Actualizar y dibujar Mario
  mario.actualizar();
  mario.dibujar();
  
  // Mostrar HUD
  resetMatrix();
  fill(255);
  textSize(20);
  text("Puntos: " + puntuacion, 10, 30);
  text("Vidas: " + vidas, 10, 60);
  text("Nivel: " + (nivelActual+1), 10, 90);
  
  // Indicador de fin de nivel
  let finX = niveles[nivelActual].ancho * tamañoBloque;
  fill(255, 0, 0);
  rect(finX - 40, height-80, 40, 80);
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    vidas = 3;
    puntuacion = 0;
    nivelActual = 0;
    cargarNivel(0);
  }
  if (key === 'n' || key === 'N') {
    cambiarNivel(1);
  }
}