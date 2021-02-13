
let angle = 0;
function setup() {
  createCanvas(700, 700, WEBGL);
}

function draw() {
background(175);

rectMode(CENTER);
noStroke();
fill(0, 0, 255);
rotateY(angle);
rotateX(angle*0.3);
rotateZ(angle*1.2);
rect(0, 0, 100, 100);

rectMode(CENTER);
noStroke();
fill(0, 0, 255);
translate(0, 0, mouseX);
rotateY(angle);
rotateX(angle*0.003);
rotateZ(angle*0.001);
box(10, 100, 50)

rectMode(CENTER);
noStroke();
fill(0, 0, 255);
rotateY(angle*1);
rotateX(angle*0.3);
rotateZ(angle*1.2);
torus(100, 10);

angle += 0.07;
}
function before(){
  window.location = 'index.html'
}