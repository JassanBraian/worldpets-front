//HOOKS
import { useState, useEffect } from 'react';
// COMPONENTS
import { Button } from 'react-bootstrap';
import React from 'react'
import AdminList from '../components/entities/publication/base/AdminList'
import ModCreatePublication from '../components/entities/publication/base/ModCreatePublication';
// CSS
import '../css/entities/admin/PublicationsPage.css';


const PublicationsPage = () => {
  
  const [modalOpen, setModalOpen] = useState(false);
  
  const API_URL = 'http://localhost:4000/publications';
  const [ publications, setPublications ] = useState([])

  const getPublications = async () =>{
    const response = await fetch(API_URL);
    const data = await response.json();
    setPublications(data);
  };

  useEffect(()=>{
    getPublications();
  }, [])

  return (<>
      <Button size='sm' className="addBtn" onClick={() => setModalOpen(true)}>
        Add Publication
      </Button>
    
        {
          publications.map((publication) => (
            <AdminList key={publication.id} data={publication} />
          ))
        }
      
      <ModCreatePublication
        show={modalOpen}
        onHide={() => setModalOpen(false)}/>
    </>
  )
}

export default PublicationsPage;