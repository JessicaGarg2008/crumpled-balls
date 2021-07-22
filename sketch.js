var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor='yellow'


	leftSprite=createSprite(300,615, 20,100);
	leftSprite.shapeColor= "red"

	rightSprite=createSprite(500,615, 20,100);
	rightSprite.shapeColor= "red"

	baseSprite=createSprite(400,660, 200,10);
	baseSprite.shapeColor= "red"

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);

	ball = Bodies.circle(width/6 , 625 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, ball);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position .y,60,0)
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false)
  }
} 

function keyPressed() {
	if (keyCode === RIGHT_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on
	   Matter.Body.applyForce(ball.body,ball.body.position,{x:80,y:-80});
	 }
   } 

