class chain{
    constructor(bodyA,pointB){
    var options={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.03,
    length:20
    }

    this.pointB=pointB
    this.chain= Constraint.create(options)
    World.add(world,this.chain)
    }

  attach(body){
  this.chain.bodyA= body
 }

    display(){
    if (this.chain.bodyA){
    push()
    var pA=this.chain.bodyA.position
    var pB=this.pointB
    stroke("black")
    strokeWeight(4)
    line(pA.x,pA.y,pB.x,pB.y)
    pop()
    }
    }
    
    fly(){
        this.chain.bodyA=null
         }
     }
    