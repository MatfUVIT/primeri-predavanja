let nizSvacega = ["Paja Patak", 1, 2, 3, "Miki Maus", false, true, 
    {ime: "Zika", prezime: "Mikic"}, [1,2,3]];

const zaSvaki = function (niz, akcija) {
    for (let i = 0; i < niz.length; i++)
        akcija(niz[i]);
}

console.log("---");
zaSvaki(nizSvacega, console.log);

console.log("---");
nizSvacega.forEach(x => console.log(x));

