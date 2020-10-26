
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var boy;
var tree;

function preload()
{
  boy = loadImage("boy.png")
  tree = loadImage("tree.png")
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

     ground=new Ground(800,650,1600,30)

     rock=new Rock(125,550,30,30)

    slingshot= new SlingShot(rock.body,{x:240,y:490})
	
   mango1=new Mango(900,200,40,40)
   mango2=new Mango(1000,220,40,40)
   mango3=new Mango(880,280,40,40)
   mango4=new Mango(1100,300,40,40)
   mango5=new Mango(1050,250,40,40)
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  image(boy,200,410,200,300)
  image(tree,800,100,400,600)
  
  slingshot.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
   rock.display();

   ground.display();

  
  drawSprites();
 
}

function mouseDragged(){
      Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}