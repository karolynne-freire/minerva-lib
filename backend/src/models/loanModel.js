import { db } from "../database/connection.js";

export const LoanModel = {

  // Listar
  async getAll() {
    const [rows] = await db.query(`
      SELECT l.id, u.nome AS usuario, b.titulo AS livro, 
             l.data_emprestimo, l.data_devolucao
      FROM loans l
      JOIN users u ON u.id = l.user_id
      JOIN books b ON b.id = l.book_id
    `);
    return rows;
  },

  // Criar empréstimo
  async create(data) {
    const { user_id, book_id, data_emprestimo } = data;

    // Verificar se o livro já está emprestado
    const [check] = await db.query(`
      SELECT id FROM loans
      WHERE book_id = ? AND data_devolucao IS NULL
    `, [book_id]);

    if (check.length > 0) {
      return { error: "Livro já está emprestado" };
    }

    const [result] = await db.query(
      `INSERT INTO loans (user_id, book_id, data_emprestimo) 
       VALUES (?, ?, ?)`,
      [user_id, book_id, data_emprestimo]
    );

    return { id: result.insertId };
  },

  // Devolver livro
  async returnBook(id) {
    const [result] = await db.query(`
      UPDATE loans
      SET data_devolucao = CURDATE()
      WHERE id = ?
    `, [id]);

    return result.affectedRows > 0;
  }
};
