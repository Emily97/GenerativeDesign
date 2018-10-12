// The setup function is called once when the program starts. It initalizes the canvas properties such as canvas size, colorMode etc.
function setup(){
    // defines the size of the canvas in pixels, in the browser window.
    createCanvas(720,720);
    colorMode(HSB, 360, 100, 100);
    rectMode(CENTER);
    noStroke();
}

function draw(){
    background(mouseY/2,100,100); //determines the hue of the background based on the mouses Y position -> background(mouseY/2,80,80);.
    fill(360-mouseY/2,100,100);
    rect(width/2,height/2,mouseX,mouseX);
}

function keyPressed(){
    if(key == 's' || key == 'S') saveCanvas(gd.timestamp() + '_MouseX_' + mouseX + '_MouseY_' + mouseY,'png');
}
