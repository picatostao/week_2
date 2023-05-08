import { Book } from "./book"
import {Library} from "./library"

let libro1:Book = new Book("Introduccion a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions")
let libro2:Book = new Book("Biblia", 333, "2344434-BC23333", "DIOS", "DIOS.SL")
let libro3:Book = new Book("Coran", 800, "2344435-BC23333", "Mahoma", "Mahoma.SL")
let libro4:Book = new Book("Torah", 1000, "234446-BC23333", "Moises", "Moises.SL")
let mislibros = [libro1,libro2,libro3,libro4]
let stock:Library = new Library(mislibros, "mayor", "buda");

// console.log(stock.findByAutor("DIOS"))
// console.log(stock.getAdress())
// console.log(stock.getManager())
// console.log(stock.getNumberOfBooks())
console.log(stock.toString())
