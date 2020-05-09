let d;
function setup() {
  // put setup code here
   d = generateData(100);
  for (let i=0;i<100; i++)
    console.log(d[i][0].x);
  
  createCanvas(600, 600);
  background(30);
}

function draw() {
  fill(255);
  stroke(255);
  for (let i = 0; i<d.length;i++){
    if (d[i][1] === 0)
      fill(0);
    else
      fill(255);
    circle(d[i][0].x*width,d[i][0].y*height,10);
  }
  noLoop();
}

function generateData(n) {
   let tdata=[]
   for (let i = 0; i<n;++i){
     let tmp = createVector(0,0);
     tmp.x = random();
     tmp.y = random();
     let label = 0;
     if (tmp.x > tmp.y)
      label = 1;
    tdata.push([tmp,label]);
   }
   return tdata;
}