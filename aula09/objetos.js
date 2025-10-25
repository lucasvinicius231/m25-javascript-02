/**
 * nesse codigo iremos ver objetos em js (json)
 */
//json -> javascript object notation
const meuObijeto = {
"nome": "lucas",
"endereço": "rua das ruas",
"numero": 15,
"ehfumante": false,
"ola": ()=> {
    console.log("Olá mundo!");
   },
   "telefones": {
    "residencial": "14 123456789",
    "comercial": "14 789456123",
   }
}
meuObijeto.ola()
console.log(meuObijeto)
//transformando o objeto de JSON em texto
console.log(JSON.stringify(meuObijeto))
//transformando um texto em JSON
const txtObjeto = '{"codigo":1234,"preço":15.32,"descricao":"teste"}'
//O comando abaixo transforma de texto para objeto JSON
const obj = JSON.parse(txtObjeto);
console.log(obj);