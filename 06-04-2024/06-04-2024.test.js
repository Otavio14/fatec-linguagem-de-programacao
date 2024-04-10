import {
  valoresMaiorMedia,
  menorValor,
  somaItens,
  valoresMenor20,
  primeiroUltimo,
} from "./index.js";

describe("Test Array Functions", () => {
  const lista = [10, 20, 30, 40, 50];

  test("valoresMaiorMedia: Uma função que devolve os valores que são maiores que a média", () => {
    expect(valoresMaiorMedia(lista)).toEqual([40, 50]);
  });

  test("menorValor: Uma função que devolva o menor valor da lista", () => {
    expect(menorValor(lista)).toBe(10);
  });

  test("somaItens: Uma função que devolva o valor da soma dos itens da lista", () => {
    expect(somaItens(lista)).toBe(150);
  });

  test("valoresMenor20: Uma função que devolva todos os valores que são menores que 20", () => {
    expect(valoresMenor20(lista)).toEqual([10]);
  });

  test("primeiroUltimo: Uma função que vai devolver o primeiro e o último valor da lista", () => {
    expect(primeiroUltimo(lista)).toEqual([10, 50]);
  });
});
