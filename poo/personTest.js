let myLib= require("./person")



let persona=new myLib.Persons("Andres","perez",1995,100,180,["esgrima","acupuntura","dialogar"])
console.log(persona)

console.log(persona.printAll())
console.log(persona.printHobbies())