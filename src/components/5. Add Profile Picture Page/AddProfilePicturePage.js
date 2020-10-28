import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory, useParams} from 'react-router-dom';
import {Body, Return, ContainerProfilePicture, LogoProfilePicture, LogoProfilePictureColor, Input, ButtonProfilePicture} from './styles'

const AddProfilePicturePage = () => {
  const history = useHistory()

  const params = useParams()

  const baseUrl = "https://flickenu.herokuapp.com"

  const [profilePicFile, setProfilePicFile] = useState("")

  const goToProfilePage = () => {
    history.goBack()
  }

  useEffect(() => {
    const token = window.localStorage.getItem("token")
    if (token === null){
        history.push("/")
    }
  }, [history])

  const addProfilePicture = () => {
    const token = window.localStorage.getItem("token")
    const body = {
      file: profilePicFile
    }
    axios.post(`${baseUrl}/image/add/profilePicture/${params.username}`, body, {
      headers: { Authorization: token }
    })
    .then(() => {
      alert("Foto de perfil atualizada com sucesso!")
      goToProfilePage()
    })
    .catch((error) => {
      alert(error.response.data.error)
    })
  }

  const onChangeProfilePicFile = event => {
    setProfilePicFile(event.target.value)
  }

  return (
    <Body>
      <Return onClick={goToProfilePage}><i>← VOLTAR</i></Return>
      <ContainerProfilePicture>
        <LogoProfilePicture>TROQUE SUA </LogoProfilePicture>
        <LogoProfilePictureColor>FOTO DE PERF<i>IL</i></LogoProfilePictureColor>
        <Input placeholder="Arquivo" value={profilePicFile} onChange={onChangeProfilePicFile} />
        <ButtonProfilePicture onClick={addProfilePicture}>ATUALIZAR FOTO</ButtonProfilePicture>
      </ContainerProfilePicture>
    </Body>
  )
}

export default AddProfilePicturePage