import React from 'react';
import './Comands.scss';
import '../../App.scss';

import artem from '../../Image/Comands/Artem.jpg'
import ruslan from '../../Image/Comands/Ruslan.jpg'
import denis from '../../Image/Comands/Denis.jpg'
import anton from '../../Image/Comands/Anton.jpg'



import { Link } from "react-router-dom";

function Comands() {
    return (
        <div className="app-comands" id="commands">
            <div className="app-comands__intro">
                <div className="container">
                    <div className="app-comands__text">
                        <span className="app-comands__title">
                            Наша команда
                        </span>

                    </div>
                    <div className="app-comands__cards">
                        <div className="app-comands__card">
                            <img
                                className="app-comands__card-img"
                                src={artem} />
                            <div className="app-comands__atributs">
                                <div className="app-comands__name"> Артем Коннов </div>
                                <div className="app-comands__position"> Сомелье </div>
                                <div className="app-comands__lost">
                                    <Link className="app-comands__social">
                                        <i class="fab fa-facebook-f" />
                                    </Link>
                                    <Link className="app-comands__social">
                                        <i class="fab fa-instagram" />
                                    </Link>
                                    <Link className="app-comands__social">
                                        <i class="fab fa-vk" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="app-comands__card">
                            <img
                                className="app-comands__card-img"
                                src={ruslan} />
                            <div className="app-comands__atributs">
                                <div className="app-comands__name"> Руслан Алиев </div>
                                <div className="app-comands__position"> Директор </div>
                                <div className="app-comands__lost">
                                    <Link className="app-comands__social">
                                        <i class="fab fa-facebook-f" />
                                    </Link>
                                    <Link className="app-comands__social">
                                        <i class="fab fa-instagram" />
                                    </Link>
                                    <Link className="app-comands__social">
                                        <i class="fab fa-vk" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="app-comands__card">
                            <img
                                className="app-comands__card-img"
                                src={denis} />
                            <div className="app-comands__atributs">
                                <div className="app-comands__name"> Денис Пантич </div>
                                <div className="app-comands__position"> Шеф-повар </div>
                                <div className="app-comands__lost">
                                    <Link className="app-comands__social">
                                        <i class="fab fa-facebook-f" />
                                    </Link>
                                    <Link className="app-comands__social">
                                        <i class="fab fa-instagram" />
                                    </Link>
                                    <Link className="app-comands__social">
                                        <i class="fab fa-vk" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="app-comands__card">
                            <img
                                className="app-comands__card-img"
                                src={anton} />
                                <div className="app-comands__atributs">
                                <div className="app-comands__name"> Антон Дорожко </div>
                                <div className="app-comands__position"> Кондитер </div>
                                <div className="app-comands__lost">
                                    <Link className="app-comands__social">
                                        <i class="fab fa-facebook-f" />
                                    </Link>
                                    <Link className="app-comands__social">
                                        <i class="fab fa-instagram" />
                                    </Link>
                                    <Link className="app-comands__social">
                                        <i class="fab fa-vk" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Comands;
