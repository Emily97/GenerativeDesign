//review nature of code forces chapter
//constructor
function Particle() {
  this.pos = createVector(random(width), random(height)); //creates vector at a random position on the canvas
  this.velocity = createVector(0, 0); //velocity in the x and y direction
  this.acceleration = createVector(0, 0); //acceleration in the x and y direction
  this.maxspeed = 4; //maximum speed of the vector
  this.color = 0; //since the color mode is HSB this starts the HUE value at 0 which is red

  this.prevPos = this.pos.copy(); //copies the vectors location as the particles move faster than one pixel per frame
                                  //this function stops the pixels from skipping 

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
    var force = vectors[index]; //all the vector values are stored in the array
    this.applyForce(force);
  }

  this.applyForce = function(force) { //forces function that applies acceleration to the force acting on the vectors
    this.acceleration.add(force);
  }

  this.show = function() { //the show function decides the look of the vectors
    stroke(this.color, 255, 255, 25); //as the vector moves with each draw of the canvas the HUE increases by 1
    this.color = this.color + 1;
    if (this.color > 255) { //when the hue value is greater than 255 the color value is reset back to 0, red
      this.color = 0;
    }
    strokeWeight(3); //the thickness of the line
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y); //lines are created that will slowly change color as the iterations of the loops increases
    this.updatePrev(); //update previous function
  }

  this.updatePrev = function() { //the update previous function
    this.prevPos.x = this.pos.x; //the current x position is equal to the previous x position, this allows for the particles to continue being drawn to screen
    this.prevPos.y = this.pos.y; //the current y position is equal to the previous y position, this allows for the particles to continue being drawn to screen
  }
  //the edges function checks the current particles x and y position to see if its at (min_width -1), (min_height -1), (max width + 1) or (max height + 1)
  //or greater if its found to be at the edge of the canvas the new x or y position of the particles is set to the edge of the canvas
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
