const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
function setup() {
  createCanvas(400,400);
  engine=Engine.create()
  world=engine.world
  var options={
isStatic:true
  }
  object=Bodies.rectangle(200,390,400,20,options)
  World.add(world,object)
  var options2={
    restitution:1.0
  }
  ball=Bodies.circle(200,100,20,options2)
  World.add(world,ball)
}

function draw() {
  background(0);  
  Engine.update(engine)
  rectMode(CENTER)
  rect(object.position.x,object.position.y,400,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}