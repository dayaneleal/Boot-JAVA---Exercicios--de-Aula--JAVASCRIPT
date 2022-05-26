window.onload = function () {
  let botao = document.getElementById('btn')

  botao.addEventListener('click', () => {
    let divResultado = document.getElementById('resultado')
    let num = document.getElementById('num').value

    divResultado.innerHTML = ''

    for (let i = 0; i <= 10; i++) {
      let value = num * i
      divResultado.innerHTML += `${num} x ${i} = ${value} <br>`
    }
  })
}
