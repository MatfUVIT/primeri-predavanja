let fs = require('fs');

let tokZaUpis = fs.createWriteStream('copy1.txt'); 
tokZaUpis.write(`Поздрав за слушаоце курса УВИТ!

Sve najbolje!
`);