const VERSION = "v1";

//self es como el this especifico para los service worker
//Se llama cuando se instala un service worker  
self.addEventListener('install', event => {
    //primero se crea un precache para almacenar lo que se quiere en cache y luego se le da una lista de recursos
    //Para esperar que el cache se complete esta la funcion waitUtil
    event.waitUntil(precache())
})

// Para que cada vez que corre una peticion se quiere que el service worker haga algo
self.addEventListener('fetch', event => {
//Primero se extrae la peticion que se encuentra en event.request
    const request = event.request;
    // solo se trabajara con solicitudes get
    if(request.method !== "GET"){
    // se entiende que el metodo de request no es get asi que no ara nada y va seguir normal
        return;
    }

    // buscar en el cache
    event.respondWith(cachedResponse(request));

    //Para actualizar el cache y que muestre las ultimas actualizaciones de los documentos o archivos añadidos como recursos en la cache
    event.waitUntil(updateCache(request));
})
//como es una promesa se declara la funcion como async
async function precache() {
    //Para trabajar con cache se trabaja con una API del DOM que se llama 
    // caches.open("v1") => cache especifico regresa instancia de cache que sera de version 1 se regresa una promesa por lo tanto es await
    const cache = await caches.open(VERSION);
    // Se agragan varios recursos al objeto cache
    //archivos que se han escrito lor recursos que se solicitan
    // el "/" es importante ya que las paginas se solicitan como / 
    // se retorna ya que es una promesa que espera waitUntil
    return cache.addAll([
        '/',
        '/index.html',
        '/assets/index.js',
        '/assets/MediaPlayer.js',
        '/plugins/AutoPlay.js',
        '/plugins/AutoPause.js',
        '/assets/index.css',
        '/assets/BigBuckBunny.mp4'
    ]);
}

async function cachedResponse(request) {
    //Se empieza abriendo el cache
    const cache = await caches.open(VERSION);
    //ahora se revisa si en el cache esta la contestacion del request 
    // Se pregunta al cache si ya tiene la copia que le corresponde al request si no regresa undefine
    const response = await cache.match(request);
    // como es posible que el response sea undefined se contesta con lo que da la red
    return response || fetch(request);
}

// Funcion para actualizar el contenido de la pagina
async function updateCache(request) {
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request, response);
}