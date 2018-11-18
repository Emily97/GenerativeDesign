//review nature of code forces chapter
//constructor
function Particle() {
  this.pos = createVector(random(width), random(height));
  this.velocity = createVector(0, 0); //velocity
  this.acceleration = createVector(0, 0); //acceleration
  this.maxspeed = 4;
  this.color = 0;

  this.prevPos = this.pos.copy();

  this.update = function() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxspeed);
    this.pos.add(this.velocity);
    //reset acceleration to zero
    this.acceleration.mult(0);
  }

  this.follow = function(vectors) {
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = x + y * cols;
    var force = vectors[index];
    this.applyForce(force);
  }

  this.applyForce = function(force) {
    this.acceleration.add(force);
  }

  this.show = function() {
    stroke(this.color, 255, 255, 25);
    this.color = this.color + 1;
    if (this.color > 255) {
      this.color = 0;
    }
    strokeWeight(1);
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
