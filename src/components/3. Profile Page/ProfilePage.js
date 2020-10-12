import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {Body, Logo, Logo2, Image, ButtonAddImage, ButtonLogoff} from './styles'

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

  const imagesFeed = () => {
    const token = window.localStorage.getItem("token")
    axios.get(`${baseUrl}/image/gallery/:username`)
  }

  return (
    <Body>
      <Logo><i>FLICK</i>ENU</Logo>
      <Logo2>Perfil</Logo2>
      <p>{name}</p>
      <Image src="https://picsum.photos/280/185" onClick={goToImageDetailsPage} />
      <ButtonAddImage onClick={goToAddImagePage}>Adicione uma nova imagem</ButtonAddImage>
      <ButtonLogoff onClick={logoff}>sair</ButtonLogoff>
    </Body>
  )
}

export default ProfilePage