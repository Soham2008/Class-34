const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var ground;

function setup() {
    createCanvas(1200, 600)

    myEngine = Engine.create();
    myWorld = myEngine.world;

    ground = new Ground(600,580,1200,20)

    box1 = new Box(700,530,70,70)
    box2 = new Box(770,530,70,70)
    box3 = new Box(840,530,70,70)
    box4 = new Box(910,530,70,70)
    box5 = new Box(700,460,70,70)
    box6 = new Box(770,460,70,70)
    box7 = new Box(840,460,70,70)
    box8 = new Box(910,460,70,70)
    box9 = new Box(700,390,70,70)
    box10 = new Box(770,390,70,70)
    box11 = new Box(840,390,70,70)
    box12 = new Box(910,390,70,70)
    box13 = new Box(700,320,70,70)
    box14 = new Box(770,320,70,70)
    box15 = new Box(840,320,70,70)
    box16 = new Box(910,320,70,70)
    box17 = new Box(700,250,70,70)
    box18 = new Box(770,250,70,70)
    box19 = new Box(840,250,70,70)
    box20 = new Box(910,250,70,70)

    ball = new Ball(500,500,80,80)

    roof = new Ground(500,50,200,20)

    rope = new Rope(ball.body,{x:500,y:50})
}


function draw() {
    background(180)
    Engine.update(myEngine);

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();

    ball.display();

    roof.display();

    rope.display();
}


function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}