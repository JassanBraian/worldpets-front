import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import CommentFunc from './CommentFunc';

const CommentList = () => {

    const initialValue = {
        id: 0,
        description: '',
        isprivate: '',
        publication: 0,
        usersend: 0
    }

    const [comments, setComments] = useState([initialValue]);

    useEffect(() => {
        const comment1 = {
            id: 1,
            description: 'asd',
            isprivate: 'asd',
            publication: 1,
            usersend: 1
        };
        const comment2 = {
            id: 2,
            description: 'asd',
            isprivate: 'asd',
            publication: 2,
            usersend: 2
        };

        setComments([...comments, comment1, comment2]);

    }, [])

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Description</th>
                        <th>Private</th>
                        <th>Publication</th>
                        <th>User</th>
                        <th className='text-center'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        comments.map((comment, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{comment.description}</td>
                                <td>{comment.isprivate}</td>
                                <td>{comment.publication}</td>
                                <td>{comment.usersend}</td>
                                <td className='text-center'>
                                    {<CommentFunc commentId={comment.id}/>}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    );
};

export default CommentList;