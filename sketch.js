var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var leftredzone, bottomredzone, rightredzone; 

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

	groundSprite=createSprite(400, 680, width,10);
	groundSprite.shapeColor=color(255);
	
	leftredzoneSprite = createSprite(300,620,25,100);
	leftredzoneSprite.shapeColor = color("red");

	bottomredzoneSprite = createSprite(380,660,135,20);
	bottomredzoneSprite.shapeColor = color("red");

	rightredzoneSprite = createSprite(460,620,25,100);
	rightredzoneSprite.shapeColor=color("red");

	engine = Engine.create();
	world = engine.world;

	var bottomredzone_option = {
		isStatic: true
	}

	var ground_option ={
		isStatic: true
	}
	
	var packageBody_option = {
        restitution: 0
    } 

	packageBody = Bodies.circle(width/2 , 200 , 5 ,  packageBody_option);
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10,ground_option );
 	World.add(world, ground);

	
	//create bottomredzone
	bottomredzone = Bodies.rectangle(380,648,135,25,bottomredzone_option);
	World.add(world,bottomredzone);

	///console.log(packageBody,ground)

	 Engine.run(engine);
	
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,width/2,10);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  ellipseMode(RADIUS);
  ellipse(packageSprite.position.x,packageSprite.position.y,5,5);
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	
    

  }
}
