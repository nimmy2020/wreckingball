const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var ground,ball;
var box1,box2,box3,box4,box5;
var box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15;

function setup() {
  createCanvas(1000,500);


  engine=Engine.create();
  world=engine.world;

  ground=new Ground(500,450,1000,20);

  box1=new Box(400,415,70,70);
  box2=new Box(400,415,70,70);
  box3=new Box(400,415,70,70);
  box4=new Box(400,415,70,70);
  box5=new Box(450,415,70,70);
  box6=new Box(450,415,70,70);
  box7=new Box(450,415,70,70);
  box8=new Box(450,415,70,70);
  box9=new Box(450,415,70,70);
  box10=new Box(500,415,70,70);
  box11=new Box(500,415,70,70);
  box12=new Box(500,415,70,70);
  box13=new Box(550,415,70,70);
  box14=new Box(550,415,70,70);
  box15=new Box(550,415,70,70);

  ball=new Ball(200,300,70,70)
  rope=new Rope(ball.body,{x:300,y:40})

}

function draw() {
  background("lightblue");  



  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  ball.display();
  rope.display();
  Engine.update(engine);
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
