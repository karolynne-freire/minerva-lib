import styled from "styled-components";

export const Container = styled.main`
  padding: 40px;
`;

export const AddButton = styled.button`
  margin-bottom: 24px;
  padding: 12px 20px;
  border-radius: 12px;
  border: none;
  cursor: pointer;

  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  color: #fff;
  font-weight: bold;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
`;

export const Card = styled.div`
  padding: 20px;
  border-radius: 16px;

  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  color: #fff;
`;

export const CardTitle = styled.h3`
  margin-bottom: 16px;
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button<{ danger?: boolean }>`
  flex: 1;
  padding: 8px;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  background: ${({ danger }) =>
    danger ? "rgba(255, 80, 80, 0.8)" : "rgba(0, 150, 255, 0.8)"};
  color: white;
`;
