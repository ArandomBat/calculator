'use strict'

function RekenenWetVermogen () {

    let vermogen = document.getElementById("IDVermogen_W").valueAsNumber;
    let voltage = document.getElementById("IDVermogen_V").valueAsNumber;
    let ampere = document.getElementById("IDVermogen_A").valueAsNumber;
    



     switch(true) {
          case isNaN(voltage) : 
          let oplossing1 = (vermogen / ampere)
          outputWetVanVermogen.textContent = `Voltage (U) = ${oplossing1.toFixed(2)} V`;
          break;

          case isNaN(ampere) :
          let oplossing2 = (vermogen / voltage)
          outputWetVanVermogen.textContent = `Ampère (I) = ${oplossing2.toFixed(2)} A`;
          break;

          case isNaN(vermogen) :
          let oplossing3 = (voltage * ampere)
          outputWetVanVermogen.textContent = `Vermogen (P) = ${oplossing3.toFixed(2)} W`;
          break;
          default:
            outputWetVanVermogen.textContent = `Voltage: ${voltage} V, Ampère: ${ampere} A, Vermogen: ${vermogen} W`;
        
     };
};
