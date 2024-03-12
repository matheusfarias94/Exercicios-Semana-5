

let Carrinho = [];


// Captura a identificação do produto a partir de um elemento com a classe 'idProduto'
function Valor() {
    let identificação = document.querySelector('.idProduto').value

    // Verifica se a identificação corresponde a "banana"
    if (identificação === 'banana') {
        document.getElementById('preçoProduto').innerText = 'O valor do produto é R$3,99kg'

    } else {
        document.getElementById('preçoProduto').innerText = 'Produto não cadastrado'


    }
}

function adicionar() {
    // Captura o nome do produto a partir de um elemento com a classe 'idProduto'


    let nomeProduto = document.querySelector('.idProduto').value;


    // Atualiza a exibição do carrinho na página
    if (nomeProduto === '') {
        alert('Carrinho vazio');
    } else {
        // Cria um objeto representando o produto a ser adicionado ao carrinho
        let produto1 = {
            nome: nomeProduto,
            preço: 3.99 // Define o preço do produto 
        };
        let container = document.querySelector('#carrinho');
        let elementoCriado = document.createElement('li');
        elementoCriado.textContent = `${produto1.nome} - R$ ${produto1.preço.toFixed(2)}`;
        container.appendChild(elementoCriado);
        // Adiciona o produto ao carrinho
        Carrinho.push(produto1);
        

        // Armazena o array atualizado no Local Storage
        localStorage.setItem("meuArray", JSON.stringify(Carrinho));
        
        // Recupera o array do Local Storage, se existir
        let arrayArmazenado = JSON.parse(localStorage.getItem("meuArray"));




    }

}

// Verifica se o carrinho está vazio
function somaCarrinho() {
    if (Carrinho.length === 0) {
        alert('Carrinho vazio');
        return;
    }

    // Calcula o valor total dos itens no carrinho
    let total = Carrinho.reduce((accumulator, value) => accumulator + value['preço'], 0);


    // Exibe o valor total na página
    let container = document.querySelector('#valorTotal');
    container.innerHTML = '';
    let elementoCriado = document.createElement('p');
    elementoCriado.textContent = `Valor total = R$ ${total.toFixed(2)}`;
    container.appendChild(elementoCriado);
}




