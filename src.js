//const fetch = require("node-fetch");
async function nombreGasMin(){
//make a fecht request to the api
let response = await fetch("https://misiontic2022upb.vercel.app/api/emission-measurement/ranges-parameters");

let gases = await response.json();

let numenor = 0;
let posicion = 0;
for (let step = 0; step < gases.length; step++) {
    // Se ejecuta 5 veces, con valores del paso 0 al 4.
    if(gases[step]["hasta"] <= numenor){
        numenor = gases[step]["hasta"];
        posicion = step;
    }
    if(step == 0){
        numenor = gases[step]["hasta"];
    }
    //console.log(gases[step]);

  }
console.log(gases[posicion]["etiqueta"]);
//let referenciaGas = JSON.stringify(gases[posicion]["etiqueta"]);
//console.log(referenciaGas);
//console.log(numenor);
//console.log("esta es la posicion "+posicion);
//console.log("el nombre del gas menor es :"+ gases[posicion]);
return gases[posicion]["etiqueta"];
}
//nombreGasmin();
module.exports.nombreGasMin = nombreGasMin;