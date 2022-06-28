import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import '../../../../css/entities/admin/ModCreatePublication.css';
import { useState } from 'react';

const ModCreatePublication = (props) => {

  const initialFormValues = {
    title: '',
    description: '',
    ubication: '',
    user: ''
  }
  
  const [ form, setForm ] = useState(initialFormValues);

  const [ error, setError ] = useState(null);

  const handeChange = e => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
    });
  };

  const handleSubmit = e =>{
    e.preventDefault();
    if(form.title === '' || form.description === '' || form.ubication === '' || form.user === ''){
      setError('Todos los campos son obligatorios');
      return;
    }
    console.log('enviando', form);
    setError(null);
    setForm(initialFormValues);
  };

  return ( <>
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
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control 
              name="title"
              type="text" 
              placeholder="Your title" 
              value={form.title} 
              onChange={handeChange}/>
          </Form.Group>
          <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control 
              name="description"
              type="text" 
              placeholder="What's your publication about..." 
              value={form.description} 
              onChange={handeChange}/>
          </Form.Group>
          <Form.Group className="mb-3">
              <Form.Label>Ubication</Form.Label>
              <Form.Control 
              name="ubication"
              type="text" 
              placeholder="Where are you publishing from?" 
              value={form.ubication} 
              onChange={handeChange}/>
          </Form.Group>
          <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select>
                  <option>Lost</option>
                  <option>Found</option>
                  <option>Adoption</option>
              </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
              <Form.Label>User</Form.Label>
              <Form.Control
              name="user"
              type="text" 
              value={form.user} 
              onChange={handeChange}/>
          </Form.Group>
          <div>
            {
              error && (<p className='errorMsg'>{error}</p>)
            }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button size='sm' variant='danger' onClick={props.onHide}>Close</Button>
          <Button size='sm' type='submit'>Send</Button>
        </Modal.Footer>
      </Form>
   </Modal>
  </>
  )
}

export default ModCreatePublication;