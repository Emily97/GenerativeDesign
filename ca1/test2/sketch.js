function setup() {
  createCanvas(1240,1748);
  colorMode(HSB, 255);
  background(0);
  angleMode(DEGREES);
}

function draw() {
    let color = floor(random(0,255));
    let radius = 500;
    noLoop();
    stroke(color, 255, 255);
    strokeWeight(5);
    noFill();
    beginShape();
        let spacing = floor(random(1, 150));
        console.log(spacing);
        for(let a = 0; a < 360; a += spacing) {
            let x = radius * sin(a) + width/2;
            let y = radius * cos(a) + height/2;
            vertex(x,y);
        }
    endShape(CLOSE);
}

//save png images to show steps
function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
