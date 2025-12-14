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

export default function NewAuthorPage() {
  const [nome, setNome] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // validação: vazio
    if (!nome.trim()) {
      setError("O nome do autor é obrigatório");
      return;
    }

    // validação: apenas letras
    if (!/^[A-Za-zÀ-ÿ\s]+$/.test(nome)) {
      setError("O nome não pode conter números ou símbolos");
      return;
    }

    try {
      setError("");
      await api.post("/authors", { nome });
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
          aria-label="Fechar formulário"
        >
          ✕
        </CloseButton>

        <h2>Cadastrar Autor</h2>

        <Input
          placeholder="Nome do autor"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        {error && <ErrorText>{error}</ErrorText>}

        <Button type="submit">Salvar</Button>
      </Form>
    </Container>
  );
}
