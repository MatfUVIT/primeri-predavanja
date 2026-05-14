
const sumaBrojeva = function () {
    const sumaBrojevaRec = function (niz) {
        let ret = 0.0;
        for (let x of niz) {
            if (Array.isArray(x)) {
                ret += sumaBrojevaRec(x);
            }
            else {
                let elem = Number(x);
                if (!isNaN(elem))
                    ret += elem;
            }
        }
        return ret;
    }
    return sumaBrojevaRec(arguments);
}

console.log(sumaBrojeva(1, 2, 3));
console.log(sumaBrojeva(1, 2, 3, [1, 2]));
console.log(sumaBrojeva(1, 2, 3, [1, 2, [1, 2, 3, "miki"]]));
console.log(sumaBrojeva(1, 2, 3, [1]));
console.log(sumaBrojeva('Miki', '1', 2, '100.5', 3));
