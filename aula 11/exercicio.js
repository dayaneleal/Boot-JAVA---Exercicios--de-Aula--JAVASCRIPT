let inversao = (palavra = 'Marcelo') => {
  let array = palavra.split('')
  console.log(array.reverse().join('').toLowerCase())
}

inversao()
