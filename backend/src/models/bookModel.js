import { db } from "../database/connection.js";

export const BookModel = {
  async getAll() {
    const [rows] = await db.query(`
      SELECT 
        b.id,
        b.titulo,
        b.ano,
        b.categoria,
        a.nome AS autor,
        CASE
          WHEN EXISTS (
            SELECT 1 FROM loans l
            WHERE l.book_id = b.id
            AND l.data_devolucao IS NULL
          )
          THEN 'emprestado'
          ELSE 'disponivel'
        END AS status
      FROM books b
      JOIN authors a ON a.id = b.author_id
    `);

    return rows;
  },

  async getById(id) {
    const [rows] = await db.query(
      `
      SELECT 
        id, titulo, ano, categoria, author_id
      FROM books
      WHERE id = ?
      `,
      [id]
    );
    return rows[0];
  },

  async create({ titulo, ano, categoria, author_id }) {
    const [result] = await db.query(
      `
      INSERT INTO books (titulo, ano, categoria, author_id)
      VALUES (?, ?, ?, ?)
      `,
      [titulo, ano, categoria, author_id]
    );

    return result.insertId;
  },

  async update(id, { titulo, ano, categoria, author_id }) {
    await db.query(
      `
      UPDATE books
      SET titulo = ?, ano = ?, categoria = ?, author_id = ?
      WHERE id = ?
      `,
      [titulo, ano, categoria, author_id, id]
    );
  },

  async delete(id) {
    await db.query("DELETE FROM books WHERE id = ?", [id]);
  },
};

