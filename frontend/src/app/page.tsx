"use client";

import { useEffect, useState } from "react";
import BookCard from "@/components/BookCard/BookCard";
import { Container, Grid } from "@/styles/ui";
import ApiError from "@/components/ApiError/ApiError";


interface Book {
  id: number;
  titulo: string;
  autor: string;
  status: "disponivel" | "emprestado";
}

export default function HomePage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [errorCode, setErrorCode] = useState<number | null>(null);

  useEffect(() => {
    fetch("http://localhost:3001/books")
      .then(async (res) => {
        if (!res.ok) {
          setErrorCode(res.status); // 500, 404 etc
          return;
        }

        const data = await res.json();
        setBooks(data);
      })
      .catch(() => {
        // backend desligado / caiu
        setErrorCode(500);
      });
  }, []);

  if (errorCode) {
    return <ApiError code={errorCode} />;
  }

  return (
    <Container>
      <div style={{ marginBottom: "24px" }}>
      <h1>Bem-vindo à Minerva Lib</h1>
      <p>Livros cadastrados no sistema</p>
     </div>
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
