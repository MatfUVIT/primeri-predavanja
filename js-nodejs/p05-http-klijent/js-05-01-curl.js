const https = require('https');

let adresa = 'https://www.b92.net/';

https.get(adresa, res => {
    let podaci = [];
    const zaglavljeDatum = res.headers && res.headers.date ? res.headers.date : 'no response date';
    console.log('Status:', res.statusCode);
    console.log('Datum u zaglavlju:', zaglavljeDatum);

    res.on('data', sekcija => {
        podaci.push(Buffer(sekcija).toString());
    });

    res.on('end', () => {
        console.log('Kraj odgovora: ');
        for( deo of podaci)
            console.log(deo);
    });

}).on('error', err => {
    console.log('Error: ', err.message);
});