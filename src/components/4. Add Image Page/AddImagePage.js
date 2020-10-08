import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

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
    history.push("/profile")
  }

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