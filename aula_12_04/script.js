function mudar(){
    const spans = document.querySelectorAll(".meu_span");

    spans.forEach((element) => element.style.backgroundColor = "red");
}

const soma = () => {
    const entrada = document.getElementById("entrada");
    onchange = () => {
        const valor_entrada = parseInt(document.getElementById("entrada").value);
        const valor_span = parseInt(document.getElementById("numero").text);
        document.getElementById("numero").text = valor_entrada + valor_span;
    }
}

mudar();
soma();