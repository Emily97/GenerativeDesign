var scales = 10;
var cols, rows;
var particles = []; //an array of particles which is currently empty
var flowfield; //declaring the flowfield vector

function setup() {
  createCanvas(1240,1748); //A4 canvas for book cover
  colorMode(HSB, 255); //HUE, SATURATION, BRIGHTNESS
  background(0); //set background color
  angleMode(DEGREES); //if this wasn't declared the angle would have to be declared in radians

  cols = floor(width / scales); //the number of columns is dividing the width by the scale value, this value is then floored so the value will be an integer value
  rows = floor(height / scales); //the number of rows is dividing the height by the scale value, this value is then floored so the value will be an integer value

  flowfield = new Array(cols * rows); //the number of elements in this array is the columns multiplied by the rows which gives the number of elements in the array

  // the number of vectors to be drawn on the canvas
  for (var i = 0; i < 1; i++) {
    //the particle class is now creating the number of particles that is determined by the loop
    particles[i] = new Particle();
  }
}

function draw() {
    let color = floor(random(0,255)); //a random number is picked between 0 and 255 that will later pick the hue of the shape
    let radius = 500; //the radius length
    noLoop(); //the loop doesn't continue after its been completed once
    strokeWeight(5); //the thickness of the line
    noFill(); //the shape created has no colour in the centre
    beginShape(); //the beginShape and endShape allows the creation of complex shapes
        let vertexAngle = floor(random(1, 150)); //the angles of the vertex will be between 1 and 150
        console.log(vertexAngle); //checking the value of the angles
        for(let a = 0; a <= 360; a += vertexAngle) { //the total angle of the shape will be 360 degrees making it a circle of the angle is small enough
            let x = radius * sin(a) + width/2; //the start position of the radius is the centre of the canvas, calculates the sin of the angle, values are returned in the range -1 to 1
            let y = radius * cos(a) + height/2; //the start position of the radius is the centre of the canvas, calculates the cos of the angle, values are returned in the range -1 to 1
            console.log(a); //the accumulated total angles
            stroke(color, 255, 255); //the color of the vertex
            vertex(x,y); //create the vertex
        }
    endShape(CLOSE); //the constant CLOSE as the value for the MODE parameter to close the shape (to connect the beginning and the end)

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
