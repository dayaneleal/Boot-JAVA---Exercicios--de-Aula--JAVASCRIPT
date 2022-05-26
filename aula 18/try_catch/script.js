let m = 0.5

try {
  if (typeof m != 'number') throw new Error('Digite um número válido')
  if (m < 0) throw new Error('O número não pode ser negativo')
  if (m % 1 != 0) throw new Error('Digite um número inteiro')
} catch (erro) {
  console.log(erro)
}
