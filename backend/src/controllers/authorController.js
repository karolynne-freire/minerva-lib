import { AuthorModel } from "../models/authorModel.js";

const onlyLettersRegex = /^[A-Za-zÀ-ÿ\s]+$/;

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

      if (!nome || !nome.trim()) {
        return res.status(400).json({
          error: "Nome é obrigatório",
        });
      }

      if (!onlyLettersRegex.test(nome)) {
        return res.status(400).json({
          error: "Nome não pode conter números ou símbolos",
        });
      }

      if (nacionalidade && !onlyLettersRegex.test(nacionalidade)) {
        return res.status(400).json({
          error: "Nacionalidade não pode conter números ou símbolos",
        });
      }

      const author = await AuthorModel.create({
        nome,
        nacionalidade: nacionalidade || null,
      });

      res.status(201).json(author);
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar autor" });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { nome, nacionalidade } = req.body;

      if (!nome || !nome.trim()) {
        return res.status(400).json({
          error: "Nome é obrigatório",
        });
      }

      if (!onlyLettersRegex.test(nome)) {
        return res.status(400).json({
          error: "Nome não pode conter números ou símbolos",
        });
      }

      if (nacionalidade && !onlyLettersRegex.test(nacionalidade)) {
        return res.status(400).json({
          error: "Nacionalidade não pode conter números ou símbolos",
        });
      }

      await AuthorModel.update(id, {
        nome,
        nacionalidade: nacionalidade || null,
      });

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
  },
};