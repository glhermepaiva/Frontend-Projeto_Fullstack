import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const ProfilePage = () => {
  const history = useHistory()

  const baseUrl = "http://localhost: 3000"

  const goToAddImagePage = () => {
    history.push("/addimage")
  }

  const goToImageDetailsPage = () => {
    history.push("/image/:id")
  }

  const logoff = () => {
    localStorage.clear("token")
    history.push("/")
}

  return (
    <div>
      <h>PROFILE PAGE</h>
      <button onClick={goToImageDetailsPage}>Veja detalhes da imagem</button>
      <button onClick={goToAddImagePage}>Adicione uma nova imagem</button>
      <button onClick={logoff}>Sair</button>
    </div>
  )
}

export default ProfilePage