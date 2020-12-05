class tree{
constructor (x,y){
    var options={
        isStatic:true
        
   
       }
       this.body=Bodies.rectangle(x,y,options)
       this.x=x
       this.y=y
      
   this.image=loadImage("tree.png")
   
   
   
   }
   display(){
   push()
   translate(this.body.position.x, this.body.position.y)
   imageMode(CENTER)
   image(this.image,10,50,370,590)
   pop()
   
   }














}















