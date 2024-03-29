import { useState, useEffect, useContext } from "react";
import menuIcon from "../../../assets/img/menu_FILL0_wght300_GRAD0_opsz24.svg";
import '../../../css/common/header/header.css';
import { Link } from "react-router-dom";
import Cart from "./cart/Cart";
import Profile from "./profile/Profile";
import Hamburger from "./hamburger/Hamburger";
import PublicationContext from "../../../context/publication/PublicationContext";
import SearchBar from "./searchbar/SearchBar";
import { useNavigate } from "react-router-dom";
import FavoriteList from "../../entities/favorites/FavoriteList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
// import { profile } from "console";

const Header = () => {  
  //   show login signup and profile 

  const [showLogin, setIsShowLogin] = useState(true);

  //  const loginButtonHndler = () => {
  //    setIsShowLogin(false)
  //  }
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const closeSideBar = () => {
    setSidebar(false);
  }

  return (
    <div className='header__top container-fluid'>
      <div className='header_inner'>
        {sidebar && <Hamburger cancel={closeSideBar} />}

        <div className='left'>
          <span onClick={showSidebar} className='iconMenu' >
          <FontAwesomeIcon icon={faPaw} size="3x" />
          </span>
        </div>
        
        <div className='center'></div>
        <SearchBar />
        <div className='right'>
          
          

          {/* <Link to={"/CartPublications"}>
            <Cart />
          </Link> */}
          {showLogin &&
            <>
            <FavoriteList/>
              <Link to={"/login"}>
                <button>Ingresá</button>
              </Link>
              <Link to={"/register"}>
                <button>Registrate</button>
              </Link>

            </>
          }
          {
            !showLogin &&
            <>
            <FavoriteList/>
            <Profile />
            </>
            
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
