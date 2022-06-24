
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var solo,plan,nian;

function preload(){
	
}

function setup() {
	createCanvas(windowWidth,windowHeight);

	engine = Engine.create();
	world = engine.world;

    solo = new Chao(800,625);
	plan = new Ter(800,710);
	nian = new Cat(500,590);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("blue");
  solo.display();
  plan.display();
  nian.display();

  drawSprites();
 
}



