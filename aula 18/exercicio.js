window.onload = () => {
  let veiculos = ['ônibus', 'motocicleta', 'patinete']

  let botao = document.querySelector('#btn')
  let div = document.querySelector('.lista')

  botao.addEventListener('click', () => {
    div.innerHTML = ''
    veiculos.forEach(el => {
      let elemento = document.createElement('li')
      elemento.innerHTML = el
      div.appendChild(elemento)
    })
  })
}
