# Desafio - Escrevendo as Classes de um Jogo

Neste desafio foi proposto pela plataforma [Dio.me], com o objetivo de praticar os principais fundamentos da programação orientada a objeto em JavaScript.

## Conceitos aplicados
- Variaveis
- Operadores
- Laços de repetição
- Estrutura de decisão
- Funções
- Classes e Objetos

## Descrição da classe
Criei uma classe chamada `Heroi` com as seguintes propriedades:
- `name` (string)
- `age` (number)
- `type` (string) - guerreiro, mago, monje ou ninja

A classe também possui um método chamado `attack()` que retorna a frase: 
> "o {tipo} atacou usando {ataque}

A palavra `{attack}` varia conforme o tipo de herói, confome a tabela abaixo:
| tipo      | Ataque         |
|-----------|----------------|
| mago      | magia          |
| guerreiro | espada         |
| monge     | artes marciais |
| ninja     | shuriken       |

## Exemplo de uso

```js
const heroi1 = new heroi("Zin", 30, "mago");
const heroi2 = new heroi("Ragnar, 45, "guerreiro");

heroi1.attack(); //mago atacou usando magia.
heroi2.attack(); //guerreiro atacou usando espada.
