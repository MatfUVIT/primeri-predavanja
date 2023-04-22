console.log('---')
let niska = 'Miki Maus';
console.log(niska);
let rez1 = Array.from(niska);
console.log(rez1);

console.log('---')
let niz = [1, 2, 3];
dupliraj = function(x){
    return x+x;
}
rez2 = Array.from(niz, dupliraj);
console.log(rez2);

console.log('---')
console.log(niska);
let rez3 = Array.from(niska, x => x.toUpperCase());
console.log(rez3);

// ако објекат није итерабилан, враће се празaн низ
console.log('---')
let objekat = {
    x: 2.5,
    y: 3.335,
    z: 0.7e-3
}
console.log(objekat);
let rez4 = Array.from(objekat, t => sin(t));
console.log(rez4);

