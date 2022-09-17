
var ciudadUrl = document.getElementById("resultado").value;
var codnUrl = document.getElementById("punto").value;
var id_carta = 0;
console.log(ciudadUrl+" -- "+codnUrl);
let cambioweb1 = document.getElementById("mascerca");
let cambioweb2 = document.getElementById("contact");
ciudadUrl = "barcelona";
//formulario.setAttribute('action', 'ventas/registrar_compra') (EJEMPLO)


//un evento para cada boton, actuando como un "a" pero es un formulario para pasar info
// cambioweb1.addEventListener("click", () => {
//   document.getElementById("resultado").value = ciudadUrl;
//   document.getElementById("punto").value = codnUrl;
//   document.getElementById("form2").setAttribute('action', '../MasCercano/index.html');
//   document.getElementById("form2").submit();
//   alert("coordenada: "+codnUrl);
// });

// cambioweb2.addEventListener("click", () => {
//   document.getElementById("resultado").value = ciudadUrl;
//   document.getElementById("punto").value = codnUrl;
//   document.getElementById("form2").setAttribute('action', '../Contacto/index.html');
//   document.getElementById("form2").submit();
// });
//generacion del HTML
fetch(("https://euvgxet430.execute-api.eu-west-3.amazonaws.com/services?city="+ciudadUrl+"&category=Salud"))
  .then((data) => data.json())
  .then((services) => showServices(services));

function showServices(services) {
  var container = document.querySelector(".desplegable");
         services.forEach((service) => {
    container.innerHTML += ` 
        <div class="links">
        ${service.name}
        <div class="callButton">
        <button type="button" class="buttonPhone">
         <a href="tel:${service.telephone}"><img src="./iconos/telefono.png" height="41px" width="40px"></a>
        </button>
         </a>
       </div>`;
      });
      container.innerHTML += "<div class='links'><strong>Los más cercanos</strong><div class='callButton'><button type='button' class='buttonPhone'><a href='../MasCercano/index.html?servicio=salud&latlng="+codnUrl+"'><img src='../MasCercano/map-marker.png' height='41px' width='40px'></a></button></a></div></div>";
    }
    fetch("https://euvgxet430.execute-api.eu-west-3.amazonaws.com/services?city="+ciudadUrl+"&category=Seguridad")

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
                  <a href="tel:${service.telephone}"><img src="./iconos/telefono.png" height="41px" width="40px"></a>
                 </button>
                  </a>
                </div>`;        
       });
       container2.innerHTML += "<div class='links2'><strong>Los más cercanos</strong><div class='callButton'><button type='button' class='buttonPhone2'><a href='../MasCercano/index.html?servicio=seguridad&latlng="+codnUrl+"'><img src='../MasCercano/map-marker.png' height='41px' width='40px'></a></button></a></div></div>";
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
                  <a href="tel:${service.telephone}"><img src="./iconos/telefono.png" height="41px" width="40px"></a>
                 </button>
                  </a>
                </div>`;        
       });
       container3.innerHTML += "<div class='links3'><strong>Los más cercanos</strong><div class='callButton'><button type='button' class='buttonPhone3'><a href='../MasCercano/index.html?servicio=reparaciones&latlng="+codnUrl+"'><img src='../MasCercano/map-marker.png' height='41px' width='40px'></a></button></a></div></div>";
    }
      fetch("https://euvgxet430.execute-api.eu-west-3.amazonaws.com/services?city="+ciudadUrl+"&category=Mascotas")

    .then((data) => data.json())
    .then((services) => showServices4(services));
     function showServices4(services) {
      var container4 = document.querySelector(".desplegable4");
      services.forEach((service) => {
       container4.innerHTML += ` 
           <div class="links4">
           ${service.name}
           <div class="callButton">
           <button type="button" class="buttonPhone4">
            <a href="tel:${service.telephone}"><img src="./iconos/telefono.png" height="41px" width="40px"></a>
           </button>
            </a>
          </div>`;   
 });
 container4.innerHTML += "<div class='links4'><strong>Los más cercanos</strong><div class='callButton'><button type='button' class='buttonPhone4'><a href='../MasCercano/index.html?servicio=mascotas&latlng="+codnUrl+"'><img src='../MasCercano/map-marker.png' height='41px' width='40px'></a></button></a></div></div>";
}
