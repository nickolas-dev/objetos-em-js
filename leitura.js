const dados = require("./cliente.json")

//console.log(dados);
//console.log(typeof dados);

// objeto em string
const objetoEmString = JSON.stringify(dados);
console.log(objetoEmString);
console.log(typeof objetoEmString);

// string em objeto
const stringObjeto = JSON.parse(objetoEmString);
console.log(stringObjeto);
console.log(typeof stringObjeto);