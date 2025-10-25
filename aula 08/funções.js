/**
 * criação e uso de funções
 */
//definindo a função para usá-la
function fatorial(numero){
    let ret = 1;
    for (let i=numero;i>1;i--){
        ret*=i; //isso e o mesmo que ret = ret * i
    }
    return ret; //retornando o valor
}
//usando a função
console.log("o fatorial de 5 é" + fatorial(5))
//Arrow Function
const fatorial_arrow = (numero) => {
    let ret = 1;
    for (let i=numero;i>1;i--){
        ret *= i
    }
    return ret;
}
//usando a função
console.log("o fatorial (arrow) de 5 é " + fatorial_arrow(5));