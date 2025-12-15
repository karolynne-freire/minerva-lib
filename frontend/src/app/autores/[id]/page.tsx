"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";
import { useParams, useRouter } from "next/navigation";
import {
  Container,
  Form,
  Input,
  Button,
  CloseButton,
  ErrorText,
} from "../novo/styles";

export default function EditAuthorPage() {
  const { id } = useParams();
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [nacionalidade, setNacionalidade] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    api.get(`/authors/${id}`).then((response) => {
      setNome(response.data.nome);
      setNacionalidade(response.data.nacionalidade);
    });
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nome.trim() || !nacionalidade.trim()) {
      setError("Preencha todos os campos");
      return;
    }

    await api.put(`/authors/${id}`, {
      nome,
      nacionalidade,
    });

    router.push("/autores");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <CloseButton onClick={() => router.push("/autores")}>
          ✕
        </CloseButton>

        <h2>Editar Autor</h2>

        <Input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome do autor"
        />

        <Input
          value={nacionalidade}
          onChange={(e) => setNacionalidade(e.target.value)}
          placeholder="Nacionalidade"
        />

        {error && <ErrorText>{error}</ErrorText>}

        <Button type="submit">Salvar Alterações</Button>
      </Form>
    </Container>
  );
}

