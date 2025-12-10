import { db } from "../database/connection.js";

export const BookModel = {
  async getAll() {
    const [rows] = await db.query(`
      SELECT books.*, authors.nome AS author_nome
      FROM books
      LEFT JOIN authors ON authors.id = books.author_id
    `);
    return rows;
  },

  async getById(id) {
    const [rows] = await db.query("SELECT * FROM books WHERE id = ?", [id]);
    return rows[0];
  },

  async create({ titulo, author_id }) {
    const [result] = await db.query(
      "INSERT INTO books (titulo, author_id) VALUES (?, ?)",
      [titulo, author_id]
    );
    return result.insertId;
  },

  async update(id, { titulo, author_id }) {
    await db.query(
      "UPDATE books SET titulo = ?, author_id = ? WHERE id = ?",
      [titulo, author_id, id]
    );
    return true;
  },

  async delete(id) {
    await db.query("DELETE FROM books WHERE id = ?", [id]);
    return true;
  }
};
