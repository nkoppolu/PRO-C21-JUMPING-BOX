var canvas;
var music;
var block1, block2, block3, block4;
var box;
var edges;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block2 = createSprite(295,580,200,30);
    block3 = createSprite(515,580,200,30)
    block4 = createSprite(740,580,220,30);

    block1.shapeColor = rgb(0,0,255);
    block2.shapeColor = rgb(255, 128, 0);
    block3.shapeColor = rgb(153,0,76);
    block4.shapeColor = rgb(0,100,0);

    box = createSprite(random(20,750), 100, 40, 40);
    box.shapeColor = rgb (295,580,200,30)
    box.velocityX = 3;
    box.velocityY = 8;
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites();
box.bounceOff(edges);


if(block1.isTouching(box) && box.bounceOff(block1)){
    box.shapeColor = rgb(0,0,0);
    music.play();
}

if(block2.isTouching(box)){
    box.velocityX = 0;
    box.velocityY = 0;
    music.stop();
    box.shapeColor = rgb(255, 128, 0);
}


if(block3.isTouching(box) && box.bounceOff(block3)){
    box.shapeColor = rgb(153,0,76);
    music.play();
}

if(block4.isTouching(box) && box.bounceOff(block4)){
    box.shapeColor = rgb(0,100,0);
    music.play();
}


drawSprites();
    //add condition to check if box touching surface and make it box
}