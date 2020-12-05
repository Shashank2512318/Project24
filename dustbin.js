class Dustbin{
              constructor(x, y) {
                 var rect_options={

                   isStatic:true

                 }

                this.bodyleft= Bodies.rectangle(x,y,20,100,rect_options);
                this.bodyright= Bodies.rectangle(x+200,y,20,100,rect_options);
                this.bodydown= Bodies.rectangle(x+100,y+50,220,20,rect_options);
                World.add(myworld,this.bodyleft);
                World.add(myworld,this.bodyright);
                World.add(myworld,this.bodydown);

              }






     display() {
        
      
      fill("red");
      noStroke();
      rectMode(CENTER);
        rect(this.bodyleft.position.x, this.bodyleft.position.y,
          20, 100);
          rect(this.bodyright.position.x, this.bodyright.position.y,
            20, 100);
            rect(this.bodydown.position.x, this.bodydown.position.y,
            220, 20);
        
     }  
}