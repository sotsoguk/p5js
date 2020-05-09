let img;
let s = 100;
function setup() {
  // put setup code here
  createCanvas(s,s);
  img = createGraphics(s, s);
}

function draw() {
  colorMode(HSB);
  // put drawing code here
  img.loadPixels();
  for(let i=0;i<s;i++){
    for(let j=0;j<s;j++){
      img.pixels[i,j]=random(255);
    }
  }
  img.updatePixels();
  image(img,0,0);
}