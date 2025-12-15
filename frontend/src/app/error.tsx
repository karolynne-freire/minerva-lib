"use client";

import { useRouter } from "next/navigation";
import { Container, Button } from "@/styles/ui";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  color: white;
  max-width: 420px;
`;

const Title = styled.h1`
  font-size: 2.4rem;
  margin-bottom: 12px;
`;

const Text = styled.p`
  opacity: 0.85;
  margin-bottom: 24px;
`;

function getErrorMessage(error: Error) {
  const msg = error.message.toLowerCase();

  if (msg.includes("network") || msg.includes("fetch")) {
    return {
      title: "Erro de conexão 🌐",
      text: "Não foi possível se conectar ao servidor. Verifique sua internet ou tente novamente.",
    };
  }

  if (msg.includes("404")) {
    return {
      title: "Recurso não encontrado 📚",
      text: "O conteúdo que você tentou acessar não existe ou foi removido.",
    };
  }

  if (msg.includes("500")) {
    return {
      title: "Erro interno 🧠",
      text: "O sistema encontrou um problema interno. Já estamos cuidando disso.",
    };
  }

  return {
    title: "Ops… algo deu errado 😵",
    text: "Ocorreu um erro inesperado. Você pode tentar novamente ou voltar.",
  };
}

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const { title, text } = getErrorMessage(error);

  return (
    <Container>
      <Wrapper>
        <Title>{title}</Title>
        <Text>{text}</Text>

        <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
          <Button onClick={() => router.back()}>
            ⬅ Voltar
          </Button>

          <Button onClick={reset}>
            🔄 Tentar novamente
          </Button>
        </div>
      </Wrapper>
    </Container>
  );
}
