import styled from 'styled-components';

export const Button = styled.button`
  background: rgba(3, 107, 82);
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: 900;
  height: 40px;
  margin-top: 40px;
  opacity: 0.8;
  outline: none;
  transition: 0.5s;
  width: 250px;
`;

export const RegisterButton = styled.button`
  background: white;
  border-color: #036b52;
  border-radius: 5px;
  color: #036b52;
  cursor: pointer;
  font-size: 16px;
  font-weight: 900;
  height: 40px;
  margin-top: 40px;
  outline: none;
  transition: 0.5s;
  width: 250px;
`;

export const DisabledButton = styled.button`
  background-color: rgba(3, 107, 82, 0.5);
  color: white;
`;
