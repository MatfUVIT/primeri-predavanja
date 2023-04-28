

console.log("---");
let objekat = 'Miki Maus';
console.log(objekat);
let rezultat = Array.from(objekat, x => x + x);
console.log(rezultat);

console.log('---')
let niz = [1, 2, 3, "Miki"];
dupliraj = function(x){
    return x+x;
}
rez2 = Array.from(niz, dupliraj);
console.log(rez2);

console.log('---')
console.log(objekat);
let rez3 = Array.from(objekat, x => x.toUpperCase());
console.log(rez3);


console.log("---");
objekat = { 0: 11, 1: 'AA', 2: 42, 3: true, length: 4 };
console.log(objekat);
rezultat = Array.from(objekat, x => x + x);
console.log(rezultat);