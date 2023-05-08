const https = require('https');

let adresa = 'https://www.b92.net/';

if( process.argv.slice(2) )
    adresa = process.argv.slice(2);

https.get(adresa, res => {
    let podaci = [];
    const zaglavljeDatum = res.headers && res.headers.date ? res.headers.date : 'no response date';
    console.log('Status:', res.statusCode);
    console.log('Datum u zaglavlju:', zaglavljeDatum);

    res.on('data', sekcija => {
        podaci.push(sekcija);
    });

    res.on('end', () => {
        console.log('Kraj odgovora: ');
        const users = JSON.parse(Buffer.concat(podaci).toString());
    });

}).on('error', err => {
    console.log('Error: ', err.message);
});