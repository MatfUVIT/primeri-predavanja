let person = {
    ime: "Miki Maus",
    born: 1980,
    father: "Volt Dizni",
    wife: "Mini Maus",
    funClub: ["Paja Patak", "Dusko Dugousko"]
};

person.dog = "Pluton";
person.funClub.push(person.dog);

let niska = JSON.stringify(person);

console.log(niska);