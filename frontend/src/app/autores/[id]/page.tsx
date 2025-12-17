"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import api from "@/services/api";
import {
  Container,
  Form,
  Input,
  Button,
  CloseButton,
  ErrorText,
} from "../novo/styles";

const onlyLettersRegex = /^[A-Za-zÀ-ÿ\s]+$/;

export default function EditAuthorPage() {
  const { id } = useParams();
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [nacionalidade, setNacionalidade] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    api.get(`/authors/${id}`).then((response) => {
      setNome(response.data.nome);
      setNacionalidade(response.data.nacionalidade || "");
    });
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nome.trim()) {
      setError("O nome do autor é obrigatório");
      return;
    }

    if (!onlyLettersRegex.test(nome)) {
      setError("O nome não pode conter números ou símbolos");
      return;
    }

    if (nacionalidade.trim() && !onlyLettersRegex.test(nacionalidade)) {
      setError("A nacionalidade não pode conter números ou símbolos");
      return;
    }

    await api.put(`/authors/${id}`, {
      nome,
      nacionalidade: nacionalidade || null,
    });

    router.push("/autores");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <CloseButton
          type="button"
          onClick={() => router.push("/autores")}
        >
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
          placeholder="Nacionalidade (opcional)"
        />

        {error && <ErrorText>{error}</ErrorText>}

        <Button type="submit">Salvar Alterações</Button>
      </Form>
    </Container>
  );
}