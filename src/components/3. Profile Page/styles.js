import styled from 'styled-components'

export const Body = styled.div`
  display: flex;
  align-items: center;
  font-family: Helvetica;
  position: relative;
  height: 100vh;
  background-image: linear-gradient(to top, #88d3ce 0%, #6e45e2 100%);
  overflow: hidden;
`

export const Sidebar = styled.div`
  display: flex;
  background-image: linear-gradient(to bottom, #505285 0%, #585e92 12%, #65689f 25%, #7474b0 37%, #7e7ebb 50%, #8389c7 62%, #9795d4 75%, #a2a1dc 87%, #b5aee4 100%);
  flex-direction: column;
  margin: 0 2vw 0 3vw;
  align-items: center;
  justify-content: space-between;
  overflow: auto;
  width: 15vw;
  height: 80vh;
  padding: 2%;
`

export const Logos = styled.div`
  display: flex;
  flex-direction: column;
`

export const Logo = styled.h1`
  background-color: black;
  color: white;
  font-size: 2.5vw;
  user-select: none;
  display: inline;
  margin: 0;
  align-self: center;
`

export const Logo2 = styled.h1`
  background-color: black;
  color: #498DB4;
  font-size: 4.5vw;
  user-select: none;
  display: inline;
  margin: 0 0 2vw 0;
`

export const Hello = styled.p`
  margin: 0 0 -4.5vh 0;
  font-size: 1.5vw;
  font-weight: 550;
  opacity: 70%;
  user-select: none;
`

export const Username = styled.p`
  font-size: 1.7vw;
  font-weight: bold;
  text-align: center;
  margin: 3 0 0 0;
  opacity: 90%;
  color: white;
  text-transform: uppercase;
  user-select: none;
`

export const ProfilePicture = styled.img`
  width: 10vw;
  height: 10vw;
  background-size: 100%;
  object-fit: cover;
`

export const ButtonAddImage = styled.button`
  color: white;
  background-color: #498DB4;
  margin: 1.5vw 0.3vw 0.7vw 0.3vw;
  display: inline;
  padding: 1vw;
  border: none;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  user-select: none;
  font-size: 1.2vw;
  padding: 0.7vw;
  width: 11.5vw;
  :hover {
    opacity: 80%;
    transition: 0.6s;
    color: #86C7D0;
  }
  :active {
    color: #89B0BD;
  }
`

export const ButtonLogoff = styled.button`
  color: #505286;
  background-color: white;
  border: none;
  width: 5vw;
  margin: 0.8vw 0 0.5vw 0;
  padding: 1vw;
  font-weight: 650;
  cursor: pointer;
  outline: none;
  user-select: none;
  font-size: 1.2vw;
  padding: 0.7vw;
  :hover {
    opacity: 80%;
    transition: 0.6s;
    color: #86C7D0;
  }
  :active {
    color: #FBAB8E;
  }
`

export const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 84vh;
  padding: 2% 2% 0 2%;
`

export const Logo3 = styled.h1`
  background-color: black;
  color: #86C7D0;
  font-size: 6vw;
  user-select: none;
  display: inline;
  margin: -4vh 0 0.5vw 0;
`

export const AddImagesMsg = styled.div`
  width: 70.4vw;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vw;
  color: white;
`

export const Main = styled.div`
  width: 70.4vw;
  padding: 0 2% 2% 2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 1vw;
  } 
  ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 1vw rgba(0,0,0,0.3);
      box-shadow: 0vw;
      border-radius: 1vw;
  }
  ::-webkit-scrollbar-thumb {
      border-radius: 1vw;
      box-shadow: 0vw;
      -webkit-box-shadow: inset 0 0 0.3vw rgba(0,0,0,0.5); 
}
`

export const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const ImageCard = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  background-color: #FBFBFB;
  margin: 0.5vw;
  cursor: pointer;
`

export const Image = styled.img`
  width: 22vw;
  height: 25vh;
  object-fit: cover;
`

export const TitleContainer = styled.div`
  height: 30%;
  position: absolute;
  bottom: 0;
  width: 22vw;
  background-image: linear-gradient(to top, rgba(2,0,2,1), transparent);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 2;
  text-shadow: 0.5vw 0.5vw 1vw black;
`

export const Title = styled.p`
  font-weight: bold;
  font-size: 1.8vw;
  margin: 0 0 0.2vw 0.5vw;
`