function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220)
  noFill();
  
  fill(0,255,0);
  rect(0,0, width/3, height);
  fill(255,255,255);
  rect(width/3,0, width/3, height);
  fill(255,0,0);
  rect(width*2/3,0, width/3, height);
  fill(125,80,25);
  circle(width/2, height/2, 100);


}