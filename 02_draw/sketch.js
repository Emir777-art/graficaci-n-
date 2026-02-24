let x = 200;
let y = 0;
let velocidadX = 3;
let velocidadY = 0;
let gravedad = 0.5;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(147, 0, 211);
    frameRate(30);
    
    // Pelota roja (con movimiento en X)
    fill(255, 0, 0);
    circle(x, 200, 40);
    
    // Pelota azul (con movimiento en Y)
    fill(0, 0, 255);
    circle(200, y, 40);
    
    // Aplicar gravedad a la pelota azul
    velocidadY += gravedad;
    
    // Mover ambas pelotas
    x += velocidadX;
    y += velocidadY;
    
    // Rebote en X (pelota roja)
    if (x > 380 || x < 20) {
        velocidadX = -velocidadX;
    }
    
    // Rebote en Y con pérdida de energía (pelota azul)
    if (y > 380) {
        y = 380; // Evitar que se hunda
        velocidadY = -velocidadY * 0.8; // Rebote con pérdida de energía
        
        // Detener rebotes muy pequeños
        if (Math.abs(velocidadY) < 1) {
            velocidadY = 0;
            y = 380;
        }
    }
    
    // Rebote en la parte superior
    if (y < 20) {
        y = 20;
        velocidadY = -velocidadY;
    }
}
