let amigos = [];

function add(){
    let amigoInput = document.getElementById('nome-amigo');
    let amigo = amigoInput.value.trim().toLowerCase(); // Convertendo o nome do amigo para minúsculas e removendo espaços extras
    
    if (amigo == ''){
        alert('INSIRA O NOME DO AMIGO!');
        amigoInput.value = '';
        return; // Retorna para evitar que o código continue executando.
    }

    // Verifica se já existe o nome na lista do array através da palavra includes
    if(amigos.includes(amigo)){
        alert('JÁ EXISTE ESSE NOME NA LISTA! INFORMAR UM NOME DIFERENTE');
        return; // Retorna para evitar que o código continue executando.
    }
    
    let lista = document.getElementById('lista-amigos');
    amigos.push(amigo);

    if (lista.textContent == '') {
     lista.textContent = amigo;

    } else {
        lista.textContent = lista.textContent + ', ' + amigo;

    }
    amigoInput.value = '';

}   

function sortear(){  
    // Verifica se há a quantidade necessária para sortear
    if (amigos.length < 3){
        alert('Adicione pelo menos 3 amigos!');
        return;
    }

    // Limpa a lista de sorteio toda vez que clicar novamente se adicionado um novo nome
    document.getElementById('lista-sorteio').innerHTML = '';

    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    // Gera o sorteio indicando quem deve presentear quem.
    for (let i = 0; i < amigos.length; i++){
        if (i == amigos.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>'; // Se o amigo atual for o último, o presenteado será o primeiro.
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>'; // Caso contrário, o presenteado será o próximo amigo na lista.
        }
    }
}

// Embaralhar a ordem dos amigos na lista
function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        // Atribuição via destructuring
        // Troca de lugar dois elementos da lista de forma aleatória.
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = ''; // Limpa o conteúdo da lista de amigos.
    document.getElementById('lista-sorteio').innerHTML = ''; // Limpa o conteúdo da lista de sorteio
}
