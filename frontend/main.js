let sequencia = "";

function enter() {
    axios.get(`http:localhost:3000/${sequencia}`).then((resposta)=>{console.log(resposta)});
}

function clicar(numero) {
    sequencia += numero
    console.log(sequencia)
}



