import { Router } from "express";
import { BookController } from "../controllers/bookController.js";

const router = Router();

router.get("/", BookController.index);
router.get("/:id", BookController.show);
router.post("/", BookController.store);
router.put("/:id", BookController.update);
router.delete("/:id", BookController.delete);

export default router;

