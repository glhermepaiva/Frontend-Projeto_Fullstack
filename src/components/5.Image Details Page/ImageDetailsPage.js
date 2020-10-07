import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const ImageDetailsPage = () => {
  const history = useHistory()

  const baseUrl = "http://localhost: 3000"

  const goToProfilePage = () => {
    history.push("/profile")
  }

  const goToAddImagePage = () => {
    history.push("/addimage")
  }

  return (
    <div>
      <h>IMAGE DETAIL PAGE</h>
      <button onClick={goToProfilePage}>Voltar para o perfil</button>
      <button onClick={goToAddImagePage}>Adicione uma nova imagem</button>
    </div>
  )
}

export default ImageDetailsPage