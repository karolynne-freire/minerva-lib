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
  const router = useRouter();

  const loadLoans = async () => {
    const res = await api.get("/loans");
    setLoans(res.data);
  };

  const handleReturn = async () => {
    if (!loanToReturn) return;

    await api.patch(`/loans/${loanToReturn.id}/return`);
    setLoanToReturn(null);
    loadLoans();
  };

  useEffect(() => {
    loadLoans();
  }, []);

  return (
    <Container>
      {/* 🔹 Novo empréstimo */}
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
