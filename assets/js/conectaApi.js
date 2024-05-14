async function listaProduto() {
    const conexao = await fetch("http://localhost:3000/produto")
    const conexaoConvertida = await conexao.json()
    
    return conexaoConvertida
}

async function criaProduto(nome, valor, imagem) {
    const conexao = await fetch("http://localhost:3000/produto", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            valor: `$ ${valor}`,
            imagem: imagem
        })
    })

    const conexaoConvertida = await conexao.json()

    return conexaoConvertida
}

export const conectaApi = {
    listaProduto,
    criaProduto
}