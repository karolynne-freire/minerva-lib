"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";
import { useRouter } from "next/navigation";
import {
  Container,
  Form,
  Input,
  Select,
  CloseButton,
  ErrorText,
} from "@/styles/forms";
import { Button as UIButton } from "@/styles/ui";
import ConfirmModal from "@/components/ConfirmModal/ConfirmModal";

interface Author {
  id: number;
  nome: string;
}

export default function NewBookPage() {
  const [titulo, setTitulo] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [authors, setAuthors] = useState<Author[]>([]);
  const [error, setError] = useState("");
  const [bookToDelete, setBookToDelete] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    api.get("/authors").then((res) => setAuthors(res.data));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!titulo.trim()) {
      setError("Título é obrigatório");
      return;
    }

    if (!authorId) {
      setError("Selecione um autor");
      return;
    }

    await api.post("/books", {
      titulo,
      author_id: authorId,
    });

    router.push("/livros");
  };

  const handleConfirmDelete = async () => {
    if (!bookToDelete) return;

    await api.delete(`/books/${bookToDelete}`);
    setBookToDelete(null);
    router.push("/livros");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <CloseButton type="button" onClick={() => router.push("/livros")}>
          ✕
        </CloseButton>

        <h2>Cadastrar Livro</h2>

        <Input
          placeholder="Título do livro"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <Select value={authorId} onChange={(e) => setAuthorId(e.target.value)}>
          <option value="">Selecione um autor</option>
          {authors.map((author) => (
            <option key={author.id} value={author.id}>
              {author.nome}
            </option>
          ))}
        </Select>

        {error && <ErrorText>{error}</ErrorText>}

        <UIButton type="submit">Salvar</UIButton>
      </Form>

      {bookToDelete && (
        <ConfirmModal
          onCancel={() => setBookToDelete(null)}
          onConfirm={handleConfirmDelete}
        />
      )}
    </Container>
  );
}
