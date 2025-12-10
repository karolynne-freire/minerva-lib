import { Router } from "express";
import { AuthorController } from "../controllers/authorController";

const router = Router();

router.get("/", AuthorController.index);
router.get("/:id", AuthorController.show);
router.post("/", AuthorController.store);
router.put("/:id", AuthorController.update);
router.delete("/:id", AuthorController.delete);

export default router;
