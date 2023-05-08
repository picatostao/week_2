import{Contacts}from"./contacts"
import { Person } from "./person"
let contactos:Contacts=new Contacts()
let jose:Person=new Person("Jaimy",17,"calle calle 15")
let josa:Person=new Person("Jaimu",17,"callo calle 15")
let joso:Person=new Person("Jaimk",17,"calli calle 15")
contactos.pepole=[jose,josa,joso]
console.log(contactos.printCalendar())
