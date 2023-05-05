const vrednost = require('./vrednost');

function izracunajKvadrat() {
    // pozvan je metod iz vrednost.js
    const x = vrednost.getPodatak();
    // ovde ide deo koda vezan za proracun
    return x * x;
}

exports.proracunajCommonJS = izracunajKvadrat;