'use strict'

function RekenenWetOhm() {
    let voltage = document.getElementById("IDVoltage_WetVanOhm").valueAsNumber;
    let ampere = document.getElementById("IDAmpere_WetVanOhm").valueAsNumber;
    let ohm = document.getElementById("IDOhm_WetVanOhm").valueAsNumber;
    let outputWetVanOhm = document.getElementById("outputWetVanOhm");

    switch (true) {
        case isNaN(voltage):
            let oplossing1 = (ampere * ohm);
            outputWetVanOhm.textContent = `Voltage (U) = ${oplossing1.toFixed(2)} V`;
            break;

        case isNaN(ampere):
            let oplossing2 = (voltage / ohm);
            outputWetVanOhm.textContent = `Ampère (I) = ${oplossing2.toFixed(2)} A`;
            break;

        case isNaN(ohm):
            let oplossing3 = (voltage / ampere);
            outputWetVanOhm.textContent = `Weerstand (R) = ${oplossing3.toFixed(2)} Ω`;
            break;

        default:
            outputWetVanOhm.textContent = `Voltage: ${voltage} V, Ampère: ${ampere} A, Weerstand: ${ohm} Ω`;
    };
}

// Functie om de invoervelden en output te wissen
function ClearWetOhm() {
    document.getElementById("IDVoltage_WetVanOhm").value = '';
    document.getElementById("IDAmpere_WetVanOhm").value = '';
    document.getElementById("IDOhm_WetVanOhm").value = '';
    document.getElementById("outputWetVanOhm").textContent = '';
}