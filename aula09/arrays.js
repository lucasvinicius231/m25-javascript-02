/**
 * array em javascript
 */
const vetor = [];
vetor.push("item 1");
vetor.push("item 2");
vetor.push("item 3");
console.log(vetor);
vetor.push(1234); //adiciona
console.log(vetor);
console.log(vetor.pop());//remove o ultimo elemnto
console.log(vetor)
vetor.splice(1,1);//indice e quantidade, indice começa em 0
console.log(vetor);
//percorrendo o vetor com for (1ª opção)
console.log("listando vetor com for 1ª opção")
for(let i=0;i<vetor.length;i++){
    console.log(vetor[i])
}
console.log("listando vetor com for 2ª opção")
//percorrendo o vetor com for (2ª opção)
for(let it of vetor){
    console.log(it)
}
console.log("listando vetor com for 3ªopção")
//percorrendo o vetor com forEach
vetor.forEach(it=>console.log(it))
