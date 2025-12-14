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
    const id = await BookModel.create(req.body);
    res.json({ id });
  },

  async update(req, res) {
    await BookModel.update(req.params.id, req.body);
    res.json({ message: "Livro atualizado" });
  },

  async delete(req, res) {
    await BookModel.delete(req.params.id);
    res.json({ message: "Livro removido" });
  }
};
