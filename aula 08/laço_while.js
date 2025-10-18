/**
 * exmeplo de uso do laço while
 */
let i=0;
while (i<10){
//lembrando que o pós-incemento (variavel++)
//ocorre como ultima coisa antes de ir para proxima linha
//ou seja, imprime o texto com o valor de i e depois aumenta 1
console.log("valor de i=" + i++)
}
console.log("fim do while")
//usando o while no final, com do..while
i=0;
do {
    console.log("valor de i=" + i++)
}while(i<10);
console.log("fim do laço do..while")