var fairy,fairyImage;
var star,starImage;
var backGround,backGroundImage;
const Engine = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies;
const Body = Matter.Body


function preload(){
   //preload the images here
  fairyImage = loadImage("fairy1.png");
  starImage = loadImage("star.png");
  backGroundImage = loadImage("starnight.png");

}

function setup() {
  createCanvas(800, 750);

  backGround = createSprite(800,750);
  backGround.addImage("back",backGroundImage);

  fairy = createSprite(150,600)
  fairy.addImage("fairy",fairyImage);
  fairy.scale=0.1
  fairyBody=Bodies.circle(150,600,5,{isStatic:true});
  World.add(world,fairyBody)

  star = createSprite(700,100)
  star.addImage("tara",starImage );
  starBody=Bodies.circle(700,100,5,{isStatic:true});
  World.add(world,starBody);
  
}


function draw() {
  background("black");
  star.x=starBody.position.x;
  star.y=starBody.position.y;

  fairy.y=fairyBody.position.y;
  fairy.x=fairyBody.position.x;

  if(keyDown === LEFT_ARROW){
    fairy.x=fairy.x-10;
  }

  if(keyDown === RIGHT_ARROW){
    fairy.x=fairy.x+10;
  }

  drawSprites();
}
