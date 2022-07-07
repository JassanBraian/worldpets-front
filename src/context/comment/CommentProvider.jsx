import { useReducer, useEffect } from "react";
import CommentReducer from "./CommentReducer";
import CommentContext from "./CommentContext";
import clientAxios from "../../config/axios";
import {
    GET_COMMENT,
    GET_COMMENTS,
    GET_PUBLICOMMENTS,
    CREATE_COMMENT,
    UPDATE_COMMENT,
    DELETE_COMMENT
} from "../../types/comment";

const CommentProvider = ({ children }) => {

    const initialState = {
        comments: [],
        comment: {},
        publiComments: []
    }
    const [state, dispatch] = useReducer(CommentReducer, initialState);

    const getComments = async () => {
        try {
            // const res = await clientAxios.get('/api/v1/comment');
            const res = await clientAxios.get('http://localhost:4000/api/v1/comment');
            res && dispatch({ type: GET_COMMENTS, payload: res.data.comments });
        } catch (error) {
            throw error;
        }
    }

    const getComment = async commentId => {
        try {
            // const res = await clientAxios.get('/api/v1/comment');
            const res = await clientAxios.get(`http://localhost:4000/api/v1/comment/${commentId}`);
            res && dispatch({ type: GET_COMMENT, payload: res.data.comment });
        } catch (error) {
            throw error;
        }
    }

    const getCommentsByPubliId = async publiId => {
        try {
            // const res = await clientAxios.get('/api/v1/comment');
            const res = await clientAxios.get('http://localhost:4000/api/v1/comment', { publiId: publiId });
            res && dispatch({ type: GET_PUBLICOMMENTS, payload: res.data.comments });
        } catch (error) {
            throw error;
        }
    }

    const createComment = async comment => {
        try {
            // const res = await clientAxios.get('/api/v1/comment');
            const res = await clientAxios.post(`http://localhost:4000/api/v1/comment/`, comment);
            res && dispatch({ type: CREATE_COMMENT, payload: res.data.comment });
        } catch (error) {
            throw error;
        }
    }

    const updateComment = async comment => {
        try {
            // const res = await clientAxios.get('/api/v1/comment');
            const res = await clientAxios.put(`http://localhost:4000/api/v1/comment/${comment._id}`, comment);
            res && dispatch({ type: UPDATE_COMMENT, payload: res.data.comment });
        } catch (error) {
            throw error;
        }
    }

    const deleteComment = async commentId => {
        try {
            // const res = await clientAxios.get('/api/v1/comment');
            const res = await clientAxios.delete(`http://localhost:4000/api/v1/comment/${commentId}`);
            res && dispatch({ type: DELETE_COMMENT, payload: commentId });
        } catch (error) {
            throw error;
        }
    }

    return (
        <CommentContext.Provider value={{
            ...state,
            getComments,
            getComment,
            getCommentsByPubliId,
            createComment,
            updateComment,
            deleteComment
        }}>
            {children}
        </CommentContext.Provider>
    );
};

export default CommentProvider;