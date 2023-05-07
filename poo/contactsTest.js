let myLibb = require("./contacts")
const { Persons } = require("./person")
let contacto=new myLibb.Contacts()

let juango=new Persons ("juango", "fernandes", 1989,100,120,["juangear","hacer juangerradas","juangosoñar"])
let juanga=new Persons ("juanga", "fernandes", 1989,100,120,["juangear","hacer juangerradas","juangosoñar"])
contacto.ArrayPerson=[juango,juanga]
console.log(contacto.printPersons())