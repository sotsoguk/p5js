let r;
function setup() {
  // put setup code here
  createCanvas(700, 800);
  r = new Rocket(90,createVector(350, 750));
}

function draw() {
  // put drawing code here
  background(0);
  r.run();
  
}

class Rocket{

  constructor(col, pos){
    this.col = col;
    this.pos = pos;
    this.vel = createVector(0.1,-8);
    this.grav = createVector(0,0.01);
    this.timeToExplode = 50;
  }

  update(){
    if (this.timeToExplode >0){
      this.pos.add(this.vel);
      this.vel.add(this.grav);
      this.timeToExplode--;
    }

  }
  draw(){
    if (this.timeToExplode > 0){
      noStroke();
      fill(255,this.timeToExplode*5);
      ellipse(this.pos.x, this.pos.y,2,8);
    }
    else{
      fill(255,0,0);
      ellipse(this.pos.x,this.pos.y,50,50);
    }
  }

  run(){
    this.update();
    this.draw();
  }
}