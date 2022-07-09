import { useState } from 'react';
import PublicationContext from './PublicationContext';

const PublicationProvider = ({ children }) => {
  
  const initialValue = {
    publications: [],
  }

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