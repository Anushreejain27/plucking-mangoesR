
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   kid=new boy(150,520)
   tree1=new tree(600,320)
  ground1=new ground(400,700,800,160)
  M1=new mango(610,280,30)
  M2=new mango(510,250,30)
  M3=new mango(570,200,30)	
  M4=new mango(720,230,30)	
  M5=new mango(680,180,30)	
  M6=new mango(630,130,30)	
  M7=new mango(540,320,30)	
  M8=new mango(670,295,30)	

stone1=new stone(101,451,10)

launcher=new chain(stone1.body,{x:120,y:510})


  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(198, 241, 255);

  kid.display();
  tree1.display()
  ground1.display()
  M1.display()
  M2.display()
  M3.display()
  M4.display()
  M5.display()
  M6.display()
  M7.display()
  M8.display()
  textSize(30)
  fill("black")
  text("Press space to get another chance",30,120)

  detectCollision(M1,stone1)
  detectCollision(M2,stone1)
  detectCollision(M3,stone1)
  detectCollision(M4,stone1)
  detectCollision(M5,stone1)
  detectCollision(M6,stone1)
  detectCollision(M7,stone1)
  detectCollision(M8,stone1)

  stone1.display()
  launcher.display()
  drawSprites();
 
}


function mouseDragged(){
Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})


}
function mouseReleased(){

  launcher.fly()
}

function detectCollision(lmango,lstone){
mbp=lmango.body.position
sbp=lstone.body.position

var distance=dist(mbp.x,mbp.y,sbp.x,sbp.y)
if(distance<=lmango.r+lstone.r){
 // console.log(distance)
Matter.Body.setStatic(lmango.body,false)

}

}
function keyPressed(){
if(keyCode===32){
 
launcher.attach(stone1.body)

}

}






