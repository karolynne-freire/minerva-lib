import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  position: relative;
  width: 360px;
  padding: 32px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(14px);
  color: white;
`;

export const Input = styled.input`
  width: 100%;
  margin-top: 16px;
  padding: 12px;
  border-radius: 12px;
  border: none;
`;

export const Select = styled.select`
  width: 100%;
  margin-top: 16px;
  padding: 12px;
  border-radius: 12px;
  border: none;
`;

export const ErrorText = styled.span`
  color: #ffb3b3;
  font-size: 14px;
  margin-top: 6px;
  display: block;
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

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  cursor: pointer;

  background: rgba(255, 255, 255, 0.25);
  color: white;

  &:hover {
    background: rgba(255, 80, 80, 0.8);
  }
`;