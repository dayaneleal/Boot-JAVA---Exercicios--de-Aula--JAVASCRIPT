// let nome = ['João', 'Maria', 'José', 'Pedro', 'Paulo']

// let nome2 = ['Carlos', 'Madalena', 'Samanta']

// //Irá unir todos os nomes em um único array
// let todosNomes = nome.concat(nome2)
// console.log(todosNomes)

// console.log(todosNomes.indexOf('José'))

// //---------------------------------
// let buscaNome = (array, nome) => {
//   if (array.indexOf(nome) != -1) {
//     console.log(
//       `O nome ${nome} encontra-se no array e está na posição ${array.indexOf(
//         nome
//       )}`
//     )
//   }
// }

// buscaNome(todosNomes, 'Carlos')

// //Transforma numa única string
// console.log(nome.join())

// //Push - insere na última posição
// //Pop - remove da última posição
// let nome = ['João', 'Maria', 'José', 'Pedro', 'Paulo']
// nome.pop()
// console.log(nome)

// //Reverse
// nome.reverse()
// console.log(nome)

//SHIFT - REMOVE O PRIMEIRO ELEMENTO
//SORT - não é muito preciso...

//SPLICE
let nome = ['João', 'Maria', 'José', 'Pedro', 'Paulo']
let novoNomeArray = nome.splice(2, 2)
//indice, número de elementos a ser removido
console.log(novoNomeArray)
console.log(nome)
