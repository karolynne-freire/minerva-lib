import styled from "styled-components";

export const Card = styled.div`
  width: 260px;
  padding: 20px;
  border-radius: 16px;

  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
  gap: 10px;

  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
  }
`;

export const Title = styled.h2`
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
`;

export const Author = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.85);
`;

export const Status = styled.span<{ status: string }>`
  margin-top: auto;
  align-self: flex-start;

  padding: 6px 12px;
  border-radius: 20px;

  font-size: 0.75rem;
  font-weight: 600;
  text-transform: capitalize;

  background: ${({ status }) =>
    status === "disponível"
      ? "rgba(72, 187, 120, 0.25)"
      : "rgba(245, 101, 101, 0.25)"};

  color: ${({ status }) =>
    status === "disponível" ? "#9ae6b4" : "#feb2b2"};

  border: 1px solid
    ${({ status }) =>
      status === "disponível"
        ? "rgba(72, 187, 120, 0.5)"
        : "rgba(245, 101, 101, 0.5)"};
`;
