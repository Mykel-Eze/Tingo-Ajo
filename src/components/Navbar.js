import { Link } from 'react-router-dom';

import "../assets/css/navbar.css"

const Navbar = () => {
    return (
        <nav>
            <div className="container flex-div justify-content-btw">
                <div className="brand-logo-wrapper">
                    <Link to="/">
                        <img src={require("../assets/images/Ajo-logo.svg").default} alt="Ajo" />
                    </Link>
                </div>

                <div className="nav-link-wrapper">
                    <ul className="hidden-xs">
                        <li>
                            <a href="/#how-it-works">How it works</a>
                        </li>
                        <li>
                            <Link to={"/contact-us"}>
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <div className="flex-div nav-country">
                                <img src={require("../assets/images/Nigeria.svg").default} alt="Nigeria" />
                                <span>NIGERIA</span>
                            </div>
                        </li>
                    </ul>

                    <div className="visible-xs">
                        <img src={require("../assets/images/menu.svg").default} alt="menu" className="menu-trigger" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;