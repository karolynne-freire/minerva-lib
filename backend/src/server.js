import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import authorRoutes from "./routes/authorRoutes.js";
import loanRoutes from "./routes/loanRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/books", bookRoutes);
app.use("/authors", authorRoutes);
app.use("/loans", loanRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});