"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";
import { useRouter } from "next/navigation";
import {
  Container,
  Form,
  Select,
  Button,
  CloseButton,
  ErrorText,
} from "@/styles/forms";

interface User {
  id: number;
  nome: string;
}

interface Book {
  id: number;
  titulo: string;
}

export default function NewLoanPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  const [userId, setUserId] = useState("");
  const [bookId, setBookId] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  useEffect(() => {
    api.get("/users").then(res => setUsers(res.data));
    api.get("/books").then(res => setBooks(res.data));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!userId || !bookId) {
      setError("Selecione usuário e livro");
      return;
    }

    try {
      await api.post("/loans", {
        user_id: Number(userId),
        book_id: Number(bookId),
        data_emprestimo: new Date().toISOString().split("T")[0],
      });

      router.push("/emprestimos");
    } catch (err: any) {
      setError(
        err.response?.data?.error || "Erro ao realizar empréstimo"
      );
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <CloseButton type="button" onClick={() => router.push("/emprestimos")}>
          ✕
        </CloseButton>

        <h2>Novo Empréstimo</h2>

        <Select value={userId} onChange={(e) => setUserId(e.target.value)}>
          <option value="">Selecione um usuário</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>
              {user.nome}
            </option>
          ))}
        </Select>

        <Select value={bookId} onChange={(e) => setBookId(e.target.value)}>
          <option value="">Selecione um livro</option>
          {books.map(book => (
            <option key={book.id} value={book.id}>
              {book.titulo}
            </option>
          ))}
        </Select>

        {error && <ErrorText>{error}</ErrorText>}

        <Button type="submit">Emprestar</Button>
      </Form>
    </Container>
  );
}

