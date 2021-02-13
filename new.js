let angle = 0;
function setup(){
    createCanvas(400, 300, WEBGL);
}

function draw(){
 dx = mouseX - width / 2;
dy = mouseY - height / 2;
 v = createVector(dx, dy, 0);
    v.div(100);

    directionalLight(255, 255, 0, v);
    //pointLight(255, 0, 0,100, 200, 300);

    background(175);

    rotateX(angle);
    rotateY(angle*0.3);
    rotateZ(angle*1.2);

    noStroke();
    ambientMaterial(255);
    //fill(255, 0, 0)
    torus(100, 25);

    angle += 0.03;
}

function before(){
    window.location = 'index.html'
}

function next(){
    window.location = 'ok.html'
}