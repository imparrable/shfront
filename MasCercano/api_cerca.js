const KEY = "AIzaSyA2TcYB46x8rio7ZG1ivFm5ah_fAzPjJik";
var mensaje = document.getElementById("modifica");

var servicio;
var urlcerca, lati, long;
var respuestas = 0;
//cordeLAT/cordeLng es para ubicacion del local y lati/long para la del usuario
var dir, nombre, cordeLat, cordeLng, estado, imprimir ="";


   async function servicio_elegido(service){
        servicio = service;
        navigator.geolocation.getCurrentPosition(aquiEstoy);
    }
    function aquiEstoy(resultado){
        // verificar si se guarda y no pide autorizacion a cada peticion, sino generar URLSearchParams
        // ACT: en teoría parece que no lo pide en servidor
        lati = resultado.coords.latitude;
        long = resultado.coords.longitude;
        console.log("Ubicación actual: "+lati+","+long);
        urlcerca = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+lati+","+long+"&radius=5000&type="+servicio+"&key="+KEY;
        ejecucion();
        }


async function ejecucion(){
    fetch(urlcerca).then(response => response.json()).then(data => {
    console.log(data.results);
    data.results.forEach(element => {
        //por defecto expulsa 20; limitamos a 8 con la variable respuestas.
        if(respuestas < 8){
            dir = element.vicinity;
            nombre = element.name;
            cordeLat = element.geometry.location.lat;
            cordeLng = element.geometry.location.lng;
            //valores asignados para pasarle a la clase MasCercano
            if(element.hasOwnProperty("opening_hours")){
                if(element.opening_hours.open_now) estado = "Abierto.";
                else estado = "Cerrado.";
            }
            else{
                estado = "Sin información.";
            }
            //instanciamos tras rellenar variables.
            
            var marcar = new MasCercano(dir, nombre, cordeLat, cordeLng, estado);
            //guardamos HTML en variable con cada servicio
            imprimir += "<a href='https://maps.google.com/?q="+cordeLat+","+cordeLng+"' target='_blank'><div>Nombre: "+marcar.nom+"| <br>Dirección: "+marcar.calle+"| <br>Estado: "+marcar.esta+"</div><div>--</div></a>";
            ++respuestas;
        }
    });
    imprimir += '<input type="button" value="Volver atrás" onClick="window.location.reload()">';
    //generamos voton para recargar página y imprimo contenido en pantalla
    mensaje.innerHTML = imprimir;
})}

    // creacion de la clase MasCercano para interactuar con la info recibida
    class MasCercano {
        constructor(lugar, nombre, cordeLa, cordeLn, estar){
            //constructor de la clase con las características principales
            this.direccion = lugar;
            this.nombre = nombre;
            this.lat = cordeLa;
            this.lng = cordeLn;
            this.esta = estar;
        }

        get posi(){
            //devuelve coordenadas en string
            return (this.lat+","+this.lng);
        }
        get nom(){
            //devuelve el nombre del establecimiento
            return this.nombre;
        }
        get calle(){
            //Devuelve direccion con formato
            return this.direccion;
        }
        
    }