window.onload = function () {
  let num_1 = document.getElementById('num_1')
  let num_2 = document.getElementById('num_2')
  let resultado = document.getElementById('resultado')

  num_2.addEventListener('focusout', () => {
    let soma = parseInt(num_1.value) + parseInt(num_2.value)
    resultado.value = soma
  })
}
