let mapa = {};

const smesti = function(kljuc, vrednost) {
  mapa[kljuc] = vrednost;
}

smesti("olovka", 0.069);
smesti("sveska", -0.081);

Object.prototype.nesto = "bez veze!";

for (let kljuc in mapa)
  console.log(kljuc + ": " + mapa[kljuc]);
//>>> olovka : 0.069
//>>> sveska : -0.081
//>>> nesto : bez veze!

console.log("nesto" in mapa);
//>>> true

console.log("toString" in mapa);
//>>> true

delete Object.prototype.nesto;