let poruka = [];

poruka.push("nema");
poruka.push("povlačenja", "nema");
poruka.push("predaje", 2);

console.log(poruka);

console.log(poruka.join(" "));

console.log(poruka.join("+"));

let x = { join: (a) => "nešto" + a };
console.log(x.join("+"));


console.log(poruka.pop());

poruka.pop();

console.log(poruka);