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

const cartao = (clicar) => {
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

    div_imagem.innerHTML = '';

    div_imagem.appendChild(container);
}

// Manipulando o evento
const manipula_evento = (evento) => {
    const imagem_clicada = evento.target;
    document.cookie = `valor=${imagem_clicada.dataset.valor}`;
    document.cookie = `nome=${imagem_clicada.dataset.nome}`;
    
    // SessionStorage
    sessionStorage.setItem('valor', imagem_clicada.dataset.valor);
    sessionStorage.setItem('nome', imagem_clicada.dataset.nome);
    sessionStorage.setItem('descricao', imagem_clicada.dataset.descricao);
    sessionStorage.setItem('caminho', imagem_clicada.src);

    // SessionStorage
    localStorage.setItem('valor', imagem_clicada.dataset.valor);
    localStorage.setItem('nome', imagem_clicada.dataset.nome);
    localStorage.setItem('descricao', imagem_clicada.dataset.descricao);
    localStorage.setItem('caminho', imagem_clicada.src);

    cartao(imagem_clicada);
}

const criar_imagens = (entrada) => {
    div_lista_imagens.innerHTML = '';
    entrada.forEach(
        (ele) => {
            const imagem_numero = document.createElement('img');
            imagem_numero.src = ele.caminho;
            imagem_numero.width = 100;
            imagem_numero.className = 'imagem_da_lista';
            imagem_numero.alt = ele.descricao;
            imagem_numero.onclick = manipula_evento;

            // Dados
            imagem_numero.dataset.nome = ele.nome;
            imagem_numero.dataset.valor = ele.valor;
            imagem_numero.dataset.descricao = ele.descricao;

            div_lista_imagens.appendChild(imagem_numero);
        }
    );
}

criar_imagens(minhas_imagens);

// Tratando entrada de busca;

const manipula_evento_busca = (e) => {
    const pre_string_busca = e.target.value;                    
    const string_busca = pre_string_busca.toLowerCase();

    if (string_busca.length >= 3 || string_busca.length == 0) {
        const novo_array = minhas_imagens.filter(
            (elemento) => {
                const descricao = elemento.descricao.toLowerCase();
                return elemento.descricao.toLowerCase().includes(string_busca);
        });
        criar_imagens(novo_array);
    }
}

input_busca.onkeyup = manipula_evento_busca; // Onkeyup -> disparado toda vez eu digita UMA letra