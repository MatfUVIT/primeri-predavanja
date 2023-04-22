let nizSvacega = ["Paja Patak", 1, 2, 3, "Miki Maus"];

const zaSvaki = function (niz, akcija) {
    for (let i = 0; i < niz.length; i++)
        akcija(niz[i]);
}

zaSvaki(nizSvacega, console.log);

