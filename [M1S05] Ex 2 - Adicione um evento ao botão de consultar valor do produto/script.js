function Valor() {
    let nome = document.querySelector('.idProduto').value


    if (nome  === 'banana') {
        document.getElementById('preçoProduto').innerText = 'O valor do produto é R$3,99kg'
        
    } else {
        document.getElementById('preçoProduto').innerText = 'Produto não cadastrado'


    }
}


