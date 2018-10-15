// The setup function is called once when the program starts. It initializes the canvas properties such as canvas size, colorMode etc.
function setup(){
    // defines the size of the canvas in pixels, in the browser window.
    createCanvas(720,720);
}

// Unlike the setup function, the draw function constantly executes all the lines of code found within it.
function draw(){
    // This determine the background color of the canvas.
    background(100,100,100);
    // Because this is placed before the rect() method, the fill of the rectangle is determined by this line.
    fill(200,100,100);
    // The first two values are the starting point of the rectangle on the x and y axis. The final two values are the width in the x direction and the length in the y direction.
    rect(200,200,200,200);
}
