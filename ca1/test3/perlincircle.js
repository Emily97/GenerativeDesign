function PerlinCircle(xx, yy, minSize, maxSize, c) {
  this.segments = 50;
  this.numberOfAngles = TWO_PI/this.segments;
  this.noiseLevel = 0.5;
  this.time = 0.01;
  this.timeDifference = 1000;

  this.dx = 0;
  this.dy = 0;

  this.randomTime = random(this.timeDifference);
  this.x = xx;
  this.y = yy;
  this.minRadius = minSize;
  this.maxRadius = maxSize;
  this.hue = c;

  this.render = function() {
    translate(this.x, this.y);
    fill(this.hue%360, 100, 100, 100);

    beginShape();
    this.findNextCoordinates(0);
    var px = this.dx;
    var py = this.dy;
    var i = 0;

    while (i++ != this.segments) {
      this.findNextCoordinates(i);

      vertex(px, py);
      px = this.dx;
      py = this.dy;
    }

    endShape(CLOSE);

    resetMatrix();

    this.hue += 0.1;
  };

  this.findNextCoordinates = function(seg) {
    var angle = this.numberOfAngles*seg;
    var cosAngle = cos(angle);
    var sinAngle = sin(angle);
    var time = this.time*frameCount + this.randomTime;

    var noiseValue = noise(
      this.noiseLevel*cosAngle + this.noiseLevel,
      this.noiseLevel*sinAngle + this.noiseLevel, time);

    var rad = this.maxRadius*noiseValue + this.minRadius;

    this.dx = rad*cosAngle;
    this.dy = rad*sinAngle;
  };
}
