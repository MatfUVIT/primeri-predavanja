let fs = require('fs');

let tokZaUpis = fs.createWriteStream('copy1.txt'); 
for (let i = 0; i < 1000; i++) {
    tokZaUpis.write(
`Поздрав за слушаоце курса УВИТ!
Sve najbolje!`
);}
