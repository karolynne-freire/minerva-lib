import { BookModel } from "../models/bookModel.js";

export const BookController = {
  async index(req, res) {
    const books = await BookModel.getAll();
    res.json(books);
  },

  async show(req, res) {
    const book = await BookModel.getById(req.params.id);
    res.json(book);
  },

  async store(req, res) {
    const { titulo, author_id } = req.body;

    if (!titulo || !titulo.trim()) {
      return res.status(400).json({ error: "Título é obrigatório" });
    }

    if (!author_id) {
      return res.status(400).json({ error: "Autor é obrigatório" });
    }

    const id = await BookModel.create({ titulo, author_id });
    res.status(201).json({ id });
  },

  async update(req, res) {
    const { titulo, author_id } = req.body;

    if (!titulo || !titulo.trim()) {
      return res.status(400).json({ error: "Título é obrigatório" });
    }

    await BookModel.update(req.params.id, { titulo, author_id });
    res.json({ message: "Livro atualizado" });
  },

  async delete(req, res) {
    await BookModel.delete(req.params.id);
    res.json({ message: "Livro removido" });
  },
};
