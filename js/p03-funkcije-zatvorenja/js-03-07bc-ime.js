let mojeIme = 'Vladimir';

const pozdrav = (ime) =>
    () => console.log('Zdravo, ' + ime + '!');

let pozdravSaImenom = pozdrav(mojeIme);
pozdravSaImenom("Miki Maus");

mojeIme = 'Marko';

pozdravSaImenom();