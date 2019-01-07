var numberOfShapes = 7; //the number of shapes to be created
var shapes = []; //empty array for shapes

var framesPerSecond = 50; //the framerate affects the spped at which the shapes change shape due to noise

function setup() {
  createCanvas(1240,1748); //A4 canvas for book cover
  colorMode(HSB, 360, 100, 100, 50); //HUE, SATURATION, BRIGHTNESS, ALPHA
  frameRate(framesPerSecond); //the frame rate is declared above
  noStroke(); //no stroke on the shapes

  var x = width/2; //the centre of the shape x coordinate
  var y = height/2; //the centre of the shape y coordinate
  var min = width/6; //the smallest size the shape can be
  var max = height/4; //the largest size the shape can be

  for (var i = 0; i < numberOfShapes; i++) { //create the number of shapes specified and pushed into the shapes array
    shapes.push(new Noise(x, y, min, max, 360*i/numberOfShapes)); //pushes the shapes into the shapes array declared above
  }
}

function draw() {
  blendMode(BLEND); //linear interpolation of colours
  background(0); //refreshes the background every frame
  blendMode(DIFFERENCE); //subtract colors from underlying image

  for (var i = 0; i < numberOfShapes; i++) { //the noise class takes whats declared in the show function
    shapes[i].show();                        //and puts it onto the number of shapes created
  }
}

//save png images to show steps
function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
