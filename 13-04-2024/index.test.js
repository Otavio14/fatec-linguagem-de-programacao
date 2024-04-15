import Estudante from "./index.js";

describe("Estudante class", () => {
  const estudante = new Estudante(
    "John Doe",
    "john.doe@example.com",
    "123456",
    "Computer Science",
    ["Matemática", "Física", "Química"]
  );

  test("primeiraDisciplina deve retornar a primeira disciplina que o estudante está matriculado", () => {
    expect(estudante.primeiraDisciplina()).toBe("Matemática");
  });

  test("ultimaDisciplina deve retornar a última disciplina que o estudante está matriculado", () => {
    expect(estudante.ultimaDisciplina()).toBe("Química");
  });
});
