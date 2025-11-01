const validar_envio = () => {
    const cmpNome = document.querySelector("#idnome");
    if (cmpNome.value != ""){
        console.log("tem conteudo!!", cmpNome.value);
        return true;
    } else {
        console.log("nao tem conteudo!!",cmpNome.value);
        return false;
    }
}
//adicionando o evento de subimit ao formulairo
//const form =  document.querySelector("#idform");
form.addEventListener('submit',function(e){
    console.log("evento form!");
    console.log(validar_envio());
    if (!validar_envio()) e.preventdefault();
})