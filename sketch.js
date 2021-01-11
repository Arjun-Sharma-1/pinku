const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var divisions = [];
var particle = [];
var plinko = [];
var ground;
var divisionHeight=200;
var score;




function setup() {
  createCanvas(400,600);
  engine=Engine.create();
  world=engine.world();
  score=0
  ground = new Ground (200,590,400,20);

  for(var d = 0;d<= innerWidth; d = d + 80){
    divisionHeight.push(new Division(d , height-divisionHeight/2,10,divisionHeight));

  }
 for (var j = 15; j <=innerWidth; j=j+50);
{
  plinkos.push(new Plinko(j,350));
}


}


function draw() {
  background(0); 
  Engine.update(engine);
  text ("score:"+score,300,50);
  ground.display();
  
  for(var d = 0; d < division.length; d++) {
    division[d].display();
    if(framecount%60===0){
      particle.push(new Particle(random(30,30),10,10));
    }
    for(var p = 0; p< particle.length; p++){
      particle[p].display();
      score=score+1;

    }
    for(var i = 0; i < plinko.length; i++){
      plinko[i].display();
    }
    
  }
}