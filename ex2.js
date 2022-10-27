/*
function forEach (lista, iterator) {
    let i = 0;
    while (i < lista.length) {
        iterator(lista[i]);
        i++;
    }

}

let lista = ["Javascript", "HTML", "CSS"];
forEach(lista, function(item){
    console.table("Linguagem: " + item);

})
*/

function exibeLinguagens (item) {
    console.table("Linguagem: " + item);

}

function forEach(lista, iterator){
    let i = 0;
    while (i < lista.length) {
        iterator(lista[i]);
        i++;
    }

}

let l = ["Javascript", "HTML", "CSS"];

forEach(l, exibeLinguagens);