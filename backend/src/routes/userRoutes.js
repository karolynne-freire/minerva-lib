import { Router } from "express";
import { UserController } from "../controllers/userController.js";

const router = Router();

router.get("/", UserController.list);
router.post("/", UserController.create);

export default router;