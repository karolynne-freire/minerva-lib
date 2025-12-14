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
} from "../novo/styles";

export default function EditAuthorPage() {
  const { id } = useParams();
  const router = useRouter();
  const [nome, setNome] = useState("");

  useEffect(() => {
    api.get(`/authors/${id}`).then((response) => {
      setNome(response.data.nome);
    });
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nome.trim()) {
      return;
    }

    await api.put(`/authors/${id}`, { nome });
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

        <Button type="submit">Salvar Alterações</Button>
      </Form>
    </Container>
  );
}
