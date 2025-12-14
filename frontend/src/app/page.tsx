"use client";

import { useEffect, useState } from "react";
import BookCard from "@/components/BookCard/BookCard";

export default function HomePage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Erro ao carregar livros:", err));
  }, []);

  return (
    <div className="dashboard-content">
      <h1>Bem-vindo à Minerva Lib 📚</h1>
      <p>Livros cadastrados no sistema</p>

      <div className="cards-container">
        {books.map((book: any) => (
          <BookCard
            key={book.id}
            title={book.titulo}
            author={book.autor}
            status="disponível" // depois a gente puxa o status do BD também
          />
        ))}
      </div>
    </div>
  );
}
