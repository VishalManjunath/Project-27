
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobObject1 = new Bob(200, 530, 50, 50);
	bobObject2 = new Bob(400, 530, 50, 50);
	bobObject3 = new Bob(600, 530, 50, 50);
	bobObject4 = new Bob(800, 530, 50, 50);
	bobObject5 = new Bob(1000, 530, 50, 50);
	roof = new Roof(width/2, 30, 400, 150);
	rope1 = new Rope(roof, bobObject1);
	rope2 = new Rope(roof, bobObject2);
	rope3 = new Rope(roof, bobObject3);
	rope4 = new Rope(roof, bobObject4);
	rope5 = new Rope(roof, bobObject5);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:130,y:-145});
	}
}



