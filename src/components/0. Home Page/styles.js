import styled from 'styled-components'
import Home from '../images/home.jpg'

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  font-family: Helvetica;
  background-image: url(${Home});
  background-size: 100vw;
`

export const Logo = styled.h1`
  background-color: black;
  color: white;
  font-size: 8vw;
  user-select: none;
  margin: -32vw 0 0 -54vw;
`

export const Sublogo = styled.h2`
  background-color: black;
  color: #ffb81a;
  font-size: 3vw;
  user-select: none;
  margin: 0 0 0 -54vw;
`

export const Buttons = styled.div`
  position: absolute;
  bottom: 4vw;
  right: 5vw;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const ButtonLogin = styled.div`
  border: none;
  height: 3.5vw;
  color: white;
  font-size: 3.6vw;
  font-weight: bold;
  margin: 0 0 1vw 0;
  cursor: pointer;
  outline: none;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  :hover {
    opacity: 70%;
    transition: 0.6s;
  }
  :active {
    color: #C2C2C2;
  }
`

export const ButtonSignup = styled.div`
  border: none;
  color: #ffb81a;
  font-size: 2.3vw;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  :hover {
    opacity: 70%;
    transition: 0.6s;
  }
  :active {
    color: #C2C2C2;
  }
`

export const Copyright = styled.p`
    position: absolute;
    bottom: 0;
    color: white;
    font-size: 0.8vw;
    font-weight: bold;
    user-select: none;
    text-shadow: 2px 2px 2px black;
`