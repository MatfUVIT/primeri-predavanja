const https = require('https');

let adresa = 'https://www.b92.net/';

https.get(adresa, odgovor => {
    let podaci = [];

    const zaglavljeDatum = odgovor.headers && odgovor.headers.date ? odgovor.headers.date : 'no response date';
    console.log('Status:', odgovor.statusCode);
    console.log('Datum u zaglavlju:', zaglavljeDatum);

    odgovor.on('data', deo => {
        podaci.push(Buffer(deo).toString());
    });

    odgovor.on('end', () => {
        console.log('Kraj odgovora: ');
        for(deo of podaci)
            console.log(deo);
    });

}).on('error', err => {
    console.log('Error: ', err.message);
});