import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {Body, ContainerAddImage,  LogoAddImage,  Input, InputDate,
  ButtonAddImage, Return, LogoAddImageColor, } from './styles'

const AddImagePage = () => {
  const history = useHistory()

  const baseUrl = "https://flickenu.herokuapp.com"

  const [subtitle, setSubtitle] = useState("")
  const [author, setAuthor] = useState("")
  const [date, setDate] = useState("")
  const [file, setFile] = useState("")
  const [tags, setTags] = useState("")
  const [collection, setCollection ] = useState("")

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
      alert(error.response.data.error)
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
    </Body>
  )
}

export default AddImagePage