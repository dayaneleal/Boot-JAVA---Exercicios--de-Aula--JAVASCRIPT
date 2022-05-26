let array = ['Pera', 'Uva', 'Laranja', 'Maçã']

let funcao = (array, fruta, num) => {
  let tamanho = array.length
  array.push(fruta)
  let tamanhoNovo = array.length

  console.log(`Quantidade de elementos do array...: ${tamanho}`)
  console.log(`Você escolheu o índice ${num} que é o elemento ${array[num]}`)
  console.log(
    `A qtd atual do array é ${tamanhoNovo}. O novo elemento inserido foi ${fruta}.`
  )
}

funcao(array, 'Banana', 2)
