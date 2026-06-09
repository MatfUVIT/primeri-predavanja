const http = require('http');

const port = 7080;
const server = http.createServer(osluskivacZahteva);
server.listen(port);
console.log(`Pokrenuti veb server osluskuje na portu ${port}...`);

function osluskivacZahteva(zahtev, odgovor) {
    odgovor.writeHead(200);
    odgovor.write('Veb server koristi node.js i dogadjaje');
    odgovor.end();
}