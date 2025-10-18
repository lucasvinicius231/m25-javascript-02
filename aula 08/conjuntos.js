/**
 * aqui iremos ver como trabalhar com conjuntos em js
 */
/* não podemos usar dessa forma abaixo
let nome1 = "andre";
let nome2 = "amarildo";
...
let nome31 = zaqueu"
*/
//abaixo estou definindo um vetor com 4 nomes
let nomes = ["andre","amarildo","joaquim","zaqueu"]
console.log(nomes[2]);
//listando os nomes usando laço for (1ª opção)
//vetor.length devolve o tamanho do vetor
for (let i= 0; i <nomes.length; i++) {
    console.log(nomes[i]) 
}
console.log("fim do for (1ª opção");
console.log("=+".repeat(20))
//listando os nomes usando o laço for (2ª opção)
for (const it of nomes){
    console.log(it);
}console.log("fim do for(2ª opção)")
console.log("=+".repeat(20))
//usando o while para listar os nomes
let i=0;
while(i<nomes.length){
    console.log("fim do while")
}
console.log("fim do while")