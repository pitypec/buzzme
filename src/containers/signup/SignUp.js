import React from 'react';

import { Button } from '../ButttonElement';

import {
  InputContainer,
  InputWrapper,
  Form,
  Label,
  Input,
  InputText,
  InputTextLink
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
          <Label>Confirm password</Label>
          <Input type='password' placeholder='password' />
          <Button primary={true} dark={true}>
            sign in{' '}
          </Button>
          <InputText>
            Already a member?{' '}
            <InputTextLink to='/signin'>sign in </InputTextLink>
          </InputText>
        </Form>
      </InputWrapper>
    </InputContainer>
  );
};

export default SignIn;
