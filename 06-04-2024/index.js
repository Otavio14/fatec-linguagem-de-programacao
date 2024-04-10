/**
 ** Para verificar se a função está correta, execute os comandos abaixo no terminal
 ** npm run test -- ./06-04-2024/06-04-2024.test.js
 */

/*
    Crie funções que devem ter como parâmetro uma propriedade “lista” que vai
    receber um array com vários números, as funções devem ser criadas para
    devolver os dados conforme solicitado:
*/

//* Uma função que devolve os valores que são maiores que a média
export function valoresMaiorMedia(lista) {
  const media = lista.reduce((acc, cur) => acc + cur) / lista.length;
  return lista.filter((item) => item > media);
}

//* Uma função que devolva o menor valor da lista
export function menorValor(lista) {
  return Math.min(...lista);
}

//* Uma função que devolva o valor da soma dos itens da lista
export function somaItens(lista) {
  return lista.reduce((acc, cur) => acc + cur, 0);
}

//* Uma função que devolva todos os valores que são menores que 20
export function valoresMenor20(lista) {
  return lista.filter((item) => item < 20);
}

//* Uma função que vai devolver o primeiro e o último valor da lista
export function primeiroUltimo(lista) {
  return [lista[0], lista[lista.length - 1]];
}
