// MENOS PERFORMÁTICO.
// PROGRAMAÇÃO FUNCIONAL.
// NUTELLA.
let l = ["Javascript", "HTML", "CSS"];

l.forEach(function(item, indice){
      l[indice] = "Amo " + item + "!"; 
})
console.table(l);

// MESMA COISA:
// PROGRAMAÇÃO INTERATIVA.
// GOURMET.
for (let [indice, item] of l.entries()){
    console.table(`[${indice}] ${item}`);
    
}

// MESMA COISA:
// FOR É MAIS RAPIDO.
// PROGRAMAÇÃO INTERATIVA.
// PRATICO.
for (let i = 0; i < l.length; i++) {
    console.table(`[${i}] ${l[i]}`);
}

// MESMA COISA:
// PROGRAMAÇÃO INTERATIVA.
// RAIZ.
let i = 0;
while (i < l.length) {
    console.table(`[${i}] ${l[i]}`);
    i++;
}