import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import CommentModDel from './CommentModDel';
import CommentModUpd from './CommentModUpd';
import CommentModView from './CommentModView';

const CommentFunc = ({ commentId }) => {

    const [showModView, setShowModView] = useState(false);
    const [showModUpd, setShowModUpd] = useState(false);
    const [showModDel, setShowModDel] = useState(false);

    return (
        <>
            <ButtonGroup>
                <Button
                    variant="info"
                    onClick={() => setShowModView(true)}
                >Detail</Button>
                <Button
                    variant="warning"
                    onClick={() => setShowModUpd(true)}
                >Edit</Button>
                <Button
                    variant="danger"
                    onClick={() => setShowModDel(true)}
                >Delete</Button>
            </ButtonGroup>

            <CommentModView
                showModView={showModView}
                setShowModView={setShowModView}
                commentId={commentId}
            />

            <CommentModUpd
                showModUpd={showModUpd}
                setShowModUpd={setShowModUpd}
                commentId={commentId}
            />

            <CommentModDel
                showModDel={showModDel}
                setShowModDel={setShowModDel}
                commentId={commentId}
            />
        </>
    );
};

export default CommentFunc;