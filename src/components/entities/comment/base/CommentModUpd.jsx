import React from 'react';
import { Modal, Button, ButtonGroup, Form } from 'react-bootstrap';

const CommentModUpd = ({ showModUpd, setShowModUpd, commentId }) => {

    const onSubmitSave = () => {

    }

    return (
        <>
            <Modal
                show={showModUpd}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton={() => { setShowModUpd(false) }}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit Comment
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter description" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Private</Form.Label>
                            <Form.Select>
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
                        <Button variant='success' onSubmit={onSubmitSave}>Save</Button>
                        <Button variant='danger' onClick={() => setShowModUpd(false)}>Close</Button>
                    </ButtonGroup>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default CommentModUpd;