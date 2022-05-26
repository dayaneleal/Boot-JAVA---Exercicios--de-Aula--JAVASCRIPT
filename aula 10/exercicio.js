let palavra = 'Dayane'

let tamanho = palavra => {
  console.log(palavra.length)
  console.log(palavra.toUpperCase())
  console.log(palavra[2])
  console.log(palavra.replace(palavra[2], 'X'))
}

tamanho(palavra)
