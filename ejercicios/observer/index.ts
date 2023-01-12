
interface Observer { // Se define un observer que necesita un metodo de actualizacion
    update: (data: any) => void;
}

// Se define la interface del subject que expone dos funciones
interface Subject {
    subscribe: (observer: Observer) => void;
    unsubscribe: (observer: Observer) => void;
}

//Se crea una clase que implementa la interface de subject recibe los cambios de precio y luego informa
class BitcoinPrice implements Subject {
    // Se define la lista de observadores como vacia
    observers: Observer[] = [];

    //En el constructor se obtiene una referencia al elemento
    constructor() {
        const el: HTMLInputElement = document.querySelector('#value') as HTMLInputElement;
        //Cuando value cambie el valor se notifica quiere notificar a todos los observers
        el.addEventListener('input', () => {
            this.notify(el.value);
        })
    }

    subscribe (observer: Observer) {
        this.observers.push(observer);
    }
    
    //Recibe el observer que ya no sera parte de la lista de informacion es decir sacarlo de la lista
    unsubscribe (observer: Observer) {
        //Primero se encuentra en que indice del arreglo de observers se encuentra 
        //findIndex retorna el indice donde se encuentra el observer requerido
        const index = this.observers.findIndex(obs => {
            return obs === observer;
        });
        // splice es una funcion de arreglos donde el primer parametro es indice y luego apartir de ese indice
        // Cuantos elementos se quieren sacar
        this.observers.splice(index, 1);
    }

    // Cada vez que el precio cambie es bueno notificar a todos los suscriptores
    notify(data: any) {
        this.observers.forEach(observer => observer.update(data))
    }
}

// Clase que impementa al observer
class PriceDisplay implements Observer {
    private el: HTMLElement;

    constructor() {
        this.el = document.querySelector('#price') as HTMLElement;
    }
    
    // cada vez que se invoca update se cambia el valor del elemento "el"
    update(data: any) {
        this.el.innerText = data;
    }
}

const value = new BitcoinPrice();
const display = new PriceDisplay();

value.subscribe(display);

setTimeout(() => value.unsubscribe(display), 10000);