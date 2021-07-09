var garden,rabbit;
var gardenImg,rabbitImg;
var orangeLeaf, orangeLeafImg;
var apple, appleImg;
var leaf, leafImg

function preload()
{
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  orangeLeafImg = loadImage("orangeLeaf.png")
  appleImg = loadImage("apple.png")
  leafImg = loadImage("redImage.png")
}

function setup()
{
  createCanvas(400,400);
  
// Moving background
  garden = createSprite(200,200);
  garden.addImage(gardenImg);

//creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);

  var count = Math.round(random(1,3))
  
  if (frameCount % 80 === 0)
  {
    if (count === 1)
    {
      createApples()
    }

    else if (count === 2)
    {
      createLeaf()
    }

    else
    {
      createLeaves()
    }
  }

}



function draw() 
{
  background(0);
  rabbit.x = World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}


function createApples()
{
  apple = createSprite(random(50,350),40,10,10)
  apple.addImage(appleImg)
  apple.scale = 0.05
  apple.velocityY = 3
  apple.lifetime = 80
}

function createLeaves()
{
  orangeLeaf = createSprite(random(100,300),75,10,10)
  orangeLeaf.addImage(orangeLeafImg)
  orangeLeaf.scale = 0.07
  orangeLeaf.velocityY = 2
  orangeLeaf.lifetime = 100
}

function createLeaf()
{
  leaf = createSprite(random(50,350),100,10,10)
  leaf.addImage(leafImg)
  leaf.scale = 0.05
  leaf.velocityY = 2.5
  leaf.lifetime = 80
}