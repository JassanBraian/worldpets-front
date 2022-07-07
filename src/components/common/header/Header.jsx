import { useState } from "react";
import menuIcon from "../../../assets/img/menu_FILL0_wght300_GRAD0_opsz24.svg";
import '../../../css/common/header/header.css';
import { Link } from "react-router-dom";
import Cart from "./cart/Cart";
import Profile from "./profile/Profile";
import Hamburger from "./hamburger/Hamburger";
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
    <div className='header__top'>
      <div className='header_inner'>
        {sidebar && <Hamburger cancel={closeSideBar} />}

        <div className='left'>
          <img onClick={showSidebar} className='iconMenu' src={menuIcon} alt="menu"></img>
        </div>
        <div className='center'></div>
        <div className='right'>
          <Link to={"/cartproduct"}>
            <Cart />
          </Link>
          {showLogin &&
            <>
              <Link to={"/login"}>
                <button>Login</button>
              </Link>
              <Link to={"/register"}>
                <button>Sign up</button>
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