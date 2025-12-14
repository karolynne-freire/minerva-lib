import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 420px;
  padding: 32px;
  border-radius: 20px;
  position: relative;

  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);

  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  gap: 8px;

  h2 {
    color: #fff;
    text-align: center;
    margin-bottom: 12px;
  }
`;

export const Input = styled.input<{ hasError?: boolean }>`
  padding: 12px;
  border-radius: 10px;
  border: 1px solid
    ${({ hasError }) => (hasError ? "#f56565" : "transparent")};

  outline: none;
  background: rgba(255, 255, 255, 0.9);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;

  color: #fff;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background: rgba(255, 80, 80, 0.7);
  }
`;


export const Button = styled.button`
  margin-top: 12px;
  padding: 12px;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  background: rgba(66, 153, 225, 0.85);
  color: #fff;
  font-weight: 600;

  transition: 0.2s;

  &:hover {
    opacity: 0.85;
  }
`;

export const ErrorText = styled.span`
  color: #ffb3b3;
  font-size: 14px;
  margin-top: 6px;
  display: block;
`;