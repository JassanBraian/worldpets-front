import { useReducer } from "react";
import CommentReducer from "./CommentReducer";
import CommentContext from "./CommentContext";
import { useEffect } from "react";
import clientAxios from "../../components/config/axios";
import {
    GET_COMMENT,
    GET_COMMENTS,
    CREATE_COMMENT,
    UPDATE_COMMENT,
    DELETE_COMMENT
} from "../../types/comment";

const CommentProvider = ({ children }) => {

    useEffect(() => {
        getCommnets();
    }, [])

    const initialState = {
        comments: []
    }
    const [state, dispatch] = useReducer(CommentReducer, initialState);

    const getCommnets = async () => {
        try {
            // const res = await clientAxios.get('/api/v1/comment');
            const res = await clientAxios.get('http://localhost:4000/api/v1/comment');
            res && dispatch({ type: GET_COMMENTS, payload: res.data.comments });
        } catch (error) {
            throw error;
        }
    }

    return (
        <CommentContext.Provider value={{
            ...state,
            getCommnets
        }}>
            {children}
        </CommentContext.Provider>
    );
};

export default CommentProvider;