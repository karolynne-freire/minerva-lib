import { AuthorModel } from "../models/authorModel.js";

export const AuthorController = {
  async list(req, res) {
    try {
      const authors = await AuthorModel.findAll();
      res.json(authors);
    } catch (error) {
      res.status(500).json({ error: "Erro ao listar autores" });
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const author = await AuthorModel.findById(id);

      if (!author) {
        return res.status(404).json({ error: "Autor não encontrado" });
      }

      res.json(author);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar autor" });
    }
  },

  async create(req, res) {
    try {
      const { nome, nacionalidade } = req.body;

      if (!nome || !nacionalidade) {
        return res.status(400).json({
          error: "Nome e nacionalidade são obrigatórios"
        });
      }

      const author = await AuthorModel.create({ nome, nacionalidade });
      res.status(201).json(author);
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar autor" });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { nome, nacionalidade } = req.body;

      if (!nome || !nacionalidade) {
        return res.status(400).json({
          error: "Nome e nacionalidade são obrigatórios"
        });
      }

      await AuthorModel.update(id, { nome, nacionalidade });
      res.json({ message: "Autor atualizado com sucesso" });
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar autor" });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      await AuthorModel.delete(id);
      res.json({ message: "Autor removido com sucesso" });
    } catch (error) {
      res.status(500).json({ error: "Erro ao deletar autor" });
    }
  }
};
