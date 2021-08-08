const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var Rope1,Rope2, Rope3, Rope4, Rope5;
var bob1,bob2,bob3,bob4, bob5;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;


	var roof_options={
		isStatic:true			
	}
	roof = Bodies.rectangle(450,100,300,20,roof_options);
    World.add(world,roof);  


	var options={
        restitution:1.1,
        friction:1.0,
        density:1.0,
       isStatic: false
    }
    
  bob1= Bodies.circle(350,500,40, options);
    World.add(world,bob1);

  bob2= Bodies.circle(400,500,40, options);
  World.add(world,bob2);

  bob3= Bodies.circle(450,500,40, options);
  World.add(world,bob3);

  bob4= Bodies.circle(500,500,40, options);
  World.add(world,bob4);

  bob5= Bodies.circle(550,500,40, options);
  World.add(world,bob5);

Rope1= new rope(bob1,roof, -90,0);
Rope2= new rope(bob2,roof, -70, 0);
Rope3= new rope(bob3, roof, -50, 0);
Rope4= new rope(bob4, roof,-30, 0);
Rope5= new rope(bob5,roof,-10, 0);


	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");


  ellipse(bob1.position.x,bob1.position.y,40);
  ellipse(bob2.position.x,bob2.position.y,40);
  ellipse(bob3.position.x,bob3.position.y,40);
  ellipse(bob4.position.x,bob4.position.y,40);
  ellipse(bob5.position.x,bob5.position.y,40);

  Rope1.display();
  Rope2.display();
  Rope3.display();
  Rope4.display();
  Rope5.display();
 
  rect(roof.position.x, roof.position.y, 210,20);

 


}

function keyPressed(){
	if(keyCode === RIGHT_ARROW){
	  Matter.Body.applyForce(bob1, bob1.position,{x:-50,y:-45});
	}
  }



