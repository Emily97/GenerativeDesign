// GLOBAL VARIABLES
var radius = 150;
var circleResolution = 10;
var angle = 360/circleResolution;
// The setup function is called once when the program starts. It initializes the canvas properties such as canvas size, colorMode etc.
function setup(){
    // defines the size of the canvas in pixels, in the browser window.
    createCanvas(720,720);
    colorMode(HSB);
}

// Unlike the setup function, the draw function constantly executes all the lines of code found within it.
function draw(){
    // This determine the background color of the canvas.
    background(90);
    angleMode(DEGREES);

    translate(width/2,height/2);
    for(var i = 0; i < circleResolution; i++){
      var posx = cos(angle*i)*radius;
      var posy = sin(angle*i)*radius;
      line(0,0,posx,posy);
    }
}
