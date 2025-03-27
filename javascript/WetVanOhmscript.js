'use strict'

function RekenenWetOhm() {
    let voltage = document.getElementById("IDVoltage_WetVanOhm").valueAsNumber;
    let ampere = document.getElementById("IDAmpere_WetVanOhm").valueAsNumber;
    let ohm = document.getElementById("IDOhm_WetVanOhm").valueAsNumber;
    let outputWetVanOhm = document.getElementById("outputWetVanOhm");

    // Verkrijg de eenheden van de dropdowns
    let unitVoltage = document.getElementById("unitVoltage_WetVanOhm").value;
    let unitAmpere = document.getElementById("unitAmpere_WetVanOhm").value;
    let unitOhm = document.getElementById("unitOhm_WetVanOhm").value;

    // Pas de eenheden toe
    voltage *= parseFloat(unitVoltage);
    ampere *= parseFloat(unitAmpere);
    ohm *= parseFloat(unitOhm);

    let oplossing;
    let label;
    let unit;

    if (isNaN(voltage)) {
        oplossing = ampere * ohm;
        label = 'Voltage (U)';
        unit = 'V';
    } else if (isNaN(ampere)) {
        oplossing = voltage / ohm;
        label = 'Ampère (A)';
        unit = 'A';
    } else if (isNaN(ohm)) {
        oplossing = voltage / ampere;
        label = 'Weerstand (R)';
        unit = 'Ω';
    } else {
        outputWetVanOhm.textContent = `Voltage: ${voltage} V, Ampère: ${ampere} A, Weerstand: ${ohm} Ω`;
        return;
    }

    outputWetVanOhm.textContent = NotatieConverter(oplossing, label, unit);
}

function NotatieConverter(waarde, label, unit) {
    if (waarde >= 1000000) {
        return `${label} = ${(waarde / 1000000).toFixed(2)} M${unit}`;
    } else if (waarde >= 1000) {
        return `${label} = ${(waarde / 1000).toFixed(2)} k${unit}`;
    } else if (waarde >= 1) {
        return `${label} = ${waarde.toFixed(2)} ${unit}`;
    } else if (waarde >= 0.001) {
        return `${label} = ${(waarde * 1000).toFixed(2)} m${unit}`;
    } else if (waarde >= 0.000001) {
        return `${label} = ${(waarde * 1000000).toFixed(2)} µ${unit}`;a
    } else {
        return `${label} = ${waarde.toFixed(2)} ${unit}`;
    }
}

// Functie om de invoervelden en output te wissen
function ClearWetOhm() {
    document.getElementById("IDVoltage_WetVanOhm").value = '';
    document.getElementById("IDAmpere_WetVanOhm").value = '';
    document.getElementById("IDOhm_WetVanOhm").value = '';
    document.getElementById("outputWetVanOhm").textContent = '';
};
