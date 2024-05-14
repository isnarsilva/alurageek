import { conectaApi } from "./conectaApi.js"

const formulario = document.querySelector("[data-formulario]")

async function criarProduto(evento) {
    evento.preventDefault()

    const nome = document.querySelector("[data-nome]").value
    const valor = document.querySelector("[data-valor]").value
    const imagem = document.querySelector("[data-imagem]").value
    const id = document.querySelector("[data-id]").value

    await conectaApi.criaProduto(nome, valor, imagem, id) 

    

}

formulario.addEventListener("submit", evento => criarProduto(evento))