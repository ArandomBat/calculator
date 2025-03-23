'use strict'

function RekenenVermogen () {

    let vermogen = document.getElementById("IDVermogen_Vermogen").valueAsNumber;
    let voltage = document.getElementById("IDVoltage_Vermogen").valueAsNumber;
    let ampere = document.getElementById("IDAmpere_Vermogen").valueAsNumber;
    



     switch(true) {
          case isNaN(voltage) : 
          let oplossing1 = (vermogen / ampere)
          outputVermogen.textContent = `Voltage (U) = ${oplossing1.toFixed(2)} V`;
          break;

          case isNaN(ampere) :
          let oplossing2 = (vermogen / voltage)
          outputVermogen.textContent = `Ampère (I) = ${oplossing2.toFixed(2)} A`;
          break;

          case isNaN(vermogen) :
          let oplossing3 = (voltage * ampere)
          outputVermogen.textContent = `Vermogen (P) = ${oplossing3.toFixed(2)} W`;
          break;
          default:
               outputVermogen.textContent = `Voltage: ${voltage} V, Ampère: ${ampere} A, Vermogen: ${vermogen} W`;
        
     };
};

// Functie om de invoervelden en output te wissen
function ClearVermogen() {
     document.getElementById("IDVermogen_Vermogen").value = '';
     document.getElementById("IDVoltage_Vermogen").value = '';
     document.getElementById("IDAmpere_Vermogen").value = '';
     document.getElementById("outputVermogen").textContent = '';
 }