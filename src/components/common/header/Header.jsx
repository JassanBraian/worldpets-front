import { useState, useContext } from "react";
import menuIcon from "../../../assets/img/menu_FILL0_wght300_GRAD0_opsz24.svg";
import '../../../css/common/header/header.css';
import { Link } from "react-router-dom";
import Cart from "./cart/Cart";
import Profile from "./profile/Profile";
import Hamburger from "./hamburger/Hamburger";
import SearchBar from "./searchbar/SearchBar";
import AuthContext from "../../../context/auth/AuthContext";
// import { profile } from "console";

const Header = () => {

  //   show login signup and profile 

  const { logout, isAuth } = useContext(AuthContext);
  const [showLogin, setIsShowLogin] = useState(!isAuth);
  const loginButtonHandler = () => {
    setIsShowLogin(!showLogin)
    logout()
  }
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const closeSideBar = () => {
    setSidebar(false);
  }

  return (
    <div className='header__top'>
      <div className='header_inner'>
        {sidebar && <Hamburger cancel={closeSideBar} />}

        <div className='left'>
          <img onClick={showSidebar} className='iconMenu' src={menuIcon} alt="menu"></img>
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
            !showLogin && <Profile loginButtonHandler={loginButtonHandler} />
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
