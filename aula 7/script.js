let verificadorNumero = (num1, num2) => {
  if (num1 >= num2) {
    if (num1 == num2) {
      console.log(`${num1} é igual a ${num2}`)
    } else {
      console.log(`${num1} é maior que ${num2}`)
    }
  } else {
    console.log(`${num1} é menor que ${num2}`)
  }
}

verificadorNumero(2, 2)

//AUTO-EXECUTÁVEL
;(function (produto, preco) {
  console.log('Função auto executável')
  console.log(`O produto é ${produto} e o preço é ${preco}`)
})('Biscoito', 2.35)

v1 = '2'
v2 = '22'

const soma = (v1, v2) => {
  console.log(parseInt(v1) + parseFloat(v2))
}

soma(v1, v2)
