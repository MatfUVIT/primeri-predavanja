let prikazBrojArgumenti = function() {
    console.log('---');
    let s = '';
    for (let i in arguments)
        s += arguments[i] + ' ';
    console.log(s);
    console.log(`Prilikom poziva su prosleđena ${arguments.length} argumenta.`);
}

prikazBrojArgumenti('Ako kaniš ', 'pobijediti', ' ne smiješ ', 'izgubiti');
prikazBrojArgumenti('Ako kaniš pobijediti', ' ne smiješ izgubiti');
prikazBrojArgumenti('Ako kaniš pobijediti ne smiješ izgubiti');
prikazBrojArgumenti();
prikazBrojArgumenti(() => "Danas nam je divan dan.");
prikazBrojArgumenti(-3, -2, -1, prikazBrojArgumenti, 1, 2, 3);
