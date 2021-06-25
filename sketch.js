var canvas;
var music;
var player;
var box1, box2, box3, box4;
var edgeSprites;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    player = createSprite(random(20,750),300,40,40);
    player.shapeColor="cyan";

    box1 = createSprite(100,580,190,30);
    box1.shapeColor="yellow";

    box2 = createSprite(300,580,190,30);
    box2.shapeColor="red";

    box3 = createSprite(500,580,190,30);
    box3.shapeColor="blue";

    box4 = createSprite(700,580,190,30);
    box4.shapeColor="green";

}

function draw() {
    background(rgb("white"));
    edgeSprites = createEdgeSprites();

    player.x=mouseX;
    player.y=mouseY;

    if(player.isTouching(box1)){
        player.shapeColor="yellow";     
    }

    if(player.isTouching(box2)){
        player.shapeColor="red";
    }

    if(player.isTouching(box3)){
        player.shapeColor="blue";
    }

    if(player.isTouching(box4)){
        player.shapeColor="green";
    }



    drawSprites();
}
