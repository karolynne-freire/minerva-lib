import { Router } from "express";
import { LoanController } from "../controllers/loanController.js";

const router = Router();

router.get("/", LoanController.list);
router.post("/", LoanController.create);

// rota para devolver
router.put("/return/:id", LoanController.return);

export default router;
