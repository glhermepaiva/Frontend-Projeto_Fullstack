import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const SignupPage = () => {
  const history = useHistory()

  const baseUrl = "https://flickenu.herokuapp.com"

  const goToProfilePage = () => {
    history.push("/profile")
  }

  const goToLoginPage = () => {
    history.push("/login")
  }

  const [username, setUsername] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("")

  const signup = () => {
    const body = {
      username: username,
      name: name,
      email: email,
      password: password,
      role: role
    }
    axios.post(`${baseUrl}/user/signup`, body)
    .then((response) => {
      alert("Usuário criado com sucesso, redirecionando agora para seu perfil!")
      window.localStorage.setItem("token", response.data.token)
      history.push("/profile")
    }).catch((error) => {
      alert("Erro ao criar usuário, por favor tente novamente.")
      console.log(error.message)
    })
  }

  const onChangeUsername = event => {
    setUsername(event.target.value)
  }

  const onChangeName = event => {
    setName(event.target.value)
  }

  const onChangeEmail = event => {
    setEmail(event.target.value)
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const onChangeRole = event => {
    setRole(event.target.value)
  }

  return (
    <div>
      <p>SIGNUP PAGE</p>
      <input placeholder="Nome de Usuário" value={username} onChange={onChangeUsername} />
      <input placeholder="Nome completo" value={name} onChange={onChangeName} />
      <input placeholder="Email" value={email} onChange={onChangeEmail} />
      <input placeholder="Senha" value={password} onChange={onChangePassword} type="password" />
      <input placeholder="Confirme sua senha" type="password" />
      <select value={role} onChange={onChangeRole}>
        <option>Selecione seu cargo</option>
        <option>NORMAL</option>
        <option>ADMIN</option>
      </select>
      <button onClick={signup}>Cadastrar</button>
      <button onClick={goToLoginPage}>Já é cadastrado? Volte e faça login</button>
    </div>
  )
}

export default SignupPage