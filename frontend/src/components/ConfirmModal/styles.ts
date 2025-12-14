import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  padding: 24px;
  width: 320px;
  border-radius: 16px;

  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  color: white;
  text-align: center;
`;

export const ModalActions = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 12px;
`;

export const Button = styled.button<{ danger?: boolean }>`
  flex: 1;
  padding: 10px;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  background: ${({ danger }) =>
    danger ? "rgba(255, 80, 80, 0.8)" : "rgba(255, 255, 255, 0.25)"};
  color: white;
`;
