let newJeans = {
    membros: ["Danielle", "Haerin", "Hanni", "Hyerin", "Minji"],
    idades: [18, 17, 19, 15, 19],
    nascimento: {
      pais: ["Australia", "Coreia", "Vietna", "Korea", "South Korea"],
    },
  };
  
  function extrair(membro, idade, nasceu) {
    console.log(`A ${membro} tem ${idade} anos e nasceu em ${nasceu}.`);
  }
  
  const { membros, idades, nascimento } = newJeans;
  
  for (let i = 0; i < 5; i++) {
    extrair(membros[i], idades[i], nascimento.pais[i]);
  }