import { useState } from 'react';
import PublicationContext from './PublicationContext';
import clientAxios from '../../config/axios';

const PublicationProvider = ({ children }) => {
  
  const initialValue = {
    publications: [],
    publication: {},
    publicationSearch: "",
    filteredData: []
/*     publicationResults: [] */
  }

  const [values, setValues] = useState(initialValue);

  const getPublications = async () => {
    try {
        const res = await clientAxios.get('http://localhost:4000/api/v1/publication');
        res && setValues({ ...values, publications: res.data.publications });
    } catch (error) {
        throw error;
    }
  }

  const setPublicationSearch = title => {
    setValues({...values, publicationSearch: title})
  }

  const setFilteredData = filtered => {
    setValues({ ...values, filteredData: filtered })
  }

  /* const setSearchResults = results => {
    setValues({...values, publicationResults: results })
  } */

  const getPublication = async publicationId => {
    try {
        const res = await clientAxios.get(`http://localhost:4000/api/v1/publication/${publicationId}`);
        res && setValues({ ...values, publication: res.data.publication });
    } catch (error) {
        throw error;
    }
  }

  const updatePublication = async publication => {
    try {
        const res = await clientAxios.put(`http://localhost:4000/api/v1/publication/${publication._id}`, publication);
        res && await getPublications();
    } catch (error) {
        throw error;
    }
  }

  const deletePublication = async publicationId => {
    try {
        const res = await clientAxios.delete(`http://localhost:4000/api/v1/publication/${publicationId}`);
        res && await getPublications();
    } catch (error) {
        throw error;
    }
}
  
  return (
    <PublicationContext.Provider value={{
      ...values,
      getPublications,
      getPublication,
      updatePublication,
      deletePublication,
      setPublicationSearch,
      setFilteredData
/*       setSearchResults */
    }}>
      {children}
    </PublicationContext.Provider>
  )
};

export default PublicationProvider