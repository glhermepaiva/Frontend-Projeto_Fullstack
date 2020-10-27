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

export const ContainerProfilePicture = styled.div`
  margin-left: 3vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1vw;
  opacity: 75%;
`

export const LogoProfilePicture = styled.h1`
  margin: 0;
  background-color: black;
  color: white;
  font-size: 2.5vw;
`

export const LogoProfilePictureColor = styled.h1`
  margin: 0;
  color: #24d292;
  background-color: black;
  font-size: 4.5vw;
  margin-bottom: 2vh;
`

export const Input = styled.input`
  width: 20vw;
  padding-left: 0.3vw;
  margin: 0.5vw 0;
  height: 1.3vw;
  font-size: 0.9vw;
  outline: none;
  border: none;
  font-weight: 550;
`

export const ButtonProfilePicture = styled.button`
  color: white;
  background-color: #24d292;
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