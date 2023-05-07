let myLib= require("./person")

class Contacts{
    constructor(){
        this.ArrayPerson=[]
    }
    printPersons(){
        return this.ArrayPerson
    }
}
module.exports={Contacts}


