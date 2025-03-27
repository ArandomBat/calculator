'use strict'

function RekenenVermogen() {
    let vermogen = document.getElementById("IDVermogen_Vermogen").valueAsNumber;
    let voltage = document.getElementById("IDVoltage_Vermogen").valueAsNumber;
    let ampere = document.getElementById("IDAmpere_Vermogen").valueAsNumber;
    let outputVermogen = document.getElementById("outputVermogen");

    // Verkrijg de eenheden van de dropdowns
    let unitVoltage = document.getElementById("unitVoltage_Vermogen").value;
    let unitAmpere = document.getElementById("unitAmpere_Vermogen").value;
    let unitVermogen = document.getElementById("unitVermogen_Vermogen").value;

    // Pas de eenheden toe
    voltage *= parseFloat(unitVoltage);
    ampere *= parseFloat(unitAmpere);
    vermogen *= parseFloat(unitVermogen);

    let oplossing;
    let label;
    let unit;

    if (isNaN(voltage)) {
        oplossing = vermogen / ampere;
        label = 'Voltage (U)';
        unit = 'V';
    } else if (isNaN(ampere)) {
        oplossing = vermogen / voltage;
        label = 'Ampère (I)';
        unit = 'A';
    } else if (isNaN(vermogen)) {
        oplossing = voltage * ampere;
        label = 'Vermogen (P)';
        unit = 'W';
    } else {
        outputVermogen.textContent = `Voltage: ${voltage} V, Ampère: ${ampere} A, Vermogen: ${vermogen} W`;
        return;
    }

    outputVermogen.textContent = NotatieConverter(oplossing, label, unit);
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
        return `${label} = ${(waarde * 1000000).toFixed(2)} µ${unit}`;
    } else {
        return `${label} = ${waarde.toFixed(2)} ${unit}`;
    }
}

// Functie om de invoervelden en output te wissen
function ClearVermogen() {
    document.getElementById("IDVermogen_Vermogen").value = '';
    document.getElementById("IDVoltage_Vermogen").value = '';
    document.getElementById("IDAmpere_Vermogen").value = '';
    document.getElementById("outputVermogen").textContent = '';
}
