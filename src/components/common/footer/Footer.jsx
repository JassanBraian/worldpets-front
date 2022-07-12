import "../../../css/common/footer/footer.css"
import facebook from "../../../assets/img/icons8-facebook-30.png";
import twitter from "../../../assets/img/icons8-twitter-30.png"
import insta from "../../../assets/img/icons8-instagram-30.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro, faDove, faF, faCopyright } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
    return (
        <>
            <div className='footer__top'>
                <div className='footer_inner'>
                    <div className='social__icons'>
                        <a href="https://www.facebook.com/">
                        <span className="icono">
                                <FontAwesomeIcon icon={faF} size="5x" />
                            </span>
                            {/* <img src={facebook} alt="facebook logo" /> */}
                        </a>
                        <a href="https://www.facebook.com/">
                        <span className="icono">
                                <FontAwesomeIcon icon={faDove} size="5x" />
                            </span>
                            {/* <img src={twitter} alt="facebook logo" /> */}
                        </a>
                        <a href="https://www.facebook.com/">
                            <span className="icono">
                                <FontAwesomeIcon icon={faCameraRetro} size="5x" />
                            </span>
                         {/* <img src={insta} alt="facebook logo" /> */}
                        </a>
                    </div>
                    <span>
                    <p className="derechos">
                    <FontAwesomeIcon icon={faCopyright} size="2x" />
                        Todos los derechos reservados
                    </p>
                    </span>
                </div>
            </div>
        </>
    );
};

export default Footer;