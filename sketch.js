const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,ground,ball;




function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var balloptions={
    restitution:1.0
  }
  ball=Bodies.circle(23,34,45,balloptions);
  World.add(world,ball);
  var groundoptions={
    isStatic: true
  }
  ground=bodies.rectangle(23,34,45,56,groundoptions);
  World.add(world,ground);

}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(RADIUS)
  ellips(ball.position.x,ball.position.y,45,45);

}












