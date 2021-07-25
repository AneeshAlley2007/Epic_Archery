const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;

var cBase,pBase;
var cPlayer,player;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object

   cBase = new ComputerBase(250,250,100,100)
   cPlayer = new ComputerPlayer(250,180,70,70)

   pBase = new PlayerBase(1000,250,100,100)
   player = new Player(1000,180,70,70)
   



  

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   cBase.display();
   pBase.display();
  
 

   //display Player and computerplayer
   cPlayer.display();
   player.display();
  

}
