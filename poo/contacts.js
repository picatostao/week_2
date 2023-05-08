let myLib= require("./person")

class Contacts{
    constructor(){
        this.ArrayPerson=[]
    }
    printPersons(){
        console.log(this.ArrayPerson)
    }
}
module.exports={Contacts}


