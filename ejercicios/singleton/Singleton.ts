class Singleton {
    private static instance: Singleton;

    private constructor() {
        // Puede inicializar de los atributos de la clase
    }

    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }
}

export default Singleton;