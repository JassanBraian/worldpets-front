
import FavoriteListItem from './FavoriteListItem'
import { useContext } from "react";
import FavoriteContext from "../../../context/favorites/FavoriteContext";


const FavoriteList = () => {
    const {favorites, removeFromFavorites, clearFavorites } = useContext(FavoriteContext);
  return (
    <div>
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Mis Favoritos
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {
                    favorites.map((item, index) =>
                     <li>
                        {console.log(item)}
                        <FavoriteListItem key={index} data={item} />
                    </li>)
                }
                
            </ul>
            <button onClick={clearFavorites}>Limpiar mi lista de favoritos</button>
        </div>
    </div>
  )
}

export default FavoriteList;