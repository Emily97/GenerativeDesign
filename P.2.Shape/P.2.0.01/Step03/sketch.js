// GLOBAL VARIABLES
var radius;
var circleResolution;
var angle;
var myStroke;
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
    // radius = mouseX - width/2;
    radius = map(mouseX, width/2, width, 1, 150);
    circleResolution = int(map(mouseY,0,height,2,80));
    angle = 360/circleResolution;
    myStroke = map(mouseY,0,height,8,1);
    // console.log(radius);
    strokeWeight(myStroke);
    for(var i = 0; i < circleResolution; i++){
      var posx = cos(angle*i)*abs(radius);
      var posy = sin(angle*i)*abs(radius);
      line(0,0,posx,posy);
    }
}
