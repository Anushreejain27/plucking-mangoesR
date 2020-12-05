class mango{
    constructor(x,y,r) {
        var options = {
            'restitution':0.5,
            'friction':0.2,
            'density':0.7,
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, this.r, options);
        this.image = loadImage("mango.png")
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        
        imageMode(CENTER);
        ellipseMode(CENTER);
          image(this.image, 0,0,60,60)
        pop();
      }
    }








