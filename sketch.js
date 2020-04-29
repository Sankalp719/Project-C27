const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var pendulum;
var chain;
var bar;

function preload(){
  
}

function setup() {
  createCanvas(1200,500);


  engine = Engine.create();
  world = engine.world;

  pendulum=new Pendulum(600,200);
  chain=new Chain(pendulum.body,{x:600,y:20});
  bar=new Bar(600,20,600,25);

}

function draw() {
  background("white");  
  Engine.update(engine);

  chain.display();
  pendulum.display();
  bar.display();

  console.log(frameCount);
    
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(pendulum.body,{x:mouseX,y:mouseY});
}