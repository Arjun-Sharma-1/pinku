class Division {
    constructor (x,y,width,height){
        var options = {
            isStactic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width();
        this.height = height();
        World.add(world,this.body);
    }
  display(){
      var pos = this.body.position;
      rectMode(CENTRE);
      fill("white");
      rect(pos.x,pos.y,this.width,this.height);

  }
};
