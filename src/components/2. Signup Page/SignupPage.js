import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const SignupPage = () => {
  const history = useHistory()

  const baseUrl = "http://localhost: 3000"

  const goToProfilePage = () => {
    history.push("/profile")
  }

  const goToLoginPage = () => {
    history.push("/login")
  }

  return (
    <div>
      <h>SIGNUP PAGE</h>
      <input placeholder="Nome de Usuário" />
      <input placeholder="Nome completo" />
      <input placeholder="Email" />
      <input placeholder="Senha" />
      <button onClick={goToProfilePage}>Cadastrar</button>
      <button onClick={goToLoginPage}>Já é cadastrado? Volte e faça login</button>
    </div>
  )
}

export default SignupPage