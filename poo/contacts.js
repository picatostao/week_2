let myLib= require("./person")

class Contact{
    constructor(){
        this.ArrayPerson=[]
    }
    printPersons(){
        return this.ArrayPerson
    }
}
module.exports=Contact
let contacto=new Contact()

