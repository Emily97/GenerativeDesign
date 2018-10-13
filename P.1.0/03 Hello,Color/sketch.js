function setup(){
    createCanvas(720,720);
    colorMode(HSB, 360, 100, 100);
    //this places the rectangle in the centre of the canvas.
    rectMode(CENTER);
    noStroke();
}

function draw(){
    background(mouseY/2,100,100);
    // The halved y-value of the mouse position is subtracted from 360, creating values from 360 to 0.
    fill(360-mouseY/2,100,100);
    //starts at the middle of the canvas in both the x and y direction and grows bigger and smaller depending on the mouses X position on the canvas.
    rect(width/2,height/2,mouseX,mouseX);
}
