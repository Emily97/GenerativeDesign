let font;
let textTyped = "O";
let path;
function setup(){
  createCanvas(500,500);
  opentype.load('data/FreeSans.otf',function(err,f){
    if(err){
      console.log(err);
    }
    else{
      font = f;
      noLoop()
    }
  });
}
function draw(){
  if(!font) return;
  background(255);
  translate(20,220);

  if(textTyped.length > 0){
    let fontPath = font.getPath(textTyped,0,0,200);
    console.log(fontPath);
    path = new g.Path(fontPath.commands);
    path = g.resampleByLength(path,10);
    console.log(path);
  }
  fill(0);
  noStroke();
  let diameter = 5;

  for(let i = 0; i < path.commands.length;i++){
    let pnt = path.commands[i];
    ellipse(pnt.x,pnt.y,diameter,diameter);
  }
}
