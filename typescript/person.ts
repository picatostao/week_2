
export class Person{
    constructor(public name:string,public age:number, private adress:string){
        
    }
    public printName():string{
        return this.name
    }
    public yearOfBirth(currentYear:number):number{
        return currentYear-this.age
    }
    public setAddress(newadress:string):void{
        this.adress=newadress
    }
    public getAdress():string{
        return this.adress
    } 
}
    