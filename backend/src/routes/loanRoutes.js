import { Router } from "express";
import { LoanController } from "../controllers/loanController.js";

const router = Router();

router.get("/", LoanController.list);
router.post("/", LoanController.create);

// devolver livro
router.patch("/:id/return", LoanController.return);

export default router;

