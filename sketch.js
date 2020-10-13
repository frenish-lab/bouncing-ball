const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world,ground,ball;

function setup() {
  createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;
  var options={
    isStatic: true
  }
  ground = Bodies.rectangle(40,370,1000,5,options)
  World.add(world,ground);
  var ball_options ={
 restitution: 1.0

  }
  ball = Bodies.circle(400,10,50,ball_options)
  World.add(world,ball);
}

function draw() {
  background(0);  
  Engine.update(engine)
  rect(ground.position.x , ground.position.y,400,20)
  ellipse(ball.position.x,ball.position.y,50,50)
}