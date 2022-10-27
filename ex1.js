function soma (x, y) {
    return x + y;
}

function mediaDe2Numeros (x, y, outrafuncao) {
    return outrafuncao (x, y)/2;
}
console.log(mediaDe2Numeros(1,1, soma));
