import React, { useEffect, useState, useContext } from 'react';
import { Modal, Form, Button, ButtonGroup } from 'react-bootstrap';
import CommentContext from '../../../../context/comment/CommentContext';

const CommentModUpd = ({ showModUpd, setShowModUpd }) => {

    const { comment, updateComment } = useContext(CommentContext);

    const initialValue = {
        description: '',
        isprivate: false,
        publication: 0,
        usersend: 0
    }
    const [formComment, setFormComment] = useState(initialValue);
    const { description, isprivate, publication, usersend } = formComment;

    useEffect(() => {
        Object.keys(comment).length > 0
            && setFormComment(comment);
    }, [comment]);

    const handleOnSubmit = e => {
        e.preventDefault();
        updateComment(formComment);
        setShowModUpd(false);
    }

    const handleOnChange = e => {
        setFormComment({
            ...formComment,
            [e.target.name]: e.target.value
        });
    }

    return (
        <>
            <Modal
                show={showModUpd}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit Comment
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                name="description"
                                type="text"
                                placeholder="Enter description"
                                value={description}
                                onChange={handleOnChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Private</Form.Label>
                            <Form.Select
                                name="isprivate"
                                value={isprivate}
                                onChange={handleOnChange}
                            >
                                <option value={true}>True</option>
                                <option value={false}>False</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Publication</Form.Label>
                            <Form.Control
                                name="publication"
                                type="text"
                                value={publication}
                                disabled />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>User</Form.Label>
                            <Form.Control
                                name="usersend"
                                type="text"
                                value={usersend}
                                disabled />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <ButtonGroup>
                        <Button variant='success' onClick={handleOnSubmit}>Save</Button>
                        <Button variant='danger' onClick={() => setShowModUpd(false)}>Close</Button>
                    </ButtonGroup>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default CommentModUpd;