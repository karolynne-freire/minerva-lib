import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ErrorBox = styled.div`
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(6px);
  padding: 40px;
  text-align: center;
  color: #fff;
`;

export const Code = styled.h1`
  font-size: 2.6rem;
  margin-bottom: 12px;
`;

export const Title = styled.h2`
  font-size: 0.9rem;
    opacity: 0.85;
  margin-bottom: 24px;
`;


export const Buttons = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;

  button {
    background: #2d2d2d;
    color: white;
    border: none;
    padding: 10px 16px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;

    &:hover {
      background: #444;
    }
  }
`;

