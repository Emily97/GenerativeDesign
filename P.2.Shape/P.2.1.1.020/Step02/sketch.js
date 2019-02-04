let numofTiles = 10;
let tileWidth;
let minRadius = 10;
let maxRadius = 70;
let minStroke = 1;
let maxStroke = 5;
let strokeColor;
let actRandomSeed = 1000;
let img;

function preload() {
  img = loadImage('shape3.svg');
}

function setup() {
  createCanvas(500,500);
  tileWidth = width/numofTiles;
  strokeColor = color(255,0,0,125);
  rectMode(CENTER);
  imageMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  randomSeed(actRandomSeed);
  translate(tileWidth/2,tileWidth/2)
  background(255);

  for(var gridY = 0; gridY < numofTiles; gridY++){
    for(var gridX = 0; gridX < numofTiles; gridX++){
        noFill();
        stroke(strokeColor);

        let posX = gridX*tileWidth;
        let posY = gridY*tileWidth;

        let shiftX = random(-mouseX, mouseX)/10;
        let shiftY = random(-mouseX, mouseX)/10;
        let angle = atan2(mouseY-posY, mouseX-posX);

        push();
          translate(posX,posY);
          rotate(angle);
          image(img,0,0,tileWidth,tileWidth);
        pop();
    }
  }
}
