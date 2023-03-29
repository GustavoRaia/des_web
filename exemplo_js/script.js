function minha_funcao(){
    const meuSpan = document.getElementById("meu_span");
    let meuValor = parseInt(meuSpan.innerText);
    meuValor++;
    meuSpan.innerText = meuValor;
    if (meuValor === 5) mudaDivs();
}

const mudaDivs = () => {
    const divs = document.querySelectorAll(".minha_div");

    divs.forEach((elemento) => {
        elemento.style.marginTop = '1em';
        elemento.style.backgroundColor = 'orange';
        elemento.style.height = '2em';
        elemento.style.border = '2px solid black';
        elemento.style.borderRadius = '50px';
    });
};

document.getElementById("meu_botao").onclick = minha_funcao;