import { useState } from 'react';
import PublicationContext from './PublicationContext';

const PublicationProvider = ({ children }) => {
  
  const initialValue = [
    {
      "id": 1,
      "title": "buscamos a Tina",
      "description": "estamos buscando a Tina",
      "ubication": "s.m de Tucuman",
      "category": "lost",
      "user": "lucianocolin"
    }, 
    {
      "id": 2,
      "title": "encontramos a Lola",
      "description": "la encontramos en Barrio Norte",
      "ubication": "s.m de Tucuman",
      "category": "found",
      "user": "jonyarriazu"
    },
    {
      "id": 3,
      "title": "Luna en adopción",
      "description": "Blanca, de tamaño pequeño, 2 años",
      "ubication": "s.m de Tucuman",
      "category": "adoption",
      "user": "braianjassan"
    }
  ]

  const [publications, setPublications] = useState(initialValue);
  const [CurrentPublication, setCurrentPublication] = useState({});
  const [CurrentEditPublication, setCurrentEditPublication] = useState({});

  const getPublication = (id) =>{
    initialValue.map((publication)=>{
      if(publication.id === id){
        setCurrentPublication(publication)
      }
  })
  };

  const getEditPublication = (id) =>{
    initialValue.map((publication)=>{
      if(publication.id === id){
        setCurrentEditPublication(publication)
      }
    })
  };
  
  return (
    <PublicationContext.Provider value={{
      publications,
      setPublications,
      CurrentPublication,
      setCurrentPublication,
      getPublication,
      CurrentEditPublication,
      setCurrentEditPublication,
      getEditPublication
    }}>
      {children}
    </PublicationContext.Provider>
  )
};

export default PublicationProvider