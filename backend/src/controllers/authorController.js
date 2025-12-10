import { AuthorModel } from "../models/authorModel";

export const AuthorController = {
  async index(req, res) {
    const authors = await AuthorModel.getAll();
    res.json(authors);
  },

  async show(req, res) {
    const author = await AuthorModel.getById(req.params.id);
    res.json(author);
  },

  async store(req, res) {
    const id = await AuthorModel.create(req.body);
    res.json({ id });
  },

  async update(req, res) {
    await AuthorModel.update(req.params.id, req.body);
    res.json({ message: "Autor atualizado" });
  },

  async delete(req, res) {
    await AuthorModel.delete(req.params.id);
    res.json({ message: "Autor removido" });
  }
};

