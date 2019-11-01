import processing.svg.*;
float angle = 137.5;
float c = 3.0;
int n = 0;
float phi, r, x, y;

void setup(){
 size(400,400); 
 noLoop();
 beginRecor(SVG, "test.svg");
background(0);
  //angl
}
void drawStep(int n_){
   phi = radians(n_*angle);
   r = c * sqrt(n_);
   x = r * sin(phi);
   y = r * cos(phi);
   fill(200);
   circle(x,y,4);
}
void draw(){
    translate(width/2, height/2);
   noStroke();
   for (int i = 0; i<1000;i++){
     drawStep(n);
     n++;  
   }
   endRecord();
}