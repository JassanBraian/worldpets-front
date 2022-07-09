import { useContext } from "react";
import FavoriteContext from "../../../context/favorites/FavoriteContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import '../../../css/entities/favorites/favoriteList.css'

const FavoriteListItem = ({data}) => {
  const {removeFromFavorites } = useContext(FavoriteContext);
  console.log(data)
  let{_id, user, publication, petName, petDescription} = data;
  return (
    <div className="listItemContainer">
        <h3>{_id}Id de la publicacion</h3>
        <p>{user}id del Usuario</p>
        <p>{publication}id del Post</p>
        
        <button className="removeBtn" onClick={() => removeFromFavorites(_id)}>
            <FontAwesomeIcon icon={faTrashCan} />
        </button>
        
    </div>
  )
}

export default FavoriteListItem