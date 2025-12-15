"use client";

import { Card, Name, Actions, Button } from "./styles";

interface AuthorCardProps {
  name: string;
  onEdit: () => void;
  onDelete: () => void;
}

export default function AuthorCard({
  name,
  onEdit,
  onDelete,
}: AuthorCardProps) {
  return (
    <Card>
      <Name>{name}</Name>

      <Actions>
        <Button onClick={onEdit}>Editar</Button>
        <Button danger onClick={onDelete}>
          Excluir
        </Button>
      </Actions>
    </Card>
  );
}