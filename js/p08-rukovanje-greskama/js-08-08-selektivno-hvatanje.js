"use strict";

function AutoNeMozeIspodZemljeError(message) {
    this.message = message;
    this.stack = (new Error()).stack;
}
AutoNeMozeIspodZemljeError.prototype = Object.create(Error.prototype);
AutoNeMozeIspodZemljeError.prototype.name = "AutoNeMozeIspodZemljeError";

function AutoNeMozePrekoNebaError(message) {
    this.message = message;
    this.stack = (new Error()).stack;
}
AutoNeMozePrekoNebaError.prototype = Object.create(Error.prototype);
AutoNeMozePrekoNebaError.prototype.name = "AutoNeMozePrekoNebaError";

const pravac = function() {
    const slucajan = Math.random();
    if (slucajan < 0.3)
        return "levo";
    if (slucajan < 0.6)
        return "desno";
    if (slucajan < 0.8)
        return "gore";
    return "dole";
}

function voziAuto(usmerenje) {
    let rezultat = usmerenje();
    if (rezultat.toLowerCase() == "levo")
        return "L";
    if (rezultat.toLowerCase() == "desno")
        return "R";
    if (rezultat.toLowerCase() == "gore")
        throw new AutoNeMozePrekoNebaError("Auto ne leti: " + rezultat);
    if (rezultat.toLowerCase() == "dole")
        throw new AutoNeMozeIspodZemljeError("Auto nije krtica: " + rezultat);
    throw new Error("Nekorektno usmerenje za auto");
}

function pogled() {
    if (voziAuto(pravac) == "L")
        return "Sa ove strane se nalazi livada";
    else
        return "Sa ove strane su planine";
}

for (let i = 0; i < 50; i++)
    try {
        console.log(` ${i} Gledas iz auta. ${pogled()}`);
    } catch (error) {
        if (error instanceof AutoNeMozeIspodZemljeError)
            console.log("Podzemlje: " + error + " ***");
        else if (error instanceof AutoNeMozePrekoNebaError)
            console.log("Nebeski svod: " + error + " ***");
        else {
            console.log("Nesto je jako pogresno: *** " + error + " ***");
            throw error;
        }
    }