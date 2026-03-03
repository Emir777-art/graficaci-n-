let figuras = []; 

function setup() {
  createCanvas(600, 400);
  figuras = [];
}

function draw() {
  background(240);
  for (let fig of figuras) {
    fill(fig.color);
    if (fig.tipo === 'circulo') {
      circle(fig.x, fig.y, fig.tamano);
    } else if (fig.tipo === 'rectangulo') {
      rect(fig.x, fig.y, fig.tamano, fig.tamano);
    }
  }
}

function mousePressed() {
  // Guardamos no solo la posición, sino también un color y tipo aleatorios
  let nuevaFigura = {
    x: mouseX,
    y: mouseY,
    tipo: random(['circulo', 'rectangulo']),
    color: color(random(255), random(255), random(255)),
    tamano: random(20, 50)
  };
  figuras.push(nuevaFigura);
}