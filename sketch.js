var thickness,wall ;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed = random(223,321);
  thickness=random(22,83);
  weight = createSprite(1200,200,thickness,height/2);
  bullet= createSprite(50,200,50,50);
  wall =createSprite(1500,200,60,height/2);
  car.velocityX =speed ;

  
}

function draw() {
  background(255,255,255);  
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation =0.5*weight*speed*speed/22509;

  
  if(deformation>180){
    car.shapeColor = color(230,230,00);

  }
  if(deformation<100){
    car.shapeColor=color(0,255,0);

  }
}
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damege=0.5 *weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor = color(255,0,0);

    }
    if(damege<10){
      wall.shapeColor=Ccolor(0,255,0);
      
    }
  }
  
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bullerRigthEdge=lbullet.x+bullet.width;
  wallLeftEdge=lwall.x;
if(bulletRigthEdge>=wallLeftEdge){
  return  true
}
return false;

}