"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";
import { useRouter } from "next/navigation";

import {
  Container,
  Grid,
  Card,
  Actions,
  Button,
  Status,
} from "@/styles/ui";

import ConfirmModal from "@/components/ConfirmModal/ConfirmModal";
import ApiError from "@/components/ApiError/ApiError";

interface Book {
  id: number;
  titulo: string;
  autor: string;
  status: "emprestado" | "disponivel";
  categoria: string;
  ano: number;
}

export default function BooksPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [bookToDelete, setBookToDelete] = useState<Book | null>(null);
  const [hasError, setHasError] = useState(false);

  const router = useRouter();

  const loadBooks = async () => {
    try {
      const res = await api.get("/books");
      setBooks(res.data);
      setHasError(false);
    } catch (error) {
      console.error("Erro ao carregar livros:", error);
      setHasError(true);
    }
  };

  const handleConfirmDelete = async () => {
    if (!bookToDelete) return;

    try {
      await api.delete(`/books/${bookToDelete.id}`);
      setBookToDelete(null);
      loadBooks();
    } catch (error) {
      console.error("Erro ao excluir livro:", error);
      setHasError(true);
    }
  };

  useEffect(() => {
    loadBooks();
  }, []);

  if (hasError) {
    return <ApiError />;
  }

  return (
    <Container>
      <Button
        onClick={() => router.push("/livros/novo")}
        style={{ marginBottom: 24 }}
      >
        + Novo Livro
      </Button>

      <Grid>
        {books.map((book) => (
          <Card key={book.id}>
            <h3>{book.titulo}</h3>
            <p>Autor: {book.autor}</p>
            <p>Categoria: {book.categoria}</p>
            <p>Ano: {book.ano}</p>


            <Status status={book.status}>
              {book.status === "emprestado"
                ? "Emprestado"
                : "Disponível"}
            </Status>

            <Actions>
              <Button onClick={() => router.push(`/livros/${book.id}`)}>
                Editar
              </Button>

              <Button danger onClick={() => setBookToDelete(book)}>
                Excluir
              </Button>
            </Actions>
          </Card>
        ))}
      </Grid>

{bookToDelete && (
  <ConfirmModal
    title="Excluir livro?"
    description="Essa ação não poderá ser desfeita."
    confirmText="Excluir"
    onCancel={() => setBookToDelete(null)}
    onConfirm={handleConfirmDelete}
  />
)}

    </Container>
  );
}

