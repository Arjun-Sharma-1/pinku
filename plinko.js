class Plinko {
    constructor (x,y,width,height){
        var options = {
            restitution:1,
            friction:0,
            isStactic:true
        }
       this.r = 10;
       this.body = Bodies.cricle(x, y, this.r, options);
        World.add(world,this.body);
    }
  display(){
      var pos = this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      noStroke();
      ellipseMode(RADIUS);
      fill("white");
     ellipse(0,0,this.r,this.r)
     pop();
  }
};
