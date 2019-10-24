let r;
function setup() {
  // put setup code here
  createCanvas(700, 800);
  r = new Rocket(90,createVector(350, 750));
}

function draw() {
  // put drawing code here
  colorMode(RGB);
  background(0,80);
  if (!r.finished)
    r.run();
  else{
    r = new Rocket(floor(random(0,360)), createVector(floor(random(200,500)),750));
  }
}

class Rocket{

  constructor(col, pos){
    this.maxLifetime = 300;
    this.col = col;
    this.pos = pos;
    this.vel = createVector(random(-0.1,0.1),-8);
    this.grav = createVector(0,0.01);
    this.timeToExplode = 50;
    this.timeToVanish = this.maxLifetime;
    this.finished = false;
    this.glitter =[];
    this.numGlitter = 200;
  }

  update(){
    if (this.timeToVanish <=0){
      this.finished = true;
      return;
    }
    if (this.timeToExplode >0){
      this.pos.add(this.vel);
      this.vel.add(this.grav);
      this.timeToExplode--;
    }
    else {

      if (this.timeToVanish == this.maxLifetime){
        for (let i = 0; i < this.numGlitter; i++){
          this.glitter.push(new Particle(createVector(this.pos.x+random(10),this.pos.y+random(10)),p5.Vector.random2D().setMag(random(0.2,0.8))));
         
        }
      }
      for (let i=0; i < this.glitter.length;++i){
        this.glitter[i].applyForce(createVector(0,0.01));
        this.glitter[i].update();
        console.log(this.glitter[i].pos.x);
      }
      this.timeToVanish--;
    }
    
  }
  draw(){
    if (this.timeToExplode > 0){
      noStroke();
      fill(255,this.timeToExplode*5);
      ellipse(this.pos.x, this.pos.y,2,8);
    }
    else {
      noStroke();
      colorMode(HSB);
      fill(color(this.col,90,90));
      for (let i=0;i<this.glitter.length;++i){
        this.glitter[i].draw();
        // console.log(i);
      }
      
    }
  }

  run(){
    this.update();
    this.draw();
  }
}

class Particle{
  constructor(posVec, velVec){
    this.pos = posVec;
    this.vel = velVec;
    this.acc = createVector(float(0), float(0));
  }

  applyForce(forceVec){
    this.acc.add(forceVec);
  }
  update(){
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
  }

  draw(){
    noStroke();
    //fill(255);
    ellipse(this.pos.x, this.pos.y, 3,3);
  }
  run(){
    this.update();
    this.draw();
  }
}