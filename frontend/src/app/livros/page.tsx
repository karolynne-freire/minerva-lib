"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";
import { useRouter } from "next/navigation";
import { Container, Grid, Card, Actions, Button } from "@/styles/ui";
import ConfirmModal from "@/components/ConfirmModal/ConfirmModal";


interface Book {
  id: number;
  titulo: string;
  autor: string;
}

export default function BooksPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [bookToDelete, setBookToDelete] = useState<Book | null>(null);
  const router = useRouter();

  const loadBooks = async () => {
    const res = await api.get("/books");
    setBooks(res.data);
  };

  const handleConfirmDelete = async () => {
    if (!bookToDelete) return;

    await api.delete(`/books/${bookToDelete.id}`);
    setBookToDelete(null);
    loadBooks();
  };

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <Container>
      <Grid>
        {books.map((book) => (
          <Card key={book.id}>
            <h3>{book.titulo}</h3>
            <p>Autor: {book.autor}</p>

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
          onCancel={() => setBookToDelete(null)}
          onConfirm={handleConfirmDelete}
        />
      )}
    </Container>
  );
}

