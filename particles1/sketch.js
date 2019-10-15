let p;
let psys;
let psys2;
function setup() {
  // put setup code here
  createCanvas(600, 600);
  p = new Particle(createVector(300, 10));
  psys = new ParticleSystem(500);
  psys2 = new ParticleSystem(100);
  psys2.particleColor=color('rgb(79, 222, 19)');
}

function draw() {
  // put drawing code here
  background(0);
  // p.run();
  // if (p.isDead()){
  //   console.log("Particle dead");
  //   p = new Particle(createVector(300, 10));
  // }
  psys.update();
  psys2.update();
}

class ParticleSystem{

  constructor(num){
    this.num = num;
    this.alive = 0;
    this.particles = [];
  }
  update(){
    //update all particles
    for (let i = this.particles.length-1;i >= 0; i--){
      let activeP = this.particles[i];
      activeP.run();
      if (activeP.isDead()){
        this.particles.splice(i,1);
        this.alive--;
      }
      
    }
    for (let i = this.alive; i < this.num; ++i){
      this.particles.push(new Particle(createVector(300+random(-10,10),90+random(-20,20))));
      this.alive++;
    }

  }
}

class Particle{

  constructor(l){
    this.pos = l;
    this.acc = createVector(0,0.05);
    this.vel = createVector(random(-1,1), random(-2,0));
    this.radius = 8;
    this.lifespan = random(100,255);
    // this.particleColor = color(238, 67, 16,255);
    this.particleColor = color('rgb(238,67,16)');
  }

  run(){
    this.update();
    this.display();
    //console.log(this.lifespan);
  }
  update(){
   
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.lifespan -= 2.0;
  }
  
  display(){
    stroke(0,this.lifespan);
    //console.log(this.particleColor.v1);
    //this.particleColor.ge
    //fill(this.particleColor.v1,this.particleColor.v2,this.particleColor.v3,this.lifespan);
    //fill(color(this.particleColor.v1,this.particleColor.v2,this.particleColor.v3,100));
    //fill(238,67,16,this.lifespan);
    //fill(this.particleColor);
    fill(red(this.particleColor), green(this.particleColor), blue(this.particleColor), this.lifespan);
    ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
  }

  isDead(){
    if (this.lifespan < 0.0)
      return true;
    else
      return false;
  }
}