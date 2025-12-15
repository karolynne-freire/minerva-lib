"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";
import { useRouter } from "next/navigation";
import { CardTitle } from "./styles";

import {
  Container,
  Grid,
  Card,
  Actions,
  Button,
} from "@/styles/ui";

import ConfirmModal from "@/components/ConfirmModal/ConfirmModal";
import ApiError from "@/components/ApiError/ApiError";

interface Author {
  id: number;
  nome: string;
  nacionalidade: string;
}

export default function AuthorsPage() {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [authorToDelete, setAuthorToDelete] = useState<Author | null>(null);
  const [hasError, setHasError] = useState(false);

  const router = useRouter();

  const loadAuthors = async () => {
    try {
      const response = await api.get("/authors");
      setAuthors(response.data);
      setHasError(false);
    } catch (error) {
      console.error("Erro ao carregar autores:", error);
      setHasError(true);
    }
  };

  const handleConfirmDelete = async () => {
    if (!authorToDelete) return;

    try {
      await api.delete(`/authors/${authorToDelete.id}`);
      setAuthorToDelete(null);
      loadAuthors();
    } catch {
      setHasError(true);
    }
  };

  useEffect(() => {
    loadAuthors();
  }, []);

  if (hasError) {
    return <ApiError />;
  }

  return (
    <Container>
      <div style={{ marginBottom: "24px" }}>
        <Button onClick={() => router.push("/autores/novo")}>
          + Novo Autor
        </Button>
      </div>

      <Grid>
        {authors.map((author) => (
          <Card key={author.id}>
            <CardTitle>{author.nome}</CardTitle>
            <p>{author.nacionalidade}</p>

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
    title="Excluir autor?"
    description="Essa ação não poderá ser desfeita."
    confirmText="Excluir"
    onCancel={() => setAuthorToDelete(null)}
    onConfirm={handleConfirmDelete}
  />
)}

    </Container>
  );
}
