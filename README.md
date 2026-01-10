## Sistema de Controle de Notas

Este projeto foi desenvolvido como parte de um processo seletivo para a vaga de Estágio em Desenvolvimento na DTI Digital.

O sistema permite o cadastro de alunos, inserção de notas em cinco disciplinas e controle de frequência, realizando automaticamente os cálculos solicitados.

## Funcionalidades

- Cadastro de alunos com nome, cinco notas e frequência
- Cálculo automático da média de cada aluno
- Cálculo da média geral da turma
- Cálculo da média da turma por disciplina
- Identificação de alunos com média acima da média da turma
- Identificação de alunos com frequência abaixo de 75%

## Tecnologias utilizadas

- React
- JavaScript
- Vite
- HTML
- CSS básico

## Como executar o projeto

### Pré-requisitos
- Node.js instalado (versão 18 ou superior)

### Passos para execução

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
```
2. Acesse a pasta do projeto:
```bash
cd sistema-notas
```

3. Instale as dependências:
```bash
npm install
```

4. Execute o projeto:
```bash
npm run dev
```
5. Abra o navegador no endereço indicado no terminal (geralmente http://localhost:5173).

## Premissas assumidas
- O sistema trabalha com exatamente cinco disciplinas

- As notas variam de 0 a 10

- A frequência é informada em percentual (0 a 100)

- Os dados são mantidos apenas em memória, sem persistência em banco de dados

- O sistema é destinado a um único usuário (professor)

## Decisões de projeto
- O sistema foi implementado inteiramente no front-end para manter a simplicidade e focar na lógica solicitada

- A lógica de cálculo foi separada em funções utilitárias para facilitar manutenção e leitura

- A interface foi mantida simples, priorizando funcionalidade e clareza

## Melhorias futuras
- Implementação de persistência de dados

- Criação de um back-end para armazenamento das informações

- Validação mais avançada dos dados de entrada

- Estilização aprimorada da interface