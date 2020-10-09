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
  font-size: 2vw;
  user-select: none;
  display: inline;
  margin: 0;
`

export const Logo2 = styled.h1`
  background-color: black;
  color: #FFE5BF;
  font-size: 5vw;
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
  color: #2D5D7D;
`

export const Ou = styled.p`
  color: #FFE5BF;
  font-weight: bold;
  margin: 0.2vw 0;
`

export const ButtonSignup = styled.button`
  color: white;
  background-color: #89B0BD;
  margin: 1vw 0;
  display: inline;
  padding: 1vw;
  border: none;
  font-weight: 650;
  cursor: pointer;
  outline: none;
  user-select: none;
  font-size: 0.9vw;
  padding: 0.7vw;
  :hover {
    opacity: 80%;
    transition: 0.6s;
    color: #F2EDF2;
  }
  :active {
    color: #FBAB8E;
  }
`

export const ButtonLogin = styled.button`
  color: #6E5135;
  background-color: #FFE5BF;
  margin: 1vw 0.3vw;
  display: inline;
  padding: 1vw;
  border: none;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  user-select: none;
  font-size: 1vw;
  padding: 0.7vw;
  :hover {
    opacity: 80%;
    transition: 0.6s;
    color: #E69D83;
  }
  :active {
    color: #89B0BD;
  }
`