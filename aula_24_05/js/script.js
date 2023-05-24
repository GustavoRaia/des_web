// Referências.
const div_lista_imagens = document.getElementById("lista_imagens");
const div_imagem = document.getElementById("imagem");
const input_busca = document.getElementById("busca");

// Modificando array para inluir o caminho das imagens.
minhas_imagens.forEach(
    (ele) => {
        ele.caminho = '../imagens/numero_' + ele.valor + '.png';
    }
)

const cartao = ( clicar ) => {
    const container = document.createElement('div');
    const imagem = document.createElement('img');
    const legenda = document.createElement('h5');

    container.style.border = '1px solid black';
    container.style.borderRadius = '10px';
    container.style.width = 'fit-content';
    container.style.textAlign = 'center';
    container.style.margin = '0 auto';
    container.style.padding = '30px';
    container.style.fontFamily = 'sans-serif';
    container.style.userSelect = 'none';

    imagem.src = clicar.src;
    imagem.width = 200;

    legenda.innerHTML = clicar.alt;

    container.appendChild(imagem);
    container.appendChild(legenda);

    div_imagem.appendChild(container);
}

// Manipulando o evento
const manipula_evento = ( evento ) => {
    const imagem_clicada = evento.target;
    div_imagem.innerHTML = '';
    cartao(imagem_clicada);
}

const criar_imagens = (entrada) => {
    div_lista_imagens.innerHTML = '';
    entrada.forEach(
        ( ele ) => {
            const imagem_numero = document.createElement('img');
            imagem_numero.src = ele.caminho;  
            imagem_numero.width = 100;
            imagem_numero.className = 'imagem_da_lista';
            imagem_numero.alt = ele.descricao;
            imagem_numero.onclick = manipula_evento;

            div_lista_imagens.appendChild(imagem_numero);
        }
    );
}

criar_imagens(minhas_imagens);

// Tratando entrada de busca;

const manipula_evento_busca = (e) => {
    const string_busca = e.target.value.toLowerCase();
    const novo_array = minhas_imagens.filter((elemento) => {
        return elemento.descricao.includes(string_busca);
    });
    criar_imagens(novo_array);
}

input_busca.onchange = manipula_evento_busca; // Onkeyup -> disparado toda vez eu digita UMA letra