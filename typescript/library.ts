import{Book}from"./book"

export class Library{
    ///cons///
    constructor(private books:Array<any>, private adress:string, private manager:string){
    }
    ////met///
    public getAdress(){
        return this.adress
    }
    public getManager(){
        return this.manager
    }
    public setAdress(adress:string):void{
        this.adress
    }
    public setManager(manager:string):void{

    }
    public toString():string{
        let libreria = ""
        for (let i= 0; i<this.books.length; i++){
        libreria = libreria + "book" + i +":\n" + this.books[i]
        }
        return libreria
    }
    public getNumberOfBooks():number{
        let cantidadLibros=0
        for (let i = 0; i<this.books.length; i++){
          cantidadLibros = this.books.length
        }
        return cantidadLibros
    }
    public findByAutor(autor:string): Book[] {
        let autor2: Book[]=[];
        for (let i =0; i < this.books.length; i++){
            if (this.books[i].getAutor() == autor){
            autor2.push(this.books[i])
            }
        }
        return autor2
    }

}