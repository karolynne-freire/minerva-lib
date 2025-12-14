"use client";

import { Title, Author } from "./styles";
import { Card, Status} from "@/styles/ui";


interface BookCardProps {
  title: string;
  author: string;
  status: "disponivel" | "emprestado";
}

export default function BookCard({ title, author, status }: BookCardProps) {
  const label =
    status === "emprestado" ? "Emprestado" : "Disponível";

  return (
    <Card>
      <Title>{title}</Title>
      <Author>Autor: {author}</Author>

      <Status status={status}>
        {label}
      </Status>
    </Card>
  );
}

