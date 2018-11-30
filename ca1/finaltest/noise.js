//review nature of code forces chapter
//constructor
function Noise(x, y, minSize, maxSize, c) {
  this.noOfPoints = floor(random(3,50)); //the number of points to make shapes 3 points make a triangle
  this.angleSize = TWO_PI/this.noOfPoints; //the size of the angle is determined by the number of points for the shape
  this.noiseLevel = 0.5; //noise level between 0.0 and 1.0
  this.time = 0.01; //determines how fast the noise level changes
  this.timeDifference = 10000;

  this.dx = 0; //start x position
  this.dy = 0; //start y position

  this.randomTime = random(this.timeDifference); //a random time is picked between 0 and timeDifference value
  this.x = x; //the x coordinate
  this.y = y; //the y coordinate
  this.minRadius = minSize; //the minRadius size
  this.maxRadius = maxSize; //the maxRadius size
  this.hue = c; //the hue value

  this.show = function() {
    translate(this.x, this.y); //places the shapes where the x and y position states
    fill(this.hue%360, 100, 100, 100); //if the hue value exceeds 360 the hue will be reset to 1 due to the modular which gets the remainder

    beginShape(); //the beginShape and endShape allows the creation of complex shapes
    var i = 0;
    while (i++ != this.noOfPoints) { //if the incremented i is not equal to the noOfPoints then execute the following
      this.follow(i); //follows the trail made by the noise level changing the edge of the shape
      vertex(px, py); //creates the number of vertex's until the i increment is equal to noOfPoints
      var px = this.dx; //the starting x position
      var py = this.dy; //the starting y position
    }

    endShape(CLOSE); //the constant CLOSE as the value for the MODE parameter to close the shape (to connect the beginning and the end)
    resetMatrix(); //replaces the current matrix so the shapes don't translate by the x and y position each time the shape is made
    this.hue += 0.1; //increments the hue value each frame
  };

  this.follow = function(points) { //vectors create a trail to follow the current vector
    var angle = this.angleSize*points;  //the size of the angle is determined by the number of points for the shape
    var cosAngle = cos(angle); //calculates the cos of the angle
    var sinAngle = sin(angle); //calculates the sin of the angle
    var time = this.time*frameCount + this.randomTime; //calculating how fast the noise level increases and decreases the size of the shape

    //how often the noise value changes over time that changes the size of the shape
    var noiseValue = noise(this.noiseLevel*cosAngle + this.noiseLevel, this.noiseLevel*sinAngle + this.noiseLevel, time);

    var radius = this.maxRadius*noiseValue + this.minRadius;
    this.dx = radius*cosAngle; //the x position to draw the vertexs'
    this.dy = radius*sinAngle; //the y position to draw the vertexs'
  };
}
