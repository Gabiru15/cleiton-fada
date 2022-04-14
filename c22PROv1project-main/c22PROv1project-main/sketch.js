var starImg,bgImg;
var star, starBody;
//criar variável para sprite de fada e imgFada
var fada, fadaImg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    fadaImg = loadImage ('images/fairyImage1.png')

    
    
}

function setup() {
    createCanvas(800, 750);

    
    
    fada = createSprite (100,500);
    fada.addImage (fadaImg)
    fada.scale = 0.2
   

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}

function draw(){
    background(bgImg);

    star.y = starBody.position.y;

    if(star.y > 470 && starBody.position.y > 470){
        Matter.Body.setStatic(starBody,true);
    }
    

    if(keyIsDown(DOWN_ARROW)){
        Matter.Body.setStatic(starBody, false);
    }

    if(keyDown("left")){
        fada.x -= 5;
    }
    if(keyDown("right")){
        fada.x += 5;
    }

    drawSprites();
}