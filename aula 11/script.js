function Pessoa(nome) {
  this.nome = nome
}

Pessoa.prototype.msg = function () {
  console.log('Olá! ' + this.nome)
}

let novaPessoa = new Pessoa('José')
console.log(novaPessoa.nome)
novaPessoa.msg()

// let Pessoa = {
//   'nome':'Maria',
//   'idade': 28
// }

// Pessoa.__proto__.msg = function(){
//   console.log("Olá " + Pessoa.nome);
// }

// let Dayane = Pessoa;
// Dayane.nome = "Dayane"
// Dayane.idade = 30
// Dayane.msg()
