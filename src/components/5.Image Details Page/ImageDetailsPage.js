import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory, useParams} from 'react-router-dom';
import {Body, MainContainer, Return, Image, Sidebar, ImageTitle, ImageAuthorContainer, ImageAuthor, ImageTags,
   ImageCollection, ImageBy, ImageTagsName, ImageTagsContainer} from './styles'

const ImageDetailsPage = () => {
//   const history = useHistory()

//   const params = useParams()

//   const baseUrl = "https://flickenu.herokuapp.com"

//   const goToProfilePage = () => {
//     history.goBack()
//   }

//   const [imageInfo, setImageInfo] = useState({})
//   const [loading, setLoading] = useState(false)

//   useEffect(() => {
//     getImageDetails()
//     const token = window.localStorage.getItem("token")
//     if (token === null){
//         history.push("/")
//     }
//   }, [])

  const getImageDetails = () => {
    setLoading(true)
    const token = window.localStorage.getItem("token")
    axios.get(`${baseUrl}/image/${params.id}`, {
      headers: {
        Authorization: token
      }
    })
    .then((response) => {
      setImageInfo(response.data.image)
      setLoading(false)
    }).catch((error) => {
      console.log(error)
    })
  }

//   return (
//     <Body>
//       <MainContainer>
//         <Return onClick={goToProfilePage}><i>← VOLTAR</i></Return>
//         {loading ? <div>Carregando...</div> : 
//         <Image src={imageInfo.file} />}
//       </MainContainer>
//       <Sidebar>
//         <ImageCollection>{imageInfo.collection}</ImageCollection>
//         <ImageTitle><i>{imageInfo.subtitle}</i></ImageTitle>
//         <ImageAuthorContainer>
//           <ImageBy>por </ImageBy>
//           <ImageAuthor><i>{imageInfo.author}</i></ImageAuthor>
//         </ImageAuthorContainer>
//         <ImageTagsContainer>
//           <ImageTagsName>tags:</ImageTagsName>
//           <ImageTags> <u>{imageInfo.tags}</u></ImageTags>
//         </ImageTagsContainer>
//       </Sidebar>
//     </Body>
//   )
}

export default ImageDetailsPage