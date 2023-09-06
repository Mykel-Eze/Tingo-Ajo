import { Link } from 'react-router-dom';

import "../assets/css/footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="container flex-div justify-content-btw">
                <div className="footer-desc flex-1">
                    <div>
                        <Link to={"/"}>
                            <img src={require("../assets/images/ajoafricalogo.png")} alt="Ajo" className="footer-logo" />
                        </Link>
                        <div className="footer-desc-txt">
                            Ajö is a loan offering platform that offers a wide range of features to enhance your
                            financial freedom. 
                        </div>
                    </div>
                </div>

                <div className="footer-links-wrapper flex-1 justify-content-btw">
                    <div className="footer-link-block">
                        <div className="footer-link-title">Company</div>
                        <ul>
                            <li>
                                <Link to={"/"}>About Us</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Blog</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Media</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Careers</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-link-block">
                        <div className="footer-link-title">Support</div>
                        <ul>
                            <li>
                                <Link to={"/"}>Terms of Use</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-link-block">
                        <div className="footer-link-title">Contact Us</div>
                        <ul>
                            <li>
                                <a href="mailto:customercare@tingomobile.com.ng">customercare@tingomobile.com.ng</a>
                            </li>
                            <li>
                                <a href="tel:+2348094234567">+234 809 423 4567</a>
                            </li>
                            <li>
                                <span>95 Broad Street, Lagos Island, Lagos</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container copyright-social-wrapper flex-div justify-content-btw">
                <span> © Tingo Group 2023</span>
                <div className="social-icons-wrapper">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={require("../assets/images/instagram.svg").default} alt="instagram" className="social-icon" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src={require("../assets/images/twitter.svg").default} alt="twitter" className="social-icon" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src={require("../assets/images/linkedin.svg").default} alt="linkedin" className="social-icon" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={require("../assets/images/facebook.svg").default} alt="facebook" className="social-icon" />
                    </a>
                </div>
            </div>

            <div className="container footer-country">
                <div className="flex-div">
                    <img src={require("../assets/images/Nigeria.svg").default} alt="Nigeria" className="country-flag" />
                    <span>Nigeria</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;