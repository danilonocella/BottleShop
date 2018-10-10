import React from 'react';
import Logo from '../../img/logo-footer.png';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

class Footer extends React.Component {
    render() {
        return(

        <footer>
            <div className="container-fluid padding">
                <img
                    src={Logo}
                    alt="Logo"
                    className="navbar-logo"
                />    
                <div className="social-links">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"> <FaFacebook />  </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"> <FaInstagram />  </a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"> <FaYoutube />  </a>
                </div>
                <p>&copy; BottleShop.co 2018 All Rights Reserved</p>
            </div>
        </footer>            

        );
    }
}

export default Footer;