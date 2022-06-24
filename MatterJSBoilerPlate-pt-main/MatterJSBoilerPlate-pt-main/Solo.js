class Chao {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.chao = Bodies.rectangle(x,y,50,20,options);
        this.radius = 50;
        World.add(world, this.chao)
        
    }

    display(){
        var pos = this.chao.position;
        stroke("green")
        fill("green")
        rectMode(CENTER);
        rect(pos.x,pos.y,windowWidth,5);
    }
}
