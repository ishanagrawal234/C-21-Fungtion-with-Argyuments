var fixedrect,movingrect;
var gameobject1, gameobject2,gameobject3;

function setup() {

  createCanvas(1200,800);

  fixedrect = createSprite(400, 200, 50, 50);
  fixedrect.shapeColor = "blue";
  fixedrect.debug = true;

  movingrect = createSprite(600,200,50,50);
  movingrect.shapeColor = "red";
  movingrect.debug = true;

  gameobject1 = createSprite(800,600,100,40);
  gameobject1.shapeColor = "pink";

  gameobject2 = createSprite(800,100,100,100);
  gameobject2.shapeColor = "orange";

  gameobject3 = createSprite(1000,400,20,80);
  gameobject3.shapeColor = "white";

}

function draw() {

  background("black");  

  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;


  if (isTouching(movingrect,gameobject3))
  
    {
    movingrect.shapeColor = "green";
    gameobject3.shapeColor = "green";
    }
     else 
    {
    movingrect.shapeColor = "yellow";
    gameobject3.shapeColor = "yellow";
    }
  
  drawSprites();

}

