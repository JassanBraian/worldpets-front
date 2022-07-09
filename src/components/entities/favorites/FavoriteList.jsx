
import FavoriteListItem from './FavoriteListItem'
import { useContext } from "react";
import { useState } from 'react';
import FavoriteContext from "../../../context/favorites/FavoriteContext";
import '../../../css/entities/favorites/favoriteList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

const FavoriteList = () => {
    const [isActive, setIsActive] = useState(false);
    // const handleOnClick = e => {
    //     getFavorites()
    // }

  const {favorites, clearFavorites, getFavorites} = useContext(FavoriteContext);
  return (
    <div className="dropdown">
        <button className="dropdown-btn" onClick={(e) =>{ 
                setIsActive(!isActive)
                getFavorites()
        }}
                >
            <span>
                <FontAwesomeIcon icon={faStar} size="1x" />
                Mis Favoritos
            </span>
            </button>
        {isActive && (
        <div className="dropdown-content">
        <ul>
                {
                    favorites.map((item, index) =>
                     <li className='dropdown-item'>
                        <FavoriteListItem key={index} data={item} />
                    </li>)
                 }
                
            <button onClick={clearFavorites}>Limpiar mi lista de favoritos</button>
        </ul>

        </div>
        )}
    </div>
    // <div>
    //     <div className="dropdown">
    //         <button className=" dropdown-toggle favoriteListBtn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" onClick={handleOnClick}>
    //         <FontAwesomeIcon icon={faStar} size="1x" />
    //             Mis Favoritos
    //         </button>
    //         <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    //             {
    //                 favorites.map((item, index) =>
    //                  <li className='listItem'>
    //                     <FavoriteListItem key={index} data={item} />
    //                 </li>)
    //             }
                
    //         <button onClick={clearFavorites}>Limpiar mi lista de favoritos</button>
    //         </ul>
    //     </div>
    // </div>
  )
}

export default FavoriteList;