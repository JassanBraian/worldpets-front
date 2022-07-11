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
// import { profile } from "console";

const Header = () => {
  const {setPublicationSearch} = useContext(PublicationContext)
  const navigate = useNavigate();
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

// Search de navbar

const [searchText, setSearchText] = useState('')

const handleInput = (e) => {
  const text = e.target.value;
  setSearchText(text)
}

const handleEnterKeyPressed = (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    setPublicationSearch(searchText)
    navigate('/search-page')
  }
}


  return (
    <div className='header__top'>
      <div className='header_inner'>
        {sidebar && <Hamburger cancel={closeSideBar} />}

        <div className='left'>
          <img onClick={showSidebar} className='iconMenu' src={menuIcon} alt="menu"></img>
        </div>
        <div className="form-outline">
          <input 
            type="text" 
            placeholder="¿Que estas buscando?" 
            className="form-control"
            value={searchText} 
            onChange={handleInput}
            onKeyPress={handleEnterKeyPressed} />
        </div>
        <div className='center'></div>
        <SearchBar />
        <div className='right'>

          <Link to={"/CartPublications"}>
            <Cart />
          </Link>
          {showLogin &&
            <>
              <Link to={"/login"}>
                <button>Ingresá</button>
              </Link>
              <Link to={"/register"}>
                <button>Registrate</button>
              </Link>
            </>
          }
          {
            !showLogin && <Profile />
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
