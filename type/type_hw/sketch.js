let font;
let textTyped = "O";
let path;
var movers = [];
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

    let gravity = createVector(0,0.1*movers[i].mass);
    movers[i].applyForce(gravity);
    ellipse(pnt.x,pnt.y,diameter,diameter);
  }
}

function Mover(m,x,y){
  this.mass = m;
  this.position = createVector(x,y);
  this.velocity = createVector(0,0);
  this.acceleration = createVector(0,0);
}

Mover.prototype.applyForce = function(force){
  var f = p5.Vector.div(force,this.mass);
  this.acceleration.add(f);
};

Mover.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.acceleration.mult(0);
};

Mover.prototype.display = function(){

};

Mover.prototype.checkEdges = function(){
  if(this.position.y > (height - this.mass*8)){
      this.velocity.y *= -0.9;
      this.position.y = (height - this.mass*8);
  }
};
