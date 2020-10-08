import React from 'react';
import {useHistory} from 'react-router-dom';

const HomePage = () => {
  const history = useHistory()

  const goToLoginPage = () => {
    history.push("/login")
  }

  const goToSignupPage = () => {
    history.push("/signup")
  }

  return (
    <div>
      <h>HOME PAGE</h>
      <button onClick={goToLoginPage}>Ir para login</button>
      <button onClick={goToSignupPage}>Ir para cadastro</button>
    </div>
  )
}

export default HomePage