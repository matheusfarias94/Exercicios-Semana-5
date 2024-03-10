let Carrinho = [];






function Valor() {
    let identificação = document.querySelector('.idProduto').value


    if (identificação === 'banana') {
        document.getElementById('preçoProduto').innerText = 'O valor do produto é R$3,99kg'

    } else {
        document.getElementById('preçoProduto').innerText = 'Produto não cadastrado'


    }
}

function Comprar() {

    let produto1 = {
        nome: document.querySelector('.idProduto').value,
        preço: 3.99
    };
    Carrinho.push(produto1)
    
    
    let container = document.querySelector('#carrinho');
    let elementoCriado = document.createElement('li')
    elementoCriado.appendChild(document.createTextNode(Object.values(Carrinho [0])))
    console.log(elementoCriado)
    container.appendChild(elementoCriado);

}

function somaCarrinho() {

    let total = Carrinho.reduce((acumulator,value) => acumulator+value['preço'],0);
    console.log(total)

    


    if (total >= 1) {
        let container = document.querySelector('#valorTotal')
        let elementoCriado = document.createElement('p');
        container.appendChild(document.createTextNode(`valor total = R$ ${total} `))
        container.appendChild(elementoCriado)

    } else {
        alert('Carrinho vazio')
    }
    

    
}



