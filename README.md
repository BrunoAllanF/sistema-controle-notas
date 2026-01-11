# Sistema de Controle de Notas

Este projeto foi desenvolvido como parte de um processo seletivo para a vaga de Estágio em Desenvolvimento na empresa **DTI Digital**.

A solução foi dividida em **backend e frontend**, com foco principal no **backend em .NET 8**, conforme solicitado no desafio técnico.

---

##  Visão Geral

O sistema permite o cadastro de alunos, registro de notas em cinco disciplinas e controle de frequência, realizando automaticamente os cálculos de médias e identificando situações específicas.

---

##  Backend — ASP.NET Core (.NET 8)

O backend foi desenvolvido utilizando **ASP.NET Core com .NET 8**, atendendo integralmente ao requisito técnico do desafio.

### Funcionalidades do backend

- Cadastro de alunos
- Armazenamento dos dados em memória
- Cálculo da média de cada aluno
- Cálculo da média geral da turma
- Identificação de alunos com média acima da média da turma
- Identificação de alunos com frequência inferior a 75%

### Tecnologias utilizadas (Backend)

- .NET 8
- ASP.NET Core Web API
- C#
- Swagger (para testes da API)

### Como executar o backend

#### Pré-requisitos
- .NET 8 SDK
- ASP.NET Core Runtime 8

#### Passos para execução

```bash
cd backend/SistemaNotas.Api
dotnet run
```
A API estará disponível em:
http://localhost:5023

Swagger:
http://localhost:5023/swagger

Swagger:

## Frontend — React

- O frontend foi desenvolvido utilizando React, com o objetivo de fornecer uma interface simples para cadastro de alunos e visualização dos cálculos realizados pelo sistema.

- Essa camada é responsável apenas pela interação com o usuário, enquanto toda a lógica de cálculo está concentrada no backend.

# Tecnologias utilizadas (Frontend)

- React

- JavaScript

- Vite

-HTML

-CSS

## Como executar o frontend

# Pré-requisitos

- Node.js (versão 18 ou superior)
- NPM

# Passos para execução
```bash
cd frontend/sistema-notas
npm install
npm run dev
```
O frontend estará disponível em:
http://localhost:5173

## Premissas Assumidas
- O sistema trabalha com exatamente cinco disciplinas
- As notas variam de 0 a 10
- A frequência é informada em percentual (0 a 100)
- Os dados são mantidos apenas em memória
- O sistema não utiliza banco de dados
- A aplicação é destinada a um único usuário

## Decisões de Projeto
- O backend foi priorizado em .NET 8, conforme solicitado no desafio
- Os dados são armazenados em memória para manter simplicidade
- A API segue o padrão REST
- O Swagger foi utilizado para facilitar testes e validações

## Melhorias Futuras
- Persistência de dados em banco de dados
- Integração completa entre frontend e backend
- Testes automatizados
- Autenticação de usuários
- Deploy em ambiente de produção
