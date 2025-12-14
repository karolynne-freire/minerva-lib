"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";
import { useParams, useRouter } from "next/navigation";
import {
  Container,
  Form,
  Input,
  Select,
  ErrorText,
  CloseButton,
} from "@/styles/forms";
import { Button } from "@/styles/ui";

interface Author {
  id: number;
  nome: string;
}

export default function EditBookPage() {
  const { id } = useParams();
  const router = useRouter();

  const [titulo, setTitulo] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [authors, setAuthors] = useState<Author[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    api.get(`/books/${id}`).then((res) => {
      setTitulo(res.data.titulo);
      setAuthorId(res.data.author_id);
    });

    api.get("/authors").then((res) => setAuthors(res.data));
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!titulo.trim()) {
      setError("Título é obrigatório");
      return;
    }

    await api.put(`/books/${id}`, {
      titulo,
      author_id: authorId,
    });

    router.push("/livros");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <CloseButton type="button" onClick={() => router.push("/livros")}>
          ✕
        </CloseButton>

        <h2>Editar Livro</h2>

        <Input
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <Select
          value={authorId}
          onChange={(e) => setAuthorId(e.target.value)}
        >
          <option value="">Selecione um autor</option>
          {authors.map((author) => (
            <option key={author.id} value={author.id}>
              {author.nome}
            </option>
          ))}
        </Select>

        {error && <ErrorText>{error}</ErrorText>}

        <Button type="submit">Salvar</Button>
      </Form>
    </Container>
  );
}