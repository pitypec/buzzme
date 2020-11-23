import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const InputContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 550px;
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 390px;
  margin: 0 auto;
  background: #01011e;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Label = styled.label`
  font-size: 1.2rem;
  color: #fff;
  align-self: flex-start;
  text-transform: capitalize;
`;
export const Input = styled.input`
  width: 300px;
  outline: none;
  border: none;
  height: 40px;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
`;
export const InputText = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #fff;
  margin-top: 15px;
`;
export const InputTextLink = styled(Link)`
  color: #fff;
  text-transform: capitalize;

  &:hover {
    color: #432190;
  }
`;

export const ForgotPassText = styled.span`
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  font-size: 1rem;
  text-align: center;
  color: #fff;
  margin-bottom: 15px;
`;

export const ForgotTextLink = styled(Link)`
  color: #fff;
  letter-spacing: 1px;
  text-decoration: none;
  display: flex;
  align-self: flex-end;

  &:hover {
    color: #432190;
  }
`;
