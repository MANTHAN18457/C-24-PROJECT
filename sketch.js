const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber1
var stone1,stone2,stone3,stone4,stone5,stone6
var canvas
var iron1

function setup(){
     canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,120)
    hammer = new Hammer(10,100);

 rubber1 = new Rubber(500,200,PI/10)
 stone1 = new Stone(700,400,PI/3)
 stone2 = new Stone(702,400,PI/4)
 stone3 = new Stone(704,400,PI/2)
 stone4 = new Stone(706,400,PI/3)
 stone5 = new Stone(708,400,PI/4)
 stone6 = new Stone(710,400,PI/2)
 iron1 = new Iron(300,500,75,75)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

   


    plane.display();
    hammer.display();
    rubber1.display()
  stone1.display()
  stone2.display()
  stone3.display()
  stone4.display()
  stone5.display()
  stone6.display()
iron1.display()


    
 
}