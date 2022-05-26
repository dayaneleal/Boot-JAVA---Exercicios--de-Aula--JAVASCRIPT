window.onload = function () {
  const ulPai = document.querySelectorAll('#ulPai')
  console.log(ulPai)

  ulPai.forEach(elemento => {
    console.log(elemento.innerHTML)
  })

  ulPai.forEach(elemento => {
    elemento.addEventListener('click', elemento => {
      alert(elemento.target.innerHTML)
    })
  })
}
