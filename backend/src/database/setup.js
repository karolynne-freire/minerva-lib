import { db } from "../database/connection.js";

export async function setupDatabase() {
  console.log("➡️ Executando setupDatabase()...");

  await db.query(`
    CREATE TABLE IF NOT EXISTS authors (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      nacionalidade VARCHAR(100) NULL
    );
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS books (
      id INT AUTO_INCREMENT PRIMARY KEY,
      titulo VARCHAR(255) NOT NULL,
      ano INT NULL,
      categoria VARCHAR(100) NULL,
      author_id INT,
      FOREIGN KEY (author_id) REFERENCES authors(id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
    );
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL
    );
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS loans (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT NOT NULL,
      book_id INT NOT NULL,
      data_emprestimo DATE NOT NULL,
      data_devolucao DATE,
      FOREIGN KEY (user_id) REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
      FOREIGN KEY (book_id) REFERENCES books(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
    );
  `);

  const [a] = await db.query("SELECT COUNT(*) AS total FROM authors");
  if (a[0].total === 0) {
    await db.query(`
      INSERT INTO authors (nome, nacionalidade)
      VALUES
        ('Machado de Assis', 'Brasileiro'),
        ('Clarice Lispector', 'Brasileira'),
        ('J. R. R. Tolkien', 'Britânico');
    `);
    console.log("Autores iniciais inseridos!");
  }

 const [b] = await db.query("SELECT COUNT(*) AS total FROM books");
if (b[0].total === 0) {
  await db.query(`
    INSERT INTO books (titulo, ano, categoria, author_id)
    VALUES
      ('Dom Casmurro', 1899, 'Romance', 1),
      ('A Hora da Estrela', 1977, 'Romance', 2),
      ('O Senhor dos Anéis', 1954, 'Fantasia', 3);
  `);
  console.log("Livros iniciais inseridos!");
}


  const [u] = await db.query("SELECT COUNT(*) AS total FROM users");
  if (u[0].total === 0) {
    await db.query(`
      INSERT INTO users (nome, email)
      VALUES
        ('Karolynne Freire', 'karol@example.com'),
        ('Carla Souza', 'carla@example.com'),
        ('Maria Oliveira', 'maria@example.com');
    `);
    console.log("Usuários iniciais inseridos!");
  }

  const [l] = await db.query("SELECT COUNT(*) AS total FROM loans");
  if (l[0].total === 0) {
    await db.query(`
      INSERT INTO loans (user_id, book_id, data_emprestimo)
      VALUES
        (1, 1, CURDATE()),
        (2, 2, CURDATE());
    `);
    console.log("Empréstimos iniciais inseridos!");
  }

  console.log("✅ Banco configurado com sucesso!");
}
