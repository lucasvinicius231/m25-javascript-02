/**
 * usos do laço for
 */
//1a parte => inicialização de variáveis
//2a parte => condição de permanência
//3a parte => atribuição / incremento de valor            
for (let i=0;i<10;i++){
 console.log("valor de i=" + i)
}
//nesse caso abaixo da erro de inexistencia da variavel i
//porque pertence somente ao bloco do for a variavel i por
//conta do let i dentro do for
console.log("fim do for" );
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