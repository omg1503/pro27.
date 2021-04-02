
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new Bob(200,500,50);
	bob2 = new Bob(250,500,50);
	bob3 = new Bob(300,500,50);
	bob4 = new Bob(350,500,50);
	bob5 = new Bob(400,500,50);
	roof = new Roof(320,100,300,40);
	rope1 = new Rope(bob1,roof,-bobDiameter*2,0);
	rope2 = new Rope(bob2,roof,-bobDiameter*2,0);
	rope3 = new Rope(bob3,roof,-bobDiameter*2,0);
	rope4 = new Rope(bob4,roof,-bobDiameter*2,0);
	rope5 = new Rope(bob5,roof,-bobDiameter*2,0);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  mousePressed();
  drawSprites();
 
}





function mousePressed(){

	if(keyDown("left")){

		bob1.velocityX = -5;
	}
}