import styled from 'styled-components'
import Login from '../images/login.jpg'

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  font-family: Helvetica;
  background-image: url(${Login});
  background-size: 100vw;
`

export const Logo = styled.h1`
  background-color: black;
  color: white;
  font-size: 2.5vw;
  user-select: none;
  display: inline;
  margin: 0;
`

export const Logo2 = styled.h1`
  background-color: black;
  color: #498DB4;
  font-size: 6vw;
  user-select: none;
  display: inline;
  margin: 0 0 0.5vw 0;
`

export const Input = styled.input`
  padding-left: 0.3vw;
  margin: 0.2vw 0;
  width: 18.2vw;
  height: 1.8vw;
  font-size: 0.9vw;
  outline: none;
  font-weight: 550;
  border: none;
  color: #23597F;
`

export const ButtonLogin = styled.button`
  color: white;
  background-color: #FD545B;
  margin: 1vw 0.3vw;
  display: inline;
  padding: 1vw;
  border: none;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  user-select: none;
  font-size: 1.2vw;
  padding: 0.7vw;
  opacity: 85%;
  :hover {
    opacity: 100%;
    transition: 0.6s;
  }
  :active {
    color: #89B0BD;
  }
`

export const Texto = styled.p`
  color: white;
  font-weight: bold;
  margin: 0.2vw 0;
`

export const ButtonSignup = styled.button`
  color: #FD545B;
  background-color: white;
  margin: 1vw 0;
  display: inline;
  padding: 1vw;
  border: none;
  font-weight: 650;
  cursor: pointer;
  outline: none;
  user-select: none;
  font-size: 1vw;
  padding: 0.7vw;
  opacity: 80%;
  :hover {
    opacity: 100%;
    transition: 0.6s;
  }
  :active {
    color: #FBAB8E;
  }
`