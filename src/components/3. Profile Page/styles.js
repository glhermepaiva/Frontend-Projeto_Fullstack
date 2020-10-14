import styled from 'styled-components'
import ProfilePic from '../images/profilepic.jpg'

export const Body = styled.div`
  display: flex;
  align-items: center;
  font-family: Helvetica;
  position: relative;
  height: 100vh;
  background-image: linear-gradient(to top, #88d3ce 0%, #6e45e2 100%);
  overflow: hidden;
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

export const ButtonAddImage = styled.button`
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
  :hover {
    opacity: 80%;
    transition: 0.6s;
    color: #E69D83;
  }
  :active {
    color: #89B0BD;
  }
`

export const ButtonLogoff = styled.button`
  color: #FD545B;
  background-color: white;
  border: 2px solid #FD545B;
  margin: 1vw 0;
  display: inline;
  padding: 1vw;
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

export const Username = styled.p`
  font-size: 2vw;
  background-color: limegreen;
`

export const Sidebar = styled.div`
  display: flex;
  background-image: linear-gradient(to bottom, #505285 0%, #585e92 12%, #65689f 25%, #7474b0 37%, #7e7ebb 50%, #8389c7 62%, #9795d4 75%, #a2a1dc 87%, #b5aee4 100%);
  flex-direction: column;
  margin: 0 3vw 0 3vw;
  align-items: center;
  overflow: auto;
  width: 15vw;
  height: 80vh;
  padding: 2%;
`

export const Main = styled.div`
  opacity: 90%;
  height: 100vh;
  width: 80vw;
  overflow-y: scroll;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  padding: 10.5vh 0 0 0;
`

export const Image = styled.div`
  background-color: orange;
  height: 350px;
  width: 34vw;
  margin: 10px;
  cursor: pointer;
  &:last-child {
    margin-bottom: 11vh;
}
`

export const ProfilePicture = styled.div`
  width: 180px;
  height: 180px;
  background-image: url(${ProfilePic});
  background-size: 100%;
`