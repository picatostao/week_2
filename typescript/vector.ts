export class Vector{
    /////constructor/////
    private elements:Array<number>
    constructor(x:number, y:number){
        this.elements=[]
        for (let i=0 ;i<x;i++){
            this.elements.push(Math.floor(Math.random()*y))
        }
    }
    public print(){
        return this.elements
            }    
            
     
    public add(v1:Vector){
        let result= new Vector(this.elements.length,0)
        for(let i=0; i<this.elements.length;i++){
            result.elements[i]=this.elements[i]+v1.elements[i]
        }
        return result
    }
            


    public subs(v1:Vector){
        let result= new Vector(this.elements.length,0)
        for(let i=0; i<this.elements.length;i++){
            result.elements[i]=this.elements[i]-v1.elements[i]
        }
        return result
    }


    public muly(v1:Vector){
        let result= new Vector(this.elements.length,0)
        for(let i=0; i<this.elements.length;i++){
            result.elements[i]=this.elements[i]*v1.elements[i]
        }
        return result
    }

    public multNumber(n:number):Vector{
        let result=new Vector(this.elements.length,0)
        for(let i=0; i<this.elements.length;i++){
            result.elements[i]=this.elements[i]*n
        }
        return result
    }
}
