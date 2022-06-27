import { useContext } from 'react';
import { Table } from 'react-bootstrap';
import CommentFunc from './CommentFunc';
import CommentContext from '../../../../context/comment/CommentContext';

const CommentList = () => {
    const { comments } = useContext(CommentContext);

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
                                <td>{comment.isprivate ? 'Yes' : 'No'}</td>
                                <td>{comment.publication}</td>
                                <td>{comment.usersend}</td>
                                <td className='text-center'>
                                    {<CommentFunc commentId={comment._id} />}
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