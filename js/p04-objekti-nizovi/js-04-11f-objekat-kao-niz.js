console.log('---')
let niz = ['M','i', 'k', 'i', ' ', 'M', 'a', 'u', 's'];
console.log(niz);
let rez0 = Array.from(niz);
console.log(rez0);

console.log('---')
let niz1 = 'Miki Maus'.split('');
console.log(niz1);
let rez1 = Array.from(niz1);
console.log(rez1);

console.log('---')
let niska = 'Miki Maus';
console.log(niska);
let rez2 = Array.from(niska);
console.log(rez2);

// ако објекат није итерабилан, враће се празaн низ
console.log('---')
let objekat = {
    x: 2.5,
    y: 3.335,
    z: 0.7e-3
}
console.log(objekat);
let rez4 = Array.from(objekat);
console.log(rez4);

