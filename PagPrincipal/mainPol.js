var id_carta = 0;

//MODAL

//generacion del HTML
async function Comienzo() {
  await navigator.geolocation.getCurrentPosition(geoposOK);
  function geoposOK(pos){
    //Obtenemos latitud y longitud
    const lat = pos.coords.latitude;
    const long = pos.coords.longitude;
    ciudad_actual(lat, long);
  }
  function ciudad_actual(cdn1, cdn2) {
    var obtenido;
    var urlinfo = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${cdn1},${cdn2}&key=${KEY}`;
    fetch(urlinfo)
      .then(response => response.json())
        .then(data => {
              let parts = data.results[0].address_components;
              parts.forEach(element => {
                  if(element.types.includes("locality")){
                      //codificamos la respuesta por problemas con los espacios y apostrofes para nuestra api:
                      city_result = element.long_name.replaceAll(" ","").replaceAll("L'","L");
                      console.log("resultado 1: "+city_result);
                      obtenido = city_result;
                      funcion_creada(obtenido);
                  }
                });
            });
  }

}

async function funcion_creada(ciudadUrl){
fetch(("https://euvgxet430.execute-api.eu-west-3.amazonaws.com/services?city="+ciudadUrl+"&category=Salud"))
  .then((data) => data.json())
  .then((services) => showServices(services));
  // console.log("resultado2: "+ciudadUrl);
  function showServices(services) {
    var container = document.querySelector(".desplegable");
    services.forEach((service, index) => {
      container.innerHTML += ` 
      <div class="links">
          ${service.name}
          <div class="callButton">
          <button type="button" class="buttonPhone">
          <a href="tel:${service.telephone}"><img src="./iconos/Nopresenciales.png" height="41px" width="40px"></a>
          </button>
          </a>
        </div>


        <div class="btn-group2">
        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"><img src="./iconos/boton-de-informacion.png" style="width:30px"; "height:30px"><span
                class="caret"></span>
        </button>
        <ul class="dropdown-menu" role="menu" style="position: relative">
            <li><a class ="prueba" style="color:black;">${service["info"]}</a></li>
        </ul></div>
    </div>
</div>
        
      

        `;
    });
    container.innerHTML += "<div class='links'><strong>Los más cercanos</strong><div ><button type='button' class='gps'><a href='../MasCercano/index.html?servicio=hospital'><img src='../MasCercano/map-marker.png' height='41px' width='40px'></a></button></a></div></div>";
  }
  fetch("https://euvgxet430.execute-api.eu-west-3.amazonaws.com/services?city=" + ciudadUrl + "&category=Seguridad")

    .then((data) => data.json())
    .then((services) => showServices2(services));


    function showServices2(services) {
      var container2 = document.querySelector(".desplegable2");
      services.forEach((service) => {
        container2.innerHTML += `
        <div class="links2">
        ${service.name}
        <div class="callButton">
        <button type="button" class="buttonPhone2">
        <a href="tel:${service.telephone}"><img src="./iconos/Nopresenciales.png" height="41px" width="40px"></a>
        </button>
        </a>
      </div>

      <div class="btn-group2">
      <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"><img src="./iconos/boton-de-informacion.png" style="width:30px"; "height:30px"><span
              class="caret"></span>
      </button>
      <ul class="dropdown-menu" role="menu" style="position: relative">
          <li><a class ="prueba" style="color:black;">${service["info"]}</a></li>
      </ul></div>
  </div>
</div>
        `;

    });
    container2.innerHTML += "<div class='links2'><strong class='strong2'>Los más cercanos</strong><div><button class='gps'type='button'><a href='../MasCercano/index.html?servicio=police'><img src='../MasCercano/map-marker.png' height='41px' width='40px'></a></button></a></div></div>";
  }
  fetch("https://euvgxet430.execute-api.eu-west-3.amazonaws.com/services?city="+ciudadUrl+"&category=Reparaciones")

    .then((data) => data.json())
    .then((services) => showServices3(services));

  function showServices3(services) {
    var container3 = document.querySelector(".desplegable3");
    services.forEach((service) => {
      container3.innerHTML += ` 
                <div class="links3">
                  ${service.name}
                  <div class="callButton">
                  <button type="button" class="buttonPhone3">
                    <a href="tel:${service.telephone}"><img src="./iconos/Nopresenciales.png" height="41px" width="40px"></a>
                  </button>
                    </a>
                  </div>
                  `;
    });
    container3.innerHTML += "<div class='links3'><strong>Los más cercanos</strong class='strong2'><div><button type='button' class='gps2'><a href='../MasCercano/index.html?servicio=locksmith'><img src='../MasCercano/map-marker.png' height='41px' width='40px'></a></button></a></div></div>";
  }
  fetch("https://euvgxet430.execute-api.eu-west-3.amazonaws.com/services?city="+ciudadUrl+"&category=Mascotas")

    .then((data) => data.json())
    .then((services) => showServices4(services));
  function showServices4(services) {
    var index = 0;
    var container4 = document.querySelector(".desplegable4");
    services.forEach((service) => {
      container4.innerHTML += ` 
            <div class="links4">
            ${service.name}
            <div class="callButton">
            <button type="button" class="buttonPhone4">
              <a href="tel:${service.telephone}"><img src="./iconos/Nopresenciales.png" height="41px" width="40px"></a>
            </button>
              </a>
            </div>

          `;

    });
    container4.innerHTML += "<div class='links4'><strong>Los más cercanos</strongclass='strong2'><div><button type='button' class='gps2'><a href='../MasCercano/index.html?servicio=veterinary_care'><img src='../MasCercano/map-marker.png' height='41px' width='40px'></a></button></a></div></div>";
  }
}
