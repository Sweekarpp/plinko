  class Particle {
      constructor(x,y) {
        var options = {
          restitution:0.4
        }
        this.r = r;


        this.body = Bodies.circle(x,y,10,options);
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("white");
        ellipseMODE(RADIUS);
        ellipse(pos.x, pos.y,10,10);
      }
    };
