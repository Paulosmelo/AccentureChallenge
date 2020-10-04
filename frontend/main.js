let sequencia = "";

function enter() {
  axios.get(`http:localhost:3000/${sequencia}`).then((resposta) => {
    const display = document.querySelector("#display");
    display.value = resposta.data;
  });
}

function clicar(numero) {
  sequencia += numero;
  const display = document.querySelector("#display");
  display.value = sequencia;
}


function resetar(){
    const display = document.querySelector("#display");
    display.value = "";
}