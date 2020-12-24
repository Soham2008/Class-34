class Rope{
    constructor(bodyA,pointB){
        var options ={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            length:300
        }
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(myWorld,this.rope)
    }

    display(){
        var pointA = this.rope.bodyA.position
        var pointB = this.pointB
        
        push();
        strokeWeight(3)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop();
    }
}