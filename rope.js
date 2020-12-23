class Rope{
    constructor(bodyA,pointB){
        
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:.5,
            length:200
        }
        this.body=Constraint.create(options);
        this.pointB=pointB;
        World.add(world,this.body);
    }
    display(){
        if(this.body.bodyA){
        var pointA=this.body.bodyA.position;
        var pointB=this.pointB;
        strokeWeight (5);
        stroke("purple");
        line(pointB.x,pointB.y,pointA.x,pointA.y);
        }
    }
   
}