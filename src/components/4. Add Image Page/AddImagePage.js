import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const AddImagePage = () => {
  const history = useHistory()

  const baseUrl = "http://localhost: 3000"

  const goToProfilePage = () => {
    history.push("/profile")
  }

  return (
    <div>
      <h>ADD IMAGE PAGE</h>
      <input placeholder="Título" />
      <input placeholder="Autor" />
      <input placeholder="Data" />
      <input placeholder="Arquivo" />
      <input placeholder="Tags" />
      <input placeholder="Coleção" />
      <button onClick={goToProfilePage}>Adicionar</button>
      <button onClick={goToProfilePage}>Cancelar</button>
    </div>
  )
}

export default AddImagePage