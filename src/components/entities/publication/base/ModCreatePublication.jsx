import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import '../../../../css/entities/admin/ModCreatePublication.css';
import { useState } from 'react';

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
      <form>
        <label htmlFor="title">Title</label>
          <input type="text" 
          name="tit" 
          id="tit"
          placeholder="Insert publication title..." />
        <label htmlFor="desc">Description</label>
          <textarea name="desc" 
          id="desc" 
          cols="10" 
          rows="8"
          placeholder="What's your publication about..."></textarea>
        <label htmlFor="ubi">Ubication</label>
          <input type="text" 
          name="ubi" 
          id='ubi'
          placeholder="Where are you publishing from?"/>
        <label htmlFor="cat">Category</label>
          <select name="cat" id="cat">
            <option value="lost">Lost</option>
            <option value="found">Found</option>
            <option value="adopt">Adoption</option>
          </select>
        <label htmlFor="user">User</label>
          <input type="text" 
          name="user" 
          id="user" 
          placeholder="Your username"/>
      </form>
    </Modal.Body>
    <Modal.Footer>
      <Button size='sm' onClick={props.onHide}>Close</Button>
      <Button size='sm' type='submit'>Submit</Button>
    </Modal.Footer>
  </Modal>
  )
}

export default ModCreatePublication;