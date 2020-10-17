var bullet,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(1200,400);
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83);
  bullet=createSprite(50,200,50,50);
  wall=createSprite(1000,200,60,height/2);
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255); 
   if(wall.x-bullet.x < (bullet.width+wall.width)/2)
   {
     bullet.velocityX=0;
     var deformation=0.5 * weight * speed* speed/(thickness*thickness*thickness);
     if(deformation>180)
     {
     bullet.shapeColor=color(255,0,0);
   }
   

   if(deformation<100)
   {
     bullet.shapeColor=color(0,255,0);
   }
  }
  drawSprites();
}