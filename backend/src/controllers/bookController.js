import { BookModel } from "../models/bookModel.js";

export const BookController = {
  async index(req, res) {
    try {
      const books = await BookModel.getAll();
      res.json(books);
    } catch (error) {
      res.status(500).json({ error: "Erro ao listar livros" });
    }
  },

  async show(req, res) {
    try {
      const book = await BookModel.getById(req.params.id);

      if (!book) {
        return res.status(404).json({ error: "Livro não encontrado" });
      }

      res.json(book);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar livro" });
    }
  },

  async store(req, res) {
    try {
      const { titulo, ano, categoria, author_id } = req.body;

      if (!titulo || !ano || !categoria || !author_id) {
        return res.status(400).json({
          error: "Título, ano, categoria e autor são obrigatórios",
        });
      }

      const id = await BookModel.create({
        titulo,
        ano,
        categoria,
        author_id,
      });

      res.status(201).json({ id });
    } catch (error) {
      res.status(500).json({ error: "Erro ao cadastrar livro" });
    }
  },

  async update(req, res) {
    try {
      const { titulo, ano, categoria, author_id } = req.body;

      if (!titulo || !ano || !categoria || !author_id) {
        return res.status(400).json({
          error: "Todos os campos são obrigatórios",
        });
      }

      await BookModel.update(req.params.id, {
        titulo,
        ano,
        categoria,
        author_id,
      });

      res.json({ message: "Livro atualizado com sucesso" });
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar livro" });
    }
  },

  async delete(req, res) {
    try {
      await BookModel.delete(req.params.id);
      res.json({ message: "Livro removido com sucesso" });
    } catch (error) {
      res.status(500).json({ error: "Erro ao remover livro" });
    }
  },
};
