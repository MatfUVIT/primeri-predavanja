const Dogadjaj = require('events');

class EmiterDogadjaja extends Dogadjaj {}

const emiter = new EmiterDogadjaja();

emiter.on('dogadjaj', (x, y) => console.log(`Odgovaram na emitovani dogadjaj (sa argumentima ${x} i ${y})!`));

emiter.emit('dogadjaj', 'miki', 'maus');

emiter.emit('dogadjaj', 2, 3);

emiter.emit('dogadjaj', 2, 3, 4);

emiter.emit('dogadjaj', 'miki');

emiter.emit('dogadjaj');