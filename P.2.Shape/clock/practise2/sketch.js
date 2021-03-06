function setup() {
  createCanvas(450, 450);
  background(255);
}
function draw() {
  strokeWeight(2);
  translate(width/2, height/2);

  // Drawing the background inside the draw function is necessary
  // to refresh the background so that the hands appear to move
  // on the clock and the previous hands disappear.
  background(255);

  var radius = int(min(width, height) / 2);
  var numPoints = 60;
  var angle = TWO_PI/numPoints;

  var secondsRadius = radius * 0.72;
  var minutesRadius = radius * 0.60;
  var hoursRadius = radius * 0.50;
  var clockDiameter = radius * 1.8;

  // Draw the clock background
  fill(80);
  noStroke();
  ellipse(0, 0, clockDiameter, clockDiameter);
  // subtract HALF_PI to make them start at the top
  var s = 0;
  var m = 240 - HALF_PI;
  var h = 180 - HALF_PI;
  //Draw the minute/second ticks
  // beginShape() will build the points into a single custom shape
  strokeWeight(2);
  stroke(255);
  push();
  beginShape(POINTS);
  var i = 0;
  while (i < numPoints ) {
      x = cos(angle*i) * secondsRadius;
      y = sin(angle*i) * secondsRadius;
      vertex(x, y);
      i++;
  }
  endShape();
  pop();
  strokeWeight(1);
  line(0, 0, cos(s) * secondsRadius, sin(s) * secondsRadius);
  strokeWeight(2);
  line(0, 0, cos(m) * minutesRadius, sin(m) * minutesRadius);
  strokeWeight(4);  // hour hand should be thicker
  line(0, 0, cos(h) * hoursRadius, sin(h) * hoursRadius);

  // Write the numerals
  fill(255);
  textSize(16);
  strokeWeight(0.1);
  x = cos(PI + HALF_PI) * secondsRadius - 10;
  y = sin(PI + HALF_PI) * secondsRadius - 10;
  text("XII", x, y);

  x = cos(TWO_PI - PI/3) * secondsRadius + 5;
  y = sin(TWO_PI - PI/3) * secondsRadius -15;
  text("I", x, y);

  x = cos(TWO_PI - PI/6.5) * secondsRadius + 5;
  y = sin(TWO_PI - PI/6.5) * secondsRadius -15;
  text("II", x, y);

  x = cos(TWO_PI) * secondsRadius + 10;
  y = sin(TWO_PI) * secondsRadius + 5;
  text("III", x, y);

  x = cos(TWO_PI + PI/6.5) * secondsRadius + 5;
  y = sin(TWO_PI + PI/6.5) * secondsRadius + 25;
  text("IV", x, y);

  x = cos(TWO_PI + PI/3) * secondsRadius + 5;
  y = sin(TWO_PI + PI/3) * secondsRadius + 20;
  text("V", x, y);

  x = cos(HALF_PI) * secondsRadius - 7;
  y = sin(HALF_PI) * secondsRadius + 20;
  text("VI", x, y);

  x = cos(HALF_PI + PI/5) * secondsRadius - 10;
  y = sin(HALF_PI + PI/5) * secondsRadius + 30;
  text("VII", x, y);

  x = cos(HALF_PI + PI/2.5) * secondsRadius - 15;
  y = sin(HALF_PI + PI/2.5) * secondsRadius + 50;
  text("VIII", x, y);

  x = cos(PI) * secondsRadius - 25;
  y = sin(PI) * secondsRadius + 5;
  text("IX", x, y);

  x = cos(PI + PI/5) * secondsRadius - 30;
  y = sin(PI + PI/5) * secondsRadius + 15;
  text("X", x, y);

  x = cos(PI + PI/3) * secondsRadius - 15;
  y = sin(PI + PI/3) * secondsRadius - 10;
  text("XI", x, y);
}
