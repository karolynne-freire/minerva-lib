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

interface Author {
  id: number;
  nome: string;
}

export default function NewBookPage() {
  const [titulo, setTitulo] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [ano, setAno] = useState("");
  const [categoria, setCategoria] = useState("");
  const [authors, setAuthors] = useState<Author[]>([]);
  const [error, setError] = useState("");
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

    if (!ano || Number(ano) < 0) {
      setError("Ano inválido");
      return;
    }

    if (!categoria.trim()) {
      setError("Categoria é obrigatória");
      return;
    }

    await api.post("/books", {
      titulo,
      author_id: authorId,
      ano,
      categoria,
    });

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

        <Input
          placeholder="Ano de publicação"
          type="number"
          value={ano}
          onChange={(e) => setAno(e.target.value)}
        />

        <Input
          placeholder="Categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />

        {error && <ErrorText>{error}</ErrorText>}

        <UIButton type="submit">Salvar</UIButton>
      </Form>
    </Container>
  );
}

