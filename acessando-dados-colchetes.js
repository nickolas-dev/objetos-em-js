// 1. criando o objeto 'aluno'
const aluno = {
    nome: "Nickolas",
    idade: 26,
    curso: "Alura",
    nota: 10
};

// 2. exibindo no console as propriedades do objeto
console.log(aluno["nome"]);
console.log(aluno["idade"]);
console.log(aluno["curso"]);
console.log(aluno["nota"]);

// 3. criando o array 'propriedades'
const propriedades = ["nome", "idade", "curso", "nota"];

// 4. utilizando o método forEach para percorrer o array
propriedades.forEach( (chave) => {
   console.log(`O nome da chave é ${chave} e o seu valor é ${aluno[chave]}`)
});