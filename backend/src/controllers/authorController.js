import { AuthorModel } from "../models/authorModel.js";

export const AuthorController = {
  async index(req, res) {
    const authors = await AuthorModel.getAll();
    res.json(authors);
  },

  async show(req, res) {
    const author = await AuthorModel.getById(req.params.id);

    if (!author) {
      return res.status(404).json({ error: "Autor não encontrado" });
    }

    res.json(author);
  },

  async store(req, res) {
    const { nome } = req.body;

    // validação: vazio
    if (!nome || !nome.trim()) {
      return res.status(400).json({
        error: "Nome é obrigatório",
      });
    }

    // validação: apenas letras
    if (!/^[A-Za-zÀ-ÿ\s]+$/.test(nome)) {
      return res.status(400).json({
        error: "Nome inválido",
      });
    }

    const id = await AuthorModel.create({ nome });
    res.status(201).json({ id });
  },

  async update(req, res) {
    const { nome } = req.body;

    if (!nome || !nome.trim()) {
      return res.status(400).json({
        error: "Nome é obrigatório",
      });
    }

    if (!/^[A-Za-zÀ-ÿ\s]+$/.test(nome)) {
      return res.status(400).json({
        error: "Nome inválido",
      });
    }

    await AuthorModel.update(req.params.id, { nome });
    res.json({ message: "Autor atualizado" });
  },

  async delete(req, res) {
    await AuthorModel.delete(req.params.id);
    res.json({ message: "Autor removido" });
  },
};


