import { db } from "../database/connection.js";

export const UserModel = {
  async getAll() {
    const [rows] = await db.query("SELECT * FROM users");
    return rows;
  },

  async create(data) {
    const { nome, email } = data;
    const [result] = await db.query(
      "INSERT INTO users (nome, email) VALUES (?, ?)",
      [nome, email]
    );
    return result.insertId;
  }
};