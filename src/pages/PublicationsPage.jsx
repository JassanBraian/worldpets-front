//HOOKS
import { useContext } from 'react';
import { useState } from 'react';
// COMPONENTS
import { Button, Table } from 'react-bootstrap';
import React from 'react'
import AdminList from '../components/entities/publication/base/AdminList'
import ModViewPublication from '../components/entities/publication/base/ModViewPublication';
import ModEditPublication from '../components/entities/publication/base/ModEditPublication';
import PublicationContext from '../context/publication/PublicationContext';
// CSS
import '../css/entities/admin/PublicationsPage.css';
import ModDeletePublication from '../components/entities/publication/base/ModDeletePublication';



const PublicationsPage = () => {
  
  const { publications } = useContext(PublicationContext)
 
  const [modalOpen, setModalOpen] = useState(false);

  const [editModalOpen, setEditModalOpen] = useState(false);

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);


  const openViewModal = () =>{
    setModalOpen(true);
  }
  
  const openEditModal = () =>{
    setEditModalOpen(true);
  }
  
  const openDeleteModal = () =>{
    setDeleteModalOpen(true);
  }
  
  return (<>
      <Button size='lg' className="addBtn" onClick={() => setModalOpen(true)}>
        Add Publication
      </Button>

      <Table size='sm' className="table-bordered border-dark">
        <thead className="table-dark text-center">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Ubication</th>
            <th scope="col">Category</th>
            <th scope="col">User</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
            {
              publications.map((element, index) => (
                <AdminList key={index} 
                data={element} 
                editModal={openEditModal}
                viewModal={openViewModal}
                deleteConfirmModal={openDeleteModal}
                />
              ))
            }
        </tbody>
      </Table>

      <ModViewPublication
        show={modalOpen}
        onHide={() => setModalOpen(false)}/>
      
      <ModEditPublication 
        show={editModalOpen}
        onHide={()=> setEditModalOpen(false)}/>

      <ModDeletePublication
        show={deleteModalOpen}
        onHide={()=> setDeleteModalOpen(false)}/>
    </>
  )
}

export default PublicationsPage;