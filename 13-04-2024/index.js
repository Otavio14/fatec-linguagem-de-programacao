/**
 ** Para verificar se a função está correta, execute os comandos abaixo no terminal
 ** npm run test -- ./13-04-2024/index.test.js
 */

/*
    Crie uma classe chamada Estudante, essa classe deve conter os atributos:
    nome, e-mail, RA, curso e uma lista com o nome das disciplinas que o
    estudante está matriculado. A classe também deve ter dois métodos:
    primeiraDisciplina e ultimaDisciplina que vão devolver respectivamente a
    primeira disciplina que o estudante está matriculado e a última.
    
    Para testar, crie dois estudantes de exemplo e imprima os valores na tela.
    * Eu não coloquei o log no código, mas acho que o teste com o Jest faz bem esse papel.
*/

export default class Estudante {
  constructor(nome, email, ra, curso, disciplinas) {
    this.nome = nome;
    this.email = email;
    this.ra = ra;
    this.curso = curso;
    this.disciplinas = disciplinas;
  }

  primeiraDisciplina() {
    return this.disciplinas[0];
  }

  ultimaDisciplina() {
    return this.disciplinas[this.disciplinas.length - 1];
  }
}
