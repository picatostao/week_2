class Persons{
    constructor(name, surname, year, kg,cm, aficciones )
    {
        this.nombre=name;
        this.apellido=surname;
        this.anyoNacimiento=year;
        this.peso= kg;
        this.altura= cm;
        this.imc=this.calcImc();
        this.edad=this.calcedad(2023);
        this.hobbies=aficciones;
    }
    calcImc(){                
        return this.peso/(this.altura*this.altura);
    }
    calcedad(currentyear){
        return currentyear - this.anyoNacimiento ;   
    }
    printAll(){
        return `${this.nombre}${"-"}${this.apellidos}${"-"}${this.anyoNacimiento}${"-"}${this.peso}${"-"}`
    }
    printHobbies(){
        return this.hobbies
    }
}
module.exports={Persons
}


let andres=new Persons("Andres","perez",1995,100,180,["esgrima","acupuntura","dialogar"])
console.log(andres)