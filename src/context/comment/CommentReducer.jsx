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
        default:
            return state;
    }
};

export default CommentReducer;

