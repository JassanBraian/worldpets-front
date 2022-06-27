import {
    GET_COMMENT,
    GET_COMMENTS,
    CREATE_COMMENT,
    UPDATE_COMMENT,
    DELETE_COMMENT
} from "../../types/comment";

const CommentReducer = (state, action) => {
    switch (action.type) {
        case GET_COMMENTS:
            return {
                ...state,
                comments: action.payload,
            }
        case GET_COMMENT:
            return {
                ...state,
                comment: action.payload,
            }
        case CREATE_COMMENT:
            return {
                ...state,
                comments: [...state.comments, action.payload],
            }
        case UPDATE_COMMENT:
            return {
                ...state,
                comments: state.comments.map(comment => 
                    comment._id === action.payload._id ? action.payload : comment),
            }
        case DELETE_COMMENT:
            return {
                ...state,
                comments: state.comments.filter(comment => 
                    comment.id === action.payload_id),
            }
        default:
            return state;
    }
};

export default CommentReducer;

