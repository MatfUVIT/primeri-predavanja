const net = require('net');

const server = net.createServer(
    (soket) => {
        soket.write(`Pozdrav od servera!`);
        soket.pipe(soket);
    });

const adresa = '127.0.0.1';
const port = 80;
server.listen(port, adresa);
console.log(`Server slusa na adresi ${adresa}, port ${port} `); 