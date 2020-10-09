import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {Body, Logo, Logo2, Input, ButtonLogin, ButtonSignup, Ou} from './styles'

const LoginPage = () => {
  const history = useHistory()

  const baseUrl = "https://flickenu.herokuapp.com"

  const goToSignupPage = () => {
    history.push("/signup")
  }

  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const goToProfilePage = () => {
    const body = {
      email: email,
      username: username,
      password: password
    }
    axios.post(`${baseUrl}/user/login`, body)
    .then((response) => {
      window.localStorage.setItem("token", response.data.token)
      history.push("/profile")
    }).catch((error) => {
      alert("Dados incorretos, por favor tente novamente")
      console.log(error.message)
      setEmail("")
      setUsername("")
      setPassword("")
    }) 
  }

  const onChangeEmail = event => {
    setEmail(event.target.value)
  }

  const onChangeUsername = event => {
    setUsername(event.target.value)
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <Body>
      <Logo>VEJA O NOVO, </Logo>
      <Logo2>AGORA</Logo2>
      <Input placeholder="Nome de Usuário" value={username} onChange={onChangeUsername} />
      <Ou>ou</Ou>
      <Input placeholder="Email" value={email} onChange={onChangeEmail} />
      <Input placeholder="Senha" onChange={onChangePassword} type="password" />
      <ButtonLogin onClick={goToProfilePage}>LOGAR</ButtonLogin>
      <Ou>Se ainda não tiver uma conta, cadastre-se </Ou>
      <ButtonSignup onClick={goToSignupPage}>Cadastre-se</ButtonSignup>
    </Body>
  )
}

export default LoginPage