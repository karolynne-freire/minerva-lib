"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/services/api";
import {
  Container,
  Form,
  Input,
  Button,
  CloseButton,
  ErrorText,
} from "./styles";

const onlyLettersRegex = /^[A-Za-zÀ-ÿ\s]+$/;

export default function NewAuthorPage() {
  const [nome, setNome] = useState("");
  const [nacionalidade, setNacionalidade] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

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

    try {
      setError("");
      await api.post("/authors", {
        nome,
        nacionalidade: nacionalidade || null,
      });
      router.push("/autores");
    } catch {
      setError("Erro ao cadastrar autor");
    }
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

        <h2>Cadastrar Autor</h2>

        <Input
          placeholder="Nome do autor"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <Input
          placeholder="Nacionalidade (opcional)"
          value={nacionalidade}
          onChange={(e) => setNacionalidade(e.target.value)}
        />

        {error && <ErrorText>{error}</ErrorText>}

        <Button type="submit">Salvar</Button>
      </Form>
    </Container>
  );
}
