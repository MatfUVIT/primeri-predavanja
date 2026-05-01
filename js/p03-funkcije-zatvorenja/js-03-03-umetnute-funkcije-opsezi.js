// umetnuti opsezi
const pejsaz = function() {
    let rezultat = "";
    const ravnica = function(velicina) {
        for (let br = 0; br < velicina; br++)
            rezultat += "_";
    };
    const planina = function(velicina) {
        rezultat += "/";
        for (let br = 0; br < velicina; br++)
            rezultat += "'";
        rezultat += "\\";
    };
    ravnica(2);
    planina(2);
    planina(1);
    ravnica(3);
    planina(1);
    return rezultat;
};
console.log(pejsaz());
