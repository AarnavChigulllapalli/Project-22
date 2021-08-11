
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var ground, left_side, right_side
function preload()
{
	
}

function setup() {
	createCanvas(700, 500);
	var ball_options={
		restitution:0.95,
		isStatic:false,
		friction:0,
		density:1.2
	  }

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball=Bodies.circle(100,0,20,ball_options);
	World.add(world,ball);

	ground = new Ground(width/2,470,width,20);
	left_side = new Ground(400,400,20,120)
	right_side = new Ground(600,400,20,120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(keyDown("UP_ARROW")){
	Force()
  }
  ellipse(ball.position.x,ball.position.y,20);
  ground.show()
  left_side.show()
  right_side.show()
}
function Force(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:5,y:-5})
  }


