const valorReais = document.querySelector("#valorReais");
const botaoCambio = document.querySelector("#botaoCambio");
const resultadoEmDolar = document.querySelector("#resultadoDolar");

botaoCambio.addEventListener('click', () => executarCambio());

function executarCambio(){
    if(Number(valorReais.value) <= 0){
        alert('Informe um valor!!');


    }else {
        gerarValorDolar();
    }
}

function gerarValorDolar(){
    const valorDolar = 4.87;
    const resultadoDolar = Number(valorReais.value) / valorDolar;
    console.log(resultadoDolar.toFixed(2))
    resultadoEmDolar.innerHTML = `${resultadoDolar.toFixed(2)}$` 
}

window.addEventListener('keypress', (e)=> {
    if(e.key === "Enter") {
        executarCambio();
    }
})