const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1,box2, ground1
function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    
    var ball_options ={
        restitution : 1
        
    }
ball = Bodies.circle(400, 200,20, ball_options)

     World.add(world,ball);
     console.log(ground1);
box1 = new Box(150,250,60,60);
box2 = new Box(175,100,70,100);
ground1= new Ground(400,390,800,20 )
}

function draw(){
    background(0);
    Engine.update(engine);
    ellipseMode(RADIUS)
    
    ellipse(ball.position.x,ball.position.y,20);
box1.display();
box2.display();
ground1.display();

box1.debug = true

}
