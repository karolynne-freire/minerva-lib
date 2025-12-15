import styled from "styled-components";

export const Container = styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const Form = styled.form`
  background: rgba(40, 40, 40, 0.95);
  padding: 32px;
  border-radius: 16px;
  width: 100%;
  max-width: 420px;
  color: white;
  position: relative;

  display: flex;              
  flex-direction: column;     
  gap: 10px;                  
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
  width: 100%;        
  margin-top: 16px;
  padding: 12px;
  border-radius: 12px;
  border: none;
  cursor: pointer;

  background: #3d3a39;

  color: #fff;
  font-weight: 600;

transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: #6c625e;
    transform: translateY(-2px);
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