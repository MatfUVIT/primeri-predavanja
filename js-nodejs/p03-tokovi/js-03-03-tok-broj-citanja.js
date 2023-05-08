let fs = require('fs');

console.log('\n');

let tokZaCitanje = fs.createReadStream('lorem.txt');
tokZaCitanje.setEncoding('utf8');
let brojac = 0;

tokZaCitanje.on('data',
    procitano => {
        brojac++;
        console.log(brojac + ' ' + procitano.length);
    });

tokZaCitanje.on('end',
    () => console.log("---\n" + brojac));