var iss, spacraft;
var bg, issimg, scimg;
var hasDocked = false;

function preload(){
  bg= loadImage("space.jpg");
  issimg = loadImage("iss.png");
  scimg = loadImage("spacecraft1.png");
  scimg1 = loadImage("spacecraft2.png");
  scimg2 = loadImage("spacecraft3.png");
  scimg3 = loadImage("spacecraft4.png");
}

function setup(){
  createCanvas(600,350);
  spaceCraft = creatsprite(285,240);
  spacraft.addImage(scimg);
  spacraft.scale = 0.15;
  

  iss = creatSprite(330,130);
  iss.addImage(issimg);
  iss.scale = 0.25;

}
function draw(){
  background(bg);

  spacraft.addImage(scimg);
  if(!hasDocked){
    spacraft.x = spacraft.x + random(-1,1);

    if(keyDown("UP_ARROW")){
      spacraft.y = spacraft.y -2;

    } 
    if(keyDown("LEFT_ARROW")){
      spacraft.addImage(scimg3);
      spacraft.x = spacraft.x - 1;
    } 

    if(keyDown("RIGHT_ARROW")){
      spacraft.addImage(scimg2);
      spacraft.x + spacraft.x + 1;
    }
    if(keyDown("DOWN_ARROW")){
      spacraft.addImage(scimg1);
    }

    if(spacraft.y <= (iss.y+70) && spacraft.x <= (iss.x-10)){
      hasDocked = true;
      textSize(25);
      Fill("Docking is successful!",200,300);
    }

  }
  drawSprites();
}

