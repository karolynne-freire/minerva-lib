import styled from "styled-components";

export const Card = styled.div`
  padding: 20px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.h3`
  color: #fff;
  font-weight: 600;
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button<{ danger?: boolean }>`
  padding: 6px 12px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  background: ${({ danger }) =>
    danger ? "rgba(245,101,101,0.3)" : "rgba(66,153,225,0.3)"};

  color: #fff;

  &:hover {
    opacity: 0.8;
  }
`;