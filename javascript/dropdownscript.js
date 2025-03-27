"use strict"

document.addEventListener("DOMContentLoaded", function() {
    // Zet de standaardwaarden voor de eenheden bij het laden van de pagina

    // Voor Wet van Ohm
    document.getElementById("unitVoltage_WetVanOhm").value = "1";   // V
    document.getElementById("unitAmpere_WetVanOhm").value = "1";    // A
    document.getElementById("unitOhm_WetVanOhm").value = "1";       // Ω

    // Voor Vermogen
    document.getElementById("unitVoltage_Vermogen").value = "1";    // V
    document.getElementById("unitAmpere_Vermogen").value = "1";     // A
    document.getElementById("unitVermogen_Vermogen").value = "1";   // W

    // Voor Elektrische Lading
    document.getElementById("unitAmpere_ElektrischeLading").value = "1";  // A
    document.getElementById("unitSeconde_ElektrischeLading").value = "1"; // S
    document.getElementById("unitCoulomb_ElektrischeLading").value = "1"; // C
});

