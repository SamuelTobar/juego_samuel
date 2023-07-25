
var car, carImg
var road,roadImg
var cash,cashImg

var score = 0;




function preload(){
carImg = loadImage("sedan-car-png.webp");
roadImg = loadImage("road.png");
cashImg = loadImage("money-PNG-transparent-image.png")

}

function setup() {
 createCanvas(400,600);
 
 road = createSprite(200,200);
 road.addImage(roadImg);
 road.scale=0.8;
 road.velocityY = 4;
 
 
 
 
 
 car = createSprite(200,500,20,20);
 car.addImage(carImg);
 car.scale= 0.11;


}

function draw() {
 
//movimiento  de jugador
 car.x = World.mouseX;


//reinicio de road
 if(road.y > 600 ){
    road.y = height/2;
  }
    
    createCash(); 
    drawSprites();


 textSize(20);
 fill(255);
 text("score: "+ score,10,30);


 if (car.isTouching(cash)) {
  car.destroy();
  score = score +20;


}
}



function createCash() {
    if (World.frameCount % 200 == 0) {
    var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
    cash.addImage(cashImg);
    cash.scale=0.03;
    cash.velocityY = 7;
    cash.lifetime = 150;
}







}

