class Persons{
    constructor(name, surname, year, kg,cm, aficciones){
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
        return currentyear - this.anyoNacimiento;   
    }
    printAll(){
        console.log(`nombre - ${this.nombre}
        apellido - ${this.apellido}
        año nacimiento - ${this.anyoNacimiento}
        peso - ${this.peso}
        altura - ${this.altura}
        imc- ${this.imc}
        edad - ${this.edad}
        aficciones - ${this.hobbies}`);
    }
    printHobbies(){
        console.log(this.hobbies)
    }
}
module.exports={Persons}


