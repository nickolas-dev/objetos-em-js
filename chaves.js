const minhaPrincesa = {
    nome: "Lisa",
    idade: 26,
    email: "lalisa.manoban@blackpink.com",
    profissao: ["Singer", "Songwritter", "Actress"]
  };
  
  const chavesDoObjeto = Object.keys(minhaPrincesa);
  console.log(chavesDoObjeto);
  
  if (!chavesDoObjeto.includes("profissoes")) {
    console.error("Erro. É necessário ter uma profissão cadastrada.");
  }