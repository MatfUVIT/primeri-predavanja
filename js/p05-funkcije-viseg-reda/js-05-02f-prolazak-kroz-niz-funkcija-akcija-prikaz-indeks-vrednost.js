let nekiNiz = [1, 2, 3, 4, "mika", "zika"];

const zaSvaki = function(niz, akcija) {
    for (let ind in niz)
        akcija(ind, niz[ind]);
};

console.log("---");
const prikazNaKonzolu = function(i,x) {
    console.log(i + ":" + x);
};
zaSvaki(nekiNiz, prikazNaKonzolu);

console.log("---");
const prikazNaKonzolu2 = (x,y) => console.log(x + ":" + y);
zaSvaki(nekiNiz, prikazNaKonzolu2);

console.log("---");
zaSvaki(nekiNiz, function(x, y) {
    console.log(x + ":" + y);
});

console.log("---");
zaSvaki(nekiNiz, (x,y) => console.log(x + ":" + y));

