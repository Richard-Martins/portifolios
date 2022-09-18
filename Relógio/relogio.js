var idade = 17;
if (idade < 18) {
  console.log(`Não Vota`);
} else {
  console.log(`Voto Obrigatório`);
  if (idade < 16) {
    console.log(`Voto Opcional`);
  }
}
