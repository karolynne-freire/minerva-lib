"use client";

import { useRouter } from "next/navigation";
import {
  Container,
  ErrorBox,
  Code,
  Title,
  Buttons,
} from "./styles";

interface ApiErrorProps {
  code?: number;
  title?: string;
  description?: string;
}

export default function ApiError({
  code = 500,
  title = "Não foi possível carregar os dados. Tente novamente mais tarde",
}: ApiErrorProps) {
  const router = useRouter();

  return (
    <Container>
      <ErrorBox>
        <Code>{code} 📕</Code>
        <Title>{title}</Title>

        <Buttons>
          <button onClick={() => router.back()}>← Voltar</button>
          <button onClick={() => router.push("/")}>🏠 Ir para o início</button>
        </Buttons>
      </ErrorBox>
    </Container>
  );
}