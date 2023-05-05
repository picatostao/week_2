class person{
    constructor(name, surname, year, kg,cm)
    {
        this.nombre=name;
        this.apellido=surname;
        this.anyoNacimiento=year;
        this.peso= kg;
        this.altura= cm;
        this.imc=this.calcImc();
        this.edad=this.calcedad(2023);
        this.hobbies=["geologia","acupuntura","tiro con arco"];
    }
    calcImc(){                
        return this.peso/(this.altura*this.altura);
    }
    calcedad(){
        return currentyear - this.anyoNacimiento ;   
    }
    printAll(){
        return `${this.nombre}${"-"}${this.apellidos}${"-"}${this.anyoNacimiento}${"-"}${this.peso}${"-"}`
    }
    printHobbies(){
        return this.hobbies.length
    }
}
module.exports={person
}
