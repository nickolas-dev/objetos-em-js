// 2. importando a lista de objetos
const clientes = require("./clientes.json");

// 3. criando a função ordenar
function ordenar(lista, propriedade) {
    const resultado = lista.sort((a, b) => {
      if (a[propriedade] < b[propriedade]) {
        return -1;
      }
      if (a[propriedade] > b[propriedade]) {
        return 1;
      }
      return 0;
    });
    return resultado;
  }

  const listaOrdemAlfabetica = ordenar(clientes, "nome");
  console.log(listaOrdemAlfabetica);