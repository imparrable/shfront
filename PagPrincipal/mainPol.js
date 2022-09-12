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
fetch("https://4le956zpa7.execute-api.us-west-2.amazonaws.com/sh-api1/services?city="+ciudadUrl)
  .then((data) => data.json())
  .then((services) => createCards(services));

function createCards(services) {
  const container = document.querySelector(".card-area");
  services.forEach((service) => {
    container.innerHTML += ` 

        <div class="card-section" style="width:160px">
                <div class="cardPol">
                    
                    <div class="card-front" id="${id_carta}">
                            <div class="card-front-text">
                               <h2 class="card-front__heading">
                                ${service.name}
                                </h2>
                            </div>
                            <div class="callButton">
                                    <button type="button" class="buttonPhone">
                                    <a href="tel:${service.telephone}"><img src="./iconos/llamada-telefonica.png" height="51px" width="50px"></a>
                                    </button>
                            </div>
                    </div>
                    <div class="card-back">
                        <p>loremloremlorem
                        loremloremlorem
                        loremloremlorem
                        </p>

                      </button>
                    </div>
                </div>           
        </div>
            `
            
  });
}
