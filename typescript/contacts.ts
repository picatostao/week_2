import{Person}from"./person"
let contacto:Person=new Person("Jaime",17,"calle calle 15")

export class Contacts{
    public pepole:Person[];
    /////constructor///
    constructor(){
        this.pepole=[];
    }
    //////metodos////
    public printCalendar(){
        for(let person of this.pepole)
        console.log(`Nombre: ${person.name}
        Edad:${person.age}
        Direccion: ${person.getAdress()}`)
    }
}