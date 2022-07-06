import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModDeletePublication = ({ show, onHide }) => {
  return (
      <Modal 
      show={show} 
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        {<Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>}

        <Modal.Body>
          <p>¿Seguro que desea eliminar esta publicación?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>Cerrar</Button>
          <Button variant="primary">Eliminar</Button>
        </Modal.Footer>
      </Modal>
  )
}

export default ModDeletePublication