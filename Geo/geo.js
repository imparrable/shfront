 var lat, long, urlinfo, city_result, serv;
 const KEY = "AIzaSyA2TcYB46x8rio7ZG1ivFm5ah_fAzPjJik";

 /** @param {GeolocationPosition} pos */
 //Ejecución correcta de la localización:
  function geoposOK(pos){
     //Obtenemos latitud y longitud
     lat = pos.coords.latitude;
     long = pos.coords.longitude;
     manda_info(lat,long);
     
 }

 /** @param {GeolocationPositionError} err */
 //Si hay error en localizarte:
function geoposKO(err) {
     console.warn(err.message);
     let msg;
     switch(err.code) {
         case err.PERMISSION_DENIED:
             msg = "No nos has dado permiso para obtener tu posición";
             break;
         case err.POSITION_UNAVAILABLE:
             msg = "Tu posición actual no está disponible";
             break;
          case err.TIMEOUT:
              msg = "No se ha podido obtener tu posición en un tiempo prudencial";
              break;
          default:
              msg = "Error desconocido";
              break;
     }
     alert(msg);
 }
//enviamos datos de coordenadas a maps:
function manda_info(latitude, longitude){
        urlinfo = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${KEY}`;
        fetch(urlinfo)
    .then(response => response.json())
    .then(data => {
        let parts = data.results[0].address_components;
        parts.forEach(element => {
            if(element.types.includes("locality")){
                //codificamos la respuesta por problemas con los espacios y apostrofes para nuestra api:
                city_result = element.long_name.replaceAll(" ","").replaceAll("L'","L");
                document.getElementById("resultado").value = city_result;
                document.getElementById("punto").value = lat+","+long;
                //rellenamos el formulario con el municipio y lo enviamos a nuestra api.
                //console log para verificar cuanto correcto es.
                console.log(city_result);
                //console.log para verificar lo que obtienen las variables y los cambios realizados.
                alert("Localizado Correctamente: "+element.long_name+".");
                document.getElementById("formulario1").submit();
            }
    });
});
}
//ejecutamos la funcion al click de permiso por parte del usuario:
//desde aquí comienza realmente ya que tienen el EVENTLISTENER.
document.getElementById("btn1").addEventListener("click", function(){
        navigator.geolocation.getCurrentPosition(geoposOK, geoposKO);
});

