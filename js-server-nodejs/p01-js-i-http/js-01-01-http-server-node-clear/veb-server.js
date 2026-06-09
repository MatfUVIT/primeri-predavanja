const http = require('http');

const port = 7080;
http.createServer(
    function (zahtev, odgovor) {
        odgovor.writeHead(200, { 'Content-type': 'text/plan' });
        odgovor.write('UVT - Napravljeni veb servers koristi node.js');
        odgovor.end();
    }).listen(port);
console.log(`Veb server osluskuje zahteve na portu ${port}...\n`);