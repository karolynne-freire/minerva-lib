import { db } from "../database/connection.js";

export const AuthorModel = {
  async getAll() {
    const [rows] = await db.query("SELECT * FROM authors");
    return rows;
  },

  async getById(id) {
    const [rows] = await db.query("SELECT * FROM authors WHERE id = ?", [id]);
    return rows[0];
  },

  async create({ nome }) {
    const [result] = await db.query(
      "INSERT INTO authors (nome) VALUES (?)",
      [nome]
    );
    return result.insertId;
  },

  async update(id, { nome }) {
    await db.query("UPDATE authors SET nome = ? WHERE id = ?", [nome, id]);
    return true;
  },

  async delete(id) {
    await db.query("DELETE FROM authors WHERE id = ?", [id]);
    return true;
  }
};
