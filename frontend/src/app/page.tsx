"use client";

import BookCard from "@/components/BookCard";

export default function HomePage() {
  return (
    <div className="dashboard-content">
      <h1>Bem-vindo à Minerva Lib 📚</h1>
      <p>Escolha uma opção na barra lateral.</p>

      <div className="cards-container">
        <BookCard
          title="O Senhor dos Anéis"
          author="J.R.R. Tolkien"
          status="disponível"
        />

        <BookCard
          title="Dom Casmurro"
          author="Machado de Assis"
          status="emprestado"
        />
      </div>
    </div>
  );
}
