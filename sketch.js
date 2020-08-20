
var gameState = 0;
var playerCount;
var database;
var form,player,game;
var allPlayers;
var cars;
var car1;
var car2;
var car3;
var car4;
var distance = 0;
var car1img,car2img,car3img,car4img,track,bg;
function preload(){
    car1img=loadImage("../images/car1.png");
    car2img=loadImage("../images/car2.png");
    car3img=loadImage("../images/car3.png");
    car4img=loadImage("../images/car4.png");
    track=loadImage("../images/track.jpg");
    bg=loadImage("../images/ground.png");
}
function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    console.log(gameState);
}

function draw(){
    if(playerCount==4){
        game.update(1);
    }
    if(gameState==1){
      clear();
      game.play();
    }
    if(gameState==2){
        game.update(2);
    }
}
