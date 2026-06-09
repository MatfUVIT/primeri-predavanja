// ovo je privatan podatak
let podatakKojiSeCuva = '';

const _setPodatak = function (noviPodatak) {
    podatakKojiSeCuva = noviPodatak;
};

const _getPodatak = function() {
    return podatakKojiSeCuva;
};

export { _getPodatak as getPodatak, _setPodatak as setPodatak  };