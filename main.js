let angle = 0;
function setup(){
    createCanvas(400, 300, WEBGL);
}

function draw(){
    background(175);

    rectMode(CENTER);
stroke(0);
fill(200, 0, 255);
//normalMaterial();
rotateY(angle*1);
rotateX(angle*0.3);
rotateZ(angle*1.2);
torus(100, 10);


rectMode(CENTER);
noStroke();
//fill(200, 0, 255);
normalMaterial();
rotateY(angle*1);
rotateX(angle*0.3);
rotateZ(angle*1.2);
torus(100, 10);

rectMode(CENTER);
ambientLight(255);
rotateY(angle*1);
rotateX(angle*0.3);
rotateZ(angle*1.2);
ambientMaterial(0, 0, 255);
torus(100, 10);

pointLight(0, 0, 255, mouseX-200, mouseY-0, 0);
rotateY(angle*1);
rotateX(angle*0.3);
rotateZ(angle*1.2);
ambientMaterial('orange');
sphere(100, 10);

angle += 0.03;
}

function next(){
    window.location = 'new.html'
}