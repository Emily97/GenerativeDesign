//review nature of code forces chapter
//constructor
function Particle() {
  this.pos = createVector(random(width), random(height)); //creates vector at a random position on the canvas
  this.velocity = createVector(0, 0); //velocity in the x and y direction
  this.acceleration = createVector(0, 0); //acceleration in the x and y direction
  this.maxspeed = 4; //maximum speed of the vector
  this.color = 0; //since the color mode is HSB this starts the HUE value at 0 which is red

  this.prevPos = this.pos.copy(); //copies the vectors location

  this.update = function() { //updates previously declared variables
    this.velocity.add(this.acceleration); //add acceleration to velocity to get the new updated velocity
    this.velocity.limit(this.maxspeed); //the maximum velocity of the vector cannot exceed the maxspeed
    this.pos.add(this.velocity); //the position changes due to the velocity changing its position
    this.acceleration.mult(0); //reset acceleration to zero
  }

  this.follow = function(vectors) { //vectors create a trail to follow the current vector
    var x = floor(this.pos.x / scl); //the x value is created by flooring the position x and dividing it by scale
    var y = floor(this.pos.y / scl); //the y value is created by flooring the position y and dividing it by scale
    var index = x + y * cols; //add the x and y multiplied by the number of columns
    var force = vectors[index];
    this.applyForce(force);
  }

  this.applyForce = function(force) {
    this.acceleration.add(force); //
  }

  this.show = function() {
    stroke(this.color, 255, 255, 25);
    this.color = this.color + 1;
    if (this.color > 255) {
      this.color = 0;
    }
    strokeWeight(3);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    this.updatePrev();
  }

  this.updatePrev = function() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }

  this.edges = function() {
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.updatePrev();
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.updatePrev();
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
      this.updatePrev();
    }

  }

}
