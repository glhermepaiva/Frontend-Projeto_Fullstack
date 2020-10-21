import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory, useParams} from 'react-router-dom';
import {Body, Logo, Logo2, ButtonAddImage, ButtonLogoff, Sidebar, Username, Hello, Logos, AddImagesMsg, 
  Main, Image, ProfilePicture, Gallery, Title, Logo3, ImageCard, TitleContainer, MainContainer} from './styles'
import DefaultProfilePicture from '../images/profilepic.jpg'

const ProfilePage = () => {
  const history = useHistory()

  const params = useParams()

  const baseUrl = "https://flickenu.herokuapp.com"

  const name = window.localStorage.getItem("name")

  const goToAddImagePage = () => {
    history.push(`/addimage/${params.username}`)
  }

  const goToImageDetailsPage = (id) => {
    history.push(`/image/${id}`)
  }

  const logoff = () => {
    localStorage.clear("token", "name")
    history.push("/")
  }

  const [imagesArray, setImagesArray] = useState([])
  const [loading, setLoading] = useState(false)
  const [profilePicture, setProfilePicture] = useState("")

  useEffect(() => {
    imagesFeed()
    getProfilePicture()
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

  const getProfilePicture = () => {
    setProfilePicture(DefaultProfilePicture)
    const token = window.localStorage.getItem("token")
    axios.get(`${baseUrl}/image/profilePicture/${params.username}`, {
      headers: {
        Authorization: token
      }
    })
    .then((response) => {
      setProfilePicture(response.data.profilePicture)
    }).catch((error) => {
      console.log(error.message)
    })
  }

  const mainExhibit = () => {
    if (imagesArray.length === 0) {
      return <AddImagesMsg>Adicione novas imagens para vê-las aqui!</AddImagesMsg>
    } else {
      return <MainContainer>
        {imagesArray.map((image) => {
        return <ImageCard>
                <Image key={image.date} onClick={() => goToImageDetailsPage(image.id)} src={image.file} />
                <TitleContainer>
                  <Title>{image.subtitle}</Title>
                </TitleContainer>
               </ImageCard>
        })}
        </MainContainer>
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
        <ProfilePicture src={profilePicture} />
        <ButtonAddImage onClick={goToAddImagePage}>ADICIONE UMA <i>NOVA IMAGEM</i></ButtonAddImage>
        <ButtonLogoff onClick={logoff}>Sair</ButtonLogoff>
      </Sidebar>
      <Gallery>
        <Logo3>GALE<i>RIA</i></Logo3>
        <Main>
          {loading ? <AddImagesMsg>Por favor aguarde...</AddImagesMsg> : 
          mainExhibit()}
        </Main>
      </Gallery>
    </Body>
  )
}

export default ProfilePage