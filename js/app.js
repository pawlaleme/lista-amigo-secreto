let amigos = [];



function add(){
    let amigo = document.getElementById('nome-amigo');
    if (amigo.value == ''){
        alert('INSIRA O NOME DO AMIGO!');
        amigo.value = '';
        return; // Retorna para evitar que o código continue executando.
    }
    //verifica se ja existe o nome na lista do array atraves da palavra includes
    if(amigos.includes(amigo.value)){
        alert('JÁ EXISTE ESSE NOME NA LISTA! INFORMAR UM NOME DIFERENTE');
        return; // Retorna para evitar que o código continue executando.
    }
    
    let lista = document.getElementById('lista-amigos');
    amigos.push(amigo.value);

    if (lista.textContent == '') {
     lista.textContent = amigo.value;

    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;

    }
    amigo.value = '';

}   

    function sortear(){  
        //verifica se há a quantidade necessaria para sortear
        if (amigos.length <3){
            alert('Adicione pelo menos 3 amigos!');
            return;
        }
        //limpa a lista de sorteio toda vez que clicar novamente se adicionado um novo nome
        document.getElementById('lista-sorteio').innerHTML = '';

        embaralha(amigos);
        let sorteio = document.getElementById('lista-sorteio');

        // Gera o sorteio indicando quem deve presentear quem.
        for (let i = 0; i < amigos.length; i++){
        if (i == amigos.length - 1){
          sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>' // Se o amigo atual for o último, o presenteado será o primeiro.

        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>' // Caso contrário, o presenteado será o próximo amigo na lista.

        }
        }
    }

//embaralhar a ordem dos amigos na lista
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        //// Troca de lugar dois elementos da lista de forma aleatória.
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

amigo.value = '';
document.getElementById('lista-sorteio').innerHTML = '';
document.getElementById('lista-sorteio').innerHTML = '';// Limpa o conteúdo da lista de sorteio
sortear();
// Limpa o campo de entrada após adicionar o amigo.


function reiniciar(){
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = ''; // Limpa o conteúdo da lista de amigos.
    document.getElementById('lista-sorteio').innerHTML = '';// Limpa o conteúdo da lista de sorteio
}


