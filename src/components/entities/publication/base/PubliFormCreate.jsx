import React, { useState } from 'react';
import { ButtonGroup, Button, Form } from 'react-bootstrap';

const PubliFormCreate = () => {

    const initialState = {
        title: '',
        description: '',
        ubication: '',
        category: '',
        user: 0
    }
    const [formPubli, setFormPubli] = useState(initialState);
    const { title, description, ubication, category, user } = formPubli;

    const [error, setError] = useState([]);

    const handleOnChange = e => {
        setFormPubli({
            ...formPubli,
            [e.target.name]: [e.target.value]
        })
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        // importar PublicationContext y traer createPublication (metodo axios para post)
    }

    return (
        <>
            <Form className='formCreate'>
                <h2>Nueva publicación</h2>
                <Form.Group className="mb-3 mt-4">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        name="title"
                        type="text"
                        placeholder="Your title"
                        value={title}
                        onChange={handleOnChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        name="description"
                        type="textarea"
                        placeholder="What's your publication about..."
                        value={description}
                        onChange={handleOnChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Ubication</Form.Label>
                    <Form.Control
                        name="ubication"
                        type="text"
                        placeholder="Where are you publishing from?"
                        value={ubication}
                        onChange={handleOnChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Select
                        name="category"
                        value={category}
                    >
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
                        value={user}
                        onChange={handleOnChange} />
                </Form.Group>
                <div>
                    {
                        error && (<p className='errorMsg'>{error}</p>)
                    }
                </div>
                <ButtonGroup>
                    <Button
                        variant='success'
                        className='btnSave'
                        onClick={handleOnSubmit}
                    >Save</Button>
                </ButtonGroup>
            </Form>
        </>
    );
};

export default PubliFormCreate;