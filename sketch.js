var y_pos = 20;
var rand;
var playerDice = 0;
var computerDice = 0;
var rowGroup
var diceThrown = false;
var compLastMove = 100;
var playerLastMove = 100;
var up1,up2,up3,up4,up5,down1,down2,down3;
var dice,player,computer;
var giraffe_img,down_img,dice_sound;
var dice1,dice2,dice3,dice4,dice5,dice6;
var startTime;
var gameState = "showMsg"

function preload(){
  giraffe_img = loadImage("giraffe.png");
  down_img = loadImage("rockDown_1.png")
  dice1 = loadImage("dieRed1.png");
  dice2 = loadImage("dieRed2.png");
  dice3 = loadImage("dieRed3.png");
  dice4 = loadImage("dieRed4.png");
  dice5 = loadImage("dieRed5.png");
  dice6 = loadImage("dieRed6.png");
  dice_sound = loadSound("dice_shuffle.mp3")
}
function setup(){
  startTime = millis();
var canvas = createCanvas(400,400);
rowGroup = new Group();
  while(y_pos <=400){
    for (var i_pos = 20; i_pos < 400; i_pos+=40) {
      
      var row10 = createSprite(i_pos,y_pos,40,40)
      //rgb(0-255,0-255,0-255)
     row10.shapeColor =rgb(random(150,255),random(120,255),random(200,255));
      rowGroup.add(row10);
    }
    y_pos += 40;
    } 
    
    
    up1 = createSprite(20,340)
    up1.addImage(giraffe_img)
    up1.scale = 0.2;
    up1.setCollider("rectangle",0,150,up1.width/3,up1.height/4)
    //up1.debug = true;
    
    up2 = createSprite(180,140)
    up2.addImage(giraffe_img)
    up2.scale = 0.2;
    up2.setCollider("rectangle",0,150,up1.width/3,up1.height/4)
    //up2.debug = true;
    
    up3 = createSprite(340,60)
    up3.addImage(giraffe_img)
    up3.setCollider("rectangle",0,150,up1.width/3,up1.height/4)
    up3.scale = 0.2;
    //up3.debug = true;
    
    up4 = createSprite(300,225)
    up4.addImage(giraffe_img)
    up4.scale = 0.2;
    up4.setCollider("rectangle",0,150,up1.width/3,up1.height/4)
    //up4.debug = true;

    up5 = createSprite(65,135)
    up5.addImage(giraffe_img)
    up5.scale = 0.2;
    up5.setCollider("rectangle",0,150,up1.width/3,up1.height/4)
    //up5.debug = true;
    
    down1 = createSprite(140,40)
    down1.addImage(down_img);
    down1.setCollider("rectangle",0,-150,up1.width/3,up1.height/4)
    down1.scale = 0.2;
    //down1.debug = true;

    down2 = createSprite(180,285)
    down2.addImage(down_img);
    down2.setCollider("rectangle",0,-150,up1.width/3,up1.height/4)
    down2.scale = 0.2;
    //down2.debug = true;

    down3 = createSprite(300,360)
    down3.addImage(down_img)
    down3.setCollider("rectangle",0,-150,up1.width/3,up1.height/4)
    down3.scale = 0.2;
    //down3.debug = true;
    
    dice = createSprite(200,200)
    dice.visible = false;
    dice.rotation = 90
    
    player = createSprite(395,360,10,10)
    //player.setAnimation("player")
    //player.scale = 0.5
    player.shapeColor = "blue"
    
    computer = createSprite(395,390,10,10)
   // computer.setAnimation("computer")
    //computer.scale = 0.5
    computer.shapeColor = "red"
    
    
    
}


function draw() {
  //background("white")
  drawSprites()
  if(gameState ==="showMsg"){
    fill("blue")
    textSize(16)
    textFont("Georgia")
    //textStyle("bold")
    text("Press space to roll dice and wait for computer to throw dice",0,395)
  }
  var y_pos_c = 20;
  var counter = 100;
  while(y_pos_c <=400){
for (var i_pos_c = 20; i_pos_c < 400; i_pos_c+=40) {
  fill("black")
    textSize(16)
  text(counter--,i_pos_c,y_pos_c)
  
}
y_pos_c += 40;
}
//console.log("throwDice is "+diceThrown)
if((touches.length > 0 || keyWentDown("space"))&& !diceThrown){
  text("Player's Turn", 180,180)
  dice.visible = false;
  throwDice();
  playerCalculateAndMove();
  touches = [];
}


if(player.isTouching(up1)){
  playerLastMove = 70
  player.x = rowGroup.get(playerLastMove).x;
  player.y = rowGroup.get(playerLastMove).y
  
}

if(computer.isTouching(up1)){
  
  compLastMove = 70
  computer.x = rowGroup.get(compLastMove).x;
  computer.y = rowGroup.get(compLastMove).y
  
}
if(player.isTouching(up2)){
  
  playerLastMove =24
  player.x = rowGroup.get(playerLastMove).x;
  player.y = rowGroup.get(playerLastMove).y
  
}

if(computer.isTouching(up2)){
  
  compLastMove = 24
  computer.x = rowGroup.get(compLastMove).x;
  computer.y = rowGroup.get(compLastMove).y
  
}
if(player.isTouching(up3)){
  
  playerLastMove = 9
  player.x = rowGroup.get(playerLastMove).x;
  player.y = rowGroup.get(playerLastMove).y
  
}

if(computer.isTouching(up3)){
  
  compLastMove = 9
  computer.x = rowGroup.get(compLastMove).x;
  computer.y = rowGroup.get(compLastMove).y
  
}

if(player.isTouching(down3)){
  
  playerLastMove = 97
  player.x = rowGroup.get(playerLastMove).x;
  player.y = rowGroup.get(playerLastMove).y
  
}

if(computer.isTouching(down3)){
  
  compLastMove = 97
  computer.x = rowGroup.get(compLastMove).x;
  computer.y = rowGroup.get(compLastMove).y
  
}

if(player.isTouching(down2)){
  
  playerLastMove = 74
  player.x = rowGroup.get(playerLastMove).x;
  player.y = rowGroup.get(playerLastMove).y
  
}

if(computer.isTouching(down2)){
  
  compLastMove = 74
  computer.x = rowGroup.get(compLastMove).x;
  computer.y = rowGroup.get(compLastMove).y
  
}

if(player.isTouching(down1)){
  
  playerLastMove = 13
  player.x = rowGroup.get(playerLastMove).x;
  player.y = rowGroup.get(playerLastMove).y
  
}

if(computer.isTouching(down1)){
  
  compLastMove = 13
  computer.x = rowGroup.get(compLastMove).x;
  computer.y = rowGroup.get(compLastMove).y
  
}

if(player.isTouching(up4)){
  
  playerLastMove = 47
  player.x = rowGroup.get(playerLastMove).x;
  player.y = rowGroup.get(playerLastMove).y
  
}

if(computer.isTouching(up4)){
  
  compLastMove = 47
  computer.x = rowGroup.get(compLastMove).x;
  computer.y = rowGroup.get(compLastMove).y
  
}
if(player.isTouching(up5)){
  
  playerLastMove =21
  player.x = rowGroup.get(playerLastMove).x;
  player.y = rowGroup.get(playerLastMove).y
  
}

if(computer.isTouching(up5)){
  
  compLastMove = 21
  computer.x = rowGroup.get(compLastMove).x;
  computer.y = rowGroup.get(compLastMove).y
  
}
if(player.x === computer.x && player.y === computer.y){
  player.x +=4;
  computer.x -=4;
}
//console.log("compLastMove"+compLastMove)
//console.log("playerLastMove"+playerLastMove)

if(compLastMove ===0){
  console.log("COMPUTER WIN")
  fill("blue")
  textSize(20)
  text("YOU LOSE", 200,200)
}
if(playerLastMove ===0){
  console.log("PLAYER WIN")
  fill("blue")
  textSize(20)
  text("YOU WIN", 200,200)
}
}

function throwDice(){
  
  //playSound("sound://category_board_games/dice_shuffle.mp3")
  gameState = "dontShow"
  dice_sound.play();
  //console.log("throwDice")
  diceThrown = true;
  var rot = 10;
  rand = Math.round(random(1,6))
  //dice.setAnimation("dice"+rand)
  switch(rand){
    case 1 : dice.addImage(dice1);
    break;
    case 2 : dice.addImage(dice2);
    break;
    case 3 : dice.addImage(dice3);
    break;
    case 4 : dice.addImage(dice4);
    break;
    case 5 : dice.addImage(dice5);
    break;
    case 6 : dice.addImage(dice6);
    break;
  }
  dice.visible = true;
  dice.scale = 0.5
  while(rot>0){
  dice.rotation = dice.rotation +rot;
  dice.rotateToDirection
  rot--
  }
}
function playerCalculateAndMove(){
  
  //console.log("player dice = "+rand);
  //console.log("player before chance is " +playerLastMove)
  if(playerLastMove < 6 && playerLastMove< rand){
   // console.log("PLAYER CANT MOVE")
  }
  else{
  playerLastMove -= rand;
  //console.log("player after turn" +playerLastMove)
  player.x = rowGroup.get(playerLastMove).x
  player.y = rowGroup.get(playerLastMove).y
  //console.log([player.x,player.y]);
  }
    diceThrown = false;
   setTimeout(computerTurnAuto,4000);
    
}

function computerTurnAuto(){
  //console.log("computerTurnAuto");
  if(!diceThrown){
    dice.visible = false;
    text("Computer's turn",180,180)
     throwDice();
     computerMove();
  }

}
function computerMove(){
  
 // console.log("computer dice = "+rand);
  //console.log("computer before turn is " +compLastMove)
   
  if(compLastMove < 6 && compLastMove< rand){
    console.log("COMPUTER CANT MOVE")
  }
  else{
    compLastMove -= rand;
    console.log("computer after turn is " +compLastMove)
    computer.x = rowGroup.get(compLastMove).x
    computer.y = rowGroup.get(compLastMove).y
    console.log([computer.x,computer.y]);
  }
    
    diceThrown = false;
}