import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import '../../../../css/entities/admin/ModCreatePublication.css';

const ModCreatePublication = (props) => {
  return (
    <Modal
    {...props}
    size="sm"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Add Publication
      </Modal.Title>
    </Modal.Header>
    <Modal.Body className='d-flex flex-column'>
      <label htmlFor="title">Title</label>
        <input type="text" name="tit" id='tit' />
      <label htmlFor="desc">Description</label>
        <textarea name="desc" id="desc" cols="10" rows="8"></textarea>
      <label htmlFor="ubi">Ubication</label>
        <input type="text" name="ubi" id='ubi'/>
      <label htmlFor="cat">Category</label>
        <select name="cat" id="cat">
          <option value="lost">Lost</option>
          <option value="found">Found</option>
          <option value="adopt">Adoption</option>
        </select>
      <label htmlFor="user">User</label>
        <input type="text" name="user" id="user" />
    </Modal.Body>
    <Modal.Footer>
      <Button size='sm' onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
  )
}

export default ModCreatePublication;