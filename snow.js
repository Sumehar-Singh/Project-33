class Snow
{
    constructor(x,y)
    {
        var options ={
            'density' : 0.5 ,
        }
        this.body = Bodies.rectangle(x, y, 80, 80, options);
        this.image = loadImage("snow5.webp");
        World.add(world, this.body);
    }

    update()
    {
        if(this.body.position.y > height+300)
        {
            Matter.Body.setPosition(this.body, {x:random(0,1200), y:random(-600,-100)})
        }
    }

    display()
    {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 80, 80);
        pop();
    }
}