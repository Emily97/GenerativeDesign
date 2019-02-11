let font;
let textImg;
let numOfTiles = 100;
let tileWidth;
function preload(){
  font = loadFont('data/FreeSansBold.ttf');
}
function setup(){
  background(255);
  createCanvas(500,500);
  tileWidth = floor(width/numOfTiles);
  setupText();
}
function draw(){
  // stroke(255);
  fill('grey');
  for(let y = 0; y < width; y+=tileWidth){
    for(let x = 0; x < width;x+=tileWidth){
      let index = (x + y * textImg.width) * 4;
      if(textImg.pixels[index] < 128){
        rect(x,y,tileWidth,tileWidth);
      }

    }
  }
}

function setupText(){
  textImg = createGraphics(500,500);
  textImg.pixelDensity(1);
  textImg.background(255);
  textImg.textFont(font);
  textImg.textSize(100);
  textImg.text("ABC",0,100,50,50);
  textImg.loadPixels();
}
