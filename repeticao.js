const minhaPrincesa = {
    nome: "Lisa",
    idade: 26,
    email: "lalisa.manoban@blackpink.com",
    profissao: ["Singer", "Songwritter", "Actress"]
} // primeiro objeto

minhaPrincesa.grupo = {
    nomeGrupo: "Blackpink",
    membros: ["Jennie", "Jisoo", "Lisa", "Rosé"],
    ano: 2016,
    melhorMusica: "As If It's Your Last"
} // novo objeto aninhado

    for (let chave in minhaPrincesa){
        let tipo = typeof minhaPrincesa[chave];
            if (tipo !== 'object' && tipo !== 'function'|| Array.isArray(minhaPrincesa[chave])){
            console.log(`O valor da propriedade ${chave} é ${minhaPrincesa[chave]}`)
            }
    }// laço de repetição para mostrar o valor de cada propriedade, exceto se for um objeto ou um array