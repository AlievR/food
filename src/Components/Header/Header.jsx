import React from 'react';
import './Header.scss';
import '../../App.scss';

import { Link, animateScroll as scroll } from "react-scroll";

function Header() {
    return (
        <div className="app-header">
            <div className="container">
                <div className="app-header__inner">

                    <Link
                        to="/mainPage"
                        className="app-header__logo">
                        Arda
                    </Link>

                    <nav className="app-header__links">
                        <Link
                            className="app-header__link-active"
                            to="/About">
                            Главная
                        </Link>
                        <Link
                            className="app-header__link"
                            to="/About">
                            О нас
                        </Link>
                        <Link
                            className="app-header__link"
                            to="/">
                            Меню
                        </Link>
                        <Link
                            className="app-header__link"
                            activeClass="active"
                            to="commands"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Команда
                        </Link>
                        <Link
                            className="app-header__link"
                            to="/Basket">
                            Галлерея
                        </Link>
                        <Link
                            className="app-header__link"
                            to="/Basket">
                            контакты
                        </Link>
                    </nav>
                    <Link
                        className="app-header__basket"
                        to="/Basket">
                        <span className="app-header__basket-text"> Корзина</span>
                        <div className="app-header__basket-icon" />
                    </Link>
                </div>

            </div>
        </div >
    );
}

export default Header;
