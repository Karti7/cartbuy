import React from 'react';
import './styles.scss';
import logo from './../../assets/logo.jpg';
import { Link } from 'react-router-dom';

const Header = props => {
    return (
        <div className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to="/">
                        <img style={{ height: "50px", width: "50px" }} src={logo} alt="logo"></img>
                    </Link>
                </div>
            </div>
            <div className="callToAction">
                <ul>
                    <li>
                        <Link to="/registration">
                            Register
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Header;