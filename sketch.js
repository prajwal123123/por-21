var wall,thickness;
var bullet ,speed,weight;

function setup() {
  createCanvas(1600,400);

thickness=random(22,83);
speed=random(223,321);
weight=random(30,52);

  bullet=createSprite(50, 200, 100, 5);
  bullet.velocityX=speed;
  bullet.shapeColor=color(225);

  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=color(80,80,80);

 
}

function draw() {
  background(0);  

 

   hasCollided();
  drawSprites();
}
function hasCollided(lbullet,lwall){
   bulletRightEdge=lbullet.x + lbullet.width;
   wallLeftEdge=lwall.x;
   if (bulletRightEdge>=wallLeftEdge){
     return true
   }
   return false;
  
 
}