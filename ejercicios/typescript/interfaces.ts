console.log("INTERFACES");

// Interfaces => para declarar la forma que tiene un objeto 
// se declara: interface

interface Rectangulo { //Aqui se declara cada popiedad de la interface y se declara su tipo
    ancho: number, // Cuando se tiene una interface se vuelve un tipo de dato
    alto: number,
    color?: Color
}

function area(r: Rectangulo): number {
    return r.alto * r.ancho;
}

let rectan: Rectangulo = {
    ancho: 4,
    alto: 6,
    // color: Color.Rojo
}

const areaRect = area(rectan);
console.log(areaRect);

rectan.toString = function() {
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo de: ${areaRect}`;
}
console.log(rectan.toString());
