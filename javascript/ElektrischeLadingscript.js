'use strict'

function RekenenElektrischeLading() {
    let coulomb = document.getElementById("IDCoulomb_ElektrischeLading").valueAsNumber;
    let seconde = document.getElementById("IDSeconde_ElektrischeLading").valueAsNumber;
    let ampere = document.getElementById("IDAmpere_ElektrischeLading").valueAsNumber;
    let outputElektrischeLading = document.getElementById("outputElektrischeLading");

    // Verkrijg de eenheden van de dropdowns
    let unitCoulomb = document.getElementById("unitCoulomb_ElektrischeLading").value;
    let unitAmpere = document.getElementById("unitAmpere_ElektrischeLading").value;
    let unitSeconde = document.getElementById("unitSeconde_ElektrischeLading").value;

    // Sla de originele eenheden op voor output
    let originalUnitCoulomb = unitCoulomb;
    let originalUnitAmpere = unitAmpere;
    let originalUnitSeconde = unitSeconde;

    // Pas de eenheden toe voor coulomb
    switch (unitCoulomb) {
        case '1000000': // kC
            coulomb *= 1000000;
            break;
        case '1': // C
            break; // Geen verandering
        case '0.001': // mC
            coulomb *= 0.001;
            break;
        case '0.000001': // µC
            coulomb *= 0.000001;
            break;
    }

    // Pas de eenheden toe voor ampère
    switch (unitAmpere) {
        case '1000': // kA
            ampere *= 1000;
            break;
        case '1': // A
            break; // Geen verandering
        case '0.001': // mA
            ampere *= 0.001;
            break;
        case '0.000001': // µA
            ampere *= 0.000001;
            break;
    }

    // Pas de eenheden toe voor seconde
    switch (unitSeconde) {
        case '1': // s
            break; // Geen verandering
        case '0.001': // ms
            seconde *= 0.001;
            break;
    }

    // Berekeningen afhankelijk van welke waarde ontbreekt
    switch (true) {
        case isNaN(coulomb):  // Als coulomb ontbreekt, bereken het
            let oplossing1 = (seconde * ampere);
            outputElektrischeLading.textContent = `Coulomb (Q) = ${oplossing1.toFixed(2)} ${getUnitLabel(originalUnitCoulomb, 'C')}`;
            break;

        case isNaN(ampere):  // Als ampère ontbreekt, bereken het
            let oplossing2 = (coulomb / seconde);
            outputElektrischeLading.textContent = `Ampère (I) = ${oplossing2.toFixed(2)} ${getUnitLabel(originalUnitAmpere, 'A')}`;
            break;

        case isNaN(seconde):  // Als seconde ontbreekt, toon een foutmelding
            outputElektrischeLading.textContent = "Seconde kan niet nul zijn!";
            break;

        default:  // Als geen waarde ontbreekt, toon de originele waarden
            outputElektrischeLading.textContent = `Coulomb: ${coulomb} ${getUnitLabel(originalUnitCoulomb, 'C')}, Ampère: ${ampere} ${getUnitLabel(originalUnitAmpere, 'A')}, Seconde: ${seconde} ${getUnitLabel(originalUnitSeconde, 's')}`;
    }
}

// Functie om de eenheidslabel te krijgen
function getUnitLabel(unitValue, baseUnit) {
    switch (unitValue) {
        case '1000000':
            return `k${baseUnit}`;
        case '0.001':
            return `m${baseUnit}`;
        case '0.000001':
            return `µ${baseUnit}`;
        default:
            return baseUnit;
    }
}

// Functie om de invoervelden en output te wissen
function ClearElektrischeLading() {
    document.getElementById("IDCoulomb_ElektrischeLading").value = '';
    document.getElementById("IDSeconde_ElektrischeLading").value = '';
    document.getElementById("IDAmpere_ElektrischeLading").value = '';
    document.getElementById("outputElektrischeLading").textContent = '';
}
