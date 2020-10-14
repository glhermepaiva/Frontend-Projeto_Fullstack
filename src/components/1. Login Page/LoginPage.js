import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {DisappearedLoading} from 'react-loadingg';
import {Body, Logo, Logo2, Input, ButtonLogin, ButtonSignup, Texto} from './styles'

const LoginPage = () => {
  const history = useHistory()

  const baseUrl = "https://flickenu.herokuapp.com"

  const goToSignupPage = () => {
    history.push("/signup")
  }

  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const goToProfilePage = () => {
    setLoading(true)
    const body = {
      email: email,
      username: username,
      password: password
    }
    axios.post(`${baseUrl}/user/login`, body)
    .then((response) => {
      window.localStorage.setItem("token", response.data.token)
      window.localStorage.setItem("name", response.data.infos.name)
      window.localStorage.setItem("username", response.data.infos.username)
      history.push("/profile")
      setLoading(false)
    }).catch((error) => {
      alert("Dados incorretos, por favor tente novamente")
      console.log(error.message)
      setEmail("")
      setUsername("")
      setPassword("")
      setLoading(false)
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
      {loading ? <DisappearedLoading /> : <Body>
      <Logo>VEJA O NOVO, </Logo>
      <Logo2>AGO<i>RA</i></Logo2>
      <Input placeholder="Nome de Usuário" value={username} onChange={onChangeUsername} />
      <Input placeholder="Email" value={email} onChange={onChangeEmail} />
      <Input placeholder="Senha" onChange={onChangePassword} type="password" />
      <ButtonLogin onClick={goToProfilePage}>LOGAR</ButtonLogin>
      <Texto>Ainda não tem uma conta?</Texto>
      <ButtonSignup onClick={goToSignupPage}>Cadastre-se!</ButtonSignup>
      </Body>}
    </Body>
  )
}

export default LoginPage