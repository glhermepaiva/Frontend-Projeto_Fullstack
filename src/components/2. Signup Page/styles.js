import styled from 'styled-components'
import Signup from '../images/signup.jpg'

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  font-family: Helvetica;
  background-image: url(${Signup});
  background-size: 100vw;
`

export const Logo = styled.h1`
  background-color: black;
  color: white;
  font-size: 2.7vw;
  user-select: none;
  display: inline;
  margin: 0;
`

export const Logo2 = styled.h1`
  background-color: black;
  color: #FBAB8E;
  font-size: 6.3vw;
  user-select: none;
  display: inline;
  margin: 0;
`

export const Logos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3vw;
  padding: 1vw;
`

export const Input = styled.input`
  padding-left: 0.3vw;
  margin: 0.2vw 0;
  width: 23vw;
  height: 1.8vw;
  font-size: 0.9vw;
  outline: none;
  font-weight: 550;
  border: none;
  color: #2D5D7D;
`

export const Select = styled.select`
  height: 2.1vw;
  margin: 0.2vw 0;
  width: 23.4vw;
  color: rgb(117, 117, 117);
  font-size: 0.9vw;
  font-weight: 650;
  border: none;
  user-select: none;
  outline: none;
`

export const Buttons = styled.div`
  align-self: left;
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
  color: #FBAB8E;
  background-color: white;
  margin: 1vw 0.3vw;
  display: inline;
  padding: 1vw;
  border: none;
  font-weight: 650;
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

