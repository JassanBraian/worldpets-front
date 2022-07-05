import { useContext } from "react";
import FavoriteContext from "../../../context/favorites/FavoriteContext";

const FavoriteListItem = ({data}) => {
  const {removeFromFavorites } = useContext(FavoriteContext);
  console.log(data)
  let{id, userId, postId, petName, petDescription} = data;
  return (
    <div>
        <h3>{id}Id de la publicacion</h3>
        <h4>{userId}id del Usuario</h4>
        <h4>{postId}id del Post</h4>
        
        <button onClick={() => removeFromFavorites(id)}>Eliminar de mis favoritos</button>

    </div>
  )
}

export default FavoriteListItem