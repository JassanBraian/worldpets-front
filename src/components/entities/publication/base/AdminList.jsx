import { Button } from 'react-bootstrap';
import React from 'react';
import PublicationContext from '../../../../context/publication/PublicationContext';
import { useContext } from 'react';
import '../../../../css/entities/admin/AdminList.css';

const AdminList = ({ data, editModal, viewModal, deleteConfirmModal }) => {

  const { getPublication, getEditPublication } = useContext(PublicationContext)

  return (
    <>
          <tr>
            <td>{data.id}</td>
            <td>{data.title}</td>
            <td>{data.description}</td>
            <td>{data.ubication}</td>
            <td>{data.category}</td>
            <td>{data.user}</td>
            <td className='d-flex adminData'>
              <Button 
              variant='warning' 
              size='sm'
              onClick={()=>{
                getPublication(data.id);
                viewModal();
              }}
              >Open</Button>
              <Button 
              size='sm'
              onClick={()=> {
                getEditPublication(data.id)
                editModal();
                }}>Editar</Button>
              <Button 
              variant='danger' 
              size='sm' 
              onClick={()=>{
                deleteConfirmModal();
                }}>Eliminar</Button>
            </td>
          </tr>
    </>
  )
}

export default AdminList