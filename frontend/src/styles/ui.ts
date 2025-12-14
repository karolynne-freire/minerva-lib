import styled from "styled-components";

/* CONTAINER (páginas de listagem) */
export const Container = styled.main`
  padding: 32px;
  min-height: 100vh;
`;

/* GRID */
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
`;

/* CARD */
export const Card = styled.div`
  padding: 20px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  color: white;
`;

/* ACTIONS (botões dentro do card) */
export const Actions = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;

/* BUTTON */
export const Button = styled.button<{ danger?: boolean }>`
  padding: 10px 16px;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  background: ${({ danger }) =>
    danger ? "rgba(255, 80, 80, 0.85)" : "rgba(0, 150, 255, 0.85)"};

  color: white;
  font-weight: bold;

  transition: transform 0.2s ease, opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
    transform: scale(1.03);
  }
`;
