// GLOBAL VARIABLES
var numberTiles =20;
var tileWidth;
var shapes;
// The setup function is called once when the program starts. It initializes the canvas properties such as canvas size, colorMode etc.
function preload(){
  shapes =[];
  shapes.push(loadImage('shape.svg'));
}
function setup(){
    // defines the size of the canvas in pixels, in the browser window.
    createCanvas(500,500);
    tileWidth =width/numberTiles;
    angleMode(DEGREES);
    imageMode(CENTER);
}

// Unlike the setup function, the draw function constantly executes all the lines of code found within it.
function draw(){
    // This determine the background color of the canvas.
    background(255);

    // translate(tileWidth/2,tileWidth/2);
    for(var gridY = 0; gridY < numberTiles; gridY++){
      for(var gridX = 0; gridX < numberTiles; gridX++){
        fill(0);
        stroke(0);
        strokeWeight(1);
        push();
        let posX = gridX*tileWidth+tileWidth/2;
        let posY = gridY*tileWidth+tileWidth/2;

        let angle = atan2(mouseY-posY, mouseX-posX);
        translate(posX, posY);
        rotate(angle);
        strokeCap(PROJECT);
        image(shapes[0],20,20,10,10);
        // line(shapes[0],0,0,50,50);
        // line(-tileWidth/2, tileWidth/2, tileWidth/2, -tileWidth/2);
        pop();
      }
    }
}
