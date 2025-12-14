"use client";

import { useEffect, useState } from "react";
import BookCard from "@/components/BookCard/BookCard";
import { Container, Grid } from "@/styles/ui";

interface Book {
  id: number;
  titulo: string;
  autor: string;
  status: "disponivel" | "emprestado";
}

export default function HomePage() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) =>
        console.error("Erro ao carregar livros:", err)
      );
  }, []);

  return (
    <Container>
      <h1>Bem-vindo à Minerva Lib</h1>
      <p>Livros cadastrados no sistema</p>

      <Grid>
        {books.map((book) => (
          <BookCard
            key={book.id}
            title={book.titulo}
            author={book.autor}
            status={book.status}
          />
        ))}
      </Grid>
    </Container>
  );
}
