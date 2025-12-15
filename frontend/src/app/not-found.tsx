"use client";

import { useRouter } from "next/navigation";
import styled from "styled-components";
import { Container, Button } from "@/styles/ui";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  color: white;
`;


const Title = styled.h1`
  font-size: 2.6rem;
  margin-bottom: 12px;
`;

const Text = styled.p`
  opacity: 0.85;
  margin-bottom: 24px;
`;

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <Container>
      <Wrapper>
        <Title>404 📕</Title>
        <Text>
          A página que você tentou acessar não existe ou foi removida.
        </Text>

        <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
          <Button onClick={() => router.back()}>
            ⬅ Voltar
          </Button>

          <Button onClick={() => router.push("/")}>
            🏠 Ir para o início
          </Button>
        </div>
      </Wrapper>
    </Container>
  );
}
