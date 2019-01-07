// GLOBAL VARIABLES
var radius;
var angle;
var circleResolution;
var offset;
// The setup function is called once when the program starts. It initializes the canvas properties such as canvas size, colorMode etc.
function setup(){
    // defines the size of the canvas in pixels, in the browser window.
    createCanvas(720,720);
    angleMode(DEGREES);
    background(250);
    noFill();
    strokeWeight(2);
    stroke(0, 25);
}

// Unlike the setup function, the draw function constantly executes all the lines of code found within it.
function draw(){
    // This determine the background color of the canvas.
    if (mouseIsPressed && mouseButton == LEFT) {
    radius = mouseX - width / 2;
    offset = map(mouseY, 0, height, 1, 150);
    angle = 360/circleResolution;
    circleResolution = int(map(mouseY + 100, 0, height, 2, 10));
    translate(width/2,height/2);
    //radius = map(mouseX, width/2, width, 1, 150);
    // console.log(radius);

    beginShape();
      for(var i = 0; i < circleResolution; i++){
        var posx = cos(angle*i+offset)*abs(radius);
        var posy = sin(angle*i+offset)*abs(radius);
        vertex(posx,posy);
      }
    endShape(CLOSE);
  }
}
