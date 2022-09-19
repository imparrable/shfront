const KEY = "AIzaSyA2TcYB46x8rio7ZG1ivFm5ah_fAzPjJik";
var mensaje = document.getElementById("modifica");
let Url2 = (new URL(document.location)).searchParams;
const ciudadUrl2 = Url2.get("city");
const servicio = Url2.get("servicio");
var codnUrl2;

var urlcerca;
var respuestas = 0;
//cordeLAT/cordeLng es para ubicacion del local
var dir, nombre, cordeLat, cordeLng, estado, imprimir ="";


   async function servicio_elegido(){
        navigator.geolocation.getCurrentPosition(tomadatos);
        function tomadatos(pos){    
        codnUrl2 = pos.coords.latitude+","+pos.coords.longitude;
        urlcerca = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+codnUrl2+"&radius=5000&type="+servicio+"&key="+KEY;
        ejecucion();
        }
    }
    // function aquiEstoy(resultado){
    //     // verificar si se guarda y no pide autorizacion a cada peticion, sino generar URLSearchParams
    //     // ACT: en teoría parece que no lo pide en servidor
    //     lati = resultado.coords.latitude;
    //     long = resultado.coords.longitude;
    //     console.log("Ubicación actual: "+lati+","+long);
    //     urlcerca = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+lati+","+long+"&radius=5000&type="+servicio+"&key="+KEY;
    //     ejecucion();
    //     }COORDE SE COGE DE URL


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
            //imprimir += "<a href='https://maps.google.com/?q="+cordeLat+","+cordeLng+"' target='_blank'><div>Nombre: "+marcar.nom+"| <br>Dirección: "+marcar.calle+"| <br>Estado: "+marcar.esta+"</div><div>--</div></a>";
            imprimir += `<div class="row pepe" style="border:solid white 3px;"><div class="col-9">${marcar.nom} || <strong>${marcar.esta}</strong> </div><div class="col-3"><img src="map-marker.png" alt="Maps" onclick="AbreMaps(${cordeLat},${cordeLng})"></div></div>`;
            ++respuestas;
        }
    });
    imprimir += '<input type="button" value="recargar" class="btn btn-info" onClick="window.location.reload()">';
    //generamos voton para recargar página y imprimo contenido en pantalla
    mensaje.innerHTML = imprimir;
})}

    // creacion de la clase MasCercano para interactuar con la info recibida
    class MasCercano {
        constructor(lugar, nombre, cordeLa, cordeLn, estar){
            //constructor de la clase con las características principales
            this.direccion = lugar;
            this.nombre = nombre;
            this.latlng = cordeLa;
            this.lng = cordeLn;
            this.esta = estar;
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
    async function AbreMaps(latit,longit) { 
        var urlmapa = "https://maps.google.com/?q="+latit+","+longit;
        window.open(urlmapa, '_blank');
     }