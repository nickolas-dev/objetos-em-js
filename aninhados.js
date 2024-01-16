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

console.log(minhaPrincesa); // console.log do primeiro objeto
console.log(minhaPrincesa.grupo); // console.log do objeto aninhado
console.log(minhaPrincesa.grupo.nomeGrupo); // console.log de uma propriedade do objeto aninhado
