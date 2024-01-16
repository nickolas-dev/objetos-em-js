// chamando um arquivo JSON
const clientes = require("./clientes.json");

// criando/implementando a função
function filtrarApartamentoSemComplemento(clientes) {
    return clientes.filter((cliente) => {
      return (
        cliente.endereco.apartamento &&
        !cliente.endereco.hasOwnProperty("complemento")
      );
    });
  }

// chamando a função  
const filtrados = filtrarApartamentoSemComplemento(clientes);
console.log(filtrados);