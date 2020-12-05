class boy{
constructor (x,y){
    var options={
     isStatic:true
     

    }
    this.body=Bodies.rectangle(x,y,options)
    this.x=x
    this.y=y
   
this.image=loadImage("boy.png")



}
display(){
push()
translate(this.body.position.x, this.body.position.y)
imageMode(CENTER)
image(this.image,10,50,150,250)
pop()

}



}