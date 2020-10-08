import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

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
    <div>
      <p>LOGIN PAGE</p>
      <input placeholder="Nome de Usuário" value={username} onChange={onChangeUsername} />
      <input placeholder="Email" value={email} onChange={onChangeEmail} />
      <input placeholder="Senha" onChange={onChangePassword} type="password" />
      <button onClick={goToProfilePage}>Logar</button>
      <button onClick={goToSignupPage}>Cadastre-se</button>
    </div>
  )
}

export default LoginPage