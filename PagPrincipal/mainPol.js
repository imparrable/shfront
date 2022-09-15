var Url = new URL(window.location.href);
var ciudad = Url.search.replace("?", "").replace("=", "").replace("city", "");
// var id_carta = 0;
console.log(ciudad);
fetch("https://4le956zpa7.execute-api.us-west-2.amazonaws.com/sh-api1/services?city=Barcelona&category=Salud")

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
      fetch("https://4le956zpa7.execute-api.us-west-2.amazonaws.com/sh-api1/services?city=Barcelona&category=Seguridad")

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
    fetch("https://4le956zpa7.execute-api.us-west-2.amazonaws.com/sh-api1/services?city=Barcelona&category=Reparaciones")

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
    fetch("https://4le956zpa7.execute-api.us-west-2.amazonaws.com/sh-api1/services?city=Barcelona&category=Mascotas")

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

// document.getElementsByClassName("carta").addEventListener("mouseout",function(){
//     document.getElementById("MyElement").className += "volver";
//     document.getElementById().classList.add("volver");
// };) Comentado por si queremos cambiar la clase para girar con JS