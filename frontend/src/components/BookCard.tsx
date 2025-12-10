"use client";

interface BookCardProps {
  title: string;
  author: string;
  status: string;
}

export default function BookCard({ title, author, status }: BookCardProps) {
  return (
    <div className="book-card">
      <h2 className="book-title">{title}</h2>
      <p className="book-author">Autor: {author}</p>

      <span
        className={`book-status ${
          status === "disponível" ? "status-available" : "status-unavailable"
        }`}
      >
        {status}
      </span>
    </div>
  );
}
