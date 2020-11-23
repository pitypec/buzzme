import React from 'react';

import { Button } from '../ButttonElement';

import {
  InputContainer,
  InputWrapper,
  Form,
  Label,
  Input,
  InputText,
  InputTextLink,
  ForgotPassText,
  ForgotTextLink
} from '../InputElements';

const SignIn = () => {
  return (
    <InputContainer>
      <InputWrapper>
        <Form>
          <Label>username</Label>
          <Input type='text' placeholder='username' />
          <Label>password</Label>
          <Input type='password' placeholder='password' />
          <ForgotPassText>
            <ForgotTextLink to='/reset'>forgot password? </ForgotTextLink>
          </ForgotPassText>
          <Button primary={true} dark={true}>
            sign in{' '}
          </Button>
          <InputText>
            Not a member? <InputTextLink to='/signup'>sign up </InputTextLink>
          </InputText>
        </Form>
      </InputWrapper>
    </InputContainer>
  );
};

export default SignIn;
