'use strict'

function RekenenWetOhm () {

    let voltage = document.getElementById("IDvoltage").valueAsNumber;
    let ampere = document.getElementById("IDampere").valueAsNumber;
    let ohm = document.getElementById("IDohm").valueAsNumber;



     switch(true) {
          case isNaN(voltage) : 
          let oplossing1 = (ampere * ohm)
          outputWetVanOhm.textContent = `Voltage (U) = ${oplossing1.toFixed(2)} V`;
          break;

          case isNaN(ampere) :
          let oplossing2 = (voltage / ohm)
          outputWetVanOhm.textContent = `Ampère (I) = ${oplossing2.toFixed(2)} A`;
          break;

          case isNaN(ohm) :
          let oplossing3 = (voltage / ampere)
          outputWetVanOhm.textContent = `Weerstand (R) = ${oplossing3.toFixed(2)} Ω`;
          break;
          default:
            outputWetVanOhm.textContent = `Voltage: ${voltage} V, Ampère: ${ampere} A, Weerstand: ${ohm} Ω`;
        
     };
};
