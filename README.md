# 📚 Minerva Lib

O **Minerva Lib** é um sistema de gerenciamento de biblioteca desenvolvido como um monorepo, reunindo o **back-end** (Express.js + MySQL) e o **front-end** (Next.js).
O objetivo é oferecer uma plataforma simples e eficiente para gerenciar livros, autores e empréstimos.

---

## 🚧 Status do Projeto

**EM DESENVOLVIMENTO**

---

## 🗂 Estrutura do Repositório

```
minerva-lib/
 ├── backend/      → API em Express.js
 └── frontend/     → Aplicação em Next.js
```

---

## 🔧 Backend — Express.js + MySQL

O backend contém toda a API da biblioteca:
- ✔ Cadastro de livros
- ✔ Cadastro de autores
- ✔ Registro e controle de empréstimos
- ✔ Arquitetura MVC
- ✔ Banco de dados relacional com MySQL

### ▶️ Como executar o backend

1️⃣ Instale as dependências

```
cd backend
npm install
```

2️⃣ Configure o arquivo `.env` com seus dados

3️⃣ Inicie o servidor

```
npm run dev
```

O backend será iniciado em:
`http://localhost:3001`

---

## 🎨 Frontend — Next.js

O frontend (a ser implementado) será responsável por:
- ✔ Interface para listagem de livros
- ✔ Página para cadastro
- ✔ Exibição dos autores
- ✔ Tela de empréstimos

---

## 🛠 Tecnologias Utilizadas

### Back-end

* Node.js
* Express.js
* MySQL
* MySQL2
* CORS
* dotenv
* Nodemon

### Front-end

* Next.js
* React
* CSS / Styled Components (a definir)

---

## 💾 Banco de Dados

Banco relacional MySQL com as tabelas:

* `authors`
* `books`
* `loans`

Com chaves estrangeiras para manter a integridade.
