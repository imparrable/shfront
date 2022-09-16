
let Url = (new URL(document.location)).searchParams;
const ciudadUrl = Url.get("city");
const codnUrl = Url.get("latlng");
var id_carta = 0;
console.log(ciudadUrl+" -- "+codnUrl);
let cambioweb1 = document.getElementById("mascerca");
let cambioweb2 = document.getElementById("contact");
//formulario.setAttribute('action', 'ventas/registrar_compra') (EJEMPLO)


//un evento para cada boton, actuando como un "a" pero es un formulario para pasar info
cambioweb1.addEventListener("click", () => {
  document.getElementById("resultado").value = ciudadUrl;
  document.getElementById("punto").value = codnUrl;
  document.getElementById("form2").setAttribute('action', '../MasCercano/index.html');
  document.getElementById("form2").submit();
  alert("coordenada: "+codnUrl);
});

cambioweb2.addEventListener("click", () => {
  document.getElementById("resultado").value = ciudadUrl;
  document.getElementById("punto").value = codnUrl;
  document.getElementById("form2").setAttribute('action', '../Contacto/index.html');
  document.getElementById("form2").submit();
});
//generacion del HTML
//generacion del HTML
fetch("https://4le956zpa7.execute-api.us-west-2.amazonaws.com/sh-api1/services?city="+ciudadUrl+"&category=Salud")
  .then((data) => data.json())
  .then((services) => showServices(services));

function showServices(services) {
  const container = document.querySelector(".desplegable");
         services.forEach((service) => {
    container.innerHTML += ` 
        <div class="links">
        ${service.name}
        <div class="callButton">
        <button type="button" class="buttonPhone">
         <a href="tel:${service.telephone}"><img src="./iconos/telefono (1).png" height="41px" width="40px"></a>
        </button>
         </a>
       </div>
     </div>`;
      });
    }

     fetch("https://4le956zpa7.execute-api.us-west-2.amazonaws.com/sh-api1/services?city="+ciudadUrl+"&category=Seguridad")


  .then((data) => data.json())
  .then((services) => showServices2(services));

    function showServices2(services) {
    const container2 = document.querySelector(".desplegable2");
       services.forEach((service) => {
           container2.innerHTML += ` 
               <div class="links2">
                 ${service.name}
                 <div class="callButton">
                 <button type="button" class="buttonPhone2">
                  <a href="tel:${service.telephone}"><img src="./iconos/telefono (1).png" height="41px" width="40px"></a>
                 </button>
                  </a>
                </div>
              </div>`;        
       });
    }
    fetch("https://4le956zpa7.execute-api.us-west-2.amazonaws.com/sh-api1/services?city="+ciudadUrl+"&category=Reparaciones")

    .then((data) => data.json())
    .then((services) => showServices3(services));
       function showServices3(services) {
      services.forEach((service) => {
        const container3 = document.querySelector(".desplegable3");
         container3.innerHTML += ` 
             <div class="links3">
             ${service.name}
             <div class="callButton">
             <button type="button" class="buttonPhone3">
              <a href="tel:${service.telephone}"><img src="./iconos/telefono (1).png" height="41px" width="40px"></a>
             </button>
              </a>
            </div>
          </div>`; 
    });
  }
    fetch("https://4le956zpa7.execute-api.us-west-2.amazonaws.com/sh-api1/services?city="+ciudadUrl+"&category=Mascotas")

    .then((data) => data.json())

    .then((services) => showServices4(services));
     function showServices4(services) {
     services.forEach((service) => {
      const container4 = document.querySelector(".desplegable4");
       container4.innerHTML += ` 
           <div class="links4">
           ${service.name}
           <div class="callButton">
           <button type="button" class="buttonPhone4">
            <a href="tel:${service.telephone}"><img src="./iconos/telefono (1).png" height="41px" width="40px"></a>
           </button>
            </a>
          </div>
        </div>`;   
 });
}



