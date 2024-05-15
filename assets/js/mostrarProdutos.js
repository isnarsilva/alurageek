import { conectaApi } from "./conectaApi.js"

const lista  = document.querySelector("[data-lista]")

function constroiCard(nome, valor, imagem, id) {
    const produto = document.createElement('li')
    produto.className = 'principal_produto_lista_detalhe'
    produto.innerHTML = `<img class="principal_produto_lista_detalhe_imagem" src="${imagem}" alt="">
                            <p class="principal_produto_lista_detalhe_titulo">${nome}</p>
                            <div class="principal_produto_lista_detalhe_info">
                                <p class="principal_produto_lista_detalhe_info_valor">${valor}</p>
                                <i class="fa-regular fa-trash-can principal_produto_lista_detalhe_info_lixeira" id="excluir" data-id=${id}></i>
                        </div>`

    return produto
}

async function excluirCard(event) {

    const idRegistro = event.target.closest('.principal_produto_lista_detalhe_info_lixeira').dataset.id
    
    try {
        await fetch(`http://localhost:3000/produto/${idRegistro}`, {
            method: 'DELETE'
        })
     
    } catch(error) {
        console.error('Erro ao exluir o card!', error)
    }
     
     
}

async function listaProduto() {
    const listaApi = await conectaApi.listaProduto()
    listaApi.forEach(elemento => lista.appendChild(
        constroiCard(elemento.nome, elemento.valor, elemento.imagem, elemento.id)))
}

document.addEventListener('click', function(event) {
    // Verifique se o elemento clicado é um ícone de lixeira com o atributo 'data-id'
    if (event.target.matches('[data-id]')) {
        // Chame a função para excluir o card
        excluirCard(event);
    }
})

listaProduto()