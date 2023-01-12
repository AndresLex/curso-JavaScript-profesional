// console.log("Hola Mundo");

// function add(a: number, b: number): number {
//     return a + b;
// }

// const suma = add(6,5);

// console.log(`${suma}`);

// Tipos de Datos
// Boolean 

let muted: boolean = true;
muted = false;
// muted = "String"; // Esto genera un error de tipado

// Numeros
let age = "6";
let ageN = 6;
let numerador: number = 45;
let denominador: number = ageN // = age; esto da error de tipado ya que se declaro como number no recibe strings
let resultado = numerador / denominador;

// String
let nombre: string = "Ricki";
let saludo = `Hola, me llamo ${nombre}`;// Aunque no se añade tipado se sabe que es un string

// Arreglos => En TypeScript los arreglos se puede decidir si se quiere que todos los datos sean de un solo tipo
// o que sean totalmente diversos o que sea una notacion ya decidida que se halla especificado 

let list: number[] = [1, 2, 3];
//list.push("Andres"); // Da error ya que es un arreglo de numbers

let people: string[] = [];// => este es un arreglo de string
people = ["Isabel", "Marina", "Nataly", "Jorge"];
//people.push(9000); // Añadir un numero al array declarado como string dara error

let stringAndNumber: Array< string | number > = [];
stringAndNumber.push("Andres");
stringAndNumber.push(9800);

// Enum => Conjunto de valores que son los que son es decir son definidos por el mismo usuario

//Si se inicializa uno se tiene que inicializar todos
enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul"
}

let colorFavorito: Color = Color.Rojo;
console.log(`Mi color favorito es el: ${colorFavorito}`);


// Aveces no se sabe que tipo de variable va ser una variable para ello esta el keyword: Any

//Any
// let commodin = "Joker";
// commodin = {type: "Wildcard"}; // da error porque primero se declaro como string y enseguida un object 

let commodin: any = "Joker";
commodin = {type: "Wildcard"}; // En cambio si se declara la variable como Any puede ser cualquier tipo de dato

// Object 
let someObject: object = {type: "Wildcard"}; // Para ser mas explicito al declarar una variable tipo object 



