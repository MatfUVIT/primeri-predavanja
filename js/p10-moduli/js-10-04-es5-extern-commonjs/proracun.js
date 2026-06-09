const vrednost = require('./vrednost');

function izracunajKvadrat() {
    // pozvan je metod iz vrednost.js
    const x = vrednost.ocitajPodatak();
    // ovde ide deo koda vezan za proracun
    return x * x;
}

module.exports.proracunajCommonJS = izracunajKvadrat;