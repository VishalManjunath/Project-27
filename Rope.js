class Rope {
    constructor(body1, body2, offsetX, offsetY) {
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options= {
            bodyA:body1,
            bodyA:body2,
            pointb:{x:this.offsetX, y:this.offsetY}
        }
        //console.log(options);
        this.rope = Constraint.create(options);
        orld.add(world, this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(15);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}