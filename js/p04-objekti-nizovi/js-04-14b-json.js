let opis = `
{ 
    "ime":"Miki Maus",
    "born":1980,
    "father":"Volt Dizni",
    "wife":"Mini Maus",
    "funClub":["Paja Patak","Dusko Dugousko","Pluton"],
    "dog":"Pluton"
}`;

let miki = JSON.parse(opis);
console.log(miki);

let workspaceFolder = "C:/vlado/Courses/Matf/MatfUVIT--primeri-predavanja";
opis = `
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "js-01-01a",
            "program": "${workspaceFolder}/js/p01-vrednosti-tipovi-operatori/js-01-01a-promenljive-primitivne-primer.js",
            "request": "launch",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "type": "node"
        },
        {
            "type": "node",
            "request": "launch",
            "name": "js-01-01b",
            "skipFiles": [
                "<node_internals>/**"
            ], 
            "program": "${workspaceFolder}/js/p01-vrednosti-tipovi-operatori/js-01-01b-promenljive-objekti-primer.js",
            "stopOnEntry": true, 
            "console": "integratedTerminal",
            "internalConsoleOptions": "neverOpen"
        }
    ]
}`;

let konfiguracija = JSON.parse(opis);

console.log(konfiguracija);