export class Book{
    ///cons///
    constructor(private title:string, private nPages:number, private isbn:string, private author:string, private editorial:string){
               
    }
    ////met///
    public getTitulo():string{
        return this.title}
    public getNpaginas():number{
        return this.nPages
    }
    public getIsbn():string{
        return this.isbn
    }
    public getAutor():string{
        return this.author
    }
    public getEditorial():string{
        return this.editorial
    }
    public setTitulo(titulo:string):void{
        this.title=titulo
    }
        
    public setNpaginas(paginas:number):void{
        this.nPages=paginas
    }
    public setIsbn(gisbn:string):void{
        this.isbn=gisbn
    }
    public setautor(getAutor:string):void{
        this.author=getAutor
    }
    public tostring():string{
        
        return `Title - ${this.title}
        paginas - ${this.nPages}
        ISBN - ${this.isbn}
        Autor - ${this.author}
        Editorial - ${this.editorial}`

    }    
}