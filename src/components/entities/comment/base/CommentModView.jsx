import React from 'react';
import { Modal, Form, Button, ButtonGroup } from 'react-bootstrap';

const CommentModView = ({ showModView, setShowModView, commentId }) => {

    const onSubmitSave = () => {

    }

    return (
        <>
            <Modal
                show={showModView}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton={() => { setShowModView(false) }}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Detail Comment
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter description" disabled />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Private</Form.Label>
                            <Form.Select disabled>
                                <option>True</option>
                                <option>False</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Publication</Form.Label>
                            <Form.Control type="text" disabled />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>User</Form.Label>
                            <Form.Control type="text" disabled />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <ButtonGroup>
                        <Button variant='success' onSubmit={onSubmitSave} disabled>Save</Button>
                        <Button variant='danger' onClick={() => setShowModView(false)}>Close</Button>
                    </ButtonGroup>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default CommentModView;