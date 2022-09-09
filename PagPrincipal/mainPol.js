var Url = new URL(window.location.href);
var ciudad = Url.search.replace("?","").replace("=","").replace("city","");
var id_carta = 0;
console.log(ciudad);
fetch("http://smarthelp-env.eba-pxsfumkq.eu-west-3.elasticbeanstalk.com/services "+ciudad)

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
// document.getElementsByClassName("carta").addEventListener("mouseout",function(){
//     document.getElementById("MyElement").className += "volver";
//     document.getElementById().classList.add("volver");
// };) Comentado por si queremos cambiar la clase para girar con JS
