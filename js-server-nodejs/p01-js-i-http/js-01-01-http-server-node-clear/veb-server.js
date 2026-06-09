const http = require('http');

const port = 7080;
const server = http.createServer(
    function (zahtev, odgovor) {
        odgovor.writeHead(200, { 'Content-type': 'text/plan' });
        odgovor.write('UVT - Napravljeni veb server koristi node.js');
        odgovor.end();
    });
server.listen(port);
console.log(`Veb server osluskuje zahteve na portu ${port}...\n`);