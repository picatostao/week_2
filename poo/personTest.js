let myLib= require("./person")
let myLib2= require("./contacts")


let persona=new myLib.Persons("Andres","perez",1995,100,180,["esgrima","acupuntura","dialogar"])
console.log(persona)

console.log(persona.printAll())
console.log(persona.printPersons)