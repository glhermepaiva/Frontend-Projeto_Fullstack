import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory, useParams} from 'react-router-dom';
import {Body, ContainerAddImage, ContainerProfilePicture, LogoAddImage, LogoProfilePicture, Input, InputDate,
  ButtonAddImage, Return, LogoAddImageColor, LogoProfilePictureColor, ButtonProfilePicture} from './styles'

const AddImagePage = () => {
  const history = useHistory()

  const params = useParams()

  const baseUrl = "https://flickenu.herokuapp.com"

  const [subtitle, setSubtitle] = useState("")
  const [author, setAuthor] = useState("")
  const [date, setDate] = useState("")
  const [file, setFile] = useState("")
  const [tags, setTags] = useState("")
  const [collection, setCollection ] = useState("")
  const [profilePicFile, setProfilePicFile] = useState("")

  const goToProfilePage = () => {
    history.goBack()
  }

  useEffect(() => {
    const token = window.localStorage.getItem("token")
    if (token === null){
        history.push("/")
    }
}, [])

  const addImage = () => {
    const token = window.localStorage.getItem("token")
    const body = {
      subtitle: subtitle,
      author: author,
      date: date,
      file: file,
      tags: tags,
      collection: collection
    }
    axios.post(`${baseUrl}/image/add`, body, {
      headers: { Authorization: token }
    })
    .then(() => {
      alert("Imagem adicionada com sucesso!")
      goToProfilePage()
    })
    .catch((error) => {
      alert("Erro ao adicionar imagem, por favor revise as informações e tente novamente.")
      console.log(error.message)
    })
  }

  const addProfilePicture = () => {
    const token = window.localStorage.getItem("token")
    const body = {
      file: profilePicFile
    }
    axios.post(`${baseUrl}/image/add/profilePicture/${params.username}`, body, {
      headers: { Authorization: token }
    })
    .then(() => {
      alert("Imagem adicionada com sucesso!")
      goToProfilePage()
    })
    .catch((error) => {
      alert("Erro ao adicionar imagem, por favor revise as informações e tente novamente.")
      console.log(error.message)
    })
  }

  const onChangeSubtitle = event => {
    setSubtitle(event.target.value)
  }

  const onChangeAuthor = event => {
    setAuthor(event.target.value)
  }

  const onChangeDate = event => {
    setDate(event.target.value)
  }

  const onChangeFile = event => {
    setFile(event.target.value)
  }

  const onChangeTags = event => {
    setTags(event.target.value)
  }

  const onChangeCollection = event => {
    setCollection(event.target.value)
  }

  const onChangeProfilePicFile = event => {
    setProfilePicFile(event.target.value)
  }

  return (
    <Body>
      <Return onClick={goToProfilePage}><i>← VOLTAR</i></Return>
      <ContainerAddImage>
        <LogoAddImage>ADICIONE UMA </LogoAddImage>
        <LogoAddImageColor>NOVA IM<i>AGEM</i></LogoAddImageColor>
        <Input placeholder="Título" value={subtitle} onChange={onChangeSubtitle} />
        <Input placeholder="Autor" value={author} onChange={onChangeAuthor} />
        <InputDate placeholder="Data" value={date} onChange={onChangeDate} type="datetime-local" />
        <Input placeholder="Arquivo" value={file} onChange={onChangeFile} />
        <Input placeholder="Tags" value={tags} onChange={onChangeTags} />
        <Input placeholder="Coleção" value={collection} onChange={onChangeCollection} />
          <ButtonAddImage onClick={addImage}>ADICIONAR</ButtonAddImage>
      </ContainerAddImage>
      <ContainerProfilePicture>
        <LogoProfilePicture>TROQUE SUA </LogoProfilePicture>
        <LogoProfilePictureColor>FOTO DE PERF<i>IL</i></LogoProfilePictureColor>
        <Input placeholder="Arquivo" value={profilePicFile} onChange={onChangeProfilePicFile} />
        <ButtonProfilePicture onClick={addProfilePicture}>ATUALIZAR FOTO</ButtonProfilePicture>
      </ContainerProfilePicture>
    </Body>
  )
}

export default AddImagePage