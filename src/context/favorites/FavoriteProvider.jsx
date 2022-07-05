import { useReducer } from "react";
import FavoriteReducer from "./FavoriteReducer";
import FavoriteContext from "./FavoriteContext";
import { useEffect } from "react";
import clientAxios from "../../config/axios";
import { ADD_TO_FAVORITES, CLEAR_FAVORITES_LIST, REMOVE_FROM_FAVORITES, SET_FAVORITES} from "../../types/favorites/index"




const FavoriteProvider = ({children}) => {

    useEffect(() => {
        getFavorites();
    }, [])

    const initialState ={
        favorites: []
    } ;

   const [state, dispatch] = useReducer(FavoriteReducer, initialState);


   const getFavorites = async (userId) => {
    return dispatch({ type: SET_FAVORITES, payload: [1] });
    try {
        const res = await clientAxios.get(`http://localhost:4000/api/v1/users/${userId}/favorites`);
        res && dispatch({ type: SET_FAVORITES, payload: res.data.favorites });
    } catch (error) {
        throw error;
    }
}

   const addToFavorites = async (userId, postId)=>{
       return dispatch({type: ADD_TO_FAVORITES, payload: postId});
        try{
            await clientAxios.post(`http://localhost:4000/api/v1/users/${userId}/favorites`);
        } catch (error) {
            dispatch({type: REMOVE_FROM_FAVORITES, payload: postId})
        }
}

   const removeFromFavorites =  async (userId, postId) => {
       return dispatch({type: REMOVE_FROM_FAVORITES, payload: postId});
       try {
        const res = await clientAxios.delete(`http://localhost:4000/api/v1/users/${userId}/favorites/${postId}`);
        res && dispatch({ type: REMOVE_FROM_FAVORITES, payload: postId});
    } catch (error) {
        throw error;
    }
}
   
   const isFavorite = (userId, postId) => {
    return state.favorites.indexOf(postId) >= 0;
   };
   const clearFavorites = (userId)=>{dispatch({type: SET_FAVORITES, payload: []})};

  return (
    <FavoriteContext.Provider value={{
        ...state,
        getFavorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        clearFavorites
    }}>
        {children}
    </FavoriteContext.Provider>
  )
}


export default FavoriteProvider