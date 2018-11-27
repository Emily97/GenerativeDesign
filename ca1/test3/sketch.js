var numberOfCircles = 10;
var circles = [];

var framesPerSecond = 40;

function setup() {
  createCanvas(1240,1748);
  colorMode(HSB, 360, 100, 100, 50);
  frameRate(framesPerSecond);
  ellipseMode(CENTER);
  noStroke();

  var centreX = width/2;
  var centreY = height/2;

  for (var i = 0; i < numberOfCircles; i++) {
    circles.push(new PerlinCircle(centreX, centreY, width/6, height/4, 360*i/numberOfCircles));
  }
}

function draw() {
  blendMode(BLEND);
  background(255);
  blendMode(DIFFERENCE);

  for (var i = 0; i < numberOfCircles; i++) {
    circles[i].render();
  }
}

//save png images to show steps
function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
