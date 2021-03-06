const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var getBackgroundImg
var bg ;

function preload() {
    getBackgroundImg( )
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg) {
        background(backgroundImg)
    }
    Engine .update(engine) 

    // write code to display time in correct format here


}

async function getBackgroundImg(){
var respond = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
var responseJSON = await response.json();

var datetime = responseJSON.datetime;
var hour = datetime.slice(11,13);

if(hour>=04 && hour<=06){
    bg = "sunrise1.png";
}
else if (hour>=06 && hour<=08) {
    bg = "sunrise2.png";
}
else if (hour>=2300 && hour<=0) {
    bg = "sunrise10.png";
}else if (hour>=0600 && hour<=1200) {
    bg = "sunrise2.png";
}else if (hour>=0 && hour<=3) {
    bg = "sunrise11.png";
}else   {
    bg = "sunrise12.png";



backgroundImg = loadImage(bg);
console.log(backgroundImg);


  
