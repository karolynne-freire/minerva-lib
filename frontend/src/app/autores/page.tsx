"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";
import { useRouter } from "next/navigation";
import {
  CardTitle,
  Actions,
  AddButton,
} from "./styles";

import {
  Container,
  Grid,
  Card,
  Actions,
  Button,
} from "@/styles/ui";

import ConfirmModal from "@/components/ConfirmModal/ConfirmModal";

interface Author {
  id: number;
  nome: string;
}

export default function AuthorsPage() {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [authorToDelete, setAuthorToDelete] = useState<Author | null>(null);
  const router = useRouter();

  const loadAuthors = async () => {
    const response = await api.get("/authors");
    setAuthors(response.data);
  };

  const handleConfirmDelete = async () => {
    if (!authorToDelete) return;

    await api.delete(`/authors/${authorToDelete.id}`);
    setAuthorToDelete(null);
    loadAuthors();
  };

  useEffect(() => {
    loadAuthors();
  }, []);

  return (
    <Container>
      <AddButton onClick={() => router.push("/autores/novo")}>
        + Novo Autor
      </AddButton>

      <Grid>
        {authors.map((author) => (
          <Card key={author.id}>
            <CardTitle>{author.nome}</CardTitle>

            <Actions>
              <Button onClick={() => router.push(`/autores/${author.id}`)}>
                Editar
              </Button>

              <Button danger onClick={() => setAuthorToDelete(author)}>
                Excluir
              </Button>
            </Actions>
          </Card>
        ))}
      </Grid>

      {authorToDelete && (
        <ConfirmModal
          onCancel={() => setAuthorToDelete(null)}
          onConfirm={handleConfirmDelete}
        />
      )}
    </Container>
  );
}
