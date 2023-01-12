console.log("FUNCIONES");

function add(a:number, b: number):number { // Se añade mas especifiacion 
    return a + b;
}

const sumar = add(4,6);// Muestra la informacion del tipo de dato que se envia como argumentos

// funcion creadora de sumas

function createAdder (a: number): (number) => number { // Se añade mas especifiacion al lo que va retornar la funcion 
    return function (b: number) { // que luego de ser invocada la segunda vez devuelve la suma con el segundo valor ingresado "b"
        return a + b;
    }
}

const addFour = createAdder(4); // La primera vez se almacena el argumento "a" de la suma
const fourAdd6 = addFour(6); // Al invocar por segunda vez devuelve el resultado de la suma


// A veces no todos los parametros son obligatorios son opcionales
// Con el signo de interrogacion "?" antes de los ":" hace que el argumento pueda ser tambien undefined

function fullName(firsName: string, lastName?: string): string {
    return `${firsName} ${lastName}`;
}

const ricky = fullName("Ricky");// Es posible no tener la informacion del apellido si no se pasa el segundo 
console.log(ricky);// pero si no se agrega un valor por defecto al parametro devuelve: Ricky undefined


// Pero se quiere tener un valor por omision
function fullNameDef(firsName: string, lastName: string = "Sin Apellido"): string {
    return `${firsName} ${lastName}`;
}

const morty = fullNameDef("Morty");
console.log(morty); // devuelve: Morty Sin Apellido
