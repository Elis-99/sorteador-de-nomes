let nomes = [];
const botaoAdiciona = document.querySelector('.button-add');
const resultado = document.getElementById('resultado');
const botaoSorteia = document.querySelector('button-draw');

function adicionarAmigo() {
    let campo = document.getElementById('amigo');
    const nome = campo.value.trim();
    if (nome !== '') {
        nomes.push(nome);
        campo.value = '';
        campo.focus();
        atualizarLista();
    } else {
        alert('O campo está vazio. Por favor, digite um nome.');
    }
}

function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    nomes.forEach(nome => {
        const itemLista = document.createElement('li');
        itemLista.textContent = nome;
        listaAmigos.appendChild(itemLista);
    });
}

function sortearAmigo() {
    if (nomes.length === 0) {
        alert('Adicione nomes à lista para que haja o serteio.');
        return
    }
    const indiceSorteado = Math.floor(Math.random() * nomes.length);
    const nomeSorteado = nomes[indiceSorteado];
    resultado.textContent = `O Amigo Sorteado é ${nomeSorteado}`
    nomes = [];
    atualizarLista();
}
