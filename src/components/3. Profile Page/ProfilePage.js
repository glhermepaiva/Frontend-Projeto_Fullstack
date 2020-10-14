import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {Body, Logo, Logo2, ButtonAddImage, ButtonLogoff, Sidebar, Username, Main, Image, ProfilePicture} from './styles'

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

  return (
    <Body>
      <Sidebar>
        <Logo><i>FLICK</i>ENU</Logo>
        <Logo2>Perfil</Logo2>
        <Username>{name}</Username>
        <ProfilePicture />
        <ButtonAddImage onClick={goToAddImagePage}>Adicione uma nova imagem</ButtonAddImage>
        <ButtonLogoff onClick={logoff}>sair</ButtonLogoff>
      </Sidebar>
      <Main>
        {imagesArray.map((image) => {
          return <Image key={image.date} onClick={goToImageDetailsPage}>{image.subtitle}</Image>
        })}
      </Main>
    </Body>
  )
}

export default ProfilePage