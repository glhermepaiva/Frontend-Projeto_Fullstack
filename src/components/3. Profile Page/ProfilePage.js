import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {Body, Logo, Logo2, ButtonAddImage, ButtonLogoff, Sidebar, Username, Hello, Logos,
  Main, Image, ProfilePicture, Gallery, Title, Logo3, ImageCard, TitleContainer, DivPerdida} from './styles'
import {DisappearedLoading} from 'react-loadingg';

const ProfilePage = () => {
  const history = useHistory()

  const baseUrl = "https://flickenu.herokuapp.com"

  const name = window.localStorage.getItem("name")

  const goToAddImagePage = () => {
    history.push("/addimage")
  }

  const goToImageDetailsPage = () => {
    history.push("/image/:id")
  }

  const logoff = () => {
    localStorage.clear("token", "name")
    history.push("/")
  }

  const [imagesArray, setImagesArray] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    imagesFeed()
    const token = window.localStorage.getItem("token")
    if (token === null){
      history.push("/")
  }
  }, [])

  const imagesFeed = () => {
    setLoading(true)
    const token = window.localStorage.getItem("token")
    const username = window.localStorage.getItem("username")
    axios.get(`${baseUrl}/image/gallery/${username}`, {
      headers: {
        Authorization: token
      }
    })
    .then((response) => {
      setImagesArray(response.data.gallery)
      setLoading(false)
    }).catch((error) => {
      console.log(error.message)
    })
  }

  const mainExhibit = () => {
    if (imagesArray.length === 0) {
      return <div>"Adicione novas imagens!"</div>
    } else {
      return <DivPerdida>
        {imagesArray.map((image) => {
        return <ImageCard>
                <Image key={image.date} onClick={goToImageDetailsPage} src={image.file} />
                <TitleContainer>
                  <Title>{image.subtitle}</Title>
                </TitleContainer>
               </ImageCard>
        })}
        </DivPerdida>
    }
  }

  return (
    <Body>
      <Sidebar>
        <Logos>
          <Logo><i>FLICK</i>ENU</Logo>
          <Logo2>PERF<i>IL</i></Logo2>
        </Logos>
        <Hello>Olá,</Hello>
        <Username><i>{name}</i></Username>
        <ProfilePicture />
        <ButtonAddImage onClick={goToAddImagePage}>ADICIONE UMA <i>NOVA IMAGEM</i></ButtonAddImage>
        <ButtonLogoff onClick={logoff}>Sair</ButtonLogoff>
      </Sidebar>
      <Gallery>
        <Logo3>GALE<i>RIA</i></Logo3>
        <Main>
          {loading ? <div>Aguarde...</div> : 
          mainExhibit()}
        </Main>
      </Gallery>
    </Body>
  )
}

export default ProfilePage