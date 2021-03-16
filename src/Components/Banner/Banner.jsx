import React from 'react';
import './Banner.scss';
import '../../App.scss';

import { Link } from "react-router-dom";

function Banner() {
    return (
        <div className="app-banner">
            <div className="app-banner__intro">
                <div className="app-banner__wrap">
                    <div className="app-banner__text">
                        <div className="app-banner__title">COME AND SEE</div>
                        <span className="app-banner__suptitle">We create delicious experiences</span>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Banner;
