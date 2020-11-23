import React from 'react';
import SignUpView from '../containers/signup/SignUp';
import CommonNav from '../containers/common/nav/CommonNav';

const SignUp = () => {
  return (
    <>
      <CommonNav />
      <SignUpView />
    </>
  );
};

export default SignUp;
