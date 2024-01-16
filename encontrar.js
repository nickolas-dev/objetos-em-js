// 1.carregando a lista de clientes
const dados = require("./clientes.json"); 

// 2. e 3. criando a função encontrar e o método find e 5. utilizando includes
function encontrar (lista, chave, valor){
    return lista.find((item) => item[chave].includes(valor));
}; 

// 4. testando a função
const encontrado = encontrar(dados, "nome", "Kirby");
console.log(encontrado); 

// 6. testando a função novamente
const encontrado2 = encontrar(dados, "telefone", "4733865848");
console.log(encontrado2); 
