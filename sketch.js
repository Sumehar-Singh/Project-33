const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backgroundImg;
var snow = [];
var maxSnow = 15;

var snowman, snowmanImg
var sound;

function preload()
{
  backgroundImg = loadImage("snow3.jpg")
  snowmanImg = loadAnimation("snowman12.png", "snowman12.png","snowman12.png","snowman13.png","snowman13.png", "snowman13.png")
  sound = loadSound("snowfall.mp3");
}

function setup() {
  var canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  
  snowman = createSprite(600, 400, 100, 200);
  snowman.addAnimation("snow", snowmanImg);
  snowman.scale  = 0.5;
  //snow = new Snow(400, 200);
  for(var i=0; i<maxSnow; i++)
    {
        snow.push(new Snow(random(0,1200), random(-800,-200)));
    }
   sound.loop();
}

function draw() {
  background(backgroundImg);
      
  Engine.update(engine);

  for(var i=0; i<maxSnow; i++)
  {
  snow[i].display();
  snow[i].update();
  }
  drawSprites();
}
