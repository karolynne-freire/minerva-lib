import styled from "styled-components";

/* CONTAINER (páginas de listagem) */
export const Container = styled.main`
  padding: 32px;
  min-height: 100vh;
  color: white;

`;

/* GRID */
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;

  max-width: 1200px;
`;

/* CARD */
export const Card = styled.div`
  padding: 20px;
  border-radius: 16px;

  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 12px;

  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
  }
`;


/* ACTIONS (botões dentro do card) */
export const Actions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: auto;
  justify-content: center;

`;

/* BUTTON */
export const Button = styled.button<{ danger?: boolean }>`
  padding: 10px 16px;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  background: #3d3a39;
  color: white;
  font-weight: bold;

  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: #6c625e;
    transform: translateY(-2px);
  }
`;


export const Status = styled.span<{
  status: "disponivel" | "emprestado";
}>`
  padding: 6px 12px;
  border-radius: 5px;
  font-size: 0.85rem;
  font-weight: bold;
  text-align: center;

  background: ${({ status }) =>
    status === "emprestado"
      ? "rgba(78, 56, 2, 0.85)"
      : "rgba(163, 140, 36, 0.85)"};
`;

