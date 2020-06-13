class Paper {
constructor(x ,y ,diameter){
var options={
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2,
}
this.body= Bodies.circle(x,y,diameter,options);
this.diameter = diameter;

World.add(world,this.body)
}
display(){
var pos = this.body.position;
var ang = this.body.angle;
push()
    translate(pos.x, pos.y);
    angleMode(RADIANS);
    rotate(ang);
    rectMode(CENTER);
    fill(255,20,147);
    ellipse(0,0, this.diameter);
pop();
}
}