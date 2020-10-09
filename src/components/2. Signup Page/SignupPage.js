import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {Body, Logo, Logo2, Logos, Inputs, Input, Select, ButtonSignup, ButtonLogin, Buttons} from './styles'

const SignupPage = () => {
  const history = useHistory()

  const baseUrl = "https://flickenu.herokuapp.com"

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
    <Body>
      <Logos>
        <Logo><i>FAÇA PARTE</i> DE ALGO </Logo>
        <Logo2><i>MAIOR</i></Logo2>
      </Logos>
      <Inputs>
        <Input placeholder="Nome de Usuário" value={username} onChange={onChangeUsername} />
        <Input placeholder="Nome completo" value={name} onChange={onChangeName} />
        <Input placeholder="Email" value={email} onChange={onChangeEmail} />
        <Input placeholder="Senha" value={password} onChange={onChangePassword} type="password" />
        <Input placeholder="Confirme sua senha" type="password" />
        <Select value={role} onChange={onChangeRole}>
          <option>Selecione seu cargo</option>
          <option>NORMAL</option>
          <option>ADMIN</option>
        </Select>
        <Buttons>
          <ButtonSignup onClick={signup}>CADASTRAR</ButtonSignup>
          <ButtonLogin onClick={goToLoginPage}>Já tem uma conta? Faça login!</ButtonLogin>
        </Buttons>
      </Inputs>
      
    </Body>
  )
}

export default SignupPage