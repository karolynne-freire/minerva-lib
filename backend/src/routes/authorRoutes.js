import { Router } from "express";
import { AuthorController } from "../controllers/authorController.js";

const router = Router();

router.get("/", AuthorController.list);
router.get("/:id", AuthorController.getById);
router.post("/", AuthorController.create);
router.put("/:id", AuthorController.update);
router.delete("/:id", AuthorController.delete);

export default router;
