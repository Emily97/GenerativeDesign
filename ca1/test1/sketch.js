//revision of nature of code forces chapter
var increment = 10;
var scl = 10;
var cols, rows;

var zoff = 0; //this allows for 3D perlin noise
var particles = []; //an array of particles which is currently empty
var flowfield; //declaring the flowfield vector

function setup() {
  createCanvas(1240, 1748); //A4 canvas for book cover
  colorMode(HSB, 255); //HUE, SATURATION, BRIGHTNESS
  cols = floor(width / scl); //the number of columns is dividing the width by the scale value, this value is then floored so the value will be an integer value
  rows = floor(height / scl); //the number of rows is dividing the height by the scale value, this value is then floored so the value will be an integer value

  flowfield = new Array(cols * rows); //the number of elements in this array is the columns multiplied by the rows which gives the number of elements in the array

  // the number of vectors to be drawn on the canvas
  for (var i = 0; i < 100; i++) {
    //the particle class is now creating the number of particles that is determined by the loop
    particles[i] = new Particle();
  }
  background(45); //the background of the canvas is drawn once
}

function draw() {
  var yoff = 0;
  for (var y = 0; y < rows; y++) { //loops through the number of rows
    var xoff = 0;
    for (var x = 0; x < cols; x++) { //loops through the number of columns
      var index = x + y * cols; //add the x and y multiplied by the number of columns
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 4; //noise is in 3 dimensions, by multiplying noise by 2 PI we can get mulitple angles of noise that then move in many directions by muliplying by 4
      var v = p5.Vector.fromAngle(angle); //creates the vector from an angle starting at the value of angle
      v.setMag(1); //calculates the magnitude of the vector
      flowfield[index] = v; //all the vectors that are being calculated are being stored in this array
      xoff += increment; //increments xoffset with each loop through rows
    }
    yoff += increment; //increments yoffset with each loop through rows
    zoff += 0.0003; //the flowfield changes direction slowly as it is a small decimal value, if the value is higher the flowfield will move faster
                    //however since this is taking place in the browser using p5 the change in speed is slower than if it was the same speed in processing
  }
  // takes particle class functions that changes the particles look and position with each loop
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
