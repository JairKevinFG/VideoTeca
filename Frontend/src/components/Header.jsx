 import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo.png';
import user from '../assets/static/user.png';
 import {Link} from "react-router-dom";

const Header = () =>
    (<header className="header">
            <Link to="/">
                <img className="header__img" src={logo} alt="" />
            </Link>
            <div className="header__menu">
                <div className="header__menu--profile">
                    <img src={user} alt="" />
                    <p>Perfil</p>
                </div>
                <ul>
                    <li>
                        <Link to="/">
                            Cuenta
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            Iniciar sesión
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
);


export default Header;

