class ground{
constructor (x,y,w,h){
var options={
isStatic:true,
restitution:0,
density:100,
friction:0
}

this.body=Bodies.rectangle(x,y,w,h,options)
    this.x=x
    this.y=y
   this.width=w
   this.height=h
World.add(world,this.body)

}

display(){
push()
fill("brown")
stroke("black")
strokeWeight(5)
rect(this.body.position.x, this.body.position.y,this.width,this.height)
pop()






}












}