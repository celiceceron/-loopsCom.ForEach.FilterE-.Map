
/*
let lista = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];

let termoDeBusca = "Th";

let listaFiltrada = lista.filter(function(item){
    return item.includes(termoDeBusca)
})

console.table(listaFiltrada);
*/

/*
function filtraSeriados(lista, termoDeBusca) {
    return lista.filter(function(item){
        return item.includes(termoDeBusca);
    
    })
}

let l = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];

console.table(filtraSeriados(l,"Th"));
*/

/*
function filtraSeriados(lista, termoDeBusca) {
   const listaFiltrada = lista.filter(function(item){
        return item.includes(termoDeBusca);
    
    })
        return listaFiltrada;
}

let l = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];

console.table(filtraSeriados(l,"Th"));
*/

function filtraSeriados(lista, termoDeBusca) {
    termoDeBusca = termoDeBusca.toLowerCase();
    const listaFiltrada = lista.filter(function(item){
        const itemMinusculo = item.toLowerCase();
         return itemMinusculo.includes(termoDeBusca);
     
     })
         return listaFiltrada;
 }
 
 let l = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];
 
 console.table(filtraSeriados(l,"Th"));