var garden,rabbit,apple,orange;
var gardenImg,rabbitImg,appleImg,orangeImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  
}


function setup(){
  
  createCanvas(400,400);
 
 garden=createSprite(200,200);
 garden.addImage(gardenImg);       

 rabbit = createSprite(160,340,20,20);
 rabbit.scale =0.09;
 rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

   drawSprites();
  
  var select_sprites = Math.round(random(1,3));
  
  if (frameCount % 40 == 0) {
    if (select_sprites == 1) {
      createApples();
    }
     else if (select_sprites == 2) {
      createOrange();
    }
  }

}

function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 10;
apple.lifetime = 150;
  
}

function createOrange() {
orangeL = createSprite(random(50, 350),40, 10, 10);
orangeL.addImage(orangeImg);
orangeL.scale=0.08;
orangeL.velocityY = 10;
orangeL.lifetime = 150;
}


