let person = {
    name: "Miki Maus",
    born: 1980,
    father: "Volt Dizni",
    wife: "Mini Maus",
    funClub: ["Paja Patak", "Dusko Dugousko"]
};

person.dog = "Pluton";

let niska = JSON.stringify(person);

console.log(niska);