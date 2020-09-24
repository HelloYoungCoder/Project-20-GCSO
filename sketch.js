// Project C-20: GCSO 
// Car Crash Test Simulator
// Deformation: 0.5 X Weight X Speed X Speed / 22500 

//Create Variables
var car,wall;
var speed, weight;
var distanceX, horizontalDistance;
var deformation;
var indicator, status;

function setup() {
  createCanvas(1600,400);
  
  //Create sprites
  wall = createSprite(1400,200,50,height/2);
  wall.shapeColor = rgb(220,20,60);

  //Assign random values for speed & weight
  speed = random(55,90);
  weight = random(400,1400);

  car = createSprite(50,200,50,50);
  car.shapeColor = "cream";

  //Assign speed
  car.velocityX = speed;

  indicator = createSprite(1400,350,50,20);

  //Set text size & font
  fill("cream");
  textSize(20);
  textFont("Trebuchet MS");
}

function draw() {
  background(40,40,40);
  
  //Calculate horizontal distance
  distanceX = wall.x - car.x;
  horizontalDistance = wall.width/2 + car.width/2;

  //Collision Detection Algorithm
  if (distanceX < horizontalDistance){

    //Make the car to stop
    car.velocityX = 0;

    //Calculate deformation value
    deformation = (0.5 * weight * speed * speed) / 22500; 

    //Lethal - Red
    if (deformation > 180){
      indicator.shapeColor = rgb(255,0,0);
      status = "Lethal";
    }

    //Average - Yellow
    if (deformation < 180 && deformation > 100){
      indicator.shapeColor = rgb(230,230,0);
      status = "Average";
    }

    //Green - Good
    if (deformation < 100){
      indicator.shapeColor = rgb(0,255,0);
      status = "Good :)";
    }
  }
  
  //Display sprites on screen
  drawSprites();

  //Display info & status
  text("GCSO: CAR CRASH TEST SIMULATOR",600,30);
  text(status,1370,390);
}