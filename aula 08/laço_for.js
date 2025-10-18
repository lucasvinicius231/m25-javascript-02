/**
 * usos do laço for
 */
//1a parte => inicialização de variáveis
//2a parte => condição de permanência
//3a parte => atribuição / incremento de valor            
for (var i=0;i<10;i++){
 console.log("valor de i=" + i)
}
//nesse caso abaixo da erro de inexistencia da variavel i
//porque pertence somente ao bloco do for a variavel i por
//conta do let i dentro do for
console.log("fim do for" + i);