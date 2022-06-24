import React from 'react';
import { Modal, Button, ButtonGroup } from 'react-bootstrap';

const CommentModDel = ({ showModDel, setShowModDel, commentId }) => {

    const handleConfirmDelete = () => {

    }

    return (
        <>
            <Modal show={showModDel}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Comment</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Are you sure to delete this Comment?</p>
                </Modal.Body>

                <Modal.Footer>
                    <ButtonGroup>
                        <Button
                            variant="danger"
                            onClick={handleConfirmDelete}
                        >Delete</Button>
                        <Button
                            variant="secondary"
                            onClick={() => setShowModDel(false)}
                        >Close</Button>
                    </ButtonGroup>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default CommentModDel;