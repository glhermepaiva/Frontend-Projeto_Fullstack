import styled from 'styled-components'

export const Body = styled.div`
  display: flex;
  font-family: Helvetica;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(-20deg, #d558c8 0%, #24d292 100%);
`

export const Return = styled.div`
  position: absolute;
  left: 3vw;
  top: 3.5vw;
  font-size: 2vw;
  color: white;
  font-weight: bold;
  opacity: 90%;
  user-select: none;
  cursor: pointer;
  :hover {
    opacity: 80%;
    transition: 0.6s;
    color: #F2EDF2;
  }
  :active {
    color: #7D95AD;
  }
`

export const ContainerAddImage = styled.div`
  width: 40vw;
  height: 55vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1vw;
  opacity: 80%;
`

export const LogoAddImage = styled.h1`
  margin: 0;
  background-color: black;
  color: white;
  font-size: 3.5vw;
`

export const LogoAddImageColor = styled.h1`
  margin: 0;
  background-color: black;
  color: #d558c8;
  font-size: 5.5vw;
  margin-bottom: 2vh;
`

export const Input = styled.input`
  width: 20vw;
  padding-left: 0.3vw;
  margin: 0.2vw 0;
  height: 1.3vw;
  font-size: 0.9vw;
  outline: none;
  border: none;
  font-weight: 550;
`

export const InputDate = styled.input`
  width: 20.1vw;
  padding-left: 0.3vw;
  margin: 0.2vw 0;
  height: 1.5vw;
  font-size: 0.9vw;
  outline: none;
  border: none;
  font-weight: 600;
  color: rgb(115, 127, 127);
`

export const ButtonAddImage = styled.button`
  color: white;
  background-color: #d558c8;
  width:8.5vw;
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
  :hover {
    opacity: 80%;
    transition: 0.6s;
    color: #F2EDF2;
  }
  :active {
    color: #FBAB8E;
  }
`