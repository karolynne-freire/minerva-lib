
# 📚 Minerva Lib

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-orange) ![Node.js](https://img.shields.io/badge/Node.js-18-green) ![MySQL](https://img.shields.io/badge/MySQL-8-blue) ![Next.js](https://img.shields.io/badge/Next.js-14-black)

**Minerva Lib** é um sistema de gerenciamento de biblioteca desenvolvido como **monorepo** (backend + frontend), criado como parte de um **trabalho da disciplina Web3**.
O objetivo é oferecer uma plataforma simples e eficiente para gerenciar **livros, autores e empréstimos**.

---

## 🗂 Estrutura do Repositório

```
minerva-lib/
 ├── backend/      → API em Express.js + MySQL
 └── frontend/     → Aplicação em Next.js
```

> 🔹 **Monorepo**: significa que backend e frontend estão no mesmo repositório, mas organizados em pastas separadas.

---

## 🔧 Backend — Express.js + MySQL

O backend contém toda a API da biblioteca:

* ✔ CRUD de **livros**
* ✔ CRUD de **autores**
* ✔ Registro e **controle de empréstimos**
* ✔ Devolução de livros
* ✔ Arquitetura **MVC**
* ✔ Banco de dados relacional com MySQL

### Pré-requisitos

* Node.js 18 LTS
* MySQL 8
* NPM
* Editor de código (VS Code, WebStorm, Sublime, etc.)
* Navegador moderno (Chrome, Firefox, Edge, etc.) para testar o frontend

⚠️ O VS Code é recomendado por facilitar a edição de arquivos, uso do terminal integrado e extensões úteis como ESLint e Prettier.

Perfeito! 😄 Então podemos deixar o README bem didático, explicando **passo a passo desde clonar o repositório até rodar backend e frontend**. Aqui vai um exemplo de seção atualizada que você pode adicionar ao README:

---

## 🏁 Começando

Para rodar o projeto localmente, siga os passos abaixo:

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/karolynne-freire/minerva-lib.git
```

### 2️⃣ Abra o projeto em uma IDE ou editor de código

Recomendamos **Visual Studio Code (VS Code)**, mas qualquer editor funciona.

```bash
cd minerva-lib
code .
```

> 🔹 O `code .` abre o projeto no VS Code a partir do terminal.

### 3️⃣ Backend — Express.js + MySQL

1. Entre na pasta do backend:

```bash
cd backend
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o arquivo `.env` com seus dados de banco:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=minerva_lib
DB_PORT=3306
PORT=3001
```

4. Crie o banco de dados no MySQL:

```sql
CREATE DATABASE minerva_lib;
USE minerva_lib;
```

5. Inicie o servidor backend:

```bash
npm run dev
```

O backend estará disponível em: `http://localhost:3001`

---

### 4️⃣ Frontend — Next.js

1. Abra um novo terminal e entre na pasta do frontend:

```bash
cd frontend
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor frontend:

```bash
npm run dev
```

O frontend estará disponível em: `http://localhost:3000`

> ⚠️ Certifique-se de que o backend já está rodando antes de testar o frontend.

---

## 💾 Banco de Dados

O sistema utiliza um **banco MySQL** com as seguintes tabelas:

* **authors** → autores cadastrados
* **books** → livros cadastrados
* **users** → usuários para registro de empréstimos
* **loans** → empréstimos registrados

Chaves estrangeiras:

* `books.author_id` → `authors.id`
* `loans.user_id` → `users.id`
* `loans.book_id` → `books.id`

O backend inclui script para criar as tabelas e inserir **dados iniciais**.

---

## 🔗 Rotas Principais

### Autores (`/authors`)

* GET `/` → Listar autores
* POST `/` → Criar autor
* PUT `/:id` → Atualizar autor
* DELETE `/:id` → Deletar autor

### Livros (`/books`)

* GET `/` → Listar livros
* POST `/` → Criar livro
* PUT `/:id` → Atualizar livro
* DELETE `/:id` → Deletar livro

### Empréstimos (`/loans`)

* GET `/` → Listar empréstimos
* POST `/` → Criar empréstimo
* PATCH `/:id/return` → Devolver livro

---

## ⚡ Funcionalidades

* CRUD completo de **autores e livros**
* Registro de **empréstimos**
* Controle de **status de livros** (disponível / emprestado)
* Devolução de livros
* Interface amigável com **modais de confirmação**

---

## 📌 Observações

* Projeto em **desenvolvimento**, melhorias constantes.
* Para qualquer teste ou desenvolvimento, **rode o backend antes do frontend**.
* Banco já possui **dados iniciais** para testes: autores, livros, usuários e empréstimos.
* Trabalho desenvolvido como parte da disciplina **Web3**.

---

## 💡 Possíveis melhorias futuras

* 🔹 **CRUD de usuários**: atualmente os usuários são fixos para empréstimos.
* 🔹 **Autenticação e autorização**: login de usuários para controlar empréstimos.
* 🔹 **Filtros e pesquisa**: busca por título, autor ou categoria no frontend.
* 🔹 **Paginação**: para listas grandes de livros e empréstimos.
* 🔹 **Design**: aplicação de animações.

---
## 📜 Licença
Uso acadêmico — livre para consulta e aprimoramento.


