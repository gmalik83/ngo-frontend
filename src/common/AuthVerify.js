import React from 'react';
import { withRouter } from 'react-router-dom';

// Function for Parsing JSON Token
const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

// Verifying JWT 
const AuthVerify = (props) => {
  props.history.listen(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      const decodedJwt = parseJwt(user.accessToken);

      if (decodedJwt.exp * 1000 < Date.now()) {
        props.logOut();
      }
    }
  });

  return <div></div>;
};

export default withRouter(AuthVerify); 
