let sequencia = "";

function enter() {
    axios.get(`http:localhost:3000/${sequencia}`).then((resposta)=>{alert(resposta.data)});
}

function clicar(numero) {
    sequencia += numero
    console.log(sequencia)
}



