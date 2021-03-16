import React from 'react';
import './Navbar.scss';
import '../../App.scss';
import { Link } from "react-router-dom";
import men from '../../Image/MainPage/men.png'
import woomen from '../../Image/MainPage/woomen.jpg'
import children from '../../Image/MainPage/children.jpg'


function Navber_gender() {
    return (
        <div className="app-navbar_gender">
            <div className="container">
                <div className="app-navbar_gender__wrapper">
                    <div className="app-navbar_gender__intro">
                        <a href="#"
                            className="app-navbar_gender__link">
                            <img src={men}
                                className="app-navbar_gender__img-gender" />
                            <span className="app-navbar_gender__text-gender">
                                Мужчинам
                            </span>
                        </a>
                    </div>
                    <div className="app-navbar_gender__intro">
                        <a href="#"
                            className="app-navbar_gender__link">
                            <img src={woomen}
                                className="app-navbar_gender__img-gender" />
                            <span className="app-navbar_gender__text-gender">
                                Женщинам
                            </span>
                        </a>
                    </div>
                    <div className="app-navbar_gender__intro">
                        <a href="#"
                            className="app-navbar_gender__link">
                            <img src={children}
                                className="app-navbar_gender__img-gender" />
                            <span className="app-navbar_gender__text-gender">
                                Детям
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Navber_gender;
