let stars = [];
let numStars = 500;
let off = 0;
function setup() {
  // put setup code here
  createCanvas(800, 800);
  for (let i = 0; i < numStars; i++) {
    stars.push(new Star());
  }
 // stars[0].speed = 21;
}

function draw() {
  // put drawing code here
  off++;
  angleMode(DEGREES);
  background(0);
  colorMode(RGB);
  noStroke();
  fill(255);
  textSize(32);
  text(stars[0].speed,10,height-40);
  translate(width /2, height/2);
  // rotate(off);
  for (let i=0;i<numStars;++i){
    stars[i].show();
    stars[i].update();
  }
}

class Star{

  constructor(){
    // this.position = createVector(0,0,0);
    // this.position.x = random(-width , width);
    // this.position.y = random(-height, height);
    // this.position.z = random(0,height);
    this.position = this.reset();
    this.speed = 20;
    this.hue = random(0,360);
    this.pz = this.position.z;
  }
  reset(){
    let pos = createVector( random(-width, width),
                            random(-height,height),
                            random(0, height)
    );
    return pos;

  }
  incSpeed(){
    this.speed = min(1000, ++this.speed);
    // console.log(this.speed);
  }
  decSpeed(){
    this.speed = max(-100,--this.speed);
    // console.log(this.speed);y
  }
  
  update(){
    this.pz = this.position.z;
    this.position.z -= this.speed;
    
    // if star is out of fov reset
    if (this.position.z < 1){
      this.position = this.reset();
      this.pz = this.position.z;
    }
    if (this.position.z > 2* height){
      this.position = this.reset();
      this.pz = this.position.z;
    }
  }
  show(){
    
    
    let sx = map(this.position.x / this.position.z, 0,1,0,width/2);
    let sy = map(this.position.y / this.position.z, 0,1,0,height/2);
    let psx = map(this.position.x / this.pz, 0,1,0,width/2);
    let psy = map(this.position.y / this.pz, 0,1,0,height/2);
    let r = map(this.position.z,0,height,8,0);
    //let a = map(this.spee,0,height,100,0);
    let aa = map(this.position.z,0,height,100,10);
    if (this.speed < 0)
      aa = map(this.pz,0,height,100,10);
    // fill(255,a);
    colorMode(HSB);
    stroke(this.hue,this.speed,aa);
    strokeWeight(2);
    // console.log(sx,sy);
    // ellipse(sx,sy,r,r);
    line(sx,sy,psx,psy);
    
    // ellipse(this.position.x, this.position.y, 8,8);
  }
}

function mouseWheel(event){
  if (event.delta >0){
    for (let i=0;i<numStars;++i)
      stars[i].incSpeed();
  }
  else{
    for (let i=0;i<numStars;++i)
      stars[i].decSpeed();
  }
}