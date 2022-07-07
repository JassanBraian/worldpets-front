import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import { useState, useContext, useEffect } from 'react';
import PublicationContext from '../../../../context/publication/PublicationContext';

const ModEditPublication = ({ show, onHide }) => {

  const { CurrentEditPublication } = useContext(PublicationContext);

  const initialFormValues = {
    title: '',
    description: '',
    ubication: '',
    category: '',
    user: ''
  }
  
  const [ form, setForm ] = useState(initialFormValues);

  const [ error, setError ] = useState(null);
  
  const handleChange = e => {
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
    setError(null);
    setForm(initialFormValues);
    };

    useEffect(()=>{
      setForm(CurrentEditPublication)
    }, [CurrentEditPublication]);

  return (
    <Modal
      show={show}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Publication
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
              onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control 
              name="description"
              type="text" 
              placeholder="What's your publication about..." 
              value={form.description} 
              onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3">
              <Form.Label>Ubication</Form.Label>
              <Form.Control 
              name="ubication"
              type="text" 
              placeholder="Where are you publishing from?" 
              value={form.ubication} 
              onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                name="category"
                onChange={handleChange}
                value={form.category} >
                  <option value={'missing'}>Missing</option>
                  <option value={'found'}>Found</option>
                  <option value={'up for adoption'}>Up for adoption</option>
              </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
              <Form.Label>User</Form.Label>
              <Form.Control
              name="user"
              type="text" 
              value={form.user} 
              onChange={handleChange}/>
          </Form.Group>
          <div>
            {
              error && (<p className='errorMsg'>{error}</p>)
            }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button size='sm' variant='danger' onClick={onHide}>Close</Button>
          <Button size='sm' type='submit'>Change and Send</Button>
        </Modal.Footer>
      </Form>
   </Modal>
  )
}

export default ModEditPublication;