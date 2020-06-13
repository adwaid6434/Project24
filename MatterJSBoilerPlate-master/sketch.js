var groundSprite;
var paper,ground,box,box2,box3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create paper
	paper = new Paper(100,680,40); 
	
	//Create dustbin
	box = new Dustbin(600,675,200,10);
	box2 = new Dustbin(495,580,10,200);
	box3 = new Dustbin(695,580,10,200);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 700, width, 5 , {isStatic:true} );
 	World.add(world, ground);
    groundSprite = createSprite(width/2, 695, width, 30 );

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 paper.display();
 box.display();
 box2.display();
 box3.display();
}

function keyPressed(){
if(keyCode === UP_ARROW){
 Matter.Body.applyForce(paper.body,paper.body.position,{x:180,y:-305});
}	
} 

