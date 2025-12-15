"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";
import { useRouter } from "next/navigation";

import {
  Container,
  Grid,
  Card,
  Actions,
  Button,
} from "@/styles/ui";

import ConfirmModal from "@/components/ConfirmModal/ConfirmModal";
import ApiError from "@/components/ApiError/ApiError";

interface Loan {
  id: number;
  titulo: string;
  usuario: string;
  data_emprestimo: string;
  data_devolucao: string | null;
}

export default function LoansPage() {
  const [loans, setLoans] = useState<Loan[]>([]);
  const [loanToReturn, setLoanToReturn] = useState<Loan | null>(null);
  const [hasError, setHasError] = useState(false);

  const router = useRouter();

  const loadLoans = async () => {
    try {
      const res = await api.get("/loans");
      setLoans(res.data);
      setHasError(false);
    } catch (error) {
      console.error("Erro ao carregar empréstimos:", error);
      setHasError(true);
    }
  };

  const handleReturn = async () => {
    if (!loanToReturn) return;

    try {
      await api.patch(`/loans/${loanToReturn.id}/return`);
      setLoanToReturn(null);
      loadLoans();
    } catch (error) {
      console.error("Erro ao devolver empréstimo:", error);
      setHasError(true);
    }
  };

  useEffect(() => {
    loadLoans();
  }, []);

  if (hasError) {
    return <ApiError />;
  }

  return (
    <Container>
      <Button
        onClick={() => router.push("/emprestimos/novo")}
        style={{ marginBottom: 24 }}
      >
        + Novo Empréstimo
      </Button>

      <Grid>
        {loans.map((loan) => (
          <Card key={loan.id}>
            <h3>{loan.titulo}</h3>
            <p>Usuário: {loan.usuario}</p>
            <p>
              Emprestado em:{" "}
              {new Date(loan.data_emprestimo).toLocaleDateString("pt-BR")}
            </p>

            {loan.data_devolucao ? (
              <p>
                ✅ Devolvido em:{" "}
                {new Date(loan.data_devolucao).toLocaleDateString("pt-BR")}
              </p>
            ) : (
              <Actions>
                <Button onClick={() => setLoanToReturn(loan)}>
                  Devolver
                </Button>
              </Actions>
            )}
          </Card>
        ))}
      </Grid>

      {loanToReturn && (
        <ConfirmModal
          onCancel={() => setLoanToReturn(null)}
          onConfirm={handleReturn}
        />
      )}
    </Container>
  );
}
