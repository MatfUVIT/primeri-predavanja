const Dogadjaj = require('events');

class EmiterDogadjaja extends Dogadjaj {}

const emiter = new EmiterDogadjaja();

emiter.on('dogadjaj', x => console.log(`Odgovaram na emitovani dogadjaj (sa argumentom ${x})!`));

emiter.emit('dogadjaj', 'miki');

emiter.emit('dogadjaj', 2, 3);