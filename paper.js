class Paper {
    constructor(x,y) {
      var options = {
        isStatic:false,
        restitution:0.3,
        friction:0.6,
        density:1.2
      }
      this.body = Bodies.circle(x,y,30,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("yellow");
     ellipse(pos.x,pos.y,30,30);
    }
 
  } 
 