'use strict';

let actRandomSeed = 0;
let count = 50;

function setup() {
  createCanvas(800,800);
  noStroke();
  fill(0,130,164);
}

function draw() {
  background(255);

  let faderX = mouseX / width;
  randomSeed(actRandomSeed);

  let angle = radians(360 / count);
  for (let i = 0; i < count; i++) {
    // positions
    let randomX = random(0, width);
    let randomY = random(0, height);
    let circleX = width / 2 + cos(angle * i) * 300;
    let circleY = height / 2 + sin(angle * i) * 300;

    let x = lerp(randomX,circleX,faderX);
    let y = lerp(randomY,circleY,faderX);

    ellipse(x,y,11,11);
  }
}
