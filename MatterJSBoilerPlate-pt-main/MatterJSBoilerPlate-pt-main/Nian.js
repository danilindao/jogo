class Cat {
    constructor(x,y){
        var options = {
            isStatic: true,
            restitution:0.4,
        }
        
        this.Nian = Bodies.rectangle(x,y,20,50,options);
        this.radius = 50;
        World.add(world, this.Nian)
        
    }

    display(){
        var pos = this.Nian.position;
        stroke("white")
        fill("white")
        rectMode(CENTER);
        rect(pos.x,pos.y,40,60);
    }
}
