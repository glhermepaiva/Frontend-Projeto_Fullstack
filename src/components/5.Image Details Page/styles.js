import styled from 'styled-components'

export const Body = styled.div`
  display: flex;
  font-family: Helvetica;
  align-items: center;
  justify-content: space-between;
  padding: 2vw 3vw 3vw 3vw;
  background-image: linear-gradient(-225deg, #CBBACC 0%, #2580B3 100%);
`

export const MainContainer = styled.div`

`

export const Return = styled.div`
  font-size: 2vw;
  font-weight: bold;
  opacity: 90%;
  user-select: none;
  margin-bottom: 3vh;
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

export const Image = styled.img`
  width: 70vw;
  height: 81vh;
  object-fit: cover;
  user-select: none;
`

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  width: 20vw;
  height: 60vh;
`

export const ImageCollection = styled.div`
  background-color: #24d292;
  color: white;
  font-weight: 600;
  font-size: 1vw;
  width: 5vw;
  text-align: center;
  padding: 0.1vw;
  margin: 0.5vw;
  border-radius: 0.2vw;
`

export const ImageTitle = styled.h1`
  margin: 0;
  background-color: black;
  color: white;
  font-size: 3.5vw;
  margin: 0.5vw 0;
  text-align: center;
`

export const ImageAuthorContainer = styled.div`
  margin: 2vw 0 2vw 0;
`

export const ImageBy = styled.p`
  display: inline;
`

export const ImageAuthor = styled.p`
  display: inline;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.7vw;
  color: white;
`

export const ImageTagsContainer = styled.div`
  
`

export const ImageTagsName = styled.div`
  display: inline;
  background-color: #d558c8;
  color: white;
  font-weight: 600;
  font-size: 1vw;
  width: 10vw;
  text-align: center;
  padding: 0.3vw;
  border-radius: 0.2vw;
`

export const ImageTags = styled.p`
  display: inline;
  font-size: 1.3vw;
`