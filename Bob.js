class Bob{
    constructor(x,y,r){
       var options = {
            restitution:0.3,
            friction:0.5,
            density:1.2,
            isStatic:true
        }
        this.image = loadImage("paper.png");
        this.r = r;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x, this.y, (this.r-20)/2, options);
      
      World.add(world, this.body);
    }

    display(){
     var pos =this.body.position;
     push();
     translate(pos.x,pos.y);
     rectMode(CENTER);
     strokeWeight(4);
      stroke("black");
      fill("blue");
      ellipse(0, 0, this.r);
      pop();
    }
}