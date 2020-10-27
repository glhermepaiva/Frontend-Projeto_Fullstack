import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {Body, Logo, Logo2, Logos, Inputs, Input, Select, ButtonSignup, ButtonLogin, Buttons} from './styles'
import {DisappearedLoading} from 'react-loadingg';

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
  const [loading, setLoading] = useState(false)

  const signup = () => {
    setLoading(true)
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
      window.localStorage.setItem("name", response.data.infos.name)
      window.localStorage.setItem("username", response.data.infos.username)
      history.push(`/profile/${username}`)
    }).catch((error) => {
      alert(error.response.data.error)
      setPassword("")
      setLoading(false)
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
      {loading ? <DisappearedLoading /> : <Body>
      <Logos>
        <Logo><i>FAÇA PARTE</i> DE ALGO </Logo>
        <Logo2>MA<i>IOR</i></Logo2>
      </Logos>
      <Inputs>
        <Input placeholder="Nome de usuário" value={username} onChange={onChangeUsername} />
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
      </Body>}
    </Body>
  )
}

export default SignupPage