import { LoanModel } from "../models/loanModel.js";

export const LoanController = {

  async list(req, res) {
    const loans = await LoanModel.getAll();
    res.json(loans);
  },

  async create(req, res) {
    const result = await LoanModel.create(req.body);

    if (result.error) {
      return res.status(400).json({ error: result.error });
    }

    return res.json(result);
  },

  // Devolver livro
  async return(req, res) {
    const { id } = req.params;

    const ok = await LoanModel.returnBook(id);

    if (!ok) {
      return res.status(400).json({ error: "Não foi possível devolver" });
    }

    res.json({ status: "Livro devolvido com sucesso" });
  }
};
