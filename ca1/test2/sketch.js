let particles = [];
let scl = 10;
let flowfield,cols, rows;
function setup() {
  createCanvas(1240,1748);
  colorMode(HSB, 255);
  background(0);
  angleMode(DEGREES);

  cols = floor(width / scl);
  rows = floor(height / scl);

  flowfield = new Array(cols * rows);

  // the number of vectors to be drawn on the canvas
  for (var i = 0; i < 1; i++) {
    particles[i] = new Particle();
  }
}

function draw() {
    let color = floor(random(0,255));
    let radius = 500;
    noLoop();
    strokeWeight(5);
    noFill();
    beginShape();
        let vertexAngle = floor(random(1, 150));
        console.log(vertexAngle);
        for(let a = 0; a <= 360; a += vertexAngle) {
            let x = radius * sin(a) + width/2;
            let y = radius * cos(a) + height/2;
            console.log(a);
            stroke(color, 255, 255);
            vertex(x,y);
        }
    endShape(CLOSE);

    // takes particles class functions
    for (var i = 0; i < particles.length; i++) {
      particles[i].follow(flowfield);
      particles[i].update();
      particles[i].edges();
      particles[i].show();
    }
}

//save png images to show steps
function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
