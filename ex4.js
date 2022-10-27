/*

let l = [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

let novaLista = l.sort(function(a, b){
    return a - b;
});

console.table(novaLista);
*/
//

let l = [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

let novaLista = l.sort(function(a, b){
    if(a < b)
        return 1 // CRESCENTE// A-B ORDENA CRESCENTE
    else if (a < b)
        return -1 // DECRESCENTE// B-A ORDENA DECRESCENTE
    else
        return 0
});

console.table(novaLista);