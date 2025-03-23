'use strict'

function RekenenElektrischeLading() {
    let coulomb = document.getElementById("IDCoulomb_ElektrischeLading").valueAsNumber;
    let seconde = document.getElementById("IDSeconde_ElektrischeLading").valueAsNumber;
    let ampere = document.getElementById("IDAmpere_ElektrischeLading").valueAsNumber;
    let outputElektrischeLading = document.getElementById("outputElektrischeLading");

    switch (true) {
        case isNaN(coulomb):
            let oplossing1 = (seconde * ampere);
            outputElektrischeLading.textContent = `Coulomb (Q) = ${oplossing1.toFixed(2)} C`;
            break;

        case isNaN(ampere):
            let oplossing2 = (coulomb / seconde);
            outputElektrischeLading.textContent = `Ampère (I) = ${oplossing2.toFixed(2)} A`;
            break;

        case isNaN(seconde):
            outputElektrischeLading.textContent = "Dit kan niet!";
            break;

        default:
            outputElektrischeLading.textContent = `Coulomb: ${coulomb} C, Ampère: ${ampere} A, Seconde: ${seconde} s`;
    };
}

// Functie om de invoervelden en output te wissen
function ClearElektrischeLading() {
    document.getElementById("IDCoulomb_ElektrischeLading").value = '';
    document.getElementById("IDSeconde_ElektrischeLading").value = '';
    document.getElementById("IDAmpere_ElektrischeLading").value = '';
    document.getElementById("outputElektrischeLading").textContent = '';
}