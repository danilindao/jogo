class Ter {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.terra = Bodies.rectangle(x,y,50,20,options);
        this.radius = 50;
        World.add(world, this.terra)
        
    }

    display(){
        var pos = this.terra.position;
        stroke("brown")
        fill("brown")
        rectMode(CENTER);
        rect(pos.x,pos.y,windowWidth,165);
    }
}
