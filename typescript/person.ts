
export class Person{
    constructor(public name:string,public age:number, private adress:string){
        
    }
    public printName():string{
        return this.name
    }
    public yearOfBirth(currentYear:number):number{
        return currentYear-this.age
    }
    public setAddress(adress:string):any{
        return this.adress
    }
    public getAdress():string{
        return this.adress
    } 
}
    