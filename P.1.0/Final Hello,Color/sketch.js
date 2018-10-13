function setup(){
    createCanvas(720,720);
    colorMode(HSB, 360, 100, 100);
    rectMode(CENTER);
    noStroke();
}

function draw(){
    background(mouseY/2,100,100);
    fill(360-mouseY/2,100,100);
    rect(width/2,height/2,mouseX,mouseX);
}
// The keyPressed() function is called once every time a key is pressed. 
// In this case everytime the s key is pressed the canvas is saved as a png with the file name being created using the date and time
// as well as the mouses x and y position. This is done using timestamp() which is taken from the generative design library.
function keyPressed(){
    if(key == 's' || key == 'S') saveCanvas(gd.timestamp() + '_MouseX_' + mouseX + '_MouseY_' + mouseY,'png');
}
