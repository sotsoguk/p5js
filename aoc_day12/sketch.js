let moons;
let counter;
let fac;

function setup() {
  moons = [];
  moons.push(new Planet(createVector(16, -11, 2),color(220,0,0)));
  moons.push(new Planet(createVector(0, -4, 7),color(80,220,10)));
  moons.push(new Planet(createVector(6, 4, -10),color(10,20,220)));
  moons.push(new Planet(createVector(-3, -2, -4)));
  createCanvas(1000,1000,WEBGL)
  // counter = 0;
  // fac = 2;
  
}

function draw() {
  // counter ++;
  // if (!(counter % fac == 0)) {
  //   counter = 1
  //   return
  // }
  background(10)  
  doStep();
  orbitControl();
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  ambientLight(60, 60, 60);
  pointLight(255, 255, 255, locX, locY, 200);
  for (let i = 0;i<moons.length;i++) {
    moons[i].update()
  }
  for (let i=0;i<moons.length;i++) {
    moons[i].draw()
  }
  // console.log(moons[0].pos)
}

function doStep(){
  for (let i=0;i<moons.length;i++){
    for (let j=0;j<moons.length;j++){
      if (i===j) {
        continue;
      }
      if (moons[i].pos.x < moons[j].pos.x) {
        moons[i].vel.x +=1
      } else if (moons[i].pos.x > moons[j].pos.x) {
        moons[i].vel.x -=1
      }
      if (moons[i].pos.y < moons[j].pos.y) {
        moons[i].vel.y +=1
      } else if (moons[i].pos.y > moons[j].pos.y) {
        moons[i].vel.y -=1
      }
      if (moons[i].pos.z < moons[j].pos.z) {
        moons[i].vel.z +=1
      } else if (moons[i].pos.z > moons[j].pos.z) {
          moons[i].vel.z -=1
      }
    }
  }
}
class Planet{

  constructor(pos,col = color(255,204,0),r = 8) {
    this.pos = pos;
    this.vel = createVector(0,0,0);
    this.radius = r;
    this.trailSize = 200;
    this.color = col;
    this.trail =[]
  }
  update(){
    // this.trail.push(this.pos)
    // if (this.trail.length > this.trailSize) {
    //   this.trail.shift();
    // }
    this.pos.add(this.vel);
    

  }
  draw(){
    
    // if (this.trail.length >3){
    //  for (let i=this.trail.length-1; i>=0;i--){
    //   // let newAlpha = map(i,0,100,0,255) 
    //   // let tmpColor = this.color
    //   // tmpColor.setAlpha(newAlpha)
    //   push();
    //   noStroke();
    //   translate(this.trail[i].x,this.trail[i].y,this.trail[i].z);
    //   ambientMaterial(this.color)
    //   sphere(10,10,10);
    //   pop();

    //  }
    // }
    push();
    noStroke();
    translate(this.pos.x, this.pos.y, this.pos.y);
    // ambientLight(200,200,200,200);
    ambientMaterial(this.color);
    sphere(this.radius, 8,8);
    pop();

  }
}