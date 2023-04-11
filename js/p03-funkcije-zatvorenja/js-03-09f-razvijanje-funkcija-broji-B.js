/* 
Jos napredniji pristup u razvijanju funkcija (sa zatvorenjem)

Prebrojiti pojave slova B i O
*/

function prebroj(znak) {
    return function prebrojPojave(niska) {
        let ret = 0;
        for (let i = 0; i < niska.length; i++)
            if (niska.charAt(i) == znak)
                ret++;
        return ret;
    };
}

let prebrojB = prebroj("B");
console.log(prebrojB("BAOBAB NIJE BELE BOJE"));
let prebrojO = prebroj("O");
console.log(prebrojO("BAOBAB NIJE BELE BOJE"));
