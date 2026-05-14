const sumaBrojeva = function () {
    let ret = 0.0;
    for (let x of arguments) {
        let elem = Number(x);
        if(!isNaN(elem))
            ret += elem;
    }
    return ret;
}

console.log(sumaBrojeva(1, 2, 3));
console.log(sumaBrojeva(1, 2, 3, [1, 2]));
console.log(sumaBrojeva(1, 2, 3, [1]));
console.log(sumaBrojeva('Miki', '1', 2, '100.5', 3));
