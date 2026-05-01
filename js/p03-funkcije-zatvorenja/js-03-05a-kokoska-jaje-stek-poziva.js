let ukupnoJ = 0;
let ukupnoK = 0;

// primer steka poziva
function kokoska() {
    console.log(`k: ${ukupnoK++}`);
    return jaje();
};

function jaje() {
    console.log(`j: ${ukupnoJ++}`);
    return kokoska();
}

console.log("Starija je ", kokoska());