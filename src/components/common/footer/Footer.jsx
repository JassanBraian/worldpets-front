import "../../../css/common/footer/footer.css"
import facebook from "../../../assets/img/icons8-facebook-30.png";
import twitter from "../../../assets/img/icons8-twitter-30.png"
import insta from "../../../assets/img/icons8-instagram-30.png";

const Footer = () => {
    return (
        <>
            <div className='footer__top'>
                <div className='footer_inner'>
                    <div className='social__icons'>
                        <a href="https://www.facebook.com/">
                            <img src={facebook} alt="facebook logo" />
                        </a>
                        <a href="https://www.facebook.com/">
                            <img src={twitter} alt="facebook logo" />
                        </a>
                        <a href="https://www.facebook.com/">
                            <img src={insta} alt="facebook logo" />
                        </a>
                    </div>
                    <p>All rights reserved</p>
                </div>
            </div>
        </>
    );
};

export default Footer;