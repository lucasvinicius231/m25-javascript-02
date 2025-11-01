/**
 * js responsavel pelo cadastro
 */
const maior_id = () => {

    //buscando os dados
    return axios.get('http://localhost:3000/produtos').then((ret) => {
        return ret.data.reduce((a, b) => (a > b?.id ? a : b?.id), 0);
    })
}

const gravar = () => {
    //buscando os dados do formulario
    const id = document.querySelector("#id").value;
    const descricao = document.querySelector("#iddesc").value;
    const saldo = document.querySelector("#idsaldo").value;
    const preco = document.querySelector("#idpreco").value;
    //montando o JSON para gravar
    maior_id().then((ret) => {
        const dados = {
            "id": (id == "null" ? ret + 1 : id),
            "descricao": descricao,
            "saldo": saldo,
            "preco": preco,
        }
        if (id == "null") {
            axios.post("http://localhost:3000/produtos/", dados)
                .then((ret) =>
                    console.log("produto gravado com sucesso!"))
        } else {
            axios.put("http://localhost:3000/produtos/" + id, dados)
                .then((ret) =>
                    console.log("produto gravado com sucesso!"))
        }
    })

}
//colocando os eventos no formulario
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    //tirar a submissão do form
    e.preventDefault();
    //chamando a gravação do registro
    gravar();
    //voltando para a pagina inicial
    setTimeout(() => {
        window.location.href = "index.html";

    }, 3000);
})