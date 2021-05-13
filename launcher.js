class launcher{
  constructor(bodyA,pointB){
    var options={
bodyA:bodyA,
pointB:pointB,
length:10,
stiffness:0.07
    }
this.launcher=Constraint.create(options)
World.add(world,this.launcher)


  }
  fly(){
    this.launcher.bodyA=null;     
    }
    attach(bodyA){
    this.launcher.bodyA=bodyA;
    }
    
  display(){
    if(this.launcher.bodyA){
      var posA =this.launcher.bodyA.position;
      var posB =this.launcher.pointB;
      push();
      strokeWeight(5);
     line(posA.x,posA.y,posB.x,posB.y); 
      pop();
    
    }
  }

}