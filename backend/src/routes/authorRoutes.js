import express from "express";
import { AuthorController } from "../controllers/authorController.js";

const router = express.Router();

// LISTAR autores
router.get("/", AuthorController.index);

// BUSCAR autor por ID (opcional)
router.get("/:id", AuthorController.show);

// CRIAR autor
router.post("/", AuthorController.store);

// ATUALIZAR autor
router.put("/:id", AuthorController.update);

// EXCLUIR autor
router.delete("/:id", AuthorController.delete);

export default router;
