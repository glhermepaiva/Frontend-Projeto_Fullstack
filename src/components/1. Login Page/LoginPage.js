import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const LoginPage = () => {
  const history = useHistory()

  const baseUrl = "http://localhost: 3000"

  const goToProfilePage = () => {
    history.push("/profile")
  }

  const goToSignupPage = () => {
    history.push("/signup")
  }

  return (
    <div>
      <h>LOGIN PAGE</h>
      <input placeholder="Nome de Usuário ou Email" />
      <input placeholder="Senha" />
      <button onClick={goToProfilePage}>Logar</button>
      <button onClick={goToSignupPage}>Cadastre-se</button>
    </div>
  )
}

export default LoginPage