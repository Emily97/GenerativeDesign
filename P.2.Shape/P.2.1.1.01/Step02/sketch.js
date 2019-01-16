var tileWidth;
var numOfTiles;
var actRandom;

function setup() {
  createCanvas(500,500);
  //ellipseMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  numOfTiles = 20;
  tileWidth = width / numOfTiles;
  randomSeed(actRandom);
  background(255);
  randomSeed(20);
  for(var gridY = 0; gridY < numOfTiles; gridY++){
    for(var gridX = 0; gridX < numOfTiles; gridX++){
      fill(0);
      stroke(0);
      strokeWeight(1);
      push();
        translate(gridX*tileWidth+ tileWidth/2, gridY*tileWidth + tileWidth/2);
        var choice = Math.floor(random(2));
        if(choice == 0){
          strokeWeight(mouseY/numOfTiles);
          line(-tileWidth/2, tileWidth/2, tileWidth/2, -tileWidth/2);
        }
        if(choice == 1){
          strokeWeight(mouseY/numOfTiles);
          line(-tileWidth/2, -tileWidth/2, tileWidth/2, tileWidth/2);
        }
      pop();
    }
  }
}
