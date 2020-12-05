class paper {
    constructor(x, y, r) {
        var paper_options={
   
            restitution:0.3, 
            friction:0.5, 
            density:1.2

        
          }
        
          this.body= Bodies.circle(x,y,r,paper_options);
          World.add(myworld,this.body);

this.w= r;
this.h= r;

    }

    display() {
        fill("pink");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.w, this.h);
    }
}