import { db } from "../database/connection.js";

export const AuthorModel = {
  async findAll() {
    const [rows] = await db.query(
      "SELECT id, nome, nacionalidade FROM authors"
    );
    return rows;
  },

  async findById(id) {
    const [rows] = await db.query(
      "SELECT id, nome, nacionalidade FROM authors WHERE id = ?",
      [id]
    );
    return rows[0];
  },

  async create({ nome, nacionalidade }) {
  const [result] = await db.query(
    "INSERT INTO authors (nome, nacionalidade) VALUES (?, ?)",
    [nome, nacionalidade || null]
  );

  return {
    id: result.insertId,
    nome,
    nacionalidade: nacionalidade || null,
  };
}
,

async update(id, { nome, nacionalidade }) {
  await db.query(
    "UPDATE authors SET nome = ?, nacionalidade = ? WHERE id = ?",
    [nome, nacionalidade || null, id]
  );
  return true;
},


  async delete(id) {
    await db.query("DELETE FROM authors WHERE id = ?", [id]);
  }
};
