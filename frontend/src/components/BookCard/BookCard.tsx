"use client";

import { Card, Title, Author, Status } from "./styles";

interface BookCardProps {
  title: string;
  author: string;
  status: "disponível" | "indisponível";
}

export default function BookCard({ title, author, status }: BookCardProps) {
  return (
    <Card>
      <Title>{title}</Title>
      <Author>Autor: {author}</Author>
      <Status status={status}>{status}</Status>
    </Card>
  );
}
