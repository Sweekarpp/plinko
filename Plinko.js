  class Plinko {
      constructor(x,y,radius) {
        var options = {
            isStatic: true
        }
        this.r = radius;


        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        fill("white");
        ellipseMODE(RADIUS);
        ellipse(pos.x, pos.y, this.r,this.r);
      }
    };  
