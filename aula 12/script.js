let frutas = [
  { nome: 'Banana', preço: 2.99 },
  { nome: 'Maçã', preço: 4.59 },
  { nome: 'Pessego', preço: 8.99 }
]

let objeto = function (array) {
  for (item of array) {
    for (propriedade in item) {
      console.log(`${propriedade} -> ${item[propriedade]}`)
    }
    console.log('---------')
  }
}

objeto(frutas)
