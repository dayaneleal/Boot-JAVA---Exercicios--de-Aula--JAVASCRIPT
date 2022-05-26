import removerProd from '../../aula 17/script.js'

window.onload = () => {
  const btnBuscar = document.querySelector('#btnCadastrar')
  const txtNomeCli = document.querySelector('#nomeCliente')
  const listar = document.querySelector('.listar')
  let array = []

  btnBuscar.addEventListener('click', function () {
    let dataSetCliente = txtNomeCli.dataset.codigo

    for (elemento of array) {
      if (elemento == txtNomeCli.value) {
        alert('O nome já existe na lista')
        return
      }
    }

    let lista = document.createElement('li')
    listar.appendChild(lista).textContent = txtNomeCli.value
    array.push(txtNomeCli.value)
  })

  removerProd()
}
