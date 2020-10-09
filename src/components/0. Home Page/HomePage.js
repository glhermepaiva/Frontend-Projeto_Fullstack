import React from 'react';
import {useHistory} from 'react-router-dom';
import {Body, Logo, Sublogo, Buttons, ButtonLogin, ButtonSignup, Copyright} from './styles'

const HomePage = () => {
  const history = useHistory()

  const goToLoginPage = () => {
    history.push("/login")
  }

  const goToSignupPage = () => {
    history.push("/signup")
  }

  return (
    <Body>
      <Logo><i>FLICK</i>ENU</Logo>
      <Sublogo>O <i>FUTURO</i> EM <i>IMAGENS</i></Sublogo>
      <Buttons>
        <ButtonLogin onClick={goToLoginPage}>LOGI<i>N</i></ButtonLogin>
        <ButtonSignup onClick={goToSignupPage}>CADASTRE<i>-SE</i></ButtonSignup>
      </Buttons>
      <Copyright>© 2020 Labenu - Desenvolvido por Guilherme Paiva (Turma Turing)</Copyright>
    </Body>
  )
}

export default HomePage